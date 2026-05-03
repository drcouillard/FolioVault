---
name: protocol-brand-voice-system
description: "Defines and documents all verbal and messaging rules for a brand â€” tone, vocabulary, sentence rhythm, messaging pillars, phrases to use and avoid, product descriptions, and marketing copy rules. Output is a locked voice file reusable across all brand copy contexts: website, product pages, ads, presentations, emails."
---
 
# Brand Voice System Skill
 
Translates brand strategy into a complete verbal identity system. Takes the locked identity document from `brand-identity-strategy` as its source of truth and produces structured rules for how the brand communicates â€” tone, vocabulary, rhythm, messaging pillars, and copy guidelines.
 
No voice decisions are invented. Every rule is derived from strategy.
This skill produces a reusable reference document, not a PDF. The PDF is Skill #4's job.
 
---
 
## Pre-Flight Check
 
Before starting, confirm:
 
1. **Does a locked strategy file exist?** (`references/strategy-[brandname].md` from brand-identity-strategy)
   - If yes â†’ load it. Extract: archetype, emotional keywords, audience profiles, positioning statement, anti-positioning, tagline options.
   - If no â†’ stop. Tell the user this skill requires a completed brand strategy first. Offer to run `brand-identity-strategy`.
2. **Does a voice file already exist?** (`references/voice-[brandname].md`)
   - If yes â†’ load it, review with user, confirm what's locked vs. what needs revision.
   - If no â†’ run full workflow below.
---
 
## Workflow
 
### Step 1 â€” Strategic Intake
 
Pull from the locked strategy file:
- **Archetype** (primary + secondary) â†’ sets the emotional register of the voice
- **Emotional keywords** â†’ determines vocabulary territory
- **Audience profiles** â†’ informs formality level, reading complexity, platform assumptions
- **Positioning statement** â†’ the core claim the voice must always support
- **Anti-positioning** â†’ what the voice must never sound like
- **Tagline options** â†’ rhythm reference for the brand's verbal style
Summarize what you extracted and confirm with the user before building.
 
---
 
### Step 2 â€” Tone Definition
 
Read `references/voice-framework.md` for the tone decision framework.
 
Produce:
- **Tone position** â€” place the brand on four axes (see voice-framework.md): Formal â†” Casual, Serious â†” Playful, Authoritative â†” Humble, Expressive â†” Reserved
- **Tone description** â€” a paragraph describing how the brand sounds, written in that voice
- **Tone in context** â€” how tone shifts across contexts (e.g., product page vs. error message vs. social post) without losing brand consistency
---
 
### Step 3 â€” Vocabulary System
 
Produce:
- **Core vocabulary** â€” 10â€“20 words or phrases the brand owns; high-frequency, on-brand
- **Words to use** â€” specific to brand personality (e.g., "build" not "leverage"; "clear" not "transparent")
- **Words to avoid** â€” terms that contradict positioning or sound like competitors
- **Jargon policy** â€” does this brand use industry terms? Define the threshold.
- **Formality rules** â€” contractions: yes or no? Sentence fragments: acceptable or not?
---
 
### Step 4 â€” Sentence Rhythm
 
Produce:
- **Sentence length default** â€” short / medium / long / mixed (with rationale)
- **Rhythm description** â€” how sentences flow; cadence of short-medium-long variation
- **Punctuation personality** â€” em dashes, ellipses, exclamation points: what's allowed, what's banned
- **Structural preferences** â€” does the brand lead with benefit or context? Action or explanation?
- **Examples** â€” 3 on-brand sentences and 3 off-brand rewrites showing the contrast
---
 
### Step 5 â€” Messaging Pillars
 
Read `references/messaging-pillars.md` for the pillar framework.
 
Produce:
- **3â€“5 messaging pillars** â€” the core themes the brand always returns to
- For each pillar:
  - Pillar name (2â€“4 words)
  - What it means internally (the belief)
  - How it shows up in copy (the expression)
  - Sample headline or proof point
---
 
### Step 6 â€” Copy Rules by Context
 
Produce specific guidelines for each content context. Read `references/copy-contexts.md` for format guidance.
 
Contexts to cover:
- **Website headline / hero copy** â€” primary CTA language, length, structure
- **Product descriptions** â€” what to lead with, what to always include, what to never say
- **Marketing / ad copy** â€” length rules, emotional hook approach, CTA style
- **Email subject lines** â€” format, personalization policy, what gets opens
- **Social posts** â€” platform-specific tone adjustments (if applicable)
- **Error messages / UI copy** â€” tone in friction moments (never cold, never robotic)
- **Presentations / decks** â€” slide copy rules, how verbose to get
---
 
### Step 7 â€” Phrases to Use / Avoid
 
Produce a reference table:
 
| Use This | Not This | Why |
|---|---|---|
| [On-brand phrase] | [Off-brand alternative] | [One-sentence rationale] |
 
Minimum 10 rows. Cap at 20. These should be specific â€” not generic rules, but actual word choices.
 
---
 
### Step 8 â€” Review & Lock
 
Present the complete voice document to the user, section by section.
 
- Flag any `[PENDING]` fields
- Confirm each section is approved before locking
- Test: read three sections aloud. Does it sound like the same person? If not, something is inconsistent â€” find and fix it before saving.
Do not save until the user approves the full document.
 
---
 
### Step 9 â€” Save Voice File
 
Save the finalized document as `references/voice-[brandname].md`.
 
This file is the input for:
- `brand-style-guide` skill â€” pulls voice and messaging rules for the PDF guide
- Any copywriter, AI writing tool, or content system working in this brand's voice
- Campaign briefs, content calendars, and editorial guidelines
---
 
### Step 10 â€” Handoff Summary
 
```
VOICE SYSTEM LOCKED: [Brand Name]
Tone: [2-word summary, e.g., "Direct, Warm"]
Pillars: [Pillar 1] Â· [Pillar 2] Â· [Pillar 3]
Voice in one sentence: [Write it in the brand's own voice]
Ready for: Brand Style Guide â†’ Website Copy â†’ Product Descriptions â†’ Marketing
```
 
---
 
## Hard Rules
 
- Never invent voice characteristics without tracing them to the strategy file
- Never proceed without a locked strategy file
- Never carry voice rules from one brand into another session
- The tone description must be written in the brand's actual voice â€” it proves the system works
- Phrases-to-avoid list must reference specific words, not vague direction ("be clear" is not a rule)
- One voice file per brand â€” no mixing
- If the user skips to style guide without a voice file, surface the gap
 
