# AGENTS.md

## Purpose

This project is a strictly defined static website built with Astro.

The agent MUST follow requirements precisely and produce a production-ready implementation.
Do NOT improvise, expand scope, or introduce features that are not explicitly requested.

---

## Core Rules (MANDATORY)

1. Do NOT add features that are not specified.
2. Do NOT change the architecture.
3. Do NOT replace technologies.
4. Do NOT simplify requirements.
5. Do NOT generate placeholder implementations unless explicitly requested.

If something is unclear:

- make the safest minimal assumption
- continue execution without expanding scope

---

## Execution Behavior

- Work iteratively until all requirements are fully satisfied
- If output is incomplete, continue generating
- Do NOT stop early
- Do NOT explain decisions unless explicitly asked
- Output must be usable code, not drafts

---

## Tech Stack (FIXED)

- Astro v6 (SSG only)
- Tailwind CSS v4
- Strict TypeScript
- Astro Content Collections (with Zod)

These technologies are NOT negotiable.

---

## Architecture Constraints

- Content-driven architecture (no hardcoded pages)
- Use collections for all dynamic content
- Components must be reusable and isolated
- Clear separation:
    - content
    - components
    - layout
    - pages

- No global state unless strictly necessary
- No unnecessary client-side JavaScript

---

## Content Rules

- Content comes from structured Markdown (frontmatter-driven)
- Do NOT rely on raw Markdown body for core data
- All fields must be typed and validated (Zod)

---

## UI & Design Constraints

- Use Tailwind v4 only
- Implement design tokens (colors, spacing, typography)
- Maintain a clean editorial design
- Prioritize readability and hierarchy

- No inline styles
- No arbitrary design decisions outside defined system

---

## Components

- Must be reusable
- Must be typed
- Must NOT contain hardcoded content
- Must receive data via props only

---

## Images

- **ALWAYS** use `<Image>` from `astro:assets` — NEVER use raw `<img>`
- The only permitted exception is when `src` is a runtime string that cannot be resolved at build time (e.g. book covers not yet on disk). In that case use `<img>` and add a comment explaining why.
- Always import: `import { Image } from 'astro:assets';`
- Always provide `width` and `height` as numbers (not strings)
- Always include `alt` text (empty string `alt=""` only for decorative images, combined with `aria-hidden="true"`)
- Always set `loading="lazy"` except for above-the-fold images which must use `loading="eager"` and `fetchpriority="high"`
- Must be responsive and optimized

---

## Map (Leaflet)

- Must be client-only (no SSR)
- Must be lazy loaded
- Must NOT affect global bundle

---

## SEO (MANDATORY)

- Dynamic meta tags
- Open Graph
- Twitter cards
- Canonical URLs
- Structured data (JSON-LD)

- Generate sitemap.xml

---

## Performance

- Minimal JavaScript
- Use islands ONLY where required
- Avoid hydration unless necessary
- Optimize images and fonts

Target: Lighthouse score ≥ 95

---

## TypeScript

- Strict mode enabled
- No `any`
- Full type safety across content and components

---

## Deployment

- Must be compatible with Vercel
- Static output only
- No server-side runtime

---

## Validation Checklist (Before Finishing)

The agent MUST verify:

- All routes exist and work
- Content is fully rendered from collections
- No hardcoded data in components
- Images are optimized and responsive
- SEO tags are correctly generated
- No unnecessary JavaScript is included
- Build runs without errors
- TypeScript has zero errors

If any check fails:
→ FIX IT before finishing

---

## Final Constraint

Do NOT:

- add animations unless required
- add libraries not specified
- redesign structure
- invent content

Stay within scope.
Deliver exactly what is requested.
