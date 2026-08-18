<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from '#imports'
import { VERT, FRAG } from '~/shaders/portal'
import { useShaderState } from '~/composables/useShaderState'

/**
 * The portal ground: one fullscreen WebGL fragment shader, no library.
 * Domain-warped fbm builds the liquid sheen; a warped grid supplies the
 * vector-mesh material; incandescent is reserved for the sharpest crests.
 *
 * Honesty about cost: this field is `fixed inset-0`, so it is ALWAYS in the
 * viewport — an IntersectionObserver pause here would never fire, and claiming
 * one would be a comfort, not a guard. The real guards are: a DPR cap that
 * drops to 1 on phones, a pause when the tab is hidden, frame-rate-adaptive
 * downscaling when the GPU cannot keep up, a context-loss handler, a single
 * held frame under reduced-motion, and a painted CSS ground when WebGL is
 * absent — never a black rectangle.
 */
const props = withDefaults(
  defineProps<{
    /** Scales how much incandescent reaches the crests. */
    intensity?: number
  }>(),
  { intensity: 1 }
)

const emit = defineEmits<{ ready: [] }>()

const telemetry = useShaderState()

const host = ref<HTMLElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)
const failed = ref(false)


let gl: WebGLRenderingContext | null = null
let raf = 0
let start = 0
let running = false
let visible = true
let reduced = false
let uRes: WebGLUniformLocation | null = null
let uTime: WebGLUniformLocation | null = null
let uMouse: WebGLUniformLocation | null = null
let uIntensity: WebGLUniformLocation | null = null
let readyEmitted = false

const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 }
let ro: ResizeObserver | null = null

/** Resolution scale, lowered when the GPU cannot hold the frame budget. */
let scale = 1
let slowFrames = 0
let lastFrame = 0
let lastPublish = 0
let frameCount = 0
let fpsWindow = 0

const compile = (ctx: WebGLRenderingContext, type: number, src: string) => {
  const sh = ctx.createShader(type)
  if (!sh) return null
  ctx.shaderSource(sh, src)
  ctx.compileShader(sh)
  if (!ctx.getShaderParameter(sh, ctx.COMPILE_STATUS)) {
    ctx.deleteShader(sh)
    return null
  }
  return sh
}

const resize = () => {
  const el = canvas.value
  if (!el || !gl) return
  // Small screens pay the real cost of a fullscreen shader, so they get a
  // harder cap. The field still runs; it just stops rendering pixels nobody
  // can resolve on a phone.
  const cap = window.innerWidth < 768 ? 1 : 1.5
  const dpr = Math.min(window.devicePixelRatio || 1, cap) * scale
  const w = Math.max(1, Math.floor(el.clientWidth * dpr))
  const h = Math.max(1, Math.floor(el.clientHeight * dpr))
  if (el.width !== w || el.height !== h) {
    el.width = w
    el.height = h
    gl.viewport(0, 0, w, h)
  }
}

const draw = (now: number) => {
  if (!gl || !canvas.value) return
  if (!start) start = now
  mouse.x += (mouse.tx - mouse.x) * 0.045
  mouse.y += (mouse.ty - mouse.y) * 0.045

  gl.uniform2f(uRes, canvas.value.width, canvas.value.height)
  gl.uniform1f(uTime, (now - start) / 1000)
  gl.uniform2f(uMouse, mouse.x, mouse.y)
  gl.uniform1f(uIntensity, props.intensity)
  gl.drawArrays(gl.TRIANGLES, 0, 3)

  // Publish at ~10Hz. Reading the field is not worth stalling it.
  frameCount++
  if (now - lastPublish > 100) {
    const dt = now - lastPublish
    fpsWindow = lastPublish ? Math.round((frameCount * 1000) / dt) : 0
    telemetry.running = running
    telemetry.time = (now - start) / 1000
    telemetry.mouseX = mouse.x
    telemetry.mouseY = mouse.y
    telemetry.width = canvas.value.width
    telemetry.height = canvas.value.height
    telemetry.scale = scale
    telemetry.intensity = props.intensity
    telemetry.fps = fpsWindow
    lastPublish = now
    frameCount = 0
  }

  if (!readyEmitted) {
    readyEmitted = true
    emit('ready')
  }
}

