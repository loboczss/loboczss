<script setup lang="ts">
import { computed, useI18n, useHead } from '#imports'

// Loboczss — the portal. Direction contract lives in a Nitro plugin so it
// survives the production build. Seed key 20c4cb9b.

const { locale, locales } = useI18n()

/**
 * The site is bilingual with `strategy: 'no_prefix'`, so the URL carries no
 * locale and nothing else can announce it. A hardcoded lang told every screen
 * reader that the English copy was Brazilian Portuguese.
 */
const currentIso = computed(() => {
  const match = (locales.value as { code: string; iso?: string }[]).find((l) => l.code === locale.value)
  return match?.iso || locale.value
})

useHead({
  htmlAttrs: { lang: currentIso },
  meta: [{ property: 'og:locale', content: currentIso }],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 420ms cubic-bezier(0.16, 1, 0.3, 1);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .page-enter-active,
  .page-leave-active {
    transition-duration: 1ms;
  }
}
</style>
