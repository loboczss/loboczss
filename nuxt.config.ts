// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
    resendFromEmail: process.env.RESEND_FROM_EMAIL || 'contato@loboczss.cloud',
    resendToEmail: process.env.RESEND_TO_EMAIL || 'juan@loboczss.cloud',
    resendOwnerEmail: process.env.RESEND_OWNER_EMAIL || 'juanmproducoes@gmail.com',
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: [
      { code: 'pt', iso: 'pt-BR', name: 'Português', file: 'pt.json' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'pt',
    langDir: 'locales/',
    strategy: 'no_prefix'
  },

  css: ['~/assets/css/tailwind.css'],

  colorMode: {
    preference: 'system',
    fallback: 'dark', // the site is designed dark-first
    classSuffix: '', // Tailwind class strategy uses no suffix by default (dark class)
  },

  app: {
    head: {
      title: 'Loboczss',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Engenharia de experiências digitais premium.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Inter:wght@100..900&display=swap' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon-light.svg', media: '(prefers-color-scheme: light)' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon-dark.svg', media: '(prefers-color-scheme: dark)' }
      ]
    }
  }
})