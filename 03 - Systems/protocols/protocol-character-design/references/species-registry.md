# Species Registry
## AAS Design Skill — Reference Data

Version: 1.0
Last updated: 2026-04-08

This file is the data layer for the aas-design skill. It contains:
- Morphology profiles for all registered species
- The Beaver brief as the canonical template standard
- Instructions for adding new species entries

The aas-design skill reads this file at the start of every session.
Do not embed pipeline logic here — logic lives in aas-design/SKILL.md.

---

## HOW TO ADD A NEW SPECIES

1. Run the 6-axis inference framework (defined in aas-design/SKILL.md)
2. Copy the morphology profile template below
3. Fill all 6 axes + dimension defaults
4. Add the entry to the registry in alphabetical order
5. If a full brief was produced, append it under the morphology profile

For vague species where user declined specificity: log the category as
"open" and note the personality-driven subtype used in that session.
Do not create a locked entry for an inferred subtype without user confirmation.

---

## MORPHOLOGY PROFILE TEMPLATE

```
SPECIES: [Name]
Subtype of: [Parent category, if applicable]
Status: [Baseline / Inferred / Open]

Axis 1 — Natural Energy:     [burst / sustained / coiled / low]
  Score default:             [1–10]
Axis 2 — Scale Impression:   [large / medium / small / variable]
  Silhouette note:           [weight, presence, any design opportunity]
Axis 3 — Face Expressibility:[high / mid / low / none]
  Expression engine:         [what carries expression for this species]
Axis 4 — Texture / Surface:  [fur / scale / feather / skin / shell / synthetic]
  Flat vector treatment:     [specific guidance]
Axis 5 — Movement Signature: [description of iconic motion]
  Idle default:              [mascot idle behavior]
  Gesture default:           [primary hand/body gesture]
Axis 6 — Cultural Load:      [dominant cultural read]
  Design choice:             [lean in / subvert — and why]

Dimension Defaults (1–10):
  Energy:    [n]
  Warmth:    [n]
  Dominance: [n]
  Order:     [n]
  Openness:  [n]
```

---

## BASELINE SPECIES — 8 ARCHETYPES

---

### ANT

```
SPECIES: Ant
Subtype of: Insect
Status: Baseline

Axis 1 — Natural Energy:     sustained (constant, task-cycling)
  Score default:             8
Axis 2 — Scale Impression:   very small
  Silhouette note:           Scale contrast is a design opportunity —
                             lean into the small-body/big-output tension.
                             Mascot treatment enlarges head relative to body.
Axis 3 — Face Expressibility:low
  Expression engine:         Eyes (enlarged, compound → simplified to two
                             large ovals for mascot). Antennae carry
                             secondary emotional signal — angle and
                             proximity convey state.
Axis 4 — Texture / Surface:  chitin (smooth, segmented)
  Flat vector treatment:     Clean geometric fills. Segmented body reads
                             as 3 distinct shape units (head, thorax,
                             abdomen). Minimal texture marks.
Axis 5 — Movement Signature: purposeful, linear, load-bearing
  Idle default:              Antennae in slow independent motion.
                             Slight weight shift side to side.
  Gesture default:           Carrying, lifting, pointing with full arm.
                             Six limbs reduced to two arms + two legs
                             in Soft Upright; vestigial mid-limbs
                             may be designed as a belt or sash detail.
Axis 6 — Cultural Load:      collective, role-defined, selfless worker
  Design choice:             SUBVERT — this character is the one ant
                             who is aware of being an individual. The
                             tension between colony-identity and personal
                             identity is the emotional hook.

Dimension Defaults:
  Energy:    8
  Warmth:    5
  Dominance: 4
  Order:     9
  Openness:  3
```

---

### BEAVER

