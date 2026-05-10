/**
 * Analysis.jsx — "Reads Your Codebase. Not Assumptions." section (id="analysis").
 *
 * Layout:
 *   SectionHeader
 *   3×2 (→ 2-col sm → 1-col mobile) grid of FeatureCards
 *   Each card has an icon, title, tag, and 3 bullet items.
 *
 * Receives `data` = analysis export from content.js
 */
import { SectionHeader, FeatureCard, RevealWrapper } from '@/components/ui';

export function Analysis({ data }) {
  const { label, title, description, features } = data;

  return (
    <div className="flex flex-col">
      <SectionHeader label={label} title={title} description={description} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature, i) => (
          <RevealWrapper key={feature.title} delay={i * 0.07} className="h-full">
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
