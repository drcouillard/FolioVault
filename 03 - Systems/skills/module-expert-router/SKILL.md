---
name: expert-router
description: Routes content generation requests to the correct domain expert. At pilot stage, geography is the only valid route. For unrecognized domains, blocks generation and outputs a domain expert stub spec to 00 - Inbox for future build.
type: module
version: v1.0
status: active
---

# Expert Router

## Mission

Identify the correct domain expert for a content request and return that
assignment to the calling skill before any content is generated.

This skill gates content generation. Nothing proceeds without a confirmed
domain expert assignment.

---

## Input Requirements

Receives from module-content-generator or any skill requiring domain
expert assignment:

1. **Subject domain** — the subject area of the content request
2. **Content request** — the full request being routed (passed through unchanged)

---

## Routing Table

| Domain | Assigned Expert | Location | Status |
|---|---|---|---|
| World Geography | expert-geography | 04 - Curriculum/geography/SKILL.md | Active — pilot scope |
| All other domains | None | — | Stub required — see below |

---

## Step 1: Identify Domain

Match the subject domain in the incoming request against the routing table.

- If match found → proceed to Step 2
- If no match → proceed to Step 3

---

## Step 2: Confirm and Return Assignment

Return this handoff to the calling skill:

EXPERT ROUTER -> DOMAIN EXPERT ASSIGNMENT
-----------------------------------------
Requested domain:   [domain]
Assigned expert:    expert-geography
Location:           04 - Curriculum/geography/SKILL.md
Status:             Active
Instruction:        Proceed with content generation.
                    Route completed draft to expert-geography for verification.

---

## Step 3: Unrecognized Domain — Block and Stub

If no expert exists for the requested domain, block content generation
and output a stub spec.

Block message (returned to calling skill):

EXPERT ROUTER -> GENERATION BLOCKED
-----------------------------------------
Requested domain:   [domain]
Assigned expert:    None
Status:             No expert exists for this domain
Instruction:        Content generation cannot proceed.
                    A domain expert stub has been output to 00 - Inbox.
                    Build the expert skill before retrying this request.

Stub spec (output to 00 - Inbox as expert-[domain]-STUB.md):

DOMAIN EXPERT STUB
-----------------------------------------
Name:               expert-[domain]
Triggered by:       [original content request]
Date flagged:       [date]
Status:             TO BUILD

Required capabilities:
- Subject accuracy verification for [domain] content
- Standards alignment reference (identify applicable standards)
- Scope judgment (what is in/out for this learner level)
- Common misconception library for [domain]

Reference files needed:
- [domain]-standards.md
- [domain]-scope-map.md
- [domain]-misconceptions.md

Priority:           Build before any [domain] content can be generated

---

## Rules

- Never guess a domain expert assignment — only route to confirmed active
  experts in the routing table
- Never allow content generation to proceed without a confirmed assignment
- Every blocked request produces a stub — dead ends become build prompts
- Stub files go to 00 - Inbox only — never to 03 - Systems/skills/
  until the expert is fully built and verified
- When adding a new domain expert, update this routing table first

---

## Failure Modes

- Routing to an expert that does not exist at the specified location
- Allowing content generation to proceed without confirmed assignment
- Discarding unrecognized domain requests without producing a stub
- Adding a domain expert to the vault without updating this routing table