```
SPECIES: Beaver
Subtype of: Rodent
Status: Baseline

Axis 1 — Natural Energy:     sustained (purposeful, task-directed)
  Score default:             7
Axis 2 — Scale Impression:   small-medium
  Silhouette note:           Wide-shouldered relative to height. Low
                             center of gravity. Reads as compact and
                             sturdy. Tail is a structural anchor —
                             always grounded.
Axis 3 — Face Expressibility:mid
  Expression engine:         Brow (primary — heavy, mobile, capable of
                             skepticism, focus, and rare delight).
                             Large incisors always visible — treat as
                             personality asset, not comedy prop.
Axis 4 — Texture / Surface:  fur (body) + scale (tail)
  Flat vector treatment:     Clean fills on face. Subtle directional
                             marks on body fur only. Tail uses distinct
                             geometric scale pattern — different material
                             reads clearly in flat vector.
Axis 5 — Movement Signature: deliberate, efficient, load-bearing
  Idle default:              Slight forward lean. Hands ready.
                             One hand rests on tail. Other never
                             fully at rest.
  Gesture default:           Pointing, holding, demonstrating.
                             Ideal for guide/instructor function.
Axis 6 — Cultural Load:      industrious builder, systems-thinker
  Design choice:             LEAN IN to builder/systems energy.
                             SUBVERT cheerful workaholic cliché —
                             this character has standards, not just
                             enthusiasm. Perfectionist edge.

Dimension Defaults:
  Energy:    7
  Warmth:    5
  Dominance: 5
  Order:     9
  Openness:  3
```

#### BEAVER — CANONICAL TEMPLATE BRIEF

This brief is the reference standard for all future briefs.
Use it to calibrate depth, tone, and reasoning quality.

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CHARACTER DESIGN BRIEF — MASCOT AVATAR
Beaver
Flat Vector · Soft Upright · UI Guide
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROFILE SUMMARY
The Beaver archetype is a builder who measures twice and cuts
once — and quietly judges anyone who doesn't. High sustained
energy expressed entirely through output, not affect. Warm
enough to guide, precise enough to correct. The incisors
aren't cute; they're the first thing you notice about someone
who has opinions about load-bearing structures.

─────────────────────────────────────
PHYSICAL DESIGN

Silhouette & Form
Wide-shouldered, compact, low center of gravity. Height reads
as medium-short — authoritative without looming. Body mass
front-weighted, suggesting readiness. Hands are proportionally
large — this character uses them. Broad flat tail extends
behind, functioning visually as a kickstand: stable, grounded,
always planted. In Soft Upright form, the tail is a design
anchor, not an afterthought.

Face
Broad, flat muzzle — not elongated, not snout-forward.
Two large incisors visible at rest: always present, designed
as a mark of character rather than comedy. Brow is the primary
expression engine — heavy, mobile, capable of skepticism,
focus, and rare delight. Eyes are forward-facing, rounded,
enlarged to mascot proportion. Small rounded ears set wide
and low on the head — not prominent, not expressive, simply
present. The face at rest reads as focused, not friendly.
Friendliness is an expression state, not a default.

Coloring — Palette Card
  Primary (fur):     #7B5C3E  — warm medium brown
  Secondary (belly): #C4A882  — lighter ochre-tan
  Accent:            #E8A020  — amber-gold (tool handles,
                               UI highlight moments)
  Tail/surface:      #5C4A38  — darker brown, geometric
                               scale pattern in flat vector
  Eyes:              #2A1F14  — near-black, high contrast
  Outline:           #2A1F14  — same as eyes, unified

Palette logic: Earth tones signal groundedness and competence.
Amber accent is used sparingly — it appears when the character
is active, highlighting, or rewarding. No cool tones. This
character runs warm.

Style & Clothing
Minimal. A guide character's body language carries more than
their wardrobe. If clothed: a simple vest or apron — something
with pockets, something worn. Nothing decorative. Fasteners
are functional. If unclothed (mascot-minimal approach): the
fur coloring and tail do the work. No accessories unless
they serve a UI function (pointer, tool, indicator).

Movement & Presence
Forward lean is the resting posture — this character is
always slightly already in motion. Gestures are deliberate
and demonstrative: pointing, holding up an object, tapping
a surface. No flailing. Stillness is purposeful, not passive.
The tail provides visual stability in every pose — it should
always be in contact with the ground or a surface.

Distinguishing Details
The incisors are the signature — they should be visible in
every expression state, shifting only in how prominent they
read. In delight, they show more. In concern, they're
half-hidden by a pressed-together mouth. They are never
played for broad comedy. The hands are the secondary
signature: always slightly cupped, always ready to hold
something. At idle, one hand rests on the tail. The other
is never fully at rest.

