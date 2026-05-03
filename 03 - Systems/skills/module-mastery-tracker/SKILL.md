---
name: module-mastery-tracker
description: Tracks and records learner mastery state across learning objectives. Logs mastery level, hint dependency, Bloom level achieved, spiral appearance count, and transfer evidence per objective. This skill does NOT diagnose misconceptions, decide adaptive routing, or design assessments — it only records and maintains learner profile data.
type: module
---

# Learner Mastery Tracker

## Mission

This skill maintains a structured, persistent record of each learner's mastery state across
learning objectives. It captures what a learner knows, how independently they know it,
at what depth they know it, and how that state has changed over time.

It does not decide what to do next. It does not diagnose errors. It records.

---

## Mastery Level Definitions

Every learning objective is classified at one of four levels:

| Level | Label | Meaning |
|---|---|---|
| 1 | Emerging | Limited recall or conceptual confusion |
| 2 | Developing | Partial understanding, inconsistent execution |
| 3 | Proficient | Consistent performance with minimal support |
| 4 | Mastery | Independent, transferable, verified across problem types |

> Mastery (Level 4) requires independence. It cannot be assigned on correctness alone.
> Transfer evidence is a non-negotiable mastery requirement.

---

## Hint Dependency Scale

Track the support level required for each correct response. This data is part of the
mastery record — not a separate diagnostic.

| Level | Label | Description |
|---|---|---|
| 0 | Independent | No support needed |
| 1 | Conceptual nudge | High-level prompt to reconsider |
| 2 | Procedural hint | Attention directed to a specific step |
| 3 | Guided step | Part of the solution walked through |
| 4 | Worked example | Full solution modeled |

> Record the highest support level used during the session for each objective.

---

## Spiral and Bloom Tracking

The mastery tracker is the system of record for spiral appearance count and Bloom level
per objective. This data drives Folio's deepening model — without it, the adaptive
engine cannot escalate correctly.

For every objective, record:

- **Spiral appearance #** — how many times this concept has appeared across the learner's
  path (1 = first encounter). Increment after each session where the concept was practiced.
- **Bloom level achieved** — the highest Bloom level the learner demonstrated mastery at
  during this session. Use the level from the assessment spec, not inferred.
