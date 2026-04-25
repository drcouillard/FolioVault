---
name: adaptive-pedagogy-engine
description: Decides what should happen next for a specific learner based on their current mastery state, error patterns, and engagement signals. This skill receives input from misconception-diagnosis or assessment-design and produces a specific next-action recommendation.
type: module
---
 
# Adaptive Pedagogy Engine
 
## Mission
 
One-size-fits-all instruction fails most learners. This skill's job is to answer
one question: **given this learner's current state, what is the most effective
next instructional move?**
 
The output is a Pathway Decision — a structured recommendation that tells downstream
skills (UX, content, assessment) exactly what to build next for this learner.
 
---
 
## Input Requirements
 
This skill requires at minimum one of the following input types:
 
**Option A — Post-diagnosis input (most common):**
- Misconception Diagnosis Report from `misconception-diagnosis`
- Learner profile (mastery levels, prior misconceptions, support history)
**Option B — Post-assessment input:**
- Mastery level classification from `assessment-design` (Emerging / Developing / Proficient / Mastery)
- Evidence summary (hint usage, attempt count, confidence rating)
- Learner profile
**Option C — Direct learner state input (standalone use):**
- Description of learner's current performance and struggles
- Topic or learning objective
When input is incomplete, make explicit what's assumed and flag it for verification.
 
---
 
## Learner State Model
 
Before making a pathway decision, build or update the learner's state snapshot:
 
```
LEARNER STATE SNAPSHOT
────────────────────────
Mastery Level:          [Emerging / Developing / Proficient / Mastery]
Current Objective:      [what they're working on]
Error Pattern:          [from misconception-diagnosis, if available]
Confidence Level:       [calibrated / overconfident / underconfident]
Support Dependency:     [hint levels typically used: 0–4]
Engagement Signal:      [moving fast / hesitating / disengaged / struggling]
Prior Attempts:         [number of tries on this objective]
Time on Task:           [fast / normal / slow — relative to expected]
```
 
Missing fields → assume standard values and note the assumption explicitly.
 
---
 
## Pathway Decision Framework
 
Make the pathway decision by matching the learner state to the most appropriate
instructional move. Move through these decision branches in order.
 
### Branch 1: Learner is struggling (Emerging or repeated failure)
 
| Signal | Recommended Move |
|---|---|
| Conceptual misconception | Re-explain the concept with a new representation (analogy, visual, concrete example) |
| Procedural error | Worked example with each step explicitly labeled — no skipping |
| Prior knowledge gap | Pause current objective, address prerequisite, return |
| Vocabulary confusion | Definition clarification + re-attempt with same problem |
| Low confidence, correct answers | Metacognitive reflection + confidence calibration task |
| Support dependency at Level 3–4 | Scaffold down — simpler parallel problem before retry |
 
### Branch 2: Learner is inconsistent (Developing)
 
| Signal | Recommended Move |
|---|---|
| Correct some, wrong others | More varied practice — same concept, different surface forms |
| Inconsistent errors (careless) | Metacognitive prompt: "how did you check your answer?" |
| Correct with high hint use | Fade support — same problem type, fewer hints available |
| Correct, low confidence | Confidence-building task: easy win, then re-attempt harder version |
 
### Branch 3: Learner is performing well (Proficient)
 
| Signal | Recommended Move |
|---|---|
| Consistent correctness at current difficulty | Increase complexity — next Bloom stage task |
| Fast completion, minimal hints | Transfer challenge — novel context, same concept |
| Correct + high confidence | Explanation task — "teach it back" or justify reasoning |
| Ready for advancement | Mastery checkpoint before moving to next objective |
 
### Branch 4: Learner has achieved Mastery
 
| Signal | Recommended Move |
|---|---|
| Mastery confirmed by assessment-design | Unlock next objective in curriculum sequence |
| Mastery confirmed, high momentum | Optional extension challenge before moving on |
| Mastery confirmed, low confidence | Brief reflection task before advancing |
 
### Branch 5: Learner appears disengaged
 
| Signal | Recommended Move |
|---|---|
| Rushing (fast but wrong) | Slow-down prompt + confidence check before next attempt |
| Abandoning before completion | Reduce perceived difficulty — shorter task, more visible progress |
| No errors but no engagement | Narrative framing or real-world relevance hook |
 
---
 
## Pathway Decision Output Format
 
Always produce a Pathway Decision in this structure:
 
```
ADAPTIVE PATHWAY DECISION
──────────────────────────
Learner State:        [Mastery level + key signals]
Decision Branch:      [Struggling / Inconsistent / Performing well / Mastered / Disengaged]
Primary Move:         [The one recommended instructional action]
 
Rationale:
  [2–3 sentences explaining why this move is appropriate for this learner state]
 
Next Interaction Spec:
  Type:      [worked example / scaffolded practice / transfer task / explanation task /
              metacognitive prompt / prerequisite review / mastery checkpoint / extension]
  Difficulty: [easier than current / same difficulty / harder / novel context]
  Support:   [hint level available: 0–4]
  Framing:   [any motivational or narrative framing to apply]
 
Downstream Routing:
  Content needed?     [Yes → domain-expert-router / No]
  New UX needed?      [Yes → ux-instructional-design / No — reuse existing]
  Assessment update?  [Yes → assessment-design / No]
 
Learner Profile Updates:
  [Any fields to update based on this decision]
 
Escalation Flag:
  [None / Flag for human review — if learner shows persistent struggle after 3+ adaptive cycles]
```
 
---
 
## Example
 
**Input:** Diagnosis Report — Conceptual error on linear equations. Mastery: Emerging.
Prior attempts: 3. Hint level used: 3–4. Confidence: Low.
 
```
ADAPTIVE PATHWAY DECISION
──────────────────────────
Learner State:        Emerging — conceptual misconception (equality as balance not established),
                      high support dependency, low confidence, 3 prior attempts
Decision Branch:      Struggling
 
Primary Move:         Concept re-explanation with visual/concrete representation
                      before any further symbolic practice
 
Rationale:
  Three attempts with high hint usage indicates procedural retry is not working.
  The misconception is conceptual (equality misunderstood), so more practice
  of the same symbolic form will reinforce the wrong model. A new representation
  must precede re-attempt.
 
Next Interaction Spec:
  Type:      Re-explanation using concrete model (balance scale or pan model)
  Difficulty: Simpler than current — single-digit integers only
  Support:   Hints available at Level 2–3 maximum
  Framing:   "Let's look at this a different way before trying again."
 
Downstream Routing:
  Content needed?     Yes → domain-expert validates balance scale explanation
  New UX needed?      Yes → ux-instructional-design (visual interaction spec needed)
  Assessment update?  No — hold current assessment until re-explanation complete
 
Learner Profile Updates:
  Mastery: Emerging (unchanged)
  Flag: Symbolic-to-concrete mismatch. 3+ failed attempts. Concept re-teach required.
  Preferred support: Level 3 observed — aim to fade to Level 2 after re-explanation.
 
Escalation Flag:
  None — standard remediation path. Revisit after re-explanation attempt.
```
 
---
 
## Escalation Protocol
 
If a learner has cycled through 3 or more adaptive branches for the same objective
without mastery progression, flag for human review:
 
```
ESCALATION FLAG
────────────────
Learner has attempted [objective] [N] times across [N] adaptive cycles.
Mastery level has not progressed beyond [level].
Recommended action: Human instructor review of learner state and objective appropriateness.
```
 
Do not continue generating new adaptive branches indefinitely without escalating.
The escalation flag is not a failure — it is the system working correctly.
 