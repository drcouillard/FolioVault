# CLAUDE.md — Folio Interactive Persistent Context

## What This Is
This is the permanent briefing file for Claude Code operating inside the Folio Interactive vault. Read this before every task. Do not ask questions already answered here.

## What Folio Is
Folio Interactive is an adaptive K–12 learning platform delivered as a responsive web application. It personalizes each student's learning path through adaptive routing, targeted remediation on wrong answers, and a spiral curriculum model.

One-line: Folio Interactive builds adaptive educational software that meets learners where they are, challenges them to think deeply, and equips educators with tools that flex to any classroom.

Mission: To make rigorous, personalized learning accessible — software that adapts to the learner, illuminates the path forward, and builds the confidence to keep going.

Founding principle: "Could you patent the sun?" — Jonas Salk. The base product is free. Always. This is structural, not aspirational.

## Operator
Solo founder: Rob. Not a developer. All build tasks must be executable without coding knowledge unless explicitly flagged otherwise. Filter all recommendations through: does this move Folio toward a working pilot with real students?

## Audiences
- Primary: K–12 independent learner (curious, self-motivated)
- Secondary: Classroom educator (values credibility, outcomes, ease of deployment)
- Tertiary: Engaged parent / college learner

## Locked Decisions — Do Not Relitigate
- Web-only. No native mobile app until post-pilot.
- K–12 focus only.
- World Geography is the first subject. Map Skills is the first module.
- Free base product always. AI features are a paid enhancement layer.
- AI is not core. Platform must be fully functional without it.
- Spiral curriculum model (Saxon-informed). Prior concepts woven into every subsequent practice set.
- Adaptive remediation required. Wrong answers route to targeted re-teaching, not generic feedback.
- Multimodal presentation required. Every concept must be visual, text, and interactive where possible.
- Expert educator verification required before any content ships. Nothing moves from Draft to Verified without a named educator sign-off.
- No VARK or learning style routing. Multimodal by default achieves accessibility without pseudoscience.

## Content Pipeline (Three Stages)
1. Draft — written by Rob Couillard
2. Ready for Review — flagged by Rob Couillard, reviewed by educator
3. Approved — educator sign-off. Nothing ships without this.

## Pedagogical Principles (In Priority Order)
1. UDL — multiple means of engagement, representation, action
2. Multimodal presentation — text + visual + interactive by default
3. Spiral curriculum — prior concepts in every practice set
4. Adaptive remediation — wrong answers trigger targeted re-teaching
5. Why-over-rote — questions target reasoning, not recall

## Pedagogical DNA — Instructional Design Model

Folio's curriculum model is a synthesis. The Saxon-inspired spiral is the
implementation floor, not the ceiling. The theoretical source is Jerome
Bruner. The operational model has five pillars — full detail in
`01 - Core/folio-id-framework.md`.

**Five pillars (summary for session context):**
1. **Design backward** — enduring understanding and mastery evidence defined
   before any content is written (McTighe & Wiggins)
2. **Think at depth** — all questions target Bloom's Apply level or above;
   Bloom tags mandatory on every question; content classified as declarative,
   procedural, or conceptual-principle before strategy is chosen (Smith & Ragan)
3. **Spiral and deepen** — prior concepts in every practice set; Bloom level
   escalates across revisits (not just repeated at same depth); scaffolding
   withdraws progressively (Bruner)
4. **Motivate by design** — every module audited against ARCS conditions:
   Attention (wonder hook), Relevance (real-world stakes), Confidence
   (adaptive difficulty), Satisfaction (diagnostic feedback); remediation
   routing must never feel like a penalty (MOM — Hardré & Miller)
5. **Build iteratively, verify ruthlessly** — SAM1 cycle: Prototype → Educator
   Verify → Pilot → Revise → Ship; Alpha/Beta/Gold status language; nothing
   reaches students without named educator sign-off

**Key distinction from Saxon:** Saxon revisits prior concepts at the same
Bloom level indefinitely. Folio deepens them. That escalation is Folio's
genuine pedagogical contribution.

**Content pipeline voice rules:** See `01 - Core/folio-voice.md` for
wonder hook format, grade register, diagnostic feedback structure, spiral
tagging, and the real-geography rule.

## Brand Voice (Summary)
Warm but never soft. Precise but never cold. Speaks like a teacher who loves their subject. Never talks down. Treats struggle as natural. Diagnostic, not cheering.
- Use: build, explore, practice, notice, connect, demonstrate, mastery, evidence, reflect
- Avoid: leverage, unlock, crush it, easy, simply, just, fail, optimize, seamless

## Vault Structure
- 00 - Inbox/ — unsorted, temporary
- 01 - Core/ — permanent reference layer (this file lives at root)
- 02 - Brand/ — brand guide, visual assets
- 03 - Systems/ — orchestrators, skills, protocols
- 04 - Curriculum/ — all content by subject
- 05 - Build/ — active artifacts, specs, review queue
- 06 - Research/ — reference material, read-only inputs
- 07 - Archive/ — deprecated, not deleted

## Current Phase
Infrastructure build. Vault structure established. Next: populate 01 - Core, migrate verified systems into 03 - Systems, begin CLAUDE.md-driven task execution.

## How to Work in This Vault
- Always read CLAUDE.md before starting any task
- Check 01 - Core/ for current decisions and phase status before making recommendations
- Never suggest actions that contradict Locked Decisions above
- When in doubt about brand voice or product direction, check 02 - Brand/
- All new content drafts go to 05 - Build/review-queue/ before anywhere else
