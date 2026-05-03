# Scale Guidelines — Geography Map Generation

**File:** `references/scale-guidelines.md`
**Belongs to:** `domain-expert-geography` skill
**Version:** 1.0
**Last Updated:** 2026-04-15
**Status:** Draft — requires human review before pipeline integration

---

## Purpose

This file defines scale selection rules and map element rendering hierarchy for all map panels generated within the `domain-expert-geography` skill. It applies to Country Profile Mode, climate map panels, physical geography panels, and any learner-facing map artifact produced by the skill or passed downstream to `ux-instructional-design`.

When generating any map panel, load this file and apply all rules before rendering or specifying output.

---

## Section 1 — Scale Category Definitions

Scale category is determined by the **geographic extent of the subject area**, not by the political classification of the territory.

| Category | Applies To | Approximate Map Extent | Example Subjects |
|---|---|---|---|
| **Continental** | Full continents or multi-country regions | Entire continent or regional bloc | Africa, Southeast Asia, the Caribbean, the EU |
| **Large Country** | Countries > ~750,000 km² OR countries with extreme internal geographic diversity | Sub-continental extent | Brazil, Russia, China, United States, Canada, Australia, India, Kazakhstan |
| **Small Country** | Countries ≤ ~750,000 km² with limited internal diversity | Country fits comfortably at moderate zoom | Portugal, Peru, Vietnam, Ghana, New Zealand |
| **Sub-national / Regional** | A named physical or cultural region within a country | Province, river basin, mountain range, etc. | The Amazon Basin, the Sahel, the Korean Peninsula, Patagonia |
| **City / Local** | Urban area or point feature | Metro area or smaller | Used rarely — flag when requested; confirm curriculum need |

> **Threshold Note:** 750,000 km² is a soft threshold, not a hard cutoff. Apply judgment when a country near the boundary has extreme internal diversity (e.g., Pakistan at ~880,000 km² qualifies as Large Country due to the Karakoram, Punjab plains, and Balochistan desert in a single frame).

---

## Section 2 — Scale Range Rules by Category

### 2.1 Continental Scale

- **Purpose:** Regional orientation; showing relative position of countries, major landforms, climate zones, and ocean context.
- **What to show:** Country borders, major physical regions (mountain ranges, deserts, river basins), coastlines, regional climate zones.
- **What to omit at this scale:** City-level labels (capitals only), internal administrative borders, small island territories (note in legend instead), detailed river tributaries.
- **Learner expectation:** Students should be able to orient themselves — identify where the continent sits globally and what the dominant physical geography is.
- **Aspect ratio guidance:** Match the natural bounding box of the continent; do not force a square frame that distorts East-West or North-South extent.

### 2.2 Large Country Scale

- **Purpose:** Showing internal geographic diversity — how climate, landforms, population, and resources vary within a single large political unit.
- **What to show:** Internal regions/provinces (lightly), major river systems, mountain ranges, dominant climate zones by internal region, capital city plus the 5 most populous cities (if the capital is among the 5 most populous, include the next city by population for a total of 6), neighboring country context strip at edges.
- **What to omit at this scale:** Street-level or city-level detail, every city label, granular administrative subdivisions, electoral district boundaries.
- **Learner expectation:** Students should be able to identify distinct internal geographic regions (e.g., "Northern China vs. Southern China") and explain how physical geography drives those differences.
- **Special rule:** For countries with island territories (e.g., the U.S., France, Australia), show a primary map of the mainland plus an inset panel for island territories — do not attempt to fit both at the same scale.

### 2.3 Small Country Scale

- **Purpose:** Detailed country overview — landforms, climate, major cities, bordering countries, and coastline features.
- **What to show:** Capital city plus the 5 most populous cities (if the capital is among the 5 most populous, include the next city by population for a total of 6), full river and lake system, mountain ranges and plains, climate zone boundaries, neighboring countries labeled, coastline detail.
- **What to omit at this scale:** Every town label, fine-grain road network, electoral subdivisions.
- **Learner expectation:** Students should be able to describe the physical layout of the country and link physical features to human geography (e.g., where population clusters and why).

### 2.4 Sub-national / Regional Scale

- **Purpose:** Focus on a named physical or cultural region that crosses or sits within national borders.
- **What to show:** The physical feature or region in full, political borders for context (do not omit — political context matters), river systems, elevation relief, settlement patterns within the region.
- **Flag requirement:** If the region involves any disputed territory, apply the standard ⚠️ Political Sensitivity flag immediately. Do not label disputed areas with a single country name.
- **Learner expectation:** Students should understand the region as a geographic unit distinct from (but situated within) political units.

---

## Section 3 — Map Element Rendering Hierarchy

Apply this hierarchy to all map panels. Higher-priority elements are rendered more prominently and are never visually suppressed by lower-priority elements.

