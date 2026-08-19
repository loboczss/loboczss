<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, useI18n } from '#imports'

/**
 * The station: what Juan actually operates, drawn as the topology it really
 * has. Education feeds the person, the person runs the server, the server
 * hosts the site and the automations.
 *
 * The structural risk of a diagram — recorded when this composition was
 * chosen — is that it speaks fluently to engineers and leaves the small
 * business owner outside. Every node therefore carries a plain-language
 * "what this means for you" line, and that line is what the panel leads with.
 *
 * Motion budget: an About page is a rare visit, so the draw-in earns its
 * place under the named purpose of explanation. Node feedback fires on
 * pointer-DOWN, never on release. Nothing here is gesture-driven enough to
 * need a spring library, so this is CSS transitions on transform/opacity plus
 * one rAF loop for the pointer parallax — the cheapest tool that works, which
 * also keeps the bundle honest for the phone this site is read on.
 */
const { t } = useI18n()

type NodeId = 'formacao' | 'juan' | 'servidor' | 'site' | 'automacoes' | 'apps' | 'github'

interface StationNode {
  id: NodeId
  x: number
  y: number
  state: 'active' | 'done' | 'running' | 'public'
  href?: string
  hub?: boolean
}

/** The field's own units. Node coordinates live in this space and must be
 *  converted before they become CSS percentages — y is 0..64 here, so feeding
 *  it straight into `top: %` misplaces every node by a factor of 64/100. */
const FIELD_W = 100
const FIELD_H = 64

/** Positions in the 100 × 64 field. The layout is the real dependency order. */
const NODES: StationNode[] = [
  { id: 'formacao', x: 9, y: 32, state: 'running' },
  { id: 'juan', x: 31, y: 32, state: 'active', hub: true },
  { id: 'servidor', x: 57, y: 32, state: 'active' },
  { id: 'site', x: 84, y: 15, state: 'active' },
  { id: 'automacoes', x: 84, y: 49, state: 'active' },
  { id: 'apps', x: 31, y: 8, state: 'active' },
  { id: 'github', x: 31, y: 56, state: 'public', href: 'https://github.com/loboczss' },
]

const EDGES: [NodeId, NodeId][] = [
  ['formacao', 'juan'],
  ['juan', 'servidor'],
  ['servidor', 'site'],
  ['servidor', 'automacoes'],
  ['juan', 'apps'],
  ['juan', 'github'],
]

const byId = (id: NodeId) => NODES.find((n) => n.id === id)!

const selected = ref<NodeId>('juan')
const pressed = ref<NodeId | null>(null)

const detail = computed(() => {
  const n = byId(selected.value)
  return {
    id: n.id,
    name: t(`about.n_${n.id}_name`),
    what: t(`about.n_${n.id}_what`),
    means: t(`about.n_${n.id}_means`),
    state: t(`about.state_${n.state}`),
    href: n.href,
  }
})

const isLive = (n: StationNode) => n.state === 'active'

/** Pointer parallax. Marketing surface, decorative by design, gated twice. */
const host = ref<HTMLElement | null>(null)
const tilt = ref({ x: 0, y: 0 })
let raf = 0
let target = { x: 0, y: 0 }
let tracking = false

const onPointerMove = (e: PointerEvent) => {
  const el = host.value
  if (!el) return
  const r = el.getBoundingClientRect()
  target = {
    x: ((e.clientX - r.left) / r.width - 0.5) * 2,
    y: ((e.clientY - r.top) / r.height - 0.5) * 2,
  }
}

const loop = () => {
  tilt.value = {
    x: tilt.value.x + (target.x - tilt.value.x) * 0.06,
    y: tilt.value.y + (target.y - tilt.value.y) * 0.06,
  }
  raf = requestAnimationFrame(loop)
}

onMounted(() => {
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!fine || reduce) return
  tracking = true
  host.value?.addEventListener('pointermove', onPointerMove)
  raf = requestAnimationFrame(loop)
})

onBeforeUnmount(() => {
  if (raf) cancelAnimationFrame(raf)
  if (tracking) host.value?.removeEventListener('pointermove', onPointerMove)
})

const select = (id: NodeId) => {
  selected.value = id
}
</script>

