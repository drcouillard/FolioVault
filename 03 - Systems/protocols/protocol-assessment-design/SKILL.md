---
name: assessment-design
description: Designs the right kind of assessment for a specific learning objective — determining evidence type, question format, mastery criteria, and rubric structure. Requires backward design prerequisites (Enduring Understanding + Acceptable Evidence) before design begins. This skill does NOT track learner performance or make adaptive routing decisions. Can be invoked standalone or via verb-taxonomy-router in the full pipeline.
type: module
---

# Assessment Design

## Mission

Assessment is not a test at the end. It is the method by which you know whether
the learner is ready to move forward. This skill designs the instrument — the
specific question format, evidence criteria, and rubric — that makes that judgment
possible.

The output is an Assessment Specification that `assessment-adaptive-mastery`,
`adaptive-pedagogy-engine`, and `ux-instructional-design` can consume directly.

---

## Input Requirements

This skill requires at minimum:

1. **Enduring Understanding** — the EU statement this assessment is measuring toward.
   Must exist before design begins. If not defined, stop and request it.
2. **Acceptable Evidence** — the defined mastery demonstration from backward design.
   The assessment instrument must measure this evidence directly, not a proxy for it.
3. **The learning objective** — stated in precise, measurable terms
4. **Knowledge type** — classify the knowledge being assessed (Smith & Ragan):
   - **Declarative** — knowing that (facts, definitions, labels)
   - **Procedural** — knowing how (sequences, operations, algorithms)
   - **Conceptual-Principle** — knowing why (relationships, systems, causation)
   Knowledge type governs format selection — choose it before choosing format.
5. **Bloom's taxonomy level** — from `verb-taxonomy-router` if available, or inferred.
   Must be Apply or above. If Bloom level is Remember or Understand, flag this before
   proceeding — these levels are only valid for diagnostic and prerequisite-check
   assessments, not mastery assessments.
6. **Spiral context** (required if this is a revisit) — spiral appearance number for
   this concept, and Bloom level used on prior appearance. Assessment Bloom level must
   escalate from the prior appearance — never repeat the same level.

Optional but improves output:
- Learner's current mastery level (Emerging / Developing / Proficient)
- UDL representation preferences
- Domain expert assigned to this module

---

## Step 0: Backward Design Gate

Before designing any assessment instrument, verify:

1. The Enduring Understanding exists and is stated as an enduring idea, not just a topic.
2. The Acceptable Evidence is defined — what the learner must *demonstrate*, not just answer.
3. This assessment instrument is aligned to the Acceptable Evidence. If you are designing
   an assessment that does not directly measure the stated Acceptable Evidence, stop and
   clarify the scope before proceeding.

Assessment instruments that measure something other than the defined Acceptable Evidence
produce coverage data, not mastery data.

---

## Step 1: Determine Assessment Type

Select the appropriate assessment type based on the objective's Bloom level, knowledge
type, and instructional moment.

| Assessment Type | Purpose | Best Bloom Fit | Gagné Event |
|---|---|---|---|
| **Diagnostic** | Identify prior knowledge and gaps before instruction | Any — entry gate | Pre-instruction |
| **Formative** | Embedded micro-check during lesson flow | Apply | Event 6 — Performance |
| **Mastery Checkpoint** | Validate consistent, independent performance | Apply, Analyze | Event 8 — Assessment |
| **Transfer Assessment** | Apply concept in a novel, unseen context | Analyze, Evaluate, Create | Event 9 — Transfer |
| **Reflection Assessment** | Require learner to explain reasoning | Evaluate, Create | Event 8 — Assessment |
| **Summative** | End-of-unit performance validation | All levels — comprehensive | Post-instruction |

Use this decision rule: match assessment type to the **instructional moment**, not just
the Bloom level. A formative check at the Evaluate level is valid mid-lesson; a mastery
checkpoint at the Remember level is valid only when recall is genuinely gating further progress.

---

## Step 2: Select Question Format

Match the question format to the evidence the objective demands and the knowledge type.

