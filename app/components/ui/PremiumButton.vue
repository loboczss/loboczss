<script setup lang="ts">
interface Props {
  label?: string
  href?: string
  variant?: 'primary' | 'secondary'
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Ação Premium',
  variant: 'primary',
  loading: false
})

const variantClasses = {
  primary: 'bg-primary text-white hover:bg-primary/90 border border-primary/50',
  secondary: 'bg-surface-lowest text-surface-content hover:bg-surface-container border border-surface-content/10'
}
</script>

<template>
  <button
    class="relative group px-10 py-5 overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed font-bold uppercase tracking-[0.2em] text-[10px] rounded-full"
    :class="variantClasses[props.variant]"
    :disabled="props.loading"
  >
    <span class="relative flex items-center justify-center gap-3">
      <slot>{{ props.label }}</slot>
      <svg 
        class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <line x1="12" y1="19" x2="19" y2="12"></line>
        <line x1="19" y1="12" x2="12" y2="5"></line>
      </svg>
    </span>
  </button>
</template>
