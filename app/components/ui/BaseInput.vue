<script setup lang="ts">
import { computed } from '#imports';

interface Props {
  modelValue?: string | number
  label?: string
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'tel'
  required?: boolean
  disabled?: boolean
  error?: string
  id: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  label: '',
  placeholder: '',
  type: 'text',
  required: false,
  disabled: false,
  error: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', props.type === 'number' ? Number(target.value) : target.value);
};

const inputClasses = computed(() => [
  'w-full px-6 py-4 rounded-2xl border-0 transition-all duration-500 outline-none font-medium',
  'bg-surface-lowest text-surface-content placeholder:text-surface-content/20',
  'shadow-inner focus:bg-surface-container',
  props.error 
    ? 'ring-2 ring-red-500/50' 
    : 'focus:ring-2 focus:ring-primary/40'
]);
</script>

<template>
  <div class="flex flex-col gap-2 w-full group">
    <label 
      v-if="props.label" 
      :for="props.id" 
      class="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] pl-2 group-focus-within:text-primary transition-colors"
    >
      {{ props.label }}<span v-if="props.required" class="text-secondary ml-1">*</span>
    </label>
    
    <div class="relative">
      <input
        :id="props.id"
        :type="props.type"
        :value="props.modelValue"
        :placeholder="props.placeholder"
        :required="props.required"
        :disabled="props.disabled"
        :class="inputClasses"
        @input="onInput"
      />
      
      <div v-if="props.error" class="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 animate-pulse">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      </div>
    </div>
    
    <span v-if="props.error" class="text-[10px] font-bold text-red-500 px-2 italic tracking-wide">
      {{ props.error }}
    </span>
  </div>
</template>
