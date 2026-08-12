# Portfolio Website — Technical & Design Specification

## 1. Project Overview

Build a modern, responsive, highly polished personal portfolio website using **React**.

The website should communicate three things immediately:

1. Who I am.
2. What I build.
3. Why someone should contact or hire me.

The visual language should be minimal, premium, modern, and developer-focused without looking like a generic template.

The implementation must prioritize:

* Excellent responsive behavior.
* Accessibility.
* Performance.
* Clean component architecture.
* Subtle motion.
* Strong typography.
* Clear visual hierarchy.
* Maintainable React code.
* Mobile-first implementation.
* Progressive enhancement.

The website must feel intentional and professional rather than overloaded with animations or decorative elements.

---

# 2. Technology Stack

## Core

* **React**
* **TypeScript**
* **Vite**

Use functional React components and React hooks.

Do not use class components.

---

## Styling

Use:

* **Tailwind CSS** for utility-first styling.
* CSS variables for global design tokens where appropriate.
* Minimal custom CSS for animations and behaviors that are difficult to express cleanly through utilities.

Do not introduce a large CSS framework in addition to Tailwind.

---

## Icons

Use:

* **Lucide React**

Icons should be used consistently throughout the interface.

Do not use emoji as UI icons.

---

## Animation

Use:

* **Framer Motion**

Use Framer Motion only where it provides meaningful interaction or page-transition value.

Do not animate everything.

Animations must remain lightweight and must respect:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled, transitions should be minimized or removed.

---

## Routing

Use:

* **React Router**

The initial website can be a single-page portfolio, but structure the application so additional pages can be introduced later.

Potential future routes:

```text
/
/projects
/experience
/contact
```

For the first implementation, `/` should contain the complete portfolio experience.

---

## Forms

If a contact form is implemented, use:

* React controlled inputs.
* Client-side validation.
* Accessible labels.
* Clear success/error states.

Do not implement a fake backend.

If no backend is available, prioritize a mailto/contact CTA instead.

---

## Clipboard

Use the native browser Clipboard API:

```ts
navigator.clipboard.writeText(...)
```

The "Copy Email" interaction should not require an external library.

---

# 3. Project Architecture

Use a clean feature-oriented structure.

Recommended structure:

```text
src/
├── assets/
│   └── images/
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Footer.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Toast.tsx
│   │   └── SectionHeading.tsx
│   │
│   ├── hero/
│   │   └── Hero.tsx
│   │
│   ├── projects/
│   │   ├── ProjectsSection.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectFilters.tsx
│   │   └── ProjectModal.tsx
│   │
│   ├── experience/
│   │   ├── ExperienceSection.tsx
│   │   ├── ExperienceItem.tsx
│   │   └── ExperienceTimeline.tsx
│   │
│   ├── skills/
│   │   ├── SkillsSection.tsx
│   │   ├── SkillBadge.tsx
│   │   └── SkillMatrix.tsx
│   │
│   └── contact/
│       └── ContactSection.tsx
│
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   ├── skills.ts
│   └── socialLinks.ts
│
├── hooks/
│   ├── useCopyToClipboard.ts
│   └── useIntersectionReveal.ts
│
├── lib/
│   └── utils.ts
│
├── pages/
│   └── Home.tsx
│
├── App.tsx
├── main.tsx
└── index.css
```

Keep content/data separate from presentation components.

Portfolio content should be represented as typed objects rather than hardcoded repeatedly inside JSX.

---

# 4. Design System

## 4.1 Color Tokens

Primary background:

```text
#ffffff
```

Optional secondary/background contrast:

```text
#f9fafb
```

Primary accent:

```text
#2ecc71
```

The emerald green accent must be used selectively.

Use it for:

* CTA buttons.
* Active states.
* Availability indicator.
* Focus indicators.
* Interactive links when appropriate.
* Selected project filters.
* Success toast.
* Small visual emphasis.

Do NOT use the green as the dominant page background.

---

## 4.2 Neutral Colors

Primary text:

```text
#111827
```

Secondary text:

```text
#4b5563
```

Muted text:

```text
#6b7280
```

Borders:

```text
#e5e7eb
```

Subtle background:

```text
#f9fafb
```

White:

```text
#ffffff
```

---

# 5. Typography

Use a modern typography pairing.

Preferred:

### Headings

```text
Montserrat
```

Fallback:

```text
Poppins
```

