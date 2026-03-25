<script setup lang="ts">
import BaseCard from '~/components/ui/BaseCard.vue';

interface Props {
  label: string
  value: string | number
  trend?: {
    value: string | number
    direction: 'up' | 'down' | 'neutral'
  }
  icon?: string
  color?: 'primary' | 'secondary' | 'accent' | 'default'
}

const props = withDefaults(defineProps<Props>(), {
  label: 'KPI Label',
  value: '0',
  color: 'default'
})

const colorClasses = {
  primary: 'text-primary bg-primary/10',
  secondary: 'text-secondary bg-secondary/10',
  accent: 'text-emerald-400 bg-emerald-400/10',
  default: 'text-white/40 bg-white/5'
}
</script>

<template>
  <BaseCard padding="lg" noBorder class="relative group h-full hover:bg-white/5 transition-all duration-700">
    <template #header>
      <div class="flex items-center justify-between mb-8">
        <span class="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] pl-1">{{ props.label }}</span>
        
        <div 
          class="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-primary group-hover:text-white"
          :class="colorClasses[props.color]"
        >
          <slot name="icon">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21V3"/><path d="m5 10 7-7 7 7"/></svg>
          </slot>
        </div>
      </div>
    </template>
    
    <div class="flex flex-col gap-4">
      <h2 class="text-6xl font-black italic tracking-tighter text-white leading-none group-hover:text-primary transition-colors duration-700">
        {{ props.value }}
      </h2>
      
      <div v-if="props.trend" class="flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest" :class="props.trend.direction === 'up' ? 'text-secondary' : props.trend.direction === 'down' ? 'text-red-500' : 'text-white/30'">
        <svg v-if="props.trend.direction === 'up'" class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
        <svg v-else-if="props.trend.direction === 'down'" class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25" />
        </svg>
        <span>{{ props.trend.value }}%</span>
        <span class="text-white/20 font-medium lowercase">vs Prev. Epoch</span>
      </div>
    </div>
  </BaseCard>
</template>
