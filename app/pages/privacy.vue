<template>
  <main class="min-h-screen bg-surface pt-32 pb-24 px-6 md:px-12 lg:px-24">
    <div class="max-w-3xl mx-auto flex flex-col gap-12">
      <!-- Header Component -->
      <PrivacyHeader 
        :title="$t('privacy.title')" 
        :update="$t('privacy.last_update')" 
      />

      <!-- Content -->
      <article class="flex flex-col gap-10 overflow-hidden">
        <p class="text-lg italic font-medium text-surface-content/80 leading-relaxed">
          {{ $t('privacy.intro') }}
        </p>

        <PrivacySection 
          :title="$t('privacy.sec1_title')" 
          :content="$t('privacy.sec1_content')" 
        />

        <PrivacySection 
          :title="$t('privacy.sec2_title')" 
          :content="$t('privacy.sec2_content')" 
        />

        <PrivacySection 
          :title="$t('privacy.sec3_title')" 
          :content="$t('privacy.sec3_content')" 
        />

        <PrivacySection 
          :title="$t('privacy.sec4_title')" 
          :content="$t('privacy.sec4_content')" 
        />

        <PrivacySection 
          :title="$t('privacy.sec5_title')" 
          :content="$t('privacy.sec5_content')" 
        />

        <PrivacySection 
          :title="$t('privacy.sec6_title')" 
          :content="$t('privacy.sec6_content')" 
        />

        <!-- Footer Info -->
        <div class="mt-12 p-8 bg-surface-container/30 border border-surface-container/50 rounded-2xl">
          <p class="text-sm font-medium text-surface-content/80 leading-relaxed">
            {{ $t('privacy.contact_info') }}
          </p>
        </div>
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
import PrivacyHeader from '~/components/privacy/PrivacyHeader.vue';
import PrivacySection from '~/components/privacy/PrivacySection.vue';

useSeoMeta({
  title: 'Privacidade // Loboczss',
  description: 'Nossa política de privacidade e compromisso com a proteção de dados.'
})
</script>
