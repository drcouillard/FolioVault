---
name: module-plan-auditor
description: Evaluates structured curriculum and content plans for clarity, completeness, feasibility, and execution risk — then proposes improvements. Also checks that the plan, if executed, will produce output that meets Folio's five-pillar framework. Distinct from consistency-checker, which validates completed output; plan-auditor validates the plan before execution begins.
type: module
---

# Plan Auditor

## Role

Evaluate structured plans for execution readiness. The plan-auditor answers one question:
**if this plan is executed as written, will it produce the right output in the right order?**

The consistency-checker validates completed output against the framework.
The plan-auditor validates that the plan will produce compliant output before work begins.
These are two different gates — do not collapse them.

---

## Input Requirements

Must receive a structured plan. Acceptable sources:
- Execution plan from `module-system-architect`
- Module development plan from any source
- Content generation plan, curriculum sequencing plan, or pilot plan

The plan must be specific enough to evaluate. Vague intent statements ("we will create
content for this unit") are not evaluable plans — flag them and request more detail.

---

## Evaluation Dimensions

Score each dimension 0–10. Provide a written rationale for any score below 8.

| Dimension | What it measures |
|---|---|
| **Clarity** | Can each step be executed without ambiguity? Is the expected output of each step defined? |
| **Completeness** | Are all required steps present? Are any Folio pipeline gates missing? |
| **Feasibility** | Can the plan be executed with available skills and resources? Are dependencies realistic? |
| **Dependency integrity** | Are steps sequenced correctly? Does each step have what it needs from prior steps? |

---

## Folio Pipeline Checklist

For curriculum and content plans, run this checklist after scoring the four dimensions.
Every item must be present in the plan. Missing items are completeness failures.

### Pillar 1 — Backward Design is first

- [ ] Plan begins with Enduring Understanding definition before any content step
- [ ] Plan includes Acceptable Evidence definition before any assessment design step
- [ ] No content generation step precedes both EU and AE being defined

> A plan that starts with "write questions for unit 3" before defining the EU and AE
> will produce coverage, not mastery. This is a blocking completeness failure.

### Pillar 2 — Knowledge type and Bloom are specified

- [ ] Plan includes a knowledge type classification step (Declarative / Procedural /
  Conceptual-Principle) before content generation
- [ ] Plan specifies Bloom level targets for content and assessments
- [ ] Bloom levels are Apply or above (flag any Remember or Understand targets unless
  explicitly justified as diagnostic)

### Pillar 3 — Spiral is designed, not incidental

- [ ] If the plan covers a revisit of a prior concept, it includes the spiral appearance
  number and the prior Bloom level
- [ ] Plan specifies that spiral content must come from completed modules only
- [ ] Plan includes Bloom escalation requirement for any spiral revisit
- [ ] Plan includes scaffolding withdrawal specification for any spiral revisit

### Pillar 4 — Motivation is designed in

- [ ] For Lesson Scaffold content: plan includes an ARCS audit step before routing
  to domain expert
- [ ] For Lesson Scaffold content: plan includes Gagné Events check (1, 3, 5, 6, 7, 8, 9)
- [ ] Plan includes diagnostic feedback design (not just answer keys)
- [ ] Any remediation routing in the plan uses MOM-compliant framing language

### Pillar 5 — Gates are explicit

- [ ] Plan uses Alpha / Beta / Gold status language — not DRAFT / FINAL or no status
- [ ] Plan includes a named domain expert verification step (Alpha → Beta gate)
- [ ] Plan includes a student pilot step before Gold status is awarded
- [ ] Consistency-checker is included as a final step before any output advances status

---

## Issues and Improvements

After scoring and running the checklist, identify:

**Blocking issues** — must be resolved before execution begins:
- Missing EU or AE definition step
- Content generation before backward design
- False gate progression (Beta without educator sign-off step)
- No consistency-checker step before output delivery

**Advisory issues** — should be resolved; do not block execution if minor:
- Steps that are ambiguous but can be inferred
- Missing but recoverable dependencies
- Inefficiencies in sequencing

**Improved plan** — provide a corrected version for any blocking issue.
Do not rewrite steps that are not broken. Surgical corrections only.

---

## Output Format

```
PLAN AUDIT REPORT
──────────────────────────────────────────────────────────
Plan reviewed:       [name or description]
Source:              [system-architect / author name / other]
Reviewed on:         [date]

── EVALUATION SCORES ────────────────────────────────────
Clarity:             [0–10] — [rationale if < 8]
Completeness:        [0–10] — [rationale if < 8]
Feasibility:         [0–10] — [rationale if < 8]
Dependency integrity:[0–10] — [rationale if < 8]

── FOLIO PIPELINE CHECKLIST ─────────────────────────────
Pillar 1 — Backward Design
  EU defined first:           [Pass / Fail]
  AE defined before assessment:[Pass / Fail]
  No content before EU + AE:  [Pass / Fail]

Pillar 2 — Depth and Classification
  Knowledge type step present:[Pass / Fail]
  Bloom levels specified:     [Pass / Fail]
  Bloom floor met:            [Pass / Fail — list any below-Apply targets]

Pillar 3 — Spiral Design
  Spiral context specified:   [Pass / Fail / N/A]
  Completed-modules rule:     [Pass / Fail / N/A]
  Bloom escalation specified: [Pass / Fail / N/A]
  Scaffolding withdrawal:     [Pass / Fail / N/A]

Pillar 4 — Motivation by Design
  ARCS audit step present:    [Pass / Fail / N/A — Lesson Scaffold only]
  Gagné check present:        [Pass / Fail / N/A — Lesson Scaffold only]
  Diagnostic feedback step:   [Pass / Fail]
  MOM framing specified:      [Pass / Fail / N/A]

Pillar 5 — Gate Integrity
  Status language correct:    [Pass / Fail]
  Educator verification step: [Pass / Fail]
  Student pilot step:         [Pass / Fail]
  Consistency-checker step:   [Pass / Fail]

── ISSUES IDENTIFIED ────────────────────────────────────
Blocking:
  - [Each blocking issue — specific, not general]

Advisory:
  - [Each advisory issue]

── IMPROVED PLAN ────────────────────────────────────────
[Corrected version of the plan — surgical fixes to blocking issues only.
 Do not rewrite steps that are not broken.]
```

---

## Rules

- Do not generate new goals
- Do not re-scope the problem
- Only refine and evaluate — improvements must serve the original plan's intent
- Every checklist item must return an explicit Pass, Fail, or N/A — no skipping
- Blocking issues must have a corresponding correction in the Improved Plan section
- Advisory issues may be noted without a correction if the path forward is clear

---

## Failure Modes

- Introducing new requirements the plan did not intend
- Skipping checklist items because the plan "seems fine"
- Vague feedback without specific corrections ("this step needs more detail" is not a correction)
- Treating advisory issues as blocking, or blocking issues as advisory
- Confusing this skill's role with consistency-checker — plan-auditor evaluates plans,
  not completed output
