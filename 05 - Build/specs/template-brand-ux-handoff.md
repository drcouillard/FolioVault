---
name: module-handoff-spec-brand-to-ux
type: module
version: v0.1
status: draft
description: "This document defines what brand outputs the UX Instructional Design skill must consume before producing any learner-facing interface, and exactly where in the UX output structure those brand decisions govern. It does not replace either skill — it connects them. Neither skill should produce a platform-rendered screen without consulting this file. Rule: If a learner will see it, brand governs it."
---
# Brand-to-UX Handoff Specification
**Reference file:** `references/brand-to-ux-handoff-spec.md`
**Version:** 1.2 | **Status:** LOCKED
**Brand:** Folio Interactive
**Source:** Folio Interactive Brand Style Guide, April 2026 + Rob's token decisions, April 14 2026
**Last updated:** 2026-04-14
**Bridge:** `brand-style-guide` → `ux-instructional-design`

---

## BRAND → UX HANDOFF BLOCK

```
BRAND → UX HANDOFF
─────────────────────────────────────────────────────────
Brand Name:           Folio Interactive
Tagline:              Where Curiosity Becomes Mastery.
Strategy File:        LOCKED — April 2026 Brand Style Guide
Visual Identity File: LOCKED — April 2026 Brand Style Guide
Voice File:           LOCKED — April 2026 Brand Style Guide

VISUAL TOKENS
─────────────────────────────────────────────────────────
Primary palette:
  Folio Blue       #185FA5   Primary actions, navigation, headings
  Deep Blue        #0C447C   Hover states, emphasis
  Blue Tint        #E6F1FB   Backgrounds, highlights

Secondary palette:
  Folio Teal       #1D9E75   Success, mastery, progress
  Deep Teal        #085041   Confirmed mastery, completion
  Teal Tint        #E1F5EE   Correct answers, encouragement

Accent palette:
  Folio Amber      #BA7517   Alerts, nudges, in-progress states
  Amber Tint       #FAEEDA   Soft warnings, hint areas

Neutrals:
  Ink              #2C2C2A   Body text, primary content
  Slate            #5F5E5A   Secondary text, captions
  Warm Gray        #D3D1C7   Borders, dividers
  Off-White        #F1EFE8   Page backgrounds, card fills

Semantic color mapping:
  Blue    → Authority / Navigation
  Teal    → Progress / Mastery
  Amber   → Attention / Encouragement
  Neutral → Structure / Space

Heading font:    Lora (serif), 600 Bold — module titles, screen headers,
                 objective ribbons
                 H1: 32px / H2: 20px / Line height: 1.2–1.35
Body font:       Barlow (sans-serif), 400 Regular — all instructional text,
                 problem stems, hint content, explanations
                 Body: 16px / 1.7lh | UI labels: 14px 500–600
                 Captions: 12px (minimum — never go below)
Accent font:     None defined — do not introduce one
Fallback stack:  Google Fonts (both Lora and Barlow are free)

Spacing base unit:    8px — LOCKED
Border radius:        Subtle (4–6px) for cards, panels, buttons, input fields.
                      None for data/table surfaces. — LOCKED
Shadow/elevation:     Subtle single-level elevation for hint panels and modals.
                      No multi-level stacking. — LOCKED

Dark mode palette:    Deep warm-gray base — preserves the warmth of Off-White
                      (#F1EFE8) in dark contexts. Not cool-gray or pure black.
                      All existing semantic color mappings (Blue/Teal/Amber)
                      carry forward; surface tones shift to warm-dark equivalents.
                      Specific hex values to be defined at component build. — LOCKED

Logo safe backgrounds: White | Off-White #F1EFE8 | Folio Blue #185FA5 only

VOICE TOKENS
─────────────────────────────────────────────────────────
Tone position:
  Formal    ←●──────────────────────→ Casual       (leans formal, not casual)
  Serious   ←●──────────────────────→ Playful      (serious, never jokey)
  Auth.     ←──────●────────────────→ Humble       (balanced — earns trust, stays open)
  Expressive←──────●────────────────→ Reserved     (measured expressiveness)

Voice in one sentence:
  "A teacher who loves their subject — warm but never soft, precise but never
   cold, always on the student's side."

Voice references: Bill Nye · Neil deGrasse Tyson · VSauce (Michael Stevens)

Core vocabulary (use these):
  build, explore, practice, notice, connect, demonstrate, try,
  mastery, pattern, evidence, reflect, apply, strengthen, understand

Words to avoid:
  leverage, unlock, crush it, easy, simply, just, fail, wrong,
  optimize, seamless, robust, innovative, "almost!", "so close!"

Sentence rhythm:
  Short setup → medium explanation → short landing. Vary deliberately.
  Em dashes: yes. Exclamation points: max 1 per screen, milestone moments only.
  Contractions: yes (you're, it's, don't). Fragments: sparingly, not as default.

Error message tone:
  Never say "wrong" or "incorrect." Name what the answer reveals.
  Redirect to reasoning. Neutral — not cheerful. False positivity erodes trust.

Named component — The Big Idea Callback:
  Phrase "What's the big idea here?" appears verbatim at two points per module:
    Passive  — mid-module, rhetorical, after fundamentals, before analogy/metaphor.
               System answers via comparative visual + compressed restatement.
               No student response required.
    Active   — EIB (Explain It Back) assessment stage. Student must answer.
               Formats: open-response / drag-and-drop concept map / verbal /
               peer-simulation. This answer IS the mastery evidence.
  Module arc: Fundamentals → "What's the big idea here?" (we show) →
              Analogy → Practice → "What's the big idea here?" (you show)

STRATEGIC TOKENS
─────────────────────────────────────────────────────────
Archetype:          Primary: The Sage | Secondary: The Caregiver
Emotional keywords: Adaptive · Purposeful · Illuminating · Principled · Empowering

Messaging pillars:
  1. You're seen here.             (Software meets the learner — not the reverse)
  2. Mastery is built, not given.  (Doing > watching — practice over performance)
  3. Struggle is part of the process. (Errors = data, not failure)
  4. Curiosity compounds.          (One concept opens the next)
  5. Think about your thinking.    (Metacognition is a learnable skill)

Anti-positioning — Folio Interactive is NEVER:
  ✕ Gamified entertainment masquerading as education
  ✕ A passive video lecture platform
  ✕ Quirky, casual, or trend-chasing in tone or design
  ✕ A one-size curriculum with rigid pacing
  ✕ A replacement for the teacher
  ✕ Generic in its claims

Ready for: UX Instructional Design → Interaction Spec → Component Build
─────────────────────────────────────────────────────────
```

