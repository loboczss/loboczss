<script setup lang="ts">
// Footer context: Loboczss (Juan Reis)
</script>

<template>
  <footer class="bg-surface-lowest py-16 md:py-24 px-6 md:px-12 lg:px-24 relative z-10 border-t border-white/5 overflow-hidden">
    <div class="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 max-w-7xl mx-auto">
      <div class="md:col-span-2 flex flex-col gap-8 md:gap-12">
        <div class="flex flex-col gap-4 md:gap-6">
          <h4 class="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-surface-content opacity-80 italic">Loboczss</h4>
          <p class="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-semibold text-surface-content tracking-tighter leading-[1.1]">
             {{ $t('footer.desc') }}
          </p>
        </div>
        
        <div class="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-12">
           <a href="mailto:juan@loboczss.cloud" class="text-base md:text-xl font-medium text-surface-content/50 hover:text-primary transition-all underline decoration-1 underline-offset-8">juan@loboczss.cloud</a>
           <a href="https://wa.me/5568992552607" class="text-base md:text-xl font-medium text-surface-content/50 hover:text-primary transition-all underline decoration-1 underline-offset-8">+55 68 99255-2607</a>
        </div>
      </div>

      <div class="flex flex-col gap-6 md:gap-8">
        <span class="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary">{{ $t('footer.artifacts') }}</span>
        <div class="flex flex-col gap-4 text-xs md:text-sm text-surface-content opacity-60">
          <NuxtLink to="/" class="hover:text-primary transition-colors">Neural Defense</NuxtLink>
          <NuxtLink to="/" class="hover:text-primary transition-colors">Vault Flow</NuxtLink>
          <NuxtLink to="/" class="hover:text-primary transition-colors">Aether Protocol</NuxtLink>
          <NuxtLink to="/" class="hover:text-primary transition-colors">Mind Graph</NuxtLink>
        </div>
      </div>

      <div class="flex flex-col gap-6 md:gap-8">
        <span class="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-secondary">{{ $t('footer.social') }}</span>
        <div class="flex flex-col gap-4 text-xs md:text-sm text-surface-content opacity-60">
           <a href="https://github.com/loboczss" target="_blank" class="hover:text-primary transition-colors flex items-center gap-2">GitHub <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/></svg></a>
           <a href="https://instagram.com/loboczss" target="_blank" class="hover:text-primary transition-colors">Instagram</a>
           <a href="#" class="hover:text-primary transition-colors">LinkedIn</a>
           <a href="#" class="hover:text-primary transition-colors">Twitter // X</a>
        </div>
      </div>
    </div>
    
    <div class="mt-24 md:mt-32 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] opacity-30 gap-6 text-center md:text-left">
      <div class="flex flex-col md:flex-row items-center gap-4">
        <p>{{ $t('footer.rights') }}</p>
        <NuxtLink to="/privacy" class="hover:text-primary transition-colors underline decoration-1 underline-offset-4">{{ $t('footer.privacy') }}</NuxtLink>
      </div>
      <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-surface-content">
         <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></span> {{ $t('footer.status') }}</span>
         <span>{{ $t('footer.cloud') }}</span>
      </div>
    </div>
  </footer>
</template>
