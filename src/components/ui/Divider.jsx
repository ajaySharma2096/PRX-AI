/**
 * Divider.jsx — Gradient horizontal rule between page sections.
 * Fades from transparent → border-strong → transparent.
 */
import { cn } from '@/utils';

export function Divider({ className }) {
  return (
    <div
      aria-hidden="true"
      className={cn('divider-gradient w-full', className)}
    />
  );
}
