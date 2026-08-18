<script setup lang="ts">
import { ref } from '#imports'
import ShaderField from '~/components/portal/ShaderField.vue'
import PortalHeader from '~/components/portal/PortalHeader.vue'
import PortalFooter from '~/components/portal/PortalFooter.vue'
import PortalLoader from '~/components/portal/PortalLoader.vue'

/**
 * The portal is full-bleed: the shader is the site's ground, fixed behind
 * every route, not a hero decoration that stops at the fold.
 */
const shaderReady = ref(false)
</script>

<template>
  <div class="relative min-h-screen">
    <div class="fixed inset-0 z-0">
      <ShaderField :intensity="1" @ready="shaderReady = true" />
    </div>

    <PortalLoader :shader-ready="shaderReady" />

    <PortalHeader />

    <main class="relative z-10">
      <slot />
    </main>

    <PortalFooter />
  </div>
</template>
