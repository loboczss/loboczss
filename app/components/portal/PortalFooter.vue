<script setup lang="ts">
import WolfMark from '~/components/portal/WolfMark.vue'
import ContactStrip from '~/components/portal/ContactStrip.vue'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="relative z-10 border-t border-[var(--frame)] bg-void">
    <div class="mx-auto flex max-w-portal flex-col gap-16 px-6 py-20 md:px-10 md:py-28">
      <div class="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div class="flex max-w-xl flex-col gap-7">
          <WolfMark :size="52" class="text-mist" />
          <p class="text-2xl font-light leading-snug text-mist md:text-3xl">
            {{ $t('footer.desc') }}
          </p>
        </div>

        <div class="grid grid-cols-2 gap-x-12 gap-y-8">
          <nav class="flex flex-col gap-4" :aria-label="$t('footer.navigate')">
            <span class="text-micro uppercase text-mist/85">{{ $t('footer.navigate') }}</span>
            <NuxtLink to="/services" class="flink text-caps uppercase">{{ $t('header.services') }}</NuxtLink>
            <NuxtLink to="/portfolio" class="flink text-caps uppercase">{{ $t('header.projects') }}</NuxtLink>
            <NuxtLink to="/budget" class="flink text-caps uppercase">{{ $t('header.quote') }}</NuxtLink>
            <NuxtLink to="/contact" class="flink text-caps uppercase">{{ $t('header.contact') }}</NuxtLink>
          </nav>

          <div class="flex flex-col gap-4">
            <span class="text-micro uppercase text-mist/85">{{ $t('footer.elsewhere') }}</span>
            <a href="https://github.com/loboczss" target="_blank" rel="noopener noreferrer" class="flink text-caps uppercase">GitHub</a>
            <a href="https://instagram.com/loboczss" target="_blank" rel="noopener noreferrer" class="flink text-caps uppercase">Instagram</a>
            <NuxtLink to="/privacy" class="flink text-caps uppercase">{{ $t('footer.privacy') }}</NuxtLink>
          </div>
        </div>
      </div>

      <ContactStrip />

      <div class="flex flex-col gap-4 text-micro uppercase text-mist/85 sm:flex-row sm:items-center sm:justify-between">
        <p>{{ $t('footer.rights', { year: currentYear }) }}</p>
        <p>{{ $t('footer.availability') }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.flink {
  color: var(--mist);
  text-decoration: none;
  transition: color 380ms cubic-bezier(0.16, 1, 0.3, 1);
}

.flink:hover,
.flink:focus-visible {
  color: var(--incandescent);
}

@media (prefers-reduced-motion: reduce) {
  .flink {
    transition-duration: 1ms;
  }
}
</style>
