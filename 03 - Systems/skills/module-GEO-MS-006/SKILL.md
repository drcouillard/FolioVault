---

## name: folio-module-GEO-MS-006 description: > Module execution skill for GEO-MS-006 — Cardinal & Intermediate Directions. Use this skill whenever building, updating, or reviewing any artifact, practice question, feedback block, or interactive component for Module 1.5 of the Folio World Geography course. Trigger phrases include: "build the GEO-MS-006 artifact", "write questions for the directions module", "generate feedback for the compass module", "build the compass rose navigator", "update the cardinal directions module", or any task scoped to Module 1.5 of Chapter 1. Always load references before generating any content or code for this module.

# Folio Module Skill — GEO-MS-006

## Cardinal & Intermediate Directions

_Chapter 1: Map Skills & Spatial Thinking · 9th Grade · Fifth Tool Module_

---

## Module Identity at a Glance

|Field|Value|
|---|---|
|Module ID|GEO-MS-006|
|Status|Alpha — Awaiting Educator Verification|
|Content type|Procedural + Declarative|
|Bloom target|Apply (primary) / Analyze (spiral ceiling)|
|Spiral questions|5 (GEO-MS-001: map as argument; GEO-MS-002: fitness for purpose; GEO-MS-003: reading coordinates; GEO-MS-004: projection × direction; GEO-MS-005: map type fitness — first spiral appearance)|
|New concept questions|3|
|Total questions|8 (coverage-driven; concept set narrower than prior modules)|
|Mastery threshold|6/8 (75%)|
|Estimated time|25–30 minutes|
|Interactive artifacts|1 — Compass Rose Navigator (two modes)|
|Prerequisites|GEO-MS-001 through GEO-MS-005|

**Enduring Understanding:** Direction is not intuitive — it is encoded. Cardinal and intermediate directions are a shared notation system anchored to Earth's geographic poles. A compass rose anchors all directional reasoning to an agreed reference point. "Travel northeast" means the same thing to everyone holding that map. "Turn left" does not.

**Scope boundary:** Bearing (azimuth) is introduced in a Going Deeper block but not assessed. Magnetic declination is noted as a scope flag in the explainer but not developed. Both belong to navigation courses and trigonometry. Do not develop either concept beyond what appears in the explainer.

---

## Reference Files — Load Before Any Task

|File|When to load|
|---|---|
|`references/folio-voice.md`|Before writing ANY student-facing copy|
|`references/GEO-MS-006-spec.md`|Before any content generation or artifact build|
|`references/diagnostic-feedback-template.md`|Before writing wrong-answer feedback|
|`references/scaffold-tier-definitions.md`|Before writing hint progressions|
|`references/spiral-tag-reference.md`|Before tagging any practice question|
|`references/event2-standard.md`|Before writing the "Before the Questions" block|
|`artifacts/compass-rose-navigator-spec.md`|Before building or modifying the interactive|
|`references/educator-verification-checklist.md`|Before routing content for review|

**Do not generate content or code without reading the spec and voice reference first. The spec is the contract. The voice reference is the constraint.**

---

## What This Skill Builds

### 1. Interactive Artifact — Compass Rose Navigator

Two-mode tool:

**Mode A — Identify the direction:** Full eight-point compass rose displayed. A direction is named. Student selects the correct point.

**Mode B — Direction of travel:** Map excerpt with north arrow and two labeled cities. Student selects correct direction of travel (A → B) from eight options arranged as a compass rose.

Full specification: `artifacts/compass-rose-navigator-spec.md`

**Build status:** Stubbed — awaiting visual identity lock and map assets.

### 2. Practice Questions (8, coverage-driven)

