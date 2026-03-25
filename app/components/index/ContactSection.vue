<script setup lang="ts">
import { ref } from '#imports';
import PremiumButton from '~/components/ui/PremiumButton.vue';
import BaseInput from '~/components/ui/BaseInput.vue';

const contactName = ref('');
const contactEmail = ref('');
const contactMsg = ref('');
</script>

<template>
  <section id="contact" class="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-surface relative z-10 border-t border-surface-container/50">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
      <div class="lg:w-1/2 flex flex-col gap-10 md:gap-12 w-full">
        <h2 class="text-4xl sm:text-5xl md:text-[4rem] font-semibold text-surface-content leading-tight tracking-tighter">
          {{ $t('contact.title') }}
        </h2>
        <div class="flex flex-col gap-8">
          <div class="flex items-center gap-6">
            <div class="w-1 h-12 bg-primary"></div>
            <div>
              <p class="text-[10px] md:text-xs font-bold opacity-50 uppercase tracking-widest text-surface-content">{{ $t('contact.direct_line') }}</p>
              <p class="text-xl md:text-2xl font-medium text-surface-content italic">+55 68 99255-2607</p>
            </div>
          </div>
          <div class="flex items-center gap-6">
            <div class="w-1 h-12 bg-secondary"></div>
            <div>
              <p class="text-[10px] md:text-xs font-bold opacity-50 uppercase tracking-widest text-surface-content">{{ $t('contact.email') }}</p>
              <p class="text-xl md:text-2xl font-medium text-surface-content italic break-all">juan@loboczss.cloud</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="lg:w-1/2 w-full bg-surface-lowest p-8 md:p-12 border border-surface-container/50">
        <div class="flex flex-col gap-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BaseInput v-model="contactName" id="con-name" :label="$t('contact.name_label')" :placeholder="$t('contact.name_ph')" />
            <BaseInput v-model="contactEmail" id="con-email" :label="$t('contact.email_label')" placeholder="juan@loboczss.cloud" />
          </div>
          <BaseInput v-model="contactMsg" id="con-msg" :label="$t('contact.form_span')" :placeholder="$t('contact.msg_placeholder')" />
          <div class="mt-4 md:mt-6">
            <PremiumButton variant="primary" class="w-full text-sm md:text-lg tracking-widest uppercase font-bold justify-center">{{ $t('contact.submit') }}</PremiumButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
