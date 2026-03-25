<template>
  <section id="services" class="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-surface relative z-10 border-t border-surface-container/50">
    <div class="grid grid-cols-1 xl:grid-cols-12 gap-16 md:gap-24 w-full max-w-7xl mx-auto">
      <div class="xl:col-span-4 flex flex-col gap-6 md:gap-8 justify-start">
        <span class="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em]">{{ $t('services.span') }}</span>
        <h3 class="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-semibold text-surface-content tracking-tighter leading-[1.1]">
          {{ $t('services.title') }}
        </h3>
        <p class="text-base md:text-lg opacity-60 leading-relaxed max-w-sm text-surface-content">
          {{ $t('services.desc') }}
        </p>
      </div>
      
      <div class="xl:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-surface-container overflow-hidden rounded-none border border-surface-container">
        <div class="bg-surface-lowest p-8 md:p-12 lg:p-16 flex flex-col gap-8 transition-colors duration-300">
          <div class="w-12 h-12 md:w-16 md:h-16 flex items-center justify-start text-surface-content opacity-40">
            <svg class="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
          </div>
          <div class="flex flex-col gap-4">
            <h4 class="text-xl md:text-2xl font-bold text-surface-content tracking-tight">{{ $t('services.apps_title') }}</h4>
            <p class="text-sm md:text-base leading-relaxed opacity-60 text-surface-content">{{ $t('services.apps_desc') }}</p>
          </div>
        </div>

        <div class="bg-surface-lowest p-8 md:p-12 lg:p-16 flex flex-col gap-8 transition-colors duration-300">
          <div class="w-12 h-12 md:w-16 md:h-16 flex items-center justify-start text-surface-content opacity-40">
            <svg class="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
          </div>
          <div class="flex flex-col gap-4">
            <h4 class="text-xl md:text-2xl font-bold text-surface-content tracking-tight">{{ $t('services.web_title') }}</h4>
            <p class="text-sm md:text-base leading-relaxed opacity-60 text-surface-content">{{ $t('services.web_desc') }}</p>
          </div>
        </div>

        <div class="bg-surface-lowest p-8 md:p-12 lg:p-16 flex flex-col gap-8 md:col-span-2 transition-colors duration-300">
          <div class="w-12 h-12 md:w-16 md:h-16 flex items-center justify-start text-surface-content opacity-40">
            <svg class="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div class="flex flex-col gap-4">
            <h4 class="text-xl md:text-2xl font-bold text-surface-content tracking-tight">{{ $t('services.ai_title') }}</h4>
            <p class="text-sm md:text-base leading-relaxed opacity-60 text-surface-content max-w-2xl">{{ $t('services.ai_desc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