- **Bloom escalation flag** — on spiral revisits (appearance # ≥ 2), flag if the Bloom
  level was *not* escalated from the prior appearance. This is a data integrity signal for
  `adaptive-pedagogy-engine` — it means content was not deepened as required.

> Folio deepens on every spiral revisit. A second appearance at the same Bloom level is a
> content design error, not a learner error. Flag it as such, do not penalize the learner.

---

## Learner Profile Format

Use this structure to create or update a learner profile. Every relevant field should be
updated after each session where data is collected.

```
LEARNER PROFILE
══════════════════════════════════════════════════

Learner ID / Name:       [identifier]
Last Updated:            [date]

── MASTERED OBJECTIVES ──────────────────────────────────
[For each objective at Level 4:]
  Objective:             [name]
  Mastery awarded:       [date]
  Bloom level achieved:  [Apply / Analyze / Evaluate / Create]
  Spiral appearance #:   [N]
  Transfer demonstrated: [Yes / No]
  Support level at award:[0–1 required for Mastery]

── PROFICIENT OBJECTIVES ────────────────────────────────
[For each objective at Level 3:]
  Objective:             [name]
  Bloom level achieved:  [level]
  Spiral appearance #:   [N]
  Support level typical: [0–2]
  Transfer demonstrated: [Yes / No]

── IN PROGRESS ──────────────────────────────────────────
[For each objective at Level 1–2:]
  Objective:             [name]
  Current level:         [Emerging / Developing]
  Bloom level attempted: [level]
  Spiral appearance #:   [N]
  Support level typical: [0–4]
  Bloom escalation flag: [OK / Not escalated from appearance #N]

── HINT DEPENDENCY PATTERN ──────────────────────────────
Typical support level:   [0–4]
Trend:                   [improving / stable / regressing]

── PACING PROFILE ───────────────────────────────────────
Session pacing:          [fast / standard / extended]
Confidence calibration:  [calibrated / overconfident / underconfident]

── SESSION NOTES ────────────────────────────────────────
[Notable observations from the most recent session only.]
[Do not carry forward session notes older than 3 sessions.]

══════════════════════════════════════════════════
```

---

## Workflow

When this skill is triggered, follow these steps in order:

**Step 1 — Identify the learner.**
Confirm learner ID and retrieve existing profile if available. If no profile exists, create one.

**Step 2 — Identify the objective(s) being recorded.**
Confirm which learning objective(s) have data to log.

**Step 3 — Record the evidence.**
For each objective, log:
- Current mastery level (1–4)
- Support level used (0–4)
- Number of attempts
- Bloom level of the assessment used (from assessment-design output)
- Spiral appearance number (increment from prior profile entry)
- Whether transfer performance was demonstrated (yes / no)
- Bloom escalation flag: if appearance # ≥ 2, confirm Bloom level is higher than prior appearance

**Step 4 — Update the profile.**
Apply the new data to the learner profile. Do not overwrite mastery awards unless there is
clear regression evidence across multiple sessions.

**Step 5 — Output the updated profile.**
Return the full updated profile in the format above. Flag any objectives that have changed
level since the last session. Flag any Bloom escalation failures.

---

## Rules

- Do not award Level 4 (Mastery) unless support level was ≤ 1 AND transfer was demonstrated.
- Do not downgrade a mastery award based on a single session. Two consecutive sessions
  showing regression are required.
- Do not include adaptive routing recommendations in the output.
- Do not include misconception diagnoses in the output.
- Do not include remediation strategies in the output.
- If data is missing, flag the gap — do not estimate or infer mastery level.
- If Bloom level was not escalated on a spiral revisit, flag it — do not silently record
  the same level. This is a content pipeline signal, not a learner performance signal.

---

## Output Format

Always return the updated learner profile and a brief change summary:

```
## Profile Updated

**Learner:** [ID]
**Session Date:** [date]

**Changes This Session:**
- [Objective]: Level [X] → Level [Y] | Bloom: [level] | Spiral #[N] | Transfer: [Yes/No]
- [Objective]: No change (Level [X] confirmed) | Bloom: [level] | Spiral #[N]
- [Objective]: Insufficient data — not updated
- [Objective]: ⚑ Bloom escalation flag — spiral #[N] recorded at [level], same as appearance #[N-1]

[Full updated profile block below]
```

---

## Example

**Prompt:** "Log this session for Maya: she solved 5/5 one-step equations without hints
and completed a word problem successfully. This is her second encounter with the concept.
Assessment was at Analyze level."

**Output:**

## Profile Updated

**Learner:** Maya
**Session Date:** [current date]

**Changes This Session:**
- One-Step Linear Equations: Level 3 → Level 4 (Mastery awarded) | Bloom: Analyze | Spiral #2 | Transfer: Yes

```
LEARNER PROFILE
══════════════════════════════════════════════════

Learner ID / Name:       Maya
Last Updated:            [current date]

── MASTERED OBJECTIVES ──────────────────────────────────
  Objective:             One-Step Linear Equations
  Mastery awarded:       [current date]
  Bloom level achieved:  Analyze
  Spiral appearance #:   2
  Transfer demonstrated: Yes
  Support level at award: 0

── PROFICIENT OBJECTIVES ────────────────────────────────
[none currently]

── IN PROGRESS ──────────────────────────────────────────
[none currently tracked]

── HINT DEPENDENCY PATTERN ──────────────────────────────
Typical support level:   0
Trend:                   improving

── PACING PROFILE ───────────────────────────────────────
Session pacing:          fast
Confidence calibration:  calibrated

── SESSION NOTES ────────────────────────────────────────
Strong transfer performance on word problem at Analyze level. Spiral #2 Bloom
escalation confirmed (Apply → Analyze). Next spiral appearance should target
Evaluate level. Ready for next objective.

══════════════════════════════════════════════════
```
