<script setup lang="ts">
import { ref, useI18n } from '#imports'
import PageHeader from '~/components/portal/PageHeader.vue'
import DeleteAccountForm from '~/components/delete-account/DeleteAccountForm.vue'
import DeleteAccountSuccess from '~/components/delete-account/DeleteAccountSuccess.vue'

const { t } = useI18n()
const submitted = ref(false)

useSeoMeta({
  title: () => `${t('delete_account.title')} // Loboczss`,
  description: () => t('delete_account.desc'),
})
</script>

<template>
  <div class="bg-void/90 backdrop-blur-sm">
    <PageHeader
      :title="$t('delete_account.title')"
      :lead="$t('delete_account.desc')"
    />

    <div class="mx-auto w-full max-w-portal px-6 pb-28 md:px-10">
      <div class="max-w-2xl">
        <DeleteAccountForm v-if="!submitted" @success="submitted = true" />
        <DeleteAccountSuccess v-else />
      </div>
    </div>
  </div>
</template>
