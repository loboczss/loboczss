<script setup lang="ts">
defineProps<{
  title: string;
  desc: string;
}>();
</script>

<template>
  <header class="flex flex-col items-center text-center gap-6 mt-12 mb-20 px-6">
    <NuxtLink to="/" class="text-[10px] font-bold uppercase tracking-[0.2em] text-primary hover:opacity-70 transition-opacity flex items-center gap-2 mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      {{ $t('privacy.back_home') || 'Voltar para Home' }}
    </NuxtLink>
    <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-surface-content">
      {{ title }}
    </h1>
    <p class="text-base md:text-lg text-surface-content/60 max-w-2xl">
      {{ desc }}
    </p>
  </header>
</template>
