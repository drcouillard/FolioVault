---
name: adaptive-pedagogy-engine
description: Decides what should happen next for a specific learner based on their current mastery state, error patterns, and engagement signals. Receives input from misconception-diagnosis or assessment-design and produces a specific next-action recommendation. Uses knowledge type and spiral appearance count as routing signals.
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

**All options — additional required fields:**
- **Knowledge type** — Declarative / Procedural / Conceptual-Principle (from content-generator
  or assessment-design). Governs which remediation strategy is appropriate.
- **Spiral context** — appearance number for this concept (1 = first encounter).
  Governs scaffolding availability and Bloom escalation requirements.

When input is incomplete, make explicit what's assumed and flag it for verification.

---

## Learner State Snapshot

Before making a pathway decision, build or update the learner's state snapshot:

```
LEARNER STATE SNAPSHOT
────────────────────────────────────────────
Mastery Level:          [Emerging / Developing / Proficient / Mastery]
Current Objective:      [what they're working on]
Knowledge Type:         [Declarative / Procedural / Conceptual-Principle]
Spiral Appearance #:    [1 = first encounter; 2+ = revisit]
Error Pattern:          [from misconception-diagnosis, if available]
Confidence Level:       [calibrated / overconfident / underconfident]
Support Dependency:     [hint levels typically used: 0–4]
Engagement Signal:      [moving fast / hesitating / disengaged / struggling]
Prior Attempts:         [number of tries on this objective]
Time on Task:           [fast / normal / slow — relative to expected]
```

Missing fields → assume standard values and note the assumption explicitly.

---

## Scaffolding Withdrawal Rule (Bruner)

Spiral appearance count directly governs maximum hint availability. Apply before
specifying support level in any Pathway Decision:

| Appearance # | Maximum hint level | Framing |
|---|---|---|
| 1 — First encounter | Level 4 (full worked example available) | Full scaffolding |
| 2 — First revisit | Level 3 (guided step; no full worked example) | Reduced scaffolding |
| 3+ — Subsequent revisits | Level 2 (procedural hint only) | Concept treated as prior knowledge |

This is structural, not discretionary. A learner on their third encounter with a
concept does not receive a full worked example — the concept is now background
knowledge for a harder task, not the focus of instruction.

---

## Knowledge Type → Remediation Strategy

When a learner is struggling, the knowledge type determines which remediation
approach is appropriate:

| Knowledge Type | Struggling signal | Appropriate move |
|---|---|---|
| **Declarative** | Cannot recall or misidentifies | Context-rich re-presentation; real-world association; not more drill |
| **Procedural** | Correct setup, wrong execution | Worked example with each step labeled; isolate the failing step |
| **Conceptual-Principle** | Wrong mental model, consistent error pattern | New representation (analogy, visual, concrete model) before symbolic retry |

Matching strategy to knowledge type is the primary routing decision for struggling
learners — wrong strategy type wastes a remediation cycle.

---

## Bloom Escalation Rule (Spiral Revisits)

When a learner advances from a concept after demonstrating Proficient or Mastery,
and the concept will appear again in a future spiral:

- Record the Bloom level of the current assessment
- The next spiral appearance of this concept must target a higher Bloom level
- Folio deepens; it does not repeat at the same depth

| Current appearance Bloom level | Required minimum for next spiral appearance |
|---|---|
| Apply | Analyze |
| Analyze | Evaluate |
| Evaluate | Create or embedded background in a higher-order task |

Routing note for downstream content: include the required next Bloom level in the
Downstream Routing block so `module-content-generator` can apply the correct level.

---

## MOM Framing Rule (Hardré & Miller)

Remediation routing must never feel like a penalty to the learner. When routing
a learner to re-teaching or remediation content, the Pathway Decision must include
framing that presents the move as going deeper, not going back.

