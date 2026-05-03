---

## name: folio-module-GEO-MS-005 description: > Module execution skill for GEO-MS-005 — Legends, Symbols & Map Types. Use this skill whenever building, updating, or reviewing any artifact, practice question, feedback block, or interactive component for Module 1.4 of the Folio World Geography course. Trigger phrases include: "build the GEO-MS-005 artifact", "write questions for module 1.4", "generate feedback for the legends module", "build the legend reader", "update the map types module", or any task scoped to Module 1.4 of Chapter 1. Always load references before generating any content or code for this module.

# Folio Module Skill — GEO-MS-005

## Legends, Symbols & Map Types

_Chapter 1: Map Skills & Spatial Thinking · 9th Grade · Fourth Tool Module_

---

## Module Identity at a Glance

|Field|Value|
|---|---|
|Module ID|GEO-MS-005|
|Status|Alpha — Awaiting Educator Verification|
|Content type|Procedural + Declarative|
|Bloom target|Apply (primary) / Analyze (spiral ceiling)|
|Spiral questions|5 (GEO-MS-001: map as argument ×2; GEO-MS-002: fitness for purpose; GEO-MS-003: reading coordinates; GEO-MS-004: projection × thematic map)|
|New concept questions|4|
|Total questions|9 (range: 7–13, coverage-driven)|
|Mastery threshold|6/9 (67%)|
|Estimated time|30–35 minutes|
|Interactive artifacts|1 — Legend Reader|
|Prerequisites|GEO-MS-001, GEO-MS-002, GEO-MS-003, GEO-MS-004|

**Enduring Understanding:** A map without a legend is a picture, not a tool. Legends encode the mapmaker's decisions about what counts as worth showing and how to show it. Map types make that contract explicit at a larger scale. Reading a legend fluently means reading the mapmaker's argument.

**Scope boundary:** This module introduces legend literacy and map type identification as procedural and declarative knowledge. Deeper analysis of cartographic power and bias belongs to later country and regional modules where real examples carry the argument. Do not develop cartographic critique beyond what is demonstrated in Q5 and Q9.

---

## Reference Files — Load Before Any Task

|File|When to load|
|---|---|
|`references/folio-voice.md`|Before writing ANY student-facing copy|
|`references/GEO-MS-005-spec.md`|Before any content generation or artifact build|
|`references/diagnostic-feedback-template.md`|Before writing wrong-answer feedback|
|`references/scaffold-tier-definitions.md`|Before writing hint progressions|
|`references/spiral-tag-reference.md`|Before tagging any practice question|
|`references/event2-standard.md`|Before writing the "Before the Questions" block|
|`artifacts/legend-reader-spec.md`|Before building or modifying the interactive|
|`references/educator-verification-checklist.md`|Before routing content for review|

**Do not generate content or code without reading the spec and voice reference first. The spec is the contract. The voice reference is the constraint.**

---

## What This Skill Builds

### 1. Interactive Artifact — Legend Reader

Three unfamiliar map excerpts in sequence. Each map has a visible legend. Student answers 2–3 questions per map using only the legend — no prior geographic knowledge of the region required.

Map types in sequence:

- Map 1: Reference map (terrain + roads)
- Map 2: Choropleth (population density)
- Map 3: Proportional symbol (city populations)

Full specification: `artifacts/legend-reader-spec.md`

**Build status:** Stubbed — awaiting visual identity lock and map assets.

### 2. Practice Questions (9, range 7–13)

Coverage requirement: at least one question per sub-objective.

|Sub-objective|Bloom|Min questions|Spiral?|
|---|---|---|---|
|Legend symbol types (point, line, area, graduated)|Remember|1|[NEW]|
|Reading an unfamiliar legend to extract information|Apply|1|[NEW]|
|Map type identification — reference, thematic, navigation|Apply|1|[NEW]|
|Thematic sub-type identification|Apply|1|[NEW]|
|Legend as argument — cartographer's choices|Analyze|1|[SPIRAL: GEO-MS-001 — Map as argument]|
|Map type fitness for purpose|Apply|1|[SPIRAL: GEO-MS-002 — Fitness for purpose]|
|Coordinate reading applied to thematic map|Apply|1|[SPIRAL: GEO-MS-003 — Reading coordinates]|
|Projection × thematic map interaction|Analyze|1|[SPIRAL: GEO-MS-004 — Projection selection for purpose]|
|Critical legend reading — incomplete/misleading legend|Analyze|1|[SPIRAL: GEO-MS-001 — Map as argument]|

Approved question set: `references/GEO-MS-005-spec.md` Section 9.

### 3. Diagnostic Feedback Blocks

One block per wrong-answer distractor. Format and rules: `references/diagnostic-feedback-template.md`

Special note for Analyze-level questions (Q5, Q8, Q9):

- Q5 feedback must hold the tension — do not resolve the choropleth division debate into a verdict; acknowledge both positions have merit
- Q8 feedback must name the specific mechanism (Mercator area inflation) not just "projection affects the map"
- Q9 feedback must name the structural gap (missing population denominator) not just "the legend is incomplete"

### 4. Hint Progressions

Three scaffold tiers per question. Tier definitions: `references/scaffold-tier-definitions.md`

Special note for legend-reading questions (Q2, Q7):

