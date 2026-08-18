<script setup lang="ts">
import { computed, resolveComponent } from '#imports'
import MeshVisual from '~/components/portal/MeshVisual.vue'

/**
 * Content card, board grammar: a 1px frame, an authored mesh at the head, a
 * tracked label, the name, and an action line with its arrow. Hovering lifts
 * the frame to incandescent — the whole card is the target.
 */
const props = withDefaults(
  defineProps<{
    label: string
    name: string
    body?: string
    action?: string
    to?: string
    href?: string
    seed?: string
    index?: string
    hot?: boolean
  }>(),
  { body: '', action: '', seed: 'mesh', hot: false }
)

const interactive = computed(() => Boolean(props.to || props.href))

const tag = computed(() =>
  props.to ? resolveComponent('NuxtLink') : props.href ? 'a' : 'article'
)

const bind = computed(() => {
  if (props.to) return { to: props.to }
  if (props.href) {
    const external = /^https?:/.test(props.href)
    return {
      href: props.href,
      ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
    }
  }
  return {}
})
</script>

<template>
  <component
    :is="tag"
    v-bind="bind"
    class="pcard sheen group"
    :class="interactive && 'pcard--live'"
  >
    <div class="pcard__mesh">
      <MeshVisual :seed="props.seed" :hot="props.hot" />
      <span v-if="props.index" class="pcard__index text-micro uppercase tnum">{{ props.index }}</span>
    </div>

    <div class="flex flex-1 flex-col gap-4 p-7">
      <span class="text-caps uppercase text-mist">{{ props.label }}</span>

      <h3 class="pcard__name text-xl font-light uppercase tracking-wide">
        {{ props.name }}
      </h3>

      <p v-if="props.body" class="flex-1 text-sm leading-relaxed text-mist">
        {{ props.body }}
      </p>

      <span
        v-if="props.action"
        class="pcard__action mt-2 flex items-center justify-between gap-4 text-caps uppercase"
      >
        {{ props.action }}
        <svg
          class="pcard__arrow h-3 w-3 shrink-0"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M2 8h11" />
          <path d="M9 4l4 4-4 4" />
        </svg>
      </span>
    </div>
  </component>
</template>

<style scoped>
.pcard {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--frame);
  background: rgb(11 6 32 / 0.42);
  color: var(--mist);
  text-decoration: none;
  overflow: hidden;
  transition: border-color 520ms cubic-bezier(0.16, 1, 0.3, 1);
}

.pcard--live:hover,
.pcard--live:focus-visible {
  border-color: var(--incandescent);
}

.pcard__mesh {
  position: relative;
  height: 9rem;
  border-bottom: 1px solid var(--frame);
  overflow: hidden;
}

.pcard__index {
  position: absolute;
  top: 0.9rem;
  left: 1rem;
  color: var(--mist);
}

.pcard__name {
  color: #fff;
  transition: color 520ms cubic-bezier(0.16, 1, 0.3, 1);
}

.pcard__action {
  color: var(--mist);
  transition: color 520ms cubic-bezier(0.16, 1, 0.3, 1);
}

.pcard--live:hover .pcard__action,
.pcard--live:focus-visible .pcard__action {
  color: var(--incandescent);
}

.pcard__arrow {
  transition: transform 520ms cubic-bezier(0.16, 1, 0.3, 1);
}

.pcard--live:hover .pcard__arrow,
.pcard--live:focus-visible .pcard__arrow {
  transform: translateX(4px);
}

@media (prefers-reduced-motion: reduce) {
  .pcard,
  .pcard__name,
  .pcard__action,
  .pcard__arrow {
    transition-duration: 1ms;
  }
}
</style>
