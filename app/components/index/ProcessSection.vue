<script setup lang="ts">
import PortalSection from '~/components/portal/PortalSection.vue'

/**
 * The PME's real question is not "what stack" — it is "how does this go, and
 * when do I see a price". Three steps, stated plainly, inside the world.
 */
const steps = [
  { n: '01', title: 'budget_page.step1_title', body: 'budget_page.step1_desc' },
  { n: '02', title: 'budget_page.step2_title', body: 'budget_page.step2_desc' },
  { n: '03', title: 'budget_page.step3_title', body: 'budget_page.step3_desc' },
]
</script>

<template>
  <PortalSection
    :label="$t('process.label')"
    :heading="$t('process.heading')"
    :lead="$t('process.lead')"
    solid
  >
    <ol class="grid gap-px bg-[var(--frame)] md:grid-cols-3">
      <li
        v-for="s in steps"
        :key="s.n"
        class="step flex flex-col gap-5 bg-void/70 p-8 md:p-10"
      >
        <div class="flex items-center gap-3">
          <span class="step__n tnum">{{ s.n }}</span>
          <span class="h-px flex-1 bg-[var(--frame)]"></span>
        </div>
        <h3 class="text-base uppercase tracking-wide text-mist">{{ $t(s.title) }}</h3>
        <p class="text-sm leading-relaxed text-mist">{{ $t(s.body) }}</p>
      </li>
    </ol>
  </PortalSection>
</template>

<style scoped>
.step__n {
  color: var(--incandescent);
  font-size: 2.5rem;
  font-weight: 200;
  line-height: 1;
  font-variation-settings: 'wdth' 100;
}

.step {
  transition: background-color 480ms cubic-bezier(0.16, 1, 0.3, 1);
}

.step:hover {
  background-color: rgb(42 33 82 / 0.55);
}

@media (prefers-reduced-motion: reduce) {
  .step {
    transition-duration: 1ms;
  }
}
</style>
