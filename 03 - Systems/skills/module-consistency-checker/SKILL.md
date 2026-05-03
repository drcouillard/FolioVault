---
name: consistency-checker
description: The final integrity gate before any content or plan output is delivered. Validates alignment and logical consistency across all prior pipeline stages, and checks that output adheres to Folio's five-pillar instructional design framework. Run this skill last, before any content advances status or routes downstream.
type: module
---

# Consistency Checker

## Role

Validate alignment and logical consistency across all prior stages in a pipeline,
and verify that output meets Folio's instructional design requirements.

This is the final integrity gate before output is delivered. It does not generate
content, make routing decisions, or redesign work — it checks and reports.

---

## Validation Scope

Run all six validation categories in order. Do not skip any.

---

### 1. Goal ↔ Plan Alignment

- Does the output actually achieve the stated goal?
- Are all goal constraints respected?
- Does the output serve the Enduring Understanding it was built for?

---

### 2. Intent ↔ Execution Fit

- Does the output match the classified intent?
- Is the level of structure appropriate for the content type requested?

---

### 3. Internal Consistency

- No conflicting steps or instructions
- No circular dependencies
- No redundant phases
- No scope drift beyond the original goal

---

### 4. Scope Integrity

- No unnecessary expansion beyond goal
- No missing required components for the content type

---

### 5. Folio Framework Compliance

Check each pillar in order. Every check must have an explicit pass or fail verdict.

#### Pillar 1 — Backward Design

| Check | Pass condition |
|---|---|
| Enduring Understanding present | EU statement exists and is stated as an enduring idea, not a topic |
| Acceptable Evidence present | AE definition exists and specifies what the learner must *demonstrate* |
| Output aligns to AE | The content or assessment directly builds toward or measures the stated AE — not a proxy |

> If EU or AE is missing: **stop**. Flag for backward design before proceeding.
> Content without backward design produces coverage, not mastery.

#### Pillar 2 — Think at Depth

| Check | Pass condition |
|---|---|
| Bloom tags present | Every practice question and assessment item carries a Bloom level tag |
| Bloom floor met | All tags are Apply or above (flag any Remember or Understand — require justification) |
| Knowledge type classified | Declarative / Procedural / Conceptual-Principle is stated |
| Strategy matches knowledge type | The instructional format used is appropriate for the classified knowledge type |

> Declarative content in a Conceptual-Principle format (or vice versa) is a strategy mismatch.
> Flag it — do not pass it as internally consistent.

#### Pillar 3 — Spiral and Deepen

| Check | Pass condition |
|---|---|
| Spiral tags present | Every practice problem carries a spiral tag [New] or [Spiral #N] |
| No phantom spiraling | All prior-concept questions are drawn from objectives in completed modules |
| Bloom escalation on revisits | For Spiral #2+, the Bloom level is higher than the prior appearance |
| Scaffolding withdrawal applied | For Spiral #2+, maximum hint level is reduced per the scaffolding withdrawal rule |

> A spiral tag without Bloom escalation is incomplete. A [Spiral #2] question at the same
> Bloom level as [Spiral #1] is a content design error — flag it.

#### Pillar 4 — Motivate by Design

Run this check only for Lesson Scaffold output. For other content types, check only
the items marked (all types).

| Check | Type | Pass condition |
|---|---|---|
| Diagnostic feedback present | All types | Feedback names the misconception or gap — not just correct/incorrect |
| MOM framing on remediation | All types | Any remediation routing uses "going deeper" framing, not "going back" language |
| Wonder hook present | Lesson Scaffold | First element opens with tension, question, or real-world stakes — not a definition |
| ARCS: Attention | Lesson Scaffold | Wonder hook creates genuine inquiry or perceptual arousal |
| ARCS: Relevance | Lesson Scaffold | Real-world stakes or context present — not a textbook scenario |
| ARCS: Confidence | Lesson Scaffold | Difficulty progression present (accessible → standard → challenge) |
| ARCS: Satisfaction | Lesson Scaffold | Diagnostic feedback blocks present at every practice step |
| Gagné Event 1 | Lesson Scaffold | Wonder hook present |
| Gagné Event 3 | Lesson Scaffold | Prior knowledge activation from a completed module present |
| Gagné Event 5 | Lesson Scaffold | Guidance (explainer + worked example) present |
| Gagné Event 6 | Lesson Scaffold | Independent practice questions present |
| Gagné Event 7 | Lesson Scaffold | Diagnostic feedback for each practice question present |
| Gagné Event 8 | Lesson Scaffold | Reflection or mastery check present |
| Gagné Event 9 | Lesson Scaffold | Transfer or challenge problem in a novel context present |

#### Pillar 5 — Status and Gate Integrity

| Check | Pass condition |
|---|---|
| Status applied | Content carries Alpha, Beta, or Gold status — not DRAFT/FINAL or no status |
| Alpha gate | Alpha content has not been shared with students |
| Beta gate | Beta status requires a named domain expert sign-off on record |
| Gold gate | Gold status requires documented student pilot feedback |
| Domain expert named | Any content at Beta or Gold has a named verifier on record |

> If content is marked Beta or Gold without the corresponding gate evidence: downgrade
> status to Alpha and flag for re-verification. Do not pass gated status without evidence.

---

### 6. Cross-Skill Handoff Integrity

If the output includes downstream routing instructions, verify:

- All required fields are populated for the receiving skill
  (e.g., knowledge type and Bloom level passed to content-generator;
  spiral # and Bloom level passed to mastery-tracker)
- No routing destination is listed without a clear trigger condition
- No skill is routed to that is not relevant to the output type

---

## Output Format

```
CONSISTENCY CHECK REPORT
──────────────────────────────────────────────────────────

Content / Plan reviewed:  [name or description]
Content type:             [Lesson Scaffold / Practice Problem / Assessment Spec / Plan / etc.]
Reviewed on:              [date]

── GENERAL ALIGNMENT ────────────────────────────────────
Goal ↔ Plan:              [Pass / Fail — note if fail]
Intent ↔ Execution:       [Pass / Fail — note if fail]
Internal consistency:     [Pass / Fail — note if fail]
Scope integrity:          [Pass / Fail — note if fail]

── FOLIO FRAMEWORK COMPLIANCE ───────────────────────────

Pillar 1 — Backward Design
  EU present:             [Pass / Fail]
  AE present:             [Pass / Fail]
  Output aligns to AE:    [Pass / Fail]

Pillar 2 — Think at Depth
  Bloom tags present:     [Pass / Fail]
  Bloom floor met:        [Pass / Fail — list any below-Apply items]
  Knowledge type stated:  [Pass / Fail]
  Strategy match:         [Pass / Fail]

Pillar 3 — Spiral and Deepen
  Spiral tags present:    [Pass / Fail]
  No phantom spiraling:   [Pass / Fail]
  Bloom escalation:       [Pass / Fail / N/A — first encounter]
  Scaffolding withdrawal: [Pass / Fail / N/A — first encounter]

Pillar 4 — Motivate by Design
  Diagnostic feedback:    [Pass / Fail]
  MOM framing:            [Pass / Fail / N/A]
  Wonder hook:            [Pass / Fail / N/A — Lesson Scaffold only]
  ARCS conditions:        [Pass / Fail / N/A — list any failing condition]
  Gagné events:           [Pass / Fail / N/A — list any missing event]

Pillar 5 — Status and Gates
  Status applied:         [Pass / Fail]
  Gate evidence present:  [Pass / Fail]
  Domain expert named:    [Pass / Fail / N/A]

── CROSS-SKILL HANDOFF ──────────────────────────────────
Downstream routing:       [Pass / Fail / N/A — note any missing fields]

── VERDICT ──────────────────────────────────────────────
Overall:    [Aligned / Partially Aligned / Misaligned]

Issues:
  - [List each failure clearly — which check, what is wrong]

Required corrections:
  - [Specific fix for each issue — not general suggestions]

Blocked items (do not advance until resolved):
  - [Any item that requires a stop — missing EU/AE, false gate status, phantom spiraling]
```

---

## Operating Rules

- Be strict — this is a validation gate, not a suggestion layer
- Every check must return an explicit Pass or Fail — do not skip or mark as N/A unless
  the check genuinely does not apply to the content type
- Do not rewrite the reviewed content — flag issues and specify corrections
- Distinguish between blocking failures (must fix before advancing) and advisory flags
  (should fix before shipping, but does not block immediate routing)
- Pillar 1 failures (missing EU or AE) are always blocking
- False gate status (Beta/Gold without evidence) is always blocking
- Phantom spiraling is always blocking
- Missing Bloom tags are always blocking

---

## Constraints

- Do not introduce new features, content, or scope
- Do not re-plan or redesign from scratch
- Do not duplicate plan-auditor responsibilities — plan-auditor evaluates execution
  readiness; consistency-checker validates framework compliance
