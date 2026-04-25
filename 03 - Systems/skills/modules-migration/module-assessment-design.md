---
name: assessment-design
description: Designs the right kind of assessment for a specific learning objective — determining evidence type, question format, mastery criteria, and rubric structure. This skill does NOT track learner performance or make adaptive routing decisions. This skill only designs the assessment instrument. Can be invoked standalone (with a learning objective) or via verb-taxonomy-router in the full pipeline.
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
 
1. **The learning objective** — stated in precise, measurable terms
2. **Bloom's taxonomy level** — from `verb-taxonomy-router` if available, or inferred
Optional but improves output:
- Fink dimension active (from curriculum-architect handoff)
- Learner's current mastery level (Emerging / Developing / Proficient)
- UDL representation preferences
- Domain expert assigned to this module
---
 
## Step 1: Determine Assessment Type
 
Select the appropriate assessment type based on the objective's Bloom level and purpose.
 
| Assessment Type | Purpose | Best Bloom Fit |
|---|---|---|
| **Diagnostic** | Identify prior knowledge and gaps before instruction | Any — entry gate |
| **Formative** | Embedded micro-check during lesson flow | Remember, Understand, Apply |
| **Mastery Checkpoint** | Validate consistent, independent performance | Apply, Analyze |
| **Transfer Assessment** | Apply concept in a novel, unseen context | Analyze, Evaluate, Create |
| **Reflection Assessment** | Require learner to explain reasoning | Evaluate, Create |
| **Summative** | End-of-unit performance validation | All levels — comprehensive |
 
Use this decision rule: match assessment type to the **instructional moment**, not just the
Bloom level. A formative check at the Evaluate level is valid mid-lesson; a mastery
checkpoint at the Remember level is valid when recall is genuinely gating further progress.
 
---
 
## Step 2: Select Question Format
 
Match the question format to the evidence the objective demands.
 
| Format | Best For | Avoid When |
|---|---|---|
| **Multiple choice (4 options)** | Recall, concept recognition, procedural discrimination | Evaluating reasoning — MCQ hides thinking |
| **Short constructed response** | Explaining reasoning, showing process | Scoring is subjective — build clear rubric first |
| **Worked solution** | Procedural tasks where steps matter | Time-constrained digital contexts |
| **Drag-and-drop / ordering** | Sequencing, classification, matching | Relationship mapping requires connected nodes |
| **Scenario / case analysis** | Transfer tasks, applied judgment | Recall objectives — scenario adds unnecessary load |
| **Explain-it-back** | Metacognitive objectives, conceptual depth | Early-stage learners without vocabulary |
| **Error identification** | Procedural and conceptual understanding | Careless error types — they'll identify trivial errors |
| **Simulation / interactive** | Complex multi-step tasks, real-world application | When simpler formats serve the objective adequately |
 
**Rule:** Always choose the simplest format that generates valid evidence for the objective.
Complex formats add cognitive load — use them only when simpler formats cannot surface
the required evidence.
 
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
 
---
 
## Step 4: Build the Rubric
 
For constructed-response and complex formats, build a rubric aligned to the mastery levels.
 
Rubric must specify:
- What the response must contain to earn each level
- What distinguishes Proficient from Mastery (usually: transferability + explanation)
- What common errors look like at each level
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
─────────────────────────
Learning Objective:     [precise, measurable]
Bloom Level:            [Remember / Understand / Apply / Analyze / Evaluate / Create]
Assessment Type:        [Diagnostic / Formative / Mastery Checkpoint / Transfer / Reflection]
Question Format:        [selected format + rationale in one sentence]
 
Question / Prompt:
  [The actual question, scenario, or task the learner receives]
 
Answer Key / Solution:
  [Correct answer or solution — include full worked solution for procedural tasks]
 
Mastery Criteria:
  Emerging:   [specific observable indicator]
  Developing: [specific observable indicator]
  Proficient: [specific observable indicator]
  Mastery:    [specific observable indicator — must include transfer evidence requirement]
 
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
 
---
 
## Example
 
**Objective:** Identify the main idea and two supporting details in an informational text (Grade 5).
**Bloom level:** Understand.
 
```
ASSESSMENT SPECIFICATION
─────────────────────────
Learning Objective:     Identify the main idea and two supporting details in an informational text
Bloom Level:            Understand
Assessment Type:        Formative
Question Format:        Short constructed response — requires learner to produce the main
                        idea in their own words, which surfaces comprehension rather than
                        recognition.
 
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