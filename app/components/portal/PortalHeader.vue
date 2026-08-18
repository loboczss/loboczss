<script setup lang="ts">
import { ref, computed, nextTick, onMounted, onUnmounted, useI18n } from '#imports'
import WolfMark from '~/components/portal/WolfMark.vue'
import PortalButton from '~/components/portal/PortalButton.vue'

const { t, locale, setLocale } = useI18n()

const open = ref(false)
const scrolled = ref(false)

const menuLabel = computed(() => (open.value ? t('header.menu_close') : t('header.menu_open')))

const links = [
  { to: '/services', key: 'header.services' },
  { to: '/portfolio', key: 'header.projects' },
  { to: '/contact', key: 'header.contact' },
]

/**
 * Scroll lock that survives being opened mid-page.
 *
 * `overflow: hidden` on body alone loses the scroll position on several
 * browsers, so the page is pinned at its current offset and restored on close.
 * The restore is explicitly instant: html sets scroll-behavior: smooth, and a
 * smooth restore would visibly rewind the page under the closing overlay.
 */
let savedScrollY = 0

/**
 * Focus containment. Teleporting the overlay to <body> fixed its geometry but
 * destroyed the focus order it used to get by accident: the overlay is now the
 * last child of body while the button that opens it sits far earlier in the
 * DOM, so a keyboard user opened the menu and tabbed straight into the page
 * underneath an opaque panel. Inerting the app root is the containment — the
 * browser skips inert subtrees entirely, so no manual trap loop is needed.
 */
const closeBtn = ref<HTMLButtonElement | null>(null)
const burgerBtn = ref<HTMLButtonElement | null>(null)
let lastFocused: HTMLElement | null = null

const appRoot = () => document.getElementById('__nuxt')

const containFocus = async () => {
  lastFocused = (document.activeElement as HTMLElement) || null
  appRoot()?.setAttribute('inert', '')
  await nextTick()
  closeBtn.value?.focus()
}

const releaseFocus = () => {
  appRoot()?.removeAttribute('inert')
  const target = lastFocused || burgerBtn.value
  target?.focus?.()
  lastFocused = null
}

const lockScroll = () => {
  savedScrollY = window.scrollY
  const gutter = window.innerWidth - document.documentElement.clientWidth
  const body = document.body
  body.style.position = 'fixed'
  body.style.top = `-${savedScrollY}px`
  body.style.left = '0'
  body.style.right = '0'
  body.style.width = '100%'
  if (gutter > 0) body.style.paddingRight = `${gutter}px`
}

const unlockScroll = () => {
  const body = document.body
  body.style.position = ''
  body.style.top = ''
  body.style.left = ''
  body.style.right = ''
  body.style.width = ''
  body.style.paddingRight = ''
  window.scrollTo({ top: savedScrollY, left: 0, behavior: 'instant' as ScrollBehavior })
}

const toggle = () => {
  open.value = !open.value
  if (open.value) {
    lockScroll()
    containFocus()
  } else {
    unlockScroll()
    releaseFocus()
  }
}

const close = () => {
  if (!open.value) return
  open.value = false
  unlockScroll()
  releaseFocus()
}

const onScroll = () => {
  scrolled.value = window.scrollY > 24
}

const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close()
}

/** Crossing to desktop with the menu open would leave scroll locked and the
 *  overlay hidden by `lg:hidden` — a page nobody can scroll and no visible
 *  control to unlock it. */