─────────────────────────────────────
EXPRESSION VOCABULARY

Neutral / Idle
Brow level, eyes tracking, slight forward lean.
Mouth closed, incisors just visible. Hands ready.
Reads as: attentive, evaluating, prepared.

Encouraging
Brow lifted asymmetrically — one side higher, creating
warmth without full openness. Mouth opens slightly,
incisors visible. One hand extended, palm up.
Reads as: genuine approval, not performance.

Focused / Guiding
Brow drawn slightly inward — not angry, concentrated.
Eyes narrowed fractionally. One hand pointing or
holding an indicator. Mouth closed.
Reads as: this matters, pay attention.

Concerned
Brow furrowed center, raised outer edges — the classic
worry shape, adapted. Incisors hidden, lips pressed.
Weight shifted back slightly. Hands pulled in.
Reads as: something's wrong, let's fix it.

Delighted
Full brow lift, eyes widened. Incisors fully visible,
mouth open. Both hands raised or one fist — not a
jump, a pump. Tail lifts slightly from ground.
Reads as: earned, specific joy. Not performed.

─────────────────────────────────────
IDLE / MOVEMENT PERSONALITY
Constant micro-activity. Even at rest, fingers
adjust grip, eyes track, weight shifts forward.
Never slumped. The character communicates competence
through posture before a single expression fires.
Entry into frame: walks in purposefully, already
oriented toward task. Exit: turns away as if
already thinking about the next thing.

─────────────────────────────────────
UI BEHAVIOR NOTES
Ideal for: instructional moments, progress tracking,
error correction, system explanations.
Voice register (if applicable): direct, warm when
earned, never sycophantic. Completes sentences.
Does not over-celebrate small wins.
Scale: reads clearly at 48px (tail silhouette +
incisors), 128px (expression), 512px (full detail).

─────────────────────────────────────
DESIGN INTENTION
Draw this character as if they've already assessed
the situation and have a plan — the user is catching
them mid-thought, not waiting for direction. Every
line should suggest competence held in a compact form.

─────────────────────────────────────
DESIGNER NOTES
Cliché subverted: The cheerful beaver (hard-working,
always smiling, slight goofiness) is the default
cultural read. This brief resists it. Warmth exists
but is not the default state — it's an expression
state, earned by the user's action. The incisors
are treated as a mark of character, not comic
relief. The result should feel like a trusted
expert, not a mascot who happens to be a beaver.

Divergence from IP reference: Duolingo Owl leads
with ambient threat and gamified urgency. This
character leads with competence and standards.
The emotional hook is respect, not anxiety.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### ELEPHANT

```
SPECIES: Elephant
Subtype of: Megafauna
Status: Baseline

Axis 1 — Natural Energy:     low-mid (deliberate, weight-conscious)
  Score default:             4
Axis 2 — Scale Impression:   very large
  Silhouette note:           Scale is the dominant design fact. Mascot
                             treatment softens mass through rounded
                             geometry. Large ears are the primary
                             silhouette differentiator at small sizes.
Axis 3 — Face Expressibility:mid
  Expression engine:         Eyes (small relative to head — must be
                             enlarged significantly for mascot). Ears
                             carry secondary emotional signal — angle
                             conveys alertness and mood. Trunk position
                             is a tertiary tell.
Axis 4 — Texture / Surface:  skin (thick, folded)
  Flat vector treatment:     Clean fills. Minimal fold marks as
                             subtle line details only — not texture.
                             Two-tone treatment (darker top, lighter
                             underside) for depth without complexity.
Axis 5 — Movement Signature: heavy, considered, ground-aware
  Idle default:              Slow ear sway. Trunk rests or moves
                             gently. Weight shifts are visible.
  Gesture default:           Trunk as pointer/indicator. Hands
                             (front feet in Soft Upright) used for
                             broad gestures, not fine pointing.
Axis 6 — Cultural Load:      wise elder, memory-keeper, gentle giant
  Design choice:             SUBVERT — lean into memory as burden,
                             not asset. This character remembers
                             everything, including things they'd
                             rather forget. Wisdom and weariness
                             coexist.

Dimension Defaults:
  Energy:    4
  Warmth:    8
  Dominance: 7
  Order:     6
  Openness:  5
```

---

### FALCON

