---
name: orchestrator-software-systems
description: Defines the engineering architecture, component hierarchy, state systems, and reusable software patterns that support all instructional, assessment, and analytics experiences.
type: orchestrator
---
 
# Software Systems + Component Architecture

---

## FOLIO INTERACTIVE — SCOPE RULES

Before proposing any stack, component, or architecture decisions:

1. Check `01-project-core/architecture-map.md` for existing locked decisions. Do not generate architecture that contradicts them.
2. Check `open-items.md` for unresolved tech stack items (#1–4). Do not prematurely resolve open items — surface them to the user instead.
3. If a proposed decision conflicts with either document, flag the conflict before proceeding.

---

## PRIMARY MISSION

All software outputs must be:
- Modular and reusable
- Scalable across subjects, grade levels, and activity types
- Maintainable by a small team
- Consistent — every screen built from the same component library
- Production-ready — not throwaway scaffolding

Do not generate one-off interfaces. Every screen, lesson, assessment, and dashboard must be
built from reusable components.

---

## PHASE 0 — GREENFIELD DISCOVERY (run when no prior designs exist)

When the user has no curriculum designs, UX mockups, or established tech stack, run this
discovery sequence before producing any architecture. The goal is to gather just enough
signal to make sound foundational decisions.

### Step 1 — Understand the learning product

Ask (consolidate into one question set, not a list of individual messages):

- **What is being taught?** Subject(s), grade band(s), or skill domains
- **Who are the learners?** Age range, reading level, access context (school, home, mobile)
- **What is the core loop?** What does a learner actually *do* in the product? (watch, answer, drag, build, simulate, discuss)
- **What is the measure of success?** Completion? Mastery score? Engagement? Teacher approval?

### Step 2 — Establish scope and constraints

- **Platform targets**: Web only, mobile web, native app, or all three?
- **Team size**: Solo dev, small team (2–5), or larger?
- **Timeline posture**: Prototype fast or build production-grade from the start?
- **Existing codebase?** Fresh repo, or extending something already live?
- **Any hard technical constraints?** (LMS integration, SSO, offline support, specific frameworks)

### Step 3 — Infer the instructional model

Even without a formal curriculum design, infer the likely instructional model from the answers
above. Map it to one of these archetypes and state your reasoning:

| Archetype | Core pattern | Typical modules |
|---|---|---|
| Guided lesson | Linear screen sequence with prompts + responses | Lesson, Practice, Assessment |
| Simulation-first | Open exploration then structured debrief | Simulation, Observation, Reflection |
| Mastery loop | Skill-by-skill until threshold met | Practice, Checkpoint, Remediation |
| Social/collaborative | Peers interact, teacher moderates | Session, Discussion, Peer Review |
| Mixed | Combination of above | Full module set |

State the assumed archetype. The user can correct it. This assumption drives the module list
in the architecture output.

### Step 4 — Propose the foundation stack

Based on scope and constraints, propose the foundation before designing components:

**Recommended stack** (opinionated defaults, adjust to constraints):
- React + TypeScript — component system + type safety
- Zustand — lightweight centralized state (no Redux boilerplate)
- React Router v6 — module-level routing
- Vite — fast dev server + build
- Vitest + React Testing Library — component and hook tests

If the user has existing stack choices, acknowledge them and adjust the architecture accordingly.

---

## ARCHITECTURE PRINCIPLES

Always enforce these regardless of project stage:

**Separation of concerns**
Keep instructional logic, UI rendering, assessment logic, and analytics logic separated.
A component that knows about mastery scoring is doing too much.

**Component reusability**
Any component built for one lesson must be usable in all future lessons without modification.
Subject-specific logic belongs in content data, not in components.

**State-driven rendering**
UI responds dynamically to learner progress state. Components consume from stores; they do
not own domain state locally.

**Extensibility**
New subjects, grade levels, and lesson types must be addable without touching existing components.
This is the test: "Can I add 7th grade science by adding files, not by editing files?"

---

## COMPONENT HIERARCHY

### Application Shell
Top-level framework — mounts once, never re-renders for route changes.

- `AppShell` — layout wrapper, theme, global error boundary
- `RoutingLayer` — lazy-loaded route map
- `NavigationSystem` — top nav + sidebar
- `GlobalProgressBar` — thin strip driven by `SessionStore`
- `UserSessionManager` — auth hydration, token refresh (renders nothing)

### Instructional Containers
High-level module orchestrators. Each maps to one instructional archetype.
Containers read from stores and pass props down. Zero business logic lives here.

- `LessonModule` — linear screen sequence
- `SimulationModule` — open canvas + observation recording
- `PracticeModule` — adaptive spaced repetition loop
- `AssessmentModule` — formal mastery evaluation sequence
- `DashboardModule` — read-only analytics overview

Add or remove containers based on the instructional archetype established in Phase 0.

### Reusable Learning Components
Subject-agnostic. Activity logic injected via props or render props.

- `PromptCard` — instructional prompt with optional media
- `InteractiveCanvas` — generic activity surface (drag, draw, simulate)
- `HintPanel` — progressive hint disclosure
- `ReflectionPrompt` — metacognitive close to activity
- `ResponseInput` — unified input dispatcher (delegates to sub-inputs)
- `ScenarioChoiceGrid` — open-ended scenario choices
- `DragDropZone` — drag-and-drop activity
- `FeedbackBanner` — inline response feedback

### Assessment Components
- `MasteryCheckpoint` — evaluates response against threshold
- `ConfidenceSelector` — self-reported confidence (1–5)
- `MisconceptionAlert` — targeted error pattern surfacing
- `AdaptiveHintFlow` — full hint lifecycle manager
- `RetryPrompt` — incorrect attempt recovery

### Analytics Components
- `SkillTreeMap` — mastery status across skill graph
- `GrowthTimeline` — mastery scores over time
- `MasteryHeatmap` — skill × time grid
- `EngagementTrendCard` — time on task, streak, hint rate
- `MisconceptionClusterView` — recurring error pattern grouping

---

## STATE MANAGEMENT FRAMEWORK

Four centralized Zustand stores. Components read from stores via selectors;
they write only through named action functions.

### LearnerStore
```typescript
learnerId: string
displayName: string
gradeBand: GradeBand
lessonProgress: Record<string, number>   // { lessonId: 0–1 }
masteryHistory: MasteryResult[]
misconceptions: string[]
confidenceTrend: number[]
```

### SessionStore
```typescript
activeLesson: LessonNode | null
currentScreen: number
hintLevel: number
timeOnTaskMs: number
isTimerRunning: boolean
```

### CurriculumStore
```typescript
subjectTree: Record<Subject, Record<GradeBand, LessonNode[]>>
standardsMap: Record<string, Skill>
bloomProgressionNode: BloomLevel
finkObjectives: FinkDimension[]
misconceptionPatterns: MisconceptionPattern[]
```

### AnalyticsStore
```typescript
masteryMetrics: Record<string, number>
engagementData: EngagementSnapshot
trendHistory: GrowthDataPoint[]
misconceptionClusters: MisconceptionCluster[]
```

**Data flow rule**: Data flows down (store → container → component).
Events flow up (component → action → store). Components never write to stores directly.

---

## CUSTOM HOOKS

All shared logic lives in hooks, not in components or containers.

```typescript
useLearnerProgress()      // subscribes to LearnerStore
useAdaptiveRouting()      // next lesson node from CurriculumStore + LearnerStore
useHintProgression()      // hint level lifecycle for one assessment item
useSessionTimer()         // tracks timeOnTask, auto-pauses on visibility change
useMasteryEvaluation()    // evaluates response, returns EvaluationResult
useSubjectTheme()         // subject → color/icon tokens
```

---

## NAMING CONVENTIONS

| Pattern | Convention | Example |
|---|---|---|
| Components | PascalCase | `MasteryCheckpoint` |
| Hooks | camelCase, `use` prefix | `useLearnerProgress` |
| Store actions | camelCase, verb-noun | `setHintLevel`, `recordMisconception` |
| Utilities | camelCase, descriptive | `calculateMasteryTrend` |
| Types/interfaces | PascalCase | `BloomLevel`, `MasteryResult` |
| Constants | SCREAMING_SNAKE | `MAX_HINT_LEVEL` |

---

## OUTPUT FORMAT

Whenever generating architecture outputs, structure the response as:

1. **System overview** — one-paragraph summary of the platform and its instructional model
2. **Component hierarchy** — annotated tree showing containers → components → stores
3. **State domains** — which stores each module reads from and writes to
4. **Data flow diagram** — visual diagram (use the visualizer tool)
5. **Reusable component library** — full TypeScript prop interfaces
6. **Visual component specifications** — defer to `ux-instructional-design/references/visual-component-library.md` for all component dimensions, states, animation, and typography. Do not specify visual behavior here.
7. **Dependency relationships** — what depends on what; what is truly independent
8. **Scalability notes** — how to add new subjects, grade bands, activity types
9. **Future extension points** — named integration seams (CMS adapter, AI evaluator, offline store, teacher dashboard)

For greenfield projects, prepend a **Phase 0 summary** that states:
- Confirmed instructional archetype
- Confirmed platform target and team size
- Proposed foundation stack with rationale
- Any assumptions made (flag explicitly for user confirmation)

---

## SCALABILITY NOTES (defaults)

- **New subject** → add entry to `subjectTree` in `CurriculumStore`. Zero component changes.
- **New grade band** → add `gradeRange` field to `Skill` type. All components inherit it.
- **New activity type** → build one new learning component, register in `LessonModule`'s activity renderer map.
- **New analytics view** → add one analytics component consuming `AnalyticsStore`. No store changes.
- **Teacher dashboard** → second consumer of `AnalyticsStore`. No store modifications required.

---

## FUTURE EXTENSION POINTS (standard seams)

- `MultiplayerSessionStore` — collaborative lesson mode, layered on `SessionStore`
- `TeacherDashboardModule` — second consumer of `AnalyticsStore`
- `AIFeedbackService` — optional evaluator plugged into `useMasteryEvaluation()`
- `OfflineStore` — IndexedDB persistence wrapper around all four Zustand stores
- `ContentCMSAdapter` — swappable data source for `CurriculumStore` (JSON → API)