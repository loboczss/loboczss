<script setup lang="ts">
import { definePageMeta } from '#imports';
import HeroSection from '~/components/index/HeroSection.vue';
import ServicesSection from '~/components/index/ServicesSection.vue';
import PortfolioSection from '~/components/index/PortfolioSection.vue';
import KpiSection from '~/components/index/KpiSection.vue';
import ContactSection from '~/components/index/ContactSection.vue';

// Loboczss Portfolio - The Neural Architect
definePageMeta({
  title: 'Loboczss | The Neural Architect | Apps, Sites & AI'
});
</script>

<template>
  <div class="min-h-screen bg-surface text-surface-content overflow-hidden selection:bg-primary/30 font-sans tracking-tight">
    
    <!-- Sections -->
    <HeroSection />
    <ServicesSection />
    <PortfolioSection />
    <KpiSection />
    <ContactSection />
    
  </div>
</template>

<style>
/* Inter font scale adjustment */
:root {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4 {
  letter-spacing: -0.04em;
}
</style>
