---
name: module-learner-mastery-tracker
description: Tracks and records learner mastery state across learning objectives. Use this skill whenever the user needs to log learner performance data, update a learner profile, record mastery level changes, document hint dependency patterns, track progress across sessions, or maintain a running record of what a learner has and has not mastered. This skill does NOT diagnose misconceptions, decide adaptive routing, or design assessments — it only records and maintains learner profile data.
type: module
---
 
# Learner Mastery Tracker
 
## Mission
 
This skill maintains a structured, persistent record of each learner's mastery state across
learning objectives. It captures what a learner knows, how independently they know it, and
how that state has changed over time.
 
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
 
## Learner Profile Format
 
Use this structure to create or update a learner profile. Every field should be updated
after each session where relevant data is collected.
 
```
LEARNER PROFILE
══════════════════════════════════════════════════
 
Learner ID / Name:       [identifier]
Last Updated:            [date]
 
── MASTERED OBJECTIVES ──────────────────────────
[List objectives at Level 4. Include date awarded.]
 
── PROFICIENT OBJECTIVES ────────────────────────
[List objectives at Level 3. Note support level typically required.]
 
── IN PROGRESS ──────────────────────────────────
[List objectives at Level 1–2. Note current level.]
 
── HINT DEPENDENCY PATTERN ──────────────────────
Typical support level:   [0–4]
Trend:                   [improving / stable / regressing]
 
── PACING PROFILE ───────────────────────────────
Session pacing:          [fast / standard / extended]
Confidence calibration:  [calibrated / overconfident / underconfident]
 
── SESSION NOTES ─────────────────────────────────
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
- Whether transfer performance was demonstrated (yes / no)
**Step 4 — Update the profile.**
Apply the new data to the learner profile. Do not overwrite mastery awards unless there is
clear regression evidence across multiple sessions.
 
**Step 5 — Output the updated profile.**
Return the full updated profile in the format above. Flag any objectives that have changed
level since the last session.
 
---
 
## Rules
 
- Do not award Level 4 (Mastery) unless support level was ≤ 2 AND transfer was demonstrated.
- Do not downgrade a mastery award based on a single session. Two consecutive sessions showing regression are required.
- Do not include adaptive routing recommendations in the output.
- Do not include misconception diagnoses in the output.
- Do not include remediation strategies in the output.
- If data is missing, flag the gap — do not estimate or infer mastery level.
---
 
## Output Format
 
Always return the updated learner profile and a brief change summary:
 
```
## Profile Updated
 
**Learner:** [ID]
**Session Date:** [date]
 
**Changes This Session:**
- [Objective]: Level [X] → Level [Y]
- [Objective]: No change (Level [X] confirmed)
- [Objective]: Insufficient data — not updated
 
[Full updated profile block below]
```
 
---
 
## Example
 
**Prompt:** "Log this session for Maya: she solved 5/5 one-step equations without hints and
completed a word problem successfully."
 
**Output:**
 
## Profile Updated
 
**Learner:** Maya
**Session Date:** [current date]
 
**Changes This Session:**
- One-Step Linear Equations: Level 3 → Level 4 (Mastery awarded — 5/5 correct, support Level 0, transfer demonstrated)
```
LEARNER PROFILE
══════════════════════════════════════════════════
 
Learner ID / Name:       Maya
Last Updated:            [current date]
 
── MASTERED OBJECTIVES ──────────────────────────
- One-Step Linear Equations (awarded [current date])
 
── PROFICIENT OBJECTIVES ────────────────────────
[none currently]
 
── IN PROGRESS ──────────────────────────────────
[none currently tracked]
 
── HINT DEPENDENCY PATTERN ──────────────────────
Typical support level:   0
Trend:                   improving
 
── PACING PROFILE ───────────────────────────────
Session pacing:          fast
Confidence calibration:  calibrated
 
── SESSION NOTES ─────────────────────────────────
Strong transfer performance on word problem. Ready for next objective sequencing.
 
══════════════════════════════════════════════════
```