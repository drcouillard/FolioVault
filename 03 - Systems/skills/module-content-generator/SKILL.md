---
name: content-generator
description: Generates student-facing educational content for any subject domain — including concept explainers, worked examples, practice problems, hint progressions, and lesson scaffolds. Requires backward design prerequisites (Enduring Understanding + Acceptable Evidence) before generation begins. Requires a domain expert to be identified. Works across all subjects; domain specificity lives in the domain expert's reference files, not in this skill.
type: module
---

# Content Generator

## Mission

Generate instructional content that is accurate, appropriately scaffolded, and
matched to the learner's Bloom level and mastery state. Every piece of content
this skill produces must be verified by the designated domain expert before
it advances from Alpha status.

This skill generates the content. The domain expert validates it.
These are two separate steps — never collapse them.

---

## Input Requirements

This skill requires:

1. **Enduring Understanding** — the EU statement this content serves. Must exist
   before generation begins. If not defined, stop and request it.
2. **Acceptable Evidence** — what mastery demonstration this content is building
   toward. Must exist before generation begins. If not defined, stop and request it.
3. **Learning objective** — precise and measurable
4. **Knowledge type** — classify the knowledge being taught (Smith & Ragan):
   - **Declarative** — knowing that (facts, definitions, labels)
   - **Procedural** — knowing how (sequences, operations, algorithms)
   - **Conceptual-Principle** — knowing why (relationships, systems, causation)
   This classification governs strategy selection — choose it before choosing format.
5. **Bloom level** — from verb-taxonomy-router or stated explicitly. Must be Apply
   or above. Remember and Understand questions are not Folio questions.
6. **Output format** — one of: Concept Explainer, Worked Example, Practice Problem,
   Hint Progression, Lesson Scaffold, Reference Summary
7. **Domain expert assigned** — which domain expert will verify this content
8. **Spiral context** (required if this is a revisit) — spiral appearance number
   for this concept, and Bloom level used on prior appearance
9. **Learner profile** (optional) — mastery level, preferred support, known misconceptions

---

## Knowledge Type → Strategy Selection

Before selecting a content format, apply the correct strategy for the knowledge type:

| Knowledge Type | Primary Strategy | What to Avoid |
|---|---|---|
| **Declarative** | Context-rich presentation; association with real-world referents | Isolated drill; rote repetition without meaning |
| **Procedural** | Fully labeled worked examples; hint progressions that follow each step | Skipping steps; showing only the answer |
| **Conceptual-Principle** | Analogies, models, transfer tasks; explain the why before the how | Rote practice; surface-form repetition |

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
- Spiral tag (required — see below)

**Difficulty calibration:**
- Foundational: One operation, no ambiguity, values from worked example
- Standard: Same concept, varied surface form, requires learner to set up
- Challenge: Multi-step, requires selecting the right approach
- Transfer: Novel context the learner has not seen, concept must be recognized

**Spiral tagging (required on every practice problem):**
- New concept: `[New — Bloom: Apply]` (or the appropriate level)
- Spiral revisit: `[Spiral #N — Bloom: Analyze]` (N = appearance number; Bloom level
  must escalate from the prior appearance — never repeat the same level)
- Prior concept questions must come from completed modules only. No phantom spiraling.

**Scaffolding withdrawal (Bruner):**
- First appearance: full hint progression available (Levels 0–4)
- Second appearance: maximum hint Level 3 (no full worked example)
- Third appearance and beyond: maximum hint Level 2; concept functions as assumed
  prior knowledge, not as taught content

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
- Apply scaffolding withdrawal rules above when this concept has prior appearances

---

### Lesson Scaffold
A sequenced set of learning activities for a single objective, mapped to
Gagné's Nine Events. Build in this order:

| Step | Gagné Event | What to build |
|---|---|---|
| 0. Wonder hook | Event 1 — Attention | Opens with tension, question, or real-world stakes. Never a definition. This is the ARCS Attention condition. |
| 1. Activation | Event 3 — Prior recall | One question connecting to a completed prior concept from a finished module |
| 2. Explanation | Event 5 — Guidance | Concept explainer; representation matched to knowledge type |
| 3. Guided practice | Event 5 — Guidance | Worked example the learner follows step by step |
| 4. Independent practice | Event 6 — Performance | 2–3 problems at Foundational → Standard difficulty |
| 5. Feedback blocks | Event 7 — Feedback | Diagnostic feedback for each practice problem — names the misconception, not just the error |
| 6. Challenge | Event 9 — Transfer | 1 problem at Challenge or Transfer difficulty in a novel context |
| 7. Reflection | Event 8 — Assessment | 1 prompt asking learner to explain the key idea in their own words |

