# Country Module Spec Rubric
**Reference file:** `references/country-profile-rubric.md`
**Version:** 2.0 | **Status:** active
**Owner:** domain-expert-geography
**Last updated:** 2026-04-29

---

## Purpose

[UPDATED] This rubric defines the standard fields for any country or territory module
spec produced by the geography domain expert. It covers two layers: geographic profile
data (Sections 1–7 under Part C) and instructional design metadata (Parts A, B, D, E,
F, G). Both layers must be complete before a module spec advances from DRAFT to READY
FOR REVIEW.

[ADDED] This rubric is the authority for Checklist B (Module Spec Structure) in
`folio-preflight-verifier`. A module spec is not preflight-ready until every required
field in this rubric is populated or marked `[PENDING]` with a stated reason.

[UPDATED] The domain expert fills every geographic data field. Where data is genuinely
unavailable or unreliable, note "data unavailable" rather than fabricating precision.
Use `~` for estimated figures. Use `[VERIFY]` to tag every statistical, historical, or
geographically contested claim inline — these tags become the educator's fact-check list.
See the `[VERIFY]` Tag Protocol at the end of this document.

[ADDED] All student-facing copy must conform to `voice-folio-v2.md`. Grade register:
9th grade (pilot default). See Part D for voice requirements. See the Forbidden Words
note in Part D before drafting any student-facing content.

---

## PART A — Module Identity Block [ADDED]

*Complete this block before any geographic or instructional content is written.*
*Maps to Checklist B1 in folio-preflight-verifier.*

