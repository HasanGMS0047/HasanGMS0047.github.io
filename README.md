# Mohammad Mahadi Hasan: portfolio

Personal portfolio of Mohammad Mahadi Hasan, a Computer Science and Engineering student at United
International University (UIU), Dhaka.

**Live:** https://hasangms0047.github.io
**Resume:** https://hasangms0047.github.io/Mohammad_Mahadi_Hasan_Resume.pdf

## Stack

- Next.js (App Router) and TypeScript, exported as a static site
- Plain CSS in `src/app/globals.css`
- Hosted on GitHub Pages

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

Names, links, projects and the character sheet live in `src/lib/data.ts`. The resume PDF is
`public/Mohammad_Mahadi_Hasan_Resume.pdf`: replace the file to update it.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site (`npm run build`
writes the static files to `out/`) and publishes them to GitHub Pages. The contact form opens the
visitor's email app, because a static site has no server to send mail.
