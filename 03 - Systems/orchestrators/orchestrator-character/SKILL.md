---
description: Master router for all character design, mascot development, and IP identity work.
type: orchestrator
name: orchestrator-character
---
# Character Orchestrator

The router for character design pipeline. Sequences the Nomen Typus
system — `forma` (physical design) and `nomen` (identity contract) — into a coherent
workflow that produces a renderer-ready mascot avatar brief and a machine-readable
identity specification.

This orchestrator does not generate design briefs or contracts. It routes, validates
dependencies, and ensures the correct skill fires with complete input.

---

## The Pipeline

```
User request (character, mascot, or avatar need)
  └── 1. forma    → CHARACTER DESIGN BRIEF (physical appearance, species, style)
        └── 2. nomen   → NOMEN CONTRACT (identity spec: voice, behavior, system prompt seed)
```

The two skills can also be run independently if one already exists and the other needs updating.

---

## Step 1: Classify the Request

| Signal | Route |
|---|---|
| "Design a character", "what should it look like", "build a mascot" | Start at `forma` |
| "Define how it speaks/acts", "identity contract", "Nomen Contract", "system prompt seed" | Start at `nomen` |
| "Update the character's appearance" | `forma` only |
| "Update the character's voice or behavior" | `nomen` only |
| "Build a full character from scratch" | Full pipeline: `forma` → `nomen` |
| Has a Typus Record already | Check forma status → skip if brief exists, else run `forma` |

---

## Step 2: Validate Inputs

### For forma
Required inputs (at minimum one of the following):
- A Typus Record (personality profile)
- A species selection from the morphology index
- A description of the character's role, tone, or purpose

If none exist, prompt the user for a brief character description before routing to `forma`.

### For nomen
Required inputs:
- A completed or partial Forma Brief (from `forma` or user-provided)
- A Typus Record if behavioral identity is needed

If routing to `nomen` without a Forma Brief, warn the user:
"Nomen works best with a completed Forma Brief. I can proceed with partial input, but the
identity contract may need revision once the design brief is finalized."

---

## Step 3: Route

**Routing to forma:**

```
CHARACTER ORCHESTRATOR → FORMA
────────────────────────────────
Character purpose: [mascot for brand / educational tutor / game character / etc.]
Typus Record: [attached or "not yet created"]
Species preference: [if stated, or "infer from personality"]
Style constraints: [any visual rules already established]
Expected output: CHARACTER DESIGN BRIEF (MASCOT AVATAR)
```

**Routing to nomen:**

```
CHARACTER ORCHESTRATOR → NOMEN
────────────────────────────────
Forma Brief: [attached or "partial"]
Typus Record: [attached or "not yet created"]
Contract purpose: [image generation tags / system prompt seed / behavioral spec]
Expected output: NOMEN CONTRACT
```

---

## Step 4: Validate Outputs

After `forma` completes:
- Check that the brief passes the silhouette test (readable at 48px, 128px, 512px).
- Confirm style constants are present (render style, posture, eye orientation, line weight).
- If the brief is incomplete, return to `forma` with specific missing fields.

After `nomen` completes:
- Confirm the contract covers: visual tags, behavioral rules, voice parameters, and system prompt seed.
- If the Nomen Contract conflicts with the Forma Brief on any physical trait, flag the discrepancy and return to the responsible skill.

---

## Step 5: Update Routing

If the user is revising an existing character:

| Update Request | Route To |
|---|---|
| Change appearance, species, or visual style | `forma` only |
| Change voice, tone, or behavioral rules | `nomen` only |
| Change personality profile (Typus Record) | `forma` first, then `nomen` — both must update |
| Full character rebuild | Full pipeline |

---

## Rules

- Never generate design briefs or Nomen Contracts directly. Route only.
- Never route to `nomen` without confirming a Forma Brief exists or warning the user about partial input.
- If a Typus Record changes, both downstream skills must update — they are co-dependent.
- One character = one canonical Forma Brief + one canonical Nomen Contract. No duplicates.
- If the user's character serves a brand purpose, confirm with brand-orchestrator that the character is consistent with locked brand identity before finalizing.