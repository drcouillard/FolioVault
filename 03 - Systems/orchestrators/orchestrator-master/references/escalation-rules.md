---
module_name: escalation-rules
purpose: Defines when to invoke multiple orchestrators
activation_triggers:
  - cross-domain request
  - multiple specialist outputs needed
output_behavior: assign lead + support orchestrators
---

# Escalation Triggers
Escalate when:
- task spans multiple disciplines
- primary output depends on specialist support
- user explicitly requests combined functions

# Lead Assignment Rule
Choose the orchestrator most directly aligned with the final deliverable.

# Support Assignment Rule
Assign secondary orchestrators only if they materially improve output quality.