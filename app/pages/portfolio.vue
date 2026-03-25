<template>
  <main class="min-h-screen bg-surface pt-32 pb-24">
    <!-- Header Especial da Página --->
    <PortfolioHeader 
      :title="$t('portfolio_page.title')" 
      :desc="$t('portfolio_page.desc')" 
    />
    
    <!-- Renderizamos a seção original do Portfólio --->
    <PortfolioSection />
  </main>
</template>

<script setup lang="ts">
import PortfolioHeader from '~/components/portfolio/PortfolioHeader.vue';
import PortfolioSection from '~/components/index/PortfolioSection.vue';

useSeoMeta({
  title: 'Projetos // Loboczss'
});
</script>
