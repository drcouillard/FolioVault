# GEO-MS-004 — Module Spec
## Map Projections: Every Map Lies
*Chapter 1: Map Skills & Spatial Thinking · 9th Grade · Third Tool Module*
*Status: Alpha — Awaiting Educator Verification*

---

## Section 1 — Module Identity

| Field | Value |
|---|---|
| Module ID | GEO-MS-004 |
| Unit | Chapter 1 — Map Skills & Spatial Thinking |
| Grade Band | 9th Grade |
| Content Status | Alpha — Awaiting Educator Verification |
| Module Position | Fourth module — Third Tool Module |
| Prerequisites | GEO-MS-001, GEO-MS-002, GEO-MS-003 must be complete |
| Content Type | Conceptual-Principle (Smith & Ragan) |
| Bloom Target | Analyze (primary) · Apply (selection questions) |
| Spiral Questions | 3 (GEO-MS-001 ×1, GEO-MS-002 ×1, GEO-MS-003 ×1) |
| New Concept Questions | 7 |
| Total Questions | 10 (range: 7–13, coverage-driven) |
| Mastery Threshold | 7/10 (70%) |
| Estimated Time | 35–40 minutes |
| Interactive Artifact | 1 — Projection Explorer (promoted from POC, expanded) |
| Going Deeper Blocks | 2 (stubbed — see Section 11) |

---

## Section 2 — Enduring Understanding & Acceptable Evidence

**Enduring Understanding:**
Every map projection is a controlled distortion. There is no projection that preserves all four properties — area, shape, distance, and direction — simultaneously. Choosing a projection is choosing which distortion to accept in exchange for which accuracy. The question is never "which map is right." It is always "which distortion serves the purpose."

**Acceptable Evidence:**
A student can identify which property a named projection preserves and which it distorts, explain why flattening a sphere requires distortion, evaluate the Mercator-Peters debate as a substantive disagreement rather than a simple error correction, and select an appropriate projection for a described mapping purpose — with reasoning.

---

## Section 3 — Wonder Hook

**Hook type:** Contradiction
**ARCS condition:** Attention

> Pull an orange. Peel it. Now try to lay the peel flat on a table without tearing it.
>
> You can't — not without stretching it, ripping it, or leaving gaps. That's not a problem with how you peeled it. It's a mathematical fact: a curved surface cannot be flattened without distortion. Every world map is a solution to that problem. None of them solve it perfectly.

**Relevance hook (ARCS: Relevance):**
The map projection you grew up looking at made some countries look bigger than they are and some smaller. This module explains why — and what to do about it.

---

## Section 4 — Concept Explainer

### The Geometry of the Problem

A sphere has what mathematicians call intrinsic curvature. Carl Friedrich Gauss proved in 1827 that this curvature cannot be removed by bending or flattening — it is a property of the surface itself. [VERIFY: Gauss Theorema Egregium date] The practical consequence: any flat map of the spherical Earth must distort something.

Four properties can be distorted. Every projection distorts at least one:

- **Area** — relative sizes of regions
- **Shape** — the outline of land masses and features
- **Distance** — the measured distance between two points
- **Direction** — compass bearings between locations

A projection that preserves one of these properties must sacrifice at least one other. There is no exception to this rule.

### The Mercator Projection

Gerardus Mercator published his projection in 1569. Its defining feature: straight lines on the map correspond to constant compass bearings. A navigator who draws a straight line between two ports and measures the angle gets the actual compass bearing to follow. [VERIFY: Mercator publication date]

This made Mercator indispensable for ocean navigation. It remains the standard for nautical charts and is the default projection for most digital mapping services.

The cost: area distortion that compounds dramatically toward the poles. Greenland appears roughly the size of Africa on a Mercator map. Africa is approximately fourteen times larger. [VERIFY: Africa/Greenland size ratio] Scandinavia appears larger than India. India is actually larger. [VERIFY: India/Scandinavia size comparison] The distortion is not random — it systematically enlarges high-latitude regions and makes equatorial regions appear smaller than they are.

### The Gall-Peters Projection

Arno Peters promoted an equal-area projection in 1973, presenting it as a corrective to Mercator's distortions. [VERIFY: Peters promotion date] The Gall-Peters projection — James Gall had designed a similar projection earlier [VERIFY: Gall date] — preserves relative area. Countries appear at their correct sizes relative to each other.

