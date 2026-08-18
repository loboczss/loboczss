<script setup lang="ts">
import { ref, reactive, useI18n } from '#imports'
import PortalField from '~/components/portal/PortalField.vue'
import PortalButton from '~/components/portal/PortalButton.vue'

const { t } = useI18n()

const loading = ref(false)
const submitError = ref('')
const emit = defineEmits<{ success: [] }>()

const form = reactive({ email: '', reason: '', agreed: false })

const submit = async () => {
  submitError.value = ''
  loading.value = true
  try {
    await $fetch('/api/delete-account', {
      method: 'POST',
      body: { email: form.email, reason: form.reason, agreed: form.agreed },
    })
    emit('success')
  } catch {
    submitError.value = t('delete_account.error_failed')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form class="flex flex-col gap-9" @submit.prevent="submit">
    <PortalField
      id="d-email"
      v-model="form.email"
      type="email"
      required
      :label="$t('delete_account.email_label')"
      :placeholder="$t('delete_account.email_ph')"
      :help="$t('delete_account.email_help')"
    />

    <PortalField
      id="d-reason"
      v-model="form.reason"
      multiline
      :rows="5"
      :label="$t('delete_account.reason_label')"
      :placeholder="$t('delete_account.reason_ph')"
    />

    <label class="dcheck group">
      <input v-model="form.agreed" type="checkbox" required class="dcheck__input" />
      <span class="dcheck__box" aria-hidden="true">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 8.5L6.5 12L13 4.5" />
        </svg>
      </span>
      <span class="text-sm leading-relaxed text-mist">{{ $t('delete_account.confirm_label') }}</span>
    </label>

    <div class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <p v-if="submitError" role="alert" class="text-meta uppercase text-incandescent">{{ submitError }}</p>
      <span v-else class="text-micro uppercase text-mist/85">{{ $t('delete_account.legal_note') }}</span>

      <PortalButton type="submit" variant="primary" :loading="loading" class="sm:min-w-[19rem]">
        {{ loading ? $t('delete_account.sending') : $t('delete_account.submit_btn') }}
      </PortalButton>
    </div>
  </form>
</template>

<style scoped>
.dcheck {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  cursor: pointer;
}

.dcheck__input {
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
}

.dcheck__box {
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: 0.15rem;
  border: 1px solid var(--frame-strong);
  color: transparent;
  transition:
    border-color 320ms cubic-bezier(0.16, 1, 0.3, 1),
    color 320ms cubic-bezier(0.16, 1, 0.3, 1);
}

.dcheck__box svg {
  width: 0.7rem;
  height: 0.7rem;
}

.dcheck:hover .dcheck__box {
  border-color: var(--mist);
}

.dcheck__input:checked + .dcheck__box {
  border-color: var(--incandescent);
  color: var(--incandescent);
}

.dcheck__input:focus-visible + .dcheck__box {
  outline: 1px solid var(--incandescent);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .dcheck__box {
    transition-duration: 1ms;
  }
}
</style>