const loop = (now: number) => {
  // Adaptive degradation: three consecutive frames over ~28ms and the field
  // drops resolution rather than stuttering. Two steps down, then it holds.
  if (lastFrame) {
    if (now - lastFrame > 28) slowFrames++
    else slowFrames = 0
    if (slowFrames >= 3 && scale > 0.5) {
      scale = scale === 1 ? 0.7 : 0.5
      slowFrames = 0
      resize()
    }
  }
  lastFrame = now

  draw(now)
  if (running) raf = requestAnimationFrame(loop)
}

const play = () => {
  if (running || reduced || !visible || !gl) return
  running = true
  raf = requestAnimationFrame(loop)
}

const pause = () => {
  running = false
  telemetry.running = false
  if (raf) cancelAnimationFrame(raf)
  raf = 0
}

const onPointer = (e: PointerEvent) => {
  mouse.tx = e.clientX / window.innerWidth
  mouse.ty = 1 - e.clientY / window.innerHeight
}

const onVisibility = () => {
  if (document.hidden) pause()
  else play()
}

/** A lost context must not leave a dead black canvas on the page. */
const onContextLost = (e: Event) => {
  e.preventDefault()
  pause()
  failed.value = true
}

onMounted(() => {
  const el = canvas.value
  if (!el) return

  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  gl =
    (el.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' }) as WebGLRenderingContext | null) ||
    (el.getContext('experimental-webgl') as WebGLRenderingContext | null)

  if (!gl) {
    failed.value = true
    emit('ready')
    return
  }

  const vs = compile(gl, gl.VERTEX_SHADER, VERT)
  const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG)
  const prog = gl.createProgram()
  if (!vs || !fs || !prog) {
    failed.value = true
    emit('ready')
    return
  }

  gl.attachShader(prog, vs)
  gl.attachShader(prog, fs)
  gl.linkProgram(prog)
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    failed.value = true
    emit('ready')
    return
  }
  gl.useProgram(prog)

  const buf = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buf)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
  const loc = gl.getAttribLocation(prog, 'a_pos')
  gl.enableVertexAttribArray(loc)
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

  // The driver may or may not tell us what it is; null is a real answer.
  try {
    const dbg = gl.getExtension('WEBGL_debug_renderer_info')
    telemetry.renderer = dbg
      ? String(gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL))
      : String(gl.getParameter(gl.RENDERER))
  } catch {
    telemetry.renderer = null
  }

  uRes = gl.getUniformLocation(prog, 'u_res')
  uTime = gl.getUniformLocation(prog, 'u_time')
  uMouse = gl.getUniformLocation(prog, 'u_mouse')
  uIntensity = gl.getUniformLocation(prog, 'u_intensity')

  resize()

  ro = new ResizeObserver(() => {
    resize()
    if (reduced) draw(performance.now())
  })
  ro.observe(el)

  if (reduced) {
    // One frame, held. The field is still the ground; it just stops moving.
    draw(performance.now())
  } else {
    el.addEventListener('webglcontextlost', onContextLost)
    window.addEventListener('pointermove', onPointer, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)
    play()
  }
})

onBeforeUnmount(() => {
  pause()
  ro?.disconnect()
  canvas.value?.removeEventListener('webglcontextlost', onContextLost)
  window.removeEventListener('pointermove', onPointer)
  document.removeEventListener('visibilitychange', onVisibility)
})
</script>

<template>
  <div ref="host" class="absolute inset-0 overflow-hidden bg-void" aria-hidden="true">
    <canvas
      v-show="!failed"
      ref="canvas"
      class="block h-full w-full"
    ></canvas>

    <!-- No WebGL: a painted ground in the same palette, never a black hole. -->
    <div
      v-if="failed"
      class="absolute inset-0"
      style="
        background:
          radial-gradient(120% 90% at 70% 20%, #2a2152 0%, transparent 60%),
          radial-gradient(90% 80% at 20% 70%, #1c1240 0%, transparent 55%),
          linear-gradient(160deg, #140c33 0%, #0b0620 70%);
      "
    ></div>

    <!-- Reading scrim. The field is the ground, not the message: type must
         always win the contrast fight against it. -->
    <div
      class="absolute inset-0"
      style="
        background:
          linear-gradient(100deg, #0b0620 0%, rgba(11,6,32,0.92) 26%, rgba(11,6,32,0.45) 58%, rgba(11,6,32,0.10) 100%),
          linear-gradient(to top, #0b0620 0%, rgba(11,6,32,0.35) 26%, transparent 55%);
      "
    ></div>

    <div class="grain absolute inset-0"></div>
  </div>
</template>
