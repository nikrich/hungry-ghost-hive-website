# Hive — Marketing Website

> Your AI Development Team, Ready to Ship

A modern marketing website for Hive, an AI agent orchestrator that manages autonomous development teams. Built with Next.js 16, React 19, and Tailwind CSS 4.

## Tech Stack

- **Framework:** Next.js 16.0.10 (App Router, React Server Components)
- **UI Library:** React 19.2.0
- **Styling:** Tailwind CSS 4.1.3
- **Language:** TypeScript 5.3.3
- **Theme:** next-themes (dark/light mode support)
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js >= 20
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (outputs to `.next/`)
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
src/
├── app/                # Next.js App Router pages
│   ├── page.tsx       # Homepage
│   ├── about/         # About page
│   ├── features/      # Features page
│   ├── how-it-works/  # How It Works page
│   ├── pricing/       # Pricing page
│   └── contact/       # Contact page
├── components/        # React components
│   ├── Header/        # Navigation header with dark mode
│   ├── Footer/        # Footer with links
│   ├── Hero/          # Homepage hero section
│   └── ...            # Feature-specific components
└── styles/            # Global styles
```

## Features

- **Responsive Design:** Mobile-first, works on all devices
- **Dark Mode:** System-aware theme switching with manual toggle
- **SEO Optimized:** Meta tags, OpenGraph, structured data
- **Performance:** Static generation, optimized images, code splitting
- **Analytics:** Integrated tracking for user behavior

## Pages

- **Homepage** (`/`) - Hero, problem/solution, how it works summary, agent team, features, code example, pricing preview
- **Features** (`/features`) - Detailed feature showcase with autonomous agents, task delegation, monitoring, and more
- **How It Works** (`/how-it-works`) - Interactive timeline of the 6-phase workflow
- **Pricing** (`/pricing`) - Tiered pricing (Open Source, Pro, Enterprise) with FAQ
- **About** (`/about`) - Mission, story, and team information
- **Contact** (`/contact`) - Contact form and information

## Deployment

This project is configured for Vercel deployment with automatic CI/CD:

- **Production:** Auto-deploys from `main` branch
- **Preview:** Auto-deploys from pull requests
- **Environment:** Node.js 20, `npm ci` for installs

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Contributing

1. Create a feature branch from `main`
2. Make your changes with clear, atomic commits
3. Ensure build passes: `npm run build`
4. Open a pull request with a clear description
5. Wait for review and merge approval

## Brand Guidelines

- **Primary Color:** #6366f1 (Indigo) - Main brand color
- **Secondary Color:** #f59e0b (Amber) - Highlights and CTAs
- **Accent Color:** #14b8a6 (Teal) - Success states, links
- **Tone:** Professional, technical, developer-focused

## License

MIT
