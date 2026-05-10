/**
 * Setup.jsx — "One Command. Full Setup." section (id="setup").
 *
 * Layout:
 *   SectionHeader
 *   ┌─────────────────────┬─────────────────────────┐
 *   │  Terminal block      │  2 Feature cards (col)  │
 *   └─────────────────────┴─────────────────────────┘
 *   (stacks to column on mobile: terminal first, then cards)
 *
 * Receives `data` = setup export from content.js
 */
import { motion } from 'framer-motion';
import { SectionHeader, FeatureCard, RevealWrapper } from '@/components/ui';
import { cn } from '@/utils';

const EASE = [0.4, 0, 0.2, 1];

export function Setup({ data }) {
  const { label, title, description, terminal, features } = data;

  return (
    <div className="flex flex-col">
      <SectionHeader label={label} title={title} description={description} />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">

        {/* ── Terminal block ── */}
        <RevealWrapper delay={0}>
          <TerminalBlock terminal={terminal} />
        </RevealWrapper>

        {/* ── Feature cards ── */}
        <div className="flex flex-col gap-4">
          {features.map((feature, i) => (
            <RevealWrapper key={feature.title} delay={0.08 + i * 0.08}>
              <FeatureCard
                icon={feature.icon}
                iconBg={feature.iconColor}
                title={feature.title}
                tag={feature.tag}
                tagColor={feature.tagColor}
                features={feature.items}
              />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Sub-component: fake terminal ─────────────────────────────────────────── */
function TerminalBlock({ terminal }) {
  const { comment, triggerLabel, trigger, stepsComment, steps } = terminal;

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        'rounded-2xl overflow-hidden',
        'border border-[var(--border-strong)]',
        'bg-[var(--surface)]',
        'shadow-card',
      )}
    >
      {/* Window chrome */}
      <div className={cn(
        'flex items-center justify-between',
        'px-4 py-3',
        'border-b border-[var(--border)]',
        'bg-[var(--surface-2)]',
      )}>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-[0.7rem] text-[var(--text-muted)] font-mono">
          GitHub Copilot
        </span>
        <div className="w-[52px]" aria-hidden="true" /> {/* balance spacer */}
      </div>

      {/* Code body */}
      <div className="p-5 font-mono text-xs leading-[1.8] space-y-1">

        {/* Comment */}
        <div className="text-[var(--text-muted)]">{comment}</div>

        {/* Trigger */}
        <div className="mt-2">
          <span className="text-[var(--amber)]">{triggerLabel} </span>
          <span className="text-[var(--primary-light)] font-semibold">{trigger}</span>
        </div>

        {/* Blank line */}
        <div>&nbsp;</div>

        {/* Steps comment */}
        <div className="text-[var(--text-muted)]">{stepsComment}</div>

        {/* Animated step lines */}
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1 + i * 0.07,
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="flex items-center gap-3"
          >
            {/* Step indicator dot */}
            <span
              aria-hidden="true"
              className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--green)]"
            />
            {/* Label */}
            <span className="text-[var(--text-muted)] w-[3.5rem] shrink-0">
              {step.label}
            </span>
            {/* Text — highlight filenames */}
            <span className="text-[var(--text-secondary)]">
              {highlightFilename(step.text)}
            </span>
          </motion.div>
        ))}

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 + steps.length * 0.07 + 0.15, duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="pt-3 mt-1 border-t border-[var(--border)]"
        >
          <a
            href="https://github.com/ajaySharma2096/PRX-AI-Setup"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-2',
              'px-3 py-1.5 rounded-lg',
              'border border-[rgba(99,102,241,0.3)]',
              'bg-[rgba(99,102,241,0.08)]',
              'text-[0.72rem] font-semibold text-[var(--primary-light)]',
              'transition-colors duration-200',
              'hover:bg-[rgba(99,102,241,0.15)] hover:border-[rgba(99,102,241,0.5)]',
            )}
          >
            {/* GitHub icon */}
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Get PRX_AI.md on GitHub
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

/**
 * Wraps any `.md` filename token in an accent-coloured span.
 */
function highlightFilename(text) {
  // Match tokens like COPILOT_RULEBOOK.md or workflow-instructions.md
  const parts = text.split(/(\S+\.md\b)/);
  if (parts.length === 1) return text;
  return (
    <>
      {parts.map((part, i) =>
        part.endsWith('.md') ? (
          <span key={i} className="text-[var(--accent)]">{part}</span>
        ) : (
          part
        )
      )}
    </>
  );
}
