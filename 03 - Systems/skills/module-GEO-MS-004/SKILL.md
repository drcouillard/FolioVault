---
name: folio-module-GEO-MS-004
description: >
  Module execution skill for GEO-MS-004 — Map Projections: Every Map Lies.
  Use this skill whenever building, updating, or reviewing any artifact,
  practice question, feedback block, or interactive component for Module 1.3
  of the Folio World Geography course. Trigger phrases include: "build the
  GEO-MS-004 artifact", "write questions for module 1.3", "generate feedback
  for the projections module", "build the projection explorer", "update the
  Mercator Peters module", "expand the projection content", or any task scoped
  to Module 1.3 of Chapter 1. Always load references before generating any
  content or code for this module.
---

# Folio Module Skill — GEO-MS-004
## Map Projections: Every Map Lies
*Chapter 1: Map Skills & Spatial Thinking · 9th Grade · Third Tool Module*

---

## Module Identity at a Glance

| Field | Value |
|---|---|
| Module ID | GEO-MS-004 |
| Status | Alpha — Awaiting Educator Verification |
| Content type | Conceptual-Principle |
| Bloom target | Apply / Analyze |
| Spiral questions | 3 (GEO-MS-001: map as argument; GEO-MS-002: fitness for purpose and scale as constraint; GEO-MS-003: meridian convergence) |
| New concept questions | 7 |
| Total questions | 10 (range: 7–13, coverage-driven) |
| Mastery threshold | 7/10 |
| Estimated time | 35–40 minutes |
| Interactive artifacts | 1 — Projection Explorer (expanded from POC) |
| Prerequisites | GEO-MS-001, GEO-MS-002, GEO-MS-003 |

**Enduring Understanding:**
Every flat map of Earth is wrong about something — not because of errors
in measurement, but because of geometry. The question is never whether a
projection distorts; it is which properties the projection preserves, which
it sacrifices, and whether that trade-off serves the purpose the map was
made for. Mercator is not a bad map. It is a map built for a specific
purpose that has been systematically misused for a different one.

---

## Reference Files — Load Before Any Task

| File | When to load |
|---|---|
| `01 - Core/folio-voice.md` | Before writing ANY student-facing copy |
| `references/GEO-MS-004-spec.md` | Before any content generation or artifact build |
| `03 - Systems/shared-references/diagnostic-feedback-template.md` | Before writing wrong-answer feedback |
| `03 - Systems/shared-references/scaffold-tier-definitions.md` | Before writing hint progressions |
| `references/spiral-tag-reference.md` | Before tagging any practice question |
| `03 - Systems/shared-references/event2-standard.md` | Before writing the "Before the Questions" block |
| `03 - Systems/shared-references/going-deeper-standard.md` | Before writing any Going Deeper block |
| `artifacts/projection-explorer-spec.md` | Before building or modifying the interactive |
| `03 - Systems/shared-references/educator-verification-checklist.md` | Before routing content for review |

**Do not generate content or code without reading the spec and voice
reference first. The spec is the contract. Voice reference: `01 - Core/folio-voice.md`.

---

## What This Skill Builds

### 1. Interactive Artifact — Projection Explorer

The POC interactive projection explorer, promoted and expanded. Five
panels: Mercator, Gall-Peters, Robinson, Azimuthal Equidistant, Winkel
Tripel. Each panel reveals developer, year, defining feature, preserved
property, distorted property.

The Greenland-Africa size comparison is the visual anchor — updates
dynamically as the student switches between projections.

Going Deeper blocks are accessible from within the explorer — tapping the
depth indicator on any panel surfaces the relevant Going Deeper content
without navigating away.

Full specification: `artifacts/projection-explorer-spec.md`

**Assessment scope in the explorer:**
Mercator and Peters are assessed in the practice set.
Robinson, Azimuthal Equidistant, and Winkel Tripel appear in the explorer
and explainer — assessed only through projection-selection logic (Q6, Q7,
Q10), not as isolated recall targets.

