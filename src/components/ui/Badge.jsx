/**
 * Used in the sticky header and hero section.
 */
import { cn } from '@/utils';

export function Badge({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5',
        'px-3 py-1',
        'rounded-full',
        'border border-[rgba(99,102,241,0.3)]',
        'bg-[rgba(99,102,241,0.1)]',
        'text-[0.72rem] font-medium tracking-wide',
        'text-[var(--primary-light)]',
        'whitespace-nowrap',
        className
      )}
    >
      {children}
    </span>
  );
}
