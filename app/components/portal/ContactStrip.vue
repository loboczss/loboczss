<script setup lang="ts">
/**
 * The level legend. The board puts a readout strip at the foot of the hero —
 * SYSTEM STATUS / BUILD / LATENCY. That form is borrowed; the content is not.
 * Invented telemetry is exactly the theatre this rebuild removed, so the
 * strip carries the only facts that matter here: the two contact doors, at
 * equal weight, plain and level, never dressed by the world around them.
 */
withDefaults(defineProps<{ compact?: boolean }>(), { compact: false })
</script>

<template>
  <div
    class="cstrip"
    :class="compact ? 'cstrip--compact' : ''"
  >
    <a class="cstrip__cell" href="https://wa.me/5568992552607" target="_blank" rel="noopener noreferrer">
      <span class="cstrip__key text-micro uppercase">{{ $t('contact.whatsapp') }}</span>
      <span class="cstrip__val tnum">+55 68 99255-2607</span>
    </a>

    <span class="cstrip__rule" aria-hidden="true"></span>

    <a class="cstrip__cell" href="mailto:juan@loboczss.cloud">
      <span class="cstrip__key text-micro uppercase">{{ $t('contact.email') }}</span>
      <span class="cstrip__val">juan@loboczss.cloud</span>
    </a>

    <span class="cstrip__rule" aria-hidden="true"></span>

    <NuxtLink class="cstrip__cell" to="/budget">
      <span class="cstrip__key text-micro uppercase">{{ $t('contact.form') }}</span>
      <span class="cstrip__val">{{ $t('header.quote') }}</span>
    </NuxtLink>
  </div>
</template>

<style scoped>
.cstrip {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 0;
  border: 1px solid var(--frame);
  background: rgb(11 6 32 / 0.6);
}

.cstrip__cell {
  display: flex;
  flex: 1 1 12rem;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.1rem 1.4rem;
  color: var(--mist);
  text-decoration: none;
  transition: background-color 320ms linear, color 320ms linear;
}

.cstrip__cell:hover,
.cstrip__cell:focus-visible {
  background: rgb(42 33 82 / 0.5);
  color: #fff;
}

.cstrip__key {
  color: var(--mist);
}

.cstrip__val {
  font-size: theme('fontSize.read[0]');
  font-weight: 300;
}

.cstrip__rule {
  width: 1px;
  background: var(--frame);
}

.cstrip--compact .cstrip__cell {
  padding: 0.85rem 1.1rem;
}

@media (max-width: 640px) {
  .cstrip__rule {
    width: 100%;
    height: 1px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cstrip__cell {
    transition-duration: 1ms;
  }
}
</style>
