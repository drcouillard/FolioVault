# Layout Rules — Blueprint

Used in Step 5 of visual-identity-system. Load when building the layout and spacing system for a brand.

---

## Decision Framework

Layout is the least brand-expressive of the visual systems, but it's not neutral. It carries:
- **Density signal** — airy/premium vs. efficient/practical
- **Personality signal** — rigid/formal vs. loose/playful
- **Platform signal** — print-first vs. digital-first vs. both

Derive layout decisions from:
1. **Archetype** — formality and density level
2. **Audience** — their platform, device, and context (desktop pro vs. mobile consumer)
3. **Anti-positioning** — if brand is "uncomplicated," layout must reinforce that

---

## Spacing Scale

Use an 8px base unit. This aligns with most design tools (Figma, Tailwind) and maintains visual rhythm.

If the brand is extremely minimal or document-focused, a 4px base is acceptable — but document the choice.

### Standard 8px Scale

| Token | Value | Usage |
|---|---|---|
| space-1 | 4px | Internal padding minimum; icon gaps |
| space-2 | 8px | Tight padding; input fields |
| space-3 | 12px | Compact component padding |
| space-4 | 16px | Standard padding; card interiors |
| space-5 | 24px | Section separation within components |
| space-6 | 32px | Component-to-component gap |
| space-7 | 48px | Section-level breathing room |
| space-8 | 64px | Hero padding; major section breaks |
| space-9 | 96px | Page-level vertical rhythm |
| space-10 | 128px | Large breakpoint spacing; hero sections |

### Choosing the Brand's Density Level

**Airy (use larger values by default):**
- Archetypes: Ruler, Lover, Sage, Magician
- Keywords: premium, refined, calm, elevated
- Default: Start at space-4 for component padding, space-7 for section gaps

**Standard:**
- Archetypes: Explorer, Hero, Creator, Caregiver
- Default: space-3/4 for component padding, space-6 for section gaps

**Dense (compact, utilitarian):**
- Archetypes: Everyman, Outlaw (sometimes), Jester
- Keywords: practical, efficient, scrappy
- Default: space-2/3 for component padding, space-5 for section gaps

---

## Border Radius System

Border radius signals personality. Rounded = approachable. Sharp = formal or edgy.

### System Options

**Sharp (0–2px):**
- Use for: Ruler, Outlaw, Sage
- Feeling: authoritative, editorial, structured
- Never use: rounded avatars or pills

**Subtle (4px):**
- Use for: Hero, Explorer, Creator
- Feeling: grounded, modern, capable
- Balanced — works across most UI contexts

**Moderate (8–12px):**
- Use for: Innocent, Caregiver, Everyman
- Feeling: friendly, approachable, safe
- Default for consumer-facing products

**Expressive (16–24px+ or full pill):**
- Use for: Jester, Lover (pills), Innocent (bubbles)
- Feeling: playful, soft, casual
- Use selectively — full radius on buttons only, not cards

### Output Format
Define a scale, not just one value:

```
Border Radius Scale — [Brand Name]
--radius-sm: [value]   (inputs, tags, small components)
--radius-md: [value]   (cards, modals, most components)
--radius-lg: [value]   (featured cards, hero elements)
--radius-full: 9999px  (pills, avatar circles — use sparingly)
```

---

## Card Elevation

Elevation communicates hierarchy. Use shadow to lift elements above the surface.

### Shadow Scale

```
elevation-0: none                                         (flat, no shadow — inline elements)
elevation-1: 0 1px 2px rgba(0,0,0,0.06)                 (subtle — table rows, hover state)
elevation-2: 0 2px 8px rgba(0,0,0,0.10)                 (cards, dropdowns)
elevation-3: 0 8px 24px rgba(0,0,0,0.14)                (modals, popovers, focused panels)
elevation-4: 0 16px 48px rgba(0,0,0,0.18)               (full-screen overlays, drawers)
```

**Brand personality adjustment:**
- Premium/Ruler/Lover: Softer, more diffuse shadows (increase blur, reduce opacity)
- Minimal/Sage: Flatten — prefer borders over shadows
- Expressive/Jester/Outlaw: Can use colored shadows (shadow in brand primary at low opacity)

**Dark mode:** In dark mode, elevation is communicated via surface lightness, not shadow. Each elevation level gets a slightly lighter background, not a heavier shadow.

---

## Grid Spacing

Define the layout grid for the brand's primary context (web, print, or both).

### Web Grid (most common)

| Breakpoint | Columns | Gutter | Margin |
|---|---|---|---|
| Mobile (< 768px) | 4 | 16px | 16px |
| Tablet (768–1024px) | 8 | 24px | 24px |
| Desktop (1024–1440px) | 12 | 24px | 32px |
| Wide (> 1440px) | 12 | 32px | auto (max-width container) |

**Max content width:** 1280px or 1440px for most brands. Define this explicitly.

**Premium/editorial brands:** Can use narrower max-width (1024px) for tighter reading measure.

### Column Usage Rules
State how many columns different element types occupy:

```
Full-width section: 12/12 columns
Primary content: 8/12 (with 2-col sidebar or margin on each side)
Featured card: 4/12 or 6/12
Standard card grid: 4/12 (3-up), 6/12 (2-up)
Form fields: 6/12 or 8/12
```

---

## Visual Rhythm

Visual rhythm = consistent vertical spacing that makes a layout feel intentional rather than assembled.

### Rules to Document

1. **Line height:** Body copy at 1.5–1.6x. Headings at 1.1–1.3x. Never let line height be automatic/browser default without specifying.

2. **Paragraph spacing:** Use margin-bottom on paragraphs equal to 1 line height (e.g., if body is 16px at 1.5, paragraph spacing = 24px).

3. **Component rhythm:** All vertical space between components should be a value from the spacing scale — no arbitrary pixel values.

4. **Alignment:** Specify whether the brand uses left-aligned, center-aligned, or mixed text. Most brands: left-aligned body, center-aligned for hero/display only.

5. **Dividers:** When to use a line vs. space as a separator. Minimal brands: space-only. Structured brands: thin 1px neutral dividers.

---

## Output Format for Step 5

```
LAYOUT RULES — [Brand Name]

BASE UNIT: [4px / 8px]
DENSITY LEVEL: [Airy / Standard / Dense] — rationale

SPACING SCALE
space-1: 4px
space-2: 8px
space-3: 12px
space-4: 16px
space-5: 24px
space-6: 32px
space-7: 48px
space-8: 64px

BORDER RADIUS SYSTEM
--radius-sm: [value]
--radius-md: [value]
--radius-lg: [value]
--radius-full: 9999px

CARD ELEVATION
elevation-0: none
elevation-1: [CSS value]
elevation-2: [CSS value]
elevation-3: [CSS value]

GRID
Mobile: 4 cols / [gutter] gutter / [margin] margin
Tablet: 8 cols / [gutter] gutter / [margin] margin
Desktop: 12 cols / [gutter] gutter / [margin] margin
Max content width: [value]

VISUAL RHYTHM
Body line height: [value]
Heading line height: [value]
Paragraph spacing: [value]
Text alignment default: [left / center / mixed]
Dividers: [space-only / 1px neutral line / both]
```