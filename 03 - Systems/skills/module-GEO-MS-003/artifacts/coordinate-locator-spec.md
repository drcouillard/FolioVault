# Artifact Spec — Coordinate Locator
## GEO-MS-003 · Latitude & Longitude
*Status: Stub — requires full spec before build*

---

## 1. Purpose

The Coordinate Locator is the primary interactive component for GEO-MS-003.
It is a bidirectional coordinate tool: students either enter coordinates to
locate a place, or read coordinates from a placed pin. Both directions on
the same interface.

This sits between the concept explainer and the "Before the Questions" block.
It is procedural practice — the student does the work, not watches it done.

---

## 2. Learning Objectives Served

- Read coordinates in degrees and locate a point on a map (Apply)
- Write the coordinates of a given location to the nearest degree (Apply)

Bloom level: Apply (procedural, bidirectional)

---

## 3. Two Modes — Same Interface

### Mode A — Enter to Locate
Student types a coordinate pair into input fields (latitude + direction,
longitude + direction). On submit, a pin drops on the world map at the
correct location. The coordinate grid is visible on the map — student can
visually verify that the pin landed correctly.

Input format:
```
[ 34 ] [ °S ▾ ]    [ 18 ] [ °E ▾ ]
         Latitude            Longitude
                [ Locate ]
```

Direction selectors: dropdown (N / S for latitude; E / W for longitude).
Degree input: numeric field, whole numbers only at 9th grade precision.

### Mode B — Read to Write
A pin is placed on the map at a specific location. Student reads the
coordinate grid and types the coordinates into the input fields.
On submit, the tool confirms whether the reading is within ±1° of correct.
If within tolerance: confirmed. If outside: prompt to look again —
which direction did you go wrong, north-south or east-west?

The ±1° tolerance reflects 9th grade precision standard. Students are not
expected to read to the minute.

---

## 4. Map Requirements

- World map with visible coordinate grid
- Grid lines at every 30° of latitude and longitude (labeled)
- Equator and Prime Meridian visually distinct from other grid lines
  (heavier weight or different color — these are the reference lines)
- Major landmasses labeled (continents, not countries — this is a
  coordinate tool, not a political map)
- Clean, minimal — the grid is the feature, not the geography

Map asset: simplified SVG world map with coordinate grid overlay.
[NOTE: Asset not yet sourced — must be original or public domain;
geographic accuracy of major coastlines required]

---

## 5. Preloaded Practice Locations

The tool ships with five preloaded pins for Mode B practice, drawn from
the module's worked example and practice questions. Student cycles through
them in order or at random.

| Pin | Coordinates | Location |
|---|---|---|
| 1 | 34°S, 18°E | Near Cape Town, South Africa |
| 2 | 51°N, 0°W | Greenwich / London, England |
| 3 | 36°N, 140°E | Near Tokyo, Japan |
| 4 | 34°S, 58°W | Buenos Aires, Argentina |
| 5 | 8°N, 38°E | Ethiopian highlands region |

[VERIFY: all five coordinate pairs against the module spec before build]

For Mode A practice, student enters coordinates provided in the module's
micro-check 2 prompt (a city they already know) — freeform, not preloaded.

---

## 6. Feedback Copy

**Mode A — Pin placed successfully:**
> "That's [location name or region] — [latitude direction] of the equator,
>  [longitude direction] of the Prime Meridian."

**Mode B — Reading within tolerance (±1°):**
> "That's the coordinate. [Latitude value]°[N/S], [longitude value]°[E/W]."

**Mode B — Reading outside tolerance:**
> "Look again — your [latitude / longitude] is off. Check which direction
>  the [equator / Prime Meridian] is from the pin."

[All strings: PENDING voice review against folio-voice.md]

---

## 7. Design Direction

Register: Tool. Clean. Precise. Grid-forward.
The coordinate grid is the centerpiece — design should make the grid
legible and the reference lines (equator, Prime Meridian) immediately
distinguishable.

Color:
- Equator: distinct from other parallels — heavier, labeled prominently
- Prime Meridian: same treatment as equator — the two reference lines
  should read as the anchors of the system
- Pin: high contrast against both land and ocean colors
- Correct feedback: Folio Sage Teal (#1A9068)
- "Look again" feedback: Folio Warm Amber (#B56A10) — not red;
  this is redirection, not error

Layout:
- Map panel: full width on desktop, full width on mobile
- Input fields: below map on mobile, side panel on desktop
- Mode toggle (Enter to Locate / Read to Write): tab or toggle button
  above the input area

Accessibility:
- All input fields keyboard navigable
- Pin placement announced to screen reader with coordinate result
- Direction dropdowns accessible by keyboard
- Color never the sole carrier of information — labels accompany all
  color-coded feedback

---

## 8. Technical Requirements

- Single-file artifact (.jsx or .html)
- No external API calls
- No user data stored
- Responsive: 375px mobile minimum
- Coordinate input: numeric fields with direction dropdowns
- Tolerance check: ±1° on both latitude and longitude for Mode B
- SVG world map scales proportionally at all viewports
- Keyboard accessible throughout

---

## 9. Build Dependencies

Before building:
- [ ] SVG world map asset sourced (public domain or original;
      accurate coastlines; coordinate grid overlaid at 30° intervals)
- [ ] All five preloaded coordinates verified against spec
- [ ] All feedback copy strings approved through voice check
- [ ] Folio visual identity locked (colors, typography)
- [ ] Educator has verified geographic accuracy of preloaded locations

---

## 10. Status

| Component | Status |
|---|---|
| Interaction model | Defined |
| Mode A logic | Defined |
| Mode B logic | Defined |
| Preloaded locations | Defined — pending coordinate verification |
| Feedback copy | Draft — pending voice review |
| Map asset | Not sourced |
| Visual design | Direction set — not designed |
| Code | Not built |
| Educator verification | Pending |
