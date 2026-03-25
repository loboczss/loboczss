<script setup lang="ts">
import { useI18n } from '#imports';
import PremiumButton from '~/components/ui/PremiumButton.vue';

const { t } = useI18n();
</script>

<template>
  <section class="relative min-h-[85vh] md:min-h-[90vh] pb-24 pt-40 md:pt-48 px-6 md:px-12 lg:px-24 flex flex-col justify-center items-start gap-12 lg:gap-16 z-10 bg-surface">
    <div class="flex flex-col gap-6 md:gap-8 w-full max-w-7xl mx-auto">
      <span class="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-surface-content/50">{{ t('hero.title_span') }}</span>
      <h1 class="text-[4rem] leading-[1] sm:text-7xl md:text-[8rem] lg:text-[10rem] font-semibold tracking-tighter text-surface-content">
        {{ t('hero.main_title') }}<span class="text-primary">.</span>
      </h1>
    </div>
    
    <div class="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-start w-full max-w-7xl mx-auto">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed max-w-2xl text-surface-content/70">
        {{ t('hero.subtitle') }}
      </h2>
      
      <div class="flex flex-col gap-6 pt-2 md:pt-4 w-full md:w-auto">
        <PremiumButton variant="primary" class="w-full md:w-auto text-center justify-center py-5 md:py-6 rounded-full">
          {{ t('hero.start_project') }}
        </PremiumButton>
        <div class="hidden md:flex items-center gap-4 text-xs font-bold tracking-widest uppercase opacity-40 justify-center md:justify-start">
          {{ t('hero.scroll') }}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>