const onResize = () => {
  if (open.value && window.innerWidth >= 1024) close()
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKey)
  window.addEventListener('resize', onResize, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKey)
  window.removeEventListener('resize', onResize)
  if (open.value) {
    unlockScroll()
    appRoot()?.removeAttribute('inert')
  }
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,padding] duration-500"
    :class="scrolled ? 'bg-void/85 py-4 backdrop-blur-xl' : 'py-7'"
  >
    <div class="mx-auto flex max-w-portal items-center gap-8 px-6 md:px-10">
      <NuxtLink
        to="/"
        class="group flex items-center gap-3 text-mist no-underline"
        :aria-label="$t('header.logo_home')"
        @click="close"
      >
        <WolfMark :size="34" class="text-mist transition-colors duration-500 group-hover:text-incandescent" />
        <span class="text-label uppercase text-mist">Loboczss</span>
      </NuxtLink>

      <nav class="ml-auto hidden items-center gap-10 lg:flex" :aria-label="$t('header.nav_label')">
        <NuxtLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="plink text-caps uppercase"
        >
          {{ $t(l.key) }}
        </NuxtLink>
      </nav>

      <div class="ml-auto flex items-center gap-6 lg:ml-0">
        <div class="hidden items-center gap-2 sm:flex" role="group" :aria-label="$t('header.language_select')">
          <button
            v-for="code in (['pt', 'en'] as const)"
            :key="code"
            type="button"
            class="plocale text-caps uppercase"
            :class="locale === code && 'plocale--on'"
            :aria-pressed="locale === code"
            @click="setLocale(code)"
          >
            {{ code }}
          </button>
        </div>

        <PortalButton to="/budget" variant="secondary" class="hidden lg:inline-flex">
          {{ $t('header.quote') }}
        </PortalButton>

        <button
          ref="burgerBtn"
          type="button"
          class="pburger"
          :aria-label="menuLabel"
          :aria-expanded="open"
          aria-controls="portal-menu"
          @click="toggle"
        >
          <span :class="open ? 'translate-y-[5px] rotate-45' : ''"></span>
          <span :class="open ? 'opacity-0' : ''"></span>
          <span :class="open ? '-translate-y-[5px] -rotate-45' : ''"></span>
        </button>
      </div>
    </div>

    <div
      class="mx-auto mt-4 h-px max-w-portal bg-[var(--frame)] px-6 md:px-10"
      :class="scrolled ? 'opacity-100' : 'opacity-0'"
    ></div>
  </header>

  <!--
    The overlay is teleported to <body> on purpose. As a child of <header> it
    inherited the header's backdrop-filter as its containing block, so once the
    page scrolled far enough to turn the blur on, `fixed inset-0` resolved
    against the ~83px header box instead of the viewport and the menu opened
    as a sliver. Nothing inside the overlay can fix that; only leaving the
    filtered ancestor can.
  -->
  <ClientOnly>
    <Teleport to="body">
      <div
        id="portal-menu"
        class="fixed inset-0 z-[60] flex flex-col bg-void/95 backdrop-blur-2xl transition-opacity duration-500 lg:hidden"
        :class="open ? 'opacity-100' : 'pointer-events-none opacity-0'"
        :inert="!open"
      >
        <div class="flex items-center justify-between px-8 pt-7">
          <NuxtLink to="/" class="text-label uppercase text-mist no-underline" @click="close">Loboczss</NuxtLink>
          <button ref="closeBtn" type="button" class="pburger pburger--open" :aria-label="$t('header.menu_close')" @click="close">
            <span class="translate-y-[5px] rotate-45"></span>
            <span class="opacity-0"></span>
            <span class="-translate-y-[5px] -rotate-45"></span>
          </button>
        </div>

        <div class="flex flex-1 flex-col justify-center gap-2 overflow-y-auto px-8">
          <NuxtLink
            v-for="(l, i) in links"
            :key="l.to"
            :to="l.to"
            class="pmenu-link"
            @click="close"
          >
            <span class="text-3xl font-light uppercase tracking-wide">{{ $t(l.key) }}</span>
          </NuxtLink>

          <NuxtLink to="/budget" class="pmenu-link" @click="close">
            <span class="text-3xl font-light uppercase tracking-wide text-incandescent">{{ $t('header.quote') }}</span>
          </NuxtLink>
        </div>

        <div class="flex items-center justify-between border-t border-[var(--frame)] px-8 py-7">
          <div class="flex items-center gap-3" role="group" :aria-label="$t('header.language_select')">
            <button
              v-for="code in (['pt', 'en'] as const)"
              :key="code"
              type="button"
              class="plocale text-caps uppercase"
              :class="locale === code && 'plocale--on'"
              :aria-pressed="locale === code"
              @click="setLocale(code)"
            >
              {{ code }}
            </button>
          </div>
          <a href="https://wa.me/5568992552607" class="text-caps uppercase text-mist">WhatsApp</a>
        </div>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<style scoped>
.plink {
  color: var(--mist);
  text-decoration: none;
  transition: color 420ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* Rest is already Mist after the contrast pass, so hovering to Mist was a
   no-op affordance. Nav is navigation, not the primary action, so it steps up
   to white rather than spending the reserved Incandescent. */
.plink:hover,
.plink:focus-visible,
.plink.router-link-active {
  color: #fff;
}

.plocale {
  color: var(--text-quiet);
  background: none;
  border: none;
  padding: 0.25rem;
  cursor: pointer;
  transition: color 420ms cubic-bezier(0.16, 1, 0.3, 1);
}

.plocale:hover {
  color: var(--mist);
}

.plocale--on {
  color: var(--incandescent);
}

.pburger {
  /* Declared inside the query so Tailwind's lg:hidden is not overridden by
     scoped-style source order — the burger must not leak onto desktop. */
  display: none;
  height: 2rem;
  width: 2rem;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

@media (max-width: 1023.98px) {
  .pburger {
    display: flex;
  }
}

.pburger span {
  display: block;
  height: 1px;
  width: 1.4rem;
  background: var(--mist);
  transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms linear;
}

.pmenu-link {
  display: flex;
  align-items: baseline;
  gap: 1.25rem;
  padding: 0.85rem 0;
  color: var(--mist);
  text-decoration: none;
  border-bottom: 1px solid var(--frame);
  transition: color 420ms cubic-bezier(0.16, 1, 0.3, 1);
}

.pmenu-link:hover {
  color: #fff;
}

@media (prefers-reduced-motion: reduce) {
  .plink,
  .plocale,
  .pburger span,
  .pmenu-link {
    transition-duration: 1ms;
  }
}
</style>
