---
name: module-brand-identity-strategy
description: Defines the core strategic identity of a brand before any visual or style decisions are made. This skill is the source of truth for all downstream brand decisions including typography, palette, voice, and style guide output.
type: module
---
 
# Brand Identity Strategy Skill
 
Defines the strategic foundation of a brand. Produces a structured identity document that every downstream brand decision — visual, verbal, positional — should trace back to. No assumptions. No defaults. Every output is earned from the user's actual inputs.
 
---
 
## Workflow
 
### Step 1 — Identify the Brand
 
Ask: "Which brand are we building strategy for?"
 
**If a strategy file already exists** (e.g., `references/strategy-[brandname].md`):
→ Load it
→ Review with the user — confirm what's locked, what needs revision
→ Skip to Step 5 if no changes needed
 
**If no strategy file exists:**
→ Run the full intake interview in Step 2
 
---
 
### Step 2 — Brand Intake Interview
 
Ask these questions in a conversational way — don't dump a form. Group naturally. Wait for answers before moving on.
 
**Block A — The Core**
1. What does this brand do? (product/service, in plain language)
2. Why does it exist — what problem does it solve or need does it fill?
3. Who is it for? (be specific — demographics, behaviors, mindset)
4. Is there a non-negotiable commitment underneath the positioning that should be stated explicitly? (Examples: free access, sustainability pledge, ethical line you won't cross. If no, skip.)
5. What does it *not* want to be? (anti-positioning)
**Block B — The Feeling**
6. When someone interacts with this brand, what should they feel?
7. What 3–5 words describe the brand's personality?
8. If this brand were a person, how would they talk? What would they never say?
 
**Block C — The Market**
9. Who are the main competitors?
10. What do those competitors do well? What do they get wrong?
11. What makes this brand different — not just better, but *different*?
 
**Block D — The Future**
12. What does success look like in 1 year? In 5 years?
13. Is there a tagline or name direction already, or is that open?
 
Record all answers. Do not interpret or editorialize during intake. Capture what the user actually says.
 
---
 
### Step 3 — Synthesize the Strategy
 
Using the intake answers, build the full identity document. Reference `references/archetypes.md` to select and justify the brand archetype.
 
**Required outputs — every required field must be filled or marked `[PENDING]`; optional fields may be skipped:**
 
| Output | Description |
|---|---|
| One-Line Description | What the brand is, for whom, and why it matters — in one sentence |
| Mission Statement | Why the brand exists (internal compass, not marketing copy) |
| Value Proposition | The clear benefit delivered to the target customer |
| Brand Archetype | Primary (and secondary if needed) from the 12-archetype framework |
| Target Audience Profiles | 2–3 distinct audience segments with detail |
| Emotional Keywords | 5–8 words capturing the feeling the brand should produce |
| Positioning Statement | Formal structure: "For [audience] who [need], [brand] is the [category] that [benefit] because [reason to believe]." |
| Founding Principle | Optional — captures a non-negotiable commitment underneath the positioning (if one exists) |
| Competitive Differentiation | What specifically sets this brand apart and why it's defensible |
| Tagline Options | 3 options (not slogans — positioning-rooted, durable, memorable) |
| Anti-Positioning | What the brand is *not* — guardrails against drift |
 
---
 
### Step 4 — Review & Lock
 
Present the completed strategy document to the user. Walk through each output explicitly.
 
- Flag any `[PENDING]` fields and resolve them
- Confirm archetype resonance — if it doesn't feel right, revisit
- Lock the document once the user confirms
Do not proceed to Step 5 until the user approves the strategy.
 
---
 
### Step 5 — Save Strategy File
 
Save the finalized document as `references/strategy-[brandname].md`.
 
This file becomes the input for:
- `brand-style-guide` skill (Skill #3) — voice, tone, personality
- Typography selection — driven by archetype and emotional keywords
- Color palette development — driven by emotional keywords and positioning
- Logo direction briefs
---
 
### Step 6 — Handoff Summary
 
Output a brief handoff block:
 
```
BRAND STRATEGY LOCKED: [Brand Name]
Archetype: [Primary] / [Secondary if applicable]
Core Feeling: [Top 3 emotional keywords]
Positioning: [One-line summary]
Ready for: Typography → Color → Logo → Style Guide
```
 
---
 
## Hard Rules
 
- Never assume brand values, audience, or positioning — all inputs come from the user
- Never reuse strategy details from another brand or session
- Archetype selection must be explained and confirmed — never assigned silently
- If a required output field cannot be completed from intake, mark it `[PENDING]` and flag it at review
- The strategy file is the locked source of truth — no downstream skill should contradict it
- If the user skips to style guide without a strategy file, surface this and recommend running this skill first
---
 
## Notes on Archetype Use
 
Read `references/archetypes.md` before assigning an archetype. The 12 archetypes each carry:
- A core motivation
- A communication style
- Typography and color tendencies
- A brand "danger zone" (how the archetype drifts when mismanaged)
Archetype shapes every downstream visual and verbal decision. Take it seriously.