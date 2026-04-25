---
name: protocol-curriculum-design
version: 2.1
description: >
  Designs instructional curricula, learning module structures, semester arcs, and
  prerequisite maps using a dual Bloom's Revised Taxonomy + Dee Fink Significant
  Learning framework with UDL compliance and backward design. Use this skill
  whenever the user asks to design a course, module, lesson, learning objective,
  semester plan, or curriculum for ANY subject or domain (STEM, humanities,
  language, professional training, etc.). Also triggers for: "design a module for
  X", "build a curriculum for Y", "what should a course on Z cover", "scaffold
  learning for W", "map prerequisites for V", "create a lesson plan", or any
  request involving learning design, instructional sequencing, or educational
  planning. Always use this skill before calling the verb-taxonomy-router — the
  architect defines scope and objectives; the router then determines assessment
  and interaction formats.
---

# Curriculum Architect Skill

## Role in the System

This skill occupies Layer 2 of the platform execution hierarchy:

```
Master Orchestrator (Layer 1)
  └── Curriculum Design (this skill — Layer 2)
        └── Verb Taxonomy Router (Layer 3)  ← explicit handoff
              └── Assessment + Mastery / UX / Domain Expert / Analytics (Layers 4–7)
```

The Curriculum Design skill receives routing decisions from the Master Orchestrator
and produces a structured curriculum specification. It does NOT design
assessments, interactions, or scoring rubrics — those are the Verb Taxonomy
Router's domain. The skill's output is always a structured handoff package
for the router.

---

## Core Frameworks (non-negotiable)

### 1. Bloom's Revised Taxonomy — cognitive scaffolding
Every module must specify entry stage, target stage, and a transition activity
between them. No stage may be skipped without explicit diagnostic justification.

| Stage | Action verbs | Phase alignment |
|---|---|---|
| Remembering | recall, identify, list, name | Phase 1 entry |
| Understanding | explain, describe, classify, compare | Phase 1 target / Phase 2 entry |
| Applying | compute, solve, use, execute, demonstrate | Phase 2 target |
| Analyzing | differentiate, examine, break down, attribute | Phase 3 |
| Evaluating | judge, justify, critique, defend | Phase 3–4 |
| Creating | design, construct, formulate, produce | Phase 4 |

### 2. Dee Fink's Significant Learning — durable growth
Every module must activate at least one Fink dimension explicitly:

- **Foundational Knowledge** — core concepts and information
- **Application** — skills, thinking, and real-world use
- **Integration** — connecting ideas across topics or domains
- **Human Dimension** — personal and social implications
- **Caring** — values, interests, and motivation
- **Learning How to Learn** — metacognitive strategies

### 3. Backward Design (Wiggins & McTighe)
Always author in this order, even when presenting differently to the learner:
1. Terminal outcome defined first
2. Assessment evidence designed second
3. Content and activities selected third

### 4. UDL Compliance (Universal Design for Learning)
Every module must include:
- **Engagement**: real-world hook + at least one learner autonomy/choice moment
- **Representation**: ≥ 2 content formats (visual, textual, interactive, symbolic)
- **Action & Expression**: ≥ 2 ways to demonstrate mastery

---

## Semester Arc Model

All curricula default to a 16-week, 4-phase arc unless explicitly overridden:

```
Phase 1 — Foundation      Wk 1–4    Bloom ceiling: Understand
Phase 2 — Application     Wk 5–8    Bloom ceiling: Apply
Phase 3 — Analysis        Wk 9–12   Bloom ceiling: Evaluate
Phase 4 — Synthesis       Wk 13–16  Bloom ceiling: Create + Teach-Back Capstone
```

Each phase closes with a **Bloom Gate** — a cumulative formative checkpoint
that must be passed before the next phase unlocks.

### Dual-Outcome Model
Every module is designed to produce two simultaneous competencies:
- **Learner competency** — can perform the skill independently
- **Tutor competency** — can explain, correct, and demonstrate to a peer

The tutor competency is operationalized through the **Explain-It-Back (EIB)**
task, scaffolded across phases:
- Phase 1: EIB seeded as preview (not evaluated)
- Phase 2–3: EIB formally evaluated (7-point rubric)
- Phase 4: Full Teach-Back Capstone

---

## Learner Profile Defaults

| Setting | Default | Override trigger |
|---|---|---|
| Entry knowledge | All prerequisite content assumed mastered | Explicit remediation flag |
| Pacing | Self-paced, independent | Cohort/cohort-sync flag |
| Domain expertise assumed | PhD-level author perspective | Learner level field |
| Context | Self-paced digital learning environment | Deployment flag |

---

## Output: The Master Module Template

When producing a module, always populate all 10 sections. See
`references/master-module-template.md` for the full field specification.

Summary of 10 sections:
1. **Module Identity** — ID, title, domain, phase, prerequisites, time
2. **Learning Objectives** — primary, tutor-acumen companion, sub-objectives
3. **Bloom Stage Progression** — entry, target, transition, checkpoints, branching
4. **Fink Significance Goals** — dimensions, elements, surface mechanism
5. **UDL Compliance Layer** — engagement, representation, action & expression
6. **Interactive Activity Flow** — 5-step guided discovery sequence
7. **Assessment Checkpoints** — micro-checks, formative, phase gate, remediation, acceleration
8. **Reflection & Transfer Prompt** — consolidation, metacognitive, transfer bridge
9. **Explain-It-Back Task** — scenario, misconception, rubric, phase-appropriate version
10. **Extension into Creation** — Bloom Create tier, synthesis, portfolio flag

---

## Handoff Protocol to Verb Taxonomy Router

Upon completing the module specification, this skill produces a
structured handoff package. This is the ONLY output the router accepts.

```
CURRICULUM DESIGN HANDOFF
─────────────────────────────
Module ID: [e.g. STAT-W5-M1]
Domain: [subject]
Phase: [1–4]
Primary Objective Verb: [single Bloom action verb]
Bloom Target Stage: [Remembering / Understanding / Applying / Analyzing / Evaluating / Creating]
Sub-Objective Verbs: [list]
Fink Dimensions Active: [list]
UDL Representation Formats Selected: [list]
Preferred Interaction Style: [from pedagogical priority]
EIB Phase: [seed / evaluated / capstone]
Misconception for EIB: [specific error to target]
Transfer Task Context: [novel scenario description]
─────────────────────────────
→ ROUTE TO: verb-taxonomy-router
```

Do not proceed to assessment design, interaction design, or scoring without
first completing this handoff. The router reads it and determines evidence
format, assessment type, mastery criteria, and interaction spec.

---

## Pedagogical Priority Modes

The architect adjusts emphasis based on the declared priority:

| Priority | Emphasis |
|---|---|
| Conceptual depth | Longer Step 3 (worked example deconstruction), deeper Fink Integration layer, richer reflection prompts |
| Lots of practice | 6–8 practice problems across 3 tiers, tighter Bloom checkpoints, more micro-checks |
| Real-world application | Stronger hook scenario, richer transfer task, creation challenge tied to professional context |
| Balanced | Equal weight across all three; default for multi-domain courses |

---

## Execution Checklist

Before producing any module output, verify:

- [ ] Backward design order followed (outcome → evidence → activity)
- [ ] Bloom entry AND target stages both specified
- [ ] Transition activity described (not just named)
- [ ] At least one Fink dimension explicitly surfaced with a mechanism
- [ ] UDL: ≥2 representation formats, ≥2 expression options
- [ ] Remediation path specified (not just "retry")
- [ ] Transfer task uses a novel context not seen in practice problems
- [ ] EIB task appropriate to phase
- [ ] Handoff package produced for verb-taxonomy-router

---

## Reference Files

- `references/master-module-template.md` — Full 10-section field specification
  with placeholder text for every field. Read when populating a new module.
- `references/eib-rubric.md` — Explain-It-Back 7-point rubric with phase
  variants and scoring guidance. Read when designing Section 9.
- `../verb-taxonomy-router/references/verb-bank-by-domain.md` — Curated verb
  list by domain (STEM, Geography, Humanities, Language, Professional) mapped
  to Bloom tier. Read when writing or verifying learning objective verbs.
  Shared reference — do not duplicate.
