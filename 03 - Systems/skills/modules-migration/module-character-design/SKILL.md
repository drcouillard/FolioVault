---
name: character-design
description: Translates a completed or partial Character Profile into a structured physical design brief. Always reads species-registry.md before executing. Produces the CHARACTER DESIGN BRIEF (MASCOT AVATAR) format.
---

# Character Design Skill (Forma)
## Character Profile + Species → Mascot Avatar Design Brief

Converts a personality profile and species selection into a structured,
renderer-ready character design brief using a **30/70 hybrid approach**:
explicit rules establish the structural scaffold; generative reasoning fills
it with characterful, nuanced detail.

---

## REFERENCE FILES

Always load before executing:

- `species-registry.md` — Species roster, morphology profiles, and Beaver
  template brief. Required for all species lookup, inference, and registry
  management. Located in the same project directory as this skill.

---

## STYLE CONSTANTS

Apply to every brief produced by this skill. Non-negotiable.

| Constant | Value |
|---|---|
| Render style | Flat vector |
| Posture default | Soft Upright (bipedal, species features preserved) |
| Eye orientation | Forward-facing, enlarged for mascot readability |
| Line weight | Consistent across all characters (define once per project) |
| Outline | Present — color matched to darkest palette value per character |
| Silhouette test | Must read clearly at 48px, 128px, 512px |

---

## PIPELINE

```
LAYER 0 — SPECIES ENTRY POINT
        ↓
LAYER 1 — CHARACTER CREATOR ARTIFACT (personality profile)
        ↓
LAYER 2 — TRAIT × MORPHOLOGY SYNTHESIS
        ↓
LAYER 3 — MASCOT GENERATIVE PASS
        ↓
LAYER 4 — AVATAR OUTPUT BLOCK
```

---

## LAYER 0 — SPECIES ENTRY POINT

### Step 1 — Receive species input

### Step 2 — Registry lookup
```
├── Exact match found → load morphology profile → proceed to Layer 1
├── Known vague category → trigger Specificity Query (see below)
└── Unknown species → trigger 6-Axis Inference → generate and log
    morphology profile → proceed to Layer 1
```

### Specificity Query

**Trigger when:** input matches a broad biological category with meaningfully
distinct subtypes (e.g., dinosaur, dog, cat, bird, lizard, bear, shark, monkey).

**Do NOT trigger for:** already-specific inputs (falcon, beaver, basset hound,
T-Rex) or non-biological forms (Roomba, robot, vehicle).

**Query format:**
> "[Species] covers a lot of ground. Want to get more specific?
> Some options: [3–5 relevant subtypes].
> Or say 'any' and I'll infer from the personality profile."

**User response paths:**
```
├── Selects subtype → treat as specific species → registry lookup /
│   6-axis inference
└── Declines / says 'any' → run 6-axis inference using personality
    profile as primary driver, species category as outer constraint
```

**Personality-driven inference (decline path):**
When user declines specificity, select the subtype that best matches the
personality profile. State the choice and reasoning transparently before
proceeding. Example:

> "Based on your profile — high precision, commanding presence, restrained
> warmth — I'm treating this as a Doberman. Adjust if you'd prefer a
> different read."

---

## 6-AXIS SPECIES INFERENCE FRAMEWORK

Use when species is unlisted in registry OR when user declines specificity.
After inference, log the result to species-registry.md as a new entry.

| Axis | Question | Design Output |
|---|---|---|
| **1. Natural Energy** | Fast, slow, or still by nature? | Default Energy dimension score. Distinguish burst (falcon), sustained (beaver), coiled stillness (gator) |
| **2. Scale Impression** | Large, small, or neutral relative to humans? | Silhouette weight, spatial presence. Flag when species scale creates a design opportunity |
| **3. Face Expressibility** | How much natural facial mobility? | Expression vocabulary range. High (basset hound) / Mid (beaver) / Low (falcon, gator) / None (Roomba) |
| **4. Texture / Surface** | Fur, scale, feather, skin, shell, synthetic? | Material language, flat vector treatment (see texture guide below) |
| **5. Movement Signature** | What is this species' most iconic motion? | Idle animation personality, gesture default, behavioral tell |
| **6. Cultural Archetype Load** | What does this species already mean to most people? | Where to lean in, where to subvert. Always state dominant read, then make a deliberate choice |

**Texture flat vector guide:**
- Fur → soft edge marks, minimal stroke texture, directional marks on body only
- Scale → geometric pattern language, hard edges
- Feather → layered shape language, directional strokes
- Skin (bare) → clean fills, expression carries weight
- Shell → graphic, simplified geometry
- Synthetic → clean fills, mechanical detail marks, no organic texture

---

## LAYER 1 — CHARACTER PROFILE ARTIFACT

Read the Character Profile (Typus Record) before proceeding. Priority order:

1. **Character Profile artifact** (primary) — parse all populated layers
2. **Partial profile** (fallback) — proceed with minimum 3 trait signals
3. **Species-only** (minimum) — run inference from species archetype load
   alone; flag that profile data would improve output

---

## LAYER 2 — TRAIT × MORPHOLOGY SYNTHESIS

### Trait Taxonomy — 5 Design Dimensions

Score each 1–5 from profile data:

