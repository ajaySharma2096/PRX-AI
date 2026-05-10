/**
 * FeatureList.jsx
 *
 * Bulleted list used inside FeatureCard and section content blocks.
 * Renders a ▸ prefix bullet in muted colour with rich item text.
 *
 * Props:
 *   items   {string[]} — plain text or HTML-safe strings
 *   mono    {boolean}  — render all items in monospace (for code paths)
 *   className {string}
 */
import { cn } from '@/utils';

export function FeatureList({ items = [], mono = false, className }) {
  if (!items.length) return null;

  return (
    <ul className={cn('flex flex-col gap-[0.45rem] list-none', className)}>
      {items.map((item, i) => (
        <li
          key={i}
          className={cn(
            'relative pl-5 text-[0.845rem] leading-[1.55]',
            'text-[var(--text-secondary)]',
            mono && 'font-mono text-[0.78rem]',
          )}
        >
          {/* Bullet */}
          <span
            aria-hidden="true"
            className="absolute left-0 top-[0.2em] text-[0.62rem] text-[var(--text-muted)]"
          >
            ▸
          </span>
          {/* Content — dangerouslySetInnerHTML for bold/code spans from data layer */}
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  );
}
