# Visual Design Principles — Dashboard Reference

Rules for building dashboards that are immediately readable, motivating, and low cognitive load.

---

## Core Principles

**1. Progress over performance** — Show movement and growth, not just scores.
Every metric should answer "how far have I come?" not just "where am I now?"

**2. Motivating, not judgmental** — Use growth language throughout.
Avoid: "Failed", "Incomplete", "Below average"
Prefer: "Building toward", "Still developing", "Next milestone: X"

**3. Action always follows data** — Every metric displayed must connect to a next step.
A dashboard with no recommendations is an incomplete dashboard.

**4. Visual hierarchy guides attention** — The learner's eye should land on:
1. Their current status headline
2. What to work on next
3. Recent wins / streak / momentum
4. Detailed objective breakdown (secondary)

**5. Low cognitive load** — Reduce visual noise. One insight per panel. Tight labels.
No more than 4 primary metric cards above the fold.

---

## Color System

Use consistently across all dashboard outputs. Aligns with the mastery tier scale.

| Tier / State | Color | Hex (light mode) | Usage |
|---|---|---|---|
| Mastery | Green | #639922 / #EAF3DE | Bars, badges, streak blocks |
| Proficient | Blue | #378ADD / #E6F1FB | Bars, badges, charts |
| Developing | Amber | #BA7517 / #FAEEDA | Bars, badges, warnings |
| Emerging | Coral | #D85A30 / #FAECE7 | Bars, badges, alerts |
| Neutral / structural | Gray | #888780 / #F1EFE8 | Labels, backgrounds |
| Misconception high | Red | #E24B4A | Severity dots |
| Misconception medium | Amber | #EF9F27 | Severity dots |
| Misconception low | Green | #639922 | Severity dots |

Always use the CSS variable system in HTML (`var(--color-background-primary)`, etc.)
for backgrounds and text. Hardcode hex only for chart fills and colored bars.

---

## Learner-Facing Language Guide

### Mastery Tier Labels

| Tier | Learner-Facing Label | Avoid |
|---|---|---|
| Emerging | "Just getting started" | "Failing", "Not yet" |
| Developing | "Building your skills" | "Struggling", "Below level" |
| Proficient | "Getting there" | "Average", "Okay" |
| Mastery | "Nailed it" | "100%", "Complete" (implies done) |

### Trend Language

| Trend | Learner-Facing | Instructor-Facing |
|---|---|---|
| ↑ Improving | "You're on a roll" | "Accelerating — reduce scaffold" |
| → Stable | "Holding steady" | "Plateauing — check pacing" |
| ↓ Declining | "Let's revisit this one" | "Regressing — trigger intervention" |

### Next Step Language

Always frame as forward momentum, not deficit correction.

- "Ready for the next challenge" (not "You need more practice")
- "Let's revisit this concept" (not "You got this wrong")
- "You're 2 lessons away from your next milestone" (milestone framing)
- "Your hint usage is dropping — you're getting more independent" (confidence signal)

---

## Dashboard Layout Patterns

### Standard Single-Learner Dashboard

```
[ 4 headline metric cards ]         ← mastery %, units, streak, confidence
[ Mastery Map ]                     ← full objective breakdown with bars + badges
[ Growth Trend | Unit Growth ]      ← two charts side by side
[ Misconception Patterns ]          ← error clusters with severity
[ Engagement Metrics ]              ← horizontal bars for 6 signals
[ Recommended Next Steps ]          ← 3–5 actions with open buttons
[ Instructor Notes | System Insights ] ← split panel, instructor/system views
```

### Compact Progress Widget (embedded in lesson flow)

```
[ Mastery tier badge + objective name ]
[ Progress bar with % ]
[ Trend arrow + one-line growth message ]
[ Single next step CTA ]
```

### Instructor Overview (multi-learner)

```
[ Class mastery distribution chart ]
[ Flagged learners (regression / engagement risk) ]
[ Top misconception clusters across class ]
[ Recommended interventions by priority ]
```

---

## Chart Conventions

**Progress bars** — Always show both fill color (tier) and percentage label.
Minimum bar height: 8px. Background: `var(--color-background-secondary)`.

**Line charts (growth trend)** — Single dataset preferred. Use fill with low opacity
(0.08) under the line. Tension 0.35 for smooth curve. No legend needed for single series.

**Bar charts (unit growth)** — Color bars by performance threshold, not sequence.
Red fill for units below threshold; blue for above. Makes regression immediately visible.

**Engagement bars** — Horizontal. 6px height. Label left, value right. Keep compact.

**Metric cards** — 4-column grid. Secondary background. 22px value, 12px label above.
Include delta or context in a 11px sub-label below the value.

---

## Accessibility Notes

- Never rely on color alone to convey state — always pair with text label or icon
- Trend arrows (↑ → ↓) must accompany color indicators
- Minimum font size: 11px for labels, 13px for body text
- Avoid red/green as the only distinguishing pair — include amber tier as intermediary