---
name: folio-module-GEO-MS-002
description: >
  Module execution skill for GEO-MS-002 — Scale: How Far Is Far?
  Use this skill whenever building, updating, or reviewing any artifact,
  practice question, feedback block, or interactive component for Module 1.1
  of the Folio World Geography course. Trigger phrases include: "build the
  GEO-MS-002 artifact", "write questions for module 1.1", "generate feedback
  for the scale module", "build the scale bar tool", "build the navigator
  worked example", "update the scale module", or any task scoped to Module 1.1
  of Chapter 1. Always load references before generating any content or code.
---

# Folio Module Skill — GEO-MS-002
## Scale: How Far Is Far?
*Chapter 1: Map Skills & Spatial Thinking · 9th Grade · First Tool Module*

---

## Module Identity at a Glance

| Field | Value |
|---|---|
| Module ID | GEO-MS-002 |
| Status | Alpha — Awaiting Educator Verification |
| Content type | Procedural + Conceptual-Principle |
| Bloom target | Apply |
| Spiral questions | 2 (from GEO-MS-001 — map as choice; fitness for purpose) |
| New concept questions | 8 |
| Total questions | 10 (range: 7–13, coverage-driven) |
| Mastery threshold | 7/10 |
| Estimated time | 30–35 minutes |
| Interactive artifacts | 2 — Scale Bar Tool · Navigator Worked Example |
| Prerequisite | GEO-MS-001 must be complete |

**Enduring Understanding:**
Scale is not just a measuring tool — it is a choice that determines what
a map can and cannot show. No single scale serves every purpose.

---

## Reference Files — Load Before Any Task

| File | When to load |
|---|---|
| `01 - Core/folio-voice.md` | Before writing ANY student-facing copy |
| `references/GEO-MS-002-spec.md` | Before any content generation or artifact build |
| `03 - Systems/shared-references/diagnostic-feedback-template.md` | Before writing wrong-answer feedback |
| `03 - Systems/shared-references/scaffold-tier-definitions.md` | Before writing hint progressions |
| `artifacts/scale-bar-tool-spec.md` | Before building the scale bar interactive |
| `artifacts/navigator-worked-example-spec.md` | Before building the navigator interactive |
| `03 - Systems/shared-references/educator-verification-checklist.md` | Before routing content for review |
| `references/spiral-tag-reference.md` | Before tagging any practice question |

**Do not generate content or code without reading the spec and voice reference
first. The spec is the contract. The voice reference is the constraint.**

---

## What This Skill Builds

### 1. Interactive Artifact A — Scale Bar Tool

A measurement tool embedded in the module. Students drag a line across a
map segment and the tool calculates real-world distance using the map's
scale bar. The core procedural skill — using a scale bar — made interactive.

Full specification: `artifacts/scale-bar-tool-spec.md`

This artifact operationalizes the sub-objective:
*Use a scale bar to calculate the real-world distance between two points.*

### 2. Interactive Artifact B — Navigator Worked Example

A step-by-step walkthrough of the Lisbon-to-Halifax navigator calculation,
promoted from the POC. Presented as a guided interactive — student sees
each step revealed in sequence, not all at once.

Full specification: `artifacts/navigator-worked-example-spec.md`

This artifact operationalizes the sub-objective:
*Explain why a map's scale determines what features it can and cannot represent.*

### 3. Practice Questions (10, range 7–13)

Coverage requirement: at least one question per sub-objective.

| Sub-objective | Bloom | Min questions | Spiral? |
|---|---|---|---|
| Scale definition and ratio | Understand | 1 | [NEW] |
| Scale bar calculation | Apply | 2 | [NEW] |
| Large vs. small scale distinction | Understand | 1 | [NEW] |
| Scale as constraint on detail | Understand | 1 | [NEW] |
| Scale selection for purpose | Apply | 1 | [NEW] |
| Fitness for purpose (GEO-MS-001 spiral) | Apply | 2 | [SPIRAL: GEO-MS-001] |

Approved question set: `references/GEO-MS-002-spec.md` Section 9.

**Note on Question 7:** Q7 uses a non-uniform scale bar visual. This question
is flagged — do not finalize without the map graphic asset. See flag at bottom
of spec Section 9. Options: build the visual, replace with a numerical question,
or cut to 9 questions. Requires Rob's decision before build.

