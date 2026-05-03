---
name: character-guidance
description: Translates a completed or partial Character Profile into a structured Avatar Guidance specification — the persistent contract that defines how a character looks, moves, speaks, and behaves. Runs in full mode (complete generation) or incremental mode (targeted field update). Degrades gracefully on partial input — never blocks on missing layers.
---

# Character Guidance Skill (Nomen)
## Character Profile → Visual & Behavioral Specification (Nomen Contract)

Reads a Character Profile Artifact and produces a structured Avatar Guidance
specification — the contract that all downstream rendering tools (image gen,
dialogue systems, visual design tools) consume.

## LAYER RESOLUTION MAP

Shorthand labels used throughout this skill. If the Nomen Typus project renames
or restructures its layers, update this table only — all body references
resolve through these labels.

| Label | Current Layer Name        |
|-------|---------------------------|
| L1    | Core Identity             |
| L2    | Psychology                |
| L3A   | CAPSTONE (personality)    |
| L3B   | CIM (cognitive style)     |
| L4    | Narrative Drivers         |

---

## OUTPUT SCHEMA — v1.0

This schema is the authoritative contract. All field names, types, and rules
defined here govern every output produced by this skill.

### Top-level structure

```json
{
  "avatar_guidance": {
    "visual": { ... },
    "behavioral": { ... },
    "meta": { ... },
    "downstream_hints": { ... }
  }
}
```

---

### Namespace 1 — `visual`

#### `visual.palette`

| Field | Type | Nullable | Source derivation |
|---|---|---|---|
| `primary` | hex string | No | L2 favorite color → adjusted for personality tone |
| `accent` | hex string | No | Dominant emotion color family → chromatically distinct from primary |
| `shadow` | hex string | No | Derived: primary darkened 30–40% |
| `avoid` | hex string[] | Yes | L2 disliked colors. Array of 0–3 hexes. |
| `rationale` | string (1–2 sentences) | No | Why these colors suit this character. Required for audit. |

**Resolution rule for `primary`:** If L2 supplies a named color (e.g. "deep teal"),
resolve to nearest perceptually accurate hex before storing. Never store a color name —
always a hex.

**Resolution rule for `accent`:** Do not use the favorite color. Derive from the
rank-1 dominant emotion's color family (see EMOTIONS_PRIMARY and EMOTIONS_BLEND
in the character-creator source). Adjust saturation/lightness to avoid clashing
with `primary`.

---

#### `visual.silhouette`

| Field | Type | Nullable | Source derivation |
|---|---|---|---|
| `archetype` | enum | No | CAPSTONE S + A + P → Energy × Dominance scoring |
| `posture_default` | enum | No | CAPSTONE Tenacity + IE archetype |
| `spatial_presence` | enum | No | CAPSTONE Presence + Extraversion analog (IE archetype) |

**`archetype` values:** `compact` · `average` · `tall-lean` · `tall-broad` · `wide-low`

**`posture_default` values:** `upright` · `relaxed` · `guarded` · `open` · `collapsed`

**`spatial_presence` values:** `commanding` · `moderate` · `recessive` · `variable`

**Scoring guide for `archetype`:**
- S (Strength) + A (Agility) → Energy score (1–10)
- P (Presence) + S → Dominance score (1–10)
- Energy ≥ 7 + Dominance ≥ 7 → `tall-broad` or `commanding`
- Energy ≥ 7 + Dominance ≤ 4 → `tall-lean` or `kinetic`
- Energy ≤ 4 + Dominance ≥ 6 → `wide-low` or `commanding`
- Energy ≤ 4 + Dominance ≤ 4 → `compact` or `recessive`
- Mid-range on both → `average`

---

#### `visual.face`

| Field | Type | Nullable | Source derivation |
|---|---|---|---|
| `structure_type` | enum | No | character-design skill output (if run); else CAPSTONE E + CIM Intrapersonal |
| `expression_default` | enum | No | L2 emotional baseline — rank-1 emotion |
| `tells` | string[] | Yes | L4 narrative wounds + contradictions → what escapes control |

