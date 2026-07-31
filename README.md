# RetroKits — vintage magyar mezek (front page)

Angular 21 + PrimeNG 21 front page for a vintage jersey shop (1975–1984).
Minimal Zara/Pull&Bear-style layout, Hungarian theme, filter rail with
click-to-select year tiles, and a grid ⇄ carousel view toggle.

## Run locally
```bash
npm install
npm start          # http://localhost:4200
```

## Production build
```bash
npm run build      # output: dist/retrokits/browser
```

## Deploy

**Netlify (fastest — no CLI):** drag the `dist/retrokits/browser` folder onto
https://app.netlify.com/drop. For git-based deploys, `netlify.toml` is already set.

**Vercel:** import the repo; `vercel.json` sets the build command and output dir.

**Cloudflare Pages:** framework preset *Angular*, build `npm run build`,
output `dist/retrokits/browser`.

**GitHub Pages:** push to `main`. The workflow in `.github/workflows/deploy.yml`
builds with the correct `--base-href` and publishes automatically. Enable it once
under **Settings → Pages → Source: GitHub Actions**.

## Where things live
- `src/app/app.ts` — page component: products, filters, view state
- `src/app/app.html` — layout (header, toolbar, filter rail, grid/carousel)
- `src/app/jersey-art.ts` — inline-SVG jersey/pennant artwork (swap for real photos)
- `src/styles.scss` — design tokens + PrimeNG overrides

## Swapping in real product photos
Replace `<app-jersey-art [product]="p" />` in `app.html` with an `<img>` and add
an `image` field to each product in `app.ts`. The `.thumb` box keeps the framing.
