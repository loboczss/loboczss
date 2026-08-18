import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        // The portal palette. Named on the world's own board — never renamed
        // to generic scale steps.
        void: '#0B0620',
        abyss: '#140C33',
        echo: '#2A2152',
        glimmer: '#5B4D9A',
        mist: '#8E86B7',
        incandescent: {
          DEFAULT: '#FF6A88',
          deep: '#D8456B',
        },
        // Source highlighting. Two lavender tiers, deliberately NOT
        // incandescent: numeric literals are the most frequent token in the
        // shader, and spending the reserved colour on them would dilute the
        // one thing it marks.
        syntax: {
          key: '#C9BFFF',
          num: '#B9B0E6',
        },
      },
      fontFamily: {
        // One variable grotesk, worked across its width axis.
        sans: ['Archivo', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        // The board's four tracking steps, all uppercase.
        label: '0.3em',
        wide: '0.2em',
        display: '-0.02em',
      },
      fontSize: {
        // Label steps — all uppercase, all at 0.3em.
        micro: ['0.5625rem', { lineHeight: '1.2', letterSpacing: '0.3em' }],
        caps: ['0.625rem', { lineHeight: '1.2', letterSpacing: '0.3em' }],
        meta: ['0.6875rem', { lineHeight: '1.3', letterSpacing: '0.3em' }],
        label: ['0.75rem', { lineHeight: '1.3', letterSpacing: '0.3em' }],
        // Denser reading step (15px), distinct from the 16px body: legal
        // copy, field text and strip values. Five components had each been
        // spelling it out as a literal.
        read: ['0.9375rem', { lineHeight: '1.7' }],
        // Source-panel steps. Mono is admitted here only because this is
        // literal code and measurement, never as a costume for "technical".
        code: ['0.75rem', { lineHeight: '1.75' }],
        'code-val': ['0.8125rem', { lineHeight: '1.4' }],
        // Display steps. Declared here so the ramp is a system rather than
        // five improvised clamps in five scoped stylesheets.
        title: ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        headline: ['clamp(2rem, 5vw, 3.75rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        page: ['clamp(2.5rem, 7vw, 5.5rem)', { lineHeight: '0.98', letterSpacing: '-0.025em' }],
        hero: ['clamp(3.25rem, 13vw, 11.5rem)', { lineHeight: '0.92', letterSpacing: '-0.03em' }],
      },
      maxWidth: {
        portal: '84rem',
      },
      transitionTimingFunction: {
        portal: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    }
  },
  plugins: [],
  content: [
    './app/app.vue',
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ]
}
