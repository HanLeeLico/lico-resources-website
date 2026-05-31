# Lico Resources — Staging Build

Next.js 15 + TypeScript + Tailwind CSS. Brand palette: black + crimson on a warm cream base, with a dark hero section that fades into the light body. Logo, favicon, SEO metadata, JSON-LD structured data, sitemap, robots, and a real contact-form backend (Resend) are wired in.

## Run locally

Requires Node 20+ and npm.

> **First time only:** there's a leftover `node_modules/` folder from when Claude attempted to verify the install inside a sandbox. Delete it on Windows before running:
>
> ```
> cd "lico-staging"
> rmdir /s /q node_modules
> del package-lock.json
> ```

Then install and run:

```
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```
npm run build
npm run start
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in. Required for production:

| Variable | What it does |
|---|---|
| `RESEND_API_KEY` | Enables real email delivery from the contact form. Without it, the form still succeeds for the user but only logs to the server console. |
| `CONTACT_TO_EMAIL` | Where enquiries are sent. Default: `info@licoresources.com`. |
| `CONTACT_FROM_EMAIL` | The from-address (must be a verified Resend sender or domain). Default: `enquiries@licoresources.com`. |

Verify your domain in Resend before going live, otherwise sends will be rejected.

## File layout

```
lico-staging/
  app/
    layout.tsx                  — root layout, fonts, global metadata, JSON-LD
    page.tsx                    — home
    globals.css                 — all design tokens, dark-hero override, article + carousel styles
    sitemap.ts                  — auto-generates /sitemap.xml from routes + articles
    robots.ts                   — auto-generates /robots.txt
    not-found.tsx               — branded 404
    favicon.ico, icon.png, apple-icon.png  — Next.js auto-detect icons
    about/page.tsx              — company story, focus, stats, credentials
    services/page.tsx           — 4 service cards
    contractors/page.tsx        — capabilities, engagements, portal links
    contact/page.tsx            — form + detail cards
    insights/
      page.tsx                  — index: featured article + grid
      [slug]/page.tsx           — dynamic article route
    api/contact/route.ts        — POST endpoint, honeypot + rate limit + Resend
  components/
    Logo.tsx, Nav.tsx, Footer.tsx
    Hero.tsx, TrustStrip.tsx, PeopleGrid.tsx
    Specialisations.tsx, Process.tsx
    Testimonials.tsx, Contractors.tsx, Insights.tsx, CTAFooter.tsx
    ContactForm.tsx             — client form with honeypot, submit state
    ArticleCarousel.tsx         — keyboard + touch swipe + dot indicators
    ArticleBody.tsx             — renders sectioned article from data
    JsonLd.tsx                  — Organization, WebSite, Article, BreadcrumbList schemas
  lib/
    articles.ts                 — Article type, registry, helpers
    articles/
      plateau.ts                — "The Mid-Career Plateau" content
  public/
    lico-logo.png, lico-logo-dark.png   — logo variants
    favicon.svg, favicon-16/32/48.png, apple-touch-icon.png, icon-192.png, icon-512.png
    site.webmanifest            — PWA manifest with brand colours
    og-image.png                — 1200x630 social share preview
    articles/plateau-slide-1..3.png   — carousel images
  .env.example                  — env var template
  next.config.mjs               — Turbopack root, image hosts, security headers
```

## SEO surfaces in place

- **Title template** — every page title formats as "Page | Lico Resources" via `app/layout.tsx`
- **Per-page metadata** — title, description, canonical, Open Graph, Twitter Card on every route
- **JSON-LD** — Organization + WebSite schemas on every page (rendered in `<body>`), Article + BreadcrumbList on article pages
- **sitemap.xml** — auto-built from `articles` registry plus static routes
- **robots.txt** — allows all crawling, points to sitemap, blocks `/api/`
- **og-image.png** — 1200x630 brand image used as social share preview
- **Security headers** — HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy
- **404 page** — branded `not-found.tsx`, marked `noindex,nofollow`

To add a Google Search Console verification token, set `GOOGLE_SITE_VERIFICATION` env var and wire it into `metadata.verification.google` in `app/layout.tsx`.

## Adding a new article

1. Drop carousel slides into `public/articles/your-slug-slide-1.png`, etc.
2. Create `lib/articles/your-slug.ts` (copy the shape of `lib/articles/plateau.ts`).
3. Add the export to the `articles` array in `lib/articles.ts`.

That's it — the article appears on `/insights`, gets its own URL at `/insights/your-slug`, gets a sitemap entry, and gets JSON-LD Article markup.

## Things to swap before launch

- **Hero portrait** — currently Unsplash. Replace with a licensed stock photo or commissioned shot.
- **People grid photos** — 4 photos, ideally Asian / South Asian professionals matching your APAC focus. Pexels has a strong APAC library.
- **Testimonial photos** — currently hot-linked from `www.licoresources.com/testimonials/*.jpg`. Either keep that, or copy the files into `/public/testimonials/` and update paths in `components/Testimonials.tsx`.
- **Stats** — `components/Hero.tsx` and `app/about/page.tsx`. Currently 500+/78+/13/9.
- **Insight posts** — `app/insights/page.tsx` still includes a `linkedInTeasers` array of older posts. Migrate each into `lib/articles/` as you go.
- **Contractor portal link** — `app/contractors/page.tsx` currently points to `#`. Wire to your actual portal URL.
- **Resend env vars** — set in your hosting provider's environment, verify the sending domain.
- **Search Console + Bing Webmaster** — claim ownership, submit sitemap, add verification token.

## Deploy to Vercel

1. Push `lico-staging/` to a GitHub repo
2. Import the repo at vercel.com → New Project (auto-detects Next.js)
3. Add env vars in **Settings → Environment Variables** (`RESEND_API_KEY` etc.)
4. Site live on `*.vercel.app` within ~60 seconds
5. To use `www.licoresources.com`, add it under **Domains** and update DNS at your registrar
