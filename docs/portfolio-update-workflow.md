# Portfolio Update Workflow

A living guide for keeping the site updated, backed up, and safely online.

This guide explains the current Astro + GitHub + Vercel workflow in plain language. It is for future maintenance, publishing decisions, and cost-awareness. Pricing and limits were checked around June 2026, but services change. Before paying for any plan, check the current GitHub, Vercel and domain registrar pricing pages.

## 1. Current Setup

| Part | Current choice |
| --- | --- |
| Website framework | Astro |
| Code editor / AI assistant | Codex, optional |
| Local computer | MacBook Air |
| Local project folder | `~/Documents/yat-tin-portfolio-site` |
| Code backup | GitHub repository |
| GitHub repo | `https://github.com/zuntay/yat-tin-portfolio-site` |
| Hosting | Vercel |
| Live site | `https://yat-tin-portfolio-site.vercel.app/work/` |
| Main branch | `main` |

Flow:

```text
Local files -> Git commit -> GitHub backup -> Vercel deploy -> Live website
```

In everyday terms:

1. You edit files on your MacBook Air.
2. You run a local build test.
3. You commit the changes with Git.
4. You push to GitHub.
5. Vercel sees the GitHub update and redeploys the site automatically.

## 2. Everyday Update Workflow

Use this for small edits such as typo fixes, contact details, resume wording or footer updates.

### Step A - Open Project

**Paste in Terminal**

```bash
cd ~/Documents/yat-tin-portfolio-site || exit
```

### Step B - Make Changes

Use:

- Codex for larger edits, code changes or guided updates.
- VS Code / code editor for manual edits.
- `docs/manual-add-project-guide.md` when adding projects by hand.
- `docs/codex-add-project-guide.md` when asking Codex to add projects.

Do not edit `dist/`. It is generated build output.

### Step C - Test Locally

**Paste in Terminal**

```bash
npm run build
npm run dev
```

Open the local URL in your browser, usually:

```text
http://localhost:4321/
```

Stop the local server with `Control + C`.

### Step D - Check Changed Files

**Paste in Terminal**

```bash
git status
```

Read the file list before committing. If something looks unfamiliar, pause.

### Step E - Save a Local Checkpoint

**Paste in Terminal**

```bash
git add .
git commit -m "Describe the update clearly"
```

Good commit messages:

- `Update public contact details`
- `Add new project guidebook`
- `Refine resume copy`

### Step F - Publish Online

**Paste in Terminal**

```bash
git push
```

After GitHub receives the push, Vercel redeploys automatically from the `main` branch.

## 3. Different Update Scenarios

### Small Text Update

Examples:

- typo
- footer
- contact details
- resume wording

Workflow:

```text
edit -> build -> commit -> push
```

### Add a New Project Manually

Use:

- `docs/manual-add-project-guide.md`
- `/guidebook/`

Project data lives in:

```text
src/content/projects/
```

Website images live in:

```text
public/images/projects/<project-slug>/
```

### Add a New Project With Codex

Use:

- `docs/codex-add-project-guide.md`

Tell Codex not to redesign the website and not to invent facts, clients, metrics, awards or research findings.

### Change Visual Design

Only do this intentionally. Ask Codex for a focused visual refinement and say which pages can be touched.

Useful instruction:

```text
Do not rebuild the site. Keep Astro structure, routing, project data, PDF pages and project pages.
```

Icon maintenance rule:

- Use `src/components/IconArrow.astro` for UI/action arrows.
- Do not use Unicode arrow symbols in links, cards, drawer items or buttons. Mobile browsers may render arrow characters as emoji-style glyphs.

### Update Images

Rules:

- Web-ready images go in `public/images/projects/<project-slug>/`.
- Large originals stay in `_portfolio-source/` or outside the repo.
- Do not use GitHub as an image archive.
- Avoid huge public files.

Large-file check:

```bash
find public src docs -type f -size +5M -print
```

### Emergency Rollback

If a pushed update breaks the live site:

1. Check the Vercel deployment log.
2. If urgent, use Vercel rollback in the dashboard.
3. Fix locally.
4. Run `npm run build`.
5. Commit and push again.

## 4. Current Service Limitations

### GitHub Free / Repository Limitations

GitHub stores the code and project history. GitHub Free is enough for this site at the current stage, especially for a personal portfolio workflow.

Keep in mind:

- Private repositories are fine for this workflow.
- Avoid committing huge files.
- Avoid committing private CVs, raw client files, PSD/AI working files or sensitive documents.
- GitHub is not an image/video archive.
- GitHub is not a CMS.

GitHub Team is around `$4 USD per user/month` if future collaboration or team permission controls are needed. Pricing changes, so check GitHub Pricing before upgrading.

GitHub Pages limits are still useful as a general warning even though this site currently uses Vercel: GitHub Pages recommends source repositories stay within 1GB, published sites may be no larger than 1GB, and Pages has build/bandwidth limits. Keep the repo lean.

### Vercel Hobby / Hosting Limitations

Vercel hosts the live website and redeploys from GitHub. Hobby is suitable for personal projects and portfolio sites.

