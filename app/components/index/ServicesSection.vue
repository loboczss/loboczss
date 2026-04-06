<template>
  <section id="services" class="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-surface-lowest relative z-10 border-t border-surface-container/50">
    <div class="max-w-7xl mx-auto">

      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
        <div class="flex flex-col gap-4">
          <span class="text-primary text-[10px] font-bold uppercase tracking-[0.3em]">{{ $t('services.span') }}</span>
          <h2 class="text-5xl sm:text-6xl lg:text-7xl font-semibold text-surface-content tracking-tighter leading-[1]">
            {{ $t('services.title') }}
          </h2>
        </div>
        <p class="text-base md:text-lg opacity-50 leading-relaxed max-w-sm text-surface-content">
          {{ $t('services.desc') }}
        </p>
      </div>

      <!-- Services list -->
      <div class="flex flex-col">

        <!-- Service 1 -->
        <div class="group flex flex-col md:flex-row gap-6 md:gap-16 py-10 md:py-14 border-t border-surface-container/40 hover:pl-2 md:hover:pl-4 transition-all duration-500 cursor-default">
          <span class="text-[10px] font-bold uppercase tracking-widest text-primary/60 md:w-16 shrink-0 mt-1">01</span>
          <div class="flex-1 flex flex-col md:flex-row gap-6 md:gap-16">
            <div class="flex items-center gap-5 flex-1 min-w-0">
              <div class="w-10 h-10 flex items-center justify-center text-surface-content/25 group-hover:text-primary transition-colors duration-300 shrink-0">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.2" viewBox="0 0 24 24"><path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
              </div>
              <h3 class="text-2xl md:text-3xl lg:text-4xl font-semibold text-surface-content tracking-tighter">{{ $t('services.apps_title') }}</h3>
            </div>
            <p class="text-sm md:text-base leading-relaxed opacity-50 text-surface-content md:max-w-md">{{ $t('services.apps_desc') }}</p>
          </div>
        </div>

        <!-- Service 2 -->
        <div class="group flex flex-col md:flex-row gap-6 md:gap-16 py-10 md:py-14 border-t border-surface-container/40 hover:pl-2 md:hover:pl-4 transition-all duration-500 cursor-default">
          <span class="text-[10px] font-bold uppercase tracking-widest text-primary/60 md:w-16 shrink-0 mt-1">02</span>
          <div class="flex-1 flex flex-col md:flex-row gap-6 md:gap-16">
            <div class="flex items-center gap-5 flex-1 min-w-0">
              <div class="w-10 h-10 flex items-center justify-center text-surface-content/25 group-hover:text-primary transition-colors duration-300 shrink-0">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.2" viewBox="0 0 24 24"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
              </div>
              <h3 class="text-2xl md:text-3xl lg:text-4xl font-semibold text-surface-content tracking-tighter">{{ $t('services.web_title') }}</h3>
            </div>
            <p class="text-sm md:text-base leading-relaxed opacity-50 text-surface-content md:max-w-md">{{ $t('services.web_desc') }}</p>
          </div>
        </div>

        <!-- Service 3 -->
        <div class="group flex flex-col md:flex-row gap-6 md:gap-16 py-10 md:py-14 border-t border-surface-container/40 hover:pl-2 md:hover:pl-4 transition-all duration-500 cursor-default">
          <span class="text-[10px] font-bold uppercase tracking-widest text-primary/60 md:w-16 shrink-0 mt-1">03</span>
          <div class="flex-1 flex flex-col md:flex-row gap-6 md:gap-16">
            <div class="flex items-center gap-5 flex-1 min-w-0">
              <div class="w-10 h-10 flex items-center justify-center text-surface-content/25 group-hover:text-primary transition-colors duration-300 shrink-0">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 class="text-2xl md:text-3xl lg:text-4xl font-semibold text-surface-content tracking-tighter">{{ $t('services.ai_title') }}</h3>
            </div>
            <p class="text-sm md:text-base leading-relaxed opacity-50 text-surface-content md:max-w-md">{{ $t('services.ai_desc') }}</p>
          </div>
        </div>

        <div class="h-px bg-surface-container/40"></div>
      </div>
    </div>
  </section>
</template>
