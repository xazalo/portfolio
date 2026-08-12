# AGENTS.md

## Project
- React 19 + TypeScript + Vite 8 single-page app, managed with **pnpm** (`pnpm-lock.yaml`). App entry: `src/main.tsx`.
- React Router, Framer Motion, and lucide-react are installed but not used yet; `src/App.tsx`/`src/App.css` are still the default Vite scaffold. The real site is not built.
- `spec.md` is the authoritative technical & design spec (sections, design tokens, motion, a11y, routing). Consult it before building features.

## Commands
- `pnpm dev` — Vite dev server
- `pnpm build` — `tsc -b && vite build` (the only typecheck; run this to typecheck)
- `pnpm lint` — ESLint
- `pnpm preview` — preview the production build
- No tests or test framework configured. Prettier is installed but has no config/script.

## TypeScript constraints (`tsconfig.app.json`)
- `verbatimModuleSyntax`: use `import type` for type-only imports.
- `erasableSyntaxOnly`: no enums, namespaces, or parameter properties.
- `noUnusedLocals`/`noUnusedParameters` are on — unused code fails the build.
- `allowImportingTsExtensions`: imports may include `.ts`/`.tsx` extensions (e.g. `import App from './App.tsx'`).
- No path aliases — use relative imports.

## Styling
- Tailwind CSS 4 (`tailwindcss`, `@tailwindcss/vite`) is installed but **not wired up**: `vite.config.ts` only registers `react()`, and no stylesheet does `@import "tailwindcss"`. Enable it before relying on Tailwind utilities; the spec requires Tailwind.
- Global styles in `src/index.css` use CSS variables + `color-scheme: light dark` for a manual dark theme.

## Conventions
- No semicolons, single quotes (existing style in src/config files).
- React 19: `ref` is a normal prop (no `forwardRef`); prefer `use()` over `useContext()`.
- Icons via lucide-react, subtle motion via Framer Motion, routing via React Router (per `spec.md`).

## Skills
- `.agents/skills/` holds installed skills (composition-patterns, react-best-practices, frontend-design, tailwind-css-patterns, accessibility), locked by `skills-lock.json`. Follow their component/perf guidance. Note: react-best-practices contains Next.js/SSR rules that don't apply to this pure client SPA.
