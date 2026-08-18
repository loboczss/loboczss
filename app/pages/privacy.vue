<script setup lang="ts">
import { useI18n } from '#imports'
import PageHeader from '~/components/portal/PageHeader.vue'
import PrivacySection from '~/components/privacy/PrivacySection.vue'
import PortalButton from '~/components/portal/PortalButton.vue'

const { t } = useI18n()

const sections = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
  index: String(n).padStart(2, '0'),
  title: `privacy.sec${n}_title`,
  content: `privacy.sec${n}_content`,
}))

useSeoMeta({
  title: () => `${t('footer.privacy')} // Loboczss`,
  description: () => t('privacy.seo_desc'),
})
</script>

<template>
  <div class="bg-void/90 backdrop-blur-sm">
    <PageHeader
      :title="$t('privacy.title')"
      :meta="$t('privacy.last_update')"
    />

    <div class="mx-auto w-full max-w-portal px-6 pb-28 md:px-10">
      <div class="max-w-3xl">
        <p class="max-w-[68ch] pb-4 text-lg font-light leading-relaxed text-mist">
          {{ $t('privacy.intro') }}
        </p>

        <PrivacySection
          v-for="s in sections"
          :key="s.index"
          :index="s.index"
          :title="$t(s.title)"
          :content="$t(s.content)"
        >
          <template v-if="s.index === '07'" #footer>
            <PortalButton to="/delete-account" variant="secondary" class="mt-4 w-full sm:w-auto sm:min-w-[19rem]">
              {{ $t('privacy.delete_link') }}
            </PortalButton>
          </template>
        </PrivacySection>

        <div class="mt-12 border border-[var(--frame)] p-8">
          <p class="text-read text-mist/80">{{ $t('privacy.contact_info') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