| Format | Best For | Knowledge Type Fit | Avoid When |
|---|---|---|---|
| **Multiple choice (4 options)** | Recall, concept recognition, procedural discrimination | Declarative | Evaluating reasoning — MCQ hides thinking |
| **Short constructed response** | Explaining reasoning, showing process | Conceptual-Principle | Scoring is subjective — build clear rubric first |
| **Worked solution** | Procedural tasks where steps matter | Procedural | Time-constrained digital contexts |
| **Drag-and-drop / ordering** | Sequencing, classification, matching | Procedural, Declarative | Relationship mapping requiring connected nodes |
| **Scenario / case analysis** | Transfer tasks, applied judgment | Conceptual-Principle | Recall objectives — scenario adds unnecessary load |
| **Explain-it-back** | Metacognitive objectives, conceptual depth | Conceptual-Principle | Early-stage learners without vocabulary |
| **Error identification** | Procedural and conceptual understanding | Procedural, Conceptual-Principle | Careless error types — learner will identify trivial errors |
| **Simulation / interactive** | Complex multi-step tasks, real-world application | Procedural, Conceptual-Principle | When simpler formats serve the objective adequately |

**Rule:** Always choose the simplest format that generates valid evidence for the objective.
Complex formats add cognitive load — use them only when simpler formats cannot surface
the required evidence.

**ARCS Confidence condition:** The difficulty of the first assessment item must be
calibrated to the learner's current mastery level. An assessment that opens too hard
damages confidence before the learner has demonstrated anything. Sequence from accessible
to challenging within the instrument.

---

## Step 3: Write Mastery Criteria

Define exactly what performance earns each mastery level. Be precise — "understands" and
"demonstrates" are not measurable. Use observable, countable performance indicators.

### Mastery Level Definitions

**Emerging:** Learner cannot reliably perform the objective without significant support.
Evidence: Incorrect responses, high hint dependency (Level 3–4), cannot explain reasoning.

**Developing:** Learner performs correctly under some conditions but inconsistently.
Evidence: Correct on familiar forms, fails on variations. Support Level 2–3 typically used.

**Proficient:** Learner consistently performs correctly across standard variations with
minimal support. Evidence: 4/5+ correct, Support Level 0–2, can describe process.

**Mastery:** Learner performs correctly, independently, and in transfer contexts.
Evidence must include ALL of: correct across varied problem types + novel context + Support
Level 0–1 only + can explain reasoning without prompting.

> Mastery cannot be awarded on correctness alone. Independence and transferability
> are non-negotiable mastery requirements.

**ARCS Satisfaction condition:** Mastery criteria must produce diagnostic feedback, not
just a correctness verdict. The learner must know *why* they are at their current level,
not just *that* they are at it. Design the feedback block alongside the mastery criteria,
not after.

---

## Step 4: Build the Rubric

For constructed-response and complex formats, build a rubric aligned to the mastery levels.

Rubric must specify:
- What the response must contain to earn each level
- What distinguishes Proficient from Mastery (usually: transferability + explanation)
- What common errors look like at each level (feeds directly to `misconception-diagnosis`)
- Minimum evidence count to award each level (never award Mastery on a single data point)

---

## Step 5: Design Misconception Traps (for MCQ and diagnostic formats)

For multiple choice assessments, design distractors that reveal specific error types:

- One distractor for each of the most likely misconceptions for this objective
- Label each distractor internally with the error type it reveals
- If a learner selects a distractor, the error type label feeds directly to `misconception-diagnosis`

Example for linear equations (x + 4 = 9):
- Correct: x = 5
- Distractor A: x = 13 → signals Conceptual error (adds instead of isolates)
- Distractor B: x = 4 → signals Procedural error (wrong operation applied)
- Distractor C: x = 9/4 → signals Vocabulary error (treated as multiplication)

---

## Output Format

Always produce an Assessment Specification in this structure:

```
ASSESSMENT SPECIFICATION
─────────────────────────────────────────────────
Learning Objective:     [precise, measurable]
Knowledge Type:         [Declarative / Procedural / Conceptual-Principle]
Bloom Level:            [Apply / Analyze / Evaluate / Create]
Spiral Tag:             [New — Bloom: [level] / Spiral #N — Bloom: [level] / N/A]
Assessment Type:        [Diagnostic / Formative / Mastery Checkpoint / Transfer / Reflection / Summative]
Gagné Event:            [Event number and name]
Question Format:        [selected format + rationale in one sentence]
Status:                 [Alpha — awaiting domain expert verification]

Question / Prompt:
  [The actual question, scenario, or task the learner receives]

Answer Key / Solution:
  [Correct answer or solution — include full worked solution for procedural tasks]

Mastery Criteria:
  Emerging:   [specific observable indicator]
  Developing: [specific observable indicator]
  Proficient: [specific observable indicator]
  Mastery:    [specific observable indicator — must include transfer evidence requirement]

Diagnostic Feedback Block:
  [What the learner is told at each mastery level — names the gap, not just the verdict]

Rubric (if constructed response):
  [Dimension-by-dimension scoring guide]

Misconception Traps (if MCQ):
  Distractor A: [answer] → [error type]
  Distractor B: [answer] → [error type]
  Distractor C: [answer] → [error type]

Minimum Evidence for Mastery:
  [e.g., "5 correct responses across 3 problem types, including 1 transfer task,
   Support Level 0–1 only, with explanation of reasoning"]

Downstream Routing:
  → assessment-adaptive-mastery (for learner profile tracking)
  → misconception-diagnosis (if a distractor is selected)
  → adaptive-pedagogy-engine (after mastery classification)
```

**Status progression:**
- **Alpha** — specification complete, unverified. Do not use with students.
- **Beta** — domain expert verified. Not yet piloted with students.
- **Gold** — piloted, revised, confirmed valid.
Nothing advances from Alpha to Beta without named domain expert sign-off.
Nothing advances from Beta to Gold without student pilot feedback.

---

## Example

**Objective:** Identify the main idea and two supporting details in an informational text (Grade 5).
**Knowledge type:** Conceptual-Principle (understanding text structure and subordination of ideas).
**Bloom level:** Understand (acceptable here — diagnostic formative use only; mastery checkpoint would require Apply or above).

```
ASSESSMENT SPECIFICATION
─────────────────────────────────────────────────
Learning Objective:     Identify the main idea and two supporting details in an informational text
Knowledge Type:         Conceptual-Principle
Bloom Level:            Understand
Spiral Tag:             New — Bloom: Understand
Assessment Type:        Formative
Gagné Event:            Event 6 — Performance
Question Format:        Short constructed response — requires learner to produce the main
                        idea in their own words, which surfaces comprehension rather than
                        recognition.
Status:                 Alpha — awaiting domain expert verification

Question / Prompt:
  Read the passage below. In 1–2 sentences, state the main idea of the passage.
  Then list two details from the passage that support it.

Answer Key / Solution:
  Main idea (acceptable range): [defined per passage — scored by rubric]
  Supporting details: Must be drawn from text, must logically connect to stated main idea.

Mastery Criteria:
  Emerging:   Cannot state a main idea, or states a detail as a main idea
  Developing: States a plausible main idea but supporting details are tangential or vague
  Proficient: States accurate main idea, two relevant supporting details from text
  Mastery:    States accurate main idea, two supporting details with explicit connection
              explained in own words — demonstrates comprehension, not just identification

Diagnostic Feedback Block:
  Emerging:   "You've identified something from the passage, but a main idea covers the
              whole passage — not just one part. Try asking: what is every paragraph about?"
  Developing: "You found the main idea, but your details are too broad. A supporting detail
              should be a specific piece of evidence from the text."
  Proficient: "Strong work. Your main idea and details are accurate and connected."
  Mastery:    "Excellent — you explained *why* each detail supports the main idea, not
              just that it does. That's the difference between finding and understanding."

Rubric:
  Main idea (2 pts): 2 = accurate and own words; 1 = accurate but copied verbatim; 0 = wrong
  Details (2 pts):   1 pt each = relevant + from text; 0 = irrelevant or not from text
  Connection (1 pt): 1 = explicitly states why detail supports main idea; 0 = no connection stated

Misconception Traps:
  N/A — constructed response format

Minimum Evidence for Mastery:
  Correct on 3 different passage types (narrative-info, expository, procedural).
  Explanation of connection present in all 3. No prompted support used.

Downstream Routing:
  → assessment-adaptive-mastery (record mastery level)
  → misconception-diagnosis (if main idea is stated as a detail — signals comprehension gap)
  → adaptive-pedagogy-engine (after mastery classification)
```