```
SPECIES: Falcon
Subtype of: Raptor
Status: Baseline

Axis 1 — Natural Energy:     burst (directional, target-locked)
  Score default:             8
Axis 2 — Scale Impression:   small-medium
  Silhouette note:           Lean, angular. Narrow shoulder width.
                             Head carried high and still. Wings folded
                             become structural shoulder/arm geometry
                             in Soft Upright.
Axis 3 — Face Expressibility:low
  Expression engine:         Eyes almost entirely. Large, forward-
                             facing, intense. Brow ridge (feathered)
                             carries secondary signal. Beak is fixed —
                             open/closed is the only mouth state.
Axis 4 — Texture / Surface:  feather
  Flat vector treatment:     Layered shape language. Directional
                             strokes on wings and back. Face is
                             clean — two-tone (dark cap, light face)
                             is the classic falcon marking and a
                             strong silhouette asset.
Axis 5 — Movement Signature: still then sudden — no in-between
  Idle default:              Completely still. Head micro-tracks.
                             No fidgeting. The stillness itself
                             is expressive.
  Gesture default:           Single precise point. No broad gestures.
                             Economy of motion at all times.
Axis 6 — Cultural Load:      precision, speed, elite performance
  Design choice:             SUBVERT — the falcon's precision is
                             compulsive, not confident. Without a
                             target, they're uncomfortable. The
                             anxiety beneath the focus is the hook.

Dimension Defaults:
  Energy:    8
  Warmth:    3
  Dominance: 8
  Order:     9
  Openness:  3
```

---

### GATOR

```
SPECIES: Gator (Alligator)
Subtype of: Crocodilian
Status: Baseline

Axis 1 — Natural Energy:     coiled stillness (patient, explosive
                             capacity fully concealed)
  Score default:             3 surface / 9 latent
Axis 2 — Scale Impression:   large
  Silhouette note:           Long horizontal mass compressed into
                             Soft Upright creates a wide, low center
                             of gravity. Tail extends behind as
                             counterweight. Head is disproportionately
                             large — a design asset.
Axis 3 — Face Expressibility:low
  Expression engine:         Eyes (set high on head — in mascot
                             treatment, brought forward). Fixed
                             jaw line means smile/frown is subtle
                             geometry shift only. Eyes carry
                             almost all emotional range.
Axis 4 — Texture / Surface:  scale (rough, plated)
  Flat vector treatment:     Strong geometric scale pattern.
                             Dorsal ridge as a repeating shape motif.
                             Underbelly is smooth, lighter — clear
                             two-material contrast.
Axis 5 — Movement Signature: absolute stillness → sudden motion
  Idle default:              Nothing moves. Then an eye blinks.
                             Then nothing again.
  Gesture default:           Slow, deliberate reach. Never hurried.
                             The unhurried quality is itself a signal.
Axis 6 — Cultural Load:      predator, danger, swamp
  Design choice:             SUBVERT — the gator is genuinely
                             warm beneath the stillness. The
                             contrast between the threatening
                             exterior and the actual emotional
                             availability is the character.

Dimension Defaults:
  Energy:    3
  Warmth:    6
  Dominance: 8
  Order:     7
  Openness:  4
```

---

### GOOSE

```
SPECIES: Goose
Subtype of: Waterfowl
Status: Baseline

Axis 1 — Natural Energy:     high (erratic, performative)
  Score default:             9
Axis 2 — Scale Impression:   medium
  Silhouette note:           Long neck is the dominant silhouette
                             feature — extends and retracts as an
                             expression tool. Body is round, stable.
                             The neck/body contrast is the design tension.
Axis 3 — Face Expressibility:low-mid
  Expression engine:         Eyes (beady, intense — mascot treatment
                             enlarges significantly). Neck posture
                             carries more emotional signal than face.
                             Beak open/closed/angled is the mood tell.
Axis 4 — Texture / Surface:  feather (smooth, white primary)
  Flat vector treatment:     Clean white fills with minimal feather
                             marks. Orange beak and feet are strong
                             accent anchors. Black/grey secondary
                             coloring on head or wings for specificity.
Axis 5 — Movement Signature: aggressive waddle, sudden lunge,
                             unpredictable direction changes
  Idle default:              Neck extended, eyes tracking, weight
                             forward. Looks like it's about to do
                             something. Always.
  Gesture default:           Jabbing point with full neck extension.
                             Occasionally both wings out.
Axis 6 — Cultural Load:      chaos agent, unhinged confidence,
                             internet menace
  Design choice:             SUBVERT — redirect chaos energy into
                             bureaucratic officiousness. This goose
                             has procedures and you will follow them.
                             The aggression is administrative.

Dimension Defaults:
  Energy:    9
  Warmth:    3
  Dominance: 7
  Order:     4
  Openness:  8
```

