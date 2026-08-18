<script setup lang="ts">
import PortalSection from '~/components/portal/PortalSection.vue'
import ShaderSource from '~/components/portal/ShaderSource.vue'
</script>

<template>
  <PortalSection
    id="source"
    :label="$t('source.label')"
    :heading="$t('source.heading')"
    :lead="$t('source.lead')"
    solid
  >
    <ShaderSource />
  </PortalSection>
</template>
