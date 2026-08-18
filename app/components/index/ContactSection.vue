<script setup lang="ts">
import { ref, useI18n } from '#imports'
import PortalSection from '~/components/portal/PortalSection.vue'
import PortalField from '~/components/portal/PortalField.vue'
import PortalButton from '~/components/portal/PortalButton.vue'
import ContactStrip from '~/components/portal/ContactStrip.vue'

const { t } = useI18n()

const name = ref('')
const email = ref('')
const message = ref('')
const sending = ref(false)
const error = ref('')
const success = ref('')

const submit = async () => {
  error.value = ''
  success.value = ''

  if (!name.value || !email.value || !message.value) {
    error.value = t('contact.error_required')
    return
  }

  sending.value = true
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: { name: name.value, email: email.value, message: message.value },
    })
    success.value = t('contact.success')
    name.value = ''
    email.value = ''
    message.value = ''
  } catch {
    error.value = t('contact.error_failed')
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <PortalSection
    id="contact"
    :label="$t('contact.label')"
    :heading="$t('contact.title')"
    :lead="$t('contact.lead')"
  >
    <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <form class="flex flex-col gap-8 lg:col-span-7" novalidate @submit.prevent="submit">
        <div class="grid gap-8 sm:grid-cols-2">
          <PortalField
            id="c-name"
            v-model="name"
            :label="$t('contact.name_label')"
            :placeholder="$t('contact.name_ph')"
            required
          />
          <PortalField
            id="c-email"
            v-model="email"
            type="email"
            :label="$t('contact.email_label')"
            :placeholder="$t('contact.email_ph')"
            required
          />
        </div>

        <PortalField
          id="c-msg"
          v-model="message"
          multiline
          :rows="7"
          :label="$t('contact.msg_label')"
          :placeholder="$t('contact.msg_placeholder')"
          required
        />

        <div class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p v-if="error" role="alert" class="text-meta uppercase text-incandescent">{{ error }}</p>
          <p v-else-if="success" role="status" class="text-meta uppercase text-mist">{{ success }}</p>
          <span v-else class="text-micro uppercase text-mist/85">{{ $t('contact.reply_note') }}</span>

          <PortalButton type="submit" variant="primary" :loading="sending" class="sm:min-w-[17rem]">
            {{ sending ? $t('contact.sending') : $t('contact.submit') }}
          </PortalButton>
        </div>
      </form>

      <aside class="flex flex-col gap-8 lg:col-span-5">
        <p class="text-sm leading-relaxed text-mist">{{ $t('contact.aside') }}</p>
        <ContactStrip />
      </aside>
    </div>
  </PortalSection>
</template>