---

## How Brand Tokens Map to UX Output Sections

### Screen Flow

| Decision | Brand Rule |
|---|---|
| Active / interactive states | Folio Blue #185FA5 |
| Progress indicators, mastery bar | Folio Teal #1D9E75 → Deep Teal #085041 at completion |
| Highlight / accent states | Folio Amber #BA7517 |
| Background surfaces | Off-White #F1EFE8 |
| Card fills | Off-White #F1EFE8 |
| Dividers, borders | Warm Gray #D3D1C7 |
| Screen / module titles | Lora 32px 600, line height 1.2–1.35 |
| Lesson titles, card headings | Lora 20px 500 |
| Instructional text, problem stems | Barlow 16px 400, 1.7lh |
| Button labels, nav, form fields | Barlow 14px 500–600 |
| Timestamps, metadata | Barlow 12px 400 |

### Feedback + Error Prevention Logic

- **Correct attempt:** Teal Tint (#E1F5EE) surface. Name what was demonstrated specifically. Max one exclamation point. Connect forward to what this unlocks.
- **Incorrect attempt:** Off-White or Warm Gray surface. Never "wrong" or "incorrect." Name what the answer reveals. Redirect to reasoning. Neutral — not cheerful.
  - Use: *"Let's look at what happened."* / *"Try a different approach."*
  - Never: *"You're doing great!"* / *"Almost!"* / *"So close!"*
- **In-progress / hint needed:** Amber Tint (#FAEEDA) surface, Folio Amber (#BA7517) accent. Honest framing: *"This is a tricky one."* Never: *"This should be easy."*
- **Exploration phase:** Neutral surface, no judgment. *"Notice what these have in common."* Not *"The answer is..."*

### Progressive Scaffolding Rules (Hint Panels)

- Surface color: Amber Tint (#FAEEDA) — semantically reserved for hint areas
- Text: Barlow 16px, Ink (#2C2C2A)
- Elevation: Single-level above content layer; restrained — not floating above UI chrome
- Tone: Direct, honest, redirecting to pattern or strategy — never to the answer
- Never give the answer directly. Always redirect to reasoning or method.

### Motivation + Progress Indicators

- Mastery bar: Folio Teal (#1D9E75) filling → Deep Teal (#085041) at confirmed mastery
- Milestone markers: Folio Teal or Folio Blue — never Amber (Amber = attention, not celebration)
- Milestone copy: Specific. *"You demonstrated mastery of [X]."* Not *"Great job! You passed!"*
- Every mastery confirmation connects forward — name what it unlocks
- Anti-pattern: No badges, points-as-score, arcade mechanics, streak counters. Motivation is academic, earned, and calm. The anti-positioning is explicit — gamified entertainment is what Folio is not.

### The Big Idea Callback (Named UX Component — Brand-Defined)

This is a brand-specified interaction pattern. Implement verbatim. Do not paraphrase the trigger phrase.

**Passive instance:**
- Trigger point: After fundamentals introduced, before analogy/metaphor section
- Interaction: Rhetorical — system answers via comparative visual + compressed restatement
- Student action: None required
- Copy: *"What's the big idea here?"* — exact, every time

**Active instance (EIB — Explain It Back):**
- Trigger point: Assessment stage, after analogy and practice sections
- Interaction: Student must answer — one of: open-response / drag-and-drop concept map / verbal explanation / peer-simulation
- Student action: Required — this response is the mastery evidence
- Copy: *"What's the big idea here?"* — exact, every time
- Scoring/analytics: Treat this response as the primary mastery signal for the module

Module arc reference: Fundamentals → Passive Callback (we show) → Analogy → Practice → Active Callback (you show)

### Reflection Prompt

- Voice register: Warm, precise, metacognitive. On the student's side.
- Pillar alignment: Pillar 5 — Think about your thinking
- Model prompt: *"Could you explain this to someone who's never heard of it? Try."*
- Sentence length: Short. Match the brand's short-setup / short-landing rhythm.
- Never: *"Do you understand?"* → Always: *"Could you explain this to someone else?"*

### UI Microcopy

| Context | Rule |
|---|---|
| Onboarding | Lead with what the student will do — not what the platform does. Max 2 sentences per screen. Never promise "easy." |
| Encouragement during struggle | Acknowledge difficulty honestly. Redirect to pattern or strategy. Never to the answer. |
| Mastery confirmation | Name what was demonstrated. Max 1 exclamation point. Connect forward. |
| Error / wrong answer | Never "wrong" or "incorrect." Name what the answer reveals. Neutral, not cheerful. |
| Button labels | Use core vocabulary: build, explore, practice, try, apply, reflect, demonstrate |
| Instructor UI | Direct and efficient. Lead with action or data. No edtech jargon. Respect expertise. |
| Marketing / website | Lead with differentiator. Specific claims backed by mechanism. No generic claims. |

---

## Conflict Resolution

1. **Accessibility always wins.** WCAG AA required for all text/background pairings. No brand color choice overrides it.
2. **Pedagogy wins over visual preference.** If a brand color creates learning confusion (e.g., Amber used for wrong answers when Amber semantically maps to "attention/nudge"), flag and resolve upstream before building.
3. **Brand wins over UX convention.** Within accessibility limits, this file is the source of truth for visual decisions.
4. **Flag, don't decide unilaterally.** Surface conflicts to the orchestrator with both options and the trade-off clearly named.

---

## Open Items — Confirm Before Component Build

All previously open UX tokens are now locked. No outstanding items.

| Item | Status | Value Locked |
|---|---|---|
| Spacing base unit | ✅ LOCKED | 8px |
| Border radius | ✅ LOCKED | Subtle (4–6px) cards/panels; None for data/table surfaces |
| Shadow / elevation scale | ✅ LOCKED | Subtle single-level; no multi-level stacking |
| Dark mode palette | ✅ LOCKED | Deep warm-gray base; warm-dark surface equivalents; specific hex values defined at component build |

---

## Relationship to Other Reference Files

| File | Relationship |
|---|---|
| `references/artifact-standards.md` | Governs artifact metadata and promotion criteria for all outputs produced after this handoff |
| `references/versioning-protocol.md` | If brand guide is revised, all UX specs referencing brand tokens must be reviewed for conflicts before re-promoting to final |
| `references/content-schema.md` | UX interaction specs that produce content objects must conform to schema regardless of brand input |

**If the brand guide is updated after any UX spec reaches `final` status:**
Treat as a Tier 3 change minimum. Review all affected interaction specs for token conflicts before re-promoting.

---

*This document is derived directly from the Folio Interactive Brand Style Guide, April 2026.
It is the binding reference for all UX Instructional Design output on the Folio Interactive platform.
No downstream screen, component, or interaction should contradict it.*
