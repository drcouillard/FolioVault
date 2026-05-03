# Artifact Spec — Spatial Reasoning Lab

## GEO-MS-007: Spatial Thinking — Putting the Tools Together

_Status: Stubbed at Full Depth — Awaiting Visual Identity Lock and Scenario Library Development_

---

## Artifact Identity

|Field|Value|
|---|---|
|Artifact name|Spatial Reasoning Lab|
|Module|GEO-MS-007 (Chapter 1 Capstone)|
|Track|Concept-Serving (Priority Track)|
|Build status|Stubbed at full depth — most complex artifact in Chapter 1|
|Blockers|Visual identity lock; scenario library content; state machine interaction design|

---

## Purpose

Spatial Reasoning Lab is the synthesis artifact for Chapter 1. It encapsulates every tool from GEO-MS-001 through GEO-MS-006 into a single multi-stage interactive experience. Students do not learn a new tool here — they demonstrate the habit of selecting and combining tools to solve unfamiliar geographic problems.

This artifact also functions as the remediation tool for students who score below 50% on the GEO-MS-007 practice set — running in tutorial mode with maximum scaffold.

---

## Interaction Model — Three Stages Per Scenario

### Stage 1 — Diagnose

Student is presented with a geographic problem in plain language. No map yet. Six tool icons are displayed (one per Chapter 1 module). Student selects which tools the problem requires and which are not relevant.

**Diagnostic feedback:** Student sees which tools they correctly identified, which they over-selected, and which they missed — without the answer being given. They may revise.

### Stage 2 — Apply

The relevant maps and resources for the scenario unlock. Student uses the selected tools in sequence to extract the information needed. The interface tracks which tool is active at any moment.

**Applied feedback:** As the student uses each tool, contextual feedback confirms correct application or names a misapplication. No tool is locked out — students can revise their approach.

### Stage 3 — Justify

Student writes (or selects from) a brief justification for each tool they used. The justification must connect the tool to the specific decision it informed.

**Justification feedback:** Each justification is scored on whether it correctly links the tool to the problem-specific reasoning. Incorrect justifications surface a prompt to reconsider.

---

## Scenario Library — Minimum 6 at Launch

Each scenario must:

- Be drawn from a real-world geographic context (no fictional geographies)
- Require at least three Chapter 1 tools to solve
- Have a clear "spatial thinking moment" — a point where the student must recognize that a single tool is not enough
- Be solvable at 9th grade register

|#|Scenario|Tools required|Domain|
|---|---|---|---|
|1|Search-and-rescue in remote terrain|Coordinates, projection, scale, direction|Public safety|
|2|Public health outbreak mapping|Map type, legend, projection, coordinates|Epidemiology|
|3|Urban transit infrastructure planning|Map type, scale, legend, coordinates|Urban planning|
|4|Multi-day backcountry expedition routing|Scale, projection, direction, map type|Outdoor / recreation|
|5|News organization global story map|Map as argument, projection, legend|Journalism|
|6|Climate research field site selection|Coordinates, projection, scale, legend|Scientific research|

Future scenarios should expand the library — minimum 6 at launch is the floor, not the ceiling. Scenarios can be added without code changes if the scenario data structure is properly specified.

---

## Tutorial Mode

Tutorial mode is the < 50% remediation pathway. In tutorial mode:

- Only one scenario is presented (the simplest in the library)
- Each tool is introduced with maximum scaffold — its function is named, the right answer is foreshadowed
- The student walks through the full Diagnose → Apply → Justify flow with help at each step
- Successful tutorial completion unlocks a retry of the GEO-MS-007 practice set

Tutorial mode is not a separate artifact — it is a state of the same Spatial Reasoning Lab.

---

## Scoring & Mastery Tracking

The Lab tracks three scores per scenario:

|Dimension|What it measures|
|---|---|
|Tool selection accuracy|Did the student identify the right tools at Stage 1?|
|Tool application accuracy|Did the student use the tools correctly at Stage 2?|
|Justification coherence|Did the student's reasoning chain hold together at Stage 3?|

A scenario is considered "passed" when all three dimensions reach acceptable thresholds. Mastery is demonstrated when the student passes at least 4 of 6 scenarios in standard mode (not tutorial mode).

---

## Interaction Design — Critical Components

|Component|Notes|
|---|---|
|Tool icon selector|Six clearly distinct icons; student can multi-select; selection is revisable|
|Scenario presentation|Plain-language problem statement; supporting visual stub if needed|
|Map viewer|Unlocks at Stage 2; displays one or more maps relevant to the scenario; supports zoom/pan|
|Active tool indicator|Visible at all times during Stage 2 — shows which tool the student is currently using|
|Justification interface|Could be free-text input OR selection from candidate justifications — design decision deferred to UX phase|
|Progress tracker|Shows scenario-by-scenario completion across the library|
|State machine|Tracks Diagnose → Apply → Justify transitions; supports revision at any stage; persists state across sessions|

---

## Build Dependencies

- [ ] Folio visual identity locked (colors, typography, spacing, component states)
- [ ] Scenario library content written and educator-verified
- [ ] Maps for each scenario sourced or created
- [ ] UX instructional design decision on Stage 3 justification interface (free-text vs. selection)
- [ ] [COMPONENT: spatial-reasoning-lab-state-machine] — full state machine spec needed before build
- [ ] [COMPONENT: tool-icon-selector] — six tool icons designed
- [ ] [COMPONENT: scenario-progress-tracker] — Lab-wide progress UI

---

## Notes for Build Phase

- This is the most complex artifact in Chapter 1. It will likely require multiple build iterations.
- The state machine is the core technical challenge — students must be able to revise selections at any stage without losing prior work.
- Scenario data should be stored in a structured format (likely JSON) so new scenarios can be added without code changes.
- Tutorial mode should reuse the same components as standard mode — only the scaffolding tier and scenario constraints differ.
- Mobile responsiveness is essential — the Lab must work on tablet at minimum, ideally on phone for read-only review.

---

## Educator Verification Path

When the Lab content reaches Beta-readiness, every scenario goes through the standard Folio educator verification:

1. Tool requirement set verified — does each scenario actually require the tools listed?
2. Spatial thinking moment verified — does each scenario surface a genuine multi-tool reasoning need?
3. Grade register verified — is the scenario solvable at 9th grade?
4. Geographic accuracy verified — are all real-world locations and contexts accurate?

---

_GEO-MS-007 — Spatial Reasoning Lab Artifact Spec — Stubbed at Full Depth — May 2026_