# Folio Instructional Design Framework

This file defines Folio's synthesized pedagogical model. It is the
theoretical foundation that governs how content is sequenced, how
questions are designed, how mastery is defined, and how motivation is
sustained. It is a locked design document — changes require a formal
decision log entry.

For the full comparative analysis of source frameworks, see:
FolioVault/06 - Research/folio-id-models-analysis.html

---

## The Five-Pillar Model

Folio's instructional design is not a single framework — it is a
synthesis of the most defensible principles from multiple traditions,
operating at different layers without conflict.

---

### Pillar 1 — Design Backward
*Source: McTighe & Wiggins (Backward Design); Dick & Carey*

Every module begins with two questions, in this order, before any
content is written:

1. **What is the enduring understanding?** — What should a student
   still be able to do with this concept a year from now? Not "what
   will they be able to recite" but "what will they be able to use."
2. **What evidence confirms that understanding?** — What would a
   student have to demonstrate, not just answer, to prove genuine
   mastery?

Only after both questions are answered does content design begin.
This is not optional. Writing questions before defining the
enduring understanding produces coverage, not mastery.

**Operational rule:** Every module spec must include an Enduring
Understanding statement and an Acceptable Evidence definition before
any questions are drafted.

---

### Pillar 2 — Think at Depth
*Source: Bloom's Revised Taxonomy; Bruner*

Folio questions target Apply level or above. Always.

The six levels of Bloom's Revised Taxonomy, in order:
Remember → Understand → **Apply → Analyze → Evaluate → Create**

Folio operates above the line. Remember and Understand questions
are not Folio questions — they test what a student memorized, not
whether they can use what they know.

**Bloom level tagging is mandatory** on every practice question.
The tag is internal metadata — students do not see it.

**Bloom level escalates across spiral revisits.** The first time a
student encounters map scale, it is an Apply-level question. By the
third spiral appearance, it should reach Analyze. By the fifth,
it should appear as background knowledge in an Evaluate-level
question. This is what distinguishes Folio's spiral from Saxon's:
Folio deepens; Saxon repeats.

**Content type classification** (Smith & Ragan) governs strategy
selection:
- **Declarative** — knowing that (facts, definitions)
- **Procedural** — knowing how (step-by-step operations)
- **Conceptual-Principle** — knowing why (relationships, systems)

Each type requires a different instructional approach. Classify
before designing.

---

### Pillar 3 — Spiral and Deepen
*Source: Bruner (Spiral Curriculum + Scaffolding); Saxon Math*

Every module after the first weaves prior concepts into its
practice set. This is structural — it is not optional and it is
not decorative review.

**Saxon's implementation (the floor):** ~30% new concept questions,
~70% prior concept questions per practice set. This is the minimum
baseline.

**Folio's extension (the ceiling):** Prior concept questions are
selected based on individual mastery state, not just module
completion order. Bloom level escalates across revisits. Scaffolding
progressively withdraws.

**Scaffolding withdrawal rule (Bruner):** When a concept first
appears, maximum support is provided — worked examples, hint
progressions, high scaffold. Each subsequent spiral appearance
reduces available scaffolding. By the third appearance, the
concept should function as assumed prior knowledge, not as taught
content.

**Operational rules:**
- Spiral tags are required on every question (see folio-voice.md,
  Section 5).
- Prior concept questions are selected from completed modules only.
  No phantom spiraling.
- Bloom level of spiral questions is tracked and escalated
  deliberately, not incidentally.

---

### Pillar 4 — Motivate by Design
*Source: Keller (ARCS); Hardré & Miller (MOM); Gagné*

Motivation in a self-paced platform cannot be assumed. It must be
designed. Every module is audited against four conditions — all
four must be present:

| Condition | Design mechanism | Folio implementation |
|---|---|---|
| **Attention** | Perceptual arousal; inquiry | Wonder hook — opens with tension, not definition |
| **Relevance** | Personal meaning; real-world stakes | Real-geography rule; why-over-rote questioning |
| **Confidence** | Calibrated difficulty; belief in success | Adaptive routing; difficulty progression; hint availability |
| **Satisfaction** | Intrinsic reward; feedback quality | Diagnostic feedback — names the misconception, not just the error |

**MOM addition — Opportunity (K–12 specific):** Adaptive routing
must never feel like a penalty. A student routed to remediation
content must experience it as "going deeper," not as "being behind."
This is a UX and copy rule, not a content rule — it governs how
the system presents routing decisions to the student.

**Gagné structural check:** Folio's content loop maps to Gagné's
Nine Events. Before any module ships, verify:
- Event 1 (Attention): Wonder hook present?
- Event 3 (Prior recall): Spiral questions present?
- Event 5 (Guidance): Worked example or hint progression present?
- Event 6 (Performance): Practice questions present?
- Event 7 (Feedback): Diagnostic feedback blocks present?
- Event 8 (Assessment): Mastery criteria defined?
- Event 9 (Transfer): At least one Challenge or Transfer difficulty
  question present?

Events 2 (state objectives) and 4 (stimulus) are intentionally
deprioritized — stating objectives kills the wonder hook; stimulus
is embedded in real-world framing.

---

### Pillar 5 — Build Iteratively, Verify Ruthlessly
*Source: SAM1 (Allen); Rapid Prototyping; ADDIE*

Folio's development cycle for each module follows SAM1:

Prototype → Educator Verify → Pilot (5 students) → Revise → Ship

**Module status language:**
- **Alpha** — functional prototype; content complete but unverified
- **Beta** — educator verified; not yet piloted with students
- **Gold** — piloted, revised, ready to ship

Nothing advances from Alpha to Beta without a named educator
sign-off. Nothing advances from Beta to Gold without pilot student
feedback.

**ADDIE analysis checklist** — run this when entering a new subject
or grade level (not for every module):
- Who is the learner? What do they already know?
- What is the performance gap?
- What constraints exist (time, access, prior exposure)?

This analysis is not required for every module within an
established subject. It is required for every new subject or grade
band.

---

## Source Framework Reference

| Framework | Role in Folio Model | Pillar |
|---|---|---|
| Bruner — Spiral Curriculum | Structural spine of curriculum architecture | 3 |
| Bruner — Scaffolding Theory | Governs hint progressions and support withdrawal | 3 |
| Bloom's Revised Taxonomy | Question depth classification; tagging system | 2 |
| McTighe & Wiggins — Backward Design | Module scoping protocol | 1 |
| Keller — ARCS | Motivational audit framework | 4 |
| Gagné — Nine Events | Lesson structure checklist | 4 |
| SAM1 — Allen | Module development cycle | 5 |
| Dick & Carey | Validates pipeline structure; mastery-before-content rule | 1 |
| Smith & Ragan | Content type classification → strategy selection | 2 |
| Hardré & Miller — MOM | Remediation UX framing; learner agency | 4 |
| Esseff — Guaranteed Learning | Enabling objectives; misconception taxonomy | 2 |
| OAR Model | Quality alignment check in educator verification | 5 |
| Rapid Prototyping | Development philosophy | 5 |
| ADDIE | New-subject analysis checklist | 5 |
| Morrison/Ross/Kemp | Validates non-linear iteration as legitimate | 5 |

---

## The Through-Line

Every principle in this framework serves one commitment: the student
understands why, not just what. Bruner called this intellectual
honesty — teaching the real idea at the right level of complexity,
not a simplified proxy that has to be unlearned later. That
commitment is Folio's founding pedagogical act. Everything else is
how it is operationalized.