- Tier 1: Redirect to "read the legend before the map"
- Tier 2: Identify which legend element is relevant to the question
- Tier 3: Point to the specific legend entry without giving the answer

Special note for Analyze-level spiral questions (Q5, Q8, Q9):

- Tier 1: Return student to the relevant concept explainer section
- Tier 2: Name the reasoning move required without completing it
- Tier 3: Isolate the specific comparison or gap the question is probing

### 5. Gagné Event 2 — "Before the Questions" Block

Placed after the worked example, before the practice set. Format standard: `references/event2-standard.md`

Approved text for this module:

- Legends translate a map's visual language — every symbol, color, and line is a decision recorded in the legend
- Map types encode purpose: reference maps show where; thematic maps show patterns; navigation maps support movement
- Thematic maps carry the most interpretive weight — choropleth, proportional symbol, dot density, and flow maps each encode data differently
- Reading a legend is reading the mapmaker's argument — what they chose to show, and how they chose to show it

### 6. Big Idea Callback

Passive (mid-module): approved text in spec Section 5. Active (EIB — asthma map advisory): approved text in spec Section 10. EIB rubric: 7 points, mastery at 5/7. Full rubric in spec Section 10.

---

## Spiral Tag Rules for This Module

Four spiral tags in use:

```
[SPIRAL: GEO-MS-001 — Map as argument]              → Q5, Q9
[SPIRAL: GEO-MS-002 — Fitness for purpose]          → Q6
[SPIRAL: GEO-MS-003 — Reading coordinates]          → Q7
[SPIRAL: GEO-MS-004 — Projection selection]         → Q8
```

Full tag reference and Bloom escalation tracking: `references/spiral-tag-reference.md`

**Escalation notes:**

- GEO-MS-001 reaches Analyze at Q5 and Q9 — second and third Analyze appearances. Scaffolding withdrawn to minimum.
- GEO-MS-004 escalates to Analyze immediately on first spiral appearance (Q8). This is intentional — the interaction with legend reading creates natural Analyze-level reasoning. Flag for educator confirmation.
- GEO-MS-003 appears at Apply level — coordinates used as background tool, not re-taught.

---

## Content Rules — Non-Negotiable

- [ ] No "wrong," "incorrect," "fail," "easy," "simply" in student-facing copy
- [ ] Feedback names the specific misconception — not vaguely
- [ ] Legend questions must be answerable from the legend alone — no outside geographic knowledge required for Q1–Q4
- [ ] Color associations (blue = water, green = forest) are explicitly challenged — the legend always overrides conventions
- [ ] No fictional geography — all real-world locations used in questions must be geographically accurate
- [ ] Map type is always identified by purpose, not appearance
- [ ] Mercator area inflation (Q8) must be named specifically — not described as "Mercator is inaccurate"
- [ ] Choropleth division debate (Q5) must not be resolved into a verdict — both division methods are legitimate cartographic choices

---

## Educator Verification Routing

```
FOLIO MODULE SKILL → EDUCATOR VERIFICATION
───────────────────────────────────────────
Module:             GEO-MS-005
Component:          [artifact / question set / feedback blocks / full module]
Bloom check:        Remember (1) · Apply (5) · Analyze (3) — confirm
Voice check:        No avoid-list words; no verdict on choropleth debate;
                    Mercator described as area distortion, not "inaccurate";
                    legend questions answerable from legend alone
[VERIFY] tags:      Symbol type taxonomy — standard cartographic terminology
                    Three-family map classification — standard geographic usage
                    Navigation map as distinct category vs. reference subset
                    Choropleth sub-type list — sufficient for 9th grade
                    Natural breaks (Jenks) vs. equal interval — 9th grade appropriate
                    Internet access data (Southeast Asia worked example)
                    5°N, 20°E — Central African Republic rainfall range
                    Mercator area inflation at country scale (Canada/Russia vs Brazil/Indonesia)
                    Dot density critique without population normalization
Flags for review:   Q5 — Analyze-level grade-appropriateness
                    Q8 — First GEO-MS-004 spiral at Analyze level
                    Q9 — Transfer-level question as appropriate ceiling
Verification form:  references/educator-verification-checklist.md
```

---

## Adaptive Branching Logic

|Score|Route|
|---|---|
|≥ 67% (6/9)|Advance to GEO-MS-006|
|50–66%|Concept-area remediation (sub-objective table, spec Section 9), retry|
|< 50%|Legend Reader re-presented at higher scaffold; full explainer re-presented; retry|

Remediation note for Analyze-level questions (Q5, Q8, Q9): route to worked example and legend-as-argument explainer section. Do not route to a simpler version of the question — route to the reasoning scaffold.

---

## Known Flags

- **Q5 (Analyze — choropleth division):** First time this module reaches Analyze on a new concept question. Confirm grade-appropriateness with educator verifier.
- **Q8 (Analyze — GEO-MS-004 spiral):** First spiral appearance of GEO-MS-004 concept escalates immediately to Analyze. This is intentional but requires educator confirmation.
- **Q9 (Analyze — transfer level):** Dot density / population normalization question is the highest-ceiling question in the module. Confirm as appropriate transfer target for this module position.
- **Legend Reader artifact:** Stubbed. Map assets and visual identity lock are required before any build work begins.
- **All [VERIFY] tags** in spec require fact-checking before Beta.