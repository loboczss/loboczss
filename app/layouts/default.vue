<script setup lang="ts">
import GlobalHeader from '~/components/header/GlobalHeader.vue';
import GlobalFooter from '~/components/footer/GlobalFooter.vue';
</script>

<template>
  <div class="min-h-screen bg-surface text-surface-content font-sans transition-colors duration-500 flex flex-col selection:bg-primary/30">
    <!-- Header Global -->
    <GlobalHeader />

    <!-- Removed container mx-auto for full width editorial experience -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer Global -->
    <GlobalFooter />
  </div>
</template>

<style>
/* Global scroll behavior */
html {
  scroll-behavior: smooth;
}

</style>