Vercel Pro is around `$20/month + additional usage`. Hobby is not ideal for:

- commercial client production sites
- heavy traffic
- team workflows
- advanced analytics
- password protection workflows
- large dynamic apps

Practical limits:

- Vercel has a maximum build step duration.
- Too many files or huge source files can cause deployment problems.
- Large images/videos should be optimized or hosted elsewhere.
- This static Astro site should stay within normal limits if images are optimized.

### Astro Limitations

Astro is excellent for static portfolio websites. It is fast, clean and well suited to content-led pages.

Astro does not provide an editing dashboard by default. This portfolio is file-based: content is edited through JSON, Astro pages and local project files.

If you later want login-based editing, comments, job application dashboards, forms or database features, another backend, form service or CMS would be needed.

### Current No-CMS Limitation

The current setup is file-based.

Good for:

- control
- speed
- visual quality
- clean static deployment
- Codex-assisted editing

Less convenient for:

- editing from a phone
- editing from a browser without code
- inviting non-technical collaborators

Future options:

- keep using Codex/local files
- add Decap CMS, TinaCMS, Sanity or Contentful
- move to Webflow/Framer for visual editing
- keep Astro but add a headless CMS

## 5. Cost and Upgrade Decision Table

All prices are estimates. Pricing changes. Check official pricing before upgrading.

| Need / situation | Current option | Limitation | Alternative | Estimated cost | When to switch |
| --- | --- | --- | --- | --- | --- |
| Current personal portfolio | GitHub Free + Vercel Hobby | No browser CMS, keep files optimized | Stay as-is | `$0/month` | No switch needed unless traffic or features grow |
| Want custom domain | Vercel project URL | Vercel subdomain looks less polished | Buy domain and connect to Vercel | around `$10-30/year`, varies by registrar/TLD | When sharing portfolio professionally |
| More professional hosting/team features | Vercel Hobby | Personal/non-commercial fit, limited team/commercial workflow | Vercel Pro | around `$20/month + usage` | If site becomes business/commercial, needs team workflow, higher limits, analytics or deployment controls |
| More collaboration on code | GitHub Free | Basic collaboration only | GitHub Team | around `$4 USD/user/month` | If multiple collaborators regularly edit the repo or permissions matter |
| Need visual browser editing | File-based Astro | Requires code/local files | Webflow, Framer, Sanity, Contentful, TinaCMS, Decap CMS | varies widely; some free tiers, paid plans often monthly | If you want to update content without touching code |
| Heavy video/image portfolio | Local public assets | Repo/deploy can become heavy | YouTube, Vimeo, Cloudinary or external media hosting | varies | If videos or large images slow the site or make deploys heavy |
| Need contact form/database/login | Static pages only | No database or account system | Vercel Functions + Formspree, Supabase, Firebase, Netlify Forms or custom backend | free tiers exist, paid if usage grows | If the site needs data collection, accounts or interactive features |
| Need ultra-simple editing and no code | Astro + files | More technical maintenance | Squarespace, Wix, Webflow, Framer | usually paid monthly/yearly | If maintenance time becomes more important than full code/design control |

## 6. Recommended Path

For the next 1-2 years:

- keep Astro + GitHub + Vercel
- stay on free plans if traffic is normal
- buy a custom domain when ready
- keep images optimized
- update via Codex or the manual JSON guide
- review costs only if the site grows or becomes business-critical

Upgrade to paid only if:

- traffic becomes high
- Vercel shows usage warnings
- you need a team workflow
- you want password protection or advanced analytics
- you start using the site for commercial/client services
- you want browser-based CMS editing

## 7. Before Every Push

- [ ] run `npm run build`
- [ ] check `git status`
- [ ] do not commit `dist/`
- [ ] do not commit `node_modules/`
- [ ] do not commit private CV files
- [ ] do not commit raw client files
- [ ] do not commit huge source images
- [ ] check contact details
- [ ] open local preview if visual changes were made
- [ ] write a clear commit message
- [ ] push only when ready

## 8. Recovery Guide

### If the Site Breaks After Push

1. Check the Vercel deployment log.
2. If urgent, use Vercel rollback.
3. Fix locally.
4. Run build.
5. Commit and push again.

### If You Edited the Wrong Thing

**Paste in Terminal**

```bash
git status
git restore path/to/file
```

`git status` shows what changed. `git restore` returns a file to its last committed version, so only use it when you are sure you do not want those edits.

### If You Want to See History

**Paste in Terminal**

```bash
git log --oneline --decorate -5
```

This shows the five most recent commits.

## 9. Export This Guide as PDF

Open `/update-workflow/` in the browser.

Then:

```text
Browser -> File -> Print -> Save as PDF
```

Use A4 if available. The page has print styles that reduce backgrounds, keep code readable and break major sections into cleaner pages.

## 10. Sources and Pricing Note

Pricing and limits were checked around June 2026, but services change. Before paying for any plan, check:

- GitHub Pricing
- GitHub Pages Limits
- Vercel Pricing
- Vercel Limits
- Astro Deployment Docs
