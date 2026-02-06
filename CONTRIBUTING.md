# Contributing to Hive Website

Thank you for your interest in contributing to the Hive marketing website! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Project Structure](#project-structure)

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Maintain professional communication

## Getting Started

### Prerequisites

- Node.js >= 20
- npm or yarn
- Git

### Setup

1. **Fork the repository** on GitHub

2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/hungry-ghost-hive-website.git
   cd hungry-ghost-hive-website
   ```

3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/nikrich/hungry-ghost-hive-website.git
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Start development server**:
   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) to see the site.

## Development Workflow

### 1. Sync with Upstream

Before starting work, sync your fork with the upstream repository:

```bash
git checkout main
git pull upstream main
git push origin main
```

### 2. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- `feature/` - New features (e.g., `feature/add-testimonials`)
- `fix/` - Bug fixes (e.g., `fix/header-mobile-menu`)
- `docs/` - Documentation changes (e.g., `docs/update-readme`)
- `refactor/` - Code refactoring (e.g., `refactor/hero-component`)
- `style/` - Styling changes (e.g., `style/update-color-palette`)

### 3. Make Your Changes

- Write clean, readable code
- Follow existing code patterns
- Add comments for complex logic
- Test your changes thoroughly

### 4. Test Your Changes

```bash
# Verify build succeeds
npm run build

# Check for linting errors
npm run lint

# Run the production build locally
npm start
```

### 5. Commit Your Changes

```bash
git add .
git commit -m "feat: add testimonials section to homepage"
```

See [Commit Guidelines](#commit-guidelines) below for commit message format.

### 6. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 7. Create a Pull Request

1. Go to the original repository on GitHub
2. Click "New Pull Request"
3. Select your fork and branch
4. Fill out the PR template with a clear description
5. Submit the PR

## Coding Standards

### TypeScript

- Use TypeScript for all new files
- Define interfaces for component props
- Avoid `any` types when possible

```typescript
interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
}

export default function Hero({ title, subtitle, ctaText }: HeroProps) {
  // Component code
}
```

### React Components

- Use functional components with hooks
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks
- Use the `"use client"` directive for client-side components

```typescript
"use client";

import { useState } from "react";

export default function MyComponent() {
  const [state, setState] = useState(initialState);
  // Component logic
}
```

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Support dark mode with `dark:` prefix
- Use brand colors from the design system:
  - Primary: `text-primary` (#6366f1)
  - Secondary: `text-secondary` (#f59e0b)
  - Accent: `text-accent` (#14b8a6)

```tsx
<div className="bg-white dark:bg-gray-900">
  <h1 className="text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
    Title
  </h1>
</div>
```

### File Organization

- Place components in `src/components/ComponentName/`
- Include an `index.tsx` for the main component
- Co-locate related files (styles, tests, etc.)

```
src/components/Hero/
├── index.tsx
├── HeroImage.tsx
└── __tests__/
    └── Hero.test.tsx
```

## Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Build process or auxiliary tool changes

### Examples

```bash
feat: add dark mode toggle to header

Implements a theme switcher button in the header that allows users to toggle between light and dark modes. Theme preference is saved to localStorage.

Closes #123
```

```bash
fix: resolve mobile menu overlay z-index issue

The mobile navigation menu was appearing behind the hero section on smaller screens. Updated z-index values to ensure proper layering.
```

```bash
docs: update installation instructions in README

Added prerequisites section and clarified Node.js version requirements.
```

## Pull Request Process

### PR Title

Use the same format as commit messages:

```
feat: add testimonials section to homepage
```

### PR Description

Include:

1. **Summary** - What does this PR do?
2. **Changes** - List of specific changes made
3. **Screenshots** - For UI changes (desktop + mobile)
4. **Testing** - How to test the changes
5. **Related Issues** - Link to related issues (Closes #123)

### PR Template

```markdown
## Summary
Brief description of what this PR accomplishes.

## Changes
- Added testimonials component
- Updated homepage to include testimonials
- Added responsive styles for mobile/tablet/desktop

## Screenshots
### Desktop
![Desktop screenshot](url)

### Mobile
![Mobile screenshot](url)

## Testing
1. Run `npm run dev`
2. Navigate to homepage
3. Verify testimonials section displays correctly
4. Test responsive behavior on mobile/tablet

## Related Issues
Closes #123
```

### Review Process

- PRs require at least one approval
- Address all review comments
- Keep PRs focused and reasonably sized
- Rebase if needed to resolve conflicts

### After Merge

- Delete your feature branch locally:
  ```bash
  git branch -d feature/your-feature-name
  ```

- Sync your fork with upstream:
  ```bash
  git checkout main
  git pull upstream main
  git push origin main
  ```

## Project Structure

```
hive-website/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx        # Homepage
│   │   ├── about/          # About page
│   │   ├── features/       # Features page
│   │   └── ...             # Other pages
│   ├── components/         # React components
│   │   ├── Header/         # Navigation header
│   │   ├── Footer/         # Footer
│   │   ├── Hero/           # Hero section
│   │   └── ...             # Other components
│   └── styles/             # Global styles
├── public/                 # Static assets
├── .env.example            # Environment variables template
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Questions or Need Help?

- Open an issue for bugs or feature requests
- Start a discussion for questions or ideas
- Review existing issues before creating new ones

Thank you for contributing to Hive! 🚀
