# Color System — Blueprint

Used in Step 3 of visual-identity-system. Load when building the color system for a brand.

---

## Decision Framework

Color is derived from:
1. **Archetype** — sets the emotional temperature and palette territory
2. **Emotional keywords** — refines hue, saturation, and value within that territory
3. **Anti-positioning** — tells you what color territory to avoid
4. **Audience and platform** — affects saturation level, dark mode priority, educational variants

Never pick colors by preference alone. Every choice traces back to strategy.

---

## Archetype → Color Tendencies

| Archetype | Hue Territory | Saturation/Value | What to Avoid |
|---|---|---|---|
| Innocent | White, pastels, sky blue, natural | Light, pure, soft | High contrast, heavy black |
| Explorer | Earth tones, forest, burnt orange | Mid-range, natural | Neon, clinical, corporate |
| Sage | Navy, deep blue, stone, forest | Deep, authoritative | Playful brights, pastels |
| Hero | Black, red, navy, gold | High contrast, bold | Soft, muted, low-energy |
| Outlaw | Black, red, high contrast | Often extreme — very dark or aggressive | Safe corporate palettes |
| Magician | Purple, midnight, gold, black | Rich, deep, sometimes unexpected | Flat or washed-out |
| Everyman | Earth tones, functional mid-tones | Practical, nothing flashy | Exclusive-feeling palettes |
| Lover | Deep red, rose, burgundy, gold | Rich, warm, inviting | Cold blues, clinical whites |
| Jester | Bright, saturated, unexpected combos | High energy | Muted, neutral, serious |
| Caregiver | Warm white, gentle blue, soft green | Soft, never aggressive | Sharp contrast, dark palettes |
| Creator | Brand-defining, often unique | Broad range | Generic category-typical |
| Ruler | Black, gold, deep navy, white | Premium, restrained | Casual or "fun" palettes |

---

## Palette Architecture

### Primary Palette (1–2 colors)
The brand's hero colors. Used for CTAs, key UI elements, brand moments.

- Choose based on archetype territory + emotional keywords
- Test: does this color feel like the brand? Could it belong to a competitor?
- Aim for distinctiveness within the category (differentiation)
- Provide: hex, RGB, HSL, CMYK (for print-capable brands)

### Accent Palette (1–2 colors)
Supporting colors that complement primary. Used for secondary actions, highlights, category tagging.

- Must not compete with primary
- Can have more personality or energy than primary
- Test: does it work next to the primary without clashing or washing out?

### Neutrals (minimum 4 stops)
Backbone of any UI or document. Used for backgrounds, dividers, secondary text.

```
Neutral-50:  [Very light — near white background]
Neutral-100: [Light — card background, subtle section]
Neutral-300: [Mid — borders, dividers]
Neutral-600: [Dark — secondary text]
Neutral-900: [Very dark — primary text, near black]
```

### Grayscale (functional)
For text, icons, and UI states. Separate from neutrals which may have a warm or cool tint.

```
Gray-100: [Disabled states, placeholder text]
Gray-400: [Secondary UI elements]
Gray-700: [Body text secondary]
Gray-900: [Primary text]
```

### Dark Mode Palette
Do not simply invert. Redesign with dark mode intentionality.

Rules:
- Background is never pure black (#000000) — use a very dark neutral (e.g., #0F1117, #1A1A2E)
- Primary color may need saturation adjustment — highly saturated colors vibrate on dark backgrounds
- Text is never pure white (#FFFFFF) — use a near-white (e.g., #F0F0F0, #E8E8E8)
- Elevation is shown with lightness, not shadow, in dark mode

Provide:
- Dark background
- Dark surface (card, modal)
- Dark border
- Primary (adjusted for dark)
- Text primary / secondary on dark

### Educational Variants (if applicable)
Softer, lower-contrast tones for instructional contexts (lesson backgrounds, callout boxes, progress indicators).

Typically: 10–20% opacity or tinted backgrounds of the primary/accent.
Never use full-saturation brand colors as large background fields in educational contexts.

---

## WCAG Accessibility Contrast Requirements

**WCAG AA (minimum — all production use):**
- Normal text (< 18pt): 4.5:1 contrast ratio against background
- Large text (≥ 18pt bold or ≥ 24pt): 3:1 contrast ratio
- UI components and icons: 3:1 against adjacent color

**WCAG AAA (target for critical contexts like healthcare, education):**
- Normal text: 7:1
- Large text: 4.5:1

**How to check:**
Use the formula: relative luminance comparison.
Tools: WebAIM Contrast Checker (webaim.org/resources/contrastchecker), Colour Contrast Analyser, or browser DevTools accessibility panel.

**Hard rule:** Any pairing that fails AA must be flagged `[FAILS WCAG AA — DO NOT USE]`. Do not present it as a valid option.

---

## Output Format for Step 3

```
COLOR SYSTEM — [Brand Name]

PRIMARY PALETTE
[Color Name]: #[HEX] | RGB([r],[g],[b]) | HSL([h],[s%],[l%])
Rationale: [One sentence]

ACCENT PALETTE
[Color Name]: #[HEX]
Rationale: [One sentence]

NEUTRALS
Neutral-50:  #[HEX]
Neutral-100: #[HEX]
Neutral-300: #[HEX]
Neutral-600: #[HEX]
Neutral-900: #[HEX]

GRAYSCALE
Gray-100: #[HEX]
Gray-400: #[HEX]
Gray-700: #[HEX]
Gray-900: #[HEX]

DARK MODE
Background:  #[HEX]
Surface:     #[HEX]
Border:      #[HEX]
Primary:     #[HEX] (adjusted)
Text/Primary: #[HEX]
Text/Secondary: #[HEX]

EDUCATIONAL VARIANTS
[If applicable]

ACCESSIBILITY CHECKS
[Primary] on [White]: [ratio]:1 — [PASS AA / FAIL]
[Primary] on [Dark bg]: [ratio]:1 — [PASS AA / FAIL]
[Body text] on [Neutral-50]: [ratio]:1 — [PASS AA / FAIL]
[Any failures flagged explicitly]
```