### Body

```text
Inter
```

Fallback:

```text
Open Sans
```

If external font loading is used, optimize loading and avoid blocking rendering unnecessarily.

Typography should have a strong hierarchy.

Suggested scale:

```text
Hero title:
clamp(2.75rem, 7vw, 6rem)

Section title:
clamp(2rem, 4vw, 3.5rem)

Large body:
1.125rem–1.25rem

Body:
1rem

Small:
0.875rem
```

Avoid excessive font sizes on mobile.

---

# 6. Layout

The website should use a centered responsive container.

Suggested maximum width:

```text
1200px
```

Horizontal padding:

```text
mobile: 20px
tablet: 32px
desktop: 40px
```

Use generous vertical spacing.

Sections should generally have:

```text
padding-block: 96px
```

On mobile:

```text
padding-block: 64px
```

Avoid excessive empty space that pushes important content too far down.

---

# 7. Header & Navigation

Create a fixed or sticky header.

Desktop:

```text
Logo / Name
        About
        Projects
        Experience
        Skills
        Contact
```

Navigation should scroll smoothly to page sections.

Header behavior:

* Transparent or minimal background initially.
* Add subtle backdrop blur/background when scrolling.
* Maintain high readability over all sections.
* Never obscure content.

Desktop navigation should remain simple.

---

## Mobile Navigation

On mobile:

* Replace desktop navigation with a menu button.
* Open a slide-over or fullscreen navigation panel.
* Animate the menu using opacity + transform.
* Lock body scroll while the menu is open.
* Close menu after selecting a navigation item.
* Support Escape to close.
* Ensure keyboard accessibility.

Do not create complex spring animations.

---

# 8. Hero Section

The hero is the most important section.

Suggested structure:

```text
[Available for opportunities]

Hi, I'm [NAME].

I build thoughtful digital
experiences for the web.

[View my work] [Get in touch]

Short supporting paragraph.
```

The heading should immediately communicate the user's role/value.

Example conceptual copy:

> I build thoughtful digital experiences for the web.

Do not automatically use this exact copy if personal content is available elsewhere.

---

## Availability Badge

Display:

```text
• Available for opportunities
```

The bullet may use the primary green.

The badge should have:

* Small rounded pill.
* Very subtle green tint.
* Green indicator.
* Accessible text.

Do not make the indicator excessively animated.

If animated, use a very subtle opacity/pulse effect and disable it under reduced motion.

---

# 9. Hero Animation

On initial page load:

1. Availability badge fades in.
2. Heading fades in + translates upward approximately 20px.
3. Supporting text follows.
4. CTA buttons follow.

Suggested stagger:

```text
badge: 0ms
heading: 100ms
description: 200ms
buttons: 300ms
```

Animation duration:

```text
400–700ms
```

Use easing that feels smooth and professional.

Do not use exaggerated bounce animations.

---

# 10. Primary CTA

Primary button:

```text
Background: #2ecc71
Text: dark/white depending on contrast validation
```

The button should have:

* Rounded corners.
* Clear hover state.
* Clear focus state.
* Active state.
* Keyboard accessibility.

Possible actions:

```text
View my work
```

Scroll to:

```text
#projects
```

---

# 11. Secondary CTA

Secondary CTA should be a ghost/outline button.

Example:

```text
Get in touch
```

Scroll to:

```text
#contact
```

It should not visually compete with the primary CTA.

---

# 12. Scroll Reveal System

Implement a reusable scroll reveal mechanism.

Preferred implementation:

```text
IntersectionObserver
```

or Framer Motion's viewport APIs.

Sections should begin slightly transparent and translated vertically.

Suggested initial state:

```text
opacity: 0
transform: translateY(20px)
```

Visible:

```text
opacity: 1
transform: translateY(0)
```

Trigger when approximately:

```text
80% of viewport
```

is appropriate.

Do not animate entire pages continuously.

Each section should generally animate once.

---

# 13. Projects Section

Create an interactive projects portfolio.

Section structure:

```text
Projects
Selected work demonstrating what I build.

[All] [Frontend] [Backend]

Project cards...
```

---

# 14. Project Data Model

Projects should be stored in:

```text
src/data/projects.ts
```

Example shape:

```ts
export type ProjectCategory = "frontend" | "backend";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}
```

Keep this extensible.

---

# 15. Project Filters

Filters:

```text
All
Frontend
Backend
```

