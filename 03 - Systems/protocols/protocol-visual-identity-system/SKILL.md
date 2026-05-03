---
name: protocol-visual-identity-system
description: Develops all visual design rules for a brand â€” typography, color system, logo direction, and layout.
type: module
---
 
# Visual Identity System Skill
 
Translates brand strategy into a complete visual design system. Takes the locked identity document from `brand-identity-strategy` as its source of truth and produces structured specifications for typography, color, logo direction, and layout â€” all traceable back to the brand's archetype and emotional keywords.
 
No visual decisions are invented. Every rule is derived from strategy.
 
---
 
## Pre-Flight Check
 
Before starting, confirm:
 
1. **Does a locked strategy file exist?** (`references/strategy-[brandname].md` from brand-identity-strategy)
   - If yes â†’ load it. Extract: archetype, emotional keywords, positioning, anti-positioning, audience profiles.
   - If no â†’ stop. Tell the user this skill requires a completed brand strategy first. Offer to run `brand-identity-strategy`.
2. **Does a visual identity file already exist?** (`references/vis-[brandname].md`)
   - If yes â†’ load it, review with user, confirm what's locked vs. what needs revision.
   - If no â†’ run full workflow below.
---
 
## Workflow
 
### Step 1 â€” Strategic Intake
 
Pull from the locked strategy file:
- **Archetype** (primary + secondary)
- **Emotional keywords** (5â€“8 words)
- **Target audience profiles** (informs legibility, formality, platform decisions)
- **Positioning statement** (informs tone of visual language)
- **Anti-positioning** (what the visuals must never feel like)
Summarize what you extracted and confirm with the user before building anything.
 
---
 
### Step 2 â€” Typography System
 
Read `references/typography-rules.md` for the full decision framework.
 
Produce:
- **Heading font** â€” name, style, rationale tied to archetype
- **Body font** â€” name, style, legibility rationale
- **Accent/display font** (if applicable) â€” used sparingly, personality-forward
- **Fallback stack** â€” web-safe alternatives for each
- **Font scale hierarchy** â€” H1 through body and caption sizes (px or rem)
- **Accessibility legibility rules** â€” minimum size, line height, contrast requirements
Every choice must be explained by one of: archetype alignment, emotional keyword match, or audience readability need.
 
---
 
### Step 3 â€” Color System
 
Read `references/color-system.md` for the full decision framework.
 
Produce:
- **Primary palette** â€” 1â€“2 hero colors with hex codes and rationale
- **Accent palette** â€” 1â€“2 supporting colors
- **Neutrals** â€” light to dark range (minimum 4 stops)
- **Grayscale** â€” functional grayscale for UI and text
- **Dark mode palette** â€” inverted or adapted equivalents
- **Accessibility contrast checks** â€” WCAG AA compliance for each text/background pairing
- **Educational variants** (if applicable) â€” softer tones for instructional contexts

#### Required Deliverable â€” Accessibility Pair Table

Produce a complete **Accessibility Pair Table** for all intended text/background combinations.

The table must include:
- **Text color**
- **Background color**
- **Computed contrast ratio**
- **Pass/Fail (normal text, 4.5:1)**
- **Pass/Fail (large text, 3:1)**
- **Usage** (where this pair is intended to be used)

Include a **Restricted Pairs** section listing any pair that passes only for large text (18pt+ or 14pt bold+), with an explicit note that usage is restricted to that size threshold.
 
---
 
### Step 4 â€” Logo Direction
 
Read `references/logo-direction.md` for the full decision framework.
 
Produce a **Logo Brief** (not a final design â€” this is a direction document for a designer):
- **Concept direction** â€” 2â€“3 distinct conceptual directions with rationale
- **Wordmark rules** â€” if name-based logo, typographic treatment guidance
- **Icon concept** â€” if symbol is used, describe the form language
- **Clear space rule** â€” minimum breathing room around the mark
- **Minimum size** â€” smallest usable size (print and screen)
- **Monochrome usage** â€” how the mark works in black-only and white-only contexts
- **Reversed-on-dark usage** â€” how the mark behaves on dark backgrounds
Note: This skill produces a brief for a designer. It does not generate logo files.
 
---
 
### Step 5 â€” Layout Rules
 
Read `references/layout-rules.md` for the full decision framework.
 
Produce:
- **Spacing scale** â€” base unit (4px or 8px) and the full scale (xs through 2xl or equivalent)
- **Border radius system** â€” none / subtle / moderate / full â€” which applies to this brand and why
- **Card elevation** â€” shadow scale (0 through 3+ levels) with CSS values if applicable
- **Grid spacing** â€” column count, gutter width, margin guidance
- **Visual rhythm** â€” how elements relate vertically; line height and spacing consistency rules
---
 
### Step 6 â€” Review & Lock
 
Present the complete visual identity document to the user, section by section.
 
- Flag any `[PENDING]` fields
- Confirm each section is approved before locking
- If any choice doesn't feel right, revisit the strategy â€” the fix is upstream, not in arbitrary adjustment
Do not save until the user approves the full document.
 
---
 
### Step 7 â€” Save Visual Identity File
 
Save the finalized document as `references/vis-[brandname].md`.
 
This file becomes the input for:
- `brand-style-guide` skill â€” pulls visual specs for the PDF guide
- Any future design system documentation
- Developer handoff specifications
---
 
### Step 8 â€” Handoff Summary
 
Output a brief handoff block:
 
```
VISUAL IDENTITY LOCKED: [Brand Name]
Typography: [Heading font] / [Body font]
Primary Color: [Hex] â€” [Name or description]
Logo Direction: [Concept direction summary, 1 sentence]
Layout Base Unit: [4px / 8px]
Ready for: Brand Style Guide â†’ Design System â†’ Developer Handoff
```
 
---
 
## Hard Rules
 
- Never invent visual decisions without tracing them to the strategy file
- Never proceed without a locked strategy file â€” visual decisions without identity logic are arbitrary
- Accessibility failures must be flagged, not buried or ignored
- Logo brief is a direction document only â€” never claim to produce a final logo
- Dark mode palette must be explicitly designed, not just colors inverted blindly
- One visual identity file per brand â€” never mix specs from two brands
- If the user skips to style guide without a visual identity file, surface this gap
