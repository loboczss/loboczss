<script setup lang="ts">
import { ref, onMounted, onUnmounted } from '#imports';
import DarkModeToggle from '~/components/DarkModeToggle.vue';
import LanguageSelector from '~/components/LanguageSelector.vue';

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.body.style.overflow = '';
});
</script>

<template>
  <header 
    class="fixed top-0 z-[100] w-full transition-all duration-300 border-b"
    :class="[
      isScrolled ? 'bg-surface/90 backdrop-blur-xl py-3 border-surface-container/50' : 'bg-transparent py-6 border-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
      
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 md:gap-3 group no-underline z-[110]">
        <div class="relative w-8 h-8 md:w-10 md:h-10">
          <img src="/favicon-dark.svg" class="w-full h-full object-contain hidden dark:block" alt="Loboczss Logo" />
          <img src="/favicon-light.svg" class="w-full h-full object-contain block dark:hidden" alt="Loboczss Logo" />
        </div>
        <p class="font-bold text-lg md:text-xl tracking-tighter text-surface-content uppercase">Loboczss<span class="text-primary">.</span></p>
      </NuxtLink>
      
      <!-- Desktop Nav -->
      <nav class="hidden lg:flex items-center gap-8 xl:gap-12 ml-auto pr-12 xl:pr-16">
        <NuxtLink to="/portfolio" class="text-[10px] font-bold uppercase tracking-[0.2em] text-surface-content/60 hover:text-primary transition-all">{{ $t('header.artifacts') }}</NuxtLink>
        <NuxtLink to="/services" class="text-[10px] font-bold uppercase tracking-[0.2em] text-surface-content/60 hover:text-primary transition-all">{{ $t('header.capabilities') }}</NuxtLink>
        <NuxtLink to="/contact" class="text-[10px] font-bold uppercase tracking-[0.2em] text-surface-content/60 hover:text-primary transition-all">{{ $t('header.connect') }}</NuxtLink>
        <NuxtLink to="/privacy" class="text-[10px] font-bold uppercase tracking-[0.2em] text-surface-content/60 hover:text-primary transition-all">{{ $t('header.privacy') }}</NuxtLink>
      </nav>
      
      <!-- Desktop Actions -->
      <div class="hidden lg:flex items-center gap-6 xl:gap-8">
        <LanguageSelector />
        <DarkModeToggle class="opacity-60 hover:opacity-100 transition-opacity" />
        <a href="mailto:juan@loboczss.cloud">
           <button class="bg-primary text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] border border-primary/20 hover:bg-primary/90 transition-all">
             {{ $t('header.init_call') }}
           </button>
        </a>
      </div>

      <!-- Mobile Controls (Theme/Lang next to Hamburger) -->
      <div class="flex lg:hidden items-center gap-4 z-[110]">
         <DarkModeToggle v-if="!isMenuOpen" class="opacity-70 scale-90" />
         <!-- Hamburger -->
         <button 
           @click="toggleMenu" 
           class="relative p-2 text-surface-content focus:outline-none flex flex-col justify-center items-end h-8 w-8"
           aria-label="Toggle Menu"
         >
           <span class="block h-0.5 bg-current rounded-full transition-all duration-300" :class="isMenuOpen ? 'w-6 rotate-45 translate-y-1' : 'w-6'"></span>
           <span class="block h-0.5 bg-current rounded-full transition-all duration-300 mt-1" :class="isMenuOpen ? 'w-0 opacity-0' : 'w-4'"></span>
           <span class="block h-0.5 bg-current rounded-full transition-all duration-300 mt-1" :class="isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-2'"></span>
         </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div 
      class="fixed inset-0 bg-surface z-[105] lg:hidden flex flex-col transition-all duration-500 ease-in-out"
      :class="isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'"
    >
        <!-- Content Container with Scroll for very small devices -->
        <div class="flex-1 overflow-y-auto px-10 py-32 flex flex-col gap-12">
            <nav class="flex flex-col gap-6 items-start">
              <NuxtLink to="/portfolio" @click="toggleMenu" class="text-3xl font-bold uppercase tracking-tight text-surface-content hover:text-primary transition-all">{{ $t('header.artifacts') }}</NuxtLink>
              <NuxtLink to="/services" @click="toggleMenu" class="text-3xl font-bold uppercase tracking-tight text-surface-content hover:text-primary transition-all">{{ $t('header.capabilities') }}</NuxtLink>
              <NuxtLink to="/contact" @click="toggleMenu" class="text-3xl font-bold uppercase tracking-tight text-surface-content hover:text-primary transition-all">{{ $t('header.connect') }}</NuxtLink>
              <NuxtLink to="/privacy" @click="toggleMenu" class="text-3xl font-bold uppercase tracking-tight text-surface-content hover:text-primary transition-all">{{ $t('header.privacy') }}</NuxtLink>
            </nav>

            <div class="flex flex-col gap-8 border-t border-surface-container pt-12">
               <div class="flex items-center justify-between">
                  <span class="text-[10px] font-bold uppercase tracking-widest opacity-50">{{ $t('header.language') || 'Language' }}</span>
                  <LanguageSelector />
               </div>
               <div class="flex items-center justify-between">
                  <span class="text-[10px] font-bold uppercase tracking-widest opacity-50">{{ $t('header.appearance') || 'Appearance' }}</span>
                  <DarkModeToggle />
               </div>
               
               <a href="mailto:juan@loboczss.cloud" class="w-full mt-4" @click="toggleMenu">
                  <button class="w-full bg-primary text-white py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-xl shadow-primary/20">
                    {{ $t('header.init_call') }}
                  </button>
               </a>
            </div>
            
            <div class="mt-auto pt-12 pb-6">
                <p class="text-[10px] font-bold uppercase tracking-widest opacity-30 text-center">Loboczss Architectural 2026</p>
            </div>
        </div>
    </div>
  </header>
</template>
