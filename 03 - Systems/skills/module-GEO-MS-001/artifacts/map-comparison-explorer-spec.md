# Artifact Spec — Map Comparison Explorer
## GEO-MS-001 · What Maps Do (and Don't Do)
*Status: Stub — requires full spec before build*

---

## 1. Purpose

The Map Comparison Explorer is the primary interactive component for GEO-MS-001.
It makes the concept of selection and omission visible rather than described.
Students see two maps of the same region side by side and interact with each
to reveal what is included, what is excluded, and why those choices serve
different purposes.

This is not a quiz. It is a guided discovery step — it runs between the
concept explainer and the practice set.

---

## 2. Learning Objective Served

Students identify that two maps of the same region can tell completely
different stories based on what each includes and excludes — and that
neither is more "accurate" than the other; each is appropriate or
inappropriate for a stated purpose.

Bloom level: Understand → Apply (transition activity)

---

## 3. Design Direction

Aesthetic register: Editorial. Precise. Not playful.
This is a tool, not a game. The design should feel like a well-made
reference artifact — the kind of thing a geographer or journalist would use.

Color palette: [TO BE DEFINED — align with Folio visual identity when locked]
Typography: [TO BE DEFINED — align with Folio visual identity when locked]
Layout: Side-by-side panels on desktop; stacked panels on mobile with
        sticky comparison header visible throughout.

Animation: Reveal animations on tap/click — deliberate, not flashy.
           Fade-in for revealed content. No bounce, no celebration effects.

Accessibility: All interactive elements keyboard-navigable.
               Screen reader labels on all reveal elements.
               Color is never the sole carrier of information.

---

## 4. Content — Maps to Display

**Map Pair: The Nile River Basin**
(Promoted from GEO-MS-001 Worked Example — same geography, different purpose)

Map A: Political map of northeastern Africa
- Shows: National borders (Egypt, Sudan, Ethiopia, Uganda + others),
  capital cities, the Nile as a geographic line
- Omits: Watershed area, tributaries, drainage basin extent
- Purpose: Political reference — which governments control which territory

Map B: River basin / watershed map of the Nile
- Shows: Full watershed, all tributaries, drainage basin of 11 countries,
  sub-basins
- Omits: Precise national borders (faint reference lines only)
- Purpose: Hydrological analysis — water rights, dam impacts, resource disputes

**[VERIFY: confirm the Nile basin covers 11 countries and ~40% of Africa's
landmass before this figure is used in student-facing copy]**

---

## 5. Interaction Model

### State 0 — Initial view
Both map panels visible. No labels. No reveals.
Prompt displayed above both panels:
> "Two maps. Same place. Tap each map to see what it shows — and what it doesn't."

### State 1 — Map A tapped
Map A panel highlights. Reveal layer appears showing:
- Included features (labeled, brief)
- Omitted features (labeled, brief)
- Purpose statement: one sentence

Map B remains in neutral state.

### State 2 — Map B tapped (after Map A)
Map B panel highlights. Same reveal structure.
Map A returns to neutral (not dismissed — still visible for comparison).

### State 3 — Both revealed
Comparison summary appears below both panels:
> "Same place. Different argument. Neither map is wrong —
>  each is built for a different question."

Continue button appears → advances to Big Idea Callback (passive), then
to practice set.

### State 4 — Tap either map again
Re-reveals that map's layer. Student can toggle between revealed states
as many times as needed. No time limit. No pressure cues.

---

## 6. Copy — Student-Facing Strings

All copy must pass voice check against `references/folio-voice.md` before
build. Draft strings below are placeholders pending voice review.

**Initial prompt:**
> "Two maps. Same place. Tap each map to see what it shows — and what it doesn't."

**Map A reveal — Included:**
> "Shows: National borders, capital cities, the Nile as a geographic line."

**Map A reveal — Omitted:**
> "Leaves out: The full watershed — you can't tell from this map that
>  the Nile drains parts of eleven countries."

**Map A purpose:**
> "Built for: Political reference. Which government controls which territory."

**Map B reveal — Included:**
> "Shows: The full drainage basin — every tributary, every sub-basin,
>  the full extent of where Nile water originates."

**Map B reveal — Omitted:**
> "Leaves out: Precise national borders. Faint lines for reference only."

**Map B purpose:**
> "Built for: Hydrological analysis. Water rights, dam impacts,
>  which countries share the resource."

**Comparison summary (State 3):**
> "Same place. Different argument. Neither map is wrong —
>  each is built for a different question."

[All strings: PENDING voice review and educator verification]

---

## 7. Technical Requirements

- Single-file artifact (HTML/CSS/JS or React .jsx)
- No external API calls
- No user data stored
- Fully functional without login
- Responsive: desktop side-by-side, mobile stacked
- Keyboard accessible
- Maps: SVG or high-resolution raster
  [NOTE: Map assets not yet sourced. Options: public domain SVG maps of
  northeastern Africa; generated simplified maps for clarity. Must be
  factually accurate — [VERIFY with educator before build]]

---

## 8. Build Dependencies

Before building this artifact:
- [ ] Map assets sourced and verified (public domain or original)
- [ ] All copy strings approved through voice check
- [ ] Folio visual identity locked (colors, typography)
- [ ] Educator has verified geographic content accuracy
- [ ] Accessibility review completed

---

## 9. Status

| Component | Status |
|---|---|
| Interaction model | Defined |
| Copy strings | Draft — pending voice review |
| Map assets | Not sourced |
| Visual design | Direction set — not designed |
| Code | Not built |
| Educator verification | Pending |

*This spec is a stub. It defines the interaction model and content requirements
but is not yet ready for build. Complete all dependencies in Section 8 before
handing to Claude Code for implementation.*
