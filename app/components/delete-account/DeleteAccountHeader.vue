<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>

<template>
  <header class="flex flex-col gap-4">
    <h1 class="text-4xl font-bold tracking-tight text-surface-content">
      {{ title }}
    </h1>
    <p class="text-surface-content/60 leading-relaxed italic border-l-2 border-primary/30 pl-6">
      {{ description }}
    </p>
  </header>
</template>
