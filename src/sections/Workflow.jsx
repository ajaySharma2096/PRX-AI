/**
 * Workflow.jsx — "Plan → Review → Execute" section (id="workflow").
 *
 * Layout:
 *   SectionHeader
 *   ┌─────────────────────────────────────────────────────────────┐
 *   │  3-Phase pipeline (horizontal on lg, vertical on mobile)    │
 *   │  Phase cards connected by → arrows                          │
 *   └─────────────────────────────────────────────────────────────┘
 *   ┌─────────────────────────────────────────────────────────────┐
 *   │  2×2 FeatureCard grid                                       │
 *   └─────────────────────────────────────────────────────────────┘
 *
 * Receives `data` = workflow export from content.js
 */
import { motion } from 'framer-motion';
import { SectionHeader, FeatureCard, RevealWrapper } from '@/components/ui';
import { cn } from '@/utils';

const EASE = [0.4, 0, 0.2, 1];

export function Workflow({ data }) {
  const { label, title, description, phases, features } = data;

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col">
        <SectionHeader label={label} title={title} description={description} />

        {/* ── Phase pipeline ── */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0">
          {phases.map((phase, i) => (
            <div key={phase.num} className="flex flex-col lg:flex-row items-stretch flex-1 min-w-0">
              {/* Phase card */}
              <RevealWrapper delay={i * 0.1} className="flex-1">
                <PhaseCard phase={phase} index={i} />
              </RevealWrapper>

              {/* Arrow connector — hidden after last */}
              {i < phases.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.3 }}
                  aria-hidden="true"
                  className={cn(
                    // Horizontal arrow on lg
                    'hidden lg:flex items-center justify-center',
                    'w-8 shrink-0',
                    'text-[var(--text-muted)] text-lg',
                  )}
                >
                  →
                </motion.div>
              )}

              {/* Vertical arrow on mobile — between cards */}
              {i < phases.length - 1 && (
                <div
                  aria-hidden="true"
                  className="lg:hidden flex justify-center py-1 text-[var(--text-muted)]"
                >
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Feature cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {features.map((feature, i) => (
          <RevealWrapper key={feature.title} delay={i * 0.08}>
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
  );
}

function PhaseCard({ phase, index }) {
  const { num, title, description, gate, accent } = phase;

  return (
    <div
      className={cn(
        'glass-card group relative flex flex-col gap-4',
        'rounded-2xl p-5 h-full',
        'border border-[var(--border)]',
        'transition-all duration-300',
        'hover:border-[var(--border-strong)] hover:shadow-card-hover',
      )}
    >
      {/* Accent top bar */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-0.5 rounded-t-2xl"
        style={{ background: accent }}
      />

      {/* Phase number badge */}
      <div className="flex items-center gap-2 pt-1">
        <span
          className={cn(
            'inline-flex items-center justify-center',
            'w-6 h-6 rounded-full',
            'text-xs font-bold',
            'bg-[var(--surface-2)] border border-[var(--border-strong)]',
            'text-[var(--text-muted)]',
          )}
        >
          {index + 1}
        </span>
        <span
          className="text-[0.72rem] font-semibold uppercase tracking-[0.08em]"
          style={{ color: accent }}
        >
          {num}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-[var(--text-primary)]">{title}</h3>

      {/* Description */}
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
        {description}
      </p>

      {/* Gate badge */}
      <div
        className={cn(
          'inline-flex items-center gap-2 self-start',
          'px-3 py-1.5 rounded-lg',
          'border border-[var(--border-strong)]',
          'bg-[var(--surface-2)]',
          'font-mono text-[0.68rem] font-semibold',
        )}
        style={{ color: accent }}
      >
        <span aria-hidden="true">✓</span>
        {gate}
      </div>
    </div>
  );
}
