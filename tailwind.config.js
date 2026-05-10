/** @type {import('tailwindcss').Config} */
export default {
  // Only process files in src/ — keeps purge fast
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],

  theme: {
    extend: {
      // ── Colour palette maps to the CSS variables in globals.css ──
      // Using CSS vars means a single token change updates both Tailwind
      // classes and any raw CSS that references the same var.
      colors: {
        bg:       'var(--bg)',
        surface:  'var(--surface)',
        's2':     'var(--surface-2)',
        's3':     'var(--surface-3)',

        primary:  {
          DEFAULT: 'var(--primary)',
          dark:    'var(--primary-dark)',
          light:   'var(--primary-light)',
          glow:    'var(--primary-glow)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          glow:    'var(--accent-glow)',
        },
        green: {
          brand:   'var(--green)',
          glow:    'var(--green-glow)',
        },
        amber: {
          brand:   'var(--amber)',
          glow:    'var(--amber-glow)',
        },
        rose: {
          brand:   'var(--rose)',
          glow:    'var(--rose-glow)',
        },
        violet: {
          brand:   'var(--violet)',
        },

        border:       'var(--border)',
        'border-strong': 'var(--border-strong)',

        'text-primary':   'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted':     'var(--text-muted)',
      },

      // ── Typography ──
      fontFamily: {
        sans: ['"Segoe UI"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Courier New"', 'monospace'],
      },

      fontSize: {
        '2xs': ['0.65rem',  { lineHeight: '1rem' }],
        xs:    ['0.75rem',  { lineHeight: '1.125rem' }],
        sm:    ['0.875rem', { lineHeight: '1.375rem' }],
        base:  ['1rem',     { lineHeight: '1.6rem' }],
        lg:    ['1.125rem', { lineHeight: '1.75rem' }],
        xl:    ['1.25rem',  { lineHeight: '1.875rem' }],
        '2xl': ['1.5rem',   { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem',  { lineHeight: '2.5rem' }],
        '5xl': ['3rem',     { lineHeight: '1.1' }],
        '6xl': ['3.75rem',  { lineHeight: '1.05' }],
      },

      // ── Spacing ──
      spacing: {
        '4.5': '1.125rem',
        '13':  '3.25rem',
        '15':  '3.75rem',
        '18':  '4.5rem',
        '22':  '5.5rem',
        '26':  '6.5rem',
        '30':  '7.5rem',
      },

      // ── Border radius ──
      borderRadius: {
        sm:  'var(--radius-sm)',
        DEFAULT: 'var(--radius)',
        lg:  '16px',
        xl:  '20px',
      },

      // ── Box shadows — premium depth system ──
      boxShadow: {
        'card':        '0 1px 3px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.2)',
        'card-hover':  '0 0 0 1px rgba(99,102,241,0.12), 0 8px 32px rgba(0,0,0,0.35)',
        'glow-primary':'0 0 24px rgba(99,102,241,0.2)',
        'glow-accent': '0 0 24px rgba(34,211,238,0.15)',
        'header':      '0 4px 24px rgba(0,0,0,0.45)',
      },

      // ── Animation keyframes ──
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1' },
        },
        slideDown: {
          '0%':   { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      animation: {
        'fade-up':    'fadeUp 0.5s ease forwards',
        'shimmer':    'shimmer 3s linear infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'slide-down': 'slideDown 0.2s ease forwards',
      },

      // ── Backdrop blur ──
      backdropBlur: {
        header: '20px',
      },

      // ── Transition timing ──
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },

  plugins: [],
};