Clicking a filter should update the displayed cards.

Requirements:

* No page reload.
* Active state uses emerald green.
* Filter transitions should be subtle.
* Keyboard accessible.
* Filter buttons should expose appropriate accessibility state.

For example:

```html
aria-pressed="true"
```

when appropriate.

---

# 16. Project Cards

Each card should include:

* Project image/visual.
* Project title.
* Short description.
* Category.
* Technology tags.
* Optional links.

Card design:

```text
border: 1px solid #e5e7eb
border-radius: 8px–12px
box-shadow: 0 4px 12px rgba(0,0,0,0.05)
```

Cards should have subtle hover movement.

Allowed:

```text
transform: translateY(...)
```

Avoid:

```text
filter blur
large scale
3D rotation
heavy shadows
```

---

# 17. Project Quick View Modal

Clicking a project should open a quick-view modal.

Modal should contain:

* Project name.
* Larger project visual.
* Description.
* Technologies.
* Live project link.
* GitHub link where available.

Requirements:

* Close button.
* Escape closes modal.
* Clicking backdrop can close.
* Keyboard focus management.
* Appropriate ARIA semantics.
* Prevent background interaction while open.
* Mobile-friendly layout.

Do not make the modal unnecessarily complex.

---

# 18. Experience Section

Create an expandable career timeline.

Visual concept:

```text
●──── Role
│
●──── Previous Role
│
●──── Earlier Role
```

Each experience node should be expandable.

Collapsed:

```text
Company
Role
Date
```

Expanded:

```text
Company
Role
Date

Description

Responsibilities

Technology stack
```

---

# 19. Experience Data Model

Store experience in:

```text
src/data/experience.ts
```

Suggested type:

```ts
export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}
```

---

# 20. Experience Accordion

Clicking/tapping an experience item expands it.

Rules:

* Only one item needs to be open at a time, unless there is a strong UX reason otherwise.
* Expansion should animate height/opacity carefully.
* Avoid animating layout excessively.
* Keyboard accessible.
* Use semantic buttons for accordion triggers.
* Expose state using ARIA attributes.

Example:

```text
aria-expanded
aria-controls
```

---

# 21. Skills Section

Create a visual skill matrix.

Skills should include technologies relevant to the actual portfolio.

Initial technology categories should support:

### Frontend

* React
* TypeScript
* JavaScript
* HTML
* CSS
* Tailwind CSS
* Framer Motion

### Backend

* Node.js
* Express
* REST APIs

### Tooling

* Git
* GitHub
* Vite
* ESLint
* Prettier

Only display technologies that genuinely represent the developer.

The data structure must remain easy to modify.

---

# 22. Skill Matrix Interaction

When a user hovers/taps a skill:

1. Highlight that skill.
2. Highlight project cards using that technology.
3. Reduce emphasis on unrelated projects.

Example:

Selecting:

```text
React
```

should visually emphasize projects containing:

```ts
"React"
```

in their technology list.

On mobile, use tap interaction instead of hover.

There must always be a way to reset the highlighted skill.

---

# 23. Hover Behavior

Hover effects must only apply when the device supports hover.

Use:

```css
@media (hover: hover)
```

Do not rely on hover-only interactions.

Every important interaction must also work through:

* Mouse.
* Keyboard.
* Touch.

---

# 24. Contact Section

The contact section should be simple and direct.

Example:

```text
Let's build something useful.

Have a project, opportunity, or idea?
Let's talk.

[email]

[Copy Email]
```

Include social links where appropriate.

Potential platforms:

* GitHub
* LinkedIn
* X/Twitter
* Other relevant professional networks

Only include links that actually exist.

---

# 25. Copy Email Interaction

Implement a one-click email copy button.

Behavior:

```text
Click "Copy Email"
        ↓
navigator.clipboard.writeText(email)
        ↓
Show toast
        ↓
"Copied to clipboard!"
```

Toast duration:

```text
2–4 seconds
```

Requirements:

* Accessible feedback.
* Works on supported browsers.
* Graceful fallback/error behavior.
* Do not expose the email in multiple unnecessary locations.

---

# 26. Footer

Footer should contain:

* Name/logo.
* Copyright.
* Social links.
* Optional navigation links.

Keep it minimal.

Example:

```text
[Name]

GitHub · LinkedIn · Email

© 2026 [Name]. All rights reserved.
```

---

# 27. Motion System

