/**
 * Footer.jsx — Premium page footer.
 *
 * Layout (2-column on md+):
 *   Left  — headline, sub-headline, tagline, badge
 *   Right — author card, contact links, LinkedIn, copyright
 */
import { motion } from 'framer-motion';
import { footer } from '@/data';
import { cn } from '@/utils';

const EASE = [0.4, 0, 0.2, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.45, delay, ease: EASE },
});

export function Footer() {
  return (
    <footer className={cn(
      'relative mt-0',
      'bg-[var(--surface)]',
      'border-t border-[var(--border)]',
    )}>
      {/* Subtle top glow line */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-30"
      />

      <div className="container-xl py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

          {/* ── Left column ── */}
          <div className="flex flex-col gap-5">
            {/* Headline */}
            <motion.div {...fadeUp(0)}>
              <span className="inline-code text-base font-bold mb-1">
                {footer.headline}
              </span>
              <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm">
                {footer.subheadline}
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              {...fadeUp(0.08)}
              className="text-xs text-[var(--text-muted)] leading-relaxed"
            >
              {footer.tagline}
            </motion.p>

            {/* Badge */}
            <motion.span
              {...fadeUp(0.14)}
              className={cn(
                'inline-flex self-start items-center gap-2',
                'px-3 py-1.5 rounded-full',
                'border border-[rgba(99,102,241,0.25)]',
                'bg-[rgba(99,102,241,0.07)]',
                'text-[0.68rem] font-medium text-[var(--text-muted)]',
              )}
            >
              {footer.badge}
            </motion.span>
          </div>

          {/* ── Right column ── */}
          <div className="flex flex-col gap-7">

            {/* Author card */}
            <motion.div
              {...fadeUp(0.06)}
              className={cn(
                'flex items-center gap-4 p-4 rounded-2xl',
                'border border-[var(--border)]',
                'bg-[var(--surface-elevated)]',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'flex items-center justify-center',
                  'w-11 h-11 rounded-full text-2xl shrink-0',
                  'bg-[var(--primary-glow)]',
                )}
              >
                {footer.author.avatar}
              </span>
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  {footer.author.name}
                </p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">
                  {footer.author.role}
                </p>
              </div>
            </motion.div>

            {/* Contact links */}
            <motion.div {...fadeUp(0.1)} className="flex flex-col gap-2">
              {footer.contact.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'inline-flex items-center gap-2.5',
                    'text-sm text-[var(--text-secondary)]',
                    'hover:text-[var(--primary-light)]',
                    'transition-colors duration-150',
                  )}
                >
                  <span aria-hidden="true" className="text-base w-5 text-center">
                    {item.icon}
                  </span>
                  {item.text}
                </a>
              ))}

              {/* LinkedIn */}
              <a
                href={footer.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center gap-2.5 mt-1',
                  'text-sm text-[var(--text-secondary)]',
                  'hover:text-[#0a66c2]',
                  'transition-colors duration-150',
                )}
              >
                {/* LinkedIn icon */}
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 shrink-0"
                >
                  <path d={footer.linkedin.svgPath} />
                </svg>
                {footer.linkedin.label}
              </a>
            </motion.div>

          </div>
        </div>

        {/* Copyright */}
        <motion.div
          {...fadeUp(0.2)}
          className={cn(
            'mt-12 pt-6 border-t border-[var(--border)]',
            'flex items-center justify-center',
            'text-xs text-[var(--text-muted)]',
          )}
        >
          {footer.copyright}
        </motion.div>
      </div>
    </footer>
  );
}
