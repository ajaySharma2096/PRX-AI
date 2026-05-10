/**
 * Hero.jsx — Above-the-fold hero section.
 *
 * Layout:
 *   ┌──────────────────────────────────────────┐
 *   │  ⚡ badge label                          │
 *   │  Gradient h1 title                       │
 *   │  description                             │
 *   │                                          │
 *   │  ┌─ Terminal trigger boxes (2) ────────┐ │
 *   │  │ // Trigger the setup               │ │
 *   │  │ "Execute PRX_AI.md"                │ │
 *   │  └───────────────────────────────────┘ │
 *   │                                          │
 *   │  ── stat bar: 5 │ 3 │ 19 │ 0 │ 31 ───  │
 *   └──────────────────────────────────────────┘
 *
 * Receives `data` = hero export from content.js
 */
import { motion } from 'framer-motion';
import { cn } from '@/utils';

const EASE = [0.4, 0, 0.2, 1];

/* Stagger helper */
const fadeUp = (delay = 0, y = 20) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: EASE },
});

export function Hero({ data }) {
  const { label, title, description, triggers, stats } = data;

  return (
    <section
      className={cn(
        'relative flex flex-col items-center justify-center text-center',
        'min-h-[100dvh] pt-28 pb-20 px-4',
        'overflow-hidden',
      )}
    >
      {/* ── Background radial glow (matches HTML hero-glow) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Single centered ellipse radial gradient */}
        <div
          className="absolute left-1/2 -top-20 -translate-x-1/2"
          style={{
            width: '700px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.18) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto">

        {/* Label badge */}
        <motion.div {...fadeUp(0.05)}>
          <span className={cn(
            'inline-flex items-center gap-2',
            'px-4 py-1.5 rounded-full',
            'border border-[rgba(99,102,241,0.3)]',
            'bg-[rgba(99,102,241,0.08)]',
            'text-sm font-medium text-[var(--primary-light)]',
          )}>
            {label}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          {...fadeUp(0.12)}
          className={cn(
            'font-bold tracking-tight leading-[1.1]',
            'text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]',
            'text-gradient-primary',
          )}
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          {...fadeUp(0.2)}
          className="max-w-2xl text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed"
        >
          {description}
        </motion.p>

        {/* ── Trigger boxes ── */}
        <motion.div
          {...fadeUp(0.28)}
          className="w-full max-w-2xl flex flex-col sm:flex-row gap-3 mt-2"
        >
          {triggers.map((trigger, i) => (
            <div
              key={i}
              className={cn(
                'flex-1 text-left',
                'rounded-2xl overflow-hidden',
                'border border-[var(--border-strong)]',
                'bg-[var(--surface)]',
              )}
            >
              {/* Fake window chrome */}
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[var(--border)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              {/* Code content */}
              <div className="px-4 py-4 font-mono text-xs leading-relaxed">
                <div className="text-[var(--text-muted)]">{trigger.comment}</div>
                <div className="mt-1 text-[var(--text-secondary)]">
                  {/* Highlight the filename within the code string */}
                  {trigger.highlight
                    ? renderHighlighted(trigger.code, trigger.highlight)
                    : trigger.code}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Stats bar ── */}
        <motion.div
          {...fadeUp(0.38)}
          className={cn(
            'w-full max-w-3xl mt-4',
            'grid grid-cols-3 sm:grid-cols-5 gap-px',
            'rounded-2xl overflow-hidden',
            'border border-[var(--border)]',
            'bg-[var(--border)]', // border color fills the gaps between cells
          )}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={cn(
                'flex flex-col items-center justify-center gap-1',
                'py-5 px-3',
                'bg-[var(--surface)]',
                'text-center',
              )}
            >
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-gradient-indigo-cyan">
                {stat.number}
              </span>
              <span className="text-[0.65rem] sm:text-xs font-medium text-[var(--text-muted)] leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        {...fadeUp(0.55)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[0.65rem] text-[var(--text-muted)] tracking-widest uppercase">
          scroll
        </span>
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="block w-px h-7 bg-gradient-to-b from-[var(--primary-light)] to-transparent"
        />
      </motion.div>
    </section>
  );
}

/**
 * Splits `code` string at `highlight` and wraps the matched substring
 * in an indigo-coloured <span>.
 */
function renderHighlighted(code, highlight) {
  const parts = code.split(highlight);
  if (parts.length < 2) return code;
  return (
    <>
      {parts[0]}
      <span className="text-[var(--primary-light)] font-semibold">{highlight}</span>
      {parts[1]}
    </>
  );
}