| Dimension | Drives |
|---|---|
| **Energy** | Silhouette sharpness, color intensity, gesture range |
| **Warmth** | Color temperature, facial openness, approachability |
| **Dominance** | Physical scale, gaze quality, spatial presence |
| **Order** | Clothing precision, symmetry, grooming, intentionality |
| **Openness** | Unconventional features, eclectic style choices |

**Character Profile → dimension mapping:**
- CAPSTONE Strength + Agility → Energy (primary)
- CAPSTONE Presence + Tenacity → Warmth (primary)
- CAPSTONE Strength + Presence → Dominance
- CAPSTONE Cognition + Equilibrium → Order
- CIM Spatial + Existential + Intrapersonal → Openness
- Dominant emotions → modulate intensity of all dimensions
- MBTI I/E → Energy expression (inward vs. outward, not score)
- MBTI J/P → Order score ±1
- MBTI T/F → facial expressiveness register

**Species morphology × personality dimensions:**
The species morphology profile (from registry) sets default dimension
scores. Personality profile shifts them. Species defaults are the floor —
they cannot be fully overridden, only modulated.

Example: Beaver default Energy = 7. A low-energy personality profile
shifts expression of that energy (more internal, less gestural) but does
not make the beaver appear lethargic. Species nature holds.

---

## LAYER 3 — MASCOT GENERATIVE PASS

Do not merely elaborate the scaffold. Interpret the full profile as a whole.
Reason about:

- What trait **combinations** produce unexpected visual results
- Where the character's inner life **surfaces** through species features
- What the character **controls** vs. what **escapes** control in appearance
- The gap between how they see themselves and how they read to others
- Where species clichés are **deliberately subverted** — and why
- How species-native features (tail, beak, trunk, incisors) function as
  **personality assets**, not anatomical facts

**Quality rules:**
- Never produce species clichés unexamined
- Flag culturally loaded defaults and offer alternatives
- Contradictions are assets — surface them, don't resolve them
- The Design Intention must synthesize visual atmosphere, not recap features

---

## LAYER 4 — AVATAR OUTPUT BLOCK

Produce every section. Use the Beaver brief in species-registry.md as the
reference standard for depth, tone, and reasoning quality.

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CHARACTER DESIGN BRIEF — MASCOT AVATAR
[Character name or species]
Flat Vector · Soft Upright · UI Guide
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROFILE SUMMARY
[2–3 sentences synthesizing personality — not a feature list]

─────────────────────────────────────
PHYSICAL DESIGN

Silhouette & Form
[3–5 sentences. Species morphology first, then personality modulation.
Note tail, wingspan, trunk, or other species-native structural elements
and their role in the mascot silhouette.]

Face
[3–5 sentences. Expressibility rating drives depth here. For Low/None
expressibility species, explain how expression is engineered. Note the
species' signature facial feature and how it functions as a personality
asset.]

Coloring — Palette Card
  Primary:    [hex] — [description]
  Secondary:  [hex] — [description]
  Accent:     [hex] — [description, usage rule]
  Surface:    [hex] — [scale/feather/synthetic pattern note]
  Eyes:       [hex] — [contrast note]
  Outline:    [hex] — [typically matches eyes or darkest value]

[2–3 sentences on palette logic — why these colors suit this character]

Style & Clothing
[3–5 sentences. Minimal default for mascots. If clothed, everything
is functional. If unclothed, explain what does the work instead.]

Movement & Presence
[2–4 sentences. Species movement signature adapted to Soft Upright.
Idle behavior. Gesture default. Tail/wing/ear role in movement reads.]

Distinguishing Details
[2–4 sentences. Species signature feature treatment. At least one
detail should emerge from generative reasoning — unexpected but true.]

─────────────────────────────────────
EXPRESSION VOCABULARY

For each of the 5 states: describe using species-specific tells.
Do not use generic emoji-face logic. Each state must be distinct
and rooted in this species' facial and body architecture.

Neutral / Idle
[What the character looks like waiting. This is the default UI state.]

Encouraging
[Positive reinforcement. Celebrates user action.]

Focused / Guiding
[Active instruction. Directs attention.]

Concerned
[Signals error, warning, or user inaction.]

Delighted
[Reward/completion state. Peak positive. Must feel earned, not performed.]

─────────────────────────────────────
IDLE / MOVEMENT PERSONALITY
[Behavioral tell. How they occupy the frame between interactions.
Entry and exit behavior. What makes them immediately recognizable
in motion at small UI sizes.]

─────────────────────────────────────
UI BEHAVIOR NOTES
Ideal for: [interaction types this character suits]
Voice register: [if applicable]
Scale: reads at 48px ([identifiers]), 128px ([expression]), 512px (full)

─────────────────────────────────────
DESIGN INTENTION
[2 sentences maximum. Visual thesis. Creative directive for the artist.
Must not repeat features — synthesize atmosphere.]

─────────────────────────────────────
DESIGNER NOTES
[Clichés subverted. Trait tensions leveraged. Divergence from any
IP reference. Include only if substantive.]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## REGISTRY MANAGEMENT

After producing any brief for an unlisted species:
1. Add the 6-axis morphology profile to species-registry.md
2. Note the character name and any personality-driven modulations
3. Flag if the inferred subtype should become a named registry entry

Do not add to registry for declined-specificity cases where the subtype
was inferred from personality — log the inference reasoning in Designer
Notes instead, and note the species category entry as "open."