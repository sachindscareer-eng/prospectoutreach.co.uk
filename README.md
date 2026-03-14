# ProspectOutreach

A modern B2B company website built with **Next.js 14 (App Router)**.

## Tech stack

- **Next.js 14** (App Router)
- **Tailwind CSS** for styling
- **shadcn/ui**-style components (Button, Card)
- **Framer Motion** for animations
- **Lucide Icons**
- **Inter** (Google Font) for typography

## Design

- Clean SaaS / B2B style
- Primary: `#2563EB`
- Rounded cards, soft shadows, smooth hovers
- Mobile-first responsive layout

## Pages

- **Home** – Hero, Trusted by, Services overview, How it works, Why choose us, CTA
- **Services** – Six service cards (Lead gen, Cold email, LinkedIn, CRM, Data enrichment, Pipeline automation)
- **About** – Company story, Approach (3 columns), Team grid
- **Contact** – Form (Name, Email, Company, Message) + contact info + success state

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project structure

- `src/app/` – App Router pages and layouts
- `src/components/` – Navbar, Footer, PageTransition, home sections, UI (Button, Card)
- `src/lib/utils.ts` – `cn()` for class names