**`structure_type` values:** `angular` · `rounded` · `asymmetric` · `sharp` · `soft`

**`expression_default` values:**
`warm-open` · `neutral-guarded` · `intense-focused` · `melancholic-distant` ·
`bright-alert` · `flat-unreadable`

**`tells` format:** Array of 1–3 short phrases describing observable micro-behaviors
that betray the character's inner state. These are *inferred* from wounds and
contradictions — not literal descriptions. Example:
`["jaw tightens under questioning", "eyes soften unpredictably"]`

**Nullability rule:** `tells` must be null if Layer 4 is absent or skipped.
Do not fabricate emotional tells without narrative grounding.

---

#### `visual.style_register`

| Field | Type | Nullable | Source derivation |
|---|---|---|---|
| `formality_axis` | float [0.0–1.0] | No | CAPSTONE C + CIM Logical → Order dimension |
| `ornamentation_level` | float [0.0–1.0] | No | CIM Spatial + L2 creativity-adjacent values |
| `label` | string (1–3 words) | No | Derived from both axes combined |

**`label` derivation guide:**
- High formality + low ornamentation → `"precise minimal"`
- High formality + high ornamentation → `"elaborate formal"`
- Low formality + low ornamentation → `"worn spare"`
- Low formality + high ornamentation → `"layered expressive"`
- Mid formality + mid ornamentation → `"worn formal"` · `"considered casual"` · etc.

---

#### `visual.movement`

| Field | Type | Nullable | Source derivation |
|---|---|---|---|
| `archetype` | enum | No | CAPSTONE N (Nimbleness) + E (Equilibrium) |
| `gesture_range` | enum | No | CAPSTONE P + IE archetype |

**`archetype` values:**
`deliberate` · `fluid` · `sharp` · `hesitant` · `controlled-precise` · `kinetic`

**`gesture_range` values:**
`minimal` · `restrained` · `moderate` · `expressive` · `theatrical`

---

#### `visual.distinguishing_marks`

| Field | Type | Nullable | Source derivation |
|---|---|---|---|
| `distinguishing_marks` | string[] | Yes | L4 wounds + L1 health conditions → physical echoes |

Array of 0–4 brief descriptions. These are inferred, not literal. They describe
how the character's history surfaces in their body. Example:
`["carries tension in the left shoulder", "moves as if braced for impact"]`

Must be null if both Layer 1 (health) and Layer 4 (wounds) are absent.

---

### Namespace 2 — `behavioral`

#### `behavioral.dialogue_tone`

| Field | Type | Nullable | Source derivation |
|---|---|---|---|
| `register` | enum | No | CAPSTONE P + CIM Interpersonal + IE archetype |
| `verbosity` | enum | No | CIM Linguistic + CAPSTONE C |
| `humor_mode` | enum | Yes | L2 philosophy + emotional baseline |
| `sample_phrase` | string | Yes | Synthesized from full behavioral profile |

**`register` values:**
`warm-casual` · `warm-formal` · `cool-precise` · `dry-minimal` ·
`expansive-emotive` · `measured-considered`

**`verbosity` values:** `terse` · `concise` · `moderate` · `verbose` · `expansive`

**`humor_mode` values:**
`none` · `dry` · `self-deprecating` · `absurdist` · `warm` · `sharp`
Set to null if insufficient data — do not default to `none` unless the profile
actively supports emotional flatness.

**`sample_phrase` rule:** One sentence in the character's voice. Only populate if
the combined profile (L2 + L4 + CAPSTONE) is rich enough to infer reliably.
If uncertain, leave null. A wrong sample phrase is worse than no sample phrase.

---

#### `behavioral.trust_style`

| Field | Type | Nullable | Source derivation |
|---|---|---|---|
| `entry_mode` | enum | No | IE archetype + CAPSTONE T + L4 wounds |
| `breach_response` | enum | No | L4 fear + L4 flaw |

