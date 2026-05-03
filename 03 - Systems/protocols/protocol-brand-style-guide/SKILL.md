---
name: protocol-brand-style-guide
description: Compiles approved brand decisions from locked upstream files into a formatted, professional PDF brand style guide.
type: module
---
 
# Brand Style Guide Skill
 
**This is the publishing layer. Its job is document generation, not brand invention.**
 
Compiles approved brand decisions from three upstream locked files into a single formatted PDF reference document. No brand decisions are made here. No gaps are filled with assumptions. If a required input file is missing or incomplete, this skill stops and says so.
 
```
brand-identity-strategy  â†’  strategy-[brand].md   (source of truth: identity)
visual-identity-system   â†’  vis-[brand].md         (source of truth: visuals)
brand-voice-system       â†’  voice-[brand].md       (source of truth: messaging)
        â†“
brand-style-guide        â†’  [brand]-style-guide.pdf
```
 
---
 
## Pre-Flight Check
 
Before generating anything, confirm all three upstream files exist and are locked.
 
**Required inputs:**
- `references/strategy-[brandname].md` â€” from brand-identity-strategy âœ“/âœ—
- `references/vis-[brandname].md` â€” from visual-identity-system âœ“/âœ—
- `references/voice-[brandname].md` â€” from brand-voice-system âœ“/âœ—
**If any file is missing:**
â†’ Stop. Name exactly which skill(s) need to run first.
â†’ Do not generate a partial guide or fill gaps with invented content.
â†’ Offer to run the missing skill.
 
**If all files exist:**
â†’ Load all three. Do not reinterpret or editorialize their contents.
â†’ Confirm with the user: "All three source files are loaded. Generating the guide now â€” or would you like to review what's being compiled first?"
 
---
 
## Workflow
 
### Step 1 â€” Load Source Files
 
Load and parse all three upstream files. Extract:
 
**From strategy-[brand].md:**
- Brand name
- One-line description
- Mission statement
- Value proposition
- Brand archetype (primary + secondary)
- Target audience profiles
- Emotional keywords
- Positioning statement
- Tagline options (note which is preferred if specified)
**From vis-[brand].md:**
- Typography system (all fonts, scale, fallback stacks, accessibility rules)
- Color system (full palette, dark mode, accessibility checks)
- Logo direction brief (all components)
- Layout rules (spacing scale, border radius, elevation, grid, visual rhythm)
**From voice-[brand].md:**
- Tone position (all four axes)
- Tone description
- Vocabulary system (use / avoid lists)
- Sentence rhythm rules
- Messaging pillars
- Copy rules by context
- Phrases to use / avoid table
Do not add, interpret, or supplement any of these values. Compile as-is.
 
---
 
### Step 2 â€” Load Section Structure
 
Read `references/guide-sections.md` for the exact section order, layout rules, and formatting requirements for each section of the PDF.
 
Default section order:
1. Brand Overview (from strategy)
2. Logo Usage (from visual identity)
3. Color System (from visual identity)
4. Typography (from visual identity)
5. Layout & Spacing (from visual identity)
6. Voice & Tone (from voice system)
7. Messaging Pillars (from voice system)
8. Copy Rules (from voice system)
9. Do's & Don'ts (compiled across all three)
User may reorder or remove sections. Ask if there are any changes to the default before proceeding.
 
---
 
### Step 3 â€” Flag Any Gaps
 
Before generating, scan all three source files for any `[PENDING]` or `[PLACEHOLDER]` fields.
 
If found:
â†’ List every unfilled field explicitly with its source file and section
â†’ Ask the user to resolve them or confirm they should be marked as pending in the output
â†’ Never silently skip a placeholder or fill it in
 
If none found:
â†’ Confirm: "No pending fields found. Proceeding to generate."
 
---
 
### Step 4 â€” Generate the PDF
 
Run `scripts/generate-pdf.py` with all compiled content passed as structured variables.
 
The script handles all layout, typography, color rendering, section formatting, and file output.
 
**The script does not make brand decisions. It formats what it receives.**
 
Output filename format: `[brandname]-brand-guide-[YYYY-MM].pdf`
 
---
 
### Step 5 â€” Deliver
 
Present the completed PDF to the user via `present_files`.
 
Confirm the file is in `/mnt/user-data/outputs/`.
 
If any `[PENDING]` fields remain in the output, list them at delivery so the user knows exactly what still needs filling before the guide is production-ready.
 
---
 
### Step 6 â€” Orchestrator Handoff (if applicable)
 
If this skill was called by `brand-orchestrator`, return the following on completion:
 
```
GUIDE GENERATED: [Brand Name]
Output: [filename].pdf
Status: [Complete / Pending fields remain]
Pending: [List any unresolved fields, or "None"]
```
 
---
 
## Hard Rules
 
- **Never invent brand decisions.** Every value in the guide comes from an upstream locked file.
- **Never proceed with missing source files.** Name them and stop.
- **Never fill in placeholder fields.** Mark them and surface them.
- **Never carry content from one brand session into another.**
- **If the user asks you to "just add" something not in a source file** â€” stop. Direct them to the appropriate upstream skill to make that decision there, then regenerate.
- **One guide per brand per session.** Never mix content from two brands.
- **If asked to "update the guide"** â€” ask which source file changed first. Reload that file, re-run from Step 1. Do not make edits directly inside the generated PDF.
