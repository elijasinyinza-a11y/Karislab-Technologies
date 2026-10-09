# Karislab website

Corporate website for **Karislab**: technology, intelligence and practical impact.

Built with Next.js (App Router), TypeScript and Tailwind CSS 4. Hosted on GitHub and deployed on Vercel; every push to `main` redeploys automatically.

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Command         | What it does                     |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the local development server |
| `npm run build` | Create a production build        |
| `npm run start` | Serve the production build       |
| `npm run lint`  | Run ESLint                       |

## Project structure

```
public/brand/             Logo (karislab-logo.svg) and K symbol (karislab-mark.svg)
src/app/
  globals.css             Design tokens (colours, breakpoints, radii) and base styles
  layout.tsx              Root layout: Inter font, metadata, site header
  page.tsx                Homepage: hero + closing statement
  icon.svg, apple-icon.png  Browser and home-screen icons
  opengraph-image.png     Link preview image (also twitter-image.png)
  robots.ts, sitemap.ts   Search engine files (add pages to the sitemap as they go live)
  manifest.ts             Web app manifest
  not-found.tsx           Branded 404 page
  about/ solutions/ insights/ contact/   Interim pages for each navigation link
src/components/
  Logo.tsx                Logo linking to the homepage
  TopBar.tsx              Navy information bar
  SiteHeader.tsx          Top bar + navigation bar
  SiteNav.tsx             Desktop navigation and mobile menu
  PagePlaceholder.tsx     Shared layout for interim pages
  home/Hero.tsx           Hero: eyebrow, headline, paragraph, buttons
  home/SolutionCards.tsx  The two featured solution cards
  home/HeroDecoration.tsx Low-contrast background lines
  home/ClosingStatement.tsx  Closing brand statement
src/lib/navigation.ts     Navigation links (edit here to add or reorder pages)
src/lib/site.ts           Site name, URL, description, email and phone (empty = hidden)
```

## Design tokens

Defined in `src/app/globals.css` and available as Tailwind utilities (`bg-navy`, `text-action`, `border-line`, …).

| Token           | Hex       | Use |
| --------------- | --------- | --- |
| `navy`          | `#07345B` | Logo text, headlines, primary text |
| `action`        | `#0679A4` | Anything carrying text: buttons, links, eyebrow, active nav (AA-compliant) |
| `action-hover`  | `#05628A` | Hover state for `action` |
| `action-accent` | `#078DBF` | Brand blue for non-text graphics only: icon tiles, decorative lines |
| `teal`          | `#00B89C` | Decorative accents only, never text |
| `ice`           | `#EFF8FD` | Hero and light section backgrounds |
| `sky`           | `#DCEEF9` | Feature cards and secondary surfaces |
| `body`          | `#40566B` | Supporting text |
| `line`          | `#D5E4ED` | Dividers and card outlines |

Breakpoints: mobile below 768px, tablet 768–1199px, desktop 1200px and above.

## Build progress

- [x] Step 1: Scaffold, repository and Vercel pipeline
- [x] Step 2: Design foundation (tokens, font, logo, icons)
- [x] Step 3: Layout shell (top bar, navigation, mobile menu, interim pages)
- [x] Step 4: Homepage sections (hero, solution cards, closing statement)
- [x] Step 5: Polish (SEO metadata, link previews, sitemap, robots, 404 page, skip link, accessibility audit)
- [ ] Step 6: QA and launch (custom domain)

## Brand notes

The logo is a vector rebuild of the original artwork. The wordmark is Montserrat (SIL Open Font Licence), converted to outlines.

## SEO notes

- The site URL comes from Vercel's `VERCEL_PROJECT_PRODUCTION_URL`, so it switches to the custom domain automatically once connected.
- Interim pages (About, Solutions, Insights, Contact) are marked `noindex`. When a page gets real content, remove its `robots` line and add it to `src/app/sitemap.ts`.
