---
name: content-generator
description: Generates student-facing educational content for any subject domain — including concept explainers, worked examples, practice problems, hint progressions, and lesson scaffolds. Requires a domain expert to be identified before generation begins — do not generate unverified content. Works across all subjects; domain specificity lives in the domain expert's reference files, not in this skill.
type: module
---

# Content Generator

## Mission

Generate instructional content that is accurate, appropriately scaffolded, and
matched to the learner's Bloom level and mastery state. Every piece of content
this skill produces must be verified by the designated domain expert before
it is marked final.

This skill generates the content. The domain expert validates it.
These are two separate steps — never collapse them.

---

## Input Requirements

This skill requires:

1. **Learning objective** — precise and measurable
2. **Bloom level** — from verb-taxonomy-router or stated explicitly
3. **Content type** — one of: Concept Explainer, Worked Example, Practice Problem,
   Hint Progression, Lesson Scaffold, Reference Summary
4. **Domain expert assigned** — which domain expert will verify this content
5. **Learner profile** (optional) — mastery level, preferred support, known misconceptions

---

## Content Types

### Concept Explainer
A clear explanation of a single concept. Includes:
- Plain-language definition (accessible to the learner's level)
- One concrete real-world analogy
- One visual description (describe the diagram or model, even if not rendered)
- Common misconceptions and how to avoid them
- Key terms defined in context

**Length target:** 150–300 words. Dense explanations disengage learners. If more
is needed, split into two explainers across a prerequisite chain.

---

### Worked Example
A fully solved problem that shows every step with reasoning visible.

Structure:
1. **Problem statement** — stated clearly
2. **Setup** — identify what's given and what's needed
3. **Solution** — every step on its own line with the reasoning labeled
4. **Check** — verify the answer if possible
5. **Key insight** — one sentence naming the most important thing this example teaches

**Rule:** Never skip steps. The purpose of a worked example is to make the invisible
visible. Any step a learner might not see should be written out explicitly.

---

### Practice Problem
A problem the learner solves independently. Includes:
- Problem stem (the question/task)
- Full solution (hidden from learner, used by system for scoring)
- Distractor analysis (for MCQ: what each wrong answer reveals)
- Hint progression (see below)
- Difficulty tag: [Foundational / Standard / Challenge / Transfer]

**Difficulty calibration:**
- Foundational: One operation, no ambiguity, values from worked example
- Standard: Same concept, varied surface form, requires learner to set up
- Challenge: Multi-step, requires selecting the right approach
- Transfer: Novel context the learner has not seen, concept must be recognized

---

### Hint Progression
A 4-level hint sequence that provides support without giving away the answer.

| Level | Name | Content |
|---|---|---|
| 0 | None | No hint — learner attempts independently |
| 1 | Conceptual nudge | Reminds learner of the relevant principle without referencing the problem |
| 2 | Procedural hint | Points to the specific step or approach needed |
| 3 | Guided step | Walks through one step with the learner, leaves remainder |
| 4 | Worked example | Shows the full solution — awarded only after Level 3 fails |

**Rules:**
- Level 1 must never contain problem-specific information
- Level 2 may reference the problem but not solve any part of it
- Level 3 must stop before the final step
- Level 4 is the full solution — it is a teaching tool, not a failure state

---

### Lesson Scaffold
A sequenced set of learning activities for a single objective. Structure:
1. **Activation** — connect to prior knowledge (1 question or prompt)
2. **Explanation** — concept explainer
3. **Guided practice** — worked example learner follows along with
4. **Independent practice** — 2–3 problems at Foundational → Standard difficulty
5. **Challenge** — 1 problem at Challenge or Transfer difficulty
6. **Reflection** — 1 prompt asking learner to explain the key idea in their own words

---

### Reference Summary
A compact reference card for a concept or procedure. Includes:
- Key terms and definitions (table format)
- Core equations or rules (if applicable)
- When to use this concept (decision cue)
- One quick example

**Length target:** One page equivalent. Scannable in under 60 seconds.

---

## Generation Protocol

### Step 1: Confirm domain expert
Before generating any content, state which domain expert will verify it.
If no domain expert is identified, stop and route to `domain-expert-router`.

### Step 2: Generate content
Produce the requested content type using the structure above.
Tag all factual claims, equations, and domain-specific rules with:
`[VERIFY: domain-expert]`

This tag marks every element that requires domain expert sign-off.

### Step 3: Route to domain expert for verification
Pass the draft content to the designated domain expert with this note:

```
CONTENT GENERATOR → DOMAIN EXPERT VERIFICATION
────────────────────────────────────────────────
Content type:     [type]
Subject:          [domain]
Learning objective: [objective]
Review request:   Verify all [VERIFY] tagged elements for accuracy, currency,
                  and appropriate scope for this learner level.
Flag:             Any errors, scope mismatches, or outdated information.
Return:           Corrected content or approval to mark as final.
```

### Step 4: Apply corrections and mark final
Apply any domain expert corrections. Remove all `[VERIFY]` tags.
Mark content as `STATUS: FINAL — domain expert verified`.

---

## Output Format

```
CONTENT OBJECT
───────────────
Type:               [Concept Explainer / Worked Example / Practice Problem /
                     Hint Progression / Lesson Scaffold / Reference Summary]
Subject:            [domain]
Learning Objective: [precise]
Bloom Level:        [level]
Difficulty:         [Foundational / Standard / Challenge / Transfer — for problems]
Domain Expert:      [assigned — pending verification]
Status:             [DRAFT — awaiting domain expert verification]

─── CONTENT ───────────────────────────────────────────
[Generated content here]

─── VERIFICATION LOG ──────────────────────────────────
[VERIFY] tags: [list of items flagged for domain expert]
Domain expert sign-off: [pending / approved / corrections applied]
```