<script setup lang="ts">
import { useColorMode } from '#imports';

const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>

<template>
  <ClientOnly>
    <button
      id="dark-mode-toggle"
      @click="toggleColorMode"
      class="p-2 transition-all rounded-full bg-surface-container hover:bg-surface-high text-surface-content border border-surface-container/50"
      aria-label="Toggle Dark Mode"
    >
      <div v-if="colorMode.value === 'dark'" class="w-6 h-6 flex items-center justify-center">
        <!-- Moon Icon (Dark Mode) -->
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
      </div>
      <div v-else class="w-6 h-6 flex items-center justify-center">
        <!-- Sun Icon (Light Mode) -->
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
      </div>
    </button>
    <template #fallback>
      <div class="p-2 w-10 h-10 rounded-full bg-surface-container border border-surface-container/10"></div>
    </template>
  </ClientOnly>
</template>