The cost: shape distortion. Landmasses are stretched vertically near the equator and compressed near the poles, giving familiar countries unfamiliar outlines. Africa looks elongated. Europe looks compressed.

The Mercator-Peters debate is not simply a story of error and correction. Mercator's projection was designed for a purpose it serves well. Peters' criticism was that Mercator had been adopted for general reference maps — purposes it was never designed for — and that this adoption had political consequences, making wealthy high-latitude countries appear larger and poorer equatorial countries appear smaller. That critique is substantive, regardless of whether one endorses the Peters projection as the solution.

### Other Projections Worth Knowing

**Robinson Projection** — Developed by Arthur Robinson in 1963 for Rand McNally. [VERIFY: Robinson date and commissioner] Designed by working backward from visual appearance to mathematical formula — Robinson wanted a map that looked balanced, then derived the math to achieve it. Used by National Geographic from 1988 to 1998. Distorts all four properties moderately; prioritizes visual coherence over precision in any single dimension.

**Azimuthal Equidistant Projection** — Preserves accurate distances and directions from a single center point. Everything measured *from* the center is accurate; measurements between two non-center points are distorted. Used for the United Nations emblem, centered on the North Pole. [VERIFY: UN emblem projection and center point]

**Winkel Tripel Projection** — Designed by Oswald Winkel in 1921. [VERIFY: Winkel Tripel date] "Triple compromise" — minimizes total distortion across area, shape, and distance simultaneously rather than optimizing for any one. No property is fully preserved, but aggregate error is lower than most alternatives. Adopted by National Geographic in 1998 as their standard world map. [VERIFY: National Geographic Winkel Tripel adoption year] Currently the strongest general-purpose choice for classroom and reference use.

| Projection | Preserves best | Distorts most | Best use |
|---|---|---|---|
| Mercator | Direction (compass bearings) | Area — severely near poles | Navigation; compass-bearing routes |
| Gall-Peters | Area (relative size) | Shape | Size comparison; development maps |
| Robinson | Visual balance | All four — moderately | General reference (pre-1998) |
| Azimuthal Equidistant | Distance + direction from center | Area + shape away from center | Relationships to one fixed point |
| Winkel Tripel | Minimized total distortion | All four — minimally | General reference; current standard |

### The GEO-MS-003 Connection

Coordinate grids behave differently on different projections. On a Mercator map, latitude and longitude lines form a perfect right-angle grid. On a Winkel Tripel, longitude lines curve. The coordinates themselves don't change — 34°S, 18°E is the same location regardless of projection — but where that point appears on the map, and what distortions surround it, depends entirely on the projection. Reading coordinates and understanding projections are the same skill seen from two directions.

---

## Section 5 — Worked Example

**The scenario:** A nonprofit organization is creating two maps for a report on global deforestation. Map 1 will show which regions are losing forest at the highest rates — readers need to compare regional sizes accurately. Map 2 will be used by field teams navigating to specific survey sites by compass bearing.

**Step 1 — Identify what each map needs to preserve.**
Map 1 needs accurate area — if high-deforestation regions appear larger or smaller than they are, the comparison is misleading. Map 2 needs accurate direction — compass bearings must correspond to straight lines on the map.

**Step 2 — Identify which projection serves each need.**
Area preservation → Gall-Peters or a similar equal-area projection.
Direction preservation → Mercator.

**Step 3 — Name the trade-off explicitly.**
The Gall-Peters map will distort the shapes of countries — familiar outlines will look unfamiliar. The nonprofit should note this for readers. The Mercator map will distort area, making high-latitude survey regions appear larger than equatorial ones — field teams should know not to use it for size comparisons.

**Step 4 — Evaluate the choice.**
Two maps, two projections, two purposes. Neither projection is wrong. Each is wrong for the other map's purpose. The decision was made by identifying the task first, then selecting the projection that serves it — not by picking a "correct" projection.

---

## Section 6 — Before the Questions

*Placed after worked example, before practice set. Not a numbered section — visual break.*

Here's what this module covers:

- Every map projection distorts something — area, shape, distance, or direction — because a curved surface cannot be flattened without distortion
- Mercator preserves compass bearings (direction); it distorts area severely near the poles
- Gall-Peters preserves area (relative size); it distorts shape
- Winkel Tripel minimizes total distortion across all four properties — the current general-purpose standard
- Projection selection is a reasoning task: identify what the map needs to preserve, then choose the projection that preserves it

