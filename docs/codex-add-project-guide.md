# Codex Add Project Guide

Use this guide in future Codex sessions when adding or replacing a project in this Astro portfolio.

## Prompt Templates

Use these prompts at the start of future Codex sessions. Paste the relevant prompt into Codex, then provide project notes and images.

### Add New Project With Codex

```text
Add a new portfolio project using the existing project content system.

Do not redesign the website.

Read docs/codex-add-project-guide.md and docs/manual-add-project-guide.md first.

Use only the project notes and images I provide.

Do not invent facts, clients, awards, metrics, user research findings, team size, or outcomes.

Create the project JSON, copy web-ready images into the correct folder, add tags, and include the project in PDF pages only if I explicitly ask.

After changes, run npm run build and summarise changed files.
```

### Replace Placeholder Project With Real Project

```text
Replace the placeholder project [PROJECT NAME] with the real project content I provide.

Keep the existing visual design.

Use confirmed facts only.

Update project title, slug if needed, summary, role, tags, images, sections, links, badges/logos, and PDF inclusion.

Do not invent metrics or awards.

Run npm run build and summarise changes.
```

### Add Project Images Only

```text
Add these images to the existing project [PROJECT NAME].

Do not change project text unless needed for image paths.

Place web-ready images in the correct public image folder.

Update thumbnail, hero, gallery, and alt text if I provide the descriptions.

Do not use original/private files in the public folder.
```

## Project Structure Overview

- Project data lives in `src/content/projects/*.json`.
- The JSON filename becomes the project id and URL slug.
- The schema is in `src/content.config.ts`.
- Project cards render through `src/components/ProjectCard.astro`.
- Project detail pages render through `src/pages/projects/[id].astro`.
- Flexible case-study text blocks render through `src/components/ProjectSections.astro`.
- PDF variants are selected by each project's `pdf` array and rendered through `src/pages/pdf/*.astro`.
- Public web images live in `public/images/projects/<project-slug>/`.
- Placeholder artwork lives in `public/images/projects/placeholders/project-placeholder.svg`.

## Do-not-change Rules

- Do not redesign the site.
- Do not change the visual identity unless explicitly requested.
- Do not remove current pages, routes, PDF pages or project pages.
- Do not replace the content system with a CMS, database or backend.
- Do not change tag filtering logic unless the user explicitly asks.
- Do not invent clients, awards, metrics, research findings, quotes, outcomes or responsibilities.
- Do not add private CV files, addresses, phone numbers, visa details or sensitive personal information to public pages.
- Do not copy large source originals into `public/`.

## How to Add Project Data

1. Read `src/content.config.ts`.
2. Copy an existing project JSON file in `src/content/projects/`.
3. Rename it to the project slug, for example `new-project.json`.
4. Update every required field:
   - `title`
   - `order`
   - `summary`
   - `year`
   - `status`
   - `projectType`
   - `role`
   - `tags`
   - `thumbnail`
   - `hero`
   - `placeholder`
   - `featured`
   - `externalLinks`
   - `pdf`
   - `sections`
5. Keep `placeholder: true` until the user provides enough confirmed detail and imagery.

## How to Add Images

1. Create `public/images/projects/<project-slug>/`.
2. Copy only web-ready images into that folder.
3. Keep originals in `_portfolio-source/` or outside the repository.
4. Use clear names such as:
   - `<project-slug>-01.jpg`
   - `<project-slug>-02.jpg`
   - `<project-slug>-03.jpg`
5. Update `thumbnail`, `hero`, split images and gallery images with public paths beginning with `/images/projects/`.
6. Add meaningful `imageAlt` and gallery `alt` text.

## How to Add Tags

Use confirmed tags only.

Visible Work page filters currently map to:

- `Industrial Design`
- `Interaction Design`
- `DFM`
- `Award / Competition` shown as `Awarded`
- `Project Management`
- `UX Research`

Additional tags can exist on project pages and cards, but do not add them casually. The site filters projects by tag values, not folder categories.

## How to Update the Work/Home Page

Usually do not edit `src/pages/work/index.astro`.

Only update it when the user asks to change the public filter list or filter labels. If adding a new public filter, make sure:

- the label is user-facing and readable
- the value matches a real project tag
- existing filtering still works
- `Awarded` keeps mapping to `Award / Competition` unless the user changes that rule

## How to Update PDF Versions

PDF inclusion is controlled by each project's `pdf` array:

```json
"pdf": ["product", "ux-ui", "project-management"]
```

Available values:

- `product`
- `ux-ui`
- `project-management`

Do not edit PDF page templates unless the user asks for layout changes.

## How to Update the Style Guide

Do not update the Style Guide for ordinary project additions.

Only update:

- `src/pages/style-guide.astro`
- `docs/STYLE_GUIDE.md`
- `public/images/style-guide/portfolio-style-guide.svg`

when the visual system itself changes.

## Preserve the Visual Design

Use existing components and fields. Avoid adding one-off page structures for a normal project.

Preferred path:

1. Add content JSON.
2. Add public images.
3. Use existing section types.
4. Run build.
5. Summarise what changed.

## Section Types

Supported section types:

- `text`
- `split`
- `highlights`
- `gallery`
- `quote`
- `links`
- `pdf-summary`

Do not add a new section type unless the user asks and the schema plus renderer are updated together.

## Honesty Rules

If source notes are incomplete:

- keep placeholder wording
- ask the user only when the missing detail changes the content meaning
- write `To be confirmed` rather than filling gaps
- avoid metric-style language unless real metrics are supplied

Never infer:

- client names
- award status
- user research methods
- user findings
- product outcomes
- team structure
- business results

## Build and Test

Run:

```sh
npm run build
```

If practical, also run the dev server and check:

- `/work/`
- `/projects/<project-slug>/`
- `/pdf/`
- relevant PDF variant page

Use mobile checks when layout or images changed.

## Summary Format

When finished, summarise:

- files changed
- project data added or updated
- images added
- tags used
- PDF variants updated
- build result
- assumptions or missing confirmed content
