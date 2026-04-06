<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue';
import { indexImages } from '~/config/images';
</script>

<template>
  <section id="portfolio" class="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-surface relative z-10 border-t border-surface-container/50">
    <div class="max-w-7xl mx-auto flex flex-col gap-16 md:gap-20">

      <!-- Header -->
      <div class="flex items-end justify-between">
        <h2 class="text-4xl md:text-5xl lg:text-7xl font-semibold text-surface-content tracking-tighter leading-[1]">
          {{ $t('portfolio.title1') }}<br/>
          <span class="text-surface-content/30">{{ $t('portfolio.title2') }}</span>
        </h2>
        <BaseButton variant="ghost" class="hidden md:flex text-[10px] uppercase tracking-widest text-surface-content/40 hover:text-surface-content transition-colors">
          {{ $t('portfolio.view_full') }}
        </BaseButton>
      </div>

      <!-- Featured project — full width -->
      <div class="group cursor-pointer flex flex-col gap-5">
        <div class="relative w-full aspect-[16/7] bg-surface-container overflow-hidden border border-surface-container/50">
          <img
            :src="indexImages.portfolioProject1"
            class="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
            alt="Neural Defense"
          />
          <div class="absolute inset-0 flex items-end p-8 md:p-12 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span class="text-white text-lg font-semibold tracking-tight">Neural Defense →</span>
          </div>
          <!-- Index tag -->
          <span class="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest text-white/50 bg-black/30 px-2 py-1">01</span>
        </div>
        <div class="flex items-start justify-between gap-4">
          <div class="flex flex-col gap-1">
            <span class="text-[10px] font-bold text-surface-content/40 uppercase tracking-widest">AI & Fintech</span>
            <h4 class="text-2xl md:text-3xl font-semibold text-surface-content tracking-tighter">Neural Defense</h4>
          </div>
          <p class="hidden md:block text-sm text-surface-content/50 max-w-xs leading-relaxed text-right">{{ $t('portfolio.project1') }}</p>
        </div>
      </div>

      <!-- Secondary project + CTA -->
      <div class="flex flex-col md:flex-row gap-8 md:gap-16 items-start border-t border-surface-container/40 pt-14 md:pt-16">
        <div class="group cursor-pointer flex flex-col gap-5 md:w-1/2">
          <div class="relative w-full aspect-[4/3] bg-surface-container overflow-hidden border border-surface-container/50">
            <img
              :src="indexImages.portfolioProject2"
              class="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
              alt="Vault Flow"
            />
            <span class="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest text-white/50 bg-black/30 px-2 py-1">02</span>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-[10px] font-bold text-surface-content/40 uppercase tracking-widest">Finance</span>
            <h4 class="text-2xl md:text-3xl font-semibold text-surface-content tracking-tighter">Vault Flow</h4>
          </div>
        </div>

        <div class="md:w-1/2 flex flex-col justify-between gap-8 md:py-2 self-stretch">
          <p class="text-base md:text-lg text-surface-content/50 leading-relaxed">{{ $t('portfolio.project2') }}</p>
          <BaseButton variant="ghost" class="flex md:hidden text-[10px] uppercase tracking-widest text-surface-content/40 hover:text-surface-content transition-colors w-fit">
            {{ $t('portfolio.view_full') }}
          </BaseButton>
        </div>
      </div>

    </div>
  </section>
</template>
