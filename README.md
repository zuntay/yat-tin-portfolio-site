# Yat Tin Lee Portfolio

Astro portfolio site for Yat Tin Lee, a multidisciplinary designer working across industrial design, project management, UI/UX and research. The site uses one project content system for the Work page, project detail pages and browser-printable PDF portfolios.

## Local Development

```sh
npm install
npm run dev
```

Build and preview:

```sh
npm run build
npm run preview
```

The project expects Node `>=22.12.0`.

## Folder Structure

```text
src/content/projects/          Project JSON files
src/content.config.ts          Project schema and field rules
src/pages/work/                Work/Home page and tag filtering
src/pages/projects/[id].astro  Generated project detail pages
src/pages/pdf/                 Printable portfolio routes
src/components/                Shared cards, sections, PDF and filter components
src/styles/global.css          Site-wide visual system
public/images/projects/        Web-ready project images
docs/                          Maintenance, deployment and style guides
```

Large originals and working files should stay outside public assets. `_portfolio-source/` is ignored by Git and can be used for local source material.

## Add or Update a Project

1. Add web-ready images to `public/images/projects/<project-slug>/`.
2. Copy an existing file in `src/content/projects/`.
3. Rename it to `<project-slug>.json`.
4. Fill in confirmed title, year, status, role, summary, tags, images and sections.
5. Keep `placeholder: true` until the case study is ready.
6. Choose PDF inclusion with `pdf`: `product`, `ux-ui`, and/or `project-management`.
7. Run `npm run build`.

Full guide: `docs/manual-add-project-guide.md`.

Future Codex sessions should follow: `docs/codex-add-project-guide.md`.

## Maintenance Guides

- Manual project guide: `docs/manual-add-project-guide.md`
- Codex project guide: `docs/codex-add-project-guide.md`
- Deployment checklist: `docs/deployment-checklist.md`
- Visual system guide: `docs/STYLE_GUIDE.md`
- Visual guidebook page: `/guidebook/`
- Local maintenance overview: `/maintenance-guide/`

The guidebook and maintenance routes are intentionally not in the main navigation.

Use `docs/manual-add-project-guide.md` when adding projects manually. Use `docs/codex-add-project-guide.md` when asking Codex to add or replace a project with AI assistance.

To export the guidebook as a PDF, open `/guidebook/` in the browser, choose **File → Print**, then select **Save as PDF**.

## Printable Portfolios

Open `/pdf/`, choose a role-focused version, then use the browser print dialog and select **Save as PDF**. Print CSS uses A4 pages, removes site navigation and preserves background colours.

## Deployment Notes

Before publishing:

```sh
npm run build
find public src docs -type f -size +5M -print
```

Then commit and push to GitHub. For Vercel:

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`

Use `docs/deployment-checklist.md` before connecting or updating the live site.

## Content Safety

Do not add unconfirmed clients, awards, metrics, research findings, quotes or outcomes. Do not publish private CV files, phone numbers, addresses, visa details or sensitive personal information. Use placeholder wording until source material is confirmed.
