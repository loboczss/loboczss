<script setup lang="ts">
import PortalButton from '~/components/portal/PortalButton.vue'
</script>

<template>
  <div class="flex flex-col items-start gap-8 border border-[var(--frame)] p-10 md:p-14">
    <span class="flex h-14 w-14 items-center justify-center rounded-full border border-incandescent text-incandescent">
      <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </span>

    <h2 class="text-2xl font-light uppercase tracking-wide text-white md:text-3xl">
      {{ $t('delete_account.success_title') }}
    </h2>

    <p class="max-w-[62ch] text-read text-mist">
      {{ $t('delete_account.success_msg') }}
    </p>

    <PortalButton to="/" variant="secondary" class="sm:min-w-[17rem]">
      {{ $t('privacy.back_home') }}
    </PortalButton>
  </div>
</template>
