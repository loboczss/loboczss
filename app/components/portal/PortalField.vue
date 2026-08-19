<script setup lang="ts">
import { computed } from '#imports'

/**
 * Text field in the portal grammar: no fill, a 1px frame, an uppercase
 * tracked placeholder, and incandescent reserved for focus and error.
 */
const props = withDefaults(
  defineProps<{
    modelValue?: string
    id: string
    label: string
    placeholder?: string
    type?: 'text' | 'email' | 'tel'
    required?: boolean
    multiline?: boolean
    rows?: number
    error?: string
    help?: string
  }>(),
  {
    modelValue: '',
    placeholder: '',
    type: 'text',
    required: false,
    multiline: false,
    rows: 6,
    error: '',
    help: '',
  }
)

const emit = defineEmits<{ 'update:modelValue': [value: string]; blur: [] }>()

const describedBy = computed(() => {
  const ids: string[] = []
  if (props.help) ids.push(`${props.id}-help`)
  if (props.error) ids.push(`${props.id}-error`)
  return ids.length ? ids.join(' ') : undefined
})

const onInput = (e: Event) => emit('update:modelValue', (e.target as HTMLInputElement).value)
</script>

<template>
  <div class="flex w-full flex-col gap-3">
    <label :for="props.id" class="pfield__label text-caps uppercase">
      {{ props.label }}
      <span v-if="props.required" class="text-incandescent" aria-hidden="true">*</span>
    </label>

    <textarea
      v-if="props.multiline"
      :id="props.id"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      :required="props.required"
      :rows="props.rows"
      :aria-invalid="Boolean(props.error)"
      :aria-describedby="describedBy"
      class="pfield"
      :class="props.error && 'pfield--error'"
      @input="onInput"
      @blur="emit('blur')"
    ></textarea>

    <input
      v-else
      :id="props.id"
      :type="props.type"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      :required="props.required"
      :aria-invalid="Boolean(props.error)"
      :aria-describedby="describedBy"
      class="pfield"
      :class="props.error && 'pfield--error'"
      @input="onInput"
      @blur="emit('blur')"
    />

    <p v-if="props.help" :id="`${props.id}-help`" class="text-meta uppercase text-mist">
      {{ props.help }}
    </p>

    <p v-if="props.error" :id="`${props.id}-error`" class="text-meta uppercase text-incandescent">
      {{ props.error }}
    </p>
  </div>
</template>

<style scoped>
.pfield__label {
  color: var(--mist);
  transition: color 420ms cubic-bezier(0.16, 1, 0.3, 1);
}

.flex:focus-within .pfield__label {
  color: var(--incandescent);
}

.pfield {
  width: 100%;
  padding: 1.05rem 1.25rem;
  background: rgb(11 6 32 / 0.55);
  border: 1px solid var(--frame-control);
  color: var(--mist);
  font-size: theme('fontSize.read[0]');
  line-height: 1.6;
  outline: none;
  resize: vertical;
  transition:
    border-color 420ms cubic-bezier(0.16, 1, 0.3, 1),
    background-color 420ms cubic-bezier(0.16, 1, 0.3, 1);
}

.pfield::placeholder {
  /* Measured 1.83:1 at 0.65 opacity. Placeholders are named by the craft
     floor and hold the same 4.5:1 bar as body text. */
  color: var(--mist);
  opacity: 1;
  font-size: 0.625rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
}

.pfield:focus {
  border-color: var(--incandescent);
  background: rgb(20 12 51 / 0.75);
}

.pfield--error {
  border-color: var(--incandescent-deep);
}

@media (prefers-reduced-motion: reduce) {
  .pfield,
  .pfield__label {
    transition-duration: 1ms;
  }
}
</style>
