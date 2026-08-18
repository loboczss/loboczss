<script setup lang="ts">
import { useI18n } from '#imports'
import PageHeader from '~/components/portal/PageHeader.vue'
import ServicesSection from '~/components/index/ServicesSection.vue'
import ProcessSection from '~/components/index/ProcessSection.vue'
import ContactSection from '~/components/index/ContactSection.vue'

const { t } = useI18n()

useSeoMeta({
  title: () => `${t('services_page.title')} // Loboczss`,
  description: () => t('services_page.desc'),
})
</script>

<template>
  <div>
    <PageHeader
      :title="$t('services_page.title')"
      :lead="$t('services_page.desc')"
    />
    <ServicesSection />
    <ProcessSection />
    <ContactSection />
  </div>
</template>
