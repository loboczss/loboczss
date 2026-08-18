<script setup lang="ts">
/**
 * The Loboczss mark: the wolf as a vector mesh, held inside the portal ring.
 *
 * Redrawn after judging the first attempt at 420px, where it failed three
 * ways: the eyes were large circles that read as cartoon, the muzzle hung as
 * a kite and pulled the animal toward fox, and every node was the same size
 * so the mesh read as a bead chain with no structure. At 24px it dissolved
 * entirely — fatal for the size a favicon actually ships at.
 *
 * What changed: the silhouette now carries the mark on its own, as one closed
 * angular path with real ear triangles and a tapered muzzle, so the form
 * survives when the mesh is too small to resolve. The mesh became internal
 * structure rather than the outline itself. Nodes have two weights. The eyes
 * are angular slits cut along the brow, not filled circles.
 *
 * The mark draws itself on mount: nodes land, edges stroke in between them,
 * the eyes light last. It is the same construction the site's shader panel
 * shows in text — the thing assembling itself from parts you can inspect.
 */
withDefaults(
  defineProps<{
    size?: number
    ring?: boolean
    /** Draw-in on mount. Always skipped under prefers-reduced-motion. */
    animate?: boolean
  }>(),
  { size: 40, ring: true, animate: true }
)

/** Outer silhouette, closed. Survives alone at favicon scale. */
const SILHOUETTE =
  'M15 13 L20.5 26 L26 22.5 L32 24.5 L38 22.5 L43.5 26 L49 13 L50.5 30 L45.5 38 L38 45 L32 49 L26 45 L18.5 38 L13.5 30 Z'

/** Internal mesh: structure, not outline. */
const EDGES: [number, number, number, number][] = [
  [20.5, 26, 32, 24.5],
  [43.5, 26, 32, 24.5],
  [32, 24.5, 32, 38],
  [20.5, 26, 26, 45],
  [43.5, 26, 38, 45],
  [26, 45, 32, 38],
  [38, 45, 32, 38],
  [32, 38, 32, 49],
  [13.5, 30, 20.5, 26],
  [50.5, 30, 43.5, 26],
]

/** Two weights, so the mesh has hierarchy instead of uniform beads. */
const NODES_MAJOR: [number, number][] = [
  [32, 24.5],
  [32, 38],
]

const NODES_MINOR: [number, number][] = [
  [20.5, 26],
  [43.5, 26],
  [13.5, 30],
  [50.5, 30],
  [26, 45],
  [38, 45],
]
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 64 64"
    fill="none"
    class="wolf"
    :class="{ 'wolf--draw': animate }"
    aria-hidden="true"
    focusable="false"
  >
    <circle
      v-if="ring"
      class="wolf__ring"
      cx="32"
      cy="32"
      r="29.5"
      stroke="currentColor"
      stroke-width="0.9"
      opacity="0.3"
    />

    <path
      class="wolf__form"
      :d="SILHOUETTE"
      stroke="currentColor"
      stroke-width="2"
      stroke-linejoin="round"
      stroke-linecap="round"
    />

    <g class="wolf__mesh" stroke="currentColor" stroke-width="0.9" opacity="0.5" stroke-linecap="round">
      <line
        v-for="([x1, y1, x2, y2], i) in EDGES"
        :key="`e${i}`"
        :x1="x1"
        :y1="y1"
        :x2="x2"
        :y2="y2"
        :style="{ '--i': i }"
      />
    </g>

    <g class="wolf__nodes" fill="currentColor">
      <circle v-for="([x, y], i) in NODES_MAJOR" :key="`M${i}`" :cx="x" :cy="y" r="1.8" :style="{ '--i': i }" />
      <circle v-for="([x, y], i) in NODES_MINOR" :key="`m${i}`" :cx="x" :cy="y" r="1" opacity="0.7" :style="{ '--i': i + 4 }" />
    </g>

    <!-- Eyes: angular slits along the brow. The only incandescent in the mark. -->
    <g class="wolf__eyes" stroke="#FF6A88" stroke-width="2" stroke-linecap="butt">
      <line x1="23.8" y1="30.6" x2="27.6" y2="33" />
      <line x1="40.2" y1="30.6" x2="36.4" y2="33" />
    </g>
  </svg>
</template>

<style scoped>
.wolf__form {
  stroke-dasharray: 210;
  stroke-dashoffset: 0;
}

.wolf--draw .wolf__ring {
  animation: ring-in 700ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

.wolf--draw .wolf__form {
  animation: trace 1100ms cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: 120ms;
}

.wolf--draw .wolf__mesh line {
  stroke-dasharray: 40;
  animation: trace-short 520ms cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: calc(760ms + var(--i) * 45ms);
}

.wolf--draw .wolf__nodes circle {
  animation: node-land 340ms cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: calc(620ms + var(--i) * 40ms);
}

.wolf--draw .wolf__eyes line {
  animation: eye-open 420ms cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: 1320ms;
}

@keyframes trace {
  from {
    stroke-dashoffset: 210;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes trace-short {
  from {
    stroke-dashoffset: 40;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes node-land {
  from {
    opacity: 0;
    transform: scale(0.2);
    transform-origin: center;
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes eye-open {
  from {
    opacity: 0;
    stroke-width: 0.5;
  }
  to {
    opacity: 1;
    stroke-width: 2;
  }
}

@keyframes ring-in {
  from {
    opacity: 0;
    transform: scale(0.9);
    transform-origin: center;
  }
  to {
    opacity: 0.3;
    transform: scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .wolf--draw .wolf__ring,
  .wolf--draw .wolf__form,
  .wolf--draw .wolf__mesh line,
  .wolf--draw .wolf__nodes circle,
  .wolf--draw .wolf__eyes line {
    animation: none;
  }
}
</style>
