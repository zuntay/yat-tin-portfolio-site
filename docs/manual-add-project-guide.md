# Manual Add Project Guide

This guide is for adding or replacing portfolio projects by hand, without Codex. It is written for future-you: a designer who may remember the portfolio story, but not the technical structure.

The core rule is simple: use confirmed material only. If a detail is not confirmed, leave it out or keep the project as a placeholder.

## How to Use This Guide

Use these apps:

- **Finder** for moving image files.
- **Preview, Photoshop, Illustrator, Figma or another image app** for exporting web-ready images.
- **VS Code or the Codex editor** for editing project JSON files.
- **Terminal** for running commands.
- **Browser** for checking the local site and exporting PDF pages.
- **GitHub** for backup.
- **Vercel dashboard** for deployment.

When you see a code block, read the label above it first. The label tells you where to paste it.

## Quick Folder Map

| What you edit | Where it lives | App to use |
| --- | --- | --- |
| Project data | `src/content/projects/<project-slug>.json` | VS Code / Codex editor |
| Website images | `public/images/projects/<project-slug>/` | Finder |
| Source/original images | `_portfolio-source/Projects/<project-slug>/Images/source-originals/` | Finder |
| Web-ready image staging | `_portfolio-source/Projects/<project-slug>/Images/web-ready/` | Finder |
| Project schema | `src/content.config.ts` | Usually do not edit |
| Work page filters | `src/pages/work/index.astro` | Usually do not edit |
| Project cards | `src/components/ProjectCard.astro` | Usually do not edit |
| Project pages | `src/pages/projects/[id].astro` | Usually do not edit |
| Printable portfolios | `src/pages/pdf/*.astro` | Usually do not edit |

## Safe Manual Workflow

1. Choose a project slug.
2. Create image folders.
3. Put originals in `_portfolio-source`.
4. Export web-ready images.
5. Copy an existing project JSON file.
6. Replace the project fields with confirmed content.
7. Choose tags.
8. Add section blocks.
9. Choose PDF inclusion.
10. Run the site locally.
11. Run a production build.
12. Check large/private files.
13. Commit and push to GitHub.
14. Check the Vercel deployment.

## Choose a Project Slug

The slug becomes the project URL.

Good slugs:

- `touch-of-time`
- `company-website-design`
- `new-product-concept`

Avoid spaces, capitals and punctuation. Use lowercase words with hyphens.

Example route:

```text
/projects/new-product-concept/
```

## Copy-paste Command Templates

### Create a New Project Folder

Use this when starting a new project.

**Paste in Terminal**

```bash
cd ~/Documents/yat-tin-portfolio-site || exit

PROJECT_SLUG="new-project-slug"

mkdir -p "public/images/projects/$PROJECT_SLUG"
mkdir -p "_portfolio-source/Projects/$PROJECT_SLUG/Images/source-originals"
mkdir -p "_portfolio-source/Projects/$PROJECT_SLUG/Images/web-ready"
```

What it does:

- creates the public website image folder
- creates a private-ish local source-originals folder
- creates a local web-ready staging folder

After running it, replace `new-project-slug` with your real slug if you have not already.

### Create a Project JSON File From an Existing Project

Use this after choosing the slug.

**Paste in Terminal**

```bash
cd ~/Documents/yat-tin-portfolio-site || exit

PROJECT_SLUG="new-project-slug"

cp src/content/projects/mobento.json "src/content/projects/$PROJECT_SLUG.json"
open "src/content/projects/$PROJECT_SLUG.json"
```

What it does:

- copies the existing placeholder project file
- creates a new JSON file
- opens it for editing

### Check for Large Files

Run this before committing.

**Run before committing — Paste in Terminal**

```bash
cd ~/Documents/yat-tin-portfolio-site || exit

find public src docs -type f -size +5M -print
```

What it does:

- lists any files over 5MB in public website folders
- helps catch original files before they are uploaded

If it prints nothing, that is good.

### Test Locally

Use this to preview the site on your computer.

