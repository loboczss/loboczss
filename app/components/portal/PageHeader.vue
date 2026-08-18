<script setup lang="ts">
/**
 * Inner-page opening. Same spine as a section — index, hairline, tracked
 * label — but the heading takes display scale, and a back link sits above it.
 */
withDefaults(
  defineProps<{
    title: string
    lead?: string
    meta?: string
  }>(),
  { lead: '', meta: '' }
)
</script>

<template>
  <header class="relative px-6 pb-16 pt-36 md:px-10 md:pb-20 md:pt-44">
    <div class="mx-auto flex w-full max-w-portal flex-col gap-10">
      <NuxtLink to="/" class="back group flex w-fit items-center gap-3 text-micro uppercase">
        <svg class="back__arrow h-3 w-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M14 8H3" />
          <path d="M7 4L3 8l4 4" />
        </svg>
        {{ $t('privacy.back_home') }}
      </NuxtLink>

      <div class="flex flex-col gap-7">
        <!-- Kicker removed: craft-floor ban, unconditional. -->
        <h1 class="page-head text-page">{{ title }}</h1>

        <p v-if="lead" class="max-w-2xl text-base font-light leading-relaxed text-mist md:text-lg">
          {{ lead }}
        </p>

        <p v-if="meta" class="text-micro uppercase text-mist/85">{{ meta }}</p>
      </div>
    </div>
  </header>
</template>

<style scoped>
.page-head {
  color: #fff;
  font-weight: 200;
  font-variation-settings: 'wdth' 110;
  text-transform: uppercase;
  max-width: 16ch;
}

.back {
  color: var(--mist);
  text-decoration: none;
  transition: color 380ms cubic-bezier(0.16, 1, 0.3, 1);
}

.back:hover {
  color: var(--incandescent);
}

.back__arrow {
  transition: transform 380ms cubic-bezier(0.16, 1, 0.3, 1);
}

.back:hover .back__arrow {
  transform: translateX(-3px);
}

@media (prefers-reduced-motion: reduce) {
  .back,
  .back__arrow {
    transition-duration: 1ms;
  }
}
</style>
