<script setup lang="ts">
// Loboczss - The Neural Architect
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* Global Resets */
:root {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: var(--surface);
  color: var(--surface-content);
}

::selection {
  background-color: rgba(16, 185, 129, 0.3); /* primary/30 approx */
}

/* Base Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