**Paste in Terminal**

```bash
cd ~/Documents/yat-tin-portfolio-site || exit

npm run dev
```

Then open the local URL in your browser, usually:

```text
http://localhost:4321/
```

Stop the local server with `Control + C` in Terminal.

### Build Before Commit

Run this before committing or deploying.

**Run before committing — Paste in Terminal**

```bash
cd ~/Documents/yat-tin-portfolio-site || exit

npm run build
```

What it does:

- checks that Astro can build every route
- validates project JSON against the content schema
- catches broken JSON structure before publishing

### Git Commit and Push

Use this after the site builds successfully.

**Run before deploying — Paste in Terminal**

```bash
cd ~/Documents/yat-tin-portfolio-site || exit

git status
git add .
git commit -m "Add new portfolio project"
git push
```

What it does:

- shows changed files
- stages the changes
- creates a Git commit
- pushes the backup/update to GitHub

If you are not ready to commit everything, use specific paths instead of `git add .`.

## Image Workflow

Originals and website images have different jobs.

### Source Originals

Put large/private working files here:

```text
_portfolio-source/Projects/<project-slug>/Images/source-originals/
```

This folder is not deployed online and is ignored by Git.

Use it for:

- original renders
- raw images
- design exports
- PSD/AI/Figma working files
- private reference material

### Website-ready Images

Put final compressed website images here:

```text
public/images/projects/<project-slug>/
```

Everything in `public/` can be deployed online, so only put files there if they are meant to be public.

### Naming Guide

Use clear, boring names. Boring is excellent here.

```text
project-slug-01.jpg
project-slug-02.jpg
project-slug-03.jpg
project-slug-thumb.jpg
project-slug-hero.jpg
```

Recommended sizes:

- hero images: around 1600-2200px wide
- card/gallery images: around 1200-1600px wide
- use JPEG for photos/renders
- use SVG or PNG for flat graphics only when needed

### Optional Mac Image Resize Helper

Use this only if you are comfortable with Terminal and your images are already safe to publish.

**Optional — Paste in Terminal**

```bash
cd ~/Documents/yat-tin-portfolio-site || exit

PROJECT_SLUG="new-project-slug"
INPUT_FILE="_portfolio-source/Projects/$PROJECT_SLUG/Images/source-originals/original-image.jpg"
OUTPUT_FILE="public/images/projects/$PROJECT_SLUG/$PROJECT_SLUG-01.jpg"

sips -Z 1800 "$INPUT_FILE" --out "$OUTPUT_FILE"
```

What it does:

- uses macOS `sips`
- resizes the longest image edge to 1800px
- exports the result into the public project image folder

Check the result visually before using it.

## Copy-paste Project JSON Template

JSON cannot contain comments, so read the notes first:

- `title`, `summary`, `year`, `status`, `projectType`, `role` must be honest and confirmed.
- `order` controls sorting on the Work page.
- `tags` drive filtering.
- `thumbnail` and `hero` must point to public image paths.
- `placeholder: true` keeps the project honest while unfinished.
- Remove `badge` unless the recognition is confirmed.
- Remove `companyLogo` unless the logo is approved and public.
- `pdf` controls printable portfolio inclusion.
- Add section blocks inside `sections`.

**Paste into a new project JSON file**

```json
{
  "title": "Project Title",
  "order": 7,
  "summary": "One honest sentence about the project.",
  "year": "2026",
  "status": "Case study coming soon",
  "projectType": "Product / Industrial Design",
  "role": "Your confirmed role",
  "tags": ["Industrial Design"],
  "thumbnail": "/images/projects/new-project-slug/new-project-slug-01.jpg",
  "hero": "/images/projects/new-project-slug/new-project-slug-01.jpg",
  "placeholder": true,
  "featured": false,
  "badge": {
    "label": "Remove this badge unless recognition is confirmed",
    "href": "https://example.com"
  },
  "companyLogo": {
    "src": "/images/projects/new-project-slug/company-logo.svg",
    "alt": "Remove this logo unless usage is approved"
  },
  "externalLinks": [],
  "pdf": [],
  "sections": [
    {
      "type": "text",
      "eyebrow": "In progress",
      "title": "Case study being prepared",
      "body": "Project context, role, process and outcome will be added when the source material is confirmed."
    },
    {
      "type": "pdf-summary",
      "title": "Placeholder summary",
      "body": "Confirmed summary to be added."
    }
  ]
}
```

Important: if you do not have a confirmed badge or company logo, delete those whole objects including the comma before or after them as needed.

## Section Block Library

Paste section blocks inside the `sections` array in the project JSON file. Separate blocks with commas.

Do not invent content. If the story is not ready, keep the placeholder block.

### Text Section

Use for overview, challenge, process, outcome or reflection.

**Paste into the `sections` array in a project JSON file**

```json
{
  "type": "text",
  "eyebrow": "Concept overview",
  "title": "A clear section title",
  "body": "Confirmed project story text."
}
```

### Split Image/Text Section

Use when one image supports one piece of story.

**Paste into the `sections` array in a project JSON file**

```json
{
  "type": "split",
  "eyebrow": "Process",
  "title": "Sketching the interaction",
  "body": "Confirmed process text.",
  "image": "/images/projects/new-project-slug/new-project-slug-02.jpg",
  "imageAlt": "Describe the image for accessibility.",
  "caption": "Short visual note."
}
```

### Highlights Section

Use for decisions, principles or qualitative outcomes. Do not use fake metrics.

**Paste into the `sections` array in a project JSON file**

```json
{
  "type": "highlights",
  "eyebrow": "Design decisions",
  "title": "What guided the work",
  "items": [
    {
      "title": "Decision title",
      "text": "Confirmed explanation."
    },
    {
      "title": "Another decision",
      "text": "Confirmed explanation."
    }
  ]
}
```

### Gallery Section

Use for a set of related images.

**Paste into the `sections` array in a project JSON file**

```json
{
  "type": "gallery",
  "eyebrow": "Final outcome",
  "title": "Selected views",
  "body": "Short confirmed gallery intro.",
  "images": [
    {
      "src": "/images/projects/new-project-slug/new-project-slug-03.jpg",
      "alt": "Accessible image description."
    },
    {
      "src": "/images/projects/new-project-slug/new-project-slug-04.jpg",
      "alt": "Accessible image description."
    }
  ]
}
```

### Links Section

Use for public project links only.

**Paste into the `sections` array in a project JSON file**

```json
{
  "type": "links",
  "title": "Explore more",
  "links": [
    {
      "label": "Behance",
      "href": "https://www.behance.net/"
    }
  ]
}
```

### PDF Summary Section

Use for a short printable portfolio summary.

**Paste into the `sections` array in a project JSON file**

```json
{
  "type": "pdf-summary",
  "title": "Project in brief",
  "body": "Short confirmed summary for printable portfolios."
}
```

## Tags and Filters

Tags drive the portfolio system. Projects are filtered by tags, not by folders.

Current public Work page filters:

- `Industrial Design`
- `Interaction Design`
- `DFM`
- `Award / Competition` shown publicly as `Awarded`
- `Project Management`
- `UX Research`

Other useful tags can still appear on project cards and pages:

- `Product Design`
- `Visual Storytelling`
- `Individual Project`
- `Web Design`
- `Media Production`

Do not add a tag just because it sounds good. Add it only if the project content supports it.

## Award Badges and Company Logos

Use badges only when recognition is confirmed.

**Paste into a project JSON file only when confirmed**

```json
"badge": {
  "label": "Award finalist",
  "href": "https://example.com"
}
```

Use logos only when usage is approved and the asset is public-safe.

**Paste into a project JSON file only when approved**

```json
"companyLogo": {
  "src": "/images/projects/new-project-slug/company-logo.svg",
  "alt": "Company name logo"
}
```

## External Links

Use `externalLinks` for project-level links such as:

- Behance
- Figma prototype
- YouTube
- Vimeo
- Good Design Award
- LinkedIn
- Google Drive

**Paste into a project JSON file**

```json
"externalLinks": [
  {
    "label": "Figma prototype",
    "href": "https://www.figma.com/"
  },
  {
    "label": "Video",
    "href": "https://vimeo.com/"
  }
]
```

Only link to files intended for employers to see.

## PDF Inclusion

The `pdf` array controls printable portfolio inclusion.

Options:

- `product`
- `ux-ui`
- `project-management`

**Paste into a project JSON file**

```json
"pdf": ["product"]
```

**Paste into a project JSON file**

```json
"pdf": ["product", "ux-ui"]
```

**Paste into a project JSON file**

```json
"pdf": []
```

If a project is not ready for PDF export, keep the array empty.

## Prompt Templates for Codex

Use these when you want AI help later.

### Add New Project With Codex

**Paste into Codex**

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

**Paste into Codex**

```text
Replace the placeholder project [PROJECT NAME] with the real project content I provide.

Keep the existing visual design.

Use confirmed facts only.

Update project title, slug if needed, summary, role, tags, images, sections, links, badges/logos, and PDF inclusion.

Do not invent metrics or awards.

Run npm run build and summarise changes.
```

### Add Project Images Only

**Paste into Codex**

```text
Add these images to the existing project [PROJECT NAME].

Do not change project text unless needed for image paths.

Place web-ready images in the correct public image folder.

Update thumbnail, hero, gallery, and alt text if I provide the descriptions.

Do not use original/private files in the public folder.
```

## Test the Website

After editing, run the site locally.

**Paste in Terminal**

```bash
cd ~/Documents/yat-tin-portfolio-site || exit

npm run dev
```

**Use in Browser**

```text
Open http://localhost:4321/
```

Check:

- `/work/`
- `/projects/new-project-slug/`
- `/pdf/`
- `/style-guide/`
- `/guidebook/`
- mobile width

## Build Before Publishing

**Run before committing — Paste in Terminal**

```bash
cd ~/Documents/yat-tin-portfolio-site || exit

npm run build
```

Common build errors:

- invalid JSON syntax
- missing commas
- image paths pointing to the wrong place
- unsupported section type
- unsupported PDF value

## GitHub Backup

Use GitHub after the build passes.

**Use in GitHub**

Create or open the repository for this portfolio.

**Run before deploying — Paste in Terminal**

```bash
cd ~/Documents/yat-tin-portfolio-site || exit

git status
git add .
git commit -m "Update portfolio project content"
git push
```

## Vercel Deployment

Use Vercel after pushing to GitHub.

**Use in Vercel dashboard**

```text
Framework preset: Astro
Build command: npm run build
Output directory: dist
```

After deployment, open the live URL and check the Work page, one project page and the PDF pages.

## Export Printable Portfolio PDFs

Use this for the portfolio PDFs, not the maintenance guide.

**Use in browser print dialog**

```text
Open /pdf/
Choose a PDF version
File -> Print
Destination -> Save as PDF
Check paper size is A4 if available
Save
```

## Honesty Rules

Do not invent:

- clients
- awards
- metrics
- user research findings
- quotes
- results
- team size
- responsibilities

Use `To be confirmed`, `Case study coming soon`, or `placeholder: true` until content is ready.

## Final Project Checklist

- [ ] Project title
- [ ] Year
- [ ] Category / project type
- [ ] Tags
- [ ] Role
- [ ] Summary
- [ ] Challenge / story
- [ ] Process
- [ ] Outcome
- [ ] Reflection
- [ ] Images
- [ ] Image alt text
- [ ] Badges / logos, if confirmed
- [ ] External links, if public
- [ ] PDF inclusion
- [ ] Local site checked
- [ ] Build passes
- [ ] Mobile checked
- [ ] No huge files committed
- [ ] No private files committed
- [ ] No fake metrics or unconfirmed claims