<template>
  <div class="station">
    <!-- Desktop and tablet: the topology itself. -->
    <div
      ref="host"
      class="station__field"
      :style="{ '--tx': tilt.x.toFixed(4), '--ty': tilt.y.toFixed(4) }"
    >
      <svg :viewBox="`0 0 ${FIELD_W} ${FIELD_H}`" class="station__svg" preserveAspectRatio="none" aria-hidden="true">
        <g class="station__edges">
          <line
            v-for="([a, b], i) in EDGES"
            :key="`e${i}`"
            :x1="byId(a).x"
            :y1="byId(a).y"
            :x2="byId(b).x"
            :y2="byId(b).y"
            :class="{ 'is-lit': selected === a || selected === b }"
            :style="{ '--i': i }"
          />
        </g>
      </svg>

      <button
        v-for="(n, i) in NODES"
        :key="n.id"
        type="button"
        class="station__node"
        :class="{
          'is-selected': selected === n.id,
          'is-pressed': pressed === n.id,
          'is-hub': n.hub,
          'is-live': isLive(n),
        }"
        :style="{ '--x': `${n.x}%`, '--y': `${(n.y / FIELD_H) * 100}%`, '--i': i }"
        :aria-pressed="selected === n.id"
        @pointerdown="pressed = n.id"
        @pointerup="pressed = null"
        @pointercancel="pressed = null"
        @pointerleave="pressed = null"
        @click="select(n.id)"
        @focus="select(n.id)"
      >
        <span class="station__dot" aria-hidden="true"></span>
        <span class="station__label text-micro uppercase">{{ $t(`about.n_${n.id}_name`) }}</span>
      </button>

      <p class="station__hint text-micro uppercase">{{ $t('about.map_hint') }}</p>
    </div>

    <!-- Folded form. A topology squeezed onto a phone is unreadable, so small
         screens get the same nodes and the same panel as an ordered list —
         the same object folded, never a shrunken diagram. -->
    <ol class="station__list">
      <li v-for="n in NODES" :key="`l-${n.id}`">
        <button
          type="button"
          class="station__row"
          :class="{ 'is-selected': selected === n.id }"
          :aria-pressed="selected === n.id"
          @click="select(n.id)"
        >
          <span class="station__dot" :class="{ 'is-live': isLive(n) }" aria-hidden="true"></span>
          <span class="station__row-name text-caps uppercase">{{ $t(`about.n_${n.id}_name`) }}</span>
          <span class="station__row-state text-micro uppercase">{{ $t(`about.state_${n.state}`) }}</span>
        </button>
      </li>
    </ol>

    <!-- The panel is the point: it translates the diagram for someone who
         did not come here to read a diagram. -->
    <aside class="station__panel frame" :key="detail.id">
      <div class="station__panel-head">
        <span class="text-micro uppercase">{{ detail.state }}</span>
        <span v-if="byId(selected).state === 'active'" class="station__pulse" aria-hidden="true"></span>
      </div>

      <h3 class="station__name text-title">{{ detail.name }}</h3>
      <p class="station__what text-read">{{ detail.what }}</p>

      <div class="station__means">
        <span class="text-micro uppercase">{{ $t('about.means') }}</span>
        <p class="text-read">{{ detail.means }}</p>
      </div>

      <a
        v-if="detail.href"
        :href="detail.href"
        target="_blank"
        rel="noopener noreferrer"
        class="station__link text-caps uppercase"
      >
        {{ detail.href.replace('https://', '') }}
        <svg class="h-3 w-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12L12 4" /><path d="M5.5 4H12v6.5" /></svg>
      </a>
    </aside>
  </div>
</template>

<style scoped>
.station {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .station {
    grid-template-columns: minmax(0, 1fr) 22rem;
    gap: 2rem;
  }
}

.station__field {
  position: relative;
  aspect-ratio: 100 / 64;
  min-height: 22rem;
  border: 1px solid var(--frame);
  background: rgb(11 6 32 / 0.42);
  overflow: hidden;
  /* Parallax is a whole-field nudge, never per-child variable transforms. */
  transform: translate3d(calc(var(--tx, 0) * 6px), calc(var(--ty, 0) * 6px), 0);
  transition: transform 700ms var(--ease-out);
}