### 2. Practice Questions (10, range 7–13)

Coverage requirement: at least one question per sub-objective.

| Sub-objective | Bloom | Min questions | Spiral? |
|---|---|---|---|
| Four distortable properties | Remember | 1 | [NEW] |
| Why distortion is unavoidable | Understand | 1 | [NEW] |
| Mercator mechanics and purpose | Understand | 1 | [NEW] |
| Peters mechanics and debate | Understand | 1 | [NEW] |
| Mercator vs. Peters trade-off (evaluative) | Analyze | 1 | [NEW] |
| Projection selection for purpose | Apply | 2 | [NEW] |
| Mercator-Peters as substantive disagreement | Analyze | 1 | [SPIRAL: GEO-MS-001 — Map as argument] |
| Mercator scale distortion at high latitudes | Apply | 1 | [SPIRAL: GEO-MS-003 — Meridian convergence] |
| Full projection reasoning | Apply | 1 | [SPIRAL: GEO-MS-002 — Scale as constraint] |

Approved question set: `references/GEO-MS-004-spec.md` Section 9.

### 3. Going Deeper Blocks (2 maximum)

This module contains two Going Deeper blocks. Format and rules:
`03 - Systems/shared-references/going-deeper-standard.md`

**Block 1 — Mathematics (Differential Geometry)**
Placement: After the Gauss/Theorema Egregium sentence in "The Geometry
of the Problem"
Domain bridge: Gauss's Theorema Egregium (1827) — university-level
differential geometry / multivariable calculus

**Block 2 — History of Cartography**
Placement: After the Robinson projection entry in "Other Projections
Worth Knowing"
Domain bridge: Robinson's backward-design method; cartography as science
vs. design discipline; connection to the Peters controversy

Both blocks: never tested, never required for mastery, always labeled
with domain, maximum two per module — this module is at the limit.

### 4. Diagnostic Feedback Blocks

One block per wrong-answer distractor.
Format and rules: `03 - Systems/shared-references/diagnostic-feedback-template.md`

Special note for Analyze-level questions (Q5, Q8):
Feedback must hold the complexity of the question — do not simplify the
Mercator-Peters debate into a verdict in the feedback copy. The feedback
for Q8 specifically must acknowledge that both C options (cartographic
AND political) have merit — the misconception being addressed is the
student who chose A or B and collapsed the complexity.

### 5. Hint Progressions

Three scaffold tiers per question.
Tier definitions: `03 - Systems/shared-references/scaffold-tier-definitions.md`

Special note for projection-selection questions (Q6, Q7, Q10):
- Tier 1: Redirect to "what does this task require the map to show?"
- Tier 2: Identify the relevant property for the task without naming
  the correct projection
- Tier 3: "Which projection preserves [that property]?"

### 6. Gagné Event 2 — "Before the Questions" Block

Approved text (from event2-standard.md):
- All flat maps distort Earth's surface — geometric fact, not measurement
  error; four properties: shape, area, distance, direction
- Mercator preserves direction, distorts area near poles
- Peters preserves area, distorts shape
- Projection selection is a trade-off: match preserved property to task;
  Robinson and Winkel Tripel minimize total distortion; Azimuthal
  Equidistant preserves distance/direction from single center point
- *(Robinson, Azimuthal Equidistant, Winkel Tripel: in lesson and explorer,
  not assessed individually — will appear as spiral context later)*

### 7. Big Idea Callback

Passive (mid-module): approved text in spec Section 10.
Active (EIB — classroom map replacement): approved text in spec Section 10.
EIB rubric: 7 points, mastery at 5/7. Full rubric in spec Section 10.

---

## Spiral Tag Rules for This Module

Three spiral tags in use:

```
[SPIRAL: GEO-MS-001 — Map as argument]          → Q8
[SPIRAL: GEO-MS-002 — Scale as constraint]       → Q10
[SPIRAL: GEO-MS-003 — Meridian convergence]      → Q9
```

Full tag reference and Bloom escalation tracking:
`references/spiral-tag-reference.md`

