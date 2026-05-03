---
name: folio-preflight-verifier
description: >
  Automated preflight verification layer for Folio Interactive content. Runs
  before any content is sent to an educator for review. Replaces Gate 1 in
  folio-educator-verification. Use this skill whenever a Folio content object
  — module spec, practice question, question set, wonder hook, worked example,
  or diagnostic feedback block — is ready to move from DRAFT to READY FOR
  REVIEW. Trigger phrases include: "run preflight on this", "check this before
  sending to the educator", "is this ready for review", "verify this content",
  "gate check this", "preflight this module", "preflight these questions", or
  any situation where Folio content has been drafted and needs to be cleared
  before the educator sees it. Always run this skill before calling
  folio-educator-verification. If this skill flags issues, content returns to
  draft — do not advance to educator review until all flags are resolved.
---

# Folio Preflight Verifier

## Mission

Catch every structural, voice, and tagging problem a skill can catch —
before an educator's time is spent on it. This skill is the copy editor.
The educator is the subject matter expert. Keep those roles clean.

**What this skill catches:**
- Folio voice violations (forbidden words, wrong-answer framing, false positivity)
- Structural completeness (missing required fields or sections)
- Missing or malformed spiral tags
- Missing or below-floor Bloom level tags
- Gagné checklist failures (for module specs)
- Missing `[VERIFY]` tags on factual claims
- Missing wonder hook or Big Idea Callback instances
- Feedback blocks that don't name a misconception

