# Module Spec Standard — Going Deeper Blocks
## Cross-Domain Depth Flags
*Shared reference. Applies to all Folio module specs.*

---

## What They Are

Going Deeper blocks are inline content that surfaces information beyond
the module's assessment scope — connections to other disciplines,
mathematical foundations, historical context, or cross-subject bridges
that reward curious students without being required for mastery.

They are never tested. They are never required to advance. They are
always clearly labeled as optional depth.

---

## When to Use

Use a Going Deeper block when:
- Content in the explainer touches a concept whose deeper mechanism
  belongs to another discipline (mathematics, history, physics, etc.)
- A student who follows the thread would find something genuinely
  interesting and non-trivial at the other end
- The connection can be named precisely in three sentences or fewer

Do NOT use a Going Deeper block when:
- The content is merely interesting trivia with no disciplinary thread
- The depth is within the same subject (geography → geography)
  — that's a spiral tag or a scope note, not a Going Deeper block
- The block would require more than three sentences to set up

**Maximum two Going Deeper blocks per module.** If a third candidate
exists, it either displaces one of the existing two or becomes a scope
note. Never exceed two.

---

## Format

```
⬡ GOING DEEPER — [Domain Name]
[One sentence: what this connects to and why it matters beyond this module.]
[One sentence: what the deeper content looks like — what discipline,
what concept, what level.]
[Optional third sentence: where a student could find this if they wanted
to follow it — course name, discipline, a specific named concept.]
```

Three sentences maximum in the block itself.
The ⬡ marker is the visual trigger — it signals "there's more here"
without demanding attention.

---

## Visual Treatment

- Background: Folio Depth Tint (#F0ECFA)
- Label color: Folio Depth (#6B4EAA)
- Marker: ⬡ (Unicode hexagon — works in plain text, markdown, and HTML)
- Border: 2px left border in #6B4EAA (left-accent style — visually
  distinct from content without being intrusive)
- Typography: same body font at same size — the color and marker
  distinguish it, not the type treatment

In the Projection Explorer and other interactive artifacts:
- ⬡ indicator on the relevant panel in #6B4EAA
- Tap to expand inline in #F0ECFA background
- Tap again to collapse
- Does not navigate away from the artifact

---

## Domain Label Standards

Use the clearest, most specific domain label available. Examples:

| Domain | Label format |
|---|---|
| Pure mathematics | `⬡ GOING DEEPER — Mathematics (Differential Geometry)` |
| History of science | `⬡ GOING DEEPER — History of Science` |
| History of cartography | `⬡ GOING DEEPER — History of Cartography` |
| Physics | `⬡ GOING DEEPER — Physics (Atmospheric Circulation)` |
| Political history | `⬡ GOING DEEPER — Political History` |
| Linguistics | `⬡ GOING DEEPER — Linguistics` |

Always include the sub-discipline in parentheses when it clarifies
where the thread leads. "Mathematics" alone is less useful than
"Mathematics (Differential Geometry)."

---

## Voice Rules

- Same voice as the rest of the module — warm but precise
- Never condescending: "If you're curious about the math behind this..."
  not "For advanced students only..."
- Never over-promising: name what's there, don't hype it
- Never required-sounding: the framing must feel genuinely optional
- The block should feel like a teacher saying "by the way, if that
  caught your attention, here's where it goes" — not an assignment

---

## Gagné Note

Going Deeper blocks map loosely to Gagné Event 4 (Stimulus) — they
activate curiosity in students ready for it. They do not appear in the
Gagné audit and do not affect the audit score.

---

## Phase 2 Flag

Going Deeper blocks are candidates for AI-layer content in Phase 2.
A student who taps "tell me more" on a Going Deeper block could receive
a generated deep-dive without that content requiring full educator
verification pipeline — since it is explicitly outside the assessed
curriculum. Flag for Phase 2 AI supplement scoping.

---

## Approved Blocks — Existing Modules

**GEO-MS-004 — Block 1 (Mathematics):**
Placement: After Gauss/Theorema Egregium sentence in "The Geometry
of the Problem"

> ⬡ GOING DEEPER — Mathematics (Differential Geometry)
> Gauss's proof that a sphere cannot be flattened without distortion is
> part of a branch of mathematics called differential geometry —
> specifically, his Theorema Egregium ("Remarkable Theorem"), published
> in 1827. It proves that a surface's Gaussian curvature is an intrinsic
> property that cannot be changed by bending or flattening. If you want
> to understand why the orange peel tears — not just that it does —
> that theorem is the answer, and it appears in university-level
> mathematics, typically in multivariable calculus or differential geometry.

**GEO-MS-004 — Block 2 (History of Cartography):**
Placement: After Robinson projection entry in "Other Projections
Worth Knowing"

> ⬡ GOING DEEPER — History of Cartography
> Arthur Robinson's method — working backward from visual appearance to
> mathematical formula — was a significant departure from how map
> projections had historically been designed. Most projections begin with
> a mathematical transformation and accept whatever visual result follows;
> Robinson's commission to prioritize how the map looked raises a genuine
> question about whether cartography is a science, a design discipline,
> or both. That debate runs through the same period as the Peters
> controversy and connects to broader questions about what maps are for —
> the history of cartography is a field in its own right, and a
> genuinely strange one.
