/**
 * Home.jsx — Main page composition.
 *
 * Renders the Hero, then maps over the ordered `sections` array from the
 * data layer and renders each section component inside a semantically
 * correct <section> element with the correct id (used by useActiveSection).
 *
 * Section components (ST-6, ST-7, ST-8) receive their full data object as
 * the `data` prop and handle their own internal layout.
 *
 * The `id` attribute lives HERE on the <section> tag — not inside the
 * component — so useActiveSection can locate it via getBoundingClientRect.
 */
import { Divider } from '@/components/ui';
import { sections, hero } from '@/data';

// ── Section component imports (populated across ST-6 → ST-8) ──────────────
import { Hero }         from '@/sections/Hero.jsx';
import { Overview }     from '@/sections/Overview.jsx';
import { Setup }        from '@/sections/Setup.jsx';
import { OutputFiles }  from '@/sections/OutputFiles.jsx';
import { Analysis }     from '@/sections/Analysis.jsx';
import { Rulebook }     from '@/sections/Rulebook.jsx';
import { Workflow }     from '@/sections/Workflow.jsx';
import { Compliance }   from '@/sections/Compliance.jsx';
import { Safeguards }   from '@/sections/Safeguards.jsx';
import { Traceability } from '@/sections/Traceability.jsx';

// Maps the section `id` from content.js to its React component
const SECTION_MAP = {
  agnostic:     Overview,
  setup:        Setup,
  files:        OutputFiles,
  analysis:     Analysis,
  rulebook:     Rulebook,
  workflow:     Workflow,
  compliance:   Compliance,
  safeguards:   Safeguards,
  traceability: Traceability,
};

export function Home() {
  return (
    <>
      {/* ── Hero (no section id — not in nav scroll targets) ── */}
      <Hero data={hero} />

      {/* ── Content sections ── */}
      {sections.map(({ id, data }, index) => {
        const SectionComp = SECTION_MAP[id];
        if (!SectionComp) return null;

        return (
          <section key={id} id={id} className="section-wrapper">
            <div className="container-xl">
              <SectionComp data={data} />
            </div>
            {/* Divider between sections, not after the last */}
            {index < sections.length - 1 && <Divider className="mt-16" />}
          </section>
        );
      })}
    </>
  );
}
