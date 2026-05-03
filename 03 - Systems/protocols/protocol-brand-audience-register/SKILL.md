---
name: protocol-brand-audience-register
description: "Produces an Audience Register Guide that shows how a brand's locked voice calibrates across each target audience profile without losing identity. Output is a locked register reference document for consistent multi-audience communication."
---

# Brand Audience Register Skill

Translates locked brand voice and strategy into an audience-specific register system. Takes `voice-[brandname].md` and `strategy-[brandname].md` as source-of-truth inputs and produces a comparative calibration guide for how wording shifts by audience while preserving one consistent brand voice.

No audience or voice rules are invented. Every calibration is derived from locked files.

---

## Pre-Flight Check

Before starting, confirm:

1. **Does a locked voice file exist?** (`references/voice-[brandname].md`)
   - If yes -> load it. Extract: tone position, vocabulary rules, sentence rhythm rules.
   - If no -> stop. Tell the user this skill requires a completed voice system first. Offer to run `protocol-brand-voice-system`.
2. **Does a locked strategy file exist?** (`references/strategy-[brandname].md`)
   - If yes -> load it. Extract: target audience profiles.
   - If no -> stop. Tell the user this skill requires a completed brand strategy first. Offer to run `brand-identity-strategy`.

---

## Workflow

### Step 1 â€” Load Locked Inputs

Load:
- `references/voice-[brandname].md`
- `references/strategy-[brandname].md`

Confirm both are locked and in scope for the same brand before continuing.

---

### Step 2 â€” Extract Audience Profiles

Pull from the locked strategy file:
- **Target audience profiles** (all profiles, no omissions)
- Any profile-specific context that impacts reading complexity, context assumptions, or communication needs

Summarize extracted audiences and confirm with the user before calibration.

---

### Step 3 â€” Extract Voice Constraints

Pull from the locked voice file:
- **Tone position** (axis placement and overall tone intent)
- **Vocabulary system** (core words, preferred terms, avoid terms, jargon threshold, formality rules)
- **Sentence rhythm rules** (length defaults, cadence, punctuation personality, structural preferences)

Treat these as non-negotiable guardrails for all audience adaptations.

---

### Step 4 â€” Calibrate Register Per Audience

For each audience profile, produce a register calibration covering:
- **Sentence length** (target word range)
- **Vocabulary ceiling** (maximum complexity/abstraction level)
- **Formality**
- **Tone emphasis**
- **What to avoid**
- **Sample phrase** (one line in that audience register)

Calibration must preserve brand identity while adapting delivery for audience fit.

---

### Step 5 â€” Build Comparative Audience Register Table

Present the output as a comparative table:
- **Columns**: each target audience profile
- **Rows**: calibration dimensions (sentence length, vocabulary ceiling, formality, tone emphasis, what to avoid, sample phrase)

The table is the core deliverable and must include every audience from the strategy file.

---

### Step 6 â€” Review & Lock

Present the full Audience Register Guide to the user.

- Flag any `[PENDING]` fields
- Confirm each audience column is approved before locking
- Validate consistency check: one brand voice present across all columns; only register shifts by audience

Do not save until the user approves the full guide.

---

### Step 7 â€” Save Register File

Save the finalized document as `references/register-[brandname].md`.

This file becomes the input for:
- Cross-audience messaging execution
- Copy QA across channels and contexts
- Future brand style and communications systems

---

### Step 8 â€” Handoff Summary

```text
AUDIENCE REGISTER LOCKED: [Brand Name]
Audiences Covered: [Audience 1] Â· [Audience 2] Â· [Audience 3]
Voice Core Preserved: [Short confirmation phrase]
Register Shift Model: [1 sentence describing how adaptation works]
Saved As: references/register-[brandname].md
Ready for: Cross-Audience Copy Execution -> Messaging QA -> Campaign Adaptation
```

---

## Hard Rules

- Never invent audiences not present in the strategy file
- Never contradict the locked voice file
- Brand voice stays consistent; only register shifts by audience
- One register file per brand

