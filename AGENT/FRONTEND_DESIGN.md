# FRONTEND DEVELOPMENT GUIDELINE — STEMBridge

## Purpose

This document defines the development rules, architecture, and coding standards for the STEMBridge frontend. All code, AI tools, and collaborators must follow this document as the single source of truth for this repo.

> This repo is frontend-only. It does not own a database. All persistent server-side data (lesson content, the solver, synced progress, teacher dashboard aggregates) is owned by other teams and consumed through API contracts. The frontend's own database is the **local, offline device store** — see Offline Data Layer below.

---

## Tech Stack (As Installed — Non-Negotiable Unless Explicitly Changed)

- Framework: **Next.js 16 (App Router)** — this major version has breaking changes vs. older Next.js. Read `node_modules/next/dist/docs/` before writing routing, caching, or data-fetching code; do not assume App Router behavior from training data.
- Language: **TypeScript**
- UI Library: **React 19**
- Styling: **Tailwind CSS v4** (`@tailwindcss/postcss`, tokens via `@theme` in `globals.css`)
- Component primitives: **shadcn/ui** (style `base-nova`, base color `neutral`, configured in `components.json`). Note: this version of shadcn scaffolds on **`@base-ui/react`**, not Radix — check `node_modules/@base-ui/react` behavior before assuming Radix APIs/props from training data.
- Icons: **Lucide** (`lucide-react`), set as `iconLibrary` in `components.json`
- Linting: **ESLint 9** (`eslint-config-next`)

**Adding new shadcn components:** use `npx shadcn@latest add <component>` — never hand-roll a primitive that shadcn already provides. Generated components land in `components/ui/` and are owned/edited by us after generation (they are not a black-box dependency).

**Not yet installed — propose before adding:**

- A local persistence library for the offline data layer (e.g. `idb` as a thin wrapper over IndexedDB) is not yet installed. Needed before building feature 5 in the PRD execution order.

**Rules:**

- No direct calls to a database — there isn't one in this repo. All remote data comes from backend API endpoints (URL/contract TBD per domain — confirm with Backend/AI-Logic/Content teams rather than guessing a shape).
- All remote data fetching goes through a single `/lib/api/` layer — never `fetch()` calls scattered through components.
- All local persistence (offline storage) goes through a single `/lib/storage/` layer — never raw `indexedDB`/`localStorage` calls scattered through components.
- Default to minimal client-side state; prefer Server Components for anything that doesn't need interactivity.
- No alternative frameworks, styling systems, or state libraries introduced without approval.

---

## Architectural Principles

1. **Frontend-only boundary**
   - This repo renders UI and manages local/offline state. It does not implement solver logic, lesson authoring, or grading — those are contracts from other teams.
   - When a contract doesn't exist yet, define the TypeScript type for what we _expect_ to receive in `/lib/contracts/`, and build against a local mock until the real endpoint exists. Don't block UI work on another team's API being ready.

2. **Offline-first, not offline-patched**
   - Every feature that touches student data (progress, quiz answers, lesson completion) must read/write through the local data layer first. Network sync is an background concern, not a precondition for the feature working.
   - Build the local data layer (Step 1 of the PRD execution order) before any feature that depends on persisted student state.

3. **Clear boundaries**

   ```text
   /app                 ← Next.js routes, layouts, Server Components
   /components
     /ui                ← Reusable primitives (Button, Input, Modal, Badge)
     /lessons           ← Lesson rendering, visual demonstrations
     /solver             ← Equation input + step-by-step result UI
     /layout            ← Shells, navigation
   /lib
     /api               ← All calls to backend endpoints, one file per domain
     /storage           ← All local/offline persistence (IndexedDB wrapper)
     /contracts         ← TypeScript types for API request/response and local records
     /sync              ← Sync-on-reconnect logic between /storage and /api
     /helpers           ← Shared utilities
   ```

4. **Performance-first for low-end devices**
   - This product targets rural schools, often on low-end Android devices and old browsers. Avoid heavy animation/graphics libraries — prefer plain SVG/Canvas and CSS transitions.
   - Keep client JS bundles small. Default to Server Components; use `"use client"` only where interactivity (drag-to-adjust radius, voice playback, offline-aware forms) requires it.

---

## React / Next.js Rules

- Default to **Server Components**.
- Use `"use client"` only when client-side state, browser APIs (IndexedDB, Web Speech API, canvas drag), or lifecycle is necessary.
- Avoid `useEffect` unless essential — most of this app's interactivity (math solver, geometry sliders) is local component state, not data synchronization, so this is a real risk area to keep clean.
- Any client state must have a one-line justification in a comment if its necessity isn't obvious.

---

## Offline Data Layer (Critical — Read Before Building Any Stateful Feature)

- All local persistence (lesson cache, progress, quiz results) lives behind `/lib/storage/`, backed by IndexedDB.
- Every write to `/lib/storage/` is the source of truth for the UI immediately — never wait on a network round-trip to reflect a student's action.
- `/lib/sync/` watches connectivity and pushes unsynced local records to the backend's sync API when online. Each local record needs a `synced: boolean` (or `syncedAt: timestamp | null`) field for this to work.
- Never assume network availability anywhere in component code. Every API call in `/lib/api/` must have a defined offline fallback (serve from `/lib/storage/`, or queue the write for later sync).

---

## Voice & Visual Feature Notes

- **Voice:** use the Web Speech API (`window.speechSynthesis`) as the primary path since it works offline once the browser/OS voices are available. Fall back to bundled audio files for lessons where a consistent, curated voice matters more than dynamic text-to-speech. Keep this behind a `/lib/voice/` helper, not inline in components.
- **Interactive visuals (geometry, etc.):** build with SVG for static-ish shapes with a few draggable parameters; reach for Canvas only if SVG proves too slow for a given visualization. Keep visualization components self-contained — they take a lesson config (shape, parameter ranges) as props and emit live values, they don't fetch anything themselves.

---

## Definition of Done

Code is considered complete when:

- It compiles and passes lint.
- It works with the network disabled (DevTools offline mode) for any feature touching student data.
- It can be read by another frontend engineer without needing this doc open.
- UI uses design-system tokens only (see `DESIGN_SYSTEM.md`) — no hardcoded colors/spacing.
- No unnecessary Client Components.

---

## Final Rule

Clarity > cleverness
Works offline > works online
Shipping the JSS 1 Math path > scaffolding for future subjects
