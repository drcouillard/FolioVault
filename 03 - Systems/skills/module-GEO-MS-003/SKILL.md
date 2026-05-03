---
name: folio-module-GEO-MS-003
description: >
  Module execution skill for GEO-MS-003 — Latitude & Longitude.
  Use this skill whenever building, updating, or reviewing any artifact,
  practice question, feedback block, or interactive component for Module 1.2
  of the Folio World Geography course. Trigger phrases include: "build the
  GEO-MS-003 artifact", "write questions for module 1.2", "generate feedback
  for the coordinates module", "build the coordinate locator", "update the
  latitude longitude module", or any task scoped to Module 1.2 of Chapter 1.
  Always load references before generating any content or code for this module.
---

# Folio Module Skill — GEO-MS-003
## Latitude & Longitude
*Chapter 1: Map Skills & Spatial Thinking · 9th Grade · Second Tool Module*

---

## Module Identity at a Glance

| Field | Value |
|---|---|
| Module ID | GEO-MS-003 |
| Status | Alpha — Awaiting Educator Verification |
| Content type | Procedural + Conceptual-Principle |
| Bloom target | Apply |
| Spiral questions | 3 (GEO-MS-001: map as argument; GEO-MS-002: scale and distance, fitness for purpose) |
| New concept questions | 7 |
| Total questions | 10 (range: 7–13, coverage-driven) |
| Mastery threshold | 7/10 |
| Estimated time | 30–35 minutes |
| Interactive artifacts | 1 — Coordinate Locator |
| Prerequisites | GEO-MS-001, GEO-MS-002 |

**Enduring Understanding:**
Latitude and longitude are not just a filing system for locations — they
encode real physical facts about Earth. Latitude lines are parallel because
they measure angle from the equator, a fixed physical reference. Longitude
lines converge at the poles because they measure angle from an arbitrary
line that humans agreed on. Understanding why the grid works the way it
does makes it a tool for reasoning, not just for finding things.

**Scope boundary:**
The latitude-climate connection is planted in this module but not developed.
Chapter 2 owns the mechanism. This module owns the observation. Do not
develop climate content beyond the signal — flag any climate content that
exceeds the scope note in spec Section 9 (Q9) for Chapter 2 handling.

---

## Reference Files — Load Before Any Task

| File | When to load |
|---|---|
| `01 - Core/folio-voice.md` | Before writing ANY student-facing copy |
| `references/GEO-MS-003-spec.md` | Before any content generation or artifact build |
| `03 - Systems/shared-references/diagnostic-feedback-template.md` | Before writing wrong-answer feedback |
| `03 - Systems/shared-references/scaffold-tier-definitions.md` | Before writing hint progressions |
| `references/spiral-tag-reference.md` | Before tagging any practice question |
| `03 - Systems/shared-references/event2-standard.md` | Before writing the "Before the Questions" block |
| `artifacts/coordinate-locator-spec.md` | Before building or modifying the interactive |
| `03 - Systems/shared-references/educator-verification-checklist.md` | Before routing content for review |

**Do not generate content or code without reading the spec and voice
reference first. The spec is the contract. Voice reference: `01 - Core/folio-voice.md`.

---

## What This Skill Builds

### 1. Interactive Artifact — Coordinate Locator

A bidirectional coordinate tool. Two modes on the same interface:

**Mode A — Enter to locate:** Student types coordinates; a pin drops on
the world map at that location.

**Mode B — Read to write:** A pin is placed on the map; student reads
the coordinates and writes them in standard format.

Why bidirectional: reading and writing coordinates are distinct skills.
A student who can locate 34°S, 18°E may not be able to write the
coordinates of Cape Town from memory. Both directions are sub-objectives.

Full specification: `artifacts/coordinate-locator-spec.md`

### 2. Practice Questions (10, range 7–13)

Coverage requirement: at least one question per sub-objective.

| Sub-objective | Bloom | Min questions | Spiral? |
|---|---|---|---|
| Definitions — latitude vs. longitude | Remember | 1 | [NEW] |
| Physical logic of latitude (parallels) | Understand | 1 | [NEW] |
| Prime Meridian origin | Understand | 1 | [NEW] |
| Reading coordinates | Apply | 1 | [NEW] |
| Writing coordinates | Apply | 1 | [NEW] |
| Coordinate inference | Apply | 1 | [NEW] |
| Meridian convergence | Understand | 1 | [NEW] |
| Scale + distance (GEO-MS-002 spiral) | Apply | 1 | [SPIRAL: GEO-MS-002] |
| Climate signal + map as argument (GEO-MS-001 spiral) | Apply | 1 | [SPIRAL: GEO-MS-001] |
| Fitness for purpose (GEO-MS-001 spiral) | Apply | 1 | [SPIRAL: GEO-MS-001] |

Approved question set: `references/GEO-MS-003-spec.md` Section 9.

### 3. Diagnostic Feedback Blocks

One block per wrong-answer distractor.
Format and rules: `03 - Systems/shared-references/diagnostic-feedback-template.md`

### 4. Hint Progressions

Three scaffold tiers per question.
Tier definitions: `03 - Systems/shared-references/scaffold-tier-definitions.md`

Special note for calculation questions (Q8 — degrees to km):
- Tier 1: Redirect to "one degree of latitude = approximately 111 km"
- Tier 2: Prompt the student to find the degree difference before multiplying
- Tier 3: Isolate the decision — "What is 45 minus 25? Now multiply by 111."

### 5. Gagné Event 2 — "Before the Questions" Block

Placed after the worked example, before the practice set.
Format standard: `03 - Systems/shared-references/event2-standard.md`

Approved text for this module:
- Latitude measures angle from the equator — a physical reference
  determined by Earth's axis; lines run east-west and are always parallel
- Longitude measures angle from the Prime Meridian — a human agreement
  made in 1884; lines run north-south and converge at both poles
- Coordinates are written latitude first, longitude second, each with a
  direction (N/S for latitude, E/W for longitude)
- Coordinates are a reasoning tool, not just a lookup system — shared
  latitude carries geographic information before you consult any other
  data source

### 6. Big Idea Callback

Passive (mid-module): approved text in spec Section 10.
Active (EIB — Prime Meridian argument): approved text in spec Section 10.
EIB rubric: 7 points, mastery at 5/7. Full rubric in spec Section 10.

### 7. Micro-Checks (2, inline, no stakes)

Micro-check 1: North Pole latitude/longitude edge case — placed after
latitude/longitude distinction, before notation section. Answer context
shown immediately after prompt. No score.

Micro-check 2: Student writes approximate coordinates of a city they know
before the practice set. No submission, no score, no lookup required.

---

## Spiral Tag Rules for This Module

Three spiral tags in use:

```
[SPIRAL: GEO-MS-001 — Map as argument]      → Q9
[SPIRAL: GEO-MS-001 — Fitness for purpose]  → Q10
[SPIRAL: GEO-MS-002 — Scale and distance]   → Q8
```

Full tag reference and Bloom escalation tracking:
`references/spiral-tag-reference.md`

Note on Bloom escalation: GEO-MS-001 concepts now appear at Apply level
(previously Understand in GEO-MS-002). This is the first escalation step.
Tag the escalation in the spiral tag reference when building Q9 and Q10.

---

## Scope Boundary — Latitude-Climate Connection

The latitude-climate signal is planted in:
- Concept explainer (final paragraph)
- Q9 (pattern observation without mechanism)
- Passive Big Idea Callback

**Hard rule:** No practice question in this module may ask students to
explain *why* latitude affects climate — that mechanism belongs to
Chapter 2. Questions may ask students to *notice* the pattern or *name*
the correlation. If a question drifts toward mechanism, flag it and move
it to Chapter 2 scoping.

---

## Content Rules — Non-Negotiable

- [ ] No "wrong," "incorrect," "fail," "easy," "simply" in student-facing copy
- [ ] Feedback names the misconception specifically — not vaguely
- [ ] No fictional geography — approved real places: Cairo, Athens, Mumbai,
      Casablanca, Cape Town, Buenos Aires, Tokyo, Lisbon, Halifax, London
      (Greenwich), all from spec
- [ ] Coordinates always written latitude first, longitude second
- [ ] N/S/E/W direction indicators required on all coordinate notation
- [ ] "Large-scale / small-scale" distinction not re-explained here —
      refer back to GEO-MS-002 if needed in spiral questions
- [ ] Climate content: observation only, no mechanism — see scope boundary above

---

## Educator Verification Routing

```
FOLIO MODULE SKILL → EDUCATOR VERIFICATION
───────────────────────────────────────────
Module:             GEO-MS-003
Component:          [artifact / question set / feedback blocks / full module]
Bloom check:        Remember (1) · Understand (3) · Apply (6) — confirm
Voice check:        No avoid-list words; no fiction; coordinates written
                    correctly throughout; climate content stays at observation
[VERIFY] tags:      Q8 — 111 km per degree of latitude (standard approximation)
                    Q10 — 8°N, 38°E places a point in Ethiopian highlands
                    Worked example — 34°S, 18°E places ship near Cape Town;
                    SAMSA operating area and Cape Town coordinates
Verification form:  03 - Systems/shared-references/educator-verification-checklist.md
```

---

## Adaptive Branching Logic

| Score | Route |
|---|---|
| ≥ 70% | Advance to GEO-MS-004 |
| 50–69% | Concept-area remediation (Assessment table, spec Section 9), retry |
| < 50% | Full explainer re-presented with Coordinate Locator at higher scaffold, retry |

Calculation remediation (Q8): if missed, re-present the "one degree =
111 km" equivalence with an intermediate step — find the degree difference
first, then multiply. Same pattern as GEO-MS-002 unit-rate step.

---

## Known Flags

- **Micro-check 1 (North Pole edge case):** Accurate and intellectually
  honest — the North Pole has a defined latitude but no meaningful longitude.
  Confirm with educator verifier that this is appropriate for 9th grade.
  It is placed as a no-stakes micro-check for this reason.
- **EIB prompt (1884 Prime Meridian argument):** Third prompt asks students
  to argue where they'd place the Prime Meridian with no political stake.
  Requires Apply-to-Evaluate reasoning. Confirm grade-appropriateness with
  educator verifier before Beta.
- **All [VERIFY] tags** in spec require fact-checking before Beta.