The website must follow a strict motion philosophy.

## Allowed

Prefer:

```css
transform: translateY()
transform: scale()
opacity
```

These should generally be GPU-friendly.

## Avoid

Do not animate:

```text
width
height
top
left
margin
padding
font-size
box-shadow excessively
```

when a transform/opacity alternative exists.

Avoid large layout shifts.

---

# 28. Reduced Motion

The website MUST support:

```css
@media (prefers-reduced-motion: reduce)
```

When enabled:

* Disable decorative animations.
* Remove large transforms.
* Reduce transition duration.
* Avoid automatic animated movement.
* Keep content immediately readable.

Functionality must never depend on animation.

---

# 29. Responsive Design

The website must work across:

```text
320px
375px
390px
430px
768px
1024px
1280px
1440px+
```

Mobile must not simply be a smaller desktop layout.

Explicitly optimize:

* Navigation.
* Hero typography.
* Button layout.
* Project grid.
* Modal dimensions.
* Timeline.
* Skill interactions.
* Footer.

---

# 30. Responsive Project Grid

Suggested behavior:

```text
Mobile:
1 column

Tablet:
2 columns

Desktop:
2–3 columns
```

Do not force three columns if project descriptions become too compressed.

Cards must maintain comfortable reading widths.

---

# 31. Accessibility

Target:

```text
WCAG 2.2 AA
```

Requirements:

* Semantic HTML.
* Keyboard navigation.
* Visible focus states.
* Sufficient color contrast.
* Proper heading hierarchy.
* Alt text for meaningful images.
* Decorative images marked appropriately.
* Buttons must use `<button>`.
* Links must use `<a>`.
* Modals must manage focus.
* Accordions must expose state.
* Navigation must be keyboard accessible.
* Form fields must have labels.
* Do not communicate information through color alone.

---

# 32. Performance

Prioritize:

* Minimal JavaScript.
* Lazy-loaded project images.
* Proper image dimensions.
* Optimized assets.
* Avoid unnecessary dependencies.
* Avoid large animation libraries beyond required functionality.
* Avoid rendering hidden components unnecessarily.

Target excellent Lighthouse scores.

The site should feel fast even on mid-range mobile devices.

---

# 33. SEO

Add:

* Page title.
* Meta description.
* Open Graph metadata.
* Twitter/X metadata where appropriate.
* Canonical URL placeholder.
* Semantic HTML.

Example title:

```text
[Name] — Software Developer
```

Do not hardcode placeholder personal information once real information becomes available.

---

# 34. Security

Do not:

* Expose API keys.
* Put secrets in the frontend.
* Store credentials in source code.
* Add unnecessary third-party scripts.

All environment variables must use Vite conventions:

```text
VITE_*
```

Only public configuration belongs in frontend environment variables.

---

# 35. Content Configuration

Personal information should be easy to modify.

Create a central configuration/data file.

Example:

```ts
export const profile = {
  name: "Your Name",
  role: "Software Developer",
  email: "you@example.com",
  availability: true,
  bio: "...",
};
```

Social links should also be data-driven.

This allows the portfolio content to be updated without modifying component logic.

---

# 36. Component Principles

Components should follow these rules:

### Small responsibilities

Avoid giant components such as:

```text
Portfolio.tsx
```

containing the entire site.

Instead use:

```text
Hero
ProjectsSection
ExperienceSection
SkillsSection
ContactSection
Footer
```

### Reusability

Create reusable components for:

```text
Button
Badge
Card
Modal
Toast
SectionHeading
TechnologyTag
```

### Data-driven rendering

Prefer:

```tsx
projects.map(...)
```

over duplicating project markup.

---

# 37. State Management

Do NOT add Redux or another global state library unless the application genuinely requires it.

Local React state is sufficient for:

* Mobile menu.
* Active project filter.
* Selected project.
* Open experience item.
* Active skill.
* Toast visibility.

Use Context only if a genuine shared-state requirement appears.

Avoid unnecessary abstraction.

---

# 38. Error & Empty States

Project filtering must handle an empty result gracefully.

For example:

```text
No projects found in this category.
```

Clipboard failures should provide a useful fallback message.

External links should safely handle missing URLs.

---

# 39. Browser Compatibility

Target modern browsers:

* Chrome
* Edge
* Firefox
* Safari
* Mobile Safari
* Chrome Android

Do not depend on experimental browser APIs without a fallback.

