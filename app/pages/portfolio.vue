<script setup lang="ts">
import { useI18n } from '#imports'
import PageHeader from '~/components/portal/PageHeader.vue'
import PortfolioSection from '~/components/index/PortfolioSection.vue'
import ContactSection from '~/components/index/ContactSection.vue'

const { t } = useI18n()

useSeoMeta({
  title: () => `${t('portfolio_page.title')} // Loboczss`,
  description: () => t('portfolio_page.desc'),
})
</script>

<template>
  <div>
    <PageHeader
      :title="$t('portfolio_page.title')"
      :lead="$t('portfolio_page.desc')"
    />
    <PortfolioSection />
    <ContactSection />
  </div>
</template>
