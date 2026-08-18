<script setup lang="ts">
import { computed } from '#imports'
import { FRAG } from '~/shaders/portal'
import { useShaderState } from '~/composables/useShaderState'

/**
 * The site's proof of work: the actual fragment shader painting the page,
 * shown beside the actual values it is being fed right now.
 *
 * The source is imported from the same module the renderer compiles, so it
 * cannot drift into a decorative copy. Monospace here is not a costume for
 * "technical" — this is code, which is the one thing monospace is for.
 */
const t = useShaderState()

const lines = computed(() =>
  FRAG.replace(/^\n/, '').replace(/\n$/, '').split('\n')
)

/** Uniform readings. Every one is measured; `—` means the driver would not say. */
const uniforms = computed(() => [
  { name: 'u_time', value: t.time.toFixed(2) },
  { name: 'u_mouse', value: `${t.mouseX.toFixed(3)}, ${t.mouseY.toFixed(3)}` },
  { name: 'u_res', value: t.width ? `${t.width} × ${t.height}` : '—' },
  { name: 'u_intensity', value: '1.00' },
])

/** Highlight only what GLSL actually distinguishes: types, keywords, numbers. */
const KEYWORDS = /\b(precision|highp|uniform|void|float|vec2|vec3|vec4|int|for|if|return|main|mix|smoothstep|clamp|pow|abs|fract|floor|sin|dot|length|max|min)\b/g

const paint = (line: string) => {
  const escaped = line
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  return escaped
    .replace(/(\/\/.*)$/g, '<i class="c-com">$1</i>')
    .replace(KEYWORDS, '<i class="c-key">$&</i>')
    .replace(/\b(\d+\.?\d*)\b/g, '<i class="c-num">$1</i>')
}
</script>

<template>
  <div class="ssrc frame">
    <header class="ssrc__bar">
      <span class="text-micro uppercase text-mist">app/shaders/portal.ts</span>
      <span class="ssrc__state text-micro uppercase" :class="t.running ? 'is-live' : ''">
        <span class="ssrc__dot" aria-hidden="true"></span>
        {{ t.running ? $t('source.live') : $t('source.paused') }}
      </span>
    </header>

    <div class="ssrc__body">
      <pre class="ssrc__code" tabindex="0" :aria-label="$t('source.code_label')"><code
        v-for="(l, i) in lines"
        :key="i"
        class="ssrc__line"
      ><span class="ssrc__ln tnum" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span><span v-html="paint(l)"></span></code></pre>

      <aside class="ssrc__meters" :aria-label="$t('source.uniforms_label')">
        <div v-for="u in uniforms" :key="u.name" class="ssrc__meter">
          <span class="text-micro uppercase text-mist">{{ u.name }}</span>
          <span class="ssrc__val tnum">{{ u.value }}</span>
        </div>

        <div class="ssrc__meter">
          <span class="text-micro uppercase text-mist">fps</span>
          <span class="ssrc__val tnum">{{ t.fps || '—' }}</span>
        </div>

        <div class="ssrc__meter">
          <span class="text-micro uppercase text-mist">{{ $t('source.gpu') }}</span>
          <span class="ssrc__val ssrc__val--small">{{ t.renderer || '—' }}</span>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.ssrc {
  display: flex;
  flex-direction: column;
  background: rgb(11 6 32 / 0.72);
  overflow: hidden;
}

.ssrc__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.9rem 1.25rem;
  border-bottom: 1px solid var(--frame);
}

.ssrc__state {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: var(--text-quiet);
}

.ssrc__dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: var(--text-quiet);
}

.ssrc__state.is-live {
  color: var(--incandescent);
}

.ssrc__state.is-live .ssrc__dot {
  background: var(--incandescent);
  animation: pulse 2.4s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.35;
  }
  50% {
    opacity: 1;
  }
}

.ssrc__body {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 900px) {
  .ssrc__body {
    grid-template-columns: minmax(0, 1fr) 15rem;
  }
}

.ssrc__code {
  margin: 0;
  padding: 1.25rem 0;
  max-height: 24rem;
  overflow: auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 0.75rem;
  line-height: 1.75;
  color: var(--mist);
}

.ssrc__line {
  display: block;
  padding: 0 1.25rem;
  white-space: pre;
}

.ssrc__ln {
  display: inline-block;
  width: 2.25rem;
  color: var(--glimmer);
  user-select: none;
}

.ssrc__code :deep(.c-key) {
  color: #c9bfff;
  font-style: normal;
}

.ssrc__code :deep(.c-num) {
  color: var(--incandescent);
  font-style: normal;
}

.ssrc__code :deep(.c-com) {
  color: var(--text-quiet);
  font-style: normal;
  opacity: 0.75;
}

.ssrc__meters {
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid var(--frame);
}

@media (min-width: 900px) {
  .ssrc__meters {
    border-top: 0;
    border-left: 1px solid var(--frame);
  }
}

.ssrc__meter {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0.85rem 1.25rem;
}

.ssrc__meter + .ssrc__meter {
  border-top: 1px solid var(--frame);
}

.ssrc__val {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 0.8125rem;
  color: #fff;
}

.ssrc__val--small {
  font-size: 0.6875rem;
  line-height: 1.4;
  color: var(--mist);
  word-break: break-word;
}

@media (prefers-reduced-motion: reduce) {
  .ssrc__state.is-live .ssrc__dot {
    animation: none;
    opacity: 1;
  }
}
</style>
