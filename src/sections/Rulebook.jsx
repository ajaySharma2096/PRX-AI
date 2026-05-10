/**
 * Rulebook.jsx — "19-Section Source of Truth" section (id="rulebook").
 *
 * Layout:
 *   SectionHeader
 *   ┌───────────────────────────────────────────────────────┐
 *   │  19-item numbered grid (3-col lg / 2-col sm / 1-col)  │
 *   └───────────────────────────────────────────────────────┘
 *   ┌───────────────────────────────────────────────────────┐
 *   │  4 deep-dive FeatureCards (2-col lg / 1-col sm)       │
 *   └───────────────────────────────────────────────────────┘
 *
 * Receives `data` = rulebook export from content.js
 */
import { motion } from 'framer-motion';
import { SectionHeader, FeatureCard, RevealWrapper } from '@/components/ui';
import { cn } from '@/utils';

const EASE = [0.4, 0, 0.2, 1];

export function Rulebook({ data }) {
  const { label, title, description, sections, features } = data;

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col">
        <SectionHeader label={label} title={title} description={description} />

        {/* ── 19-section numbered grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: EASE }}
          className={cn(
            'rounded-2xl overflow-hidden',
            'border border-[var(--border)]',
            'bg-[var(--surface)]',
          )}
        >
          {/* Header */}
          <div className={cn(
            'px-5 py-3 border-b border-[var(--border)]',
            'bg-[var(--surface-2)]',
            'flex items-center gap-2',
          )}>
            <span className="inline-code text-xs">COPILOT_RULEBOOK.md</span>
            <span className="text-[var(--text-muted)] text-xs">— 19 sections</span>
          </div>

          {/* Grid of sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
            {sections.map((sec, i) => (
              <motion.div
                key={sec.num}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.03 + i * 0.03, duration: 0.3, ease: EASE }}
                className={cn(
                  'flex items-center gap-3',
                  'px-5 py-3.5',
                  'bg-[var(--surface)]',
                  'group transition-colors duration-150',
                  'hover:bg-[var(--surface-elevated)]',
                )}
              >
                {/* Section number */}
                <span
                  className={cn(
                    'shrink-0 w-7 h-7',
                    'flex items-center justify-center',
                    'rounded-lg',
                    'bg-[var(--primary-glow)]',
                    'text-[0.65rem] font-bold font-mono text-[var(--primary-light)]',
                  )}
                >
                  {sec.num}
                </span>
                {/* Title */}
                <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-150">
                  {sec.title}
                </span>
              </motion.div>
            ))}
            {/* Filler cells to complete the last row — prevents the grid background from showing */}
            {Array.from({ length: (3 - (sections.length % 3)) % 3 }).map((_, i) => (
              <div key={`filler-${i}`} className="bg-[var(--surface)]" />
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Deep-dive feature cards ── */}
      <div className="flex flex-col gap-5">
        <h3 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-[0.08em]">
          Section 17 — Absolute Rules Deep Dive
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((feature, i) => (
            <RevealWrapper key={feature.title} delay={i * 0.08} className="h-full">
              <FeatureCard
                icon={feature.icon}
                iconBg={feature.iconColor}
                title={feature.title}
                tag={feature.tag}
                tagColor={feature.tagColor}
                features={feature.items}
              />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}
