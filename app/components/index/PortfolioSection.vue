<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue';
</script>

<template>
  <section id="portfolio" class="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-surface-lowest relative z-10 border-t border-surface-container/50">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between mb-16 md:mb-24 gap-6">
      <h2 class="text-4xl md:text-5xl lg:text-7xl font-semibold text-surface-content tracking-tighter">{{ $t('portfolio.title1') }}<br/>{{ $t('portfolio.title2') }}</h2>
      <BaseButton variant="ghost" class="text-[10px] md:text-xs uppercase tracking-widest text-surface-content/50 hover:text-surface-content transition-colors">{{ $t('portfolio.view_full') }}</BaseButton>
    </div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
      <!-- Project 1 -->
      <div class="flex flex-col gap-6 cursor-pointer group">
        <div class="aspect-[4/3] bg-surface-container overflow-hidden rounded-none border border-surface-container/50 relative">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" class="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" alt="Cybersecurity Platform">
        </div>
        
        <div class="flex flex-col gap-2 pointer-events-none">
           <div class="flex items-center gap-4">
               <span class="text-[10px] md:text-xs font-bold text-surface-content/50 uppercase tracking-widest">AI & Fintech</span>
               <h4 class="text-xl md:text-2xl font-bold text-surface-content">Neural Defense</h4>
           </div>
           <p class="text-sm md:text-base opacity-60 text-surface-content">{{ $t('portfolio.project1') }}</p>
        </div>
      </div>

      <!-- Project 2 -->
      <div class="flex flex-col gap-6 cursor-pointer group">
        <div class="aspect-[4/3] bg-surface-container overflow-hidden rounded-none border border-surface-container/50 relative">
           <img src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=2000" class="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" alt="Finance Dashboard">
        </div>
        
        <div class="flex flex-col gap-2 pointer-events-none">
            <div class="flex items-center gap-4">
                <span class="text-[10px] md:text-xs font-bold text-surface-content/50 uppercase tracking-widest">Finance</span>
                <h4 class="text-xl md:text-2xl font-bold text-surface-content">Vault Flow</h4>
            </div>
            <p class="text-sm md:text-base opacity-60 text-surface-content">{{ $t('portfolio.project2') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
