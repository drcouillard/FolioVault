---
name: folio-module-GEO-MS-001
description: >
  Module execution skill for GEO-MS-001 — What Maps Do (and Don't Do).
  Use this skill whenever building, updating, or reviewing any artifact,
  practice question, feedback block, or interactive component for Module 1.0
  of the Folio World Geography course. Trigger phrases include: "build the
  GEO-MS-001 artifact", "write questions for module 1.0", "generate feedback
  for the maps module", "build the map comparison interactive", "update the
  anchor module", or any task scoped to the first module of Chapter 1.
  Always load references before generating any content or code for this module.
---

# Folio Module Skill — GEO-MS-001
## What Maps Do (and Don't Do)
*Chapter 1: Map Skills & Spatial Thinking · 9th Grade · Anchor Module*

---

## Module Identity at a Glance

| Field | Value |
|---|---|
| Module ID | GEO-MS-001 |
| Status | Alpha — Awaiting Educator Verification |
| Content type | Conceptual-Principle |
| Bloom target | Apply |
| Spiral questions | 0 (anchor module — no prior modules) |
| New concept questions | 10 (range: 7–13, coverage-driven) |
| Mastery threshold | 7/10 |
| Estimated time | 20–25 minutes |
| Interactive artifacts | 1 — Map Comparison Explorer |

**Enduring Understanding:**
Every map is a decision — a set of choices about what to show, what to hide,
and what to distort. A map is not a neutral record of the world. It is an
argument about what matters.

---

## Reference Files — Load Before Any Task

| File | When to load |
|---|---|
| `01 - Core/folio-voice.md` | Before writing ANY student-facing copy |
| `references/GEO-MS-001-spec.md` | Before any content generation or artifact build |
| `references/diagnostic-feedback-template.md` | Before writing wrong-answer feedback |
| `references/scaffold-tier-definitions.md` | Before writing hint progressions |
| `artifacts/map-comparison-explorer-spec.md` | Before building or modifying the interactive |
| `references/educator-verification-checklist.md` | Before routing content for review |

**Do not generate content or code for this module without reading the spec
and voice reference first. The spec is the contract. The voice reference is
the constraint.**

---

## What This Skill Builds

### 1. Interactive Artifact — Map Comparison Explorer

The anchor interactive for this module. Students tap or click to reveal what
two maps of the same region include and exclude. The omission is made visible,
not described.

Full specification: `artifacts/map-comparison-explorer-spec.md`

Build using: React (`.jsx`) or single-file HTML/CSS/JS
Design direction: Read `artifacts/map-comparison-explorer-spec.md` Section 3
before writing a line of code. Design is precise and editorial — not playful.

### 2. Practice Questions (10, range 7–13)

Coverage requirement: at least one question per sub-objective.

| Sub-objective | Bloom | Min questions |
|---|---|---|
| Selection — what maps include | Understand | 1 |
| Omission — what maps leave out | Understand | 1 |
| Distortion — what maps misrepresent | Understand | 1 |
| Fitness for purpose | Apply | 2 |
| Map as argument | Apply | 1 |

All questions: read `references/GEO-MS-001-spec.md` Section 9 for the
approved question set. Do not generate new questions without flagging them
for educator review.

### 3. Diagnostic Feedback Blocks

One block per wrong-answer distractor. Format:
```
DIAGNOSTIC FEEDBACK
────────────────────
Question:       [stem]
Wrong answer:   [distractor]
Misconception:  [what this answer reveals about the student's thinking]
Feedback:       [3 sentences max — name misconception, redirect to reasoning,
                 close with a cue — never a destination]
```

Template: `references/diagnostic-feedback-template.md`

### 4. Hint Progressions

Three scaffold tiers per question. Tier definitions:
`references/scaffold-tier-definitions.md`

Tier 1: Redirect to the relevant concept section (no answer given)
Tier 2: Narrow the reasoning space (eliminate one or two paths, not the answer)
Tier 3: Restate the question with the core variable isolated

### 5. Big Idea Callback

Passive (mid-module — Folio answers): approved text in spec Section 10.
Active (EIB prompt — student answers): approved text in spec Section 10.
EIB rubric: 7 points, mastery at 5/7. Rubric in spec Section 10.

Do not modify callback text without a spec revision and educator re-review.

### 6. Micro-Checks (2, inline, no stakes)

Approved prompts in spec Section 9 (before practice set).
Format: reflective prompt, no submission, no score displayed.

---

## Content Rules — Non-Negotiable

Load `01 - Core/folio-voice.md` for full rules. Hard stops below:

- [ ] Wonder hook does not define a concept — contradiction or mystery only
- [ ] No "wrong," "incorrect," "fail," "easy," "simply" in student-facing copy
- [ ] Feedback names the misconception — never restates the correct answer alone
- [ ] No fictional geography — all examples use real places
- [ ] Technical terms: plain language first, term follows inline
- [ ] Remediation framed as "let's look more closely at [concept]" — never penalty language
- [ ] Spiral tags on every question: `[NEW]` for this module (no prior spiral)
- [ ] Bloom tags on every practice question (internal metadata — not shown to student)

---

## Educator Verification Routing

When any content component is complete, route using:

```
FOLIO MODULE SKILL → EDUCATOR VERIFICATION
───────────────────────────────────────────
Module:             GEO-MS-001
Component:          [artifact / question set / feedback blocks / full module]
Bloom check:        [confirm target levels match spec]
Voice check:        [confirm no avoid-list words, no fiction, no penalty framing]
[VERIFY] tags:      [list all factual claims flagged for expert review]
Verification form:  references/educator-verification-checklist.md
```

Nothing advances from Alpha to Beta without named educator sign-off.
Checklist: `references/educator-verification-checklist.md`

---

## Adaptive Branching Logic

| Score | Route |
|---|---|
| 7–10 / 10 | Advance to GEO-MS-002 |
| 4–6 / 10 | Concept-area remediation (see Assessment table in spec Section 9), then retry |
| 0–3 / 10 | Full module remediation loop — worked example re-presented at higher scaffold, then retry |

Remediation copy rule: never signals "you failed." Always "let's look more
closely at [concept]." See `references/scaffold-tier-definitions.md` for
remediation scaffold language.

---

## Known Flags (Do Not Resolve Without Educator Review)

- EIB active callback uses a disputed-border scenario. Geographic framing
  is the task — no political verdict required or implied. Confirm with
  educator verifier that the scenario is appropriately neutral for 9th grade.
- All [VERIFY] tags in the spec require fact-checking against current sources
  before Beta status.
