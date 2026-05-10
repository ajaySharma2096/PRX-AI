/**
 * FeatureCard.jsx
 *
 * The primary card unit used in 5+ sections.
 * 
 * Structure:
 *   ┌──────────────────────────────────┐
 *   │  Icon ─── Title         Tag      │
 *   │  description (opt)               │
 *   │  ──────────────────              │
 *   │  ▸ feature item                  │
 *   │  ▸ feature item                  │
 *   └──────────────────────────────────┘
 *
 * Props:
 *   icon         {string}   — single emoji or SVG element
 *   iconBg       {string}   — inline bg class key: 'blue'|'cyan'|'green'|'amber'|'rose'|'violet'
 *   title        {string}
 *   tag          {string}   — short category label
 *   tagColor     {string}   — Pill/Tag color key
 *   description  {string}   — optional subtitle
 *   codeInDesc   {boolean}  — wrap description in <code> style
 *   features     {string[]} — list items passed to FeatureList
 *   monoItems    {boolean}  — pass mono=true to FeatureList
 *   accentColor  {string}   — CSS color string for left-border accent (optional)
 *   className    {string}
 */
import { Tag } from './Tag';
import { FeatureList } from './FeatureList';
import { cn } from '@/utils';

// Icon background glow classes mapped statically for Tailwind scan
const ICON_BG = {
  blue:   'bg-[rgba(99,102,241,0.12)] text-[var(--primary-light)]',
  cyan:   'bg-[rgba(34,211,238,0.10)] text-[var(--accent)]',
  green:  'bg-[rgba(16,185,129,0.10)] text-[#34d399]',
  amber:  'bg-[rgba(245,158,11,0.10)] text-[var(--amber)]',
  rose:   'bg-[rgba(244,63,94,0.10)] text-[#fb7185]',
  violet: 'bg-[rgba(167,139,250,0.12)] text-[var(--violet)]',
};

export function FeatureCard({
  icon,
  iconBg      = 'blue',
  title,
  tag,
  tagColor    = 'blue',
  description,
  codeInDesc  = false,
  features    = [],
  monoItems   = false,
  accentColor,
  className,
}) {
  const iconClasses = ICON_BG[iconBg] ?? ICON_BG.blue;

  return (
    <div
      className={cn(
        'glass-card group relative',
        'flex flex-col gap-4 h-full',
        'p-5 rounded-2xl',
        'border border-[var(--border)]',
        'transition-all duration-300',
        'hover:border-[var(--border-strong)]',
        'hover:shadow-card-hover',
        // Left accent bar via inline style — driven by data
        accentColor && 'border-l-2',
        className,
      )}
      style={accentColor ? { borderLeftColor: accentColor } : undefined}
    >
      {/* ── Header row: icon + title + tag ── */}
      <div className="flex items-start gap-3">
        {/* Icon */}
        {icon && (
          <span
            aria-hidden="true"
            className={cn(
              'shrink-0 flex items-center justify-center',
              'w-9 h-9 rounded-xl text-lg',
              'transition-transform duration-300 group-hover:scale-110',
              iconClasses,
            )}
          >
            {icon}
          </span>
        )}

        {/* Title + tag */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-sm font-semibold text-[var(--text-primary)] leading-tight">
              {title}
            </h3>
            {tag && <Tag color={tagColor}>{tag}</Tag>}
          </div>

          {/* Description */}
          {description && (
            codeInDesc
              ? (
                <code className="inline-code block mt-1 text-xs leading-relaxed">
                  {description}
                </code>
              )
              : (
                <p className="mt-1 text-xs text-[var(--text-muted)] leading-relaxed">
                  {description}
                </p>
              )
          )}
        </div>
      </div>

      {/* ── Feature list ── */}
      {features.length > 0 && (
        <>
          <div className="h-px bg-[var(--border)]" aria-hidden="true" />
          <FeatureList items={features} mono={monoItems} />
        </>
      )}
    </div>
  );
}
