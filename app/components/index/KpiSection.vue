<script setup lang="ts">
// Kpi Section
</script>

<template>
  <section class="py-20 md:py-28 px-6 md:px-12 lg:px-24 bg-primary text-white relative overflow-hidden">

    <!-- Subtle background diagonal lines -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.06]"
      style="background-image: repeating-linear-gradient(135deg, white 0, white 1px, transparent 0, transparent 50%); background-size: 32px 32px;">
    </div>

    <div class="max-w-7xl mx-auto flex flex-col gap-10 md:gap-14 relative z-10">
      <span class="text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">{{ $t('kpis.span') }}</span>

      <div class="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
        <div class="flex flex-col gap-2 pr-6 md:pr-10">
          <span class="text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-black italic tracking-tighter leading-none">{{ $t('kpis.val1') }}</span>
          <span class="text-[10px] uppercase tracking-[0.25em] opacity-50">{{ $t('kpis.lbl1') }}</span>
        </div>
        <div class="flex flex-col gap-2 px-6 md:px-10">
          <span class="text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-black italic tracking-tighter leading-none">{{ $t('kpis.val2') }}</span>
          <span class="text-[10px] uppercase tracking-[0.25em] opacity-50">{{ $t('kpis.lbl2') }}</span>
        </div>
        <div class="flex flex-col gap-2 px-6 md:px-10">
          <span class="text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-black italic tracking-tighter leading-none">{{ $t('kpis.val3') }}</span>
          <span class="text-[10px] uppercase tracking-[0.25em] opacity-50">{{ $t('kpis.lbl3') }}</span>
        </div>
        <div class="flex flex-col gap-2 pl-6 md:pl-10">
          <span class="text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-black italic tracking-tighter leading-none">{{ $t('kpis.val4') }}</span>
          <span class="text-[10px] uppercase tracking-[0.25em] opacity-50">{{ $t('kpis.lbl4') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
