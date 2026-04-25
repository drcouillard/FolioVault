---
name: module-visual-identity-system
description: Develops all visual design rules for a brand — typography, color system, logo direction, and layout.
type: module
---
 
# Visual Identity System Skill
 
Translates brand strategy into a complete visual design system. Takes the locked identity document from `brand-identity-strategy` as its source of truth and produces structured specifications for typography, color, logo direction, and layout — all traceable back to the brand's archetype and emotional keywords.
 
No visual decisions are invented. Every rule is derived from strategy.
 
---
 
## Pre-Flight Check
 
Before starting, confirm:
 
1. **Does a locked strategy file exist?** (`references/strategy-[brandname].md` from brand-identity-strategy)
   - If yes → load it. Extract: archetype, emotional keywords, positioning, anti-positioning, audience profiles.
   - If no → stop. Tell the user this skill requires a completed brand strategy first. Offer to run `brand-identity-strategy`.
2. **Does a visual identity file already exist?** (`references/vis-[brandname].md`)
   - If yes → load it, review with user, confirm what's locked vs. what needs revision.
   - If no → run full workflow below.
---
 
## Workflow
 
### Step 1 — Strategic Intake
 
Pull from the locked strategy file:
- **Archetype** (primary + secondary)
- **Emotional keywords** (5–8 words)
- **Target audience profiles** (informs legibility, formality, platform decisions)
- **Positioning statement** (informs tone of visual language)
- **Anti-positioning** (what the visuals must never feel like)
Summarize what you extracted and confirm with the user before building anything.
 
---
 
### Step 2 — Typography System
 
Read `references/typography-rules.md` for the full decision framework.
 
Produce:
- **Heading font** — name, style, rationale tied to archetype
- **Body font** — name, style, legibility rationale
- **Accent/display font** (if applicable) — used sparingly, personality-forward
- **Fallback stack** — web-safe alternatives for each
- **Font scale hierarchy** — H1 through body and caption sizes (px or rem)
- **Accessibility legibility rules** — minimum size, line height, contrast requirements
Every choice must be explained by one of: archetype alignment, emotional keyword match, or audience readability need.
 
---
 
### Step 3 — Color System
 
Read `references/color-system.md` for the full decision framework.
 
Produce:
- **Primary palette** — 1–2 hero colors with hex codes and rationale
- **Accent palette** — 1–2 supporting colors
- **Neutrals** — light to dark range (minimum 4 stops)
- **Grayscale** — functional grayscale for UI and text
- **Dark mode palette** — inverted or adapted equivalents
- **Accessibility contrast checks** — WCAG AA compliance for each text/background pairing
- **Educational variants** (if applicable) — softer tones for instructional contexts
Flag any pairing that fails WCAG AA. Do not present it as usable without a fix.
 
---
 
### Step 4 — Logo Direction
 
Read `references/logo-direction.md` for the full decision framework.
 
Produce a **Logo Brief** (not a final design — this is a direction document for a designer):
- **Concept direction** — 2–3 distinct conceptual directions with rationale
- **Wordmark rules** — if name-based logo, typographic treatment guidance
- **Icon concept** — if symbol is used, describe the form language
- **Clear space rule** — minimum breathing room around the mark
- **Minimum size** — smallest usable size (print and screen)
- **Monochrome usage** — how the mark works in black-only and white-only contexts
- **Reversed-on-dark usage** — how the mark behaves on dark backgrounds
Note: This skill produces a brief for a designer. It does not generate logo files.
 
---
 
### Step 5 — Layout Rules
 
Read `references/layout-rules.md` for the full decision framework.
 
Produce:
- **Spacing scale** — base unit (4px or 8px) and the full scale (xs through 2xl or equivalent)
- **Border radius system** — none / subtle / moderate / full — which applies to this brand and why
- **Card elevation** — shadow scale (0 through 3+ levels) with CSS values if applicable
- **Grid spacing** — column count, gutter width, margin guidance
- **Visual rhythm** — how elements relate vertically; line height and spacing consistency rules
---
 
### Step 6 — Review & Lock
 
Present the complete visual identity document to the user, section by section.
 
- Flag any `[PENDING]` fields
- Confirm each section is approved before locking
- If any choice doesn't feel right, revisit the strategy — the fix is upstream, not in arbitrary adjustment
Do not save until the user approves the full document.
 
---
 
### Step 7 — Save Visual Identity File
 
Save the finalized document as `references/vis-[brandname].md`.
 
This file becomes the input for:
- `brand-style-guide` skill — pulls visual specs for the PDF guide
- Any future design system documentation
- Developer handoff specifications
---
 
### Step 8 — Handoff Summary
 
Output a brief handoff block:
 
```
VISUAL IDENTITY LOCKED: [Brand Name]
Typography: [Heading font] / [Body font]
Primary Color: [Hex] — [Name or description]
Logo Direction: [Concept direction summary, 1 sentence]
Layout Base Unit: [4px / 8px]
Ready for: Brand Style Guide → Design System → Developer Handoff
```
 
---
 
## Hard Rules
 
- Never invent visual decisions without tracing them to the strategy file
- Never proceed without a locked strategy file — visual decisions without identity logic are arbitrary
- Accessibility failures must be flagged, not buried or ignored
- Logo brief is a direction document only — never claim to produce a final logo
- Dark mode palette must be explicitly designed, not just colors inverted blindly
- One visual identity file per brand — never mix specs from two brands
- If the user skips to style guide without a visual identity file, surface this gap