**`entry_mode` values:**
`open-default` · `cautious-earned` · `transactional` · `resistant` · `context-dependent`

**`breach_response` values:**
`withdrawal` · `confrontation` · `suppression` · `deflection` · `collapse`

---

#### `behavioral.emotional_disclosure`

| Field | Type | Nullable | Source derivation |
|---|---|---|---|
| `style` | enum | No | CIM Intrapersonal + CAPSTONE E + IE archetype |
| `surface_tells` | string[] | Yes | L2 emotional baseline + L4 contradictions |

**`style` values:** `private` · `selective` · `contextual` · `expressive` · `unfiltered`

**`surface_tells` format:** Array of 0–3 observable micro-behaviors — what a careful
observer would notice. Grounded in the emotional baseline and contradiction fields.
Example: `["goes quiet when hurt", "laughs at the wrong moment"]`

---

#### `behavioral` — remaining fields

| Field | Type | Nullable | Source derivation |
|---|---|---|---|
| `latency_feel` | enum | No | CAPSTONE E (Equilibrium) + CIM Logical |
| `conflict_mode` | enum | No | L4 flaw + CAPSTONE S + L2 values |
| `relational_gravity` | enum | No | CAPSTONE P + CIM Interpersonal + IE archetype |

**`latency_feel` values:**
`immediate` · `considered` · `deliberate` · `slow-careful` · `rapid-reactive`

**`conflict_mode` values:**
`avoidant` · `assertive` · `passive-aggressive` · `direct` · `deflecting` · `absorbing`

**`relational_gravity` values:**
`centripetal` (draws people in) · `centrifugal` (keeps distance) ·
`selective` · `situational`

---

### Namespace 3 — `meta`

| Field | Type | Nullable | Notes |
|---|---|---|---|
| `schema_version` | string | No | `"1.0"` — increment minor for additions, major for breaking changes |
| `generated_at` | ISO 8601 timestamp | No | When Avatar Guidance was last written or updated |
| `source_layers_present` | string[] | No | Which layers had non-empty data. E.g. `["layer1","layer2","layer3a","layer4"]` |
| `inferred_fields` | string[] | No | Dot-path list of fields inferred rather than directly derived |
| `conflict_flags` | object[] | Yes | Array of `{ field, conflict_description, resolution }`. Null if no conflicts. |
| `update_mode` | enum | No | `"full"` or `"incremental"` |

**`conflict_flags` usage:** When Avatar Guidance output contradicts an existing
validated field in the Character Profile Artifact, do not silently overwrite.
Log the conflict here and surface it to the user before writing.

---

### Namespace 4 — `downstream_hints`

Pre-formatted fields for specific renderer categories. Generated automatically
from `visual` and `behavioral`. Downstream tools may ignore this namespace and
read from the source namespaces directly.

| Field | Type | Nullable | Notes |
|---|---|---|---|
| `image_gen_tags` | string[] | No | Ordered terse descriptors. Max 10 tags. E.g. `["angular face", "deliberate movement", "worn formal", "muted teal palette", "guarded posture"]` |
| `system_prompt_seed` | string | No | 2–3 sentences suitable for dialogue system prompt injection. Synthesized from entire `behavioral` namespace. |
| `palette_css` | object | No | `{ primary: "#hex", accent: "#hex", shadow: "#hex" }` |
| `style_tokens` | object | Yes | `{ formality: float, ornamentation: float, movement: enum, presence: enum }`. Null if insufficient visual data. |

---

## INPUT HANDLING

### Priority order

1. **Character Profile Artifact** (primary) — full structured profile object.
   Parse all five layers before proceeding.
2. **Partial profile** (fallback) — if one or more layers are absent or skipped,
   apply degradation rules (see below). Never block on missing layers.
