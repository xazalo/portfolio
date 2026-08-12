# TODO — Portfolio Implementation

Source of truth: `spec.md`. Build incrementally and verify each stage (`pnpm lint` + `pnpm build` after each phase). Use clearly identifiable placeholder content (spec §53) — do not invent personal data, projects, or work history.

## Phase 0 — Project Setup

- [X] Verify `pnpm install` is complete and `pnpm dev` starts without errors
- [X] Wire up Tailwind CSS 4:
  - [X] Register `@tailwindcss/vite` plugin in `vite.config.ts`
  - [X] Add `@import "tailwindcss"` to `src/index.css`
  - [X] Confirm a Tailwind utility renders in dev
- [X] Remove Vite template scaffold (`App.tsx`, `App.css`, unused `src/assets/*.svg`, `src/assets/hero.png`)
- [X] Remove unused deps if not needed (verify each against spec)

## Phase 1 — Foundation

- [X] **Fonts** (spec §5): Montserrat (headings) + Inter (body); optimize loading, avoid render blocking
- [X] **Design tokens** (spec §4): primary background `#ffffff`, accent `#2ecc71`, neutrals (`#111827`, `#4b5563`, `#6b7280`, `#e5e7eb`, `#f9fafb`); map to Tailwind theme (`@theme` in CSS or CSS variables)
- [X] **Global styles**: reset, `scroll-behavior: smooth` (respecting reduced motion), base typography scale (spec §5), selection/focus styles
- [X] **Routing**: React Router with `/` rendering the full homepage; keep structure ready for future routes `/projects`, `/experience`, `/contact` (spec §2)
- [X] **Create folder structure** (spec §3):
  - [X] `src/components/{layout,ui,hero,projects,experience,skills,contact}/`
  - [X] `src/data/`, `src/hooks/`, `src/lib/`, `src/pages/`
- [X] **UI primitives** (spec §36): `Button`, `Badge`, `Card`, `Modal`, `Toast`, `SectionHeading`, `TechnologyTag`
- [X] **Layout shell**: `src/pages/Home.tsx` with `<Header />`, `<main>` (sections), `<Footer />`, plus `ProjectModal` + `Toast` mounted at app level (spec §43) — routing + shell skeleton in place; Header/Footer/sections composed in Phase 3

## Phase 2 — Data Layer (content-driven)

- [X] `src/data/profile.ts` — central config: name, role, email, availability, bio, social links (spec §35)
- [X] `src/data/projects.ts` — `Project` + `ProjectCategory` types, placeholder projects (spec §14, §53)
- [X] `src/data/experience.ts` — `Experience` type, placeholder entries (spec §19)
- [X] `src/data/skills.ts` — categories Frontend / Backend / Tooling (spec §21)
- [X] `src/data/socialLinks.ts` — only real/existing links, empty-safe (spec §24)
- [X] `src/hooks/useCopyToClipboard.ts` — `navigator.clipboard.writeText` + fallback/error (spec §2, §25)
- [X] `src/hooks/useIntersectionReveal.ts` — IntersectionObserver-based reveal (spec §12)
- [X] `src/lib/utils.ts` — small shared helpers (e.g. `cn`), no premature abstractions

## Phase 3 — Core Sections

- [X] **Header** (spec §7): sticky; transparent → blurred backdrop on scroll; logo/name + nav links (About, Projects, Experience, Skills, Contact) — desktop nav; mobile menu button ships in Phase 4
- [X] **Hero** (spec §8–11): availability badge, heading (role/value), supporting paragraph, primary CTA → `#projects`, secondary ghost CTA → `#contact`
- [X] **ProjectsSection** (spec §13): section heading + intro, filter bar, responsive card grid — grid rendered; filter bar ships in Phase 4
- [X] **ProjectCard** (spec §16): image placeholder, title, description, category, tech tags, optional links; border `#e5e7eb`, radius 8–12px, subtle hover `translateY`
- [X] **ExperienceSection** (spec §18): timeline with nodes (company, role, date, description, responsibilities, technologies) — static for now; accordion behavior in Phase 4
- [X] **SkillsSection** (spec §21–22): skill matrix grouped by category — badge hover affordance; project-highlight interaction in Phase 4
- [X] **ContactSection** (spec §24): heading, supporting text, email, Copy Email button, social links
- [X] **Footer** (spec §26): name/logo, social links, copyright, minimal

