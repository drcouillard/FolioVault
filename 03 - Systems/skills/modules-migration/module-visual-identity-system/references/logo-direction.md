# Logo Direction — Blueprint

Used in Step 4 of visual-identity-system. Load when building the logo brief for a brand.

---

## What This Produces

This skill produces a **Logo Direction Brief** — a written specification for a human designer or AI image tool. It does not generate logo files. The brief gives a designer everything they need to make informed creative decisions that are rooted in brand strategy.

---

## Decision Framework

Logo direction is derived from:
1. **Archetype** — sets the visual form language (geometric vs. organic, structured vs. expressive)
2. **Emotional keywords** — refines detail level, weight, and personality
3. **Audience** — affects simplicity level, cultural considerations, platform priority
4. **Anti-positioning** — rules out entire directions before wasting design time

---

## Archetype → Logo Form Language

| Archetype | Form Language | Style Notes |
|---|---|---|
| Innocent | Soft, rounded, simple | Avoid complexity or heaviness |
| Explorer | Rugged, utilitarian, mark-based | Can reference landscape, terrain, movement |
| Sage | Structured, balanced, often typographic | Subtle symbol or none; let the wordmark lead |
| Hero | Bold, strong, symmetrical | High contrast mark; shield or upward motion common |
| Outlaw | Can break rules — asymmetric, raw, hand-made | Distressed, unconventional mark welcomed |
| Magician | Distinctive, memorable, a little mysterious | Transformation symbolism, circle, star, spark |
| Everyman | Simple, functional, unpretentious | Name-forward, modest mark or none |
| Lover | Elegant, refined, often script-adjacent | Flowing forms, monogram potential |
| Jester | Playful, unexpected, character or icon-forward | Can use illustration; avoid corporate rigidity |
| Caregiver | Warm, soft, approachable | Rounded forms; no sharp angles |
| Creator | Expressive, unique, craft-influenced | Mark should feel handmade or distinctly original |
| Ruler | Formal, structured, restrained | Heraldic influence acceptable; wordmark-led |

---

## Logo Type Options

### Wordmark
Brand name rendered as a typographic logo. No icon or symbol.
- **Best for:** Brand names with strong sonic/visual identity; brands that want clarity over symbol
- **Decision:** If the name is distinctive and pronounceable, consider wordmark-first

### Lettermark / Monogram
Initials or abbreviation rendered as mark.
- **Best for:** Long brand names; professional services; brands with recognizable abbreviations
- **Caution:** Only works if the initials are distinctive and don't conflict with competitors

### Icon + Wordmark (Combination Mark)
Symbol paired with the brand name. Most flexible — can be used together or separated.
- **Best for:** Most brands; scales from app icon to billboard; allows icon to eventually stand alone
- **Decision:** Default recommendation unless there's a strong reason for wordmark-only

### Emblem
Text integrated inside a shape or badge. Not separable.
- **Best for:** Heritage brands, craft brands, community organizations
- **Caution:** Reduces versatility; hard to use at small sizes

---

## Logo Brief Components

### 1. Concept Directions
Produce 2–3 distinct conceptual directions. Each gets:
- A one-word name or label (e.g., "Mark + Field", "Pure Wordmark", "Emblem")
- A 2–3 sentence description of the visual concept
- The strategic rationale (which archetype quality or emotional keyword it expresses)

Do not produce more than 3 directions. Decision paralysis is a design problem.

### 2. Wordmark Rules
If the logo includes the brand name in type:
- Recommended font family or style (ties back to typography system)
- Weight recommendation (light / regular / medium / bold)
- Tracking (letter-spacing): tight / normal / open
- Case: uppercase / title case / lowercase
- Any custom letterform modifications to note

### 3. Icon Concept
If a symbol is used:
- Form language (geometric / organic / abstract / pictorial)
- What the icon represents or evokes (not literal description — emotional intent)
- What it should NOT be confused with
- Complexity level (simple, minimal / moderate detail / complex illustration)

### 4. Clear Space Rule
Minimum breathing room around the mark on all sides.
Standard: equal to the height of the tallest letterform in the wordmark, or the cap height of the icon.

State as: "Minimum clear space = [X] — defined as [the cap height / icon height / specific unit]"

### 5. Minimum Size
Smallest size at which the logo remains legible and functional.

| Context | Minimum |
|---|---|
| Digital (screen) | 80px wide for combination mark; 24px for icon-only |
| Print | 1 inch / 25mm wide for combination mark |
| Favicon/app icon | Icon-only, simplified version at 32×32px minimum |

If the logo is complex, a simplified version (icon-only, single-color) is required for small sizes.

### 6. Monochrome Usage
The logo must work in:
- **Black on white** — for fax, photocopy, print limitations
- **White on black** — for reversed contexts

Rules:
- No gradients in monochrome versions
- All detail must read at small sizes without color differentiation
- If the icon relies on color to distinguish elements, they must be distinguished by shape or fill pattern in monochrome

### 7. Reversed-on-Dark Usage
Logo on dark backgrounds (dark mode, photography, colored panels).

Rules:
- Primary version: white or near-white mark on dark background
- If the logo uses a dark stroke or fill, specify how it adapts
- Never use the full-color version directly on a dark background without testing contrast

---

## Output Format for Step 4

```
LOGO DIRECTION BRIEF — [Brand Name]

LOGO TYPE RECOMMENDATION
[Wordmark / Lettermark / Combination Mark / Emblem]
Rationale: [One sentence]

CONCEPT DIRECTIONS

Direction 1 — [Label]
[2–3 sentence description]
Strategic root: [Archetype quality or emotional keyword it expresses]

Direction 2 — [Label]
[2–3 sentence description]
Strategic root: [...]

Direction 3 — [Label] (optional)
[2–3 sentence description]
Strategic root: [...]

WORDMARK RULES
Font direction: [...]
Weight: [...]
Tracking: [...]
Case: [...]

ICON CONCEPT
Form language: [...]
Represents/evokes: [...]
Avoid confusing with: [...]
Complexity: [...]

CLEAR SPACE
Minimum: [X] on all sides, defined as [...]

MINIMUM SIZE
Digital: [...]px wide
Print: [...]mm wide
Favicon: Icon-only, [...]px minimum

MONOCHROME
Black version: [Notes]
White version: [Notes]

REVERSED ON DARK
Adaptation: [Notes]

NOTE: This is a direction brief. Final logo files are produced by a designer.
```