### 4. Diagnostic Feedback Blocks

One block per wrong-answer distractor. Format and rules:
`03 - Systems/shared-references/diagnostic-feedback-template.md`

### 5. Hint Progressions

Three scaffold tiers per question. Tier definitions:
`03 - Systems/shared-references/scaffold-tier-definitions.md`

Tier 1: Redirect to relevant concept section (scale definition, large/small
        distinction, scale-as-constraint)
Tier 2: Narrow reasoning space — for calculation questions, point to the
        unit-rate step without giving the number
Tier 3: Isolate the decision — for calculation: "What is the per-unit value?";
        for selection: "What does this task require the map to show?"

### 6. Big Idea Callback

Passive (mid-module): approved text in spec Section 10.
Active (EIB — Nile negotiator scenario): approved text in spec Section 10.
EIB rubric: 7 points, mastery at 5/7. Rubric in spec Section 10.

### 7. Micro-Checks (2, inline, no stakes)

Approved prompts in spec Section 9.
Micro-check 2 includes the answer (300 km) — student self-checks before
the practice set. This is intentional: calculation skill benefits from
immediate verification before testing begins.

---

## Spiral Tag Rules for This Module

This is the first module in the course with spiral questions. Two questions
draw from GEO-MS-001. Tag format:

```
[SPIRAL: GEO-MS-001 — Map as choice]
[SPIRAL: GEO-MS-001 — Fitness for purpose]
```

Full tag reference: `references/spiral-tag-reference.md`

Every question must carry one of:
- `[NEW]` — tests a concept introduced in GEO-MS-002
- `[SPIRAL: GEO-MS-001 — concept area]` — tests a prior concept

No question may be untagged.

---

## Content Rules — Non-Negotiable

Load `01 - Core/folio-voice.md` for full rules. Hard stops:

- [ ] No "wrong," "incorrect," "fail," "easy," "simply" in student-facing copy
- [ ] Feedback names misconception — never restates correct answer alone
- [ ] No fictional geography — all examples use real places (Lisbon, Halifax,
      Nile, Amazon, Andes, Tokyo, Paris — all approved in spec)
- [ ] Technical terms: plain language first, term follows inline
- [ ] Large-scale / small-scale distinction is explained counterintuitively
      — the vocabulary reversal is named explicitly (see spec Section 7)
- [ ] Calculation questions include reasonableness check language in feedback
- [ ] Remediation framed as "let's look more closely at [concept]" — never
      penalty language

---

## Educator Verification Routing

```
FOLIO MODULE SKILL → EDUCATOR VERIFICATION
───────────────────────────────────────────
Module:             GEO-MS-002
Component:          [artifact / question set / feedback blocks / full module]
Bloom check:        Understand (4 questions) · Apply (6 questions) — confirm
Voice check:        Confirm no avoid-list words; no fiction; no penalty framing;
                    large/small scale reversal explained explicitly
[VERIFY] tags:      Mars Climate Orbiter incident (Q0 wonder hook) — verify
                    figures (cost, altitude, entry altitude);
                    Q7 non-uniform scale bar — requires visual asset before
                    answer can be confirmed
Verification form:  03 - Systems/shared-references/educator-verification-checklist.md
```

---

## Adaptive Branching Logic

| Score | Route |
|---|---|
| ≥ 70% | Advance to GEO-MS-003 |
| 50–69% | Concept-area remediation (Assessment table in spec Section 9), retry |
| < 50% | Full worked example re-presented with higher scaffold, retry |

Calculation remediation specifically: break the unit-rate step into a
smaller intermediate step before retry. Students who miss calculation
questions typically fail at unit conversion, not at the ratio concept.

---

## Known Flags (Do Not Resolve Without Educator Review)

- **Q7 (non-uniform scale bar):** Cannot be finalized without a map graphic.
  The correct answer depends on exact visual proportions. Flagged in spec.
  Requires build decision before Beta.
- **[VERIFY] tags:** Mars Climate Orbiter figures in wonder hook must be
  confirmed against primary sources before educator review submission.
- **Spiral Q8:** Presents a genuine trade-off (A or B are both defensible).
  Confirm with educator that open-ended trade-off questions at Apply level
  are appropriate for 9th grade before this question is finalized.
