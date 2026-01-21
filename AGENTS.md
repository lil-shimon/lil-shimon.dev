# Repository Guidelines

## Project Structure & Module Organization
- **Source:** Next.js App Router in `src/app/` (`layout.tsx`, `page.tsx`).
- **Styles:** Global CSS in `src/app/globals.css`.
- **Assets:** Public, versioned files in `public/`.
- **Config:** `next.config.ts`, `eslint.config.mjs`, `tsconfig.json` (path alias `@/*` → `src/*`).
- **Tests:** Co‑locate as `*.test.ts[x]` or use `src/__tests__/`.

## Build, Test, and Development Commands
- **Install:** `pnpm install` — use the committed `pnpm-lock.yaml`.
- **Dev server:** `pnpm dev` — runs Next.js with Turbopack.
- **Build:** `pnpm build` — creates production bundles.
- **Start:** `pnpm start` — serves the production build.
- **Lint:** `pnpm lint` — Next + TypeScript rules.
- **Tests:** `pnpm exec vitest` (add `--watch` or `--ui` as needed).

## Coding Style & Naming Conventions
- **Language:** TypeScript (strict). Use 2‑space indentation.
- **Modules:** Prefer `@/…` imports over deep relatives (e.g., `@/app/page`).
- **Components:** PascalCase in `.tsx`; App Router files follow Next patterns (`page.tsx`, `layout.tsx`).
- **CSS:** Keep globals minimal; favor component‑scoped styles when added.
- **Linting:** Extends `next/core-web-vitals` and `next/typescript`. Fix warnings before PRs.

## Testing Guidelines
- **Framework:** Vitest.
- **Locations:** Co‑locate tests or place in `src/__tests__/`.
- **Scope:** Cover utilities, hooks, and critical component behavior (props, accessibility, rendering states).
- **Run:** `pnpm exec vitest --watch` during development.

## Commit & Pull Request Guidelines
- **Commits:** Imperative, present tense, one change per commit.
  - Examples: “Add Vitest as development dependency”, “Remove default favicon”.
- **PRs:** Include summary, linked issues (e.g., `Fixes #123`), screenshots/GIFs for UI, and verification notes. Ensure `pnpm build` and `pnpm lint` pass.

## Metrics & Observability
- **Web Vitals:** Track LCP/CLS/INP via `web-vitals` in client components; send to your analytics backend.
- **Instrumentation:** Add `src/instrumentation.ts` with `export async function register()` to configure OpenTelemetry exporters for the App Router.
- **Profiling:** Use `pnpm dev` + React Profiler; capture repeatable results with Lighthouse CI when possible.

## Security & Configuration Tips
- **Secrets:** Never commit secrets. Use `.env.local` for local overrides (git‑ignored).
- **Assets:** Keep large binaries out of git; place static files in `public/`.
- **Dependencies:** Prefer small, well‑maintained packages; update via `pnpm install` to keep the lockfile consistent.