- Do not use language that signals failure, regression, or falling behind
- Frame re-explanation as a new representation of the same idea, not as a repeat
- Frame prerequisite review as building the foundation for the current challenge
- The learner's experience of remediation is a UX and copy concern — flag it
  explicitly in the Pathway Decision so downstream UX applies it correctly

---

## Pathway Decision Framework

Make the pathway decision by matching the learner state to the most appropriate
instructional move. Move through these decision branches in order.

### Branch 1: Learner is struggling (Emerging or repeated failure)

First, check knowledge type — the correct move depends on what kind of knowledge
is failing, not just that the learner is wrong.

| Signal | Knowledge type | Recommended move |
|---|---|---|
| Consistent wrong pattern | Conceptual-Principle | New representation (analogy, visual, concrete model) before symbolic retry |
| Correct setup, wrong execution | Procedural | Worked example with each step explicitly labeled — no skipping |
| Cannot recall or misidentifies | Declarative | Context-rich re-presentation; real-world anchor |
| Missing prerequisite | Any | Pause current objective; address prerequisite; return |
| Vocabulary confusion | Any | Definition clarification + re-attempt with same problem |
| Low confidence, correct answers | Any | Metacognitive reflection + confidence calibration task |
| Support dependency at Level 3–4 | Any | Scaffold down — simpler parallel problem before retry |

Apply scaffolding withdrawal rule: check spiral appearance # before specifying
hint availability.

### Branch 2: Learner is inconsistent (Developing)

| Signal | Recommended move |
|---|---|
| Correct some, wrong others | More varied practice — same concept, different surface forms |
| Inconsistent errors (careless) | Metacognitive prompt: "how did you check your answer?" |
| Correct with high hint use | Fade support — same problem type, fewer hints available (one level below current) |
| Correct, low confidence | Confidence-building task: accessible win, then re-attempt harder version |

### Branch 3: Learner is performing well (Proficient)

| Signal | Recommended move |
|---|---|
| Consistent correctness at current difficulty | Increase complexity — next Bloom level task (see Bloom Escalation Rule) |
| Fast completion, minimal hints | Transfer challenge — novel context, same concept |
| Correct + high confidence | Explanation task — "teach it back" or justify reasoning |
| Ready for advancement | Mastery checkpoint before moving to next objective |

When routing to next Bloom level: include the required Bloom level in Downstream
Routing so content-generator produces the correct depth.

### Branch 4: Learner has achieved Mastery

| Signal | Recommended move |
|---|---|
| Mastery confirmed by assessment-design | Unlock next objective in curriculum sequence |
| Mastery confirmed, high momentum | Optional extension challenge before moving on |
| Mastery confirmed, low confidence | Brief reflection task before advancing |

Record spiral appearance # and Bloom level achieved in learner profile for future
spiral escalation.

### Branch 5: Learner appears disengaged

Disengagement is an ARCS signal — identify which condition has failed before
prescribing a move.

| ARCS condition | Signal | Recommended move |
|---|---|---|
| Attention (A) | No engagement, no errors | Real-world relevance hook or wonder-framed re-entry |
| Relevance (R) | "Why does this matter?" pattern | Connect to real-world stakes; use the real-geography rule if applicable |
| Confidence (C) | Rushing (fast but wrong) | Slow-down prompt + confidence check; reduce perceived difficulty |
| Satisfaction (S) | Abandoning before completion | Shorter task, more visible progress indicators; reframe feedback as information |

Do not default to "add more engagement" without identifying the failing ARCS condition.
Generic motivation moves rarely work. Specific ones usually do.

---

## Pathway Decision Output Format

Always produce a Pathway Decision in this structure:

