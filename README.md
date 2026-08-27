# MyCabify Marketing Site

The MyCabify marketing website (homepage, product pages, about/contact, legal
pages) under `app/`.

**Tech stack:** a standard [Next.js](https://nextjs.org) App Router
application (React 19, TypeScript, Tailwind CSS 4). It builds and runs with
the Next.js CLI directly — no custom bundler, runtime shim, or deployment
platform is required. It deploys to [Vercel](https://vercel.com) with
zero-config auto-detection.

## Prerequisites

- Node.js `>=22.13.0`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Included Shape

- edit site code under `app/`
- shared layout components: `app/SiteHeader.tsx`, `app/SiteFooter.tsx`
- reusable page components: `app/_components/`
- static content/data: `app/_data/`
- static assets: `public/`

## Commands

- `npm run dev`: start the Next.js development server
- `npm run build`: build the production site
- `npm run start`: serve the production build
- `npm run lint`: run ESLint

## Deploying

Push to a Vercel-connected git repository (or run `vercel`) — Vercel detects
the Next.js App Router setup automatically and builds/deploys it with no
additional configuration.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
