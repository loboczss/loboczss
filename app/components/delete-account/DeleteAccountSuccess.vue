<template>
  <div class="flex flex-col items-center text-center gap-6 py-12 animate-in fade-in zoom-in duration-700">
    <div class="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-4 border border-primary/10">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    </div>
    <h2 class="text-3xl font-bold tracking-tight text-surface-content uppercase">
       {{ $t('delete_account.success_title') }}
    </h2>
    <p class="text-surface-content/40 leading-relaxed max-w-sm italic">
       {{ $t('delete_account.success_msg') }}
    </p>
    <NuxtLink to="/" class="mt-10 px-8 py-3 bg-surface-container border border-surface-container/50 rounded-full text-primary font-bold uppercase tracking-widest text-[10px] hover:bg-primary hover:text-white transition-all duration-500">
       {{ $t('privacy.back_home') }}
    </NuxtLink>
  </div>
</template>