**Notes:**
- Gagné Events 2 (state objectives) and 4 (stimulus) are intentionally deprioritized.
  Stating objectives kills the wonder hook; stimulus is embedded in real-world framing.
- The wonder hook must satisfy the ARCS Relevance condition too: real-world stakes,
  not a textbook scenario.
- Remediation routing must never feel like a penalty to the learner — frame any
  re-teaching as "going deeper," not "going back." (MOM — Hardré & Miller)

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

### Step 0: Backward Design Gate
Confirm before generating anything:
- An Enduring Understanding statement exists for this module
- An Acceptable Evidence definition exists for this module

If either is missing, stop. Do not generate content for a module that has not
been scoped through backward design. Route back to the module spec author.

### Step 1: Confirm knowledge type and domain expert
State the knowledge type classification (Declarative / Procedural / Conceptual-Principle)
and confirm which domain expert will verify this content.
If no domain expert is identified, stop and route to `module-expert-router`.

### Step 2: Generate content
Produce the requested output format using the structures above.
Apply the strategy appropriate to the knowledge type.
Tag all factual claims, equations, and domain-specific rules with:
`[VERIFY: domain-expert]`

This tag marks every element that requires domain expert sign-off.

**For Lesson Scaffold only — run ARCS + Gagné check before routing:**

| Condition | Check |
|---|---|
| Attention (ARCS / Gagné 1) | Wonder hook present? Opens with tension or question — not a definition? |
| Relevance (ARCS) | Real-world stakes or context present? |
| Confidence (ARCS) | Difficulty progression present (Foundational → Standard → Challenge)? |
| Satisfaction (ARCS) | Diagnostic feedback blocks present (names misconception, not just error)? |
| Gagné Event 3 | Prior knowledge activation question present and from a completed module? |
| Gagné Event 5 | Guidance (explainer + worked example) present? |
| Gagné Event 6 | Independent practice questions present? |
| Gagné Event 7 | Diagnostic feedback for each practice question present? |
| Gagné Event 8 | Reflection or mastery check present? |
| Gagné Event 9 | Transfer or challenge problem present in a novel context? |

If any check fails, revise before routing to domain expert.

### Step 3: Route to domain expert for verification
Pass the draft content to the designated domain expert with this note:

```
CONTENT GENERATOR → DOMAIN EXPERT VERIFICATION
────────────────────────────────────────────────
Content format:     [type]
Knowledge type:     [Declarative / Procedural / Conceptual-Principle]
Subject:            [domain]
Learning objective: [objective]
Bloom level:        [level]
Spiral tag:         [New / Spiral #N]
Review request:     Verify all [VERIFY] tagged elements for accuracy, currency,
                    and appropriate scope for this learner level.
Flag:               Any errors, scope mismatches, or outdated information.
Return:             Corrected content or approval to advance to Beta status.
```

### Step 4: Apply corrections and update status
Apply any domain expert corrections. Remove all `[VERIFY]` tags.
Update status to `Beta — educator verified, not yet piloted`.
Content does not advance to Gold until student pilot feedback is collected and revisions applied.

---

## Output Format

```
CONTENT OBJECT
──────────────────────────────────────────────────
Format:             [Concept Explainer / Worked Example / Practice Problem /
                     Hint Progression / Lesson Scaffold / Reference Summary]
Subject:            [domain]
Learning Objective: [precise]
Knowledge Type:     [Declarative / Procedural / Conceptual-Principle]
Bloom Level:        [Apply / Analyze / Evaluate / Create]
Difficulty:         [Foundational / Standard / Challenge / Transfer — for problems]
Spiral Tag:         [New — Bloom: [level] / Spiral #N — Bloom: [level] / N/A]
Domain Expert:      [assigned — verification pending]
Status:             [Alpha — awaiting domain expert verification]

─── CONTENT ───────────────────────────────────────────────────
[Generated content here]

─── VERIFICATION LOG ──────────────────────────────────────────
[VERIFY] tags: [list of items flagged for domain expert]
Domain expert sign-off: [pending / approved / corrections applied]
```

**Status progression:**
- **Alpha** — content complete, unverified. Do not share with students.
- **Beta** — domain expert verified. Not yet piloted with students.
- **Gold** — piloted, revised, ready to ship.
Nothing advances from Alpha to Beta without named domain expert sign-off.
Nothing advances from Beta to Gold without student pilot feedback.