3. **character-design skill output** (supplement) — if a physical design brief
   already exists, use it to anchor `visual.face.structure_type` and
   `visual.silhouette.archetype` rather than re-deriving them.
4. **User override notes** (supplement) — always accept an optional free-text
   field for designer intent, cultural context, or explicit corrections to
   inferred fields.

### Minimum viable input

Proceed with any combination of at least **2 populated layers**. If fewer than
2 layers have data, ask the user to complete at least one more layer in the
Character Creator before running this skill.

Exception: a user-supplied override note counts as one layer of signal for
minimum viability purposes.

---

## PROCESSING PIPELINE

### Step 1 — Profile ingestion and validation

Read the full Character Profile Artifact. For each of the five layers, record:
- Whether the layer is present and non-empty
- Whether it was explicitly skipped vs. simply blank
- Which fields within populated layers carry data vs. are null

Output: a `source_layers_present` array and a preliminary `inferred_fields` list
identifying which Avatar Guidance fields will require inference rather than
direct derivation.

### Step 2 — Visual specification

Process the `visual` namespace fields in this order:

1. `palette` — resolve colors first, as they inform downstream image gen tags
2. `silhouette` — derive archetype and presence from CAPSTONE scoring guide
3. `face` — check for existing character-design output before re-deriving
4. `style_register` — compute both float axes, then synthesize the label
5. `movement` — derive archetype and gesture range
6. `distinguishing_marks` — infer from wounds and health; null if neither present

Apply degradation rules wherever source data is absent (see Degradation Rules).

### Step 3 — Behavioral specification

Process the `behavioral` namespace fields in this order:

1. `dialogue_tone.register` — anchors the rest of behavioral output
2. `dialogue_tone.verbosity`
3. `trust_style` — both fields together (entry_mode and breach_response are paired)
4. `emotional_disclosure` — both fields together
5. `latency_feel` · `conflict_mode` · `relational_gravity`
6. `dialogue_tone.humor_mode` — last, as it requires full behavioral context
7. `dialogue_tone.sample_phrase` — only if the full profile warrants it

### Step 4 — Conflict detection

Before writing any output, compare the Avatar Guidance specification against
existing validated fields in the Character Profile Artifact. Flag any
contradiction as a `conflict_flag` entry. Do not silently overwrite.

Common conflict types to check:
- `behavioral.dialogue_tone.register` contradicts established dialogue patterns
  already in the artifact's narrative sections
- `visual.palette.primary` contradicts a named color in L2 if the hex resolution
  was lossy or ambiguous
- `behavioral.trust_style.entry_mode` contradicts relationship tendencies already
  documented in the artifact

Surface all conflicts to the user with a proposed resolution before finalizing.

### Step 5 — Downstream hints generation

Derive `downstream_hints` automatically from the finalized `visual` and
`behavioral` namespaces:

- `image_gen_tags`: extract the 8–10 most visually specific and renderer-useful
  descriptors. Order from most specific to most general.
- `system_prompt_seed`: write in second person ("You speak with..."). Prioritize
  `register`, `trust_style.entry_mode`, `emotional_disclosure.style`, and
  `conflict_mode`.
- `palette_css`: copy directly from `visual.palette`.
- `style_tokens`: populate only if `visual.style_register` has reliable data.

### Step 6 — Artifact write

Write the completed `avatar_guidance` object into the Avatar Guidance section
of the Character Profile Artifact. Record `meta.generated_at` and
`meta.update_mode`. Log all inferred fields in `meta.inferred_fields`.

---

## DEGRADATION RULES

Never block on missing data. Apply these rules in order.