---

## Section 7 — Big Idea Callback (Passive)

*Placed mid-module, after concept explainer, before worked example.*

> What's the big idea here? There is no honest world map. Every projection makes a choice about which lie to tell — distort the size, or distort the shape, or distort the distance, or distort the direction. The mapmaker who says "my map is accurate" is telling you which distortion they chose, not that they escaped the geometry. You can't escape the geometry. The orange peel tears.

---

## Section 8 — Micro-Checks (2, inline, no stakes)

**Micro-check 1** — Placed after "The Geometry of the Problem," before the Mercator section.

> Name the four properties that a map projection can distort. You've just read them — try to list them without looking back.

*No submission. No score. Activates recall before the projection-specific content begins.*

**Micro-check 2** — Placed after the projection comparison table, before the worked example.

> A classmate says: "The Peters projection is more accurate than Mercator, so we should always use Peters."
>
> What's incomplete about that claim?

*No submission. No score. Students reason through the trade-off before the worked example models it.*

---

## Section 9 — Practice Question Set

**Total questions:** 10
**Spiral questions:** 3 (GEO-MS-001 ×1, GEO-MS-002 ×1, GEO-MS-003 ×1)
**New concept questions:** 7
**Bloom distribution:** Remember ×1, Understand ×3, Analyze ×2, Apply ×4
**Mastery threshold:** 7/10

**Note on Analyze-level questions (Q5, Q8):** First Analyze-level questions in Chapter 1. Feedback for these questions must hold the complexity — do not simplify the Mercator-Peters debate into a verdict. Q8 specifically: both the cartographic and political dimensions of the debate have merit. Feedback for wrong answers to Q8 must acknowledge that complexity rather than collapsing it.

---

**Q1** `[NEW]` `[Bloom: Remember]` `[Sub-objective: Four distortable properties]`

Which of the following lists all four properties that a map projection can distort?

A) Color, scale, legend, and border
B) Area, shape, distance, and direction ✓
C) Latitude, longitude, elevation, and temperature
D) Size, position, detail, and resolution

**Diagnostic feedback — A:**
Color, scale, legend, and borders are features of map design — but they're not what projection distorts. Projection distortion is about geometric properties of the Earth's surface as represented on a flat map. What are the four geometric properties that change when a sphere is flattened?

**Diagnostic feedback — C:**
Latitude and longitude are coordinates — they identify locations, but they're not properties that projection distorts in itself. Elevation and temperature are data layers, not geometric properties. Think about what happens physically when you try to flatten a curved surface. What properties of that surface are affected?

**Diagnostic feedback — D:**
"Size" is close to area, and "position" is related to direction — but the standard terms are more precise. "Detail" and "resolution" relate to scale, not projection. What are the four geometric properties that every map projection must choose how to handle?

---

**Q2** `[NEW]` `[Bloom: Understand]` `[Sub-objective: Why distortion is unavoidable]`

Why is it impossible to create a flat map of the Earth that preserves all four properties — area, shape, distance, and direction — simultaneously?

A) Mapmaking technology is not yet advanced enough to achieve full accuracy
B) The Earth is too large for any single map to capture completely
C) A sphere has intrinsic curvature that cannot be removed by flattening — distortion is a mathematical consequence, not a technical limitation ✓
D) International mapping standards require projections to prioritize one property over others

**Diagnostic feedback — A:**
This isn't a technology problem — it's a geometry problem. No improvement in computing power or measurement precision can solve it, because the constraint is mathematical, not technical. Gauss proved in 1827 that a sphere's curvature cannot be removed by flattening. What does that mathematical fact mean for any attempt to make a flat map?

**Diagnostic feedback — B:**
The Earth's size isn't the constraint — you could make a flat map the size of a football pitch and still face the same problem. The issue is shape, not scale. What property of a sphere makes it impossible to flatten without distortion, regardless of how large the map is?

**Diagnostic feedback — D:**
No international standard requires projection trade-offs — the trade-offs are required by geometry itself. Standards govern conventions like coordinate systems and datums, not the mathematical impossibility of distortion-free flattening. What does the geometry of a sphere require when it is flattened?

---

**Q3** `[NEW]` `[Bloom: Understand]` `[Sub-objective: Mercator mechanics and purpose]`

The Mercator projection was designed primarily for which purpose?

