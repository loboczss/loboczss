<script setup lang="ts">
import { computed, resolveComponent } from '#imports'

/**
 * The world builds every control from a 1px frame. Primary fills with
 * incandescent on hover; secondary lets the frame and label take the colour.
 */
const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary'
    to?: string
    href?: string
    type?: 'button' | 'submit'
    disabled?: boolean
    loading?: boolean
    /** '→' for forward motion, '↗' for leaving the site. */
    arrow?: 'forward' | 'external' | 'none'
    block?: boolean
  }>(),
  {
    variant: 'primary',
    type: 'button',
    disabled: false,
    loading: false,
    arrow: 'forward',
    block: false,
  }
)

const tag = computed(() => (props.to ? resolveComponent('NuxtLink') : props.href ? 'a' : 'button'))

const bind = computed(() => {
  if (props.to) return { to: props.to }
  if (props.href) {
    const external = /^https?:/.test(props.href)
    return {
      href: props.href,
      ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
    }
  }
  return { type: props.type, disabled: props.disabled || props.loading }
})
</script>

<template>
  <component
    :is="tag"
    v-bind="bind"
    class="pbtn sheen group"
    :class="[
      props.variant === 'primary' ? 'pbtn--primary' : 'pbtn--secondary',
      props.block ? 'flex w-full' : 'inline-flex',
      (props.disabled || props.loading) && 'pbtn--off',
    ]"
  >
    <span class="relative z-10 flex w-full items-center justify-between gap-6">
      <span class="text-caps uppercase"><slot /></span>

      <svg
        v-if="props.arrow !== 'none'"
        class="pbtn__arrow h-3 w-3 shrink-0"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <template v-if="props.arrow === 'forward'">
          <path d="M2 8h11" />
          <path d="M9 4l4 4-4 4" />
        </template>
        <template v-else>
          <path d="M4 12L12 4" />
          <path d="M5.5 4H12v6.5" />
        </template>
      </svg>
    </span>
  </component>
</template>

<style scoped>
.pbtn {
  position: relative;
  align-items: center;
  padding: 1.15rem 1.6rem;
  border: 1px solid var(--frame-control);
  color: var(--mist);
  text-decoration: none;
  cursor: pointer;
  background: transparent;
  transition:
    border-color 420ms cubic-bezier(0.16, 1, 0.3, 1),
    color 420ms cubic-bezier(0.16, 1, 0.3, 1),
    background-color 420ms cubic-bezier(0.16, 1, 0.3, 1);
}

.pbtn__arrow {
  transition: transform 420ms cubic-bezier(0.16, 1, 0.3, 1);
}

.pbtn:hover .pbtn__arrow,
.pbtn:focus-visible .pbtn__arrow {
  transform: translateX(3px);
}

/* The one conversion action has to be identifiable AT REST. The reading
   scene is a phone (PRODUCT.md), where :hover never fires — a primary that
   only declares itself on hover has no primary state at all on the device
   that matters. */
.pbtn--primary {
  border-color: var(--incandescent);
  color: #fff;
}

.pbtn--primary .pbtn__arrow {
  color: var(--incandescent);
}

.pbtn--primary:hover,
.pbtn--primary:focus-visible {
  background-color: var(--incandescent);
  color: #fff;
}

.pbtn--primary:hover .pbtn__arrow,
.pbtn--primary:focus-visible .pbtn__arrow {
  color: #fff;
}

.pbtn--secondary:hover,
.pbtn--secondary:focus-visible {
  border-color: var(--incandescent);
  color: var(--incandescent);
}

.pbtn--off {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .pbtn,
  .pbtn__arrow {
    transition-duration: 1ms;
  }
}
</style>
