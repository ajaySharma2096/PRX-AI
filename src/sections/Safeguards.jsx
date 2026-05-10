/**
 * Safeguards.jsx — "Hard Stops That Protect Your Codebase" section (id="safeguards").
 *
 * Layout:
 *   SectionHeader
 *   2-column grid (→ 1-col mobile) of 8 numbered safeguard cards.
 *
 *   Each card:
 *   ┌───────────────────────────────┐
 *   │  [N]  Title (bold)            │
 *   │       Description             │
 *   └───────────────────────────────┘
 *
 * Receives `data` = safeguards export from content.js
 */
import { SectionHeader, RevealWrapper } from '@/components/ui';
import { cn } from '@/utils';

export function Safeguards({ data }) {
  const { label, title, description, items } = data;

  return (
    <div className="flex flex-col">
      <SectionHeader label={label} title={title} description={description} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <RevealWrapper key={i} delay={i * 0.07} className="h-full">
            <SafeguardCard item={item} index={i} />
          </RevealWrapper>
        ))}
      </div>
    </div>
  );
}

function SafeguardCard({ item, index }) {
  // Split title at em-dash to separate headline from subtitle
  const dashIdx = item.title.indexOf(' — ');
  const headline = dashIdx > -1 ? item.title.slice(0, dashIdx)      : item.title;
  const subtitle  = dashIdx > -1 ? item.title.slice(dashIdx + 3)    : null;

  return (
    <div
      className={cn(
        'glass-card group flex gap-4 h-full',
        'rounded-2xl p-5',
        'border border-[var(--border)]',
        'transition-all duration-300',
        'hover:border-[var(--border-strong)] hover:shadow-card-hover',
      )}
    >
      {/* Number badge */}
      <div
        aria-hidden="true"
        className={cn(
          'shrink-0 flex items-center justify-center',
          'w-8 h-8 rounded-xl',
          'bg-[var(--primary-glow)]',
          'text-sm font-bold font-mono text-[var(--primary-light)]',
          'mt-0.5',
        )}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 min-w-0">
        <div>
          <h3 className="text-sm font-semibold text-[var(--text-primary)] leading-snug">
            {headline}
          </h3>
          {subtitle && (
            <p className="mt-0.5 text-[0.72rem] font-medium text-[var(--primary-light)]">
              {subtitle}
            </p>
          )}
        </div>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}
