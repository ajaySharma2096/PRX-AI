/**
 * SectionHeader.jsx
 *
 * Centered section header used at the top of every content section:
 *   ── LABEL ──
 *   Section Title
 *   Optional description paragraph
 *
 * Animates in with Framer Motion on first viewport entry.
 */
import { motion } from 'framer-motion';
import { cn } from '@/utils';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export function SectionHeader({ label, title, description, className, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <motion.div
      className={cn('flex flex-col mb-14', alignClass, className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {/* ── Decorated label ── */}
      {label && (
        <motion.div
          variants={itemVariants}
          className={cn(
            'inline-flex items-center gap-2 mb-3',
            'text-[0.72rem] font-semibold uppercase tracking-[0.1em]',
            'text-[var(--text-muted)]',
          )}
        >
          {/* Left rule */}
          <span className="block h-px w-6 bg-[var(--border-strong)]" aria-hidden="true" />
          {label}
          {/* Right rule */}
          <span className="block h-px w-6 bg-[var(--border-strong)]" aria-hidden="true" />
        </motion.div>
      )}

      {/* ── Title ── */}
      <motion.h2
        variants={itemVariants}
        className={cn(
          'font-bold tracking-tight text-[var(--text-primary)]',
          'text-2xl sm:text-3xl lg:text-[2.25rem]',
          'mb-3 leading-tight',
        )}
      >
        {title}
      </motion.h2>

      {/* ── Description ── */}
      {description && (
        <motion.p
          variants={itemVariants}
          className={cn(
            'text-[var(--text-secondary)] text-base leading-relaxed',
            align === 'center' ? 'max-w-[560px]' : 'max-w-2xl',
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
