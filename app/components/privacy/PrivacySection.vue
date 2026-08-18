<script setup lang="ts">
/**
 * Legal reading, inside the world but built for comprehension: the ground
 * goes solid so the shader never competes with body text, and measure is
 * capped near 70ch.
 */
defineProps<{
  index: string
  title: string
  content: string
}>()
</script>

<template>
  <section class="flex flex-col gap-4 border-t border-[var(--frame)] py-9">
    <div class="flex items-baseline gap-4">
      <span class="text-micro uppercase text-incandescent tnum">{{ index }}</span>
      <h2 class="text-sm uppercase tracking-wide text-mist">{{ title }}</h2>
    </div>

    <p class="max-w-[68ch] text-read text-mist">{{ content }}</p>

    <slot name="footer" />
  </section>
</template>
