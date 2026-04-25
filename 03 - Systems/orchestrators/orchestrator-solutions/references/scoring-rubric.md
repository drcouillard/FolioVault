---
module_name: scoring-rubric
purpose: Standardizes evaluation of generated plans
activation_triggers:
  - plan-auditor stage active
  - output requires quality assessment
output_behavior: produce structured scoring + feedback
---

# Scoring Dimensions (0–10)

## Clarity
- Is each step unambiguous?

## Completeness
- Are all necessary steps included?

## Feasibility
- Can this realistically be executed?

## Dependency Integrity
- Are prerequisites correctly ordered?

# Output Format

Return:

- Scores per category
- Total average score
- Critical issues
- Recommended fixes