---
name: learning-analytics
description: Learning Analytics + Progress Dashboard Skill for interactive educational software.
---

# Learning Analytics + Progress Dashboard Skill

Transforms learner performance data into clear, actionable, and visually meaningful
progress intelligence. Works in direct harmony with the **Assessment + Adaptive Mastery
Skill**, **UX Instructional Design Skill**, **Curriculum Architecture Skill**, and
**Software Systems + Component Architecture Skill**.

> Progress is not a percentage. It is meaningful learning intelligence.

---

## Primary Mission

Every dashboard output must answer three sets of questions:

**For the learner:** What have I mastered? What am I improving? What should I work on next?

**For instructors / parents:** Where is the learner excelling? Where are misconceptions
recurring? How quickly is progress occurring?

**For the system:** Which lessons need adjustment? Where does learner drop-off occur?
Which interventions are most effective?

---

## Analytics Lenses

Organize all outputs across four lenses. Full framework detail in
`references/analytics-framework.md`.

| Lens | What It Tracks |
|---|---|
| **Mastery Dashboard** | Objective-level mastery state, trends, support requirements |
| **Growth Over Time** | Weekly/unit progress, retention, time-to-mastery, plateaus |
| **Misconception Intelligence** | Error clusters, frequency, persistence, remediation success |
| **Engagement Dashboard** | Sessions, completion, hint dependency, confidence, drop-off |

---

## Output Format

Always respond in this structure when generating analytics output:

```
Learner Snapshot        — headline metrics: mastery %, units, streak, confidence
Mastery Map             — all objectives with tier, trend, and support level
Growth Trend            — longitudinal progress with acceleration/plateau flags
Misconception Patterns  — error clusters with severity, frequency, remediation rate
Engagement Metrics      — behavioral signals and motivation risk indicators
Recommended Next Steps  — 3–5 prioritized actions with routing logic
Instructor Notes        — pedagogical flags and intervention suggestions
System Optimization     — lesson-level drop-off, remediation loops, content gaps
```

---

## Mastery Scale

Use these four tiers consistently across all outputs. Must align with
Assessment + Adaptive Mastery Skill classifications.

| Tier | Color Code | Meaning |
|---|---|---|
| **Emerging** | Coral / red | Limited recall, conceptual confusion |
| **Developing** | Amber / orange | Partial understanding, inconsistent execution |
| **Proficient** | Blue | Consistent standard performance, light scaffolding |
| **Mastery** | Green | Independent, transferable understanding |

---

## Visual Design Principles

All dashboards must be immediately readable, low cognitive load, visually hierarchical,
and motivating rather than judgmental. Full visual rules in
`references/visual-design-principles.md`.

**Core rules:**
- Use growth language, not failure labels
- Surface next achievement targets prominently
- Every view must include recommended next actions
- Avoid raw percentages alone — always pair with tier and trend

---

## Dashboard Template

A ready-to-use interactive HTML dashboard is available at
`references/dashboard_template.html`.

Use it when: building a new learner dashboard, populating with real session data,
or demonstrating the analytics system to stakeholders.

To populate: replace the `objectives`, `weekData`, `unitData`, `misconceptions`,
and `engMetrics` arrays with live data from the Assessment + Adaptive Mastery Skill's
learner profile output.

---

## Integration Points

| Skill | Data Exchange |
|---|---|
| Assessment + Adaptive Mastery | Feeds mastery state, hint levels, error types → Analytics displays them |
| Curriculum Architecture | Provides objective list and Bloom alignment → Analytics tracks against it |
| UX Instructional Design | Receives next-step recommendations → Surfaces them in learner-facing UI |
| Software Systems + Architecture | Analytics data model integrates into component architecture |
| Master Orchestrator | Routes to this skill for any progress visibility task |

---

## Reference Files

| File | When to Read |
|---|---|
| `references/analytics-framework.md` | Full detail on all four lenses, metric definitions, recommendation engine logic |
| `references/visual-design-principles.md` | Dashboard design rules, color system, language guidelines |
| `references/dashboard_template.html` | Interactive dashboard widget — load when building or populating a dashboard |