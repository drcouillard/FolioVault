---
id: folio-authoring-workflow
type: protocol
status: locked
version: 1.0
date-locked: April 2026
phase: Phase 2 — Scope & Features
---
### Folio Content Authoring Workflow — Locked

**Where things live**

All active module specs sit in `05 - Build/review-queue/` regardless of stage. Status lives in the document header, not the folder. When a module reaches Approved + Gold, it moves to `04 - Curriculum/[subject]/[unit]/`.

**Module spec header — required fields on every document**

```
Module ID:            [GEO-XX-XX-000]
Content Status:       Draft | Ready for Review | Approved
Build Status:         Alpha | Beta | Gold
Educator Verifier:    [Name] | Unassigned
Verification Date:    [Date] | Pending
```

**Stage definitions**

|Stage|Content Status|What it means|
|---|---|---|
|Rob writes the spec|Draft|Functional draft, unverified|
|Rob flags for review|Ready for Review|[VERIFY] tags extracted, brief sent to educator|
|Educator signs off|Approved|Named educator confirmed accuracy|

|Stage|Build Status|What it means|
|---|---|---|
|Spec complete, unverified|Alpha|Content done, not educator-verified|
|Educator verified, unpiloted|Beta|Verified, not yet tested with students|
|Piloted and revised|Gold|Tested, revised, ready to ship|

**Movement rules**

- Draft → Ready for Review: Rob's call. Happens when the spec is complete enough to hand off.
- Ready for Review → Approved: Requires named educator sign-off. No exceptions.
- Alpha → Beta: Requires Approved content status. Cannot advance without it.
- Beta → Gold: Requires pilot feedback from at least 5 students.

**The handoff package**

When Rob moves a module to Ready for Review, he prepares:

1. Module spec exported as PDF
2. Verification checklist — all `[VERIFY]` tags extracted and numbered
3. One-page cover brief (reusable template — built in educator verification step)
4. Agreed turnaround date

**France module status update**

GEO-EU-FR-001 header should now read:

```
Content Status:     Ready for Review (pending verifier assignment)
Build Status:       Alpha
Educator Verifier:  Unassigned
Verification Date:  Pending
```