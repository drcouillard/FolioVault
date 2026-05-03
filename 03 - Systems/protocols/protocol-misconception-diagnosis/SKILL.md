---
description: Diagnoses WHY a learner got something wrong by classifying the error type and mapping it to a specific remediation path.
type: module
---
# Misconception Diagnosis

## Mission

Right/wrong is not enough. Every wrong answer contains diagnostic information.
This skill's job is to answer one question: **why did the learner get this wrong?**

The output of this skill is a Diagnosis Report — a structured cause-and-remediation map
that feeds directly into `adaptive-pedagogy-engine` and `assessment-design`.

---

## Input Requirements

This skill requires at minimum:

1. **The learning objective** — what was the learner trying to do?
2. **The learner's answer** — what did they actually produce?
3. **The correct answer** — what should they have produced?

Optional but useful:
- Prior error history from the learner profile
- Hint level used before the answer
- Number of attempts before this response
- Confidence rating if available

---

## Error Classification System

Classify every error into one primary type. Use the secondary type only if
the error clearly involves two distinct failure modes.

### Primary Error Types

| Type | Definition | Observable Signal |
|---|---|---|
| **Conceptual** | The learner has the wrong mental model for the idea itself | Same wrong pattern across varied surface forms; cannot explain why |
| **Procedural** | The concept is understood, but execution steps are wrong or incomplete | Correct setup, wrong calculation or wrong sequence |
| **Vocabulary / Notation** | Confusion over terminology, symbols, or notation — not the concept | Correct reasoning, wrong label or symbol used |
| **Transfer** | Understands isolated form, fails in novel or applied context | Correct on practiced problems, wrong on unfamiliar variations |
| **Careless** | Inconsistent errors without pattern — correct at other times | Random distribution, self-corrects when prompted |
| **Reading / Comprehension** | The learner misread or misunderstood the question | Answer is correct for a different (misread) question |
| **Prior Knowledge Gap** | A prerequisite concept is missing, not the current objective | Consistent failure at the entry point of a concept chain |

---

## Diagnosis Protocol

Run these steps in order. Do not skip to remediation before completing all steps.

### Step 1: Isolate the error

State the specific gap between what the learner produced and what was expected.
Be precise. "Wrong answer" is not sufficient. Name exactly what is incorrect.

### Step 2: Test against error types

For each error type, ask: does this error pattern fit?

Work through the types in this order (most to least commonly misidentified):
1. Is there a consistent wrong pattern? → likely Conceptual or Procedural
2. Is the setup correct but execution wrong? → Procedural
3. Does the answer reveal a missing prerequisite? → Prior Knowledge Gap
4. Does the answer use wrong terms for a correct idea? → Vocabulary / Notation
5. Does the learner succeed on similar problems elsewhere? → Transfer or Careless
6. Does the answer address a different question than asked? → Reading / Comprehension

### Step 3: Assign primary classification

State the error type. State the specific misconception or gap it represents.

Do not assign more than two error types unless genuinely warranted. When uncertain
between two types, choose the one with the higher instructional stakes — the one
that, if wrong, would send the learner down the more harmful remediation path.

### Step 4: Map the underlying cause

For each error type, name the specific belief or gap driving it:

- Conceptual: "Learner believes X when the correct model is Y."
- Procedural: "Learner applies step A before step B when the correct order is B → A."
- Vocabulary: "Learner uses term X to mean Y."
- Transfer: "Learner pattern-matches surface features rather than structural features."
- Prior Knowledge Gap: "Learner has not mastered [prerequisite concept]."

### Step 5: Assign confidence level

Rate your diagnostic confidence:

| Level | Meaning |
|---|---|
| **High** | Error pattern is unambiguous; multiple signals converge |
| **Moderate** | One or two signals; plausible alternative diagnosis exists |
| **Low** | Single data point; diagnosis is a hypothesis only |

Low confidence diagnoses require more evidence before remediation is prescribed.
Flag these for re-diagnosis after one additional learner interaction.

---

## Output Format

Always produce a Diagnosis Report in this structure:

```
MISCONCEPTION DIAGNOSIS REPORT
───────────────────────────────
Learning Objective:   [what skill was being assessed]
Learner Answer:       [what the learner produced]
Correct Answer:       [what was expected]

Primary Error Type:   [one of the seven types]
Secondary Error Type: [if applicable, or "none"]

Specific Misconception:
  [One or two sentences naming the exact wrong belief or gap]

Underlying Cause:
  [Mechanistic explanation — what did the learner do instead of what?]

Diagnostic Confidence: [High / Moderate / Low]
Evidence Used:         [list the signals that led to this classification]

Remediation Direction:
  [General direction only — specific strategy is adaptive-pedagogy-engine's job]
  e.g., "Re-establish prerequisite before re-attempting this objective"
  e.g., "Procedural worked example with steps explicitly labeled"
  e.g., "Vocabulary clarification, then re-attempt with original problem"

Flags for Learner Profile:
  [Any patterns worth recording — e.g., "consistent transfer failure", "notation confusion"]

Recommended Next Skill: adaptive-pedagogy-engine
```

---

## Example

**Learning objective:** Solve one-step linear equations (e.g., x + 4 = 9)
**Learner answer:** x + 4 = 9 → x = 13
**Correct answer:** x = 5

```
MISCONCEPTION DIAGNOSIS REPORT
───────────────────────────────
Learning Objective:   Solve one-step linear equations with integers
Learner Answer:       x = 13
Correct Answer:       x = 5

Primary Error Type:   Conceptual
Secondary Error Type: None

Specific Misconception:
  Learner believes solving an equation means combining all numbers rather than
  isolating the variable. The equality relationship is not understood as a balance.

Underlying Cause:
  Learner added 4 and 9 to get 13, treating the equation as an arithmetic expression
  rather than a balance to preserve. Inverse operations have not been internalized.

Diagnostic Confidence: High
Evidence Used:         Consistent pattern; 4 + 9 = 13 is a direct signal of
                       addition-instead-of-subtraction across the equals sign.

Remediation Direction:
  Conceptual re-explanation required before procedural retry.
  Balance model or physical analogy recommended before symbolic form.

Flags for Learner Profile:
  Inverse operations not yet internalized. Equality as balance: not established.

Recommended Next Skill: adaptive-pedagogy-engine
```

---

## Handoff to adaptive-pedagogy-engine

After completing the Diagnosis Report, pass it to `adaptive-pedagogy-engine` with this note:

```
DIAGNOSIS COMPLETE — routing to adaptive-pedagogy-engine
Diagnosis confidence: [level]
Remediation direction: [stated above]
Learner profile flags: [if any]
```

If confidence is Low, instruct `adaptive-pedagogy-engine` to design one lightweight
probing interaction before prescribing a full remediation path.