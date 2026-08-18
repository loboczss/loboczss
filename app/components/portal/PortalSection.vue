<script setup lang="ts">
/**
 * Section shell. Every section opens the same way — index, hairline, tracked
 * label — then a light display heading. The rhythm is one grammar across the
 * whole site so density can vary without the page losing its spine.
 */
withDefaults(
  defineProps<{
    /** Retained as the section's accessible name, never rendered as a kicker. */
    label: string
    heading?: string
    lead?: string
    /** Lets a section sit on the void instead of the shader. */
    solid?: boolean
    id?: string
  }>(),
  { heading: '', lead: '', solid: false }
)
</script>

<template>
  <section
    :id="id"
    :aria-label="label"
    class="relative border-t border-[var(--frame)] px-6 py-24 md:px-10 md:py-32"
    :class="solid && 'bg-void/80 backdrop-blur-sm'"
  >
    <div class="mx-auto flex w-full max-w-portal flex-col gap-14">
      <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <div class="flex flex-col gap-6">
          <!-- No kicker above the heading: the craft floor bans it outright,
               and neither the direction contract nor the world's card can
               authorise it. The heading carries its own weight. -->
          <h2 v-if="heading" class="section-head">{{ heading }}</h2>
        </div>

        <p v-if="lead" class="max-w-md text-base font-light leading-relaxed text-mist">
          {{ lead }}
        </p>
      </div>

      <slot />
    </div>
  </section>
</template>

<style scoped>
.section-head {
  color: #fff;
  font-size: clamp(2rem, 5vw, 3.75rem);
  font-weight: 200;
  line-height: 1.02;
  letter-spacing: -0.02em;
  font-variation-settings: 'wdth' 108;
  text-transform: uppercase;
  max-width: 18ch;
}
</style>