Note on Bloom escalation: GEO-MS-001 — Map as argument reaches Analyze
level at Q8 — the first Analyze-level spiral appearance for this concept.
Log the escalation in the spiral tag reference.

---

## Going Deeper — Design Rules

Load `03 - Systems/shared-references/going-deeper-standard.md` before writing any block.

Quick reference:
- Label: `⬡ GOING DEEPER — [Domain]`
- Visual: Folio Depth color (#6B4EAA / Depth Tint #F0ECFA background)
- Never tested. Never required. Never more than two per module.
- Always names the domain the thread leads to
- Always placed inline at the point of contact — not collected at end
- Maximum three sentences in the block itself; pointer to where the
  deeper content lives (course, discipline, level)

---

## Content Rules — Non-Negotiable

- [ ] No "wrong" or "incorrect" as verdicts on projections — a projection
      is never wrong in general; it is appropriate or inappropriate for a
      purpose
- [ ] Mercator is never described as "inaccurate" without qualification —
      the complete claim is always "inaccurate for [specific use]"
- [ ] Peters is never described as purely political — it is a valid
      equal-area projection with genuine cartographic applications
- [ ] Mathematical mechanics of projection construction (trigonometry,
      calculus) are not explained — the orange-peel analogy carries the
      geometric intuition; Going Deeper Block 1 points further
- [ ] No fictional geography — all scenario geographies are real
- [ ] Robinson, Azimuthal Equidistant, Winkel Tripel: present in lesson
      and explorer; not individually assessed in practice questions

---

## Educator Verification Routing

```
FOLIO MODULE SKILL → EDUCATOR VERIFICATION
───────────────────────────────────────────
Module:             GEO-MS-004
Component:          [artifact / question set / feedback blocks / full module]
Bloom check:        Remember (1) · Understand (3) · Analyze (2) · Apply (4)
                    — confirm; this is first Analyze-level module in Ch. 1
Voice check:        No projection described as "wrong in general"; Mercator
                    always qualified; Peters never reduced to politics only;
                    Going Deeper blocks labeled correctly
[VERIFY] tags:      Azimuthal Equidistant — UN emblem projection and center
                    point confirmation; National Geographic Winkel Tripel
                    adoption year (1998); Robinson commissioned by Rand McNally
                    (1963); Gauss Theorema Egregium publication year (1827)
Flags for review:   Q5 and Q8 (Analyze level) — confirm grade-appropriate
                    for 9th grade before Beta; Going Deeper blocks —
                    confirm domain bridges are accurate and appropriately
                    scoped for 9th grade context
Verification form:  03 - Systems/shared-references/educator-verification-checklist.md
```

---

## Adaptive Branching Logic

| Score | Route |
|---|---|
| ≥ 70% | Advance to GEO-MS-005 |
| 50–69% | Concept-area remediation (Assessment table, spec Section 9), retry |
| < 50% | Projection Explorer re-presented at higher scaffold (each projection's trade-off labeled explicitly before student interacts), retry |

Remediation note for Analyze-level questions (Q5, Q8): if missed,
re-present the Worked Example full walkthrough — the Mercator-Peters
comparison is the scaffold for Analyze-level reasoning in this module.
Do not route to a simpler version of the question; route to the worked
example that models the reasoning.

---

## Known Flags

- **Q5 and Q8 (Analyze level):** First Analyze-level questions in
  Chapter 1. Confirm grade-appropriateness with educator verifier.
  Both questions provide scaffolding in the distractors — this is
  intentional and should be preserved.
- **POC promotion:** The POC projection explorer is expanded, not
  replaced. The existing POC interactions carry forward. Peters panel
  and Greenland-Africa size comparison are the new additions. Confirm
  POC content is still accurate before build.
- **Going Deeper blocks:** Two blocks at the limit for this module.
  If educator review identifies a third candidate, it must displace
  one of the existing two — do not exceed the two-block limit.
- **All [VERIFY] tags** in spec require fact-checking before Beta.
