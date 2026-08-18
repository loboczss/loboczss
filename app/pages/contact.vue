<script setup lang="ts">
import { useI18n } from '#imports'
import PageHeader from '~/components/portal/PageHeader.vue'
import ContactSection from '~/components/index/ContactSection.vue'

const { t } = useI18n()

useSeoMeta({
  title: () => `${t('contact_page.title')} // Loboczss`,
  description: () => t('contact_page.desc'),
})
</script>

<template>
  <div>
    <PageHeader
      :title="$t('contact_page.title')"
      :lead="$t('contact_page.desc')"
    />
    <ContactSection />
  </div>
</template>
