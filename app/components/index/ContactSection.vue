<script setup lang="ts">
import { ref } from '#imports';
import PremiumButton from '~/components/ui/PremiumButton.vue';
import BaseInput from '~/components/ui/BaseInput.vue';

const contactName = ref('');
const contactEmail = ref('');
const contactMsg = ref('');
const isSending = ref(false);
const submitError = ref('');
const submitSuccess = ref('');

const submitContact = async () => {
  submitError.value = '';
  submitSuccess.value = '';

  if (!contactName.value || !contactEmail.value || !contactMsg.value) {
    submitError.value = 'Preencha nome, email e mensagem.';
    return;
  }

  isSending.value = true;

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: contactName.value,
        email: contactEmail.value,
        message: contactMsg.value,
      },
    });

    submitSuccess.value = 'Mensagem enviada com sucesso.';
    contactName.value = '';
    contactEmail.value = '';
    contactMsg.value = '';
  } catch (error) {
    submitError.value = 'Nao foi possivel enviar agora. Tente novamente em instantes.';
  } finally {
    isSending.value = false;
  }
};
</script>

<template>
  <section id="contact" class="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-surface-lowest relative z-10 border-t border-surface-container/50">
    <div class="max-w-7xl mx-auto flex flex-col gap-16 md:gap-20">

      <!-- CTA headline row -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold text-surface-content leading-[1] tracking-tighter max-w-3xl">
          {{ $t('contact.title') }}
        </h2>

        <!-- Contact info sidebar -->
        <div class="flex flex-col gap-4 shrink-0">
          <div class="flex items-center gap-4">
            <div class="w-0.5 h-10 bg-primary shrink-0"></div>
            <div>
              <p class="text-[10px] font-bold opacity-40 uppercase tracking-widest text-surface-content">{{ $t('contact.direct_line') }}</p>
              <p class="text-base md:text-lg font-medium text-surface-content">+55 68 99255-2607</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-0.5 h-10 bg-secondary shrink-0"></div>
            <div>
              <p class="text-[10px] font-bold opacity-40 uppercase tracking-widest text-surface-content">{{ $t('contact.email') }}</p>
              <p class="text-base md:text-lg font-medium text-surface-content">juan@loboczss.cloud</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Form card -->
      <div class="bg-surface border border-surface-container/40 p-8 md:p-12 lg:p-14">
        <form class="flex flex-col gap-7" @submit.prevent="submitContact">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <BaseInput v-model="contactName" id="con-name" :label="$t('contact.name_label')" :placeholder="$t('contact.name_ph')" required />
            <BaseInput v-model="contactEmail" id="con-email" type="email" :label="$t('contact.email_label')" :placeholder="$t('contact.email_ph')" required />
          </div>
          <BaseInput v-model="contactMsg" id="con-msg" :label="$t('contact.form_span')" :placeholder="$t('contact.msg_placeholder')" required />
          <div class="flex justify-end mt-2">
            <PremiumButton variant="primary" :loading="isSending" class="text-sm tracking-widest uppercase font-bold justify-center px-14">
              {{ $t('contact.submit') }}
            </PremiumButton>
          </div>

          <p v-if="submitError" class="text-sm text-red-500/90 font-medium">{{ submitError }}</p>
          <p v-if="submitSuccess" class="text-sm text-emerald-500/90 font-medium">{{ submitSuccess }}</p>
        </form>
      </div>

    </div>
  </section>
</template>
