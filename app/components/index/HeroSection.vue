<script setup lang="ts">
import { navigateTo } from '#imports'
import PortalButton from '~/components/portal/PortalButton.vue'
import ContactStrip from '~/components/portal/ContactStrip.vue'
</script>

<template>
  <section class="relative flex min-h-[100svh] flex-col justify-end px-6 pb-10 pt-36 md:px-10 md:pb-14">
    <div class="mx-auto flex w-full max-w-portal flex-col gap-12">
      <div class="flex flex-col gap-8">
        <!-- The trades read BELOW the name, as content. Above it they would
             be a kicker, which the craft floor bans outright. -->
        <h1 class="hero-in hero-word" style="--d: 0ms">Loboczss</h1>

        <p class="hero-in text-caps uppercase text-mist" style="--d: 90ms">
          {{ $t('hero.kicker') }}
        </p>

        <p class="hero-in max-w-2xl text-lg font-light leading-relaxed text-mist md:text-xl" style="--d: 200ms">
          {{ $t('hero.subtitle') }}
        </p>
      </div>

      <div class="hero-in flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between" style="--d: 300ms">
        <PortalButton variant="primary" class="w-full sm:w-auto sm:min-w-[19rem]" @click="navigateTo('/budget')">
          {{ $t('hero.quote') }}
        </PortalButton>

        <span class="hidden items-center gap-3 text-micro uppercase text-mist lg:flex">
          {{ $t('hero.scroll') }}
          <svg class="h-3 w-3 scroll-hint" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M8 2v11" />
            <path d="M4 9l4 4 4-4" />
          </svg>
        </span>
      </div>

      <!-- The level legend: never dressed by the world around it. -->
      <ContactStrip class="hero-in" style="--d: 400ms" />
    </div>
  </section>
</template>

<style scoped>
.hero-word {
  color: #fff;
  font-size: clamp(3.25rem, 13vw, 11.5rem);
  font-weight: 200;
  line-height: 0.92;
  letter-spacing: -0.03em;
  font-variation-settings: 'wdth' 112;
  text-transform: uppercase;
}

/* The one authored entrance. It happens once, on the hero, and no other
   section repeats it. */
.hero-in {
  animation: hero-rise 900ms cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: var(--d, 0ms);
}

@keyframes hero-rise {
  from {
    opacity: 0;
    transform: translateY(18px);
    filter: blur(6px);
  }
  to {
    opacity: 1;
    transform: none;
    filter: blur(0);
  }
}

.scroll-hint {
  animation: hint 2.6s ease-in-out infinite;
}

@keyframes hint {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.5;
  }
  50% {
    transform: translateY(3px);
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-in {
    animation: none;
  }
  .scroll-hint {
    animation: none;
  }
}
</style>
