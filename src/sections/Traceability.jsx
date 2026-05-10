/**
 * Traceability.jsx — "Every Decision Is Traceable" section (id="traceability").
 *
 * Layout:
 *   SectionHeader
 *   2×2 FeatureCard grid (→ 1-col mobile)
 *
 * Receives `data` = traceability export from content.js
 */
import { SectionHeader, FeatureCard, RevealWrapper } from '@/components/ui';

export function Traceability({ data }) {
  const { label, title, description, features } = data;

  return (
    <div className="flex flex-col">
      <SectionHeader label={label} title={title} description={description} />

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
  );
}