A) Showing the relative sizes of continents accurately
B) Ocean navigation — straight lines on the map correspond to constant compass bearings ✓
C) Displaying population distribution across the world
D) Minimizing visual distortion at the poles

**Diagnostic feedback — A:**
Mercator does the opposite of this — it distorts area severely, especially near the poles, making high-latitude regions appear much larger than they are. A navigator sailing from London to New York doesn't need accurate continent sizes. What does a navigator need a map to preserve?

**Diagnostic feedback — C:**
Population distribution maps use thematic projections designed to show area accurately — Mercator's area distortion would systematically misrepresent population density near the poles. Mercator was designed for a specific navigational task. What property does it preserve that makes navigation possible?

**Diagnostic feedback — D:**
Mercator maximizes distortion at the poles — Greenland appears roughly the size of Africa on a Mercator map. Minimizing polar distortion is actually what projections like Winkel Tripel aim for. What did Mercator deliberately preserve, and what did he accept losing?

---

**Q4** `[NEW]` `[Bloom: Understand]` `[Sub-objective: Peters mechanics and debate]`

Arno Peters promoted his equal-area projection as a corrective to the Mercator. Which statement most accurately describes the Peters projection and the debate around it?

A) Peters projection is objectively more accurate than Mercator — it should replace Mercator for all uses
B) Peters projection preserves area at the cost of shape distortion; the debate is about whether Mercator's adoption for general reference was appropriate, not whether Mercator is useful for navigation ✓
C) Peters projection is identical to Mercator but oriented differently
D) Peters projection was discredited by cartographers and is no longer used

**Diagnostic feedback — A:**
"More accurate" depends on the task. Peters preserves area — which makes it more accurate for size comparison. Mercator preserves compass bearings — which makes it more accurate for navigation. Neither is universally more accurate. What does the Peters projection preserve, and what does it sacrifice?

**Diagnostic feedback — C:**
Peters and Mercator are mathematically distinct projections with different properties. Peters is an equal-area projection; Mercator is a conformal (shape-preserving at local scale) projection used for navigation. They produce very different-looking maps with different distortion profiles. What does each projection preserve?

**Diagnostic feedback — D:**
The Peters projection is still in use — it appears in development organization reports, educational materials, and contexts where showing countries at their correct relative sizes matters. The debate about it is ongoing in cartographic circles. What does the Peters projection do well that keeps it in use?

---

**Q5** `[NEW]` `[Bloom: Analyze]` `[Sub-objective: Mercator vs. Peters trade-off — evaluative]`

A student argues: "The Mercator projection is simply wrong — Peters proved that it distorts Africa and should be abandoned."

Which response best evaluates this claim?

A) The student is correct — Mercator's area distortion makes it factually inaccurate and therefore invalid
B) The student is incorrect — Mercator is perfectly accurate for all mapping purposes
C) The student's claim is partially justified but overstated — Mercator distorts area but remains the appropriate tool for navigation, while the legitimate critique concerns its adoption for general reference purposes where area accuracy matters ✓
D) The student is correct — Peters projection is universally superior to Mercator

**Diagnostic feedback — A:**
Mercator is accurate for its intended purpose — compass bearing navigation. A map can be accurate for one task and distorting for another. The claim that area distortion makes Mercator "invalid" ignores what Mercator was designed to do. What was Mercator designed for, and what does it do accurately?

**Diagnostic feedback — B:**
Mercator does distort area significantly — this is not in dispute. The question is whether that distortion makes it wrong *for all purposes* or wrong *for specific purposes*. For ocean navigation, Mercator's compass accuracy is exactly what's needed. For showing Africa's size relative to Greenland, it fails. How should the validity of a projection be evaluated?

**Diagnostic feedback — D:**
Peters preserves area at the cost of shape distortion. For navigation, Peters is less useful than Mercator — compass bearings don't correspond to straight lines on a Peters map. "Universally superior" isn't achievable for any projection because each preserves some properties at the cost of others. What does "superior" mean when every projection distorts something?

---

**Q6** `[NEW]` `[Bloom: Apply]` `[Sub-objective: Projection selection for purpose]`

A relief organization is mapping the distribution of malaria cases across sub-Saharan Africa. The map will be used to compare which countries have the highest case rates relative to their population and land area.

Which projection is most appropriate?

