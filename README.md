# STEMBridge - Frontend

Step-by-step JSS 1 Mathematics learning app. Next.js 16 (App Router) + Tailwind v4 + shadcn/ui on `@base-ui/react`.

Before writing routing/data code, skim `node_modules/next/dist/docs/` - this Next.js build has real breaking changes from older versions (see `AGENTS.md`).

## Running it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

If you just pulled changes that moved/renamed files or folders, restart `npm run dev` - Turbopack's dev cache can get confused by structural changes and throw an Internal Server Error until restarted.

## The 6 pages

| Route                              | What it is                                                                                  |
| ---------------------------------- | ------------------------------------------------------------------------------------------- |
| `/`                                | Landing page                                                                                |
| `/login`                           | Login (Student/Teacher)                                                                     |
| `/dashboard`                       | Home dashboard (this is the "Home" tab - no `/dashboard/home`, `/dashboard` itself is Home) |
| `/dashboard/learn`                 | Topic list                                                                                  |
| `/dashboard/learn/[topicId]/study` | Step-by-step lesson for one topic                                                           |
| `/dashboard/learn/[topicId]/quiz`  | Quiz for one topic                                                                          |
| `/dashboard/solver`                | Math solver (typed equation → step-by-step answer)                                          |
| `/dashboard/achievements`          | Badges & streaks                                                                            |

Reference mockups: `public/screenshots/mobile/` and `public/screenshots/desktop/`.

## Folder structure - the rule to follow

```
app/
  (marketing)/
  (auth)/
  dashboard/

components/
  ui/
  layout/
  blocks/
    landing/
    home/
    lessons/
    solver/
    achievements/
    auth/

lib/
  topics.ts
  solve-linear-equation.ts
  utils.ts
```

**`app/`** - routes only. Keep `page.tsx` thin - compose components, no business logic.

- `(marketing)/` - landing page. The parentheses mean it adds no URL segment.
- `(auth)/` - login. Also adds no URL segment, so the route is `/login`, not `/auth/login`.
- `dashboard/` - the logged-in app. This one _does_ add a URL segment, so every route inside is prefixed `/dashboard` (e.g. `dashboard/learn/page.tsx` → `/dashboard/learn`).

**`components/ui/`** - small reusable primitives (Button, Card, ProgressBar, StepCard...). You'll see a mix of shadcn-generated files (kebab-case, like `button.tsx`) and hand-built ones - both belong here because both are primitives used everywhere, not tied to one page.

**`components/layout/`** - page chrome only: TopBar, BottomTabBar, BurgerMenu. Never page content.

**`components/blocks/<feature>/`** - everything else, one folder per page/feature (`blocks/landing`, `blocks/home`, `blocks/lessons`, `blocks/solver`, `blocks/achievements`, `blocks/auth`). If you're building a chunk of UI specific to one page, it goes in `blocks/<that-page>/`, not in `ui/`.

- Example of reuse done right: `TopicCard` lives in `blocks/lessons/` but is imported as-is by both the Learn page and Home's "Continue Learning" section. Don't fork a second card component for the same thing on a different page - import the existing one.

**`lib/`**

- `topics.ts` - the single source of truth for lesson/topic data (mock for now - swap for a real API call later without touching any component). This is also the shape contract other teams should target.
- `solve-linear-equation.ts` - the solver's math logic.
- `utils.ts` - the `cn()` helper (shadcn standard).

**The rule that matters most:** don't build a whole page as one giant component. Break it into small pieces in `components/blocks/<feature>/`, and let the `page.tsx` just assemble them.

## Conventions

- **Styling**: Tailwind only, no CSS Modules. Colors come from tokens in `app/globals.css` (`bg-primary`, `text-accent`, `bg-hero`, `border-chart-1`...) - need a new color, add a token, don't hardcode a hex (hard rule, from `DESIGN_SYSTEM.md`). `--destructive` is for real system errors only, never "wrong answer" in a quiz - use `--warning` for that, `--chart-1`-`--chart-4` for decorative per-topic accents.
- **Data**: everything on screen is mock data from `lib/topics.ts` plus hardcoded numbers in `app/dashboard/page.tsx` and `app/dashboard/achievements/page.tsx`. No backend, no login, no saved progress - refreshing resets everything. Wiring up `/lib/api`, `/lib/storage`, and real auth is next (see `AGENT/frontend/FRONTEND_DESIGN.md`).
- **Images**: real assets live in `public/assets/`, named for what they are (`topic-ruler.svg`, `badge-algebra-champion.svg`). New ones follow the same plain-name pattern.

## Before you push

```bash
npx tsc --noEmit
npx eslint .
```

Both should be clean.
