<template>
  <main class="min-h-screen bg-surface pt-32 pb-24">
    <!-- Header Especial da Página --->
    <ServicesHeader 
      :title="$t('services_page.title')" 
      :desc="$t('services_page.desc')" 
    />
    
    <!-- Renderizamos a seção original de Serviços --->
    <ServicesSection />
  </main>
</template>

<script setup lang="ts">
import ServicesHeader from '~/components/services/ServicesHeader.vue';
import ServicesSection from '~/components/index/ServicesSection.vue';

useSeoMeta({
  title: 'Serviços // Loboczss'
});
</script>