A) Mercator — because it is the most widely recognized projection
B) An equal-area projection such as Gall-Peters — because accurate relative sizes are essential for the comparison ✓
C) Azimuthal Equidistant — because it preserves distances from a central point
D) Mercator — because its grid lines make coordinates easy to read

**Diagnostic feedback — A:**
Wide recognition doesn't make a projection appropriate for a task. Mercator distorts area severely — countries near the equator (where malaria is concentrated) appear smaller relative to high-latitude countries than they actually are. Would a map that shrinks the regions of interest serve the comparison?

**Diagnostic feedback — C:**
Azimuthal Equidistant preserves distances from a single center point — useful for showing how far places are from one location. For comparing case rates across a region, relative land areas need to be accurate. Which property matters most for this comparison?

**Diagnostic feedback — D:**
Easy coordinate reading is useful, but it doesn't justify Mercator for this task. The grid structure doesn't change the area distortion. If sub-Saharan countries appear smaller than they are, comparing case rates per land area produces misleading results. What property does this comparison require the map to preserve?

---

**Q7** `[NEW]` `[Bloom: Apply]` `[Sub-objective: Projection selection for purpose]`

An airline wants to create a route map showing the flight path from Los Angeles to Tokyo. The map must allow passengers to follow the route using a compass bearing.

Which projection should the airline use?

A) Gall-Peters — because it preserves area
B) Winkel Tripel — because it minimizes total distortion
C) Mercator — because straight lines on a Mercator map correspond to constant compass bearings ✓
D) Robinson — because it provides the most visually balanced appearance

**Diagnostic feedback — A:**
Area preservation doesn't help a passenger follow a compass bearing. On a Gall-Peters map, a straight line does not correspond to a constant compass direction. Which projection property does this task require?

**Diagnostic feedback — B:**
Winkel Tripel minimizes total distortion across all properties — a strong general-purpose choice. But "minimized distortion" doesn't mean compass bearings are accurate. For this specific task, which projection was specifically designed to make compass bearings readable as straight lines?

**Diagnostic feedback — D:**
Robinson was designed for visual balance and general reference use — not for navigational accuracy. Compass bearings don't correspond to straight lines on a Robinson map. Which projection was historically developed specifically for navigation?

---

**Q8** `[SPIRAL: GEO-MS-001 — Map as argument]` `[Bloom: Analyze]`

A cartographer argues that the widespread use of Mercator projections in schools has had political consequences — making wealthy, high-latitude countries (Europe, North America, Russia) appear larger and poorer, equatorial countries appear smaller than they actually are.

Which response best evaluates this argument?

A) The argument is invalid — projection choice is a technical decision, not a political one
B) The argument is valid — Mercator was designed as a political tool to make wealthy countries look powerful
C) The argument has cartographic and political dimensions that are both worth taking seriously — Mercator distorts area in ways that systematically affect how regions are perceived, even if the projection was not designed with political intent ✓
D) The argument is invalid — equal-area projections have been available for decades, so anyone who wants accurate sizes can find them

**Diagnostic feedback — A:**
Technical decisions can have political consequences without being made with political intent. Mercator's area distortion is a geometric fact — and if that distortion consistently enlarges wealthy high-latitude regions, the effect on how those regions are perceived is real, regardless of whether the mapmaker intended it. Can a technical choice have political effects?

**Diagnostic feedback — B:**
Mercator was designed for ocean navigation — compass bearing accuracy was the goal, not political representation. Attributing deliberate political intent to Mercator is not supported by the history. But that doesn't mean the consequences are neutral. What is the difference between designed intent and actual effect?

**Diagnostic feedback — D:**
Availability of alternatives doesn't resolve the question of what has been widely used and why. The argument is about the consequences of adoption patterns — why Mercator became the default for general reference when it was designed for navigation. Whether alternatives exist is a separate question from whether the dominant projection's effects matter.

---

**Q9** `[SPIRAL: GEO-MS-003 — Meridian convergence]` `[Bloom: Apply]`

On a Mercator projection, lines of longitude appear as straight vertical lines, equally spaced from left to right. A student uses this map to measure the distance between two cities at 70°N latitude that appear 3 centimeters apart.

Why will her measurement be less accurate than the same measurement made at the equator?

A) The scale bar on Mercator maps only works at the equator
B) Cities at high latitudes are harder to see on maps
C) Mercator's area distortion stretches high-latitude regions, so the same map distance represents a shorter real-world distance than the scale bar suggests ✓
D) Longitude lines at 70°N are actually closer together in reality, so the map distance exaggerates the real distance

