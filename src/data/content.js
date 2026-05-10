/**
 * content.js — Single source of truth for all page data.
 *
 * Ported from content.json. Using a .js module instead of JSON gives us:
 *  • JSDoc type hints
 *  • Ability to use template literals for multi-line strings
 *  • Tree-shaking friendly (Vite strips unused exports)
 *  • No fetch() required — data is bundled at build time
 */

// ─────────────────────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────────────────────
export const meta = {
  title: 'PRX — AI Workflow Features',
};

// ─────────────────────────────────────────────────────────────────────────────
// Header
// ─────────────────────────────────────────────────────────────────────────────
export const header = {
  logo: {
    icon: '⚙',
    text: 'PRX',
    sub: 'AI-Controlled Software Delivery',
    href: '#',
  },
  nav: [
    { label: 'Overview',     target: 'agnostic'     },
    { label: 'Setup',        target: 'setup'        },
    { label: 'Output Files', target: 'files'        },
    { label: 'Analysis',     target: 'analysis'     },
    { label: 'Rulebook',     target: 'rulebook'     },
    { label: 'Workflow',     target: 'workflow'     },
    { label: 'Compliance',   target: 'compliance'   },
    { label: 'Safeguards',   target: 'safeguards'   },
    { label: 'Traceability', target: 'traceability' },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────────────────────────────────────
export const hero = {
  label: '⚡ One File. Any Repository.',
  title: 'The AI Workflow That Plans, Reviews, Then Executes',
  description:
    'Drop one file into any repository. Copilot analyzes your entire codebase, generates a project-specific rulebook, and installs a gate-controlled 3-phase delivery workflow — automatically.',
  triggers: [
    {
      comment: '// Trigger the setup',
      code: '"Execute PRX_AI.md"',
      highlight: 'PRX_AI.md',
    },
    {
      comment: '// Trigger any task',
      code: '"[Your task], follow workflow-instructions.md"',
      highlight: 'workflow-instructions.md',
    },
  ],
  stats: [
    { number: '5',  label: 'Files Created'                },
    { number: '3',  label: 'Workflow Phases'              },
    { number: '19', label: 'Rulebook Sections'            },
    { number: '0',  label: 'Human Prompts Between Phases' },
    { number: '31', label: 'Compliance Checks Per Plan'   },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Section: Overview (id="agnostic")
// ─────────────────────────────────────────────────────────────────────────────
export const overview = {
  id: 'agnostic',
  label: 'Core Design',
  title: 'Works With Any Codebase',
  description:
    'No hardcoded language, framework, or stack assumptions. All project-specific rules live in a generated rulebook — swap the project, the workflow adapts.',
  cards: [
    {
      modifier: 'lang',
      icon: '🌐',
      title: 'Language Agnostic',
      description:
        'Works with any programming language. The workflow phase files contain zero language-specific syntax or rules.',
      accentFrom: 'var(--primary)',
      accentTo:   'var(--primary-light)',
      iconBg:     'var(--primary-glow)',
      pills: [
        { text: 'Node.js', color: 'blue' },
        { text: 'Python',  color: 'blue' },
        { text: 'Go',      color: 'blue' },
        { text: 'Java',    color: 'blue' },
        { text: 'Ruby',    color: 'blue' },
        { text: 'Rust',    color: 'blue' },
        { text: 'C#',      color: 'blue' },
      ],
    },
    {
      modifier: 'fw',
      icon: '🔧',
      title: 'Framework Agnostic',
      description:
        'No references to Express, FastAPI, Spring, Rails, Django, or any framework in the workflow files.',
      accentFrom: 'var(--accent)',
      accentTo:   '#0ea5e9',
      iconBg:     'var(--accent-glow)',
      pills: [
        { text: 'Express', color: 'cyan' },
        { text: 'FastAPI', color: 'cyan' },
        { text: 'Spring',  color: 'cyan' },
        { text: 'Rails',   color: 'cyan' },
        { text: 'NestJS',  color: 'cyan' },
        { text: 'Next.js', color: 'cyan' },
      ],
    },
    {
      modifier: 'stack',
      icon: '🏗',
      title: 'Architecture Agnostic',
      description:
        'Works for REST APIs, BFF apps, microservices, monoliths, CLI tools, full-stack apps, or any combination.',
      accentFrom: 'var(--green)',
      accentTo:   '#34d399',
      iconBg:     'var(--green-glow)',
      pills: [
        { text: 'REST API',      color: 'green' },
        { text: 'BFF',           color: 'green' },
        { text: 'Microservices', color: 'green' },
        { text: 'Monolith',      color: 'green' },
        { text: 'Full-Stack',    color: 'green' },
      ],
    },
    {
      modifier: 'rule',
      icon: '📋',
      title: 'Rulebook-Driven',
      description:
        'All project-specific rules live entirely in COPILOT_RULEBOOK.md. The phases reference it — never hardcode project rules.',
      codeInDesc: 'COPILOT_RULEBOOK.md',
      accentFrom: 'var(--violet)',
      accentTo:   'var(--primary-light)',
      iconBg:     'rgba(167, 139, 250, 0.12)',
      pills: [
        { text: 'Auto-Generated',         color: 'violet' },
        { text: 'Human-Reviewable',       color: 'violet' },
        { text: 'Single Source of Truth', color: 'violet' },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Section: Setup (id="setup")
// ─────────────────────────────────────────────────────────────────────────────
export const setup = {
  id: 'setup',
  label: 'Setup Automation',
  title: 'One Command. Full Setup.',
  description:
    'A single trigger runs all 7 setup steps sequentially and automatically — no prompts, no configuration, no tooling to install.',
  terminal: {
    comment: '// Add PRX_AI.md to your repo root, then:',
    triggerLabel: 'User:',
    trigger: '"Execute PRX_AI.md"',
    stepsComment: '// Copilot automatically runs all 7 steps:',
    steps: [
      { label: 'Step 1', text: 'Deep repository analysis'        },
      { label: 'Step 2', text: 'Generate COPILOT_RULEBOOK.md'    },
      { label: 'Step 3', text: 'Create workflow-instructions.md' },
      { label: 'Step 4', text: 'Create phase-1-architect.md'     },
      { label: 'Step 5', text: 'Create phase-2-reviewer.md'      },
      { label: 'Step 6', text: 'Create phase-3-executor.md'      },
      { label: 'Step 7', text: 'Output setup report'             },
    ],
  },
  features: [
    {
      icon: '⚡',
      iconColor: 'blue',
      title: 'Single-Trigger Bootstrap',
      tag: 'Automation',
      tagColor: 'blue',
      items: [
        'One instruction triggers all 7 setup steps',
        'No human prompting between steps',
        'No external tools or scripts to install',
        'Pure markdown executed by Copilot',
      ],
    },
    {
      icon: '📁',
      iconColor: 'cyan',
      title: 'Creates All 5 Files in One Shot',
      tag: 'File Generation',
      tagColor: 'cyan',
      items: [
        'COPILOT_RULEBOOK.md — project source of truth',
        'workflow-instructions.md — auto-execution protocol',
        'phase-1-architect.md — planning role',
        'phase-2-reviewer.md — review gate role',
        'phase-3-executor.md — implementation role',
        'Auto-creates docs/ai-workflow/ directory',
      ],
      codeItems: ['COPILOT_RULEBOOK.md', 'workflow-instructions.md', 'phase-1-architect.md', 'phase-2-reviewer.md', 'phase-3-executor.md', 'docs/ai-workflow/'],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Section: Output Files (id="files")
// ─────────────────────────────────────────────────────────────────────────────
export const outputFiles = {
  id: 'files',
  label: 'Output Files',
  title: 'Everything That Gets Created',
  description:
    'Five files installed into your repository, each with a distinct role in the workflow.',
  columns: ['File', 'Role', 'How Created'],
  rows: [
    {
      file: 'COPILOT_RULEBOOK.md',
      role: 'Source of truth for all AI decisions. Contains 19 sections: tech stack, architecture, patterns, naming conventions, security rules, absolute constraints.',
      status: 'generated',
      statusLabel: 'Generated from codebase analysis',
    },
    {
      file: 'docs/ai-workflow/workflow-instructions.md',
      role: 'Defines the auto-execution protocol, trigger format, phase transition headers, rejection loop, context handoff contract, and 15 mandatory rules.',
      status: 'auto',
      statusLabel: 'Fixed template',
    },
    {
      file: 'docs/ai-workflow/phase-1-architect.md',
      role: 'Senior Architect role. Governs planning — codebase inspection protocol, compliance checklist (31 items), output format, absolute rules.',
      status: 'auto',
      statusLabel: 'Fixed template',
    },
    {
      file: 'docs/ai-workflow/phase-2-reviewer.md',
      role: 'Senior Reviewer role. Governs the approval gate — 14 review steps, adversarial mindset rules, blocking vs non-blocking classification, final plan reproduction.',
      status: 'auto',
      statusLabel: 'Fixed template',
    },
    {
      file: 'docs/ai-workflow/phase-3-executor.md',
      role: 'Senior Executor role. Governs implementation — architecture freeze, zero overengineering rules, deviation protocol, 19-item compliance spot check.',
      status: 'auto',
      statusLabel: 'Fixed template',
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Section: Analysis (id="analysis")
// ─────────────────────────────────────────────────────────────────────────────
export const analysis = {
  id: 'analysis',
  label: 'Codebase Analysis',
  title: 'Reads Your Codebase. Not Assumptions.',
  description:
    'Step 1 performs a deep, systematic analysis of the actual source files. The generated rulebook reflects your real code — not generic best practices.',
  features: [
    {
      icon: '🔍',
      iconColor: 'blue',
      title: 'Multi-Ecosystem Package Detection',
      tag: 'Stack Detection',
      tagColor: 'blue',
      items: [
        'Inspects package.json, pyproject.toml, go.mod, pom.xml, Gemfile, Cargo.toml and more',
        'Detects runtime, framework, language, and version',
        'Identifies module system (CommonJS, ESM, Python modules, etc.)',
      ],
    },
    {
      icon: '🏛',
      iconColor: 'cyan',
      title: 'Full Architecture Extraction',
      tag: 'Architecture',
      tagColor: 'cyan',
      items: [
        'Maps every layer: entry, routing, business logic, data access, middleware, utils',
        'Documents dependency direction between layers',
        'Identifies module boundaries and responsibility rules',
      ],
    },
    {
      icon: '📐',
      iconColor: 'green',
      title: 'Pattern Extraction with Examples',
      tag: 'Patterns',
      tagColor: 'green',
      items: [
        'Reads 2–3 real code examples per pattern type (routes, services, validators, models)',
        'Captures handler wrapping, error throwing, logging, validation patterns',
        'Extracts async mechanism (sagas, thunks, hooks, async/await) actually used',
      ],
    },
    {
      icon: '✏️',
      iconColor: 'amber',
      title: 'Naming Convention Extraction',
      tag: 'Conventions',
      tagColor: 'amber',
      items: [
        'Reads files across directories — does not assume conventions',
        'Captures file naming, folder naming, variable, function, class, and constant casing',
        'Identifies naming prefixes (handle, get, on, create) and suffixes (.controller.js, Service.ts, etc.)',
      ],
    },
    {
      icon: '🔒',
      iconColor: 'rose',
      title: 'Security Pattern Extraction',
      tag: 'Security',
      tagColor: 'rose',
      items: [
        'Identifies auth mechanism (session, JWT, OAuth, API key, cookie)',
        'Documents rate limiting, input validation, CORS policy, secrets management',
        'Captures sensitive field protection and error surfacing approach',
      ],
    },
    {
      icon: '🧪',
      iconColor: 'violet',
      title: 'Test Pattern Extraction',
      tag: 'Testing',
      tagColor: 'violet',
      items: [
        'Identifies test framework, file location convention, and describe/it structure',
        'Reads mocking approach, assertion library, and integration test setup',
        'Notes coverage gaps as documentation',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Section: Rulebook (id="rulebook")
// ─────────────────────────────────────────────────────────────────────────────
export const rulebook = {
  id: 'rulebook',
  label: 'COPILOT_RULEBOOK.md',
  title: '19-Section Source of Truth',
  description:
    'The generated rulebook is the single document every phase reads before doing anything. It is derived from the live codebase — not invented.',
  sections: [
    { num: '01', title: 'Executive Summary'    },
    { num: '02', title: 'Tech Stack'           },
    { num: '03', title: 'Repository Structure' },
    { num: '04', title: 'Architecture'         },
    { num: '05', title: 'API Endpoints'        },
    { num: '06', title: 'Data Models'          },
    { num: '07', title: 'State Management'     },
    { num: '08', title: 'Middleware Pipeline'  },
    { num: '09', title: 'Code Patterns'        },
    { num: '10', title: 'Error Handling'       },
    { num: '11', title: 'Security'             },
    { num: '12', title: 'Logging'              },
    { num: '13', title: 'Environment Variables'},
    { num: '14', title: 'Testing'              },
    { num: '15', title: 'Styling System'       },
    { num: '16', title: 'Naming Conventions'   },
    { num: '17', title: 'Absolute Rules'       },
    { num: '18', title: 'Dev Workflows'        },
    { num: '19', title: 'Design Notes'         },
  ],
  features: [
    {
      icon: '⛔',
      iconColor: 'rose',
      title: 'Section 17A — Absolute Rules',
      tag: 'Non-Negotiable',
      tagColor: 'rose',
      items: [
        '10 hard constraints no phase may ever violate',
        'Covers BFF boundary, error handling, logging, async patterns, validation, auth, module system, secrets, response shape',
        'A single violation causes auto-rejection in Phase 2',
      ],
    },
    {
      icon: '📂',
      iconColor: 'blue',
      title: 'Section 17B — File Placement Rules',
      tag: 'Structure',
      tagColor: 'blue',
      items: [
        'Exact destination for every type of new file',
        'Separate tables for backend and frontend layers',
        'Ensures new files never land in the wrong layer',
      ],
    },
    {
      icon: '📝',
      iconColor: 'cyan',
      title: 'Section 17C — Code Patterns',
      tag: 'Examples',
      tagColor: 'cyan',
      items: [
        'Complete, copy-ready code examples for every layer',
        'Routes, handlers, services, validators, models, state features, API services',
        'The reference Phase 3 mirrors when creating new files',
      ],
    },
    {
      icon: '🚫',
      iconColor: 'amber',
      title: 'Section 17D — Anti-Patterns',
      tag: 'Guardrails',
      tagColor: 'amber',
      items: [
        'Documents what NOT to do with the correct alternative for each',
        'Derived from patterns observed in the actual codebase',
        'Used by Phase 2 to catch violations in proposed plans',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Section: Workflow (id="workflow")
// ─────────────────────────────────────────────────────────────────────────────
export const workflow = {
  id: 'workflow',
  label: '3-Phase Workflow',
  title: 'Plan → Review → Execute',
  description:
    'Code cannot be implemented without passing through all three phases in strict order. Every phase has an explicit gate that must be satisfied before the next phase begins.',
  phases: [
    {
      num: 'Phase 1 · Architect',
      title: 'Senior Architect',
      description:
        'Inspects the codebase and produces a complete implementation plan. No code written. Every assumption declared. 31-item compliance checklist completed.',
      gate: 'Gate: "Ready: YES"',
      accent: 'var(--primary-light)',
    },
    {
      num: 'Phase 2 · Reviewer',
      title: 'Senior Reviewer',
      description:
        '14 adversarial review steps against COPILOT_RULEBOOK.md. Zero bias toward approval. Issues classified as blocking or non-blocking. Explicit decision required.',
      gate: 'Gate: "Decision: APPROVED"',
      accent: 'var(--amber)',
    },
    {
      num: 'Phase 3 · Executor',
      title: 'Senior Executor',
      description:
        'Implements exactly what Phase 2 approved. Architecture frozen. Zero overengineering. Reads every file before editing it. Deviation protocol enforced.',
      gate: 'Gate: All compliance items YES',
      accent: 'var(--green)',
    },
  ],
  features: [
    {
      icon: '⚡',
      iconColor: 'blue',
      title: 'Auto-Execution Chain',
      tag: 'Automation',
      tagColor: 'blue',
      items: [
        'All three phases run back-to-back automatically on trigger',
        'Phase transition headers signal the active phase to the user',
        'No "should I proceed?" questions between phases',
      ],
    },
    {
      icon: '🔄',
      iconColor: 'amber',
      title: 'Rejection Loop with Version Tracking',
      tag: 'Quality Control',
      tagColor: 'amber',
      items: [
        'Phase 2 rejections auto-send Phase 1 back for revision',
        'Plans versioned as v1, v2, v3 across revision cycles',
        'Loop runs automatically — up to 3 revision cycles',
      ],
    },
    {
      icon: '🛑',
      iconColor: 'rose',
      title: 'Maximum Revision Safeguard',
      tag: 'Safeguard',
      tagColor: 'rose',
      items: [
        'After 3 rejections, auto-execution pauses',
        'All blocking issues surfaced to the user for human guidance',
        'Never silently stalls — always reports the exact blockers',
      ],
    },
    {
      icon: '🔗',
      iconColor: 'green',
      title: 'Full Context Handoff Between Phases',
      tag: 'Traceability',
      tagColor: 'green',
      items: [
        'Complete documents passed forward — no summarization at handoffs',
        'Task ID carried through all 3 phase documents',
        "Phase 3 works from Phase 2's reproduced final plan, not Phase 1's original",
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Section: Compliance (id="compliance")
// ─────────────────────────────────────────────────────────────────────────────
export const compliance = {
  id: 'compliance',
  label: 'Built-In Quality Gates',
  title: 'Compliance Checked at Every Phase',
  description:
    'Each phase has its own compliance mechanism. Nothing moves forward unless every check passes.',
  groups: [
    {
      title: '◆ Phase 1 — 31-Item Self-Checklist',
      accentColor: 'var(--primary-light)',
      items: [
        'No architectural boundary violated',
        'Every new file in the correct location',
        'Handler wrapping pattern on every endpoint',
        'Input validation on all mutation endpoints',
        'Auth guard on all protected endpoints',
        'Typed error classes used (not raw Error)',
        'Shared logger used (not console.log)',
        'Correct module system per rulebook',
        'Async effects use the established mechanism',
        'All naming conventions followed',
        'Required tests identified for every change',
        'No secrets committed; no stack traces in responses',
      ],
    },
    {
      title: '◆ Phase 2 — 14 Adversarial Review Steps',
      accentColor: 'var(--amber)',
      items: [
        'Completeness — all required sections present',
        'Task understanding — scope is correct',
        'Codebase inspection evidence — files named',
        'Architectural boundary — no violations',
        'Backend layer — correct layer placement',
        'Frontend layer — lazy loading, async pattern',
        'Naming conventions — every file verified',
        'Module system — never mixed',
        'Async / state — correct mechanism',
        'Response envelope — standard shape used',
        'Security — validators, rate limiting, auth',
        'Pattern drift — no unjustified new patterns',
        'Missing coverage — all acceptance criteria',
        'Compliance checklist audit — no false "Yes"',
      ],
    },
    {
      title: '◆ Phase 3 — 19-Item Compliance Spot Check',
      accentColor: 'var(--green)',
      items: [
        'No architectural boundary violated',
        'No Absolute Rule violated',
        'Handler wrapping on every handler',
        'Route registered in central file',
        'Input validation present',
        'Auth guard on protected routes',
        'Thin handler — no business logic',
        'Typed error classes used',
        'Shared logger used',
        'No request/response in service',
        'Correct module system',
        'Established async mechanism used',
        'Required tests implemented',
        'Documentation updated',
        'No secrets; no stack traces in responses',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Section: Safeguards (id="safeguards")
// ─────────────────────────────────────────────────────────────────────────────
export const safeguards = {
  id: 'safeguards',
  label: 'Built-In Safeguards',
  title: 'Hard Stops That Protect Your Codebase',
  description:
    'Every phase has explicit stop conditions. The workflow never proceeds past a known violation.',
  items: [
    {
      title: 'Approval Gate — Phase 3 Cannot Start Without Explicit APPROVED',
      description:
        'Phase 2 must output "Decision: APPROVED" with a complete Final Approved Implementation Plan in Section 5. Any ambiguous, absent, or rejected decision stops Phase 3 entirely.',
    },
    {
      title: 'Plan-Reality Compatibility Gate — Checks Before Any Code Is Written',
      description:
        "Phase 3 checks that proposed file paths, route paths, and action type names don't conflict with the current repository state before writing a single line of code.",
    },
    {
      title: 'Architecture Freeze — No Redesign During Implementation',
      description:
        'Phase 3 cannot change the layer structure, refactor surrounding code, or rename anything not in the approved plan. Improvements are documented as future tickets, not implemented now.',
    },
    {
      title: 'Deviation Protocol — Stop Before Deviating',
      description:
        'Structural, scope, and convention deviations require a full stop and report before implementation. Minor deviations (variable names) are documented in the summary. Convention deviations are never permitted.',
    },
    {
      title: 'Read-Before-Edit Rule — Never Modify a File Without Reading It First',
      description:
        'Phase 3 must read the complete current content of every file before modifying it. Editing without reading is an absolute rule violation.',
    },
    {
      title: 'Zero Overengineering Rule — Explicit Stop Conditions',
      description:
        'Phase 3 stops immediately when it notices it is about to create an abstraction, utility, shared component, custom hook, or interceptor not specified in the approved plan.',
    },
    {
      title: 'Maximum Revision Safeguard — Never Loops Forever',
      description:
        'After 3 consecutive Phase 2 rejections, auto-execution pauses and surfaces all blocking issues. The workflow never loops indefinitely without human review.',
    },
    {
      title: 'Non-Interruption Enforcement — Permitted Pause Points Are Explicit',
      description:
        'Only 3 valid pause points: max revisions reached, Phase 3 structural deviation, or Phase 3 genuine ambiguity. All other pauses are workflow violations.',
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Section: Traceability (id="traceability")
// ─────────────────────────────────────────────────────────────────────────────
export const traceability = {
  id: 'traceability',
  label: 'Traceability',
  title: 'Every Decision Is Traceable',
  description:
    'Task IDs and version numbers are carried through every document. Nothing is lost at handoffs.',
  features: [
    {
      icon: '🏷',
      iconColor: 'blue',
      title: 'Task ID in Every Document',
      tag: 'Traceability',
      tagColor: 'blue',
      items: [
        'Phase 1: Implementation Plan — [Task ID]: [Title]',
        'Phase 2: Phase 2 Review — [Task ID]: [Title]',
        'Phase 3: Implementation Summary — [Task ID]: [Title]',
      ],
      monoItems: [
        'Implementation Plan — [Task ID]: [Title]',
        'Phase 2 Review — [Task ID]: [Title]',
        'Implementation Summary — [Task ID]: [Title]',
      ],
    },
    {
      icon: '🔢',
      iconColor: 'amber',
      title: 'Version Tracking Across Revisions',
      tag: 'Versioning',
      tagColor: 'amber',
      items: [
        'Initial plan labeled v1',
        'First revision after rejection labeled v2',
        'Phase 3 references the approved version in the summary',
      ],
    },
    {
      icon: '📄',
      iconColor: 'green',
      title: 'Full Context Carried — No Truncation',
      tag: 'Completeness',
      tagColor: 'green',
      items: [
        'Complete Phase 1 plan passed to Phase 2 — not a summary',
        'Complete rejection document with all blockers passed back to Phase 1',
        'Complete Final Approved Plan reproduced in Phase 2 Section 5 for Phase 3',
      ],
    },
    {
      icon: '📊',
      iconColor: 'violet',
      title: 'Implementation Summary Document',
      tag: 'Audit Trail',
      tagColor: 'violet',
      items: [
        'Every file created/modified listed with action type',
        'Every plan step outcome documented (Complete/Deviated/Skipped)',
        'Every deviation justified with classification',
        'Final compliance statement with all items YES/NO',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────────────────────
export const footer = {
  headline: 'PRX - Plan, Review and Execute',
  subheadline:
    'Drop into any repository. Execute once. Get a fully installed, codebase-aware, gate-controlled AI delivery workflow.',
  tagline: 'Works with any language · Any framework · Any architecture · Any team',
  badge: '⚙ AI Workflow Setup',
  author: {
    avatar: '👨‍💻',
    name: 'Ajay Kumar Sharma',
    role: 'Developer & Author',
  },
  contact: [
    {
      icon: '✉',
      text: 'ajaykumarsharma.20196@gmail.com',
      href: 'mailto:ajaykumarsharma.20196@gmail.com',
    },
    {
      icon: '📞',
      text: '+91 8077651669',
      href: 'tel:+918077651669',
    },
  ],
  linkedin: {
    url: 'https://www.linkedin.com/in/ajay-sharma-219b53141/',
    label: 'linkedin.com/in/ajay-sharma-219b53141',
    svgPath:
      'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  copyright: '© 2026 Ajay Kumar Sharma · All rights reserved',
};

// ─────────────────────────────────────────────────────────────────────────────
// Ordered section list — Home.jsx maps over this to render sections in order
// ─────────────────────────────────────────────────────────────────────────────
export const sections = [
  { id: 'agnostic',     data: overview      },
  { id: 'setup',        data: setup         },
  { id: 'files',        data: outputFiles   },
  { id: 'analysis',     data: analysis      },
  { id: 'rulebook',     data: rulebook      },
  { id: 'workflow',     data: workflow      },
  { id: 'compliance',   data: compliance    },
  { id: 'safeguards',   data: safeguards    },
  { id: 'traceability', data: traceability  },
];
