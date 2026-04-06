<script setup lang="ts">
import { navigateTo, useI18n } from '#imports';
import PremiumButton from '~/components/ui/PremiumButton.vue';
import { indexImages } from '~/config/images';

const { t } = useI18n();
</script>

<template>
  <section class="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 pt-32 md:pt-40 px-6 md:px-12 lg:px-24 bg-surface overflow-hidden z-10">

    <!-- Hero background image for glassmorphism -->
    <div class="absolute inset-0" aria-hidden="true">
      <img
        :src="indexImages.heroBackground"
        alt=""
        class="w-full h-full object-cover scale-105 brightness-[0.5] saturate-[0.85]"
      />
      <div class="absolute inset-0 bg-black/45"></div>
      <div class="absolute inset-0 backdrop-blur-[2px]"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_45%,rgba(255,255,255,0.15),transparent_48%)]"></div>
    </div>

    <!-- Background dot grid -->
    <div class="absolute inset-0 pointer-events-none select-none opacity-[0.08]" aria-hidden="true"
      style="background-image: radial-gradient(white 1px, transparent 1px); background-size: 40px 40px;">
    </div>

    <!-- Top accent line -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>

    <!-- Main content -->
    <div class="max-w-7xl mx-auto w-full flex flex-col gap-10 md:gap-16 z-10">

      <!-- Giant heading -->
      <h1 class="text-[clamp(4.5rem,13vw,13rem)] font-semibold leading-[0.88] tracking-tighter text-white drop-shadow-[0_8px_28px_rgba(0,0,0,0.65)]">
        {{ t('hero.main_title') }}<span class="text-primary">.</span>
      </h1>

      <!-- Bottom row -->
      <div class="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 p-5 md:p-7 rounded-2xl border border-white/30 bg-black/35 backdrop-blur-xl shadow-[0_14px_45px_rgba(0,0,0,0.45)]">
        <p class="text-lg sm:text-xl md:text-2xl font-light text-white/90 max-w-xl leading-relaxed">
          {{ t('hero.subtitle') }}
        </p>

        <div class="flex flex-col gap-4 items-start md:items-end shrink-0">
          <PremiumButton variant="primary" @click="navigateTo('/budget')">
            {{ t('hero.start_project') }}
          </PremiumButton>
          <span class="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/75">
            {{ t('hero.scroll') }}
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
