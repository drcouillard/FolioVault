# Decisions Log

Locked product decisions are recorded here in **dated** form: **decision**, **date**, and **reasoning** (one sentence). Entries mirror the **Locked Decisions** section in `CLAUDE.md`; do not relitigate these in day-to-day work unless initiating a deliberate change process.

---

## 2026-04-24

1. **Web-only delivery; no native mobile app until post-pilot** — **2026-04-24** — Keeps the solo, non-developer build path focused on one high-quality surface and defers multi-platform cost until a pilot proves the core loop.

2. **K–12 focus only** — **2026-04-24** — Concentrates curriculum depth, compliance posture, and classroom credibility instead of diluting scope across unrelated learner markets.

3. **World Geography is the first subject; Map Skills is the first module** — **2026-04-24** — Chooses a concrete, visual-first vertical that aligns with multimodal product requirements and gives the pilot a sharp, testable skills boundary.

4. **The base product is always free; AI features are a paid enhancement layer** — **2026-04-24** — Honors the founding principle that the core learning path must remain accessible while allowing sustainable investment in advanced tooling.

5. **AI is not core; the platform must be fully functional without it** — **2026-04-24** — Ensures reliability, equity, and instructional integrity when AI is unavailable, declined, or inappropriate for a given school context.

6. **Spiral curriculum model (Saxon-informed); prior concepts appear in every subsequent practice set** — **2026-04-24** — Bakes retention and transfer into the product architecture rather than treating review as an optional add-on.

7. **Adaptive remediation is required; wrong answers route to targeted re-teaching, not generic feedback** — **2026-04-24** — Makes “adaptive” operational: mistakes become specific teaching moments instead of shallow correctness prompts.

8. **Multimodal presentation is required; every concept must be visual, textual, and interactive where possible** — **2026-04-24** — Matches how real understanding is built and supports accessibility without relying on pseudoscientific learner “styles.”

9. **Expert educator verification is required before any content ships; nothing moves from Draft to Verified without a named educator sign-off** — **2026-04-24** — Protects learners and schools from unvetted instructional claims and keeps the brand aligned with classroom seriousness.

10. **No VARK or learning-style routing; multimodal-by-default covers accessibility without pseudoscience** — **2026-04-24** — Avoids harmful personalization myths while still meeting diverse access needs through designed redundancy in representation and action.

---

## How to Add or Change an Entry

When a locked decision is **added**, **narrowed**, or **revoked**, append a new dated block (or new dated lines under the latest date) with the same three-part structure and update `CLAUDE.md` so the vault root brief stays authoritative.

---

## 2026-04-29

11. **country-profile-rubric.md updated to v2.0 — aligned with folio-id-framework v2, voice-folio v2, and folio-preflight-verifier** — **2026-04-29** — The rubric predated the full instructional design framework and would have produced incomplete module specs that could not pass preflight verification; the revised rubric adds 28 missing fields and sections covering all five ID pillars, the full voice system, and every Checklist B item from the preflight verifier.

12. **Every module opens with a map before any text** — **2026-04-29** — Students must see where the subject sits in physical space before encountering any hook, concept, or question; required fields added to country-profile-rubric.md Part D (Opening Map); minimum two map references per module: one for global position context, one for subject-level physical detail.

13. **Brazil module GEO-SA-BR-001 created as first module in Unit 4 — Latin America & the Caribbean** — **2026-04-29** — Brazil chosen as unit entry point because it contains the Amazon (global climate significance), spans every major South American biome, is the largest economy in the region, and the flying rivers mechanism provides a conceptual anchor that connects physical and human geography in a single transferable idea.

---

## Gap — 2026-04-24
**Logo assets not yet exported.**
Brand guide specifies full mark + wordmark system. No .svg, .png, or .ai files exist anywhere in OneDrive. Assets need to be created or exported before 02 - Brand/assets/ can be populated.

---

# Decisions Log — Folio Interactive

## DECISION-001 — Spiral Curriculum Ratio

**Date:** April 2026 **Status:** LOCKED **Phase:** Phase 2 — Scope & Features

### Decision

Folio standard spiral ratio is **40% new concept questions / 60% prior concept questions** per practice set.

### Rationale

- Saxon's 30/70 ratio was designed for procedural math content, where skill decay is fast without repetition.
- Folio's primary content type is conceptual-principle (knowing why), which has a slower decay curve.
- 40/60 provides sufficient new material per module to feel substantive while keeping prior concepts active.
- The France module spec (GEO-EU-FR-001) already implied this range — this decision confirms it.
- Folio's Bloom escalation across spiral revisits increases cognitive load per prior question, which makes 30/70 a heavier lift than it appears in Saxon's context.

### Operational Rules

- On a 10-question set: target is 4 new / 6 prior.
- The 40/60 ratio is a target, not always achievable in early modules. Map Skills (module 1) has no prior pool — its practice set is 100% new by structural necessity. Climate Zones (module 2) can only spiral Map Skills. The ratio becomes fully achievable at module 3 and beyond.
- Early module deviation from 40/60 is a structural constraint, not a content failure. Document it per module, do not flag it as an error.

### Downstream Impact

- France module spec (GEO-EU-FR-001): update "30–40% new / 60–70% prior (working assumption)" to "40% new / 60% prior — Folio standard (locked DECISION-001)."
- All future module specs must reference this ratio in the Practice Set Metadata section.
- Revisit at pilot stage if student data indicates the ratio needs adjustment.

### Do Not Relitigate

This decision is locked until pilot data is collected and a formal change process is initiated.