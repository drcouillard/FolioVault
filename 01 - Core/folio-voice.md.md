# Folio Voice — Content Pipeline Reference

This file governs how content is written for Folio students. It is a
pipeline-layer document, not a brand document. For brand-level voice,
tone, vocabulary, and messaging rules, see the Folio Brand Style Guide
(FolioVault/02 - Brand/) and folio-identity.md.

This file covers only what is unique to the content pipeline: wonder
hooks, grade register, diagnostic feedback structure, spiral tagging,
and the real-geography rule. Every rule here applies to every piece of
student-facing content generated under the folio-content-layer skill.

---

## 1. Voice Pointer

For core voice rules — direct address, vocabulary use/avoid lists,
praise language prohibition, wrong-answer tone — defer to:

> Folio Brand Style Guide, Section 05 (Voice & Tone)
> folio-identity.md, "Brand Personality and Voice"

Do not restate those rules here. If a rule isn't in this file, check
those two sources before assuming there is no rule.

---

## 2. Wonder Hook Format

A wonder hook is a short paragraph (2-5 sentences) lesson opener that illustrates its concept and fosters curiosity
before any explanation is given. It is required for every new concept
introduction. It is never used for spiral review questions.

**Rules:**
- Sentence 1: Establish a real-world tension, contradiction, or
  visible mystery. Do not define the concept.
- Sentence 2: Pose the question that the lesson will answer — or
  deepen the tension without resolving it.
- No concept definitions in either sentence. Discovery precedes
  definition. Always.
- No rhetorical softening ("Have you ever wondered..."). State
  the tension directly.

**Hook types:**
- Contradiction — two facts that seem to conflict
- Real Stakes — a decision with genuine consequences that depends
  on the concept
- Visible Mystery — something observable that lacks an obvious
  explanation

**Example (Map Projections — Contradiction type):**
> Two pilots take off from New York to London. One flies a curved
> path over Greenland; the other flies straight across the Atlantic
> on the map. The curved route lands first.
> What is a straight line on a map actually doing to your flight?

**Self-check before finalizing a hook:**
- [ ] Does it avoid defining the concept?
- [ ] Does it establish genuine tension — not just mild interest?
- [ ] Could a 9th grader read it and want to know what happens next?

---

## 3. Grade Register

Register calibrates sentence length, vocabulary ceiling, and
conceptual density to the target grade. It is not about talking
down — it is about matching cognitive load to developmental stage.

| Grade Band | Sentence Length | Vocabulary | Density | Sample Phrase |
|---|---|---|---|---|
| 6–7 | 10–14 words avg | Common; define terms on first use | One idea per sentence | "A map scale tells you how much smaller the map is than the real world." |
| 8–9 (default) | 14–20 words avg | Subject-specific terms used without always defining; some inference expected | Two related ideas per sentence acceptable | "Because the Earth is a sphere, any flat map distorts at least one property — area, shape, distance, or direction." |
| 10–12 | 18–25 words avg | Technical terms used fluently; definitions not repeated | Moderate subordinate clause use acceptable | "Mercator's projection preserves local angles and shapes, making it invaluable for navigation, but the tradeoff — severe area distortion at high latitudes — is why Greenland appears larger than Africa." |

Default register for POC: **8–9 (9th grade)**. Flag any deviation.

---

## 4. Diagnostic Feedback Structure

Every wrong answer in a Folio practice set must receive a diagnostic
feedback block — not a generic "incorrect, try again." The feedback
must do three things in this order:

1. **Name the misconception** — what did this answer reveal about
   the student's current mental model?
2. **Redirect** — reframe the concept without repeating the question
   stem or revealing the answer.
3. **Cue** — point the student toward the specific piece of reasoning
   that will unlock the correct answer.

**Template:**
> [Name misconception]. [Redirect to concept]. [Cue toward reasoning].

**Example (wrong answer: Mercator preserves area):**
> That answer reflects a common mix-up between what Mercator preserves
> and what it distorts. Mercator's projection was designed to keep
> angles and compass directions accurate — which made it invaluable
> for sailors — but it trades that accuracy by stretching areas near
> the poles. Look at what the question is asking about: shape and
> direction, or size?

**Rules:**
- Maximum 3 sentences. Concision signals respect for the student's
  time.
- Never use the word "incorrect" or "wrong" alone. Always follow
  with a diagnostic redirect.
- Never reveal the correct answer in the feedback block.
- One feedback block per distractor. A 4-option MCQ needs 3 blocks.

---

## 5. Spiral Tagging

Every practice question must carry one of two tags. No exceptions.

| Tag | When to use |
|---|---|
| `[NEW]` | The concept being tested appears for the first time in this module |
| `[SPIRAL: Module Name]` | The concept was introduced in a prior module and is being revisited here |

**Rules:**
- Spiral tags reference only modules the student has actually
  completed. No phantom spiraling.
- A question can only carry one tag.
- The tag appears in the content metadata, not in the student-facing
  question text.
- When Bloom level escalates across a spiral revisit (e.g., a
  concept moves from Apply to Analyze), note it:
  `[SPIRAL: Map Skills — elevated to Analyze]`

---

## 6. Real-Geography Rule

All geography problems must use real places, real distances, and
real map data. Invented place names (e.g., "Country A," "City X")
are prohibited.

**Why:** Folio's founding pedagogical commitment is why-over-rote.
Fictional geography teaches students to solve fictional problems.
Real places ground the reasoning in transferable knowledge.

**Standard:** If a problem requires a specific distance or
coordinate, it must be accurate enough that a student could verify
it independently. Approximate values are acceptable; fabricated
values are not.

---

## 7. Content Metadata Block

Every piece of student-facing content produced under this reference
must carry the following metadata before delivery to the educator
verification pipeline:

```
FOLIO CONTENT OBJECT
──────────────────────
Type:               [Wonder Hook / Worked Example / Practice Problem /
                     Hint Progression / Diagnostic Feedback / Explainer]
Subject:            [e.g., World Geography]
Topic:              [e.g., Map Projections]
Learning Objective: [precise, Bloom-verb-led]
Bloom Level:        [Remember / Understand / Apply / Analyze /
                     Evaluate / Create]
Content Type:       [Declarative / Procedural / Conceptual-Principle]
Grade:              [grade level]
Difficulty:         [Foundational / Standard / Challenge / Transfer]
Spiral Tag:         [NEW] or [SPIRAL: Module — Bloom level if elevated]
Domain Expert:      [assigned — pending verification]
Status:             DRAFT — awaiting educator verification
```