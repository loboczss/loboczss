<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from '#imports'

/**
 * The world's loader, kept honest on both counts it previously failed.
 *
 * It does not block. This is a small fixed indicator in the corner, never a
 * full-screen gate: the offer, the CTA and the contact strip are readable from
 * the first paint, which matters most on the slow phone this site is read on.
 *
 * It does not invent progress. The count advances only on milestones that
 * actually happened — document interactive, web fonts resolved, shader first
 * frame — and the display eases between real states, never past them. If the
 * deadline expires before the field renders, the indicator simply leaves at
 * whatever it truly reached; it never claims a hundred it did not earn.
 */
const props = defineProps<{ shaderReady: boolean }>()

const MILESTONES = 3
const reached = ref(0)
const shown = ref(0)
const done = ref(false)
const skip = ref(false)

let raf = 0
let deadline: ReturnType<typeof setTimeout> | null = null

const target = computed(() => Math.round((reached.value / MILESTONES) * 100))
const dash = computed(() => `${(shown.value / 100) * 132} 132`)

const dismiss = () => {
  if (done.value) return
  done.value = true
}

const tick = () => {
  shown.value += (target.value - shown.value) * 0.12
  if (target.value >= 100 && shown.value > 99.4) {
    shown.value = 100
    setTimeout(dismiss, 360)
    return
  }
  raf = requestAnimationFrame(tick)
}

watch(
  () => props.shaderReady,
  (v) => {
    if (v) reached.value = Math.max(reached.value, MILESTONES)
  }
)

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    skip.value = true
    done.value = true
    return
  }

  reached.value = 1

  const fonts = (document as Document & { fonts?: FontFaceSet }).fonts
  if (fonts?.ready) {
    fonts.ready.then(() => (reached.value = Math.max(reached.value, 2)))
  } else {
    reached.value = Math.max(reached.value, 2)
  }

  if (props.shaderReady) reached.value = MILESTONES

  // Leaves on its own without back-filling the number.
  deadline = setTimeout(dismiss, 2600)
  raf = requestAnimationFrame(tick)
})

onBeforeUnmount(() => {
  if (raf) cancelAnimationFrame(raf)
  if (deadline) clearTimeout(deadline)
})
</script>

<template>
  <Transition name="ploader">
    <div
      v-if="!done && !skip"
      class="ploader"
      role="status"
      :aria-label="$t('portal.initializing')"
    >
      <svg viewBox="0 0 48 48" class="ploader__ring" aria-hidden="true">
        <circle cx="24" cy="24" r="21" fill="none" stroke="var(--frame-control)" stroke-width="1" />
        <circle
          cx="24"
          cy="24"
          r="21"
          fill="none"
          stroke="var(--incandescent)"
          stroke-width="1.5"
          stroke-linecap="round"
          :stroke-dasharray="dash"
          transform="rotate(-90 24 24)"
        />
      </svg>
      <span class="ploader__num tnum">{{ Math.round(shown) }}</span>
    </div>
  </Transition>
</template>

<style scoped>
.ploader {
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  z-index: 40;
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  pointer-events: none;
}

.ploader__ring {
  position: absolute;
  inset: 0;
  width: 3rem;
  height: 3rem;
}

.ploader__num {
  font-size: theme('fontSize.meta[0]');
  font-weight: 400;
  color: var(--mist);
}

.ploader-leave-active {
  transition: opacity 360ms ease;
}

.ploader-leave-to {
  opacity: 0;
}
</style>
