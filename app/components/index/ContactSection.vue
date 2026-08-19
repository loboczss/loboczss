<script setup lang="ts">
import { ref, reactive, computed, useI18n } from '#imports'
import PortalSection from '~/components/portal/PortalSection.vue'
import PortalField from '~/components/portal/PortalField.vue'
import PortalButton from '~/components/portal/PortalButton.vue'
import ContactStrip from '~/components/portal/ContactStrip.vue'

/**
 * The conversion path, and the motion budget is spent accordingly.
 *
 * Fields are touched constantly while filling a form, so their feedback is
 * near-imperceptible by design — a frame and a label that respond, nothing
 * that performs. Sending happens once, which is where the budget goes: the
 * form gives way to a confirmation that MATERIALISES (blur and scale
 * resolving together, anchored where the button was) rather than
 * cross-fading, because a fade reads as a swap and a material reads as an
 * arrival.
 *
 * Validation is inline, on blur, never held until submit. Telling someone
 * their email is wrong only after they commit is a punishment, not feedback.
 */
const { t } = useI18n()

type FieldKey = 'name' | 'email' | 'message'

const form = reactive({ name: '', email: '', message: '' })
const errors = reactive<Record<FieldKey, string>>({ name: '', email: '', message: '' })
const touched = reactive<Record<FieldKey, boolean>>({ name: false, email: false, message: false })

const sending = ref(false)
const sent = ref(false)
const failure = ref('')

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validate = (key: FieldKey): string => {
  const v = form[key].trim()
  if (key === 'name') return v ? '' : t('contact.err_name')
  if (key === 'email') return EMAIL.test(v) ? '' : t('contact.err_email')
  return v ? '' : t('contact.err_msg')
}

/** Complains only once the field has been left. */
const onBlur = (key: FieldKey) => {
  touched[key] = true
  errors[key] = validate(key)
}

/** Typing clears the complaint immediately; it does not wait for the next blur. */
const onInput = (key: FieldKey) => {
  if (errors[key]) errors[key] = validate(key)
}

const invalid = computed(() => (['name', 'email', 'message'] as FieldKey[]).some((k) => validate(k)))

const submit = async () => {
  failure.value = ''
  ;(['name', 'email', 'message'] as FieldKey[]).forEach((k) => {
    touched[k] = true
    errors[k] = validate(k)
  })
  if (invalid.value) return

  sending.value = true
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: { name: form.name, email: form.email, message: form.message },
    })
    sent.value = true
    form.name = ''
    form.email = ''
    form.message = ''
  } catch {
    failure.value = t('contact.error_failed')
  } finally {
    sending.value = false
  }
}

const again = () => {
  sent.value = false
  ;(['name', 'email', 'message'] as FieldKey[]).forEach((k) => {
    touched[k] = false
    errors[k] = ''
  })
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
      <div class="relative lg:col-span-7">
        <form v-if="!sent" class="flex flex-col gap-8" novalidate @submit.prevent="submit">
          <div class="grid gap-8 sm:grid-cols-2">
            <PortalField
              id="c-name"
              v-model="form.name"
              :label="$t('contact.name_label')"
              :placeholder="$t('contact.name_ph')"
              :error="touched.name ? errors.name : ''"
              required
              @blur="onBlur('name')"
              @update:model-value="onInput('name')"
            />
            <PortalField
              id="c-email"
              v-model="form.email"
              type="email"
              :label="$t('contact.email_label')"
              :placeholder="$t('contact.email_ph')"
              :error="touched.email ? errors.email : ''"
              required
              @blur="onBlur('email')"
              @update:model-value="onInput('email')"
            />
          </div>

          <PortalField
            id="c-msg"
            v-model="form.message"
            multiline
            :rows="7"
            :label="$t('contact.msg_label')"
            :placeholder="$t('contact.msg_placeholder')"
            :error="touched.message ? errors.message : ''"
            required
            @blur="onBlur('message')"
            @update:model-value="onInput('message')"
          />

          <div class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p v-if="failure" role="alert" class="text-meta uppercase text-incandescent">{{ failure }}</p>
            <span v-else class="text-micro uppercase text-mist/85">{{ $t('contact.reply_note') }}</span>

            <PortalButton type="submit" variant="primary" :loading="sending" class="sm:min-w-[17rem]">
              {{ sending ? $t('contact.sending') : $t('contact.submit') }}
            </PortalButton>
          </div>
        </form>

        <!-- Arrives as a material, anchored where the button was. -->
        <div v-else class="sent frame" role="status">
          <span class="sent__mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </span>
          <h3 class="sent__title text-title">{{ $t('contact.success_title') }}</h3>
          <p class="text-read max-w-[52ch] text-mist">{{ $t('contact.success_body') }}</p>
          <button type="button" class="sent__again text-caps uppercase" @click="again">
            {{ $t('contact.success_again') }}
          </button>
        </div>
      </div>

      <aside class="flex flex-col gap-8 lg:col-span-5">
        <p class="text-sm leading-relaxed text-mist">{{ $t('contact.aside') }}</p>
        <ContactStrip />
      </aside>
    </div>
  </PortalSection>
</template>

<style scoped>
.sent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 2.5rem;
  background: rgb(11 6 32 / 0.55);
  transform-origin: 75% 100%;
  animation: materialise 520ms var(--ease-out) both;
}

/* Blur and scale resolve together so the surface reads as arriving, not as
   a plain opacity swap. */
@keyframes materialise {
  from {
    opacity: 0;
    transform: scale(0.96);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }
}

.sent__mark {
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border: 1px solid var(--incandescent);
  border-radius: 999px;
  color: var(--incandescent);
}

.sent__mark svg {
  width: 1.25rem;
  height: 1.25rem;
}

.sent__title {
  color: #fff;
  font-weight: 200;
  text-transform: uppercase;
}

.sent__again {
  margin-top: 0.5rem;
  padding: 0;
  background: none;
  border: none;
  border-bottom: 1px solid var(--frame-control);
  color: var(--mist);
  cursor: pointer;
  transition: color 200ms var(--ease-out), border-color 200ms var(--ease-out);
}

.sent__again:hover,
.sent__again:focus-visible {
  color: var(--incandescent);
  border-color: var(--incandescent);
}

@keyframes fade-only {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .sent {
    animation: fade-only 200ms ease both;
  }
}

@media (prefers-reduced-transparency: reduce) {
  .sent {
    background: var(--void);
  }
}
</style>
