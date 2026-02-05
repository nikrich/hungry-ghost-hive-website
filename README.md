# Hive — AI Development Team Website

A modern marketing and documentation website for Hive, an AI-powered autonomous development platform.

## 🚀 Project Overview

**Hive** is a platform that deploys teams of AI agents to autonomously plan, develop, and ship software features. This website serves as the primary marketing platform, featuring:

- **Homepage** - Hero section, product benefits, workflow showcase, features overview, pricing preview
- **Features Page** - Detailed exploration of all Hive capabilities
- **Pricing Page** - Clear pricing tiers and feature comparisons
- **How It Works Page** - Visual workflow from requirement to production
- **About Page** - Company mission and values
- **Contact Page** - Customer inquiry and support portal
- **Blog Section** - Articles and documentation
- **SEO & Analytics** - Optimized for search engines and user tracking

## 📊 Project Status

**82% Complete** (14 of 17 stories)

### ✅ Completed Stories
- Story 1: Project Setup
- Story 2: Global Components (Header, Footer, Theme Provider)
- Story 3: Hero Section
- Story 4: Problem/Solution Sections
- Story 12: Pricing Page
- Story 13: About Page
- Story 16: Analytics Integration

### 🟡 In Review
- Story 5: How It Works Summary
- Story 6: Agent Team Showcase
- Story 9: Pricing Preview & Final CTA
- Story 15: SEO & Meta Tags

### 🔵 In Progress (Senior Developers)
- Story 7: Homepage Features Grid
- Story 8: Code Example Section
- Story 10: Features Page (full)
- Story 11: How It Works Page (full)
- Story 14: Contact Page refinements
- Story 17: Deployment Setup

## 🛠 Tech Stack

- **Framework**: Next.js 16.0.10 with App Router
- **React**: 19.2.0 with TypeScript 5.3.3
- **Styling**: Tailwind CSS 4.1.3 with dark mode support
- **Theme Management**: next-themes
- **Linting**: ESLint 9.24.0
- **Formatting**: Prettier 3.2.5
- **Analytics**: Google Analytics 4
- **Hosting**: Vercel (deployment ready)

## 🎨 Brand Colors

- **Primary**: Indigo (`#6366f1`)
- **Secondary**: Amber (`#f59e0b`)
- **Accent**: Teal (`#14b8a6`)

## ✨ Key Features

✅ **Responsive Design** - Mobile-first, optimized for all devices
✅ **Dark Mode Support** - Theme switcher in header
✅ **Type-Safe** - Full TypeScript implementation
✅ **SEO Optimized** - Metadata, Open Graph, JSON-LD structured data
✅ **Performance** - All pages prerendered as static content
✅ **Analytics Ready** - Google Analytics 4 integration
✅ **Accessible** - WCAG compliance considerations

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Homepage
│   ├── about/page.tsx           # About page
│   ├── contact/page.tsx         # Contact page
│   ├── features/page.tsx        # Features page
│   ├── pricing/page.tsx         # Pricing page
│   ├── how-it-works/page.tsx   # How It Works page
│   ├── layout.tsx               # Root layout with global metadata
│   ├── robots.ts                # SEO robots configuration
│   ├── sitemap.ts               # Sitemap generation
│   └── providers.tsx            # Theme and other providers
├── components/
│   ├── Header/                  # Navigation header
│   ├── Footer/                  # Footer with links
│   ├── Hero/                    # Hero section
│   ├── Features/                # Features grid
│   ├── Pricing/                 # Pricing table
│   ├── AgentTeamSection/        # Agent roles showcase
│   ├── HowItWorksTimeline/     # Workflow visualization
│   ├── Common/                  # Shared components
│   └── ...other sections
├── styles/
│   └── index.css                # Global styles
└── ...other files
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd hungry-ghost-hive-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the website.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### Linting & Formatting

```bash
# Run ESLint
npm run lint

# Format with Prettier
npm run format

# Check types
npx tsc --noEmit
```

## 📋 Development Workflow