---

### MOOSE

```
SPECIES: Moose
Subtype of: Cervid
Status: Baseline

Axis 1 — Natural Energy:     low-mid (unhurried, deliberate)
  Score default:             4
Axis 2 — Scale Impression:   very large
  Silhouette note:           Antlers are the dominant silhouette
                             feature — unavoidable at any scale.
                             Must be designed as personality assets,
                             not obstacles. Long legs create height
                             that reads as awkward in Soft Upright —
                             lean into it rather than correct it.
Axis 3 — Face Expressibility:mid
  Expression engine:         Large soft eyes (primary). Broad
                             muzzle limits mouth expressiveness.
                             Ears rotate and lift — secondary signal.
                             Antler angle can carry mood at large sizes.
Axis 4 — Texture / Surface:  fur (dense, dark)
  Flat vector treatment:     Dark primary fill (near-black brown).
                             Lighter muzzle patch as face anchor.
                             Minimal texture. Antlers as flat
                             geometric shapes — no wood grain.
Axis 5 — Movement Signature: slow, slightly uncoordinated, earnest
  Idle default:              Ears rotating independently. Occasional
                             slow blink. Antlers sway with head turns.
  Gesture default:           Large, slightly imprecise gestures.
                             Means well. Knocks things over occasionally.
Axis 6 — Cultural Load:      gentle giant, Canadian icon, slightly
                             goofy
  Design choice:             SUBVERT — the moose is acutely self-
                             conscious about taking up space. The
                             emotional core is someone large trying
                             very hard to be considerate and not
                             always succeeding.

Dimension Defaults:
  Energy:    4
  Warmth:    8
  Dominance: 6
  Order:     4
  Openness:  6
```

---

### PANTHER

```
SPECIES: Panther (Black Leopard)
Subtype of: Big Cat
Status: Baseline

Axis 1 — Natural Energy:     mid (fluid, conserved — always purposeful)
  Score default:             6
Axis 2 — Scale Impression:   medium-large
  Silhouette note:           Lean and long. Narrow at rest, reads
                             larger in motion. Tail is long and
                             expressive — a key emotional signal
                             in Soft Upright.
Axis 3 — Face Expressibility:mid-high
  Expression engine:         Eyes (large, heavy-lidded — the primary
                             signal). Ear position (secondary).
                             Whiskers as tertiary detail in larger
                             sizes. Mouth rarely open — when it is,
                             it matters.
Axis 4 — Texture / Surface:  fur (short, dense, near-black)
  Flat vector treatment:     Near-black primary fill. Subtle rosette
                             pattern visible only at 512px — implied,
                             never loud. High contrast against any
                             background. Eyes and accent color do
                             the brightness work.
Axis 5 — Movement Signature: fluid, economical, zero wasted motion
  Idle default:              Still, but alive — tail moves slowly.
                             Eyes track without head moving. Weight
                             balanced, never fully at rest.
  Gesture default:           Single fluid reach or point. No sudden
                             movements. Every gesture lands with precision.
Axis 6 — Cultural Load:      cool, dangerous, self-contained,
                             mysterious
  Design choice:             SUBVERT — the panther is deeply lonely.
                             The self-containment is a defense, not
                             a preference. The emotional hook is the
                             gap between how they appear and what
                             they actually want.

Dimension Defaults:
  Energy:    6
  Warmth:    3
  Dominance: 8
  Order:     7
  Openness:  5
```

---

## INFERRED SPECIES LOG

New entries added by aas-design skill during sessions go here.
Format: date · session context · species name · subtype used · inference notes.

| Date | Species Input | Subtype Used | Personality Driver | Notes |
|---|---|---|---|---|
| — | — | — | — | — |