# Deployment Checklist

Use this before backing up to GitHub or publishing the portfolio online.

## Pre-flight

- [ ] Run `npm install` if dependencies are not installed.
- [ ] Run `npm run build`.
- [ ] Fix any build errors.
- [ ] Check `git status`.
- [ ] Confirm no private files are staged.
- [ ] Confirm no huge originals are in `public/`.

Useful size check:

```sh
find public src docs -type f -size +5M -print
```

## Site Review

- [ ] Check `/work/` on desktop.
- [ ] Check `/work/` on mobile.
- [ ] Test tag filtering.
- [ ] Open at least one project page.
- [ ] Check `/resume/`.
- [ ] Check `/about/`.
- [ ] Check `/contact/`.
- [ ] Check `/style-guide/`.
- [ ] Check `/pdf/`.
- [ ] Open each PDF variant:
  - [ ] `/pdf/product/`
  - [ ] `/pdf/ux-ui/`
  - [ ] `/pdf/project-management/`
- [ ] Use browser print preview for one PDF page.
- [ ] Check links and external links.
- [ ] Confirm contact details are launch-ready or intentionally marked as placeholders.

## Content Safety

- [ ] No private CV PDF is in `public/`.
- [ ] No phone number, home address, passport, visa or sensitive personal detail is published.
- [ ] No invented clients, awards, metrics, user research findings or outcomes.
- [ ] Placeholder projects still use honest placeholder language.
- [ ] Company logos and award badges are only used when confirmed.

## Commit to Git

```sh
git status
git add .
git commit -m "Prepare portfolio for deployment"
```

If you do not want to stage everything, stage specific files instead:

```sh
git add README.md docs src public
```

## Push to GitHub

Create a GitHub repository if one does not exist yet, then connect the local repository.

Example:

```sh
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git branch -M main
git push -u origin main
```

If `origin` already exists:

```sh
git push
```

## Deploy with Vercel

1. Sign in to Vercel.
2. Import the GitHub repository.
3. Framework preset: Astro.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

After deployment:

- [ ] Open the live URL.
- [ ] Check desktop and mobile.
- [ ] Check Work filtering.
- [ ] Check one project page.
- [ ] Check PDF pages.
- [ ] Check contact placeholders or final contact details.
- [ ] Save the live URL somewhere safe.