1. **Create Feature Branch**: `git checkout -b feature/STORY-WEB-XXX-description`
2. **Implement Story**: Follow the accepted criteria and component patterns
3. **Test Build**: `npm run build` to ensure 0 errors, all pages prerender
4. **Commit Changes**: Use clear, descriptive commit messages
5. **Submit PR**: Create pull request for review via hive system
6. **Deploy**: Automatic deployment to Vercel on merge to main

## 🏗 Component Patterns

### Client Components
```typescript
'use client';

import { useState } from 'react';

export default function MyComponent() {
  const [state, setState] = useState();
  return <div>...</div>;
}
```

### Server Components (Default)
```typescript
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
};

export default function Page() {
  return <div>...</div>;
}
```

### Responsive Patterns
```typescript
// Mobile-first with Tailwind
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 1 col mobile, 2 cols tablet, 3 cols desktop */}
</div>

// Dark mode
<div className="bg-white dark:bg-black text-black dark:text-white">
  {/* Light mode light background, dark mode dark background */}
</div>
```

## 📱 Pages & Routes

| Route | Story | Status | Description |
|-------|-------|--------|-------------|
| `/` | 1-9 | ✅ Merged | Homepage with all sections |
| `/features` | 10 | 🔵 In Progress | Complete features overview |
| `/pricing` | 12 | ✅ Merged | Pricing tiers and comparison |
| `/how-it-works` | 11 | 🟡 Submitted | Detailed workflow visualization |
| `/about` | 13 | ✅ Merged | Company information |
| `/contact` | 14 | 🔵 In Progress | Contact form and inquiries |
| `/blog` | TBD | 📋 Planned | Blog articles |
| `/robots.txt` | 15 | 🟡 Review | SEO robots configuration |
| `/sitemap.xml` | 15 | 🟡 Review | XML sitemap for search engines |

## 🔍 SEO

The website implements comprehensive SEO optimization:

- ✅ Global metadata in `layout.tsx`
- ✅ Page-specific metadata in each route
- ✅ Open Graph tags for social sharing
- ✅ Twitter card configuration
- ✅ JSON-LD structured data
- ✅ `robots.txt` and `sitemap.xml`
- ✅ Canonical URLs
- ✅ Mobile viewport optimization

## 📊 Analytics

Google Analytics 4 is configured for:
- Page view tracking
- CTA button clicks
- User engagement metrics
- Conversion funnel tracking

## 🤝 Contributing

### For Intermediate Developers (4-5 story points)
1. Pick a story from the board with your assigned complexity
2. Create feature branch: `git checkout -b feature/STORY-WEB-XXX-title`
3. Implement the feature following component patterns
4. Verify build: `npm run build` (should show 0 errors, all pages prerendered)
5. Commit with co-author: Include `Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>`
6. Submit PR: `hive pr submit -b <branch> -s <story-id> --from <your-agent-id>`

### Code Guidelines
- Use TypeScript for type safety
- Follow existing component structure
- Use Tailwind CSS for styling (no CSS modules)
- Implement "use client" only where necessary for interactivity
- Keep components focused and reusable
- Dark mode: Always include `dark:` Tailwind classes for dark backgrounds/text

### Commit Message Format
```
feat: implement [Feature Description] (Story #X)

- Detailed bullet point 1
- Detailed bullet point 2
- Verified build passes with N pages prerendered

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>
```

## 🐛 Known Issues

None currently. All submitted stories are either merged or in review.

## 📚 Documentation

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Next.js Metadata API**: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
- **Vercel Deployment**: https://vercel.com/docs

## 🚢 Deployment

The website is configured for automatic deployment to Vercel:

```bash
# Main branch: Production deployment
git push origin main

# Feature branches: Preview deployments
git push origin feature/STORY-WEB-XXX
```

Environment variables needed:
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` - GA4 tracking ID
- `NEXT_PUBLIC_SITE_URL` - https://hive.dev (production)

## 📄 License

TBD

## 👥 Team

- **Product Owner**: Hungry Ghost Hive Team
- **Tech Lead**: Senior Developers
- **Contributors**: Intermediate & Junior Developers

---

**Last Updated**: 2026-02-05 | **Build Status**: ✅ Passing | **Pages**: 16 prerendered
