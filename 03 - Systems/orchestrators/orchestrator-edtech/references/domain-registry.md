# Domain Expert Registry

This is the canonical source of truth for all registered domain experts.
`edtech-orchestrator` and `domain-expert-router` load this file when selecting
a domain expert for content generation or validation.

Do not add a domain expert to the registry until its SKILL.md is complete and installed.

---

## Registered Domain Experts

| Domain | Expert Skill | Standards Alignment | Learner Level | Scope Summary |
|---|---|---|---|---|
| Engineering (FE/PE exam prep) | `pe-domain-expert` | NCEES FE/PE specifications | Undergraduate / professional | Civil, mechanical, electrical engineering — exam-scope content only |
| World Geography | `domain-expert-geography` | NCGE National Geography Standards | Grade 9 (~14–15 years) | World regions, physical geography, human geography |

---

## Pending / In Development

| Domain | Status | Notes |
|---|---|---|
| Pre-Algebra / Middle School Math | Not started | High priority — needed for fractions, equations, ratios |
| Biology (High School) | Not started | — |
| U.S. History | Not started | — |

---

## How to Add a Domain Expert

1. Build the domain expert skill using `domain-expert-creator`
2. Confirm the skill's SKILL.md is complete with: scope definition, standards alignment,
   learner level, and content verification protocol
3. Add the expert to the Registered table above
4. Remove from Pending if applicable

A domain expert must be registered here before `domain-expert-router` will route to it.

---

## Selection Rules (for domain-expert-router)

- Match on subject area first
- If subject spans multiple experts (e.g., "engineering geography of a region"),
  select the expert whose scope covers the primary learning objective
- If no registered expert covers the subject: stop, tell the user, route to `domain-expert-creator`
- Partial matches must be confirmed by the user before proceeding