| Field | Format | Required | Notes |
|---|---|---|---|
| Module ID | GEO-[REGION]-[COUNTRY]-[###] | Yes | e.g. GEO-EU-FR-001 |
| Unit | Unit number + name | Yes | Must reference one of the 7 defined units |
| Grade Band | e.g. "9th Grade" | Yes | Locked to 9th grade for pilot |
| Content Status | Alpha / Beta / Gold | Yes | Alpha on first draft |
| Flag Asset | Source + format | Yes | Public-domain SVG or PNG; note version year |
| Independence / Formative Event | Year + brief event | Yes | If no clean independence date, name the formative political event (e.g., "First Republic, 1792") |

---

## PART B — Instructional Design Foundation [ADDED]

*Pillar 1 (Backward Design): complete both fields before writing any content or questions.*
*Maps to Checklists B2, B3, B4 in folio-preflight-verifier.*

### Enduring Understanding [ADDED]

Write the EU before any content is drafted. A valid EU:
- Answers: "What should a student still be able to DO with this concept a year from now?"
- Is transferable beyond this specific module
- Is NOT a learning objective ("students will be able to identify...")
- Is NOT a topic description ("France is a country in Western Europe...")
- Passes the "so what?" test — the insight must matter beyond the assessment

**Format:** 2–4 sentences, declarative, transferable.

> [Write Enduring Understanding here]

---

### Acceptable Evidence [ADDED]

Define what mastery demonstration looks like before writing any questions. Must answer:
"What would a student have to demonstrate, not just answer, to prove genuine understanding?"

**Format:** 1–2 sentences naming the task type and the geographic evidence required.

> [Write Acceptable Evidence here]

---

### Content Type Classification (Smith & Ragan) [ADDED]

Classify the dominant content type. Note secondary types if present. This classification
governs which instructional strategy to apply — classify before designing.

| Type | Definition | Instructional Approach |
|---|---|---|
| Declarative | Knowing that — facts, definitions | Exposition + recall check |
| Procedural | Knowing how — step-by-step operations | Worked example + practice |
| Conceptual-Principle | Knowing why — relationships, systems | Case, analogy, or transfer task |

Most country modules are **Conceptual-Principle**. If a different type dominates, flag
it and explain the strategic implications.

**Dominant type:** _______________
**Secondary type(s):** _______________

---

## PART C — Geographic Profile

*Sections 1–7: factual reference data. Fill from verified sources. Tag every quantitative,
historical, or contested claim with `[VERIFY]`.*

---

### Section 1 — Identity

*Who is this place, officially?*

| Field                        | Format                                         | Notes                                                                                                   |
| ---------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Country / Territory Name     | Full official name                             | Include "Republic of," "Kingdom of," etc.                                                               |
| Sovereignty Status           | Sovereign / Territory / Disputed               | If Territory, name the governing nation                                                                 |
| Continent                    | Primary continent                              | If transcontinental, list both                                                                          |
| Region / Subregion           | e.g. "Southern Europe," "West Africa"          |                                                                                                         |
| Capital City                 | Name only                                      |                                                                                                         |
| Flag                         | Description or emoji                           | Note symbolism briefly                                                                                  |
| Independence / Founding Year | Year + brief event                             | e.g. "1776 — Declaration from Britain"; use formative political event if no clean date                  |
| Government Type              | e.g. Federal Republic, Constitutional Monarchy | [UPDATED] Include founding republic number / generation if relevant (e.g., "Fifth Republic, est. 1958") |
| Currency                     | Name + symbol                                  |                                                                                                         |
| International Memberships    | List key: UN, NATO, EU, AU, ASEAN, etc.        | [ADDED] Note permanent UNSC seat if applicable                                                          |

---

### Section 2 — Physical Geography

*What does the land look like and where is it?*

| Field | Format | Notes |
|---|---|---|
| Total Area | sq. km. + global rank | |
| Relative Location | 1 sentence | e.g. "Landlocked in Central Asia" or "Island nation in the Caribbean" |
| Hemisphere(s) | N/S + E/W | |
| Bordering Countries | List | "None" if island nation |
| Major Bodies of Water | Oceans, seas, key rivers/lakes | |
| Climate Zone(s) | Köppen type preferred | If tropical, specify Tropic of Cancer vs. Capricorn |
| Major Biomes | by land area % | e.g. "Tropical rainforest 48%, Savanna 31%, Wetlands 12%" |
| Major Landforms | by geographic dominance | e.g. "Andes Mountains (west), Amazon Basin (center), Brazilian Highlands (east)" |
| Highest Point | Name + elevation (m) | |
| Lowest Point | Name + elevation (m) | Note if below sea level |
| Longest River(s) | Name + length (km), max. 2 | |
| Major Natural Resources | Top 3–5 | Oil, minerals, timber, fertile land, fisheries, etc. |
| Environmental Challenges | Top 2–3 | [ADDED] Drought, flooding, sea level rise, deforestation, erosion, etc. |

---

### Section 3 — People & Culture

*Who lives here, and how do they identify?*

| Field | Format | Notes |
|---|---|---|
| Population | Number + global rank | |
| Population Density | per sq. km. + global rank | |
| Urbanization Rate | % urban + primate city flag | [ADDED] Note primate city pattern if the capital disproportionately dominates urban population |
| Migration Patterns | 1–2 sentences | [ADDED] Net immigration / emigration destination; key internal migration drivers |
| Largest 3 Cities | Name + population | Include capital if in top 3 |
| Official Language(s) | List | Note widely spoken unofficial or regional languages if significant |
| Major Religion(s) | % breakdown if available | [UPDATED] Note constitutional relationship between state and religion (secular, established church, plural) |
| Major Ethnic / Cultural Groups | Top 2–3 | Qualitative if data unavailable; note if state does not formally recognize ethnic categories |
| Time Zone(s) | UTC offset(s) | Multiple if applicable |

---

### Section 4 — Economy

*How does the country generate and distribute wealth?*

| Field | Format | Notes |
|---|---|---|
| GDP (nominal) | USD billions + global rank | |
| GDP per Capita | USD + global rank | Key for standard-of-living comparison |
| Primary Economic Sectors | % of GDP, top 3 | e.g. "Services 62%, Industry 25%, Agriculture 13%" |
| Top Exports | % of total export value, top 3 | e.g. "Crude oil 34%, refined petroleum 18%, gold 11%" |
| Human Development Index (HDI) | Score + global rank | Use UNDP data |

---

### Section 5 — Cultural Geography [ADDED]

*How does geography shape identity, law, and daily life?*

| Field | Format | Notes |
|---|---|---|
| Language Geography | Sentence or short paragraph | Official language + regional/minority languages; constitutional status |
| Religious Geography | Sentence or short paragraph | Dominant tradition(s); state relationship to religion (secular, established, plural) |
| Cultural Geographic Feature | 1–3 sentences | One geographic concept formally encoded in culture, law, or national identity (e.g., AOC wine appellations; territorial identity movements; land use norms with legal force) |
| Land Use & Cultural Identity | 1–2 sentences | How land use patterns shape political and cultural life (e.g., agricultural identity, rural/urban divide, pastoral traditions) |

---

### Section 6 — Connections & Relationships [ADDED]

*How does this country fit into regional and global systems?*

| Field | Format | Notes |
|---|---|---|
| Key Regional Relationships | 2–3 sentences | Most consequential bilateral or multilateral relationships; explain the geographic logic behind them |
| Historical Geography — Formative Event | 2–3 sentences | The territorial or political event that most shaped current borders, governance, or identity — with date(s) |
| Global Interdependencies | 2–4 sentences | Economic, military, cultural, or linguistic reach beyond the region; EEZ, diaspora, trade dependencies, soft power mechanisms |

---

### Section 7 — Global Snapshot

*Why does this country matter? What's the one thing to remember?*

| Field | Format | Notes |
|---|---|---|
| Global Significance | 1–2 sentences | What makes this country notable at a global scale |
| Key Geographic Challenge | 1 sentence | e.g. desertification, sea level rise, water scarcity, rapid urbanization |
| One Thing to Remember | 1 sentence, memorable | The "cereal box" hook — what sticks after closing the profile |

---

## PART D — Voice & Presentation [ADDED]

*Write these after the Geographic Profile is complete. They are student-facing content.*
*All copy must conform to voice-folio-v2.md. Grade register: 9th grade.*
*Maps to Checklists B5, B9, B10, A1–A7 in folio-preflight-verifier.*

**Forbidden words — never use in student-facing copy:**
leverage, unlock, crush it, easy, simply, just, fail, wrong, optimize, seamless, robust, innovative

**Wrong-answer framing — never use:** "wrong," "incorrect," "almost!", "so close!", "great try!"

---

### Opening Map [ADDED]

**Requirement:** Every module opens with a map of the subject before any text. The map
is the student's first orientation — it anchors all subsequent content in physical space.

**Selection rules:**
- For a country module: a physical/landforms map of the relevant region is preferred
  over a political map. Students should see the terrain before they see the borders.
- For a regional module: a world reference map showing the region's position plus a
  regional physical map.
- Minimum two map references per module: one for global position context, one for
  subject-level physical detail.
- All map assets must be sourced from `04 - Curriculum/geography/references/` or
  cited from an external public-domain source with attribution.

**Required fields:**

| Field | Value |
|---|---|
| Primary map asset | File path or external URL + attribution |
| Primary map purpose | What geographic question it answers (e.g., "Shows landforms and physical regions of South America") |
| Global position map | File path — typically `references/base-maps/world2.png` |
| Global position map purpose | "Orients student to [subject]'s location relative to oceans, continents, and neighboring regions" |
| Educator note | Any crop, annotation, or overlay instruction for the final design pass |

---

### Wonder Hook [ADDED]

**Requirement:** Opens with tension, contradiction, or an unexpected fact. Never opens
with a definition. Targets ARCS condition: Attention. Maps to Gagné Event 1.

**Preflight rule:** If the hook opens with "[Country] is a country in..." or
"[Concept] is defined as..." it is an explainer, not a hook. Rewrite before submission.

> **Attention Hook** (2–4 sentences):
> [Write wonder hook here]

> **Relevance Hook** (1–2 sentences — ARCS: Relevance):
> [Write real-world stakes statement here — why does this country's geography matter to
> a student's world right now?]

---

### Big Idea Callback — Passive Instance [ADDED]

**Requirement:** One passive instance per module. Folio provides the answer.
**Placement:** After Fundamentals, before Practice.
**Format:** Opens verbatim with the phrase "What's the big idea here?" — followed by a
reframed insight, not a definition. The insight connects the geographic facts to a
transferable idea the student can carry forward.

**Decision rule after writing:**
- Does the concept have a strong real-world analogy that clarifies without oversimplifying? → Use analogy.
- Is the concept procedural or multi-step? → Use worked example.
- Neither? → Move directly to practice.

> **What's the big idea here?**
> [Write passive callback here]

---

### Big Idea Callback — Active EIB Prompt [ADDED]

**Requirement:** One active instance per module. Student provides the answer.
**Placement:** End of module.
**Format:** Opens verbatim with "What's the big idea here?" — followed by a real-world
scenario and 2–3 numbered prompts.
**Constraint:** No single correct answer. Reasoning is the evidence. If there is one
defensible right answer, rewrite.

> **What's the big idea here?**
> [Scenario — 1–2 sentences]
>
> Walk through it:
> 1. [Prompt 1]
> 2. [Prompt 2]
> 3. [Prompt 3 — optional]
>
> There's no single right answer. The reasoning is the evidence.

---

## PART E — Instructional Metadata [ADDED]

*Maps to Checklists B6, B7, B8, B11, and ARCS/MOM requirements from folio-id-framework.md.*

---

### Spiral Concept Tags [ADDED]

List every prior module concept that appears in this module's practice set.
If this is not the first module in a student's history, spiral tags are required.
No phantom spiraling — only concepts from completed modules may be tagged.

**Required format:** `[SPIRAL: Module Name — Concept Area]`

**Bloom escalation rule (Pillar 2 + 3):** Folio deepens, it does not repeat. For each
spiral concept, the Bloom level must be higher than the level at which that concept was
last assessed. Record the intended level explicitly — do not leave it implicit.

| Prior Module | Concept Area | Bloom Level This Appearance | Notes |
|---|---|---|---|
| [Module name] | [Concept] | [Apply / Analyze / Evaluate / Create] | |

---

### Bloom Level Targets by Concept Area [ADDED]

Define Bloom level targets before writing any questions. Minimum floor: **Apply**.
Remember and Understand are not Folio levels — if a draft question tests only recall or
comprehension, rewrite or cut it before preflight.

| Concept Area | Bloom Target | Evidence of Target (what student must do to demonstrate it) |
|---|---|---|
| [Concept] | [Apply / Analyze / Evaluate / Create] | [1-sentence description of the demonstration] |

---

### Misconception Inventory [ADDED]

Minimum 3 entries required before educator review. These seed the diagnostic feedback
blocks when questions are drafted. Each entry names the wrong belief and the geographic
evidence that corrects it. Generic entries ("students may be confused about X") are not
sufficient — name the specific incorrect inference.

| # | Misconception (what the student incorrectly believes) | Correction (specific geographic reality) |
|---|---|---|
| 1 | | |
| 2 | | |
| 3 | | |
| … | | |

---

### ARCS Audit [ADDED]

All four ARCS conditions must be present and verifiable before the module advances to
educator review. Check each condition and note where in the module spec it is met.

| Condition | Design Mechanism | Implementation Evidence | Present? |
|---|---|---|---|
| **Attention** | Perceptual arousal; inquiry | Wonder hook — opens with tension, not definition | ☐ |
| **Relevance** | Personal meaning; real-world stakes | Relevance hook; real-geography rule; why-over-rote questioning | ☐ |
| **Confidence** | Calibrated difficulty; belief in success | Adaptive routing; difficulty progression; hint availability noted in practice set | ☐ |
| **Satisfaction** | Intrinsic reward; feedback quality | Diagnostic feedback — names the misconception, not just the error | ☐ |

---

### Gagné Nine Events Audit [ADDED]

Run before submitting to educator review. Events 2 and 4 are intentionally deprioritized
in Folio — N/A is the correct response. Events 7 and 9 may be marked PENDING if
questions are not yet drafted, but must be flagged as planned, not omitted.

*Maps to Checklist B11 in folio-preflight-verifier.*

| Event | Folio Status | Required Element | Status |
|---|---|---|---|
| 1 — Attention | Required | Wonder hook | ☐ Present / ☐ Missing |
| 2 — State objectives | Deprioritized | N/A — stating objectives kills the wonder hook | N/A |
| 3 — Prior recall | Required | Spiral questions | ☐ Present / ☐ Missing |
| 4 — Stimulus | Deprioritized | N/A — stimulus is embedded in real-world framing | N/A |
| 5 — Guidance | Required | Worked example or hint progression | ☐ Present / ☐ Missing / ☐ PENDING |
| 6 — Performance | Required | Practice questions | ☐ Present / ☐ Missing / ☐ PENDING |
| 7 — Feedback | Required | Diagnostic feedback blocks (3 per wrong-answer distractor) | ☐ Present / ☐ Missing / ☐ PENDING |
| 8 — Assessment | Required | Mastery criteria defined | ☐ Present / ☐ Missing |
| 9 — Transfer | Required | At least one Challenge or Transfer difficulty question | ☐ Present / ☐ Missing / ☐ PENDING |

---

### MOM Rule — Remediation Routing Framing [ADDED]

Before submitting to educator review, confirm how remediation routing is presented to
the student.

**Rule (Hardré & Miller — MOM):** A student routed to remediation must experience it as
"going deeper," not as "being behind." This is a UX and copy rule — it governs the
language the system uses when presenting routing decisions, not the content of the
remediation itself. Adaptive routing must never feel like a penalty.

**Intended remediation framing for this module:**
> [Describe how remediation routing will be presented to the student — e.g., "Students
> below mastery threshold are presented with: 'Let's go deeper on [concept]' — not
> flagged as having failed or fallen behind."]

---

## PART F — Practice Set Metadata [ADDED]

*Required before educator review. If questions are not yet drafted, populate as working
assumptions and note PENDING. Maps to Checklist B12 in folio-preflight-verifier.*

| Field | Value | Notes |
|---|---|---|
| Total question count | | Integer |
| New concept questions | | Count + concept areas listed |
| Spiral questions | | Count + source modules listed |
| New/spiral ratio | | e.g. "30% new / 70% prior" — Saxon floor: min 70% prior |
| Bloom level distribution | | Apply: n, Analyze: n, Evaluate: n, Create: n |
| Mastery threshold | | e.g. "7/10 (70%)" |
| Difficulty level distribution | | Foundational: n, Standard: n, Challenge: n, Transfer: n |

**Set-level requirements (from question-standards.md):**
- At least one Apply and one Analyze question in every set
- At least two difficulty levels represented
- At least one Challenge or Transfer question (required for Gagné Event 9)
- Spiral ratio actual count must match declared ratio above
- No duplicate concepts (two questions should not test the same concept the same way)

*For full question-level standards, load `question-standards.md` when drafting questions.*

---

## PART G — Verification Block [ADDED]

*Required on every module spec. Content Status must be accurate before submission.*
*Maps to Checklist B13 in folio-preflight-verifier. See Pillar 5 in folio-id-framework.md.*

| Field | Value |
|---|---|
| Content Status | Alpha / Beta / Gold |
| Pending items before educator review | [List all; "none" if complete] |
| [VERIFY] tag count | [Total number of [VERIFY] tags in this document] |
| Educator Verifier | [Name — must be assigned before submission] |
| Verification Date | [Pending / YYYY-MM-DD when verified] |
| Module Status | DRAFT / READY FOR REVIEW / APPROVED |

**Status definitions:**
- **Alpha** — functional draft; content complete but educator-unverified
- **Beta** — educator verified; not yet piloted with students
- **Gold** — piloted, revised, ready to ship

Nothing advances from Alpha to Beta without named educator sign-off.
Nothing advances from Beta to Gold without pilot student feedback.

---

## Edge Case Decision Tree

```
Is this a sovereign nation?
  ├── YES → Fill all sections normally
  └── NO (Territory / Dependency)
        ├── Note governing nation in Section 1
        ├── GDP and currency may reflect governing nation — flag it
        └── Independence year → use "Established" or "Administered since [year]"

Is the country transcontinental?
  ├── YES → List primary continent + note secondary
  │         e.g. "Europe / Asia — Turkey"
  └── NO → Single entry

Is the country an island nation?
  ├── YES → Bordering countries = "None (island nation)"
  └── NO → List bordering countries normally

Is HDI data unavailable?
  └── Substitute: Life Expectancy (years) + Literacy Rate (%)

Is population density data misleading?
  (e.g., city-state vs. large sparse nation)
  └── Add qualitative note:
      "High density concentrated in coastal urban corridor"

Is export or sector percentage data unavailable or unreliable?
  └── Note "data unavailable" — do not estimate without flagging with ~

Does the country have no clean independence date?
  └── Use formative political event in both Part A and Section 1
      (e.g., "First Republic proclaimed 1792" — see France module)
```

---

## Data Sources

Pull from these sources in priority order:

| Field Category | Preferred Source |
|---|---|
| Population, GDP, HDI | World Bank Open Data + UNDP |
| Area, geography, government | CIA World Factbook |
| Trade / exports | World Trade Organization (WTO) or Observatory of Economic Complexity (OEC) |
| Climate / biomes | Köppen-Geiger classification system |
| Natural resources | CIA World Factbook + UN Comtrade |

Always cite source + data year for every quantitative field. Flag figures
older than 3 years per the skill's standard uncertainty protocol.

---

## [VERIFY] Tag Protocol [ADDED]

Tag every statistical, historical, and geographically contested claim inline with
`[VERIFY]`. These tags become the educator's fact-check list and must be counted in the
Verification Block before submission. Maps to Checklist D in folio-preflight-verifier.

**Tag these claim types:**
- All numerical figures (population, GDP, area, rankings, percentages)
- All historical dates and named events
- All superlative claims ("largest," "smallest," "only," "first")
- All border or territorial descriptions that could be contested
- Any figure that may be older than 3 years

**Format:** `[VERIFY: source + year]` if source is known; `[VERIFY]` if unknown.

The Verification Block must report the total `[VERIFY]` tag count before the module
spec is submitted to educator review. This count becomes the educator's fact-check task list.
