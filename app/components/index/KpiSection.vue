<script setup lang="ts">
// Kpi Section
</script>

<template>
  <section class="py-24 bg-primary text-white text-center flex flex-col gap-8 transition-colors duration-500 items-center">
    <span class="text-xs font-bold uppercase tracking-[0.3em]">{{ $t('kpis.span') }}</span>
    <div class="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12">
      <div class="flex flex-col gap-2">
        <span class="text-5xl md:text-7xl font-black italic tracking-tighter">{{ $t('kpis.val1') }}</span>
        <span class="text-xs uppercase tracking-widest opacity-80">{{ $t('kpis.lbl1') }}</span>
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-5xl md:text-7xl font-black italic tracking-tighter">{{ $t('kpis.val2') }}</span>
        <span class="text-xs uppercase tracking-widest opacity-80">{{ $t('kpis.lbl2') }}</span>
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-5xl md:text-7xl font-black italic tracking-tighter">{{ $t('kpis.val3') }}</span>
        <span class="text-xs uppercase tracking-widest opacity-80">{{ $t('kpis.lbl3') }}</span>
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-5xl md:text-7xl font-black italic tracking-tighter">{{ $t('kpis.val4') }}</span>
        <span class="text-xs uppercase tracking-widest opacity-80">{{ $t('kpis.lbl4') }}</span>
      </div>
    </div>
  </section>
</template>
