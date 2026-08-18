<script setup lang="ts">
import PortalSection from '~/components/portal/PortalSection.vue'
import PortalCard from '~/components/portal/PortalCard.vue'
import PortalButton from '~/components/portal/PortalButton.vue'

/**
 * The proof inventory. Three real, checkable artifacts at equal frame weight —
 * no invented case studies, no stock photography standing in for screenshots.
 */
const proofs = [
  {
    index: '01',
    label: 'portfolio.item1_kind',
    name: 'portfolio.item1_name',
    body: 'portfolio.item1_desc',
    action: 'portfolio.item1_action',
    href: 'https://github.com/loboczss',
    seed: 'github',
    hot: true,
  },
  {
    index: '02',
    label: 'portfolio.item2_kind',
    name: 'portfolio.item2_name',
    body: 'portfolio.item2_desc',
    seed: 'server',
    hot: false,
  },
  {
    index: '03',
    label: 'portfolio.item3_kind',
    name: 'portfolio.item3_name',
    body: 'portfolio.item3_desc',
    seed: 'thissite',
    hot: false,
  },
]
</script>

<template>
  <PortalSection
    id="portfolio"
    :label="$t('portfolio.label')"
    :heading="$t('portfolio.title')"
    :lead="$t('portfolio.intro')"
  >
    <ul class="grid gap-px bg-[var(--frame)] md:grid-cols-3">
      <li v-for="p in proofs" :key="p.index" class="reveal" :style="{ '--d': `${proofs.indexOf(p) * 110}ms` }">
        <PortalCard
          class="h-full"
          :label="$t(p.label)"
          :name="$t(p.name)"
          :body="$t(p.body)"
          :action="p.action ? $t(p.action) : ''"
          :href="p.href"
          :seed="p.seed"
          :hot="p.hot"
        />
      </li>
    </ul>

    <div class="flex flex-col gap-8 border-t border-[var(--frame)] pt-12 sm:flex-row sm:items-center sm:justify-between">
      <p class="max-w-lg text-lg font-light text-mist">{{ $t('portfolio.cta_title') }}</p>
      <PortalButton to="/budget" variant="secondary" class="sm:min-w-[17rem]">
        {{ $t('portfolio.cta_action') }}
      </PortalButton>
    </div>
  </PortalSection>
</template>

<style scoped>
/* The inventory is the one place a stagger carries meaning: the order is the
   order of what can be checked first. */
.reveal {
  animation: rise 720ms cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: var(--d, 0ms);
  animation-timeline: view();
  animation-range: entry 0% entry 55%;
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(22px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@supports not (animation-timeline: view()) {
  .reveal {
    animation: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    animation: none;
  }
}
</style>
