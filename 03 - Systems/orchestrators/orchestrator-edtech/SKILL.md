---
name: orchestrator-edtech
description: Master router for all educational content and learning design requests.
type: orchestrator
---
 
# EdTech Orchestrator
 
The master router for educational pipeline. This skill does not produce
curriculum, content, assessments, or UX artifacts. It classifies requests, validates
dependencies, selects domain experts, and sequences the correct downstream skills in order.
 
Think of this as the project manager for every learning design workflow.
 
---
 
## Step 1: Classify the Request
 
Read the user's message and identify the primary intent. Match to one of these categories:
 
| Category | Description | Primary Skill |
|---|---|---|
| **Curriculum** | Scope, objectives, module structure, prerequisite mapping | `curriculum-architect` |
| **Domain Content** | Subject matter explanation, worked examples, practice problems | `domain-expert-router` → content |
| **Assessment** | Rubrics, mastery criteria, evidence design, formative checks | `assessment-design` |
| **Misconception** | Why did the learner get it wrong? Error diagnosis | `misconception-diagnosis` |
| **Adaptive Routing** | What should happen next for this learner? | `adaptive-pedagogy-engine` |
| **UX / Interaction** | Screen flow, hint progressions, interaction patterns | `ux-instructional-design` |
| **Analytics** | Dashboards, progress tracking, reporting | `learning-analytics` |
| **System Architecture** | Component design, data models, software structure | `software-systems-architecture` |
 
If the request touches multiple categories, note all of them. Sequence them in Step 3.
 
---
 
## Step 2: Validate Dependencies
 
Before routing, check whether upstream outputs exist.
 
### Dependency map
 
```
curriculum-architect
  └── verb-taxonomy-router (requires curriculum-architect handoff)
        ├── assessment-design (requires routing decision)
        ├── misconception-diagnosis (requires routing decision OR learner error input)
        ├── adaptive-pedagogy-engine (requires routing decision OR learner state input)
        ├── ux-instructional-design (requires routing decision)
        └── domain-expert-router → content (requires routing decision)
              └── learning-analytics (requires content + assessment specs)
```
 
### Standalone exceptions
 
These skills may be invoked independently by this orchestrator without upstream curriculum output:
 
- `misconception-diagnosis` — if user provides a learner answer/error directly
- `adaptive-pedagogy-engine` — if user provides a learner state profile directly
- `assessment-design` — if user provides a learning objective directly
- `domain-expert-router` — if user provides a topic directly
- `software-systems-architecture` — always standalone
If a request requires curriculum-architect output and none exists, emit:
 
```
ROUTING HELD — curriculum-architect output required.
This request involves [UX / Assessment / Content] design but no module specification exists.
Action: run curriculum-architect first, then resubmit with the handoff package.
```
 
---
 
## Step 3: Select Domain Expert
 
Before routing to any content-generating skill, identify which domain expert applies.
 
Load `references/domain-registry.md` now.
 
**Selection rules:**
1. Read the subject area from the user's request or curriculum handoff.
2. Match to a registered domain expert in the registry.
3. If no domain expert is registered for this subject, tell the user:
   "No domain expert exists for [subject]. Create one using the domain-expert-creator skill before generating content."
4. Pass the selected domain expert to the content pipeline as the verification source.
**Domain expert workflow — always runs in two phases:**
- **Phase A (Select):** Identify the correct domain expert before generation begins.
- **Phase B (Validate):** After content is generated, route it back through the domain expert for accuracy verification before marking it final.
---
 
## Step 4: Sequence the Workflow
 
For multi-skill requests, build and present the sequence before executing.
 
**Example — "Build a complete lesson on fractions for grade 6":**
1. `curriculum-architect` — scope objectives, Bloom tier, prerequisite map
2. `verb-taxonomy-router` — classify objectives, determine assessment and interaction formats
3. `domain-expert-router` → `pe-domain-expert` or `geography-domain-expert` (match to subject)
4. `assessment-design` — rubric, mastery criteria, evidence types
5. `misconception-diagnosis` — map likely error patterns for this topic
6. `ux-instructional-design` — screen flow, hint progression, interaction spec
7. Domain expert validates generated content (Phase B)
8. `learning-analytics` — tracking spec, dashboard layout
**Example — "A learner just missed 3 fraction questions":**
9. `misconception-diagnosis` (standalone — learner error provided)
10. `adaptive-pedagogy-engine` — decide what happens next
11. Optionally: `ux-instructional-design` if a new interaction is needed
Present the sequence to the user. Only proceed after they confirm or adjust.
 
---
 
## Step 5: Route
 
Hand off to the first skill in the sequence with a tight context block:
 
```
EDTECH ORCHESTRATOR HANDOFF
────────────────────────────
Request type:    [Curriculum / Content / Assessment / Diagnosis / Adaptive / UX / Analytics]
Subject domain:  [e.g., Pre-Algebra / World Geography / Structural Engineering]
Domain expert:   [skill name — selected in Step 3]
Upstream output: [what's already been produced, or "none"]
This skill needs to produce: [specific deliverable]
Sequence position: [e.g., Step 2 of 5]
```
 
---
 
## Step 6: Validate Completeness
 
After each skill in the sequence completes, check the artifact against the completeness standards in `references/artifact-standards.md` before proceeding to the next step.
 
If an artifact is incomplete, return to the responsible skill with a specific list of what's missing. Do not proceed downstream with incomplete artifacts.
 
---
 
## Rules
 
- Never generate curriculum, content, assessments, or UX artifacts directly. Route only.
- Never skip domain expert selection for content-generating tasks.
- Never pass an incomplete artifact downstream.
- If the request is ambiguous, ask one clarifying question before routing.
- Standalone requests (diagnosis, adaptive, assessment without curriculum) are valid — skip gates that don't apply.
- `software-systems-architecture` always bypasses the learning design pipeline entirely.