**Diagnostic feedback — A:**
Scale bars on Mercator maps are typically calibrated for a standard latitude — but the issue isn't the scale bar itself. The issue is that the map has stretched the region around 70°N. What does Mercator's area distortion do to the apparent size of high-latitude regions?

**Diagnostic feedback — B:**
Visibility isn't the problem — 70°N cities appear clearly on Mercator maps, often larger than their real size would suggest. The measurement problem is geometric. What does Mercator do to the size of high-latitude regions relative to equatorial regions?

**Diagnostic feedback — D:**
You're on the right track — longitude lines do converge near the poles in reality, meaning the real distance between them shrinks. Mercator spreads them out to maintain straight parallel lines, which *enlarges* the apparent distance, not exaggerates it in the opposite direction. If Mercator makes the region appear larger than it is, what does that do to a distance measurement within that region?

---

**Q10** `[SPIRAL: GEO-MS-002 — Scale as constraint]` `[Bloom: Apply]`

A student wants to create a single map that accurately shows both the relative sizes of all continents and the compass bearings between major ports.

Her teacher says: "You can't do both on one map."

Is the teacher correct?

A) No — modern mapping software can produce projections that preserve both area and direction simultaneously
B) Yes — no projection can preserve both area and accurate compass bearings simultaneously; the student needs two maps for two purposes ✓
C) No — the Winkel Tripel projection preserves both area and direction accurately
D) Yes — but only because compass bearings require a scale that is too large to show all continents

**Diagnostic feedback — A:**
This is a geometry problem, not a software problem. No mapping software — however sophisticated — can flatten a sphere without distortion, and no projection can preserve both area and compass bearings simultaneously. Gauss proved that the curvature of a sphere is intrinsic and cannot be removed. What does that mean for any projection?

**Diagnostic feedback — C:**
Winkel Tripel minimizes total distortion across all properties — it is a strong general-purpose projection. But minimizing distortion is not the same as eliminating it. Winkel Tripel does not preserve compass bearings as straight lines, and its area representation is approximate, not exact. What does "minimized distortion" mean compared to "preserved property"?

**Diagnostic feedback — D:**
Scale and projection are separate constraints. A Mercator map can be made at any scale — continental or street-level — and compass bearings will still correspond to straight lines. The constraint here isn't scale; it's the mathematical impossibility of preserving both area and direction on the same projection. What geometric fact makes this impossible?

---

## Section 10 — Big Idea Callback (Active — EIB Prompt)

*Placed at end of module, after practice set.*

> What's the big idea here? Your team has been asked to present a project on global shipping routes. You need to pick one map projection to use in your presentation.
>
> Walk through it:
> 1. Which projection would you choose — and what does it get right for this task?
> 2. What does your chosen projection distort — and does that distortion matter for shipping routes specifically?
> 3. How would you explain that trade-off to your group if someone pushed back and said: "Can't we just use a more accurate map?"
>
> There's no single right answer. The reasoning is the evidence.

**EIB Rubric — 7 points, mastery at 5/7**

| Criterion | Points | Mastery indicator |
|---|---|---|
| Selects a projection with stated reasoning tied to task requirements | 2 | Student names a specific projection and connects the choice to what shipping routes need (direction, distance, or area) |
| Accurately names what the chosen projection distorts | 2 | Student identifies the correct trade-off — not a generic "it's not perfect" |
| Responds to the "more accurate" pushback with a coherent argument | 2 | Student explains that no projection is universally accurate and frames the choice as task-specific, not a deficiency |
| Reasoning is coherent across all three parts | 1 | Choice, trade-off, and defense connect — the defense follows from the trade-off acknowledged |

---

## Section 11 — Going Deeper Block Stubs

*Both blocks require content to be written in a dedicated session using `03 - Systems/shared-references/going-deeper-standard.md` before Beta. Neither block is tested or required for mastery. Do not exceed two blocks for this module.*

---

### Block 1 — Mathematics (Differential Geometry)

**Status:** Stub — content not yet written
**Placement:** After the Gauss/Theorema Egregium sentence in Section 4 ("The Geometry of the Problem")
**Label:** `⬡ GOING DEEPER — Mathematics (Differential Geometry)`
**Domain bridge:** Gauss's Theorema Egregium (1827) — intrinsic curvature as a mathematical concept; connection to university-level differential geometry and multivariable calculus
**Tone note:** Never condescending. "If that caught your attention, here's where it goes" — not "for advanced students only."
**Content direction:** Explain what Theorema Egregium proves — that Gaussian curvature is intrinsic and cannot be removed by bending or flattening. Name the branch of mathematics (differential geometry). Give the student a sense of what studying it involves and where it appears in a mathematics curriculum. Do not attempt to teach the theorem — point toward it.
**[VERIFY before writing content]:** Gauss publication year, correct statement of Theorema Egregium, appropriate framing of differential geometry for 9th grade context.

---

### Block 2 — History of Cartography

**Status:** Stub — content not yet written
**Placement:** After the Robinson projection entry in Section 4 ("Other Projections Worth Knowing")
**Label:** `⬡ GOING DEEPER — History of Cartography`
**Domain bridge:** Arthur Robinson's backward-design method; cartography as science vs. design discipline; connection to the Peters controversy and the broader history of projection politics
**Tone note:** Same warm-but-precise register as Block 1. Genuinely optional framing.
**Content direction:** Describe Robinson's method — working backward from desired visual appearance to mathematical formula, inverting the traditional approach of deriving visual output from mathematical specification. Connect to the broader question of whether cartography is a science, a design discipline, or both. Briefly note how Robinson's visual-first approach intersects with the Peters debate, which was happening in roughly the same era.
**[VERIFY before writing content]:** Robinson date and commissioner (Rand McNally, 1963), accuracy of "backward design" characterization, Peters debate timeline relative to Robinson.

---

## Section 12 — Gagné Nine Events Audit

| # | Event | Status | Implementation |
|---|---|---|---|
| 1 | Attention | ✓ | Wonder hook — orange peel contradiction |
| 2 | State objectives | ✓ | Before the Questions block — placed after worked example |
| 3 | Prior recall | ✓ | Spiral questions Q8 (map as argument from GEO-MS-001), Q9 (meridian convergence from GEO-MS-003), Q10 (scale as constraint from GEO-MS-002) |
| 4 | Stimulus | — | Embedded in real-world framing throughout; Going Deeper blocks serve as optional stimulus extension |
| 5 | Guidance | ✓ | Worked example — deforestation report, two maps, two projections |
| 6 | Performance | ✓ | 10-question practice set |
| 7 | Feedback | ✓ | Diagnostic feedback blocks — 3 per question |
| 8 | Assessment | ✓ | Mastery threshold defined (7/10); sub-objective breakdown |
| 9 | Transfer | ✓ | EIB active callback — global shipping routes requires projection selection with defended trade-off |

---

## Section 13 — Verification Status

**CONTENT STATUS: ALPHA**

This spec is a functional draft. Content is complete but has not been reviewed by a named educator. It cannot advance to Beta without educator sign-off.

**Pending before educator review:**
- [VERIFY] Gauss Theorema Egregium date — 1827
- [VERIFY] Mercator publication date — 1569
- [VERIFY] Africa/Greenland size ratio — approximately 14×
- [VERIFY] India/Scandinavia size comparison
- [VERIFY] Peters promotion date — 1973
- [VERIFY] Gall earlier projection date
- [VERIFY] Robinson date and commissioner — Rand McNally, 1963
- [VERIFY] Azimuthal Equidistant — UN emblem projection and center point
- [VERIFY] Winkel Tripel date — 1921
- [VERIFY] National Geographic Winkel Tripel adoption year — 1998
- Q5 and Q8 (Analyze level) — confirm grade-appropriate for 9th grade before Beta; both questions provide scaffolding in the distractors, which is intentional and should be preserved
- Going Deeper block stubs (Section 11) — content must be written using going-deeper-standard.md before Beta; both blocks require [VERIFY] items cleared before content is written
- POC projection explorer promotion — confirm existing POC interactions are still accurate before build
- Diagnostic feedback blocks for Q5 and Q8 must hold complexity of Analyze-level questions — do not simplify Mercator-Peters debate into a verdict during revision

**Beta blockers:**
- Educator sign-off (required for all content)
- Going Deeper block content (Section 11) — both stubs must be written and verified before module reaches Beta
- All [VERIFY] tags cleared

*Educator Verifier: [NAME — to be assigned] · Verification Date: [pending]*
