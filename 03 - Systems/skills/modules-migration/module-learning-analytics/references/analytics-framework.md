# Analytics Framework — Full Reference

Four lenses for transforming raw learner data into actionable intelligence.

---

## Lens 1 — Mastery Dashboard

Display all learning objectives using the four-tier mastery scale.

Each objective must include:
- Current mastery tier (Emerging / Developing / Proficient / Mastery)
- Prior tier (to show movement)
- Trend direction (↑ improving / → stable / ↓ declining)
- Support level required (Independent / Light scaffolding / Moderate / Intensive)
- Percentage score where applicable

Visual representation options:
- Progress bars with tier color coding
- Skill trees with milestone markers
- Competency maps for multi-unit views

---

## Lens 2 — Growth Over Time

Track learner development longitudinally across sessions and units.

### Metrics to Track

| Metric | Definition | Signal |
|---|---|---|
| Weekly mastery score | Average mastery % per week | Acceleration or plateau |
| Unit-over-unit growth | Mastery delta between completed units | Retention strength |
| Retention trend | Performance after time gaps | Long-term consolidation |
| Time-to-mastery | Sessions needed to reach Mastery tier | Learning efficiency |
| Remediation improvement | Error rate change after intervention | Intervention effectiveness |

### Growth State Classification

**Accelerating** — Mastery score increasing by ≥5pts/week, consistent unit growth.

**Steady** — Mastery score increasing by 1–4pts/week. Normal healthy progress.

**Plateauing** — Mastery score flat for 2+ consecutive weeks. Investigate: content
difficulty spike, motivation dip, or scaffolding gap.

**Regressing** — Mastery score declining. Typically follows a time gap or difficulty
jump. Trigger remediation review immediately.

**Recovering** — Mastery score rebounding after a dip. Positive signal — note what
intervention preceded recovery.

---

## Lens 3 — Misconception Intelligence

Cluster repeated errors into concept patterns. Never treat errors as isolated events.

### Error Type Taxonomy

| Type | Definition | Remediation Approach |
|---|---|---|
| Procedural | Correct concept, wrong execution steps | Worked example with labeled steps |
| Conceptual | Fundamental misunderstanding of the idea | Re-explanation with analogy |
| Vocabulary | Confusion over terminology | Definition clarification + re-attempt |
| Transfer | Understands isolated case, fails novel context | Bridging example + comparison task |
| Careless | Inconsistent errors without pattern | Metacognitive reflection prompt |

### Misconception Tracking Fields

For each identified cluster, track:
- **Frequency** — How many times has this error appeared?
- **Severity** — High (blocks progression) / Medium (slows progress) / Low (surface error)
- **Persistence** — Is it recurring across sessions or fading?
- **Remediation success rate** — % of learners who resolved it after intervention

### Severity Thresholds

- **High (red):** Blocks mastery of dependent objectives. Requires immediate intervention.
- **Medium (amber):** Slows progress. Schedule targeted remediation within next 2 sessions.
- **Low (green):** Surface-level. Monitor; intervene only if frequency increases.

---

## Lens 4 — Engagement Dashboard

Track learner interaction behavior as a leading indicator of motivation and retention.

### Engagement Metrics

| Metric | Definition | Healthy Range |
|---|---|---|
| Session frequency | Sessions per week | ≥4/week |
| Lesson completion rate | % of started lessons finished | ≥80% |
| Avg time on task | Minutes per session | 15–35 min |
| Hint dependency trend | Hints per lesson over time | Decreasing |
| Active streak | Consecutive days with activity | Track personal bests |
| Confidence trend | Learner self-rating over time | Stable or increasing |
| Drop-off risk score | Composite motivation risk (0–10) | <3 = low risk |

### Motivation Risk Signals

Flag early if any of the following appear:
- Completion rate drops below 70% for 2+ consecutive sessions
- Hint dependency increasing over 3+ sessions
- Time on task dropping sharply (disengagement or frustration)
- Confidence trend declining while mastery is flat
- Session frequency below 2/week for more than one week

---

## Recommendation Engine

Every dashboard view must include recommended next actions. Never display data without
a clear next step.

### Routing Logic

| Learner State | Recommended Action |
|---|---|
| Objective at Mastery, no recent challenge | Advance to transfer challenge or next unit |
| Objective Proficient for 2+ sessions | Introduce more complex variation |
| High-frequency misconception cluster | Trigger targeted remediation micro-lesson |
| Plateauing growth trend | Review scaffolding; consider alternative explanation path |
| Regressing after time gap | Retrieval practice session before new content |
| Engagement risk signal | Reduce lesson length; surface streak/milestone achievement |
| Hint dependency decreasing | Reduce scaffold availability; reinforce independence |

### Next Step Output Format

Each recommendation must include:
1. **Action type** — Advance / Revisit / Reinforce / Milestone / Intervention
2. **Target** — Specific objective, lesson, or skill cluster
3. **Rationale** — One sentence linking the data signal to the action
4. **Priority** — High / Medium / Low

---

## Data Input Contract

This skill consumes output from the Assessment + Adaptive Mastery Skill.
Expected data shape per learning objective:

```json
{
  "objective": "string",
  "mastery_tier": "Emerging | Developing | Proficient | Mastery",
  "prior_tier": "string",
  "mastery_pct": 0-100,
  "trend": "up | flat | down",
  "support_level": "Independent | Light | Moderate | Intensive",
  "error_clusters": [
    {
      "type": "Procedural | Conceptual | Vocabulary | Transfer | Careless",
      "frequency": "integer",
      "severity": "High | Medium | Low",
      "persistence": "High | Medium | Low",
      "remediation_success_rate": "0-100"
    }
  ],
  "engagement": {
    "session_frequency": "float",
    "completion_rate": "0-100",
    "avg_time_on_task_min": "integer",
    "hints_per_lesson": "float",
    "confidence_pct": "0-100",
    "streak_days": "integer"
  }
}
```