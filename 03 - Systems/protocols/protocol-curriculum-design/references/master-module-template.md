# Master Module Template — Field Specification v1.0

This file defines every field in the 10-section module template. Read this before populating a new module instance.

---

## Section 1 — Module Identity

| Field | Format | Notes |
|---|---|---|
| Module ID | [DOMAIN]-W[Week]-M[Number] | e.g. STAT-W5-M1, CALC2-W2-M1 |
| Module Title | Short learner-facing title | Sentence case, ≤8 words |
| Domain / Subject | Full course name | e.g. "Calculus 2", "Statics" |
| Learner Level | Program + year | e.g. "Undergraduate Sophomore" |
| Semester Phase | Phase 1–4 with week range | From arc model |
| Textbook Reference | Chapter + section range | If curriculum has a text |
| Prerequisites Assumed Known | Bullet list | All prior knowledge the learner must have |
| Arc Position | Previous → this → next module | One-line chain |
| Estimated Time | Range in minutes | e.g. "90–110 minutes self-paced" |

---

## Section 2 — Learning Objectives

| Field | Format | Notes |
|---|---|---|
| Primary Learning Objective | "By the end of this module, the learner will be able to [verb] [skill] [context/standard]." | Written before any content or activity |
| Tutor-Acumen Companion Objective | "The learner will be able to explain [concept] clearly enough to correct [specific misconception] — as demonstrated in the EIB task." | Phase 1: stated as future target. Phase 2+: formally evaluated |
| Sub-Objectives | Numbered list, 2–4 max | Each tagged with Bloom stage |

---

## Section 3 — Bloom Stage Progression

| Field | Format | Notes |
|---|---|---|
| Entry Stage | Bloom level + "learner can [verb] [X]" | Where the learner starts |
| Target Stage | Bloom level + "learner can [verb] [X] [without scaffolding]" | Where the learner must arrive |
| Cognitive Arc | Entry → Transition → Target | Three pills displayed |
| Transition Activity | Description of the bridge interaction | Must be guided discovery, not passive |
| Mastery Checkpoint — Entry | Specific observable criterion | e.g. "3/3 micro-check correct without hints" |
| Mastery Checkpoint — Target | Specific observable criterion | e.g. "4/5 formative problems fully correct" |
| Adaptive Branching Rule | If below threshold → [remediation]. If exceeds → [acceleration]. Default → proceed. | Both branches required |
| Domain Accuracy Standard | Engineering/domain-specific precision requirements | e.g. "3 significant figures, direction with quadrant" |

---

## Section 4 — Fink Significance Goals

| Field | Format | Notes |
|---|---|---|
| Primary Fink Dimensions | 1–2 from the six | Must choose; cannot leave blank |
| Required Significant Learning Elements | ≥1 from: cross-topic connection, personal relevance, reflective prompt, self-assessment, metacognitive strategy, confidence builder | |
| How Fink Is Surfaced | Paragraph describing specific mechanism | "Where and how" — not just "what" |

---

## Section 5 — UDL Compliance Layer

| Field | Format | Notes |
|---|---|---|
| Engagement | Real-world hook description + autonomy/choice moment | Both required |
| Representation Formats | Tag list of ≥2 formats | Visual, interactive, textual, audio, symbolic |
| Representation Notes | How each format is implemented | Format without implementation is incomplete |
| Action & Expression Options | ≥2 labeled options (A, B, C) | Option C = extension path |

---

## Section 6 — Interactive Activity Flow

Five steps. Each step includes: time estimate, description, interaction type,
hint tier structure (where applicable), and feedback mechanism.

| Step | Name | Duration | Key requirement |
|---|---|---|---|
| 1 | Hook & Activation | 5–10 min | Learner attempts before method is named |
| 2 | Guided Discovery | 15–25 min | Interactive; includes 3-tier hint structure |
| 3 | Worked Example Deconstruction | 10–20 min | Learner compares their Step 1 attempt to the example |
| 4 | Scaffolded Practice | 20–35 min | 3 tiers: full scaffold → partial → independent; ≥2 problems per tier |
| 5 | Transfer Task | 10–15 min | Novel context; not a variant of practice problems |

### Hint Tier Structure (Step 2 and Tier 1–2 practice)
- Hint 1: Conceptual nudge (no computation revealed)
- Hint 2: Procedural setup (structure revealed, values not)
- Hint 3: Full worked solution shown

### Practice Problem Tiers
- Tier 1 (Full scaffold): Step fields shown and validated sequentially
- Tier 2 (Partial scaffold): Key setup provided; learner completes independently
- Tier 3 (Independent): No scaffold; hints available but usage logged

---

## Section 7 — Assessment Checkpoints

| Field | Format | Notes |
|---|---|---|
| Micro-Checks | 2–3 inline checks with placement, type, and feedback spec | No stakes; immediate feedback |
| Module Formative Assessment | Problem count, types, pass threshold, Bloom level assessed | 4–6 problems standard |
| Phase Gate | Only if final module of phase; cumulative scope, threshold | Leave blank otherwise |
| Remediation Path | Error type → specific remediation (2+ problems per error type) | Not "retry" — specify content |
| Acceleration Path | What unlocks on first-attempt perfect score | Must exist for every module |

---

## Section 8 — Reflection & Transfer Prompt

| Field | Format | Notes |
|---|---|---|
| Consolidation Reflection Prompt | Open-ended question after formative assessment | Must connect to a named Fink dimension |
| Metacognitive Strategy Prompt | Prompt to name understanding gap | If zero hints used, alternate version required |
| Transfer Bridge | One sentence linking this module to the next | Creates narrative continuity |

---

## Section 9 — Explain-It-Back Task

| Field | Phase 1 version | Phase 2–3 version | Phase 4 version |
|---|---|---|---|
| Format | Preview prompt only — no evaluation | Simulated peer scenario with specific misconception | Full teach-back: explanation + worked example + practice problem |
| Evaluation | None | 7-point EIB rubric | Capstone rubric |
| Pass threshold | N/A | 5/7 points | Per capstone spec |

### EIB Rubric (Phase 2–3) — 7 points total
| Criterion | Points |
|---|---|
| Accuracy — correct content | 0–2 |
| Clarity — peer-accessible language | 0–2 |
| Misconception addressed — specific error named and corrected | 0–2 |
| Example used — illustrative worked step or case | 0–1 |

Misconception selection guidance: choose the most common transition error at
the current Bloom boundary (e.g., Phase 1→2: procedural errors; Phase 2→3:
conceptual/transfer errors; Phase 3→4: design/synthesis errors).

---

## Section 10 — Extension into Creation

| Field | Format | Notes |
|---|---|---|
| Unlock condition | "5/5 first attempt" or explicit learner opt-in | Never the default path |
| Creation Challenge Prompt | Generative task at Bloom's Create level | Must require genuine design decisions |
| Cross-Module Synthesis | Optional connection to prior module | Fink Integration dimension |
| Engineering/Domain Plausibility Check | Automated flags for implausible parameters | Domain-specific |
| Portfolio Flag | Yes / No / Optional + learning outcomes demonstrated | |