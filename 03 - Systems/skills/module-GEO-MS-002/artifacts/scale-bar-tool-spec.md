# Artifact Spec — Scale Bar Tool
## GEO-MS-002 · Scale: How Far Is Far?
*Status: Stub — requires full spec before build*

---

## 1. Purpose

The Scale Bar Tool is an interactive measurement artifact embedded in
GEO-MS-002. Students use it to practice the core procedural skill of the
module: using a map's scale bar to calculate real-world distance.

This is not a quiz. It is a guided practice tool — it sits between the
concept explainer and the formal practice set, after Micro-check 2.

---

## 2. Learning Objective Served

Students use a scale bar to calculate the real-world distance between
two points on a map.

Bloom level: Apply (procedural execution)

---

## 3. Design Direction

Aesthetic register: Tool. Utilitarian. Precise.
This should feel like a real instrument, not a game element.
Think: a well-designed ruler or drafting tool digitized.

Color palette: [TO BE DEFINED — align with Folio visual identity]
Typography: [TO BE DEFINED — align with Folio visual identity]
Layout: Map panel (left or top) + measurement panel (right or bottom)
        Mobile: stacked, measurement panel below map

Animation: Measurement line draws itself as student drags.
           Calculation result fades in after measurement is released.
           No celebratory effects.

Accessibility: Keyboard mode available (tab to start point, tab to
               end point, enter to measure). Screen reader announces
               result. Color not the sole carrier of information.

---

## 4. Content — Map and Scale Bar

**Map to use:** A simplified map segment showing two clearly labeled cities
with a visible scale bar.

**Recommended geography:** A segment of the North Atlantic coast showing
Lisbon, Portugal and Halifax, Canada — connecting to the Navigator Worked
Example in the same module. Reinforces the same geography, different skill.

Alternative: Any two real cities with a known straight-line distance that
can be verified. Must be real geography — no fictional places.

**Scale bar requirements:**
- Clearly labeled segments
- At minimum: two labeled distances (e.g., 0 km and 500 km)
- Segment length readable at both desktop and mobile resolutions

**[VERIFY: straight-line map distance between Lisbon and Halifax at the
scale used — confirm calculation is consistent with spec worked example
before build]**

---

## 5. Interaction Model

### State 0 — Initial
Map visible with scale bar. Two labeled city points visible.
Measurement line not yet drawn.

Prompt:
> "Use the scale bar to find the distance between these two cities.
>  Click and drag from one point to the other."

### State 1 — Dragging
Measurement line draws in real time as student drags from city A to city B.
Line snaps to city points when cursor is within proximity.
Scale bar highlights in sync — shows how many segments the measured
distance represents.

### State 2 — Measurement released
Line locks. Calculation panel activates.
Shows:
- Map distance (in cm or the tool's internal unit)
- Scale bar ratio
- Step-by-step calculation (map distance × scale = real distance)
- Real-world result in kilometers

Step-by-step calculation is always shown — not just the result.
This reinforces the procedure, not just the answer.

### State 3 — Result displayed
Result shown. Student can:
- Reset and measure again (useful if they missed a city point)
- Proceed to practice set (button appears after first successful measurement)

Proceed button copy:
> "Now try it on your own."

---

## 6. Calculation Display Format

```
Your measurement:     [X] cm on the map
Scale bar:            [Y] cm = [Z] km
Per-centimeter value: [Z/Y] km per cm
Your distance:        [X] × [Z/Y] = [RESULT] km
```

Always show the per-centimeter step. This is the step students most
often skip — making it visible builds the habit.

---

## 7. Copy — Student-Facing Strings

All copy must pass voice check before build.

**Initial prompt:**
> "Use the scale bar to find the distance between these two cities.
>  Click and drag from one point to the other."

**During drag:**
> [no text — let the interaction speak]

**After measurement — result panel header:**
> "Here's what the scale bar tells you:"

**Proceed button:**
> "Now try it on your own."

**Reset link:**
> "Measure again"

[All strings: PENDING voice review]

---

## 8. Technical Requirements

- Single-file artifact (HTML/CSS/JS or React .jsx)
- No external API calls
- No user data stored
- Responsive: map + measurement panel side by side on desktop;
  stacked on mobile
- Drag interaction works on touch (mobile) and mouse (desktop)
- City snap zones: ~20px radius around labeled points
- Keyboard accessible alternative: tab between start/end points,
  enter to confirm
- Map asset: simplified SVG or raster of North Atlantic
  [NOTE: Map asset not yet sourced — must be public domain or original]

---

## 9. Build Dependencies

Before building:
- [ ] Map asset sourced and verified (public domain or original)
- [ ] Scale bar proportions confirmed against worked example calculation
- [ ] All copy strings approved through voice check
- [ ] Folio visual identity locked
- [ ] Educator has verified geographic content accuracy

---

## 10. Status

| Component | Status |
|---|---|
| Interaction model | Defined |
| Calculation logic | Defined |
| Copy strings | Draft — pending voice review |
| Map asset | Not sourced |
| Visual design | Direction set — not designed |
| Code | Not built |
| Educator verification | Pending |
