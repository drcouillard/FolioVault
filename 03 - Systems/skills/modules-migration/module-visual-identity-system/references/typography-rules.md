# Typography Rules — Blueprint

Used in Step 2 of visual-identity-system. Load when building the typography system for a brand.

---

## Decision Framework

Typography is derived from three inputs from the strategy file:
1. **Archetype** — sets the formality and personality range
2. **Emotional keywords** — narrows tone within that range
3. **Audience profiles** — sets legibility and platform requirements

Never pick fonts because they're popular or trending. Every choice needs a one-sentence rationale.

---

## Archetype → Typography Tendencies

| Archetype | Heading Direction | Body Direction | What to Avoid |
|---|---|---|---|
| Innocent | Rounded sans, soft serif | Friendly, open letterforms | Sharp geometrics, heavy weight |
| Explorer | Slab serif, rugged sans | Sturdy, utilitarian | Delicate scripts, formal serifs |
| Sage | Classic serif, editorial | High readability, structured | Decorative or playful type |
| Hero | Bold modern sans | Clean, strong, high contrast | Anything soft or ornate |
| Outlaw | Distressed, heavy, unconventional | Can break rules intentionally | Corporate serifs, neutral sans |
| Magician | Distinctive, sometimes custom | Elegant, considered | Generic system fonts |
| Everyman | Functional, no-fuss sans | Neutral, highly readable | Anything flashy or exclusive |
| Lover | Elegant serif, flowing script | Refined, warm | Harsh geometrics, mono |
| Jester | Quirky, high personality | Can be irregular | Corporate neutrals |
| Caregiver | Warm, rounded, approachable | Soft, readable, never cold | Aggressive weight or contrast |
| Creator | Expressive, original, distinctive | Often craft-influenced | Generic or invisible type |
| Ruler | Formal, structured serif | Restrained, polished | Casual or irregular type |

---

## Font Categories

### Heading Fonts
Used for H1–H3. Sets brand personality. Can have more expressive weight.

**Decision factors:**
- Archetype alignment (see table above)
- Emotional keywords: bold/dramatic → high-contrast serif or strong sans; warm/approachable → rounded or humanist; minimal/modern → geometric sans
- Is this primarily a digital brand? → prioritize fonts with strong screen rendering (variable fonts preferred)
- Is this a print-heavy brand? → classic serifs with proven optical sizing

**Free options (Google Fonts / Variable):**
- Fraunces (editorial serif, expressive)
- Playfair Display (classic, high contrast)
- DM Serif Display (modern editorial)
- Inter (clean, professional, highly legible)
- Sora (geometric, modern, friendly)
- Space Grotesk (tech-adjacent, distinctive)
- Raleway (elegant, light)

### Body Fonts
Used for H4, body copy, UI labels, captions. Must prioritize legibility over personality.

**Decision factors:**
- Readable at 14–16px minimum
- Line height: 1.5–1.7x for body copy
- Works well at low contrast (accessibility risk area)
- Pairs without competing with heading font

**Pairing logic:**
- Serif heading → sans-serif body (most common, high contrast)
- Sans heading → can use serif body for warmth, or matching sans family
- Display heading → always pair with neutral body

**Reliable body font options:**
- Inter (neutral, excellent screen)
- Source Sans 3 (humanist, warm)
- Lato (friendly, professional)
- Nunito (rounded, accessible)
- Merriweather (serif body, excellent readability)

### Accent / Display Fonts
Optional. Used for pull quotes, decorative labels, campaign headlines only.
Never used for body copy, navigation, or functional UI text.

---

## Font Scale Hierarchy

Use a modular scale. Base: 16px (1rem). Recommended ratio: 1.25 (Major Third) for most brands; 1.333 (Perfect Fourth) for bolder, more expressive brands.

| Level | Scale (1.25) | Scale (1.333) | Usage |
|---|---|---|---|
| Display | 48–64px | 56–72px | Hero headlines, campaign |
| H1 | 39px | 42px | Page titles |
| H2 | 31px | 32px | Section headers |
| H3 | 25px | 24px | Subsection headers |
| H4 | 20px | 18px | Card titles, labels |
| Body | 16px | 16px | All body copy |
| Small | 13px | 12px | Captions, footnotes |

---

## Accessibility Legibility Rules

- **Minimum body size:** 16px (14px absolute minimum for secondary text only)
- **Minimum caption size:** 12px — never smaller
- **Line height:** 1.5 minimum for body; 1.2–1.4 for headings
- **Letter spacing:** 0 to 0.02em for body; headings can go tighter (-0.02em) or looser for display
- **Maximum line length (measure):** 45–75 characters per line for optimal readability
- **Contrast:** See color-system.md for WCAG requirements — text color must meet AA at minimum

---

## Fallback Stack Format

```css
/* Heading */
font-family: '[Chosen Font]', '[Similar fallback]', Georgia, serif;

/* Body */
font-family: '[Chosen Font]', '[Similar fallback]', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

Always provide at least one web-safe font in the stack.

---

## Output Format for Step 2

Present typography decisions in this structure:

```
TYPOGRAPHY SYSTEM — [Brand Name]

Heading Font: [Name] — [Weight(s) in use]
Rationale: [One sentence linking to archetype/keywords]

Body Font: [Name] — [Weight(s) in use]
Rationale: [One sentence on legibility choice]

Accent Font: [Name or "None"]
Usage: [Where and only where it appears]

Scale: [Ratio used and why]
[Table of H1–body–caption sizes]

Fallback Stacks:
Heading: [full stack]
Body: [full stack]

Accessibility:
- Minimum body: [size]
- Line height: [value]
- Measure: [character range]
```