---

# 40. Interaction Rules

The interface should feel responsive without feeling animated for the sake of animation.

### Buttons

Hover:

```text
small visual change
```

Active:

```text
subtle scale/opacity change
```

Focus:

```text
clear green focus ring
```

### Cards

Hover:

```text
translateY(-2px to -4px)
```

### Links

Hover:

```text
color/opacity transition
```

### Modals

Opening:

```text
opacity + small scale/translate
```

Closing:

```text
opacity + transform
```

### Accordion

Opening:

```text
opacity + controlled height animation
```

Do not create excessive movement.

---

# 41. Visual Hierarchy

The design should follow this hierarchy:

```text
1. Hero headline
2. Primary CTA
3. Projects
4. Experience
5. Skills
6. Contact
7. Footer
```

The accent green should guide the eye rather than dominate it.

The interface should remain primarily white, neutral, and typographic.

---

# 42. Design Anti-Patterns

Do NOT implement:

* Excessive gradients.
* Glassmorphism everywhere.
* Huge animated backgrounds.
* Particle systems.
* Excessive 3D.
* Constant floating animations.
* Excessive rounded pills.
* Random decorative blobs.
* Excessive shadows.
* Auto-playing video backgrounds.
* Cursor-following effects.
* Fake loading screens.
* Excessive parallax.
* Neon colors.
* Generic AI-generated dashboard aesthetics.

The website should feel like a high-quality engineering portfolio.

---

# 43. Initial Page Structure

The homepage should render approximately:

```text
<App>
  <Header />

  <main>
    <Hero />

    <ProjectsSection />

    <ExperienceSection />

    <SkillsSection />

    <ContactSection />
  </main>

  <Footer />

  <ProjectModal />

  <Toast />
</App>
```

---

# 44. Section IDs

Use:

```html
<section id="about">
<section id="projects">
<section id="experience">
<section id="skills">
<section id="contact">
```

The hero represents the about/introduction area.

---

# 45. Navigation

Navigation labels:

```text
About
Projects
Experience
Skills
Contact
```

Navigation should use anchor scrolling.

Use:

```css
scroll-behavior: smooth;
```

but respect reduced-motion preferences.

---

# 46. Testing Requirements

Before considering the implementation complete, verify:

### Functional

* Navigation works.
* Mobile menu works.
* Project filters work.
* Project modal works.
* Experience accordion works.
* Skill highlighting works.
* Copy email works.
* External links work.
* Escape closes modal/menu where appropriate.

### Responsive

Test:

```text
320px
375px
768px
1024px
1440px
```

### Accessibility

Verify:

* Keyboard navigation.
* Focus visibility.
* Modal focus handling.
* Accordion semantics.
* Contrast.
* Screen-reader labels.
* Reduced-motion behavior.

### Performance

Verify:

* No unnecessary layout shifts.
* Images are optimized.
* Animations use transform/opacity where possible.
* No console errors.
* No unnecessary dependencies.

---

# 47. Development Workflow

The implementation should proceed in this order:

## Phase 1 — Foundation

1. Initialize React + TypeScript + Vite.
2. Configure Tailwind CSS.
3. Configure fonts.
4. Configure global CSS variables.
5. Configure routing.
6. Create base layout.
7. Create reusable UI primitives.

## Phase 2 — Core Sections

Implement:

1. Header.
2. Hero.
3. Projects.
4. Experience.
5. Skills.
6. Contact.
7. Footer.

## Phase 3 — Interactions

Implement:

1. Mobile navigation.
2. Project filters.
3. Project modal.
4. Experience accordion.
5. Skill/project highlighting.
6. Clipboard toast.

## Phase 4 — Motion

Implement:

1. Hero entrance.
2. Scroll reveals.
3. Card hover.
4. Modal transitions.
5. Accordion transitions.
6. Mobile menu transitions.

Then add reduced-motion handling.

## Phase 5 — Quality

Verify:

1. Accessibility.
2. Responsive layout.
3. Performance.
4. SEO.
5. Console errors.
6. Keyboard navigation.
7. Mobile touch behavior.

---

# 48. Definition of Done

The project is complete only when:

* [ ] React + TypeScript application is working.
* [ ] Vite build succeeds.
* [ ] Tailwind is configured.
* [ ] Design tokens are implemented.
* [ ] Header/navigation works.
* [ ] Mobile menu works.
* [ ] Hero is implemented.
* [ ] Hero entrance animation works.
* [ ] Projects are data-driven.
* [ ] Project filtering works.
* [ ] Project quick-view modal works.
* [ ] Experience timeline works.
* [ ] Experience accordion works.
* [ ] Skills are data-driven.
* [ ] Skill/project highlighting works.
* [ ] Contact section works.
* [ ] Copy Email works.
* [ ] Toast notification works.
* [ ] Footer works.
* [ ] Responsive behavior is verified.
* [ ] Reduced-motion behavior works.
* [ ] Keyboard navigation works.
* [ ] Accessibility requirements are satisfied.
* [ ] SEO metadata exists.
* [ ] No console errors.
* [ ] Production build succeeds.
* [ ] No unnecessary dependencies have been introduced.

---

# 49. Agent Implementation Rules

The coding agent must treat this document as the source of truth.

Before implementing:

1. Inspect the existing repository.
2. Inspect `package.json`.
3. Inspect existing source files.
4. Reuse existing infrastructure where appropriate.
5. Do not overwrite working code unnecessarily.
6. Identify missing dependencies.
7. Install only dependencies that are justified by this specification.

If an existing project already uses a framework/tool that conflicts with this specification, preserve the existing architecture where possible and explain the deviation.

Do not introduce dependencies simply because they are convenient.

---

# 50. Agent Quality Rules

The agent must:

* Write production-quality TypeScript.
* Avoid `any` unless absolutely necessary.
* Keep components readable.
* Keep business/content data separate from UI.
* Avoid duplicated code.
* Avoid premature abstractions.
* Prefer simple React state.
* Keep animations subtle.
* Test interactions after implementing them.
* Check mobile layouts.
* Check accessibility.
* Fix TypeScript errors.
* Fix lint errors.
* Fix build errors.
* Never leave obvious TODOs for required functionality.

---

# 51. Visual QA Rules

After implementation, the agent should inspect the final application visually.

Check for:

* Horizontal overflow.
* Broken responsive layouts.
* Incorrect spacing.
* Text wrapping problems.
* Buttons touching each other.
* Modal overflow.
* Timeline alignment.
* Inconsistent card heights.
* Poor contrast.
* Broken mobile navigation.
* Animation/layout jumps.

The final result should look intentional at every viewport.

---

# 52. Final Implementation Philosophy

The goal is NOT to build the most technically complicated portfolio.

The goal is to build a portfolio that communicates:

```text
Strong engineering
+
Strong product/design judgment
+
Attention to detail
+
Professionalism
```

Prefer:

```text
Simple
Fast
Accessible
Responsive
Elegant
Maintainable
```

over:

```text
Complex
Animated
Over-engineered
Decorative
```

Every visual or technical decision should support the user's personal brand and make the portfolio easier to understand.

---

# 53. Placeholder Content Strategy

Until real personal information is provided, use clearly identifiable placeholders.

Example:

```text
Your Name
Software Developer
you@example.com
```

Do not invent:

* Employment history.
* Companies.
* Clients.
* Project metrics.
* Awards.
* Testimonials.
* Certifications.
* GitHub repositories.
* Social profiles.

Placeholder content should be easy to replace through the data files.

---

# 54. Expected Final Experience

The final site should feel like:

> A premium developer portfolio with a clean white foundation, emerald interactive accents, strong typography, restrained motion, interactive project exploration, expandable career history, and a technically polished responsive implementation.

It should be immediately usable on:

```text
mobile
tablet
desktop
```

and should feel equally intentional across all three.

---

# 55. First Agent Task

When the coding agent starts, it should first run an initialization/inspection phase.

The agent should:

1. Read this `spec.md`.
2. Inspect the repository.
3. Determine whether React/Vite/TypeScript/Tailwind already exist.
4. Determine what must be installed.
5. Establish the project architecture.
6. Create the initial application shell.
7. Implement the design tokens.
8. Implement the layout.
9. Begin implementation section by section.

Do not immediately create every feature in one giant file.

Build incrementally and verify each stage.

---

# 56. Important Instruction

**Do not treat the specification as a suggestion.**

Use it as the implementation contract.

When a design decision is not explicitly specified, choose the simplest implementation consistent with:

```text
Accessibility
Performance
Responsive design
Maintainability
Visual restraint
```

Do not add unnecessary features.

Do not add decorative complexity without a clear UX purpose.