| Priority | Element | Rendering Weight | Notes |
|---|---|---|---|
| 1 | **Political borders** | **Dominant** — solid line, highest contrast | Always visible; establish spatial context first |
| 2 | **Coastlines and water bodies** | **Dominant** — ocean fill distinguishes land mass | Oceans: consistent fill color; rivers/lakes: distinct from ocean |
| 3 | **Major rivers and lakes** | **Mild** — medium weight, distinct from borders | Rivers scale with map scale — show only rivers appropriate to zoom level |
| 4 | **Landforms** (mountains, plains, deserts) | **Mild** — elevation tint or relief shading, never overpowering | Shading should support reading borders and labels, not compete |
| 5 | **Climate zone overlays** | **Mild** — semi-transparent fill | Load from `references/climate-map-overlays/`; must not obscure borders or labels |
| 6 | **Fault lines** | **Subdued** — dashed or dotted line, low contrast | Show only when tectonic activity is relevant to the lesson objective |
| 7 | **Volcano fields / active volcanoes** | **Subdued** — small symbol, legend required | Show only when volcanic geography is the content focus |
| 8 | **City labels and points** | Scaled to category (see Section 2) | Capitals always labeled; additional cities by scale category |

### Rendering Rules

- **Never let a lower-priority element visually dominate a higher-priority element.** Climate overlays that obscure borders are a rendering failure.
- **Label contrast is non-negotiable.** Any label must have sufficient contrast against whatever fill is beneath it. If a climate zone color conflicts with a label, lighten the overlay — do not remove the label.
- **Fault lines and volcano fields are opt-in.** They are not included by default. They are added when the learning objective specifically involves tectonic geography. Do not add them as decoration.
- **Legend is required** whenever fault lines, volcano fields, or climate zone overlays appear. A map with unlabeled symbols is inaccessible.

---

## Section 4 — Unit Display Rules

- **Temperature:** Primary unit is **°C** (Celsius) for climate panels, consistent with international geographic convention and NCGE materials.
- **Alternate unit:** **°F** (Fahrenheit) should be displayed as a secondary value in parentheses for all temperature references — format: `24°C (75°F)` — to maintain accessibility for U.S.-context learners.
- **Elevation:** Primary unit is **meters (m)**. Display feet in parentheses for significant peaks — format: `8,849 m (29,032 ft)`.
- **Area:** Primary unit is **km²**. Square miles in parentheses when explicitly required by the lesson context.
- **Distance / scale bar:** Always metric primary. Imperial secondary in parentheses when a scale bar is shown.

---

## Section 5 — Country Profile Integration

When `domain-expert-geography` is operating in **Country Profile Mode**, apply this checklist before generating any map panel:

- [ ] Determine subject area extent → assign scale category (Section 1)
- [ ] Select correct scale range rules (Section 2)
- [ ] Apply element hierarchy (Section 3)
- [ ] Load climate overlay from `references/climate-map-overlays/` for the subject region
- [ ] Apply °F as alternate temperature unit (Section 4)
- [ ] Check for fault lines or volcano fields — include only if tectonic content is in-scope for this profile
- [ ] Apply ⚠️ Political Sensitivity flag if the country or any bordering feature is disputed territory
- [ ] Include legend for any overlay, fault line, or volcano symbol used

---

## Section 6 — Failure Modes and Mitigations

| Failure Mode | Description | Mitigation |
|---|---|---|
| **Scale mismatch** | Using continental scale for a small country, making features unreadable | Always assign scale category before rendering; match to subject extent |
| **Border suppression** | Climate overlay fills obscure country or regional borders | Reduce overlay opacity; borders are Priority 1 — never hidden |
| **Label collision** | City labels overlap with physical feature labels or overlay fills | Cap label count by scale category; increase contrast; do not auto-label all cities |
| **Unlabeled symbols** | Fault lines or volcanoes added without a legend | Fault lines and volcanoes require legend entries; never render without one |
| **Island territory omission** | Large countries with island territories shown as mainland only with no acknowledgment | Use inset panel; note territories in legend |
| **Disputed border claim** | A contested border is drawn as settled | Always use ⚠️ Political Sensitivity flag; present as "claimed by / administered by" |
| **Temperature unit exclusion** | Only °C shown; U.S.-context learners lack reference | Always include °F in parentheses alongside °C |

---

## Section 7 — Version and Maintenance

| Field | Value |
|---|---|
| **File Version** | 1.0 |
| **Created** | 2026-04-15 |
| **Reviewed By** | [FILL — assign before pipeline integration] |
| **Update Triggers** | New map panel types added to the skill; changes to climate overlay structure; changes to country-profile-rubric.md that affect map fields |
| **Review Cadence** | Review when `domain-expert-geography` skill version increments |
| **Paired Files** | `references/country-profile-rubric.md`, `references/climate-map-overlays/`, `references/base-maps/` |

---

> **Integration Note:** This file is a Blueprints layer document per the DBS framework. It is loaded on demand by `domain-expert-geography` whenever a map panel is generated — not at skill activation. The SKILL.md Direction file must include an explicit pointer to this file at the map generation step.