```
ADAPTIVE PATHWAY DECISION
──────────────────────────────────────────────────────────
Learner State:        [Mastery level + key signals]
Knowledge Type:       [Declarative / Procedural / Conceptual-Principle]
Spiral Appearance #:  [N]
Decision Branch:      [Struggling / Inconsistent / Performing well / Mastered / Disengaged]
Primary Move:         [The one recommended instructional action]

Rationale:
  [2–3 sentences explaining why this move is appropriate for this learner state,
   including why this strategy fits the knowledge type]

Next Interaction Spec:
  Type:       [worked example / scaffolded practice / transfer task / explanation task /
               metacognitive prompt / prerequisite review / mastery checkpoint / extension]
  Bloom Level: [the target Bloom level for next interaction — must escalate on spiral revisits]
  Difficulty:  [easier than current / same difficulty / harder / novel context]
  Support:     [maximum hint level: 0–4, per scaffolding withdrawal rule]
  Framing:     [MOM-compliant framing — presents move as going deeper, not going back]
  ARCS note:   [which ARCS condition this move addresses, if motivational framing is needed]

Downstream Routing:
  Content needed?       [Yes → module-expert-router (include knowledge type + required Bloom level) / No]
  New UX needed?        [Yes → ux-instructional-design (include MOM framing requirement) / No — reuse existing]
  Assessment update?    [Yes → assessment-design (include spiral # and required Bloom level) / No]
  Profile update?       [Yes → module-mastery-tracker (include spiral # and Bloom level achieved) / No]

Learner Profile Updates:
  [Any fields to update based on this decision, including spiral appearance # and Bloom level]

Escalation Flag:
  [None / Flag for human review — if learner shows persistent struggle after 3+ adaptive cycles]
```

---

## Example

**Input:** Diagnosis Report — Conceptual error on linear equations. Mastery: Emerging.
Prior attempts: 3. Hint level used: 3–4. Confidence: Low. Knowledge type: Conceptual-Principle.
Spiral appearance: 1 (first encounter).

```
ADAPTIVE PATHWAY DECISION
──────────────────────────────────────────────────────────
Learner State:        Emerging — conceptual misconception (equality as balance not established),
                      high support dependency, low confidence, 3 prior attempts
Knowledge Type:       Conceptual-Principle
Spiral Appearance #:  1
Decision Branch:      Struggling

Primary Move:         Concept re-explanation with visual/concrete representation
                      before any further symbolic practice

Rationale:
  Three attempts with high hint usage indicates procedural retry is not working.
  The misconception is conceptual-principle (equality misunderstood as a relationship),
  so more symbolic practice will reinforce the wrong model. A new representation —
  not more practice — must precede re-attempt. This is the correct move for a
  Conceptual-Principle knowledge type failure.

Next Interaction Spec:
  Type:       Re-explanation using concrete model (balance scale or pan model)
  Bloom Level: Apply (unchanged — learner has not demonstrated Apply yet; do not escalate)
  Difficulty:  Simpler than current — single-digit integers only
  Support:     Level 3 maximum (first appearance — full scaffolding still available, but
               hint Level 4 withheld until re-explanation attempt fails)
  Framing:     "Let's look at this from a different angle — the equation is telling us
               something about balance, not just numbers."
  ARCS note:   Confidence condition — reduce task complexity before retry to restore
               belief in progress. Satisfaction — feedback must name the insight gained,
               not just confirm correctness.

Downstream Routing:
  Content needed?       Yes → domain-expert validates balance scale explanation
                        Knowledge type: Conceptual-Principle. Bloom: Apply.
  New UX needed?        Yes → ux-instructional-design (visual interaction spec needed;
                        apply MOM framing — "a different angle," not "let's try again")
  Assessment update?    No — hold current assessment until re-explanation complete
  Profile update?       Yes → module-mastery-tracker
                        Spiral appearance #1, Bloom: Apply (not yet achieved)

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
────────────────────────────────
Learner has attempted [objective] [N] times across [N] adaptive cycles.
Mastery level has not progressed beyond [level].
Recommended action: Human instructor review of learner state and objective appropriateness.
```

Do not continue generating new adaptive branches indefinitely without escalating.
The escalation flag is not a failure — it is the system working correctly.