|Sub-objective|Bloom|Min Qs|Spiral?|
|---|---|---|---|
|Cardinal direction identification from compass rose|Remember|1|[NEW]|
|Intermediate direction + naming convention|Apply|1|[NEW]|
|Observer-dependence: relative vs. cardinal direction|Apply|1|[NEW]|
|Direction of travel between two map locations|Apply|1|[SPIRAL: GEO-MS-003 — Reading coordinates]|
|Compass rose as argument — orientation encodes perspective|Analyze|1|[SPIRAL: GEO-MS-001 — Map as argument]|
|Map type × direction — fitness for navigation purpose|Apply|1|[SPIRAL: GEO-MS-005 — Map type fitness for purpose]|
|Projection orientation — directional reading on non-standard projections|Analyze|1|[SPIRAL: GEO-MS-004 — Projection selection for purpose]|
|Cardinal direction fitness — transfer application|Apply|1|[SPIRAL: GEO-MS-002 — Fitness for purpose]|

Approved question set: `references/GEO-MS-006-spec.md` Section 9.

### 3. Diagnostic Feedback Blocks

One block per wrong-answer distractor. Format and rules: `references/diagnostic-feedback-template.md`

Special notes:

- Q3, Q6, Q8: The most common failure pattern is importing relative direction logic into cardinal direction questions. Feedback must name this distinction specifically — not just redirect to the right answer.
- Q5: Feedback must hold the complexity — do not reduce orientation to convention vs. error; acknowledge that orientation encodes perspective.
- Q7: Feedback for distractor A (no challenge) must explain WHY cardinal directions don't work the same on all projections — name the Azimuthal Equidistant center-point property specifically.

### 4. Hint Progressions

Three scaffold tiers per question. Tier definitions: `references/scaffold-tier-definitions.md`

Special notes:

- Q1, Q2 (identification questions): Tier 1: Redirect to the compass rose diagram in the explainer Tier 2: Name the quadrant the answer falls in without naming the direction Tier 3: Identify the two cardinal directions the answer sits between
    
- Q4 (coordinates + direction): Tier 1: "Establish where each city is relative to the equator first" Tier 2: Identify the latitude movement (north or south) before addressing longitude Tier 3: "If you move from 34°S to 33°N, are you moving north or south?"
    
- Q7 (Azimuthal Equidistant): Tier 1: Return student to GEO-MS-004 Azimuthal Equidistant explainer section Tier 2: "What does this projection preserve from the center point — and what does that mean for points that aren't at the center?" Tier 3: Name the specific challenge without resolving it — "north at Sydney's location on this projection is not the same as the top of the page"
    

### 5. Gagné Event 2 — "Before the Questions" Block

Placed after the worked example, before the practice set. Format standard: `references/event2-standard.md`

Approved text for this module:

- Cardinal directions (N, S, E, W) are fixed references anchored to Earth's geographic poles — they do not change with the observer's orientation
- Intermediate directions (NE, SE, SW, NW) fall exactly between the cardinal directions — always named with the north-south component first
- A compass rose or north arrow anchors the map's orientation — without it, directional reasoning has no fixed reference
- Directional descriptions state the relationship between two locations — they require a reference point and a map orientation to be meaningful

### 6. Big Idea Callback

Passive (mid-module): approved text in spec Section 5. Active (EIB — Cape Town to Mumbai): approved text in spec Section 10. EIB rubric: 7 points, mastery at 5/7. Full rubric in spec Section 10.

### 7. Going Deeper Block (1)

**Block — Navigation & Surveying (bearing/azimuth)** Placement: After the Geographic North vs. Magnetic North section. Domain: Azimuth / bearing system; aeronautical navigation; trigonometry. Never tested. Never required. Labeled with domain. Format rules: `references/going-deeper-standard.md`

---

## Spiral Tag Rules for This Module

Five spiral tags in use:

```
[SPIRAL: GEO-MS-001 — Map as argument]         → Q5
[SPIRAL: GEO-MS-002 — Fitness for purpose]     → Q8
[SPIRAL: GEO-MS-003 — Reading coordinates]     → Q4
[SPIRAL: GEO-MS-004 — Projection selection]    → Q7
[SPIRAL: GEO-MS-005 — Map type fitness]        → Q6
```

