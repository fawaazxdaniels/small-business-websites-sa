# Small Business Websites SA

A premium, right-sized website service for South African small businesses. The public offer is a professional five-page website for R5,000 once-off.

## Stack

Next.js App Router, React, TypeScript, CSS, Lucide icons and Vercel-ready deployment.

## Local setup

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run build
npm run lint
```

## Configuration

Edit `src/config/site.ts` to replace the placeholder business name, email, phone, WhatsApp, social profiles and site URL. Environment variables in `.env.example` can be used for public contact values. Do not commit `.env.local` or credentials.

The enquiry form currently provides an accessible client-side success state. To connect it to email, CRM or a form provider, add a server-side endpoint/provider and keep its credentials in Vercel environment variables.

## Content

Concept examples live in `src/lib/content.ts`. Replace these with real projects once available. The package, process and FAQ content are structured as reusable data for future expansion.

## Deployment

The app is ready to deploy as a standard Next.js project. Connect the repository to Vercel and set `NEXT_PUBLIC_SITE_URL` to the production URL. Add a custom domain in the Vercel project under Settings → Domains when one is selected.

