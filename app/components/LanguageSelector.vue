<script setup lang="ts">
import { useI18n, computed } from '#imports';

const { locale, setLocale, locales } = useI18n();

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value);
});

const switchLocale = (code: 'pt' | 'en') => {
  setLocale(code);
};
</script>

<template>
  <div class="relative group">
    <button class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container hover:bg-surface-high border border-white/5 transition-all outline-none">
      <span class="text-[10px] uppercase font-bold text-surface-content/80 group-hover:text-surface-content">{{ locale }}</span>
      <svg class="w-3 h-3 text-surface-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    
    <div class="absolute right-0 top-full mt-2 w-32 bg-surface backdrop-blur-3xl border border-white/5 shadow-2xl rounded-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top-right scale-95 group-hover:scale-100 z-50">
      <div class="flex flex-col p-1">
        <button 
          v-for="l in availableLocales" 
          :key="l.code"
          @click="switchLocale(l.code as 'pt' | 'en')"
          class="w-full text-left px-4 py-2 text-xs font-medium text-surface-content/70 hover:text-surface-content hover:bg-surface-container rounded-xl transition-colors"
        >
          {{ l.name }}
        </button>
      </div>
    </div>
  </div>
</template>
