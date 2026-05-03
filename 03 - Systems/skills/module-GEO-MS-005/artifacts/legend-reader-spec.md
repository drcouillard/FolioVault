# Artifact Spec — Legend Reader

## GEO-MS-005: Legends, Symbols & Map Types

_Status: Stubbed — Awaiting Visual Identity Lock and Map Assets_

---

## Artifact Identity

|Field|Value|
|---|---|
|Artifact name|Legend Reader|
|Module|GEO-MS-005|
|Track|Concept-Serving (Priority Track)|
|Build status|Stubbed — not ready for development|
|Blockers|Visual identity lock; map asset sourcing|

---

## Interaction Model

Three unfamiliar map excerpts presented in sequence. Each map has a visible legend. Student answers 2–3 questions per map using only the legend — no prior geographic knowledge of the region required to answer correctly.

**Design constraint:** Questions must be answerable from the legend alone. If a question requires outside knowledge, it is out of scope for this artifact.

---

## Map Sequence

|Map|Type|Topic|Questions|
|---|---|---|---|
|Map 1|Reference map|Terrain + roads — region TBD|What does the dashed line represent? Which symbol marks an elevation point?|
|Map 2|Choropleth|Population density — region TBD|Which area has the highest density? What does the lightest shading represent?|
|Map 3|Proportional symbol|City populations — region TBD|Which city has the largest population? Approximately how large is City X based on its symbol?|

[LAYOUT: TBD — map display dimensions, legend panel placement, question overlay format] [COMPONENT: legend-reader-interface] [ASSET: map excerpts — sourcing required before build]

---

## Scaffolding Tiers

**Tier 1 (default):** Map and legend visible; question prompt. No additional support. **Tier 2 (hint available):** Arrow indicator highlights the relevant legend section without identifying the answer. **Tier 3 (maximum scaffold):** Legend element is labeled with its function type (e.g., "This is a point symbol — it marks a specific location").

---

## Build Dependencies

- [ ] Folio visual identity locked (colors, typography, spacing)
- [ ] Map assets sourced or created — three map excerpts, each with legend
- [ ] UX instructional design decision on legend panel layout
- [ ] [COMPONENT: legend-reader-interface] spec written

---

## Notes for Build Phase

- Maps must use unfamiliar regions to prevent students from importing prior knowledge
- Legends must be legible at mobile viewport minimum (responsive constraint)
- Interaction is read-only + answer selection — no drawing or annotation required at this stage

---

_GEO-MS-005 — Legend Reader Artifact Spec — Stubbed — May 2026_