<script setup lang="ts">
import { useI18n } from '#imports'
import PageHeader from '~/components/portal/PageHeader.vue'
import ProcessSection from '~/components/index/ProcessSection.vue'
import ContactSection from '~/components/index/ContactSection.vue'

const { t } = useI18n()

useSeoMeta({
  title: () => `${t('budget_page.span')} // Loboczss`,
  description: () => t('budget_page.desc'),
})
</script>

<template>
  <div>
    <PageHeader
      :title="$t('budget_page.title')"
      :lead="$t('budget_page.desc')"
    />
    <ProcessSection />
    <ContactSection />
  </div>
</template>