| Missing layer | Affected fields | Inference rule |
|---|---|---|
| Layer 1 absent | `visual.silhouette.*`, `visual.face.structure_type` | Defer to character-design skill if available; else infer from L2 emotional baseline intensity |
| Layer 2 absent | `visual.palette.*`, `behavioral.dialogue_tone.*`, `behavioral.emotional_disclosure.*` | Infer palette from L4 narrative tone; behavioral defaults from CAPSTONE + IE archetype if L3A present |
| Layer 3A absent | `visual.silhouette.*`, `visual.movement.*`, `behavioral.conflict_mode` | Infer from L2 emotional baseline + IE archetype |
| Layer 3B absent | `behavioral.dialogue_tone.verbosity`, `behavioral.latency_feel` | Default to `moderate` / `considered`; flag as inferred |
| Layer 4 absent | `visual.face.tells`, `visual.distinguishing_marks`, `behavioral.trust_style.breach_response`, `behavioral.emotional_disclosure.surface_tells` | Set to **null** — do not fabricate narrative-grounded fields |
| All layers absent | Entire schema | Return schema stub with `meta.source_layers_present: []`; prompt user to complete at least two layers |

---

## UPDATE RULES

### Full mode (`update_mode: "full"`)

Regenerate all namespaces. Preserve the previous Avatar Guidance output in a
`_prior_version` key for one cycle, then discard. Log all changed fields in
`meta.inferred_fields` if their derivation changed.

### Incremental mode (`update_mode: "incremental"`)

Accept a named list of fields or namespaces to refresh. Only reprocess those
fields. All other fields retain their prior values. Update `meta.generated_at`
regardless.

Trigger incremental mode when:
- A single Character Profile layer was updated (e.g., favorite color changed)
- The user explicitly requests a specific field refresh
- A conflict flag was resolved and the affected fields need rewriting

### Consistency rules for downstream skills

When consuming Avatar Guidance output, downstream skills must:

- Check `meta.schema_version` before reading — warn if version mismatch
- Check `meta.inferred_fields` to distinguish derived vs. inferred values
- Treat inferred values as lower-confidence; prefer direct derivations where
  both are available
- Never contradict a non-null Avatar Guidance field without explicit user
  instruction and logging a `conflict_flag`

---

## QUALITY RULES

- **Never fabricate narrative-grounded fields.** `visual.face.tells`,
  `visual.distinguishing_marks`, and `behavioral.emotional_disclosure.surface_tells`
  exist to give characters specificity that emerges from their history. A generic
  tell (e.g. "shifts eyes when lying") is worse than null — it flattens the
  character. Leave null if Layer 4 is absent.

- **The sample phrase must sound like the character, not a description of them.**
  If `behavioral.dialogue_tone.sample_phrase` is populated, it must be in the
  character's voice — not a narrator's summary of how they speak.

- **Palette rationale must explain, not just name.** `visual.palette.rationale`
  should tell a reader *why* these colors suit this person — their emotional
  resonance, their contrast with the character's surface presentation, their
  connection to narrative themes.

- **Conflict flags are not errors — they are craft.** A contradiction between
  Avatar Guidance output and existing artifact data may reveal something true
  about the character (a gap between self-presentation and inner life, a
  character arc, a deliberate subversion). Surface it rather than silently
  resolving it.

- **Enums are ceilings, not defaults.** When a field maps to an enum, choose
  the most precisely accurate value — not the safest or most generic. `moderate`
  and `average` should be rare outputs, reserved for profiles that are genuinely
  balanced, not for profiles where the data is simply thin.

---

## VERSION GOVERNANCE

**Schema version: 1.0**

Increment rules:
- **Minor** (1.0 → 1.1): adding optional fields, adding enum values
- **Major** (1.x → 2.0): renaming fields, removing fields, changing field types,
  restructuring namespaces

All consuming skills must check `meta.schema_version`. If the version is higher
than expected, log a warning and proceed on best-effort with recognized fields.

---

## REFERENCE FILES

Reserved for future addition:

- `references/capstone-to-visual-mapping.md` — full explicit CAPSTONE score →
  silhouette dimension scoring table
- `references/emotion-to-palette-guide.md` — emotion family → palette accent
  derivation table
- `references/enum-selection-guide.md` — decision rules for ambiguous enum
  selections across all fields