/**
 * Overview.jsx — "Works With Any Codebase" section (id="agnostic").
 *
 * Layout: SectionHeader + 2×2 (→ 1-col mobile) grid of agnostic cards.
 *
 * Each card:
 *   ┌──────────────────────────────────┐
 *   │  [gradient top accent bar]       │
 *   │  Icon  Title                     │
 *   │  Description (+ inline code)     │
 *   │  ──────────────────              │
 *   │  [Pill] [Pill] [Pill] …         │
 *   └──────────────────────────────────┘
 *
 * Receives `data` = overview export from content.js
 */
import { motion } from 'framer-motion';
import { SectionHeader, Pill, RevealWrapper } from '@/components/ui';
import { cn } from '@/utils';

export function Overview({ data }) {
  const { label, title, description, cards } = data;

  return (
    <div className="flex flex-col">
      {/* Header */}
      <SectionHeader label={label} title={title} description={description} />

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {cards.map((card, i) => (
          <RevealWrapper key={card.modifier} delay={i * 0.08}>
            <AgnosticCard card={card} />
          </RevealWrapper>
        ))}
      </div>
    </div>
  );
}

function AgnosticCard({ card }) {
  const { icon, title, description, codeInDesc, accentFrom, accentTo, iconBg, pills } = card;

  return (
    <div
      className={cn(
        'glass-card group relative flex flex-col gap-5',
        'rounded-2xl overflow-hidden',
        'border border-[var(--border)]',
        'p-6',
        'transition-all duration-300',
        'hover:border-[var(--border-strong)] hover:shadow-card-hover',
      )}
    >
      {/* Top gradient accent bar */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-0.5"
        style={{
          background: `linear-gradient(90deg, ${accentFrom}, ${accentTo})`,
        }}
      />

      {/* Icon + Title row */}
      <div className="flex items-center gap-3 pt-1">
        <span
          aria-hidden="true"
          className={cn(
            'flex items-center justify-center',
            'w-10 h-10 rounded-xl text-xl shrink-0',
            'transition-transform duration-300 group-hover:scale-110',
          )}
          style={{ background: iconBg }}
        >
          {icon}
        </span>
        <h3 className="text-base font-semibold text-[var(--text-primary)]">{title}</h3>
      </div>

      {/* Description */}
      {description && (
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed -mt-2">
          {codeInDesc ? (
            <>
              {description.replace(codeInDesc, '')}
              <code className="inline-code">{codeInDesc}</code>.
            </>
          ) : (
            description
          )}
        </p>
      )}

      {/* Divider */}
      <div className="h-px bg-[var(--border)]" aria-hidden="true" />

      {/* Pills */}
      {pills?.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {pills.map((pill) => (
            <Pill key={pill.text} color={pill.color}>
              {pill.text}
            </Pill>
          ))}
        </div>
      )}
    </div>
  );
}
