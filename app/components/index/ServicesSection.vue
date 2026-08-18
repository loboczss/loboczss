<script setup lang="ts">
import PortalSection from '~/components/portal/PortalSection.vue'
import MeshVisual from '~/components/portal/MeshVisual.vue'

const trades = [
  { n: '01', title: 'services.apps_title', body: 'services.apps_desc', seed: 'apps' },
  { n: '02', title: 'services.web_title', body: 'services.web_desc', seed: 'web' },
  { n: '03', title: 'services.ai_title', body: 'services.ai_desc', seed: 'ai' },
]
</script>

<template>
  <PortalSection
    id="services"
    :label="$t('services.span')"
    :heading="$t('services.title')"
    :lead="$t('services.desc')"
    solid
  >
    <ul class="flex flex-col">
      <li
        v-for="t in trades"
        :key="t.n"
        class="trade group grid gap-6 border-t border-[var(--frame)] py-10 md:grid-cols-11 md:gap-10 md:py-14"
      >
        <h3 class="trade__name md:col-span-5 text-title">{{ $t(t.title) }}</h3>

        <p class="text-sm leading-relaxed text-mist md:col-span-4 md:text-base">
          {{ $t(t.body) }}
        </p>

        <div class="trade__mesh md:col-span-2">
          <MeshVisual :seed="t.seed" :rows="8" :cols="14" />
        </div>
      </li>
      <li class="h-px bg-[var(--frame)]" aria-hidden="true"></li>
    </ul>
  </PortalSection>
</template>

<style scoped>
.trade__name {
  color: #fff;
  font-weight: 200;
  text-transform: uppercase;
  font-variation-settings: 'wdth' 105;
  transition: color 480ms cubic-bezier(0.16, 1, 0.3, 1);
}

.trade:hover .trade__name {
  color: var(--incandescent);
}

.trade__mesh {
  height: 4.5rem;
  opacity: 0.35;
  transition: opacity 480ms cubic-bezier(0.16, 1, 0.3, 1);
}

.trade:hover .trade__mesh {
  opacity: 0.9;
}

@media (prefers-reduced-motion: reduce) {
  .trade__name,
  .trade__mesh {
    transition-duration: 1ms;
  }
}
</style>
