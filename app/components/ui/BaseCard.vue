<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hover?: boolean
  glass?: boolean
  noBorder?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  subtitle: '',
  padding: 'md',
  hover: true,
  glass: false,
  noBorder: false
})

const paddingClasses = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-10'
}

const cardClasses = [
  'rounded-[2.5rem] transition-all duration-700 overflow-hidden relative group',
  !props.noBorder ? 'border' : 'border-0',
  props.glass 
    ? 'bg-surface/5 backdrop-blur-3xl border-white/20' 
    : 'bg-surface-container border-white/5 shadow-2xl shadow-black/20',
  props.hover ? 'hover:scale-[1.01] hover:bg-surface-high hover:shadow-primary/10' : '',
  paddingClasses[props.padding]
]
</script>

<template>
  <div :class="cardClasses" class="h-full">
    <!-- Header -->
    <header v-if="props.title || $slots.header" class="mb-5 relative z-10">
      <slot name="header">
        <h3 v-if="props.title" class="text-3xl font-semibold tracking-tighter text-white leading-none mb-3">
          {{ props.title }}
        </h3>
        <p v-if="props.subtitle" class="text-sm font-medium text-white/50 leading-relaxed uppercase tracking-[0.05em]">
          {{ props.subtitle }}
        </p>
      </slot>
    </header>
    
    <!-- Body -->
    <div class="relative z-10 h-full">
      <slot />
    </div>
    
    <!-- Footer -->
    <footer v-if="$slots.footer" class="mt-8 pt-8 border-t border-white/5 relative z-10">
      <slot name="footer" />
    </footer>
    
    <!-- Hover Shine Effect (if not glass) -->
    <div 
      v-if="!props.glass"
      class="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
    ></div>
  </div>
</template>