.station__svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.station__edges line {
  stroke: var(--frame-control);
  stroke-width: 0.25;
  stroke-dasharray: 120;
  animation: trace 900ms var(--ease-out) both;
  animation-delay: calc(var(--i) * 90ms);
  transition: stroke 320ms var(--ease-out);
}

.station__edges line.is-lit {
  /* Not incandescent: selecting the hub lights four edges at once, and the
     action colour cannot be the most common thing on screen. The selected
     node's dot carries the accent; its edges merely brighten. */
  stroke: var(--mist);
  stroke-width: 0.35;
}

@keyframes trace {
  from { stroke-dashoffset: 120; }
  to { stroke-dashoffset: 0; }
}

.station__node {
  position: absolute;
  left: var(--x);
  top: var(--y);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--mist);
  transform: translate3d(-50%, -50%, 0) scale(1);
  animation: land 420ms var(--ease-out) both;
  animation-delay: calc(540ms + var(--i) * 70ms);
  transition: transform 260ms var(--ease-out), color 260ms var(--ease-out);
}

@keyframes land {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Feedback on press, not on release. */
.station__node.is-pressed {
  transform: translate3d(-50%, -50%, 0) scale(0.94);
  transition-duration: 110ms;
}

.station__node.is-selected {
  color: #fff;
}

.station__dot {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 999px;
  border: 1px solid var(--frame-control);
  background: var(--void);
  transition: transform 260ms var(--ease-out), border-color 260ms var(--ease-out), background-color 260ms var(--ease-out);
}

.station__node.is-hub .station__dot {
  width: 1rem;
  height: 1rem;
}

.station__node.is-selected .station__dot {
  border-color: var(--incandescent);
  background: var(--incandescent);
  transform: scale(1.15);
}

.station__node.is-live:not(.is-selected) .station__dot {
  border-color: var(--mist);
}

.station__label {
  white-space: nowrap;
}

.station__hint {
  position: absolute;
  left: 1rem;
  bottom: 0.9rem;
  color: var(--text-quiet);
}

/* The field is the desktop form; the list is its folded twin. Exactly one
   of them is ever present. */
.station__list {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--frame);
  background: rgb(11 6 32 / 0.42);
}

.station__row {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  width: 100%;
  padding: 0.95rem 1.1rem;
  background: none;
  border: none;
  border-bottom: 1px solid var(--frame);
  color: var(--mist);
  cursor: pointer;
  text-align: left;
  transition: background-color 200ms var(--ease-out), color 200ms var(--ease-out);
}

.station__list li:last-child .station__row {
  border-bottom: 0;
}

.station__row.is-selected {
  color: #fff;
  background: rgb(42 33 82 / 0.5);
}

.station__row-name {
  flex: 1;
}

.station__row-state {
  color: var(--text-quiet);
}

.station__row.is-selected .station__row-state {
  color: var(--incandescent);
}

@media (max-width: 767.98px) {
  .station__field { display: none; }
}

@media (min-width: 768px) {
  .station__list { display: none; }
}

.station__panel {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.6rem;
  background: rgb(11 6 32 / 0.55);
  animation: panel-in 380ms var(--ease-out) both;
}

@keyframes panel-in {
  from { opacity: 0; transform: translate3d(0, 8px, 0); }
  to { opacity: 1; transform: none; }
}

.station__panel-head {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--text-quiet);
}

.station__pulse {
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background: var(--incandescent);
  animation: pulse 2.4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 1; }
}

.station__name {
  color: #fff;
  font-weight: 200;
  text-transform: uppercase;
}

.station__what {
  color: var(--mist);
}

.station__means {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--frame);
}

.station__means span {
  color: var(--incandescent);
}

.station__link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.4rem;
  color: var(--mist);
  text-decoration: none;
  transition: color 260ms var(--ease-out);
}

.station__link:hover,
.station__link:focus-visible {
  color: var(--incandescent);
}

@media (prefers-reduced-motion: reduce) {
  .station__field,
  .station__edges line,
  .station__node,
  .station__dot,
  .station__panel,
  .station__pulse,
  .station__link {
    animation: none;
    transition-duration: 1ms;
    transform: translate3d(0, 0, 0);
  }
  .station__node {
    transform: translate3d(-50%, -50%, 0);
  }
}
</style>
