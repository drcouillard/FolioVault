---
name: intent-classifier
type: module
version: v0.1
status: draft
description: Classify the user’s request into a defined intent category to determine whether structured orchestration is required and which system should be activated. This is the first stage in any orchestration pipeline.
inputs: []
outputs: []
dependencies: []
tags: []
author:
updated:
---

# Module: intent-classifier

---

## Purpose

- Interpret the nature of the request
- Reduce ambiguity before planning begins
- Enable correct routing by the Master Orchestrator
- Set expectations for downstream processing depth

---

## Classification Types

Classify the request into ONE of the following:

### 1. Execution / Planning
- Requires step-by-step plan
- System design, workflows, breakdowns

### 2. Visual / Spatial
- Diagrams, layouts, visual mapping
- Spatial relationships or structure

### 3. Educational / Instructional
- Teaching, curriculum design, learning paths
- Concept explanation with structured progression

### 4. Content / Writing
- Writing, rewriting, summarization
- Tone, voice, narrative structure

### 5. Informational
- Simple factual or direct answers
- No structured planning required

### 6. Hybrid
- Combines multiple categories above
- Requires multi-system routing

---

## Output Format

- Intent Type: <category>
- Confidence: <low | medium | high>
- Signals:
  - Key phrases or indicators from the request
- Assumptions (optional):
  - Only include if ambiguity affects routing

---

## Operating Rules

- Select ONE primary intent (even for hybrid, choose dominant + mark hybrid)
- Do not overanalyze simple queries
- Default to “Execution / Planning” if unclear but complexity is high
- Keep output concise and structured

---

## Constraints

- Do not generate plans
- Do not solve the request
- Do not expand beyond classification

---

## Example

Input:
"Help me design a system to organize my Claude skills"

Output:
- Intent Type: Execution / Planning
- Confidence: High
- Signals:
  - "design a system"
  - "organize"