# Lesson Scaffold Format

A lesson scaffold is the full instructional arc for a single concept or topic — it combines
an explainer, a worked example, practice problems, and hint progressions into a coherent sequence.

Use this format when the request is to "build a lesson" or "create a module" on a topic,
as opposed to generating a single content piece.

---

## Lesson Scaffold Template

```
LESSON: [TOPIC NAME]
Exam Level: [FE / PE] | Discipline: [Discipline]
Estimated time: [10–20 min for FE tier / 20–35 min for PE tier]
Bloom's Target: [Highest level this lesson reaches]
Prereqs: [List 1–3 concepts the student must already know]

---

## SECTION 1 — CONCEPT EXPLAINER

[Insert full explainer using explainer-format.md template]

---

## SECTION 2 — WORKED EXAMPLE

[Insert one worked example using worked-example-format.md template]
[Difficulty: Tier 2 (Application) for FE / Tier 2–3 for PE]

---

## SECTION 3 — GUIDED PRACTICE

[Insert 2 practice problems using problem-templates.md]
[Problem 1: Tier 1 or 2 — reinforces the core formula]
[Problem 2: Tier 2 or 3 — extends to a variant or boundary condition]

For each problem, attach a 4-level hint progression using hint-progression-guide.md.

---

## SECTION 4 — EXAM CHECKPOINT

[1 Tier 3 (Analysis) problem that synthesizes this topic with at least one adjacent concept.
This is the mastery check. It should feel like an actual FE or PE exam item.]

[Include full solution and hint progression.]

---

## LESSON SUMMARY

Key takeaways (3–5 bullets):
- [Fact or rule 1]
- [Fact or rule 2]
- [Fact or rule 3]

Mastery indicator: [One sentence describing what a student who has mastered this topic can do.]

---

HANDOFF NOTE
[Content type: Lesson Scaffold]
[Exam level / Discipline / Topic]
[Bloom's level reached]
[Recommended next: assessment-adaptive-mastery for mastery tracking, or ux-instructional-design for interaction design]
```

---

## Sequencing Rules

**Explainer before problems.** The student reads the concept before attempting practice.
Do not reorder sections.

**Scaffold difficulty within the lesson.** Problems increase in difficulty from Section 3 to Section 4.
Section 3, Problem 1 should be the easiest item in the lesson. The Section 4 checkpoint should be the
hardest.

**Worked example bridges explainer to practice.** The worked example uses the same formula and concept
as the explainer, applied to a new scenario. It is not a repeat of the explainer's Quick Example.

**Hint progressions are mandatory for all practice problems.** Every problem in Sections 3 and 4
requires a full 4-level hint progression. Do not deliver a lesson without them.

---

## Lesson Length Guidelines

| Exam level | Sections | Target word count |
|---|---|---|
| FE | 1 explainer + 1 worked example + 2 practice + 1 checkpoint | 1200–1800 words |
| PE | 1 explainer + 1 worked example + 2 practice + 1 checkpoint | 1600–2400 words |

PE lessons run longer because the checkpoint problem requires more complex scaffolding and
the worked example typically involves more steps.

If the content runs significantly over the upper bound, split into two lessons:
- Lesson A: Foundational (Tier 1–2 content)
- Lesson B: Advanced Application (Tier 2–3 content)