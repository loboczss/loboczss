<script setup lang="ts">
import { useI18n } from '#imports'
import HeroSection from '~/components/index/HeroSection.vue'
import ServicesSection from '~/components/index/ServicesSection.vue'
import PortfolioSection from '~/components/index/PortfolioSection.vue'
import SourceSection from '~/components/index/SourceSection.vue'
import ProcessSection from '~/components/index/ProcessSection.vue'
import ContactSection from '~/components/index/ContactSection.vue'

const { t } = useI18n()

useSeoMeta({
  title: 'Loboczss // Juan Reis',
  description: () => t('hero.subtitle'),
})
</script>

<template>
  <div>
    <HeroSection />
    <ServicesSection />
    <PortfolioSection />
    <SourceSection />
    <ProcessSection />
    <ContactSection />
  </div>
</template>
