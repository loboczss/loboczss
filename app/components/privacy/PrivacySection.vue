<script setup lang="ts">
defineProps<{
  title: string;
  content: string;
}>();
</script>

<template>
  <section class="flex flex-col gap-4">
    <h2 class="text-xl font-bold uppercase tracking-widest text-surface-content border-l-2 border-primary pl-4">
      {{ title }}
    </h2>
    <p class="text-surface-content/80 leading-relaxed">{{ content }}</p>
  </section>
</template>
