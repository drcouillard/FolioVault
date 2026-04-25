---
name: module-curriculum-aligner-pe
type: module
version: v0.1
status: draft
---

# PE Curriculum Aligner

## Role in the System

This skill is a **validation and alignment layer** in the Folio pipeline. It sits between curriculum design and content generation, ensuring that every module, lesson, and objective maps to the NCEES specification before content is built.

```
Curriculum Architect (design)
  └── PE Curriculum Aligner (this skill — validation)
        ├── PE Domain Expert (topic verification)
        └── PE Content Generator (content build, post-alignment)
```

It does NOT generate content. It audits and reports. Output is always an Alignment Report the user reviews before content generation begins.

---

## Workflow

### Step 1 — Identify What's Being Aligned

Determine:
- **Input type:** Full curriculum? Single module? List of objectives? Lesson plan?
- **Exam target:** FE (Fundamentals) or PE (Principles and Practice)?
- **Discipline:** Civil, Mechanical, Electrical, Chemical, Industrial, or Universal?

If exam target or discipline is unclear, ask before proceeding. Do not assume.

### Step 2 — Load the NCEES Scope Reference

Read the appropriate reference file based on exam and discipline:

| Condition | Load |
|---|---|
| FE — Universal / multi-discipline | `references/ncees-fe-scope.md` |
| PE — Any discipline | `references/ncees-pe-scope.md` |

Load only what is needed for the current alignment task.

### Step 3 — Run the Alignment Audit

Map each curriculum topic, module, or objective against the loaded NCEES scope. For each item, assign one of three statuses:

| Status | Meaning |
|---|---|
| ✅ ALIGNED | Topic is in-scope for the target exam; coverage is sufficient |
| ⚠️ PARTIAL | Topic is in-scope but coverage is shallow, missing key subtopics, or Bloom's stage is mismatched |
| ❌ GAP | Topic is in-scope for the exam but absent from the curriculum |
| 🚫 OUT OF SCOPE | Topic is present in the curriculum but not tested on the target exam |

Flag every item. Do not skip items because they seem minor.

### Step 4 — Consult PE Domain Expert (if needed)

If any topic's alignment is uncertain — especially for PE-level depth content, code citations, or post-2024 spec changes — hand off to pe-domain-expert for verification before finalizing the report.

Trigger phrase: "Verify alignment of [topic] against [exam level] spec."

### Step 5 — Produce the Alignment Report

Structure the report as follows:

**Header**
- Exam target (FE or PE)
- Discipline
- Input type (curriculum / module / objective list)
- Date of alignment check

**Alignment Summary Table**
| Topic / Objective | Exam Relevance | Status | Notes |
|---|---|---|---|
| [topic] | [FE / PE / Both] | [✅ / ⚠️ / ❌ / 🚫] | [gap detail or recommendation] |

**Gap Analysis**
- List all ❌ GAP items with:
  - NCEES section or topic area the gap falls under
  - Recommended fix (add module, expand coverage, reorder sequence)

**Out-of-Scope Flags**
- List all 🚫 OUT OF SCOPE items with a recommendation: remove, reframe, or keep as enrichment (with label)

**Bloom's Alignment Check**
- Flag any objectives where the Bloom's stage does not match the exam's expected cognitive demand
- FE expects mostly Remembering → Applying; PE expects Applying → Evaluating

**Recommended Next Steps**
- Prioritized list of actions before content generation begins
- Note which gaps block exam readiness vs. which are enrichment-only

### Step 6 — Handoff

After the report is reviewed and accepted by the user:
- Pass the aligned curriculum spec to **pe-content-generator** for content build
- Flag any topics that still need pe-domain-expert verification before content generation

---

## Hard Rules

- Never mark a topic as ALIGNED based on name match alone. Verify depth and Bloom's stage.
- Never skip the Gap Analysis section, even if there are zero gaps (state that explicitly).
- Never generate content during this skill. Alignment first, content after.
- If the NCEES spec has been updated post-2024 and a topic's scope is uncertain, flag it and consult pe-domain-expert before reporting status.
- Out-of-scope content is not automatically bad — it may serve as enrichment. Label it clearly rather than recommending deletion by default.

---

## Output Format

The Alignment Report is delivered as structured markdown in chat unless the user requests a file. If a downloadable report is needed, note the docx skill can package it.