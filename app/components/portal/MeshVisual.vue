<script setup lang="ts">
import { computed } from '#imports'

/**
 * The world's "vector mesh flow" material, authored rather than shipped as a
 * raster: a seeded wireframe terrain drawn in SVG. Deterministic, so server
 * and client render the identical mesh and hydration stays quiet.
 */
const props = withDefaults(
  defineProps<{
    /** Any string. The same seed always draws the same mesh. */
    seed?: string
    cols?: number
    rows?: number
    /** Lights one ridge in incandescent. */
    hot?: boolean
  }>(),
  { seed: 'loboczss', cols: 22, rows: 12, hot: false }
)

const W = 400
const H = 180

/** Deterministic value noise from the seed string. */
const hash = (x: number, y: number, salt: number) => {
  let h = salt >>> 0
  for (let i = 0; i < props.seed.length; i++) {
    h = (Math.imul(h ^ props.seed.charCodeAt(i), 2654435761) >>> 0)
  }
  h = Math.imul(h ^ (x * 374761393 + y * 668265263), 1274126177) >>> 0
  return ((h ^ (h >>> 15)) >>> 0) / 4294967295
}

const smooth = (t: number) => t * t * (3 - 2 * t)

const field = (x: number, y: number) => {
  const xi = Math.floor(x)
  const yi = Math.floor(y)
  const xf = smooth(x - xi)
  const yf = smooth(y - yi)
  const a = hash(xi, yi, 1)
  const b = hash(xi + 1, yi, 1)
  const c = hash(xi, yi + 1, 1)
  const d = hash(xi + 1, yi + 1, 1)
  return (a * (1 - xf) + b * xf) * (1 - yf) + (c * (1 - xf) + d * xf) * yf
}

/** One row of the terrain, in perspective: far rows are shorter and higher. */
const rowPath = (r: number) => {
  const t = r / (props.rows - 1)
  const depth = 0.34 + t * 0.66
  const baseY = H * (0.30 + t * 0.62)
  const pts: string[] = []

  for (let c = 0; c < props.cols; c++) {
    const u = c / (props.cols - 1)
    const x = W * (0.5 + (u - 0.5) * depth * 1.22)
    const n = field(u * 3.2 + r * 0.34, r * 0.52)
    const y = baseY - n * 42 * depth
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`)
  }
  return pts
}

const rows = computed(() => Array.from({ length: props.rows }, (_, r) => rowPath(r)))

/** Vertical ties, so the mesh reads as a mesh and not as stacked lines. */
const ties = computed(() => {
  const out: string[] = []
  const step = 2
  for (let c = 0; c < props.cols; c += step) {
    const pts = rows.value.map((row) => row[c]!).filter(Boolean)
    out.push(pts.join(' '))
  }
  return out
})

const hotRow = computed(() => Math.floor(props.rows * 0.62))
</script>

<template>
  <svg
    :viewBox="`0 0 ${W} ${H}`"
    class="block h-full w-full"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <linearGradient :id="`fade-${props.seed}`" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#5B4D9A" stop-opacity="0.05" />
        <stop offset="55%" stop-color="#5B4D9A" stop-opacity="0.55" />
        <stop offset="100%" stop-color="#5B4D9A" stop-opacity="0.16" />
      </linearGradient>
    </defs>

    <g :stroke="`url(#fade-${props.seed})`" fill="none" stroke-width="0.7">
      <polyline v-for="(row, i) in rows" :key="`r${i}`" :points="row.join(' ')" />
    </g>

    <g stroke="#5B4D9A" stroke-opacity="0.18" fill="none" stroke-width="0.5">
      <polyline v-for="(tie, i) in ties" :key="`t${i}`" :points="tie" />
    </g>

    <polyline
      v-if="props.hot"
      :points="rows[hotRow]?.join(' ')"
      fill="none"
      stroke="#FF6A88"
      stroke-opacity="0.85"
      stroke-width="1.1"
    />
  </svg>
</template>