Full tag reference and Bloom escalation tracking: `references/spiral-tag-reference.md`

**Key notes:**

- GEO-MS-001 holds at Analyze — no further escalation this module. Scaffolding at minimum — concept is background knowledge.
- GEO-MS-005 appears for the first time as a spiral (Q6) — moderate scaffold retained; first appearance always gets moderate support.
- GEO-MS-003 coordinates are fully background — no re-scaffolding in Q4.

---

## Content Rules — Non-Negotiable

- [ ] No "wrong," "incorrect," "fail," "easy," "simply" in student-facing copy
- [ ] Feedback for relative vs. cardinal questions must name the distinction explicitly — not just redirect to the correct answer
- [ ] North-up described as a convention, not a rule — historical exceptions acknowledged
- [ ] Magnetic north described accurately — compass points to magnetic north; geographic north is what cardinal directions reference
- [ ] Bearing/azimuth not assessed — Going Deeper only
- [ ] No fictional geography — all city pairs and locations must be real and geographically accurate
- [ ] Intermediate direction naming convention enforced in all questions and feedback — N-S component first, always

---

## Educator Verification Routing

```
FOLIO MODULE SKILL → EDUCATOR VERIFICATION
───────────────────────────────────────────
Module:             GEO-MS-006
Component:          [artifact / question set / feedback blocks / full module]
Bloom check:        Remember (1) · Apply (5) · Analyze (2) — confirm
Voice check:        No avoid-list words; relative vs. cardinal distinction
                    named explicitly in feedback; north-up described as
                    convention; magnetic north accurately described
[VERIFY] tags:      "Direction of Earth's rotation" — standard phrasing for 9th grade
                    North arrow vs. compass rose usage — confirm distinction
                    North-up as convention not rule — confirm standard claim
                    N-S-first convention — confirm universal in English cartography
                    Seoul northwest of Tokyo — confirm on standard projection
                    Addis Ababa northwest of Nairobi — confirm
                    Cape Town and Baghdad coordinates — confirm accuracy
                    al-Idrisi south-up maps (Islamic cartographic tradition) — confirm
                    Azimuthal Equidistant direction/distance from center — confirm
                    Magnetic declination scope — confirm appropriate depth
Flags for review:   Q5 historical map orientation — confirm al-Idrisi example
                    Q7 Azimuthal Equidistant challenge — confirm reasoning described
                    Magnetic declination scope note — confirm 9th grade appropriate
Verification form:  references/educator-verification-checklist.md
```

---

## Adaptive Branching Logic

|Score|Route|
|---|---|
|≥ 75% (6/8)|Advance to GEO-MS-007|
|50–74%|Concept-area remediation by sub-objective; retry|
|< 50%|Compass Rose Navigator re-presented at higher scaffold; worked example re-presented; retry|

**Key remediation note:** Most common failure = relative vs. cardinal confusion (Q3, Q6, Q8). If student misses two or more of these three, route specifically to the observer-dependence section of the explainer — not the full module restart.

---

## Known Flags

- **Q5 (south-up historical maps):** Confirm al-Idrisi example is accurate and that south-up orientation is appropriate to introduce at 9th grade as cartographic perspective. Educator verifier confirms.
- **Q7 (Azimuthal Equidistant × direction):** Most complex spiral interaction in this module. Confirm the directional reasoning challenge described is accurate. Educator verifier confirms.
- **Magnetic declination scope:** Introduced as a note in the explainer — not assessed. Confirm appropriate depth with educator verifier.
- **GEO-MS-005 first spiral (Q6):** First appearance of map type fitness as a spiral tag. Confirm question is correctly classified at Apply and that the reasoning required is appropriate for this module position.
- **All [VERIFY] tags** in spec require fact-checking before Beta.