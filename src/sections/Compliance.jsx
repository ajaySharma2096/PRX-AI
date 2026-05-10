/**
 * Compliance.jsx — "Compliance Checked at Every Phase" section (id="compliance").
 *
 * Layout:
 *   SectionHeader
 *   3-column grid (→ 1-col mobile) — one card per phase checklist.
 *
 *   Each checklist card:
 *   ┌───────────────────────────────┐
 *   │  [accent bar]                 │
 *   │  ◆ Phase N — N-Item Title     │
 *   │  ─────────────────            │
 *   │  ✓ item                       │
 *   │  ✓ item  ...                  │
 *   └───────────────────────────────┘
 *
 * Receives `data` = compliance export from content.js
 */
import { motion } from 'framer-motion';
import { SectionHeader, RevealWrapper } from '@/components/ui';
import { cn } from '@/utils';

const EASE = [0.4, 0, 0.2, 1];

export function Compliance({ data }) {
  const { label, title, description, groups } = data;

  return (
    <div className="flex flex-col">
      <SectionHeader label={label} title={title} description={description} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {groups.map((group, i) => (
          <RevealWrapper key={group.title} delay={i * 0.1} className="h-full">
            <ChecklistCard group={group} />
          </RevealWrapper>
        ))}
      </div>
    </div>
  );
}

function ChecklistCard({ group }) {
  const { title, accentColor, items } = group;

  return (
    <div
      className={cn(
        'glass-card relative flex flex-col gap-4 h-full',
        'rounded-2xl overflow-hidden',
        'border border-[var(--border)]',
        'p-5',
        'transition-all duration-300',
        'hover:border-[var(--border-strong)] hover:shadow-card-hover',
      )}
    >
      {/* Accent top bar */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-0.5"
        style={{ background: accentColor }}
      />

      {/* Title */}
      <h3
        className="pt-1 text-sm font-semibold leading-snug"
        style={{ color: accentColor }}
      >
        {title}
      </h3>

      {/* Divider */}
      <div className="h-px bg-[var(--border)]" aria-hidden="true" />

      {/* Checklist items */}
      <ul className="flex flex-col gap-2">
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 + i * 0.035, duration: 0.25, ease: EASE }}
            className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)] leading-snug"
          >
            <span
              aria-hidden="true"
              className="shrink-0 mt-[0.1em] text-[0.65rem]"
              style={{ color: accentColor }}
            >
              ✓
            </span>
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