## Phase 4 — Interactions

- [X] **MobileMenu** (spec §7): menu button; slide-over/fullscreen panel; opacity + transform animation; body scroll lock; closes on nav select + Escape; keyboard accessible
- [X] **ProjectFilters** (spec §15): All / Frontend / Backend; no page reload; active state emerald; `aria-pressed`; empty state ("No projects found in this category")
- [X] **ProjectModal** (spec §17): quick view with name, visual, description, technologies, links; close button + Escape + backdrop click; focus management + ARIA; prevents background interaction; mobile-friendly
- [X] **ExperienceAccordion** (spec §20): one open at a time; semantic `<button>` triggers; `aria-expanded` / `aria-controls`
- [X] **Skill highlighting** (spec §22): skill click/tap → emphasize related projects, de-emphasize others; reset by re-clicking the active skill
- [X] **Clipboard + Toast** (spec §25): Copy Email → toast "Copied to clipboard!" 2–4s; accessible, graceful failure fallback

## Phase 5 — Motion

- [X] **Hero entrance** (spec §9): staggered fade + `translateY(20px)` — badge 0ms, heading 100ms, description 200ms, buttons 300ms; 400–700ms; no bouncy easing
- [X] **Scroll reveals** (spec §12): sections fade + translate in once, ~80% viewport; reuse hook
- [X] **Card hover** (spec §40): `translateY(-2px to -4px)` only under `@media (hover: hover)`
- [X] **Modal transitions**: opacity + small scale/translate on open/close
- [X] **Accordion transitions**: opacity + controlled height; avoid animating layout (spec §27)
- [X] **Mobile menu transitions**: opacity + transform only
- [X] **Reduced motion** (spec §28): `@media (prefers-reduced-motion: reduce)` disables decorative animation, large transforms, auto movement; functionality never depends on animation

## Phase 6 — Verification & Definition of Done

- [X] `pnpm lint` passes with no errors
- [X] `pnpm build` (typecheck + build) succeeds
- [X] No console errors in dev / preview
- [X] Manual functional checklist (spec §46):
  - [X] Button for download CV
  - [X] Navigation + mobile menu + Escape
  - [X] Project filters + modal + Escape/backdrop close
  - [X] Experience accordion
  - [X] Skill highlighting + reset
  - [X] Copy Email + toast + failure fallback
  - [X] External links open correctly (missing URLs handled)
- [X] Definition of Done checklist (spec §48) fully satisfied



//Warning never do this step if the skill are not installed


## Phase 7 — SEO & Quality

- [X] **SEO** (spec §33): `<title>`, meta description, Open Graph, Twitter/X cards, canonical placeholder, semantic HTML
- [X] **Accessibility** (spec §31): WCAG 2.2 AA — headings hierarchy, visible focus states, contrast, alt text, decorative images `alt=""`, buttons are `<button>` / links are `<a>`, no info via color alone
- [X] **Responsive** (spec §29–30): verify 320/375/390/430/768/1024/1280/1440px+; mobile nav, hero type, buttons, project grid (1/2/2–3 cols), modal, timeline, skill interactions, footer
- [X] **Performance** (spec §32): lazy-loaded images with dimensions, minimal JS, no unused deps, no render-blocking fonts
- [X] **Security** (spec §34): no secrets in frontend; `VITE_*` env only if needed
- [X] **Visual QA** (spec §51): check horizontal overflow, spacing, text wrapping, button gaps, modal overflow, timeline alignment, card height consistency, contrast, animation jumps