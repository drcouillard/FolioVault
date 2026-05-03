# Artifact Spec — Compass Rose Navigator

## GEO-MS-006: Cardinal & Intermediate Directions

_Status: Stubbed — Awaiting Visual Identity Lock and Map Assets_

---

## Artifact Identity

|Field|Value|
|---|---|
|Artifact name|Compass Rose Navigator|
|Module|GEO-MS-006|
|Track|Concept-Serving (Priority Track)|
|Build status|Stubbed — not ready for development|
|Blockers|Visual identity lock; map asset sourcing|

---

## Interaction Model — Two Modes

**Mode A — Identify the direction:** A full eight-point compass rose is displayed. A direction is named (e.g., "Select Southwest"). Student taps or clicks the correct point on the compass rose.

Purpose: anchors the eight-point system visually before applying it to maps.

**Mode B — Direction of travel:** A map excerpt is displayed with a north arrow and two labeled cities. Student selects the correct direction of travel (A → B) from a set of eight options arranged in a compass rose interface.

Purpose: applies directional reasoning to a real geographic context.

---

## Mode B — Map Scope

- Real world maps only — no fictional geographies
- Cities drawn from approved real-geography pool
- North arrow required on every map excerpt
- At least one Mode B scenario should require an intermediate direction (not just N/S/E/W) to confirm full eight-point mastery
- [ASSET: map excerpts required — sourcing or creation needed before build]

---

## Scaffolding Tiers

**Tier 1 (default):** Compass rose or map displayed with question. No additional support.

**Mode A Tier 2:** The correct quadrant of the compass rose is highlighted (NE quadrant, SW quadrant, etc.) without identifying the specific point.

**Mode B Tier 2:** North arrow on the map is animated or emphasized; a prompt reads "Confirm which direction is north before answering."

**Mode A/B Tier 3:** The correct direction is labeled on the compass rose display — student confirms rather than selects.

---

## Build Dependencies

- [ ] Folio visual identity locked (colors, typography, spacing)
- [ ] Map assets sourced or created — minimum 3 map excerpts with north arrow and two labeled cities each
- [ ] UX instructional design decision on compass rose component design
- [ ] [COMPONENT: compass-rose-navigator] spec written

---

## Notes for Build Phase

- Compass rose must be interactive — all eight points selectable
- Mode B map excerpts must use real city pairs that span different directional relationships (not all north-south or all east-west)
- Mobile-responsive — compass rose must be tappable at minimum touch target size
- Going Deeper block (bearing/azimuth) is text-only — no interactive component required for this module

---

_GEO-MS-006 — Compass Rose Navigator Artifact Spec — Stubbed — May 2026_