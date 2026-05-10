/**
 * Tag.jsx — Feature card category label (e.g. "Automation", "Security")
 *
 * Smaller and denser than Pill — sits under the feature card title.
 * Accepts the same `color` set as Pill.
 */
import { cn } from '@/utils';

const COLOR_MAP = {
  blue: {
    bg:   'bg-[rgba(99,102,241,0.12)]',
    text: 'text-[var(--primary-light)]',
  },
  cyan: {
    bg:   'bg-[rgba(34,211,238,0.10)]',
    text: 'text-[var(--accent)]',
  },
  green: {
    bg:   'bg-[rgba(16,185,129,0.10)]',
    text: 'text-[#34d399]',
  },
  amber: {
    bg:   'bg-[rgba(245,158,11,0.10)]',
    text: 'text-[var(--amber)]',
  },
  rose: {
    bg:   'bg-[rgba(244,63,94,0.10)]',
    text: 'text-[#fb7185]',
  },
  violet: {
    bg:   'bg-[rgba(167,139,250,0.10)]',
    text: 'text-[var(--violet)]',
  },
};

export function Tag({ children, color = 'blue', className }) {
  const c = COLOR_MAP[color] ?? COLOR_MAP.blue;

  return (
    <span
      className={cn(
        'inline-block mt-0.5',
        'px-[0.45rem] py-[0.15rem]',
        'rounded-full',
        'text-[0.65rem] font-semibold uppercase tracking-[0.05em]',
        c.bg,
        c.text,
        className
      )}
    >
      {children}
    </span>
  );
}
