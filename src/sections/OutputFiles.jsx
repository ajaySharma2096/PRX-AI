/**
 * OutputFiles.jsx — "Everything That Gets Created" section (id="files").
 *
 * Layout:
 *   SectionHeader
 *   Premium table (scrollable on mobile) showing all 5 generated files.
 *   Status badge differentiates "generated" vs "auto" (fixed template).
 *
 * Receives `data` = outputFiles export from content.js
 */
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui';
import { cn } from '@/utils';

const EASE = [0.4, 0, 0.2, 1];

const STATUS_STYLES = {
  generated: {
    bg:   'bg-[rgba(99,102,241,0.12)]',
    text: 'text-[var(--primary-light)]',
    dot:  'bg-[var(--primary-light)]',
  },
  auto: {
    bg:   'bg-[rgba(16,185,129,0.10)]',
    text: 'text-[#34d399]',
    dot:  'bg-[#34d399]',
  },
};

export function OutputFiles({ data }) {
  const { label, title, description, columns, rows } = data;

  return (
    <div className="flex flex-col">
      <SectionHeader label={label} title={title} description={description} />

      {/* ── Table wrapper (horizontal scroll on mobile) ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: EASE }}
        className={cn(
          'w-full overflow-x-auto',
          'rounded-2xl border border-[var(--border)]',
          'bg-[var(--surface)]',
        )}
      >
        <table className="w-full min-w-[640px] border-collapse">
          {/* ── Head ── */}
          <thead>
            <tr className="border-b border-[var(--border)] bg-[var(--surface-2)]">
              {columns.map((col, i) => (
                <th
                  key={col}
                  className={cn(
                    'px-5 py-3.5',
                    'text-left text-[0.72rem] font-semibold uppercase tracking-[0.08em]',
                    'text-[var(--text-muted)]',
                    i === 0 && 'w-[38%]',
                    i === 1 && 'w-[42%]',
                    i === 2 && 'w-[20%]',
                  )}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          {/* ── Body ── */}
          <tbody>
            {rows.map((row, i) => (
              <motion.tr
                key={row.file}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 + i * 0.07, duration: 0.35, ease: EASE }}
                className={cn(
                  'group border-b border-[var(--border)] last:border-0',
                  'transition-colors duration-150',
                  'hover:bg-[var(--surface-elevated)]',
                )}
              >
                {/* File name */}
                <td className="px-5 py-4 align-top">
                  <code className="inline-code text-xs break-all">
                    {row.file}
                  </code>
                </td>

                {/* Role */}
                <td className="px-5 py-4 align-top">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {row.role}
                  </p>
                </td>

                {/* Status badge */}
                <td className="px-5 py-4 align-top">
                  <StatusBadge status={row.status} label={row.statusLabel} />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}

function StatusBadge({ status, label }) {
  const s = STATUS_STYLES[status] ?? STATUS_STYLES.auto;

  return (
    <span
      className={cn(
        'inline-flex items-start gap-1.5',
        'px-2.5 py-1 rounded-lg',
        'text-[0.7rem] font-medium leading-snug',
        s.bg,
        s.text,
      )}
    >
      <span className={cn('mt-[0.35em] shrink-0 w-1.5 h-1.5 rounded-full', s.dot)} aria-hidden="true" />
      {label}
    </span>
  );
}
