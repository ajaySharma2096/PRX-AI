/**
 * Pill.jsx — Technology / stack tag pills (e.g. "Node.js", "Express")
 *
 * Accepts a `color` prop from the data layer:
 *   blue | cyan | green | violet | amber | rose
 *
 * NOTE: All class strings below are fully static so Tailwind's content scan
 * picks them up correctly — no dynamic string concatenation in class names.
 */
import { cn } from '@/utils';

const COLOR_MAP = {
  blue: {
    bg:     'bg-[rgba(99,102,241,0.10)]',
    border: 'border-[rgba(99,102,241,0.25)]',
    text:   'text-[var(--primary-light)]',
  },
  cyan: {
    bg:     'bg-[rgba(34,211,238,0.08)]',
    border: 'border-[rgba(34,211,238,0.22)]',
    text:   'text-[var(--accent)]',
  },
  green: {
    bg:     'bg-[rgba(16,185,129,0.08)]',
    border: 'border-[rgba(16,185,129,0.22)]',
    text:   'text-[#34d399]',
  },
  violet: {
    bg:     'bg-[rgba(167,139,250,0.10)]',
    border: 'border-[rgba(167,139,250,0.25)]',
    text:   'text-[var(--violet)]',
  },
  amber: {
    bg:     'bg-[rgba(245,158,11,0.10)]',
    border: 'border-[rgba(245,158,11,0.22)]',
    text:   'text-[var(--amber)]',
  },
  rose: {
    bg:     'bg-[rgba(244,63,94,0.10)]',
    border: 'border-[rgba(244,63,94,0.22)]',
    text:   'text-[#fb7185]',
  },
};

export function Pill({ children, color = 'blue', className }) {
  const c = COLOR_MAP[color] ?? COLOR_MAP.blue;

  return (
    <span
      className={cn(
        'inline-block px-2 py-0.5',
        'rounded-full border',
        'text-[0.68rem] font-medium',
        'leading-none',
        c.bg,
        c.border,
        c.text,
        className
      )}
    >
      {children}
    </span>
  );
}
