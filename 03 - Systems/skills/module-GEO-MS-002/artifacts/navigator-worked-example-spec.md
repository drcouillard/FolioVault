# Artifact Spec — Navigator Worked Example
## GEO-MS-002 · Scale: How Far Is Far?
*Promoted from POC · Status: Stub — requires full spec before build*

---

## 1. Purpose

The Navigator Worked Example is a step-by-step interactive walkthrough of
the Lisbon-to-Halifax calculation from the module spec's Section 8. It is
promoted from the Folio POC and is the conceptual anchor of GEO-MS-002.

This artifact sits after the concept explainer and before the Scale Bar Tool.
It demonstrates the full calculation procedure in a real-world context —
showing not just how to calculate, but why the skill matters.

---

## 2. Learning Objective Served

Students use a scale bar to calculate real-world distance AND evaluate
whether a given scale is appropriate for a stated purpose.

Bloom level: Apply (procedural + evaluative)

The navigator scenario adds the evaluative layer: at the end of the
calculation, the student sees why this scale (small-scale ocean chart)
is the right tool for ocean crossing — and why a large-scale harbor chart
would be needed for the final approach.

---

## 3. Design Direction

Aesthetic register: Historical + functional. Evocative but restrained.
A 19th century navigator's chart aesthetic — aged paper tones, serif
typography, compass rose detail — combined with clean modern interaction.
This is the one module artifact that earns some visual personality.
Do not make it a game. Make it feel like holding a real chart.

Color palette: Warm parchment background. Deep navy for water. Muted
              green for land. Dark ink for labels and lines.
              [Confirm against Folio visual identity when locked — this
              module may warrant a contained aesthetic departure given
              the historical framing]

Typography: A serif display font for the navigator context headers.
            The module's standard body font for explanatory text.
            [TO BE DEFINED — align with Folio visual identity]

Animation: Steps reveal in sequence — one at a time, on student advance.
           Calculation line draws onto the map as the calculation proceeds.
           Result numbers count up briefly (0 → 1,850) before settling.
           No excessive motion. Every animation serves comprehension.

---

## 4. Content — The Navigator Scenario

**Setting:** A ship navigator in the 1800s. North Atlantic. Chart of the
route from Lisbon, Portugal to Halifax, Canada.

**Scale bar:** 2 cm = 500 km (as defined in spec Section 8)
**Measured distance:** 7.4 cm on the chart

**Four steps (as per spec):**

Step 1 — Identify the scale ratio
> Scale bar: 2 cm = 500 km → 1 cm = 250 km

Step 2 — Apply the ratio
> 7.4 cm × 250 km/cm = 1,850 km

Step 3 — Interpret the result
> Straight-line distance: approximately 1,850 km
> Note: this is the great-circle distance — the shortest path across
> the curved Earth.

Step 4 — Evaluate the scale
> Is this chart the right scale for ocean crossing? Yes.
> Small-scale (large area, low detail) = correct for open ocean.
> She will switch to a large-scale harbor chart when approaching Halifax.

**The evaluative payoff (Step 4)** is what separates this from a
calculation drill. The student sees scale as a decision, not just a tool.

---

## 5. Interaction Model

### Structure: Sequential Step Reveal

The worked example is not shown all at once. Each step is revealed when
the student advances. This prevents passive reading — the student has to
actively move through the reasoning.

### State 0 — Introduction frame
Map of the North Atlantic visible. Lisbon and Halifax labeled.
Scale bar visible on the map.
Navigator's scenario text:

> "1842. A navigator is crossing the North Atlantic.
>  She has a chart — a nautical map — with a scale bar:
>  2 centimeters equals 500 kilometers.
>  She measures the distance from Lisbon to Halifax: 7.4 centimeters.
>  How far is she actually sailing?"

Advance button: "Walk through it"

### State 1 — Step 1 revealed
Step 1 header: "Find the unit rate"
> Scale bar: 2 cm = 500 km
> Per centimeter: 500 ÷ 2 = **250 km**

Visual: Scale bar highlights. Division calculation shown.
Advance button: "Next step"

### State 2 — Step 2 revealed
Step 2 header: "Apply the ratio"
> 7.4 cm × 250 km = **1,850 km**

Visual: Measurement line draws from Lisbon to Halifax.
Distance label appears on the line: 1,850 km.
Advance button: "Next step"

### State 3 — Step 3 revealed
Step 3 header: "What does that mean?"
> The straight-line distance from Lisbon to Halifax is approximately 1,850 km.
> This is the great-circle distance — the shortest path across the curved Earth.

Visual: Subtle arc on the line (great-circle suggestion — not a full
        globe, just a slight curve on the flat map indicating the path
        isn't geometrically straight on a sphere).
Advance button: "One more thing"

### State 4 — Step 4 revealed (evaluative)
Step 4 header: "Was this the right map?"
> For ocean crossing: yes.
> Small-scale maps show large areas — you can see the full route.
> When she reaches Halifax harbor, she'll switch to a large-scale chart
> that shows individual docks and coastal features.
>
> Same navigator. Same journey. Two different scales. Two different jobs.

Visual: Split-panel glimpse — the ocean chart (small-scale, full route
        visible) vs. a harbor chart thumbnail (large-scale, high detail,
        small area). The contrast makes the scale trade-off visible.

Advance button: "Now try it yourself"
→ Proceeds to Scale Bar Tool

---

## 6. Copy — Student-Facing Strings

All copy must pass voice check before build.

Key strings above are draft. Full copy review required before build.

**Note on tone:** The historical framing earns slightly more narrative
register than other module artifacts. The navigator is a real person
doing real work. The voice stays precise — it doesn't become a story.

---

## 7. Technical Requirements

- Single-file artifact (HTML/CSS/JS or React .jsx)
- Step-by-step reveal — no step skippable without reading the prior step
- Back navigation allowed (student can return to earlier steps)
- No user data stored
- Responsive: full map visible at mobile width; text wraps below
- Map asset: stylized North Atlantic with Lisbon and Halifax labeled
  [NOTE: Map asset not yet sourced — period-aesthetic map preferred;
  must be public domain or original; accuracy of coastline required]
- Calculation animation: numbers count up on result display
- Great-circle arc: SVG curve on measurement line (subtle — not dramatic)

---

## 8. Build Dependencies

Before building:
- [ ] Map asset sourced (period aesthetic, public domain or original,
      accurate coastline for North Atlantic)
- [ ] All copy strings approved through voice check
- [ ] Great-circle note verified for accuracy at 9th grade level
      [VERIFY: is "great-circle distance" the correct term for what
      a 19th century navigator would have calculated for this route?]
- [ ] Folio visual identity locked (or approved aesthetic departure noted)
- [ ] Step 4 harbor chart thumbnail — sourced or created
- [ ] Educator has verified geographic and historical accuracy

---

## 9. Status

| Component | Status |
|---|---|
| Interaction model | Defined |
| Calculation content | Defined (from spec) |
| Copy strings | Draft — pending voice review |
| Map asset (ocean chart) | Not sourced |
| Map asset (harbor thumbnail) | Not sourced |
| Visual design | Direction set — not designed |
| Code | Not built |
| Educator verification | Pending |

*[VERIFY] items for educator review:*
- *Great-circle terminology accuracy for 9th grade*
- *Historical accuracy of the 1842 navigator scenario*
- *Geographic accuracy: Lisbon-Halifax straight-line distance at given scale*
