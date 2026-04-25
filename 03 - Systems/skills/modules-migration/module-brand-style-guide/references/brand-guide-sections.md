# Guide Sections — Blueprint

Used in Step 2 of brand-style-guide. Load when building section structure for the PDF.

This file defines what goes in each section, where it comes from, and how it should be formatted. No content is invented here — this is a layout map.

---

## Section 1 — Brand Overview

**Source:** strategy-[brand].md
**Purpose:** Orient the reader before they see any rules. Establishes what this brand is and why the following decisions were made.

**Contents (in order):**
1. Brand name + one-line description
2. Mission statement
3. Value proposition
4. Brand archetype (primary, with brief explanation of what it means for this brand)
5. Positioning statement
6. Preferred tagline (if one has been selected from options)

**Formatting notes:**
- This section should feel like a foundation, not an introduction
- Mission and positioning can be typeset as pull quotes
- Archetype explanation is 2–3 sentences max — enough to contextualize it, not a full explanation of the framework
- Target audience profiles are optional here; include if the guide is for external use with teams who need audience context

---

## Section 2 — Logo Usage

**Source:** vis-[brand].md → Logo Direction Brief
**Purpose:** Define how the logo is used correctly and what to avoid.

**Contents (in order):**
1. Logo type (wordmark / combination / etc.)
2. Primary logo lockup (reference only — note that actual logo files are separate deliverables)
3. Clear space rule
4. Minimum size (digital + print)
5. Monochrome usage (black version, white version)
6. Reversed-on-dark usage
7. Logo don'ts (what never to do — stretch, recolor, add effects, etc.)

**Formatting notes:**
- Logo don'ts should be illustrated if possible (placeholder boxes if actual logo files aren't available)
- This section should be scannable — rules over prose
- If only a direction brief exists (no final logo), note this clearly: "Logo files pending — direction brief on file."

---

## Section 3 — Color System

**Source:** vis-[brand].md → Color System
**Purpose:** Define the full palette with exact values and usage rules.

**Contents (in order):**
1. Primary palette — color swatches, hex codes, RGB, usage description
2. Accent palette — same format
3. Neutrals — full range with hex codes
4. Grayscale — functional gray scale
5. Dark mode palette — with surface levels
6. Educational variants (if applicable)
7. Accessibility checks — pass/fail table for key pairings
8. Color don'ts (what combinations are prohibited)

**Formatting notes:**
- All colors must show actual swatch, hex, and at minimum one usage note
- Accessibility table must flag any WCAG AA failures — do not omit failures
- Color don'ts can include visual examples (e.g., "do not use primary on accent background")

---

## Section 4 — Typography

**Source:** vis-[brand].md → Typography System
**Purpose:** Define all font usage with examples at each scale level.

**Contents (in order):**
1. Heading font — name, weights in use, rationale (1 sentence)
2. Body font — name, weights in use, rationale
3. Accent font (if applicable) — name, usage restriction
4. Type scale — visual hierarchy from Display down to Caption
5. Line height and spacing rules
6. Fallback stacks (code format)
7. Accessibility minimums
8. Typography don'ts

**Formatting notes:**
- Show each scale level with actual sample text, not just numbers
- Sample text should be on-brand (use voice system words, not "Lorem ipsum")
- Don'ts: never mix more than [X] typefaces, never go below minimum size, etc.

---

## Section 5 — Layout & Spacing

**Source:** vis-[brand].md → Layout Rules
**Purpose:** Give designers and developers the system for consistent layout.

**Contents (in order):**
1. Base unit and density level
2. Spacing scale — full token table with values and usage notes
3. Border radius system — token table with examples
4. Card elevation — shadow scale with CSS values
5. Grid system — breakpoints, columns, gutters, margins
6. Visual rhythm rules — line height, paragraph spacing, alignment, dividers

**Formatting notes:**
- Spacing and radius tables should be visual where possible (show the space, not just the number)
- Grid section can include a simple diagram of column breakdown at each breakpoint
- This section is primarily for developers and designers — can be more technical than others

---

## Section 6 — Voice & Tone

**Source:** voice-[brand].md → Tone Position + Tone Description + Sentence Rhythm + Vocabulary
**Purpose:** Define how the brand sounds and how to write in its voice.

**Contents (in order):**
1. Tone position — four axes with positions and rationale
2. Tone description (the paragraph written in brand voice)
3. Tone in context — how voice shifts across situations
4. Sentence rhythm rules
5. Punctuation personality
6. Vocabulary: words to use / words to avoid (formatted as two columns or a table)
7. Formality rules (contractions, fragments, etc.)

**Formatting notes:**
- The tone description paragraph is the heart of this section — typeset it prominently
- Words to use / avoid should be scannable — table or two-column list
- Tone in context can be a simple table: Context → Adjustment

---

## Section 7 — Messaging Pillars

**Source:** voice-[brand].md → Messaging Pillars
**Purpose:** Define the recurring themes the brand returns to across all content.

**Contents (in order):**
- Each pillar gets its own layout block:
  - Pillar name
  - The belief (internal)
  - How it shows up in copy (3–5 bullet points)
  - Sample proof point (typeset as a pull quote or highlighted sentence)

**Formatting notes:**
- Pillars should feel distinct — visual separation between each
- This section is strategic, not just stylistic — it should feel like a commitment
- 3–5 pillars maximum; if more exist in the source file, flag for review

---

## Section 8 — Copy Rules by Context

**Source:** voice-[brand].md → Copy Rules by Context
**Purpose:** Give writers specific rules for each content type.

**Contents:** One subsection per context:
- Website / Hero
- Product Descriptions
- Marketing / Ad Copy
- Email Subject Lines
- Social Posts
- Error Messages / UI Copy
- Presentations

**Formatting notes:**
- Each context should have a scannable rule block, not paragraphs of explanation
- Lead with the most important rule for that context
- Include the sample phrases / counter-examples from the source file

---

## Section 9 — Do's & Don'ts

**Source:** Compiled across all three upstream files
**Purpose:** Quick-reference summary of the most important rules from each discipline.

**Contents:**
- Visual do's & don'ts (from visual identity)
- Voice do's & don'ts (from voice system)
- Brand do's & don'ts (from strategy — anti-positioning rules)
- Phrases to use / avoid table (from voice system)

**Formatting notes:**
- This section is a summary, not new content — every item should be traceable to an upstream section
- Format as two-column: Do / Don't
- Keep it scannable — bullets not paragraphs
- This is often the most-referenced section in daily use; make it dense and useful

---

## PDF Output Settings

- Page size: US Letter (8.5" × 11") or A4 — confirm with user
- Orientation: Portrait default; landscape acceptable for grid/layout section
- Margins: 0.75" all sides minimum
- Cover page: Brand name, document title ("Brand Style Guide"), version, date
- Page numbers: Yes, footer
- Table of contents: Yes, page 2
- Section dividers: Full-bleed color page using primary or neutral from color system
- File naming: `[brandname]-brand-guide-[YYYY-MM].pdf`