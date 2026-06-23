Build the MVP of my personal portfolio website in this Astro project.

Project owner:
Yat Tin Lee, Sydney-based multidisciplinary designer with 5 years of industrial design experience and 4 years of project management experience, now expanding into UI/UX and research.

Goal:
Create a modern, sustainable portfolio website that can be sent to employers. The website should also support browser-printable PDF portfolio pages using the same project content.

Design direction:
Editorial designer portfolio with a small touch of playful Gen-Z personality. Clean, modern, image-led, professional, responsive, and easy to scan. Avoid heavy animation.

Important source files:
- Read docs/portfolio-mvp-build-brief-for-codex.md
- Read _portfolio-source/Projects/touch-of-time/project-manifest.md
- Read _portfolio-source/Projects/touch-of-time/Writing/project-summary.md
- Read _portfolio-source/Projects/touch-of-time/Writing/website-section-plan.md
- Use placeholder manifests for other projects in _portfolio-source/Projects/

Important rules:
- Do not invent clients, awards, metrics, user research findings, or project details.
- Use placeholders where content is missing.
- Build the site so projects are filtered by tags, not by folder categories.
- Support optional award badges and company logos per project.
- Support flexible case-study sections, not one fixed structure for every project.
- Project pages should support left-image/right-content sections, highlight cards, gallery blocks, badges, metric cards only when real metrics exist, video/prototype/external links, and PDF summary blocks.

Required pages:
- Home
- Work
- Project detail pages
- About
- Resume
- Links
- Contact
- PDF index
- PDF Product / Industrial Design
- PDF UX / UI
- PDF Project Management

Required features:
- Astro content system for projects
- Responsive layout
- Tag filtering on Work page
- Project cards
- Project detail pages
- Print CSS for PDF pages
- Browser-print-friendly PDF layout
- Placeholder support for unfinished projects
- Easy future update workflow

Initial projects:
1. Touch of Time — real prepared project with selected images
2. mobento — placeholder award finalist product design
3. Real Industry Project — placeholder DFM + project management
4. Company Website Design — placeholder UI / web design
5. UX Project — placeholder UX research / experience design
6. Video Production — placeholder media / storytelling

For images:
- Use Touch of Time web-ready images from _portfolio-source/Projects/touch-of-time/Images/web-ready/
- Copy website-used images into public/images/projects/touch-of-time/
- Use placeholder.svg images for unfinished projects
- Do not copy source-originals or original large files

Please implement the MVP directly in this Astro project.
After implementation, make sure:
- npm run dev works
- npm run build works
- the site is responsive
- PDF pages have print styles
- the README explains how to update projects later
