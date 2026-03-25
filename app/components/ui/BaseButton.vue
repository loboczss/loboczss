<script setup lang="ts">
interface Props {
  label?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Botão',
  type: 'button',
  variant: 'primary',
  disabled: false
})

const variantClasses = {
  primary: 'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-primary/20',
  secondary: 'bg-secondary text-white hover:bg-secondary-dark shadow-md hover:shadow-secondary/20',
  outline: 'border-2 border-slate-200 dark:border-slate-800 bg-transparent hover:border-primary text-slate-700 dark:text-slate-300',
  ghost: 'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
}
</script>

<template>
  <button
    :type="props.type"
    :disabled="props.disabled"
    class="inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold text-sm transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 h-10 min-w-[100px]"
    :class="variantClasses[props.variant]"
  >
    <slot>{{ props.label }}</slot>
  </button>
</template>
