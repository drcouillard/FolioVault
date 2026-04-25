---
module_name: routing-map
purpose: Maps user intent categories to orchestrator routes
activation_triggers:
  - ambiguous domain classification
  - multi-domain requests
output_behavior: enforce deterministic routing
---

# Routing Table

| Intent Type | Route |
|---|---|
| planning | solutions-orchestrator |
| education | curriculum-orchestrator |
| branding | brand-orchestrator |
| visual design | visual-composition-orchestrator |

# Priority Rule
When multiple routes apply, choose the route that most directly serves the user's end goal.