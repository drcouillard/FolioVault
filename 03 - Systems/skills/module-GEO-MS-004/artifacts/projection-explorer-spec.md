# Artifact Spec — Projection Explorer
## GEO-MS-004 · Map Projections: Every Map Lies
*Promoted and expanded from POC · Status: Stub — requires full spec before build*

---

## 1. Purpose

The Projection Explorer is the primary interactive component for GEO-MS-004.
It is the POC interactive projection explorer, promoted into the full module
and expanded to include Peters and the Greenland-Africa size comparison.

Students tap each projection panel to reveal what it preserves and distorts.
The Greenland-Africa size comparison updates dynamically as projections are
switched — making the area distortion visible without requiring calculation.

This sits between the concept explainer and the "Before the Questions" block.

---

## 2. Learning Objectives Served

- Describe what the Mercator projection preserves and distorts (Understand)
- Describe what the Peters projection preserves and distorts (Understand)
- Identify what each of Robinson, Azimuthal Equidistant, and Winkel Tripel
  preserves and distorts (Understand — in explorer, not assessed in practice)
- Select an appropriate projection for a stated purpose (Apply)

---

## 3. Five Panels

One panel per projection. All five visible simultaneously on desktop;
scrollable row on mobile. Active panel expands on tap.

### Panel 1 — Mercator

| Field | Content |
|---|---|
| Developer | Gerardus Mercator |
| Year | 1569 |
| Defining feature | Preserves compass bearings — straight lines are constant-heading routes |
| Preserves | Direction (rhumb lines) |
| Distorts | Area — severely near poles; Greenland appears comparable to Africa |
| Best use | Navigation; compass-bearing route planning |

### Panel 2 — Gall-Peters

| Field | Content |
|---|---|
| Developer | James Gall (1855); popularized by Arno Peters (1973) |
| Year | 1855 / 1973 |
| Defining feature | Preserves relative area of all landmasses |
| Preserves | Area |
| Distorts | Shape — landmasses appear stretched vertically near equator, compressed near poles |
| Best use | Size comparison; development, inequality, and resource distribution maps |

### Panel 3 — Robinson

| Field | Content |
|---|---|
| Developer | Arthur H. Robinson |
| Year | 1963 (National Geographic adopted 1988) |
| Defining feature | Optimized for visual balance — minimizes the most jarring distortions across all properties |
| Preserves | No single property fully; overall visual harmony |
| Distorts | All four properties moderately |
| Best use | General reference; classroom and atlas world maps |

### Panel 4 — Azimuthal Equidistant

| Field | Content |
|---|---|
| Developer | No single credited inventor; formalized by 19th century |
| Year | Earliest documented use circa 1470s |
| Defining feature | All distances and directions from a single central point are accurate |
| Preserves | Distance and direction — from the center point only |
| Distorts | Area and shape — increasingly toward the edges |
| Best use | Showing relationships to one fixed reference point (e.g., UN emblem — centered on North Pole) |

### Panel 5 — Winkel Tripel

| Field | Content |
|---|---|
| Developer | Oswald Winkel |
| Year | 1921 (National Geographic adopted 1998) |
| Defining feature | Minimizes total distortion across shape, area, and distance simultaneously |
| Preserves | Minimized aggregate error — no single property, but lowest total across three |
| Distorts | All four properties minimally |
| Best use | General reference; current National Geographic standard world map |

[VERIFY: all developer names, years, and National Geographic adoption years
before educator review submission]

---

## 4. Greenland-Africa Size Comparison

The visual anchor of the module. A persistent comparison panel — either
sidebar on desktop or persistent header on mobile — showing Greenland and
Africa side by side at the scale of the currently active projection.

**What it shows:**
- On Mercator: Greenland appears roughly comparable to Africa in area
- On Peters/Winkel Tripel: Africa is clearly much larger
- Labeled with actual area figures:
  - Greenland: ~2.2 million km²
  - Africa: ~30.4 million km²

**The comparison does not require calculation.** The visual shift as the
student switches between projections makes the distortion undeniable.
The area labels provide the quantitative anchor.

[VERIFY: Greenland and Africa area figures before build]

---

## 5. Going Deeper Integration

Two Going Deeper blocks are accessible from within the explorer.

**Block 1 (Mathematics):** Accessible from the Mercator panel or from
a persistent "Why does this happen?" link near the Greenland-Africa
comparison. Surfaces the Theorema Egregium reference without navigating
away from the tool.

**Block 2 (History of Cartography):** Accessible from the Robinson panel.
Surfaces the design-vs-science debate reference.

Implementation: tap the ⬡ indicator on the relevant panel to expand the
Going Deeper block inline. Tap again to collapse. Does not disrupt the
main panel interaction.

---

## 6. Interaction Model

### State 0 — Initial view
All five panels visible. No panel expanded.
Prompt above panels:
> "Five projections. One Earth. Tap each to see what it preserves —
>  and what it doesn't."

Greenland-Africa comparison visible in default state (Mercator scale).

### State 1 — Panel tapped
Active panel expands. Reveals: developer, year, defining feature,
preserves, distorts, best use.
Greenland-Africa comparison updates to reflect active projection's
area representation.
Other panels remain visible but de-emphasized.

### State 2 — Student switches panels
Previous panel collapses. New panel expands.
Greenland-Africa comparison updates.
The visual shift in the comparison is the learning moment — design
should make the transition deliberate, not instant. A brief transition
animation (~400ms) draws attention to the size change.

### State 3 — All five panels visited
After the student has tapped all five panels:
Summary prompt appears:
> "You've seen all five. The Earth didn't change.
>  Only the choices did."
Continue button: "Before the Questions" → advances to Event 2 block.

The summary prompt does not appear until all five panels have been visited.
Students can revisit panels after seeing the summary.

---

## 7. Copy — Student-Facing Strings

All copy must pass voice check against folio-voice.md before build.

**Initial prompt:**
> "Five projections. One Earth. Tap each to see what it preserves —
>  and what it doesn't."

**Greenland-Africa comparison label (default/Mercator):**
> "Greenland: ~2.2 million km²  ·  Africa: ~30.4 million km²
>  On this projection, they appear roughly the same size."

**Greenland-Africa comparison label (Peters/Winkel Tripel):**
> "Greenland: ~2.2 million km²  ·  Africa: ~30.4 million km²
>  On this projection, the size difference is visible."

**Summary prompt (after all five visited):**
> "You've seen all five. The Earth didn't change.
>  Only the choices did."

**Continue button:**
> "Before the Questions"

[All strings: PENDING voice review]

---

## 8. Design Direction

Register: Editorial. Precise. Comparative.
The five-panel layout should feel like a reference tool — something a
geographer or journalist would use to choose a projection for a specific
task. Not a slideshow. Not a quiz.

Visual treatment for panels:
- Each panel: a small representative map thumbnail + the data table
- Active panel: expands to full data; thumbnail enlarges
- Greenland-Africa comparison: persistent, updates with animation

Greenland-Africa comparison design:
- Two shapes side by side, filled with the same neutral color
- Area labels below each shape
- The shapes scale accurately to each other within the comparison panel
  (not to the world map — just to each other)
- On Mercator: the shapes are close in size
- On Peters/Winkel Tripel: Africa is dramatically larger
- The visual shift is the content — do not add explanatory text to
  the comparison itself; let the shapes speak

Going Deeper indicator:
- ⬡ symbol in Folio Depth color (#6B4EAA) on relevant panels
- Small, not prominent — rewards curiosity without demanding attention
- On tap: inline expand in Depth Tint background (#F0ECFA)

Color palette:
- Panel background: Folio Parchment (#F3F1E9)
- Active panel: white with Atlas Blue (#1A5C9E) border
- Greenland-Africa comparison: Warm Gray (#D1CFC4) shapes on white
- Going Deeper: #6B4EAA / #F0ECFA
- Continue button: Sage Teal (#1A9068)

---

## 9. Technical Requirements

- Single-file artifact (.jsx or .html)
- Five projection panels with expand/collapse interaction
- Greenland-Africa comparison: two SVG shapes that scale correctly
  relative to each other per projection (not to world map)
- Panel visit tracking: continue button only appears after all five visited
- Going Deeper blocks: inline expand/collapse, no navigation away
- No external API calls
- No user data stored
- Responsive: scrollable row on mobile (375px minimum)
- All panels keyboard navigable (tab between panels, enter to expand)
- Screen reader: each panel announces developer, year, preserves, distorts
  when expanded

---

## 10. POC Carry-Forward

The POC projection explorer contained interactions for Mercator and at
least one other projection. Before building from this spec:

- [ ] Review POC artifact for existing projection panel content
- [ ] Carry forward any approved interaction patterns from the POC
- [ ] Peters panel is new — does not exist in POC; build from this spec
- [ ] Greenland-Africa dynamic comparison is new — does not exist in POC
- [ ] Going Deeper integration is new — does not exist in POC
- [ ] Confirm POC content for existing projections is accurate before
      carrying forward — [VERIFY] as needed

---

## 11. Build Dependencies

Before building:
- [ ] All five projection data tables verified by educator
- [ ] Greenland and Africa area figures verified
- [ ] UN emblem projection verified (Azimuthal Equidistant, North Pole center)
- [ ] National Geographic adoption years verified (Robinson 1988,
      Winkel Tripel 1998)
- [ ] POC artifact reviewed for carry-forward content
- [ ] All copy strings approved through voice check
- [ ] Folio visual identity locked
- [ ] Going Deeper block content approved

---

## 12. Status

| Component | Status |
|---|---|
| Panel structure (5 projections) | Defined |
| Projection data tables | Defined — pending [VERIFY] |
| Greenland-Africa comparison | Defined — pending area verification |
| Going Deeper integration | Defined |
| Interaction model | Defined |
| Copy strings | Draft — pending voice review |
| Visual design | Direction set — not designed |
| POC review | Not yet completed |
| Code | Not built |
| Educator verification | Pending |