**What this skill cannot catch (educator's job):**
- Whether a factual claim is true
- Whether feedback correctly identifies the misconception a student would hold
- Whether complexity genuinely matches grade level in practice
- Whether a question stem is truly unambiguous

---

## Input

This skill accepts one of three input types:

| Input type | What it contains |
|---|---|
| Module spec | Full module document (identity block through verification status) |
| Single question | Stem + options + correct answer + Bloom tag + spiral tag + 3 feedback blocks |
| Question set | Multiple questions as above — runs checks on each, then a set-level check |

If input type is unclear, ask before running. Do not guess.

---

## Checklist Reference Files

Before running any check, load the relevant reference file:

- **Voice rules** → `references/voice-rules.md`
  Load for: all content types
- **Module spec fields** → `references/module-spec-fields.md`
  Load for: module spec input only
- **Question standards** → `references/question-standards.md`
  Load for: single question or question set input

---

## Execution Protocol

### Step 1 — Identify input type
Determine whether input is a module spec, single question, or question set.
State the type before running checks.

### Step 2 — Load reference files
Load the voice rules reference always.
Load the module spec fields reference if input is a module spec.
Load the question standards reference if input is a question or question set.

### Step 3 — Run checks
Execute every check in the relevant checklist below.
Record each result as PASS, FLAG, or N/A.
Do not stop at the first flag — run all checks, then report.

### Step 4 — Output report
Use the report format defined below.
If any FLAG exists: status = BLOCKED. List all flags with line-level quotes.
If all PASS: status = CLEARED. Generate Gate 1 handoff for folio-educator-verification.

### Step 5 — Route
- **CLEARED** → Pass to folio-educator-verification with Gate 1 complete.
  Include the preflight report as the Gate 1 record.
- **BLOCKED** → Return to content author (Rob) with flag list.
  Content stays in DRAFT. Do not advance.

---

## Checklists

### Checklist A — Voice (runs on ALL input types)

```
[ ] A1  No forbidden general words present:
        leverage, unlock, crush it, easy, simply, just, fail, wrong,
        optimize, seamless, robust, innovative
        → Search all student-facing text. Flag any match with quote.

[ ] A2  Wrong-answer feedback does not use "wrong" or "incorrect"
        → Check every feedback block. Flag with quote if present.

[ ] A3  No false positivity in feedback ("almost!", "so close!", "great try!")
        → Flag any cheerful or congratulatory language in feedback blocks.

[ ] A4  No VARK identity language present:
        "you're a visual learner", "you're weak at", "your learning style",
        "you struggle with" (as pattern characterization)
        → Flag any match with quote.

[ ] A5  No pre-apology for difficulty ("this next part gets complicated")
        → Flag if present in any student-facing copy.

[ ] A6  No false stakes ("this will be on the test!")
        → Flag if present.

[ ] A7  Contractions present where appropriate (voice should feel human)
        → Flag only if copy is stiff and contractless throughout. Use judgment.
```

### Checklist B — Module Spec Structure (module spec input only)

```
[ ] B1  Module Identity block complete:
        Module ID, Unit, Grade Band, Content Status, Flag/Independence
        → Flag any missing field.

[ ] B2  Enduring Understanding present and non-empty
        → Flag if absent or if it reads as a learning objective rather than
          an enduring understanding (EU must be transferable, not task-specific).

[ ] B3  Acceptable Evidence present and non-empty
        → Flag if absent.

[ ] B4  Content type classification present
        (Declarative / Procedural / Conceptual-Principle)
        → Flag if absent.

[ ] B5  Wonder hook present
        → Flag if absent.
        → Flag if hook opens with a concept definition
          (e.g., "A map projection is..." — that's an explainer, not a hook).

[ ] B6  Spiral concept tags listed for all applicable prior modules
        → Flag if module is not the first module and no spiral tags appear.

[ ] B7  Bloom level targets defined per concept area
        → Flag if absent.
        → Flag if any target is Remember or Understand (below Folio floor).

[ ] B8  Misconception inventory present (minimum 3 entries)
        → Flag if fewer than 3 misconceptions listed.

[ ] B9  Big Idea Callback — passive instance present and non-definitional
        → Flag if absent.
        → Flag if passive callback answers with a definition rather than
          a reframed insight.

[ ] B10 Big Idea Callback — active EIB prompt present
        → Flag if absent.
        → Flag if EIB prompt has a single correct answer
          (EIB prompts must invite reasoning, not recall).

[ ] B11 Gagné Nine Events audit present
        → Flag if absent.
        → Flag if Events 1, 3, 5, 6, 7, 8, 9 are not accounted for.
          (Events 2 and 4 are intentionally deprioritized — N/A is correct.)

[ ] B12 Practice set metadata present:
        Total questions, new/spiral split, Bloom distribution, mastery threshold
        → Flag any missing field.

[ ] B13 Verification block present with content status and verifier field
        → Flag if absent. Verifier name may be blank — that is not a flag.
```

### Checklist C — Question Standards (question or question set input)

```
[ ] C1  Every question has a stem
        → Flag any question with no stem.

[ ] C2  Every question has exactly four options (A, B, C, D)
        → Flag any question with fewer or more than four options.

[ ] C3  Correct answer identified for every question
        → Flag any question with no marked correct answer.

[ ] C4  Every question has a Bloom level tag
        → Flag if absent.
        → Flag if level is Remember or Understand (below Folio floor).

[ ] C5  Every question has a spiral tag: [NEW: concept] or [SPIRAL: module — concept]
        → Flag any question with no spiral tag.

[ ] C6  Every question has exactly three diagnostic feedback blocks
        (one per wrong-answer distractor)
        → Flag any question with fewer than three blocks.

[ ] C7  Each feedback block names a specific misconception
        → Flag any block that only restates the correct answer without
          identifying what thinking error the distractor reveals.
          Test: could this feedback block appear on a different question?
          If yes, it's too generic — flag it.

[ ] C8  No feedback block uses "wrong," "incorrect," or false positivity
        → Already covered in A2/A3 but check again at question level.

[ ] C9  Each feedback block redirects to reasoning or evidence
        → Flag any block that ends without pointing the student somewhere
          (a pattern to notice, a concept to revisit, a direction to look).

[ ] C10 No fictional geography in question stems or feedback
        → Flag any invented place names, fabricated statistics,
          or fictional scenarios presented as real.

[ ] C11 Difficulty level tagged for every question
        (Foundational / Standard / Challenge / Transfer)
        → Flag if absent.

[ ] C12 Set-level check (question set only):
        Bloom distribution — at least one Apply, one Analyze in the set
        → Flag if set contains only Foundational/Apply questions.
        Spiral ratio — confirm new vs. prior split matches declared ratio
        → Flag if actual count doesn't match metadata.
        Mastery threshold defined for the set
        → Flag if absent.
```

### Checklist D — Verify Tags (runs on ALL input types)

```
[ ] D1  All statistical claims tagged [VERIFY]
        → Search for numbers, percentages, rankings, dates.
          Flag any that lack a [VERIFY] tag.

[ ] D2  All historical claims tagged [VERIFY]
        → Search for events, dates, named figures, treaty references.
          Flag any that lack a [VERIFY] tag.

[ ] D3  All geographic claims that could be disputed tagged [VERIFY]
        → Flag border descriptions, river origins, mountain heights,
          population figures, and any "X is the largest/smallest/only" claims.

[ ] D4  [VERIFY] tag count reported
        → Count and list all [VERIFY] tags found.
          This becomes the educator's fact-check list.
```

---

## Output Format

```
FOLIO PREFLIGHT REPORT
────────────────────────────────────────────
Content:            [title or module ID]
Content type:       [module spec / question / question set]
Date run:           [date]
Checklists run:     [A / A+B / A+C+D / A+B+C+D]

─── RESULTS ─────────────────────────────────────────
Overall status:     CLEARED  or  BLOCKED

[If CLEARED:]
All checks passed. Content is cleared for Gate 1 handoff
to folio-educator-verification.

[VERIFY] tag count:   [n]
[VERIFY] items:       [list each tagged claim — this becomes
                       the educator's fact-check list]

Gate 1 record:      Complete. Attach this report to the
                    verification request sent to educator.

─── FLAG LIST ───────────────────────────────────────
[If BLOCKED — list every flag:]

FLAG [checklist item ID] — [check description]
  Found:    "[exact quote from content]"
  Problem:  [what's wrong]
  Fix:      [specific correction required]

[Repeat for each flag]

─── NEXT STEP ───────────────────────────────────────
[If CLEARED:]
Route to folio-educator-verification.
Gate 1 is complete — attach this report.

[If BLOCKED:]
Return to DRAFT. Fix all flags above.
Re-run folio-preflight-verifier before resubmitting.
Do not route to educator until status is CLEARED.
```

---

## Routing After Preflight

```
Content drafted
      │
      ▼
folio-preflight-verifier runs
      │
      ├── BLOCKED → return to DRAFT with flag list
      │             fix all flags
      │             re-run preflight
      │
      └── CLEARED → folio-educator-verification
                    Gate 1 record: preflight report
                    Gate 2: educator review
                    Gate 3: approved → FINAL
```

---

## Design Notes

**This skill replaces Gate 1 in folio-educator-verification.**
Gate 1's checklist is now this skill's checklist. When content clears
preflight, it enters folio-educator-verification at Gate 2 (educator review)
with Gate 1 already complete and documented.

**Educator name is not required to run preflight.**
Preflight checks content structure and voice — not pipeline assignment.
The educator name field in the verification request may be blank when
preflight runs. It must be filled before the package is sent.

**Flag everything. Stop nothing early.**
Run all checks before reporting. A content author needs the full picture,
not a sequential drip of problems. One preflight run = one complete report.

**When in doubt, flag.**
If a claim looks like it could be disputed geographically or historically,
tag it. False positives are cheap. Unverified facts reaching students are not.