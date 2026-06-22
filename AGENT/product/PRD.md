# STEMBridge — Frontend Product Requirements & Execution Context

> Scope note: this repo and this document cover the **Frontend Team only**. Backend, AI/Logic, Content, UI/UX, Testing, and Deployment each maintain their own report. Where the frontend depends on another team's output (the solver's step output, lesson content, sync API), this doc states the dependency as a contract we consume — it does not specify how that team builds their side.

## Mission

Build the interface that teaches JSS 1 students Mathematics the way a patient teacher would: step-by-step, visual, voice-assisted, and usable without reliable internet. The platform must work for rural Nigerian secondary schools first — every UI decision should be checked against "does this still work on a low-end device with no data?"

Scope discipline: JSS 1 Mathematics is the only content target for v1. Do not build UI infrastructure for "additional classes and science subjects later" until JSS 1 Math is shipped and working. Mentioning future scope in a doc is fine; building for it now is not.

---

## Who This Is For

- **Primary user — JSS 1 student**, often in a rural school, sometimes a weak reader, sometimes a slow learner, with unreliable or no internet access.
- **Secondary user — Teacher**, who needs visibility into which students/topics are struggling, and the ability to assign quizzes.
- **Constraint that shapes everything:** low connectivity. Offline-first is not a "nice to have" feature in a list — it's an architectural constraint that affects how every other feature must be built (data sync, content storage, asset size).

---

## What the Frontend Renders (Per Feature)

### 1. Step-by-Step Mathematics Solver — UI

- An input surface for an equation (e.g. `2x + 5 = 15`).
- A results view that renders an ordered list of solution steps in plain language, revealed progressively (not dumped all at once) so it reads like a teacher walking through it.
- The actual parsing/solving happens behind an API contract owned by the AI/Logic team. The frontend's job: send the input, render the returned step list, and handle the loading/empty/error states for that call gracefully (including the offline case — see below).

### 2. Interactive Visual Learning

- For geometry topics: render a shape (e.g. a circle), let the student drag/adjust a parameter (e.g. radius), and live-update the dependent values (area, circumference).
- Built entirely client-side (canvas/SVG) — no backend call needed for the visualization itself, only for the underlying lesson config (which shape, which parameters, valid ranges).
- Must run smoothly offline and on low-end hardware — favor lightweight canvas/SVG manipulation over heavy animation libraries.

### 3. Voice Explanation Support — UI

- Read lesson explanations aloud in simple English.
- Must work offline. Frontend-side options: Web Speech API (`speechSynthesis`) where available, or playback of pre-recorded/bundled audio assets shipped with lesson content. Do not depend on a network TTS API as the only path.
- Local-accent support is explicitly a "later" item — do not scope it into v1.

### 4. Gamification — UI

- Points, badges, levels, daily streaks, named achievements (e.g. "Algebra Champion", "Geometry Explorer") rendered as part of the student's profile/progress views.
- Purely a presentation layer on top of progress data the frontend already has locally — no new data source needed beyond (6).

### 5. Offline Functionality (Architectural Constraint for the Frontend)

- Lessons, exercises, and student progress must be stored locally on the device (e.g. IndexedDB) and fully usable with zero connectivity.
- When connectivity returns, sync local writes to the backend's sync API.
- This is the constraint that shapes the local data layer every other frontend feature reads/writes through — decide it early.

### 6. Student Progress Tracking — UI

- Local read/write of per-student records: topics attempted, topics mastered, weak areas, quiz scores.
- This is the data backbone Gamification (4) renders from and what eventually syncs up for the Teacher Dashboard (7). Build the local data layer for this before building badge UI on top of it.

### 7. Teacher Dashboard — UI

- Views for monitoring student performance, weak topics across a class, assigning quizzes, tracking progress.
- Reads from the backend's aggregated data — this view only makes sense once students' synced progress data exists server-side.

---

## Suggested Frontend Execution Order

1. **Local data layer & sync** — offline storage schema (IndexedDB) and sync-on-reconnect logic against the backend's sync API. Everything else reads/writes through this.
2. **Lesson/content rendering** — load and display JSS 1 Math lessons from whatever format the Content team delivers, cached locally for offline use.
3. **Step-by-Step Solver UI** — input + progressive step reveal, wired to the AI/Logic team's API contract.
4. **Interactive Visual Learning** — geometry visualizations, client-side only.
5. **Progress Tracking UI** — instrument lesson/solver/quiz interactions to write into the local data layer.
6. **Voice Explanation Support** — layered onto existing lesson/solver content.
7. **Gamification UI** — layered onto Progress Tracking once stable.
8. **Teacher Dashboard** — last, since it has no value until real synced student data exists.

---

## Success Criteria (Frontend)

- A JSS 1 student can solve a linear equation and see the reasoning, not just the answer.
- A student with zero internet access can complete a full lesson and have it sync once they're back online.
- A teacher can see, at a glance, which topics their class is weakest on.

---

## Final Note

This document defines the Frontend Team's scope and build order for STEMBridge. Tech-stack and architecture decisions live in `AGENT/frontend/FRONTEND_DESIGN.md` and `AGENT/frontend/DESIGN_SYSTEM.md`. This file stays the stable product reference the frontend team aligns to.
