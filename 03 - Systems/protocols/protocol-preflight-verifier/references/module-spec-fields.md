# Module Spec Fields Reference
## Authority for Checklist B — Module Spec Structure

Load this file when running preflight on a module spec input.

---

## Required Fields — Module Identity Block

| Field | Required | Notes |
|---|---|---|
| Module ID | Yes | Format: GEO-[REGION]-[COUNTRY/TOPIC]-[3-digit number] |
| Unit | Yes | Must reference one of the 7 defined units |
| Grade Band | Yes | Locked to 9th grade for pilot |
| Content Status | Yes | Alpha / Beta / Gold |
| Flag asset | Yes | SVG or PNG; version year noted |
| Independence / Formative Event | Yes | If no clean date, formative event required |

---

## Required Instructional Design Fields

| Field | Required | Notes |
|---|---|---|
| Enduring Understanding | Yes | Must be transferable — not a task objective |
| Acceptable Evidence | Yes | Must define what demonstration looks like |
| Content type classification | Yes | Declarative / Procedural / Conceptual-Principle |
| Wonder hook | Yes | Must not open with a definition |
| Spiral concept tags | Yes (if not first module) | One tag per prior concept in practice set |
| Bloom level targets | Yes | Per concept area; must be Apply or above |
| Misconception inventory | Yes | Minimum 3 entries |
| Big Idea Callback — passive | Yes | Insight, not definition |
| Big Idea Callback — active EIB | Yes | Multi-answer; reasoning required |
| Gagné Nine Events audit | Yes | Events 1,3,5,6,7,8,9 must be present |

---

## Required Practice Set Metadata

| Field | Required | Notes |
|---|---|---|
| Total question count | Yes | Integer |
| New concept question count | Yes | And concept areas listed |
| Spiral question count | Yes | And source modules listed |
| Bloom level distribution | Yes | Count per level |
| Mastery threshold | Yes | Expressed as score (e.g., 7/10) |

---

## Enduring Understanding — What makes one valid

A valid Enduring Understanding (EU):
- Answers: "What should a student still be able to DO with this
  concept a year from now?"
- Is transferable beyond the specific module context
- Is NOT a learning objective ("students will be able to identify...")
- Is NOT a topic description ("France is a country in Western Europe...")
- Passes the "so what?" test — the insight should matter beyond the test

**Example — valid EU:**
"France's geographic position at Western Europe's crossroads has shaped
its role as a cultural exporter, agricultural powerhouse, and political
architect of the modern European order. Geography doesn't determine
history, but France is a clear case where it heavily pressures it."

**Example — invalid EU (topic description):**
"France is located in Western Europe and has multiple climate zones,
river systems, and mountain ranges that affect its economy and culture."

---

## Gagné Nine Events — Folio Mapping

| Event | Folio status | Required element |
|---|---|---|
| 1 — Attention | Required | Wonder hook |
| 2 — State objectives | Intentionally deprioritized | N/A acceptable |
| 3 — Prior recall | Required | Spiral questions |
| 4 — Stimulus | Intentionally deprioritized | N/A acceptable |
| 5 — Guidance | Required | Worked example or hint progression |
| 6 — Performance | Required | Practice questions |
| 7 — Feedback | Required | Diagnostic feedback blocks |
| 8 — Assessment | Required | Mastery criteria defined |
| 9 — Transfer | Required | At least one Challenge or Transfer question |

Events 7 and 9 may be marked PENDING if questions are in a separate
content object — but both must be flagged as planned, not omitted.

---

## Content Type Classification — Smith & Ragan

| Type | Definition | Instructional approach |
|---|---|---|
| Declarative | Knowing that — facts, definitions | Exposition + recall check |
| Procedural | Knowing how — step-by-step operations | Worked example + practice |
| Conceptual-Principle | Knowing why — relationships, systems | Case, analogy, or transfer task |

Most Folio country modules are Conceptual-Principle.
Map Skills contains all three types.
Classify the dominant type; note secondary types if present.