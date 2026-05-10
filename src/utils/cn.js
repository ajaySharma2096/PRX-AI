/**
 * cn.js — Class name utility
 *
 * Combines clsx (conditional class merging) with tailwind-merge
 * (deduplicates conflicting Tailwind classes).
 *
 * Usage:
 *   cn('px-4 py-2', isActive && 'bg-primary', className)
 *   cn('text-sm', 'text-lg')  // → 'text-lg'  (tw-merge resolves conflict)
 */
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges class names with Tailwind conflict resolution.
 * @param {...(string|undefined|null|false|Record<string,boolean>)} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
