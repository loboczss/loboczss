<template>
  <main class="min-h-screen bg-surface pt-32 pb-24 px-6 md:px-12 lg:px-24">
    <div class="max-w-2xl mx-auto flex flex-col gap-12">
      
      <!-- Back Link -->
      <NuxtLink to="/privacy" class="text-[10px] font-bold uppercase tracking-[0.2em] text-primary hover:opacity-70 transition-opacity flex items-center gap-2 w-fit">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        {{ $t('privacy.back_home') }}
      </NuxtLink>

      <div v-if="!submitted" class="flex flex-col gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <!-- Modular Header -->
        <DeleteAccountHeader 
          :title="$t('delete_account.title')" 
          :description="$t('delete_account.desc')" 
        />

        <!-- Modular Form -->
        <DeleteAccountForm @success="submitted = true" />
      </div>

      <!-- Modular Success -->
      <DeleteAccountSuccess v-else />

    </div>
  </main>
</template>

<script setup lang="ts">
import DeleteAccountHeader from '~/components/delete-account/DeleteAccountHeader.vue';
import DeleteAccountForm from '~/components/delete-account/DeleteAccountForm.vue';
import DeleteAccountSuccess from '~/components/delete-account/DeleteAccountSuccess.vue';

const submitted = ref(false);

useSeoMeta({
  title: 'Excluir Conta // Loboczss',
  description: 'Solicitação de exclusão definitiva de dados conforme LGPD.'
});
</script>
