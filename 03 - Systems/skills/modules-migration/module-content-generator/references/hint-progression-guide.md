# Hint Progression Guide

Hint progressions are scaffolded support sequences for a student who is stuck on a problem.
They reveal just enough to unblock the student at their current sticking point — without giving away
the solution prematurely.

A hint progression is always attached to a specific practice problem. It cannot be generated without
the problem and its full solution path being defined first.

---

## Hint Progression Structure

A standard hint progression has 4 levels. Each level reveals more than the last.
Generate all 4 levels for every problem. The platform decides which level to show based on
how long the student has been stuck.

```
HINT PROGRESSION: [TOPIC] — [PROBLEM REFERENCE]

---

HINT 1 — ORIENT (Concept identification)
[Help the student identify *which* concept or formula family applies.
Do not name the specific formula yet. Point them toward the right domain.]

"Think about what type of [system/scenario/relationship] this is. Which concept from [topic area]
applies when [condition from the problem]?"

---

HINT 2 — ANCHOR (Formula identification)
[Now name the governing equation. Write it out in symbolic form.
Do not substitute any values yet.]

"The governing equation here is:
[Formula]
Where [variable] is [definition] and [variable] is [definition]."

---

HINT 3 — UNLOCK (First substitution)
[Show the student the setup — values substituted into the formula — but leave the arithmetic incomplete.
Stop before the final calculation.]

"Substituting the given values:
[Formula with values plugged in, result left as '= ?']
What does this simplify to?"

---

HINT 4 — RESOLVE (Guided final step)
[Walk through the final calculation step-by-step. This is one step short of giving the answer outright —
the student should still perform the final arithmetic.]

"Complete the calculation:
[Show the arithmetic setup]
What is the final value, including units?"

[If there is a unit conversion required in the last step, flag it here.]

---

ANSWER REVEAL (shown only after student submits or requests it)
[State the correct answer with full units and a one-sentence explanation of what it means.]
"The answer is [value + unit]. This means [brief physical interpretation]."
```

---

## Hint Writing Rules

**Each hint must be independent.** A student might request Hint 3 without having seen Hints 1 or 2.
Write each hint so it makes sense in isolation.

**Hints are questions, not answers.** Frame each hint as something that redirects the student's thinking,
not a sentence that just states the next step for them.
- ✓ "Which formula applies when the beam is simply supported and the load is distributed?"
- ✗ "Use the distributed load deflection formula."

**Do not use filler empathy phrases.**
- ✗ "Great question! Let's think about this together."
- ✓ Just deliver the hint.

**Hints must not contradict each other.** Each level must be consistent with the full solution path.
Verify the hint sequence against the worked solution before outputting.

**Unit flags are mandatory at Hint 4** if a conversion is part of the final step. Students frequently
lose points on correct setups because they forget to convert.

---

## Hint Length Guidelines

| Hint level | Target length |
|---|---|
| Hint 1 (Orient) | 1–2 sentences |
| Hint 2 (Anchor) | 2–4 lines (includes equation) |
| Hint 3 (Unlock) | 3–5 lines (includes partial substitution) |
| Hint 4 (Resolve) | 4–6 lines (includes full setup, stops before result) |

Hints are not mini-lessons. Keep them tight.