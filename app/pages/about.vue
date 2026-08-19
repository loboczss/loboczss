<script setup lang="ts">
import { useI18n } from '#imports'
import PageHeader from '~/components/portal/PageHeader.vue'
import PortalSection from '~/components/portal/PortalSection.vue'
import StationMap from '~/components/about/StationMap.vue'
import ContactSection from '~/components/index/ContactSection.vue'

const { t } = useI18n()

useSeoMeta({
  title: () => `${t('header.about')} // Loboczss`,
  description: () => t('about.lead'),
})
</script>

<template>
  <div>
    <PageHeader
      :title="$t('about.title')"
      :lead="$t('about.lead')"
    />

    <PortalSection id="station" :label="$t('about.label')">
      <StationMap />
    </PortalSection>

    <PortalSection
      :label="$t('about.bio_title')"
      :heading="$t('about.bio_title')"
    >
      <p class="max-w-[62ch] text-lg font-light leading-relaxed text-mist md:text-xl">
        {{ $t('about.bio') }}
      </p>
    </PortalSection>

    <ContactSection />
  </div>
</template>
