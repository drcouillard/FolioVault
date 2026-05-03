# Module Spec Standard — Gagné Event 2
## "Before the Questions" Block
*Shared reference. Applies to all Folio module specs.*
*Retrofit patches for GEO-MS-001/002/003 in: updated-specs/*

---

## What It Is

A short, scannable summary of module coverage placed between the worked
example (Section 8) and the practice set (Section 9). Students read it
before the first question loads. It is not a numbered section. It is a
visual break — four bullets, thirty seconds to read.

Purpose: orient the student to what the practice set will test, after
the wonder hook, explainer, and worked example have already made the
content meaningful. This is Gagné Event 2 (State Objectives) relocated
to the point where it earns its place.

---

## Placement

```
Section 8 — Worked Example
    [last paragraph of worked example]

**Before the Questions**         ← INSERT HERE

    Here's what this module covers:
    · [bullet 1]
    · [bullet 2]
    · [bullet 3]
    · [bullet 4]

Section 9 — Practice Set
    [Question 1 ...]
```

---

## Format

```
**Before the Questions**

Here's what this module covers:

- [Sub-objective 1 — stated as content covered, not as a student outcome]
- [Sub-objective 2]
- [Sub-objective 3]
- [Sub-objective 4]
```

Four bullets maximum. If a module has more than four sub-objectives,
combine the most closely related pair into one bullet.

---

## Voice Rules

- Present tense, declarative: "Scale is a ratio" not "You will understand
  scale as a ratio"
- No "by the end of this module" — syllabus language
- No "you will be able to" — compliance language
- No exclamation points
- Reads like a navigator's pre-departure checklist: here's what we covered,
  here's where we are
- If some content in the module is not assessed (e.g., Going Deeper blocks,
  cross-domain bridges, scope-boundary content), note this in a plain
  parenthetical below the bullets — one sentence, no fanfare

---

## Gagné Audit Entry

Every module spec Gagné audit table should show:

| 2 | State objectives | ✓ | Static summary of module coverage — placed after worked example (Event 5), before practice set (Event 6). Framed as "here's what this module covers." Adaptive version flagged for Phase 2. |

---

## Phase 2 Flag

Current implementation: static — every student sees the same bullets
regardless of prior module history.

Adaptive version: surfaces only sub-objectives not yet encountered through
prior spiral questions, based on the student's session history. Requires
session tracking infrastructure. Flagged for Phase 2 scoping.

---

## Approved Blocks — Existing Modules

**GEO-MS-001:**
- Maps are selective representations — every map makes choices about what
  to include, what to omit, and what to distort
- Those choices reflect a purpose — a map is appropriate or inappropriate
  for a task, not simply accurate or inaccurate
- Three unavoidable map choices: selection (what's included), omission
  (what's left out), distortion (what's misrepresented)
- The right question to ask of any map: what is this map for — and does
  it make the choices that serve that purpose?

**GEO-MS-002:**
- Map scale is the ratio between a distance on the map and the
  corresponding real-world distance — expressed as a ratio, a verbal
  statement, or a scale bar
- Large-scale maps show small areas in high detail; small-scale maps show
  large areas in low detail — the vocabulary runs counter to what "large"
  and "small" suggest
- Scale bars are the most practical format — use them by finding the
  per-unit value, then multiplying by the measured distance
- Scale is a choice: selecting the wrong scale for a task means the
  information you need may not be visible at that resolution

**GEO-MS-003:**
- Latitude measures angle from the equator — a physical reference
  determined by Earth's axis; lines run east-west and are always parallel
- Longitude measures angle from the Prime Meridian — a human agreement
  made in 1884; lines run north-south and converge at both poles
- Coordinates are written latitude first, longitude second, each with a
  direction (N/S for latitude, E/W for longitude)
- Coordinates are a reasoning tool, not just a lookup system — shared
  latitude carries geographic information before you consult any other
  data source

**GEO-MS-004:**
- All flat maps distort Earth's surface — this is a geometric fact, not
  a measurement error; the four properties a projection can preserve or
  distort are shape, area, distance, and direction
- The Mercator projection preserves direction (compass bearings) and
  distorts area — landmasses near the poles appear much larger than their
  true size
- The Peters projection preserves area (relative size of landmasses) and
  distorts shape — designed as a deliberate corrective to Mercator's
  size distortions
- Projection selection is a trade-off decision: match the preserved
  property to the task; Robinson and Winkel Tripel minimize total
  distortion for general use; Azimuthal Equidistant preserves distance
  and direction from a single center point
- *(Robinson, Azimuthal Equidistant, and Winkel Tripel appear in the
  lesson and the projection explorer. They are not assessed individually
  in this module's practice set — but will appear as spiral context in
  later modules.)*
