<script setup lang="ts">
import ContactSection from '~/components/index/ContactSection.vue';

useSeoMeta({
  title: 'Orcamento // Loboczss',
  description: 'Compartilhe os detalhes do seu projeto e receba uma proposta personalizada.',
});
</script>

<template>
  <main class="min-h-screen bg-surface pt-32 pb-24">
    <section class="px-6 md:px-12 lg:px-24 pb-16 md:pb-20">
      <div class="max-w-7xl mx-auto flex flex-col gap-12">
        <div class="flex flex-col gap-6 border-b border-surface-container/40 pb-10">
          <span class="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">{{ $t('budget_page.span') }}</span>
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.02] text-surface-content max-w-4xl">
            {{ $t('budget_page.title') }}
          </h1>
          <p class="text-lg md:text-xl text-surface-content/60 leading-relaxed max-w-3xl">
            {{ $t('budget_page.desc') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-surface-container/40 border border-surface-container/40">
          <article class="bg-surface-lowest p-8 md:p-10 flex flex-col gap-4">
            <span class="text-[10px] font-bold uppercase tracking-widest text-primary/70">01</span>
            <h2 class="text-2xl font-semibold tracking-tight text-surface-content">{{ $t('budget_page.step1_title') }}</h2>
            <p class="text-sm md:text-base text-surface-content/60 leading-relaxed">{{ $t('budget_page.step1_desc') }}</p>
          </article>

          <article class="bg-surface-lowest p-8 md:p-10 flex flex-col gap-4">
            <span class="text-[10px] font-bold uppercase tracking-widest text-primary/70">02</span>
            <h2 class="text-2xl font-semibold tracking-tight text-surface-content">{{ $t('budget_page.step2_title') }}</h2>
            <p class="text-sm md:text-base text-surface-content/60 leading-relaxed">{{ $t('budget_page.step2_desc') }}</p>
          </article>

          <article class="bg-surface-lowest p-8 md:p-10 flex flex-col gap-4">
            <span class="text-[10px] font-bold uppercase tracking-widest text-primary/70">03</span>
            <h2 class="text-2xl font-semibold tracking-tight text-surface-content">{{ $t('budget_page.step3_title') }}</h2>
            <p class="text-sm md:text-base text-surface-content/60 leading-relaxed">{{ $t('budget_page.step3_desc') }}</p>
          </article>
        </div>
      </div>
    </section>

    <ContactSection />
  </main>
</template>
