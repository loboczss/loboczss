<template>
  <main class="min-h-screen bg-surface pt-32 pb-24">
    <!-- Header Especial da Página --->
    <ContactHeader 
      :title="$t('contact_page.title')" 
      :desc="$t('contact_page.desc')" 
    />
    
    <!-- Renderizamos a seção original de Contato --->
    <ContactSection />
  </main>
</template>

<script setup lang="ts">
import ContactHeader from '~/components/contact/ContactHeader.vue';
import ContactSection from '~/components/index/ContactSection.vue';

useSeoMeta({
  title: 'Contato // Loboczss'
});
</script>
