# Hive Website Specification

**Version:** 1.0
**Date:** 2026-02-05
**Status:** Planning

---

## Overview

This specification defines the marketing website for **Hive** - an AI Agent Orchestrator that automates the entire software development lifecycle using coordinated teams of AI agents.

### Template

- **Base Template:** [NextJSTemplates/startup-nextjs](https://github.com/NextJSTemplates/startup-nextjs.git)
- **Stack:** Next.js 14+, TypeScript, Tailwind CSS
- **Features:** Dark/Light mode, Responsive design, SEO optimized

---

## Brand Identity

### Tagline Options
- "Your AI Development Team, Ready to Ship"
- "Autonomous AI Agents. Real Development Workflows."
- "From Requirement to Production. Automatically."

### Tone of Voice
- Professional but approachable
- Technical credibility without jargon overload
- Confident, emphasizing reliability and production-readiness
- Developer-focused (the primary audience)

### Color Palette (Suggested)
- Primary: Deep purple/indigo (#6366F1) - representing AI/intelligence
- Secondary: Amber/Gold (#F59E0B) - representing the "hive" metaphor
- Accent: Teal (#14B8A6) - for CTAs and highlights
- Dark mode: Deep navy (#0F172A) background
- Light mode: Clean white/gray backgrounds

---

## Site Structure

```
/                       # Homepage (Hero + Features + How It Works + Pricing + CTA)
/features               # Detailed feature breakdown
/how-it-works           # Deep dive into the workflow
/pricing                # Pricing tiers
/docs                   # Documentation (link or embedded)
/blog                   # Blog/updates (future)
/about                  # About the project/team
/contact                # Contact form
```

---

## Page Specifications

### 1. Homepage (`/`)

The homepage is the primary landing page and must communicate Hive's value proposition immediately.

#### Section 1.1: Hero
**Goal:** Capture attention, explain what Hive is in 5 seconds

**Content:**
- **Headline:** "Your AI Development Team, Ready to Ship"
- **Subheadline:** "Hive orchestrates autonomous AI agents that plan, code, review, and deploy features - like a real agile team, but powered by frontier AI models."
- **CTA Buttons:**
  - Primary: "Get Started" → /docs/quickstart
  - Secondary: "Watch Demo" → Modal with demo video or /how-it-works
- **Visual:** Animated illustration showing:
  - A user typing a requirement
  - AI agents (Tech Lead, Seniors, Juniors, QA) appearing
  - Code being written, reviewed, merged
  - Feature shipping to production

#### Section 1.2: Social Proof / Trust Indicators
**Content:**
- "Powered by frontier AI models" with logos: Claude (Anthropic), GPT-4 (OpenAI)
- GitHub stars badge (when available)
- "Open for customization" badge

#### Section 1.3: Problem Statement
**Goal:** Resonate with developer pain points

**Content:**
- **Headline:** "Development is Full of Friction"
- **Pain Points Grid (3 columns):**
  1. **Manual Coordination** - "Planning, assigning, reviewing, merging - hours spent on coordination instead of building."
  2. **Bottlenecks at Scale** - "More features mean more developers, more meetings, more slowdowns."
  3. **24/7 is Impossible** - "Your team sleeps. Competitors ship."
- **Transition:** "What if your development team could work autonomously?"

#### Section 1.4: Solution Overview
**Goal:** Introduce Hive as the solution

**Content:**
- **Headline:** "Meet Hive: Your Autonomous AI Development Team"
- **Description:** "Hive is an AI Agent Orchestrator. Submit a requirement, and Hive's team of AI agents - Tech Lead, Seniors, Juniors, and QA - autonomously plan, implement, review, and ship your feature."
- **Key Stats (3 cards):**
  1. "100% Autonomous" - From requirement to PR without human intervention
  2. "24/7 Development" - AI agents don't sleep
  3. "Production Ready" - Real Git integration, CI/CD compatible

#### Section 1.5: How It Works (Summary)
**Goal:** Show the workflow at a high level

**Content:**
- **Headline:** "Ship Features in 4 Steps"
- **Steps (horizontal timeline or numbered list):**
  1. **Submit a Requirement** - `hive req "Add user authentication"` - One command, that's it.
  2. **AI Team Plans** - Tech Lead breaks it down, Seniors estimate complexity, stories are created.
  3. **Autonomous Development** - Agents implement based on complexity. Juniors handle simple tasks, Seniors tackle complex ones.
  4. **Review, QA, Ship** - Code reviewed by Seniors, tested by QA agent, PR submitted automatically.
- **CTA:** "See the full workflow →" → /how-it-works

#### Section 1.6: Agent Team Showcase
**Goal:** Make the AI team feel real and trustworthy

**Content:**
- **Headline:** "A Team That Works Like Yours"
- **Agent Cards (5 cards in a row):**

| Role | Model | Responsibilities |
|------|-------|------------------|
| **Tech Lead** | Claude Opus | Orchestrates planning, breaks down requirements, manages cross-repo work |
| **Senior Developer** | Claude Sonnet | Complex implementations (6+ points), code review, mentors juniors |
| **Intermediate Developer** | Claude Haiku | Medium complexity tasks (4-5 points) |
| **Junior Developer** | GPT-4o-mini | Simple tasks (1-3 points), learns patterns |
| **QA Engineer** | Claude Sonnet | Runs tests, linting, type checks, approves PRs |

- **Note:** "Models are configurable - use any LLM provider you prefer."

#### Section 1.7: Features Grid
**Goal:** Highlight key features

**Content:**
- **Headline:** "Built for Real Development Workflows"
- **Features (2x3 grid):**

1. **Intelligent Delegation**
   - Automatically assigns work by complexity
   - Right agent for the right task
   - Icon: brain/balance scale

2. **Real-time Dashboard**
   - TUI with live agent status
   - Story pipeline visualization
   - Activity logs and escalations
   - Icon: dashboard/monitor

3. **Multi-Repo Orchestration**
   - Manages multiple services as submodules
   - Cross-repo dependency tracking
   - Coordinated releases
   - Icon: git branches

4. **Human-in-the-Loop**
   - Escalation protocol when agents need guidance
   - You stay in control
   - Answer questions, unblock work
   - Icon: handshake/user

5. **State Persistence**
   - SQLite database for all state
   - Checkpoint and resume
   - Survives crashes and restarts
   - Icon: database/save

6. **GitHub Integration**
   - Auto-creates feature branches
   - Submits PRs automatically
   - Integrates with CI/CD
   - Icon: GitHub logo

- **CTA:** "Explore all features →" → /features

#### Section 1.8: Code Example
**Goal:** Show how simple it is to use

**Content:**
- **Headline:** "One Command to Ship a Feature"
- **Terminal Animation:**
```bash
$ hive req "Add OAuth2 authentication with Google and GitHub providers"

✓ Requirement REQ-001 created
✓ Tech Lead spawned - analyzing requirement...
✓ 3 stories created:
  - STORY-001: Set up OAuth2 provider configuration (3 pts) → Junior
  - STORY-002: Implement Google OAuth flow (5 pts) → Intermediate
  - STORY-003: Implement GitHub OAuth flow (5 pts) → Intermediate
✓ Development started...

$ hive dashboard
# Opens real-time TUI dashboard showing agent progress
```

#### Section 1.9: Testimonials (Placeholder)
**Goal:** Build trust through social proof

**Content:**
- **Headline:** "Trusted by Developers"
- Placeholder cards for future testimonials
- Can include quotes from beta users or internal team

#### Section 1.10: Pricing Preview
**Goal:** Indicate pricing model

**Content:**
- **Headline:** "Simple, Transparent Pricing"
- **Cards:**
  1. **Open Source** - Free - Self-hosted, bring your own API keys
  2. **Pro** (Coming Soon) - Managed hosting, priority support, advanced features
  3. **Enterprise** (Coming Soon) - Custom deployment, SLA, dedicated support
- **CTA:** "View pricing details →" → /pricing

#### Section 1.11: Final CTA
**Goal:** Convert visitors

**Content:**
- **Headline:** "Ready to Ship Faster?"
- **Subheadline:** "Get started with Hive in minutes."
- **CTA Buttons:**
  - Primary: "Read the Docs" → /docs
  - Secondary: "Star on GitHub" → GitHub repo

---

### 2. Features Page (`/features`)

Deep dive into each feature with detailed explanations.

#### Sections:
1. **Autonomous Agent Team** - Full breakdown of each agent role, capabilities, and how they coordinate
2. **Intelligent Task Delegation** - Complexity scoring, automatic assignment, workload balancing
3. **Complete Workflow Automation** - Each phase explained (Planning → Development → Review → QA → PR)
4. **Real-time Dashboard** - Screenshots/GIFs of the TUI, panel descriptions
5. **Escalation Protocol** - How human-in-the-loop works, examples
6. **Multi-Repo Management** - Submodule handling, cross-repo dependencies
7. **State Persistence** - Database schema, checkpoint/resume, crash recovery
8. **Git/GitHub Integration** - Branch creation, PR automation, CI/CD compatibility
9. **Configuration** - YAML examples, model selection, customization options
10. **Manager Daemon** - Health checks, auto-recovery, agent monitoring

Each section should have:
- Icon
- Headline
- 2-3 paragraph description
- Code example or screenshot where applicable
- Link to relevant docs section

---

### 3. How It Works Page (`/how-it-works`)

Interactive/visual explanation of the complete workflow.

#### Format:
Vertical timeline or step-by-step accordion with animations

#### Phases:

**Phase 1: Requirement Intake**
- User submits requirement via CLI
- Tech Lead agent spawns
- Requirement stored in database
- Visual: Terminal → Database icon

**Phase 2: Planning & Estimation**
- Tech Lead analyzes requirement
- Spawns Senior per affected team
- Seniors do codebase analysis
- Stories created with complexity scores
- Visual: Tech Lead → Seniors → Story cards

**Phase 3: Development**
- Stories assigned by complexity
- Agents implement in parallel
- Feature branches created
- Code committed incrementally
- Visual: Multiple agents coding simultaneously

**Phase 4: Code Review**
- Seniors review delegated work
- Feedback provided
- Iterations until approved
- Visual: Review comments, checkmarks

**Phase 5: Quality Assurance**
- QA agent runs checks (lint, types, tests, build)
- Pass/Fail determination
- Visual: CI pipeline with checkmarks

**Phase 6: PR Submission & Merge**
- PR created automatically
- Links to story
- Ready for merge
- Visual: GitHub PR interface

#### Interactive Elements:
- Clickable phases that expand with details
- Animated diagrams showing data flow
- Code snippets at each phase
- "Try it yourself" links to docs

---

### 4. Pricing Page (`/pricing`)

#### Tiers:

**Open Source (Free)**
- Self-hosted
- Bring your own API keys (Anthropic, OpenAI)
- Full feature set
- Community support (GitHub Issues)
- Apache 2.0 components, proprietary orchestrator

**Pro ($X/month)** - Coming Soon
- Managed cloud hosting
- API key management
- Priority email support
- Usage analytics dashboard
- Team collaboration features

**Enterprise (Custom)** - Coming Soon
- Dedicated infrastructure
- SSO/SAML integration
- 99.9% SLA
- Dedicated support engineer
- Custom integrations
- On-premise deployment option

#### FAQ Section:
- "What API keys do I need?"
- "Can I use my own models?"
- "Is my code sent to third parties?"
- "How does billing work for Pro?"
- "Do you offer discounts for startups?"

---

### 5. Documentation (`/docs`)

Link to external documentation site or embedded docs.

#### Structure (if embedded):
- Getting Started
  - Installation
  - Quick Start
  - Configuration
- Core Concepts
  - Agent Hierarchy
  - Stories & Requirements
  - The Workflow
- CLI Reference
  - All commands with examples
- Configuration Reference
  - YAML schema
  - Model options
- Guides
  - Multi-repo setup
  - Custom agent configuration
  - CI/CD integration
- API Reference (if applicable)
- Troubleshooting
- FAQ

---

### 6. About Page (`/about`)

#### Content:
- **Mission:** "We're building the future of software development - where AI agents handle the routine so humans can focus on the creative."
- **Story:** How Hive came to be
- **Team:** Founder/maintainer info
- **Open Source Philosophy:** Commitment to transparency and community
- **Contact:** Links to GitHub, Discord (if available), email

---

### 7. Contact Page (`/contact`)

#### Content:
- Contact form (name, email, message)
- Email address for business inquiries
- GitHub link for technical issues
- Social media links (if available)

---

## Components Required

### Global Components
- [ ] Header/Navigation (with dark mode toggle)
- [ ] Footer (links, social, copyright)
- [ ] CTA Button (primary/secondary variants)
- [ ] Section container (consistent padding/margins)

### Homepage Components
- [ ] Hero section with animation
- [ ] Pain point cards
- [ ] Feature grid cards
- [ ] Agent role cards
- [ ] Terminal/code block animation
- [ ] Testimonial carousel (placeholder)
- [ ] Pricing preview cards
- [ ] Final CTA banner

### Features Page Components
- [ ] Feature detail section (icon, title, description, visual)
- [ ] Code example blocks
- [ ] Screenshot/GIF containers

### How It Works Components
- [ ] Timeline/stepper component
- [ ] Expandable accordion
- [ ] Phase diagram/animation
- [ ] Data flow visualization

### Shared Components
- [ ] Page header (title, subtitle, breadcrumb)
- [ ] Card component (various sizes)
- [ ] Code syntax highlighter
- [ ] Image with caption
- [ ] Table component
- [ ] FAQ accordion

---

## Technical Requirements

### Performance
- Lighthouse score > 90 on all metrics
- First Contentful Paint < 1.5s
- Time to Interactive < 3s
- Lazy load images and heavy components

### SEO
- Meta tags on all pages
- OpenGraph tags for social sharing
- Structured data (JSON-LD) for product
- Sitemap.xml
- Robots.txt
- Canonical URLs

### Accessibility
- WCAG 2.1 AA compliance
- Semantic HTML
- Keyboard navigation
- Screen reader friendly
- Color contrast ratios

### Analytics
- Google Analytics 4 or Plausible
- Event tracking for CTAs
- Conversion tracking for docs/GitHub clicks

### Hosting
- Deploy to Vercel (recommended for Next.js)
- Custom domain: hive.hungryghosts.dev (or similar)
- SSL certificate
- CDN for assets

---

## Content Needs

### Copywriting
- [ ] All page headlines and body copy
- [ ] CTA button text
- [ ] Meta descriptions
- [ ] Error messages

### Visual Assets
- [ ] Logo (SVG, various sizes)
- [ ] Favicon
- [ ] Agent avatars/icons (Tech Lead, Senior, Junior, QA)
- [ ] Feature icons
- [ ] Hero illustration/animation
- [ ] Dashboard screenshots
- [ ] Terminal GIFs showing Hive in action
- [ ] OpenGraph image (1200x630)

### Video (Optional but recommended)
- [ ] Demo video (2-3 minutes)
- [ ] Quick start tutorial

---

## Implementation Stories

### Story 1: Project Setup
**Complexity:** 3 points
**Description:** Clone startup-nextjs template, configure for Hive branding, set up Tailwind with custom color palette, configure TypeScript, set up ESLint/Prettier.

**Acceptance Criteria:**
- Template cloned and running locally
- Custom color palette applied
- TypeScript configured
- Linting passing

### Story 2: Global Components
**Complexity:** 5 points
**Description:** Build Header (with nav, dark mode toggle), Footer, and shared layout components.

**Acceptance Criteria:**
- Responsive header with navigation
- Dark/light mode toggle working
- Footer with links and social icons
- Consistent layout wrapper

### Story 3: Homepage Hero Section
**Complexity:** 5 points
**Description:** Implement hero section with headline, subheadline, CTA buttons, and animated illustration placeholder.

**Acceptance Criteria:**
- Responsive hero layout
- CTAs linking correctly
- Animation placeholder ready for asset
- Mobile-optimized

### Story 4: Homepage Problem/Solution Sections
**Complexity:** 4 points
**Description:** Build pain point cards and solution overview sections.

**Acceptance Criteria:**
- 3 pain point cards with icons
- Solution section with stats
- Responsive grid layout

### Story 5: Homepage How It Works Summary
**Complexity:** 4 points
**Description:** Build the 4-step workflow summary section with timeline component.

**Acceptance Criteria:**
- 4 steps displayed clearly
- Timeline or numbered visual
- Links to full how-it-works page

### Story 6: Agent Team Showcase
**Complexity:** 5 points
**Description:** Build the agent role cards section showing all 5 agent types.

**Acceptance Criteria:**
- 5 agent cards with roles, models, responsibilities
- Responsive layout
- Placeholder icons for agents

### Story 7: Homepage Features Grid
**Complexity:** 5 points
**Description:** Build the 6-feature grid with icons and descriptions.

**Acceptance Criteria:**
- 2x3 grid on desktop, stacked on mobile
- Icons for each feature
- Links to /features page

### Story 8: Homepage Code Example
**Complexity:** 4 points
**Description:** Build terminal-style code block showing Hive CLI usage.

**Acceptance Criteria:**
- Styled terminal appearance
- Syntax highlighting
- Optional: typing animation

### Story 9: Homepage Pricing Preview & CTA
**Complexity:** 3 points
**Description:** Build pricing preview cards and final CTA section.

**Acceptance Criteria:**
- 3 pricing tier cards
- Final CTA with buttons
- Links working

### Story 10: Features Page
**Complexity:** 8 points
**Description:** Build complete features page with all 10 feature sections.

**Acceptance Criteria:**
- All feature sections implemented
- Code examples where applicable
- Screenshot placeholders
- Responsive design

### Story 11: How It Works Page
**Complexity:** 8 points
**Description:** Build interactive workflow page with timeline and phase details.

**Acceptance Criteria:**
- 6 phases displayed
- Expandable/interactive elements
- Data flow visualization
- Mobile-friendly

### Story 12: Pricing Page
**Complexity:** 5 points
**Description:** Build pricing page with tiers and FAQ.

**Acceptance Criteria:**
- 3 pricing tiers
- FAQ accordion
- Responsive design

### Story 13: About Page
**Complexity:** 3 points
**Description:** Build about page with mission, story, team sections.

**Acceptance Criteria:**
- Content sections implemented
- Responsive layout
- Links working

### Story 14: Contact Page
**Complexity:** 3 points
**Description:** Build contact page with form and contact info.

**Acceptance Criteria:**
- Contact form (client-side, no backend yet)
- Contact information displayed
- Form validation

### Story 15: SEO & Meta Tags
**Complexity:** 3 points
**Description:** Add meta tags, OpenGraph, structured data, sitemap.

**Acceptance Criteria:**
- Meta tags on all pages
- OpenGraph images
- Sitemap.xml generated
- Robots.txt configured

### Story 16: Analytics Integration
**Complexity:** 2 points
**Description:** Integrate analytics (GA4 or Plausible).

**Acceptance Criteria:**
- Analytics tracking installed
- Page views tracked
- CTA click events tracked

### Story 17: Deployment Setup
**Complexity:** 3 points
**Description:** Configure Vercel deployment, custom domain, SSL.

**Acceptance Criteria:**
- Deployed to Vercel
- Custom domain configured
- SSL working
- Preview deployments for PRs

---

## Story Dependencies

```
Story 1 (Setup)
    ↓
Story 2 (Global Components)
    ↓
    ├── Story 3 (Hero)
    ├── Story 4 (Problem/Solution)
    ├── Story 5 (How It Works Summary)
    ├── Story 6 (Agent Showcase)
    ├── Story 7 (Features Grid)
    ├── Story 8 (Code Example)
    └── Story 9 (Pricing Preview & CTA)
    ↓
    ├── Story 10 (Features Page)
    ├── Story 11 (How It Works Page)
    ├── Story 12 (Pricing Page)
    ├── Story 13 (About Page)
    └── Story 14 (Contact Page)
    ↓
    ├── Story 15 (SEO)
    ├── Story 16 (Analytics)
    └── Story 17 (Deployment)
```

---

## Timeline Estimate

**Phase 1: Foundation** (Stories 1-2)
- Project setup and global components

**Phase 2: Homepage** (Stories 3-9)
- All homepage sections

**Phase 3: Secondary Pages** (Stories 10-14)
- Features, How It Works, Pricing, About, Contact

**Phase 4: Polish** (Stories 15-17)
- SEO, analytics, deployment

---

## Success Metrics

- **Traffic:** X unique visitors/month
- **Engagement:** Average time on site > 2 minutes
- **Conversion:** X% click-through to docs/GitHub
- **Performance:** Lighthouse score > 90
- **SEO:** Ranking for "AI development team", "AI agent orchestrator"

---

## Open Questions

1. **Docs hosting:** Embed in site or separate docs site (Docusaurus, GitBook)?
2. **Blog:** Include now or add later?
3. **Demo video:** Who creates this? Scripted walkthrough?
4. **Logo/branding:** Need designer or DIY?
5. **Domain:** What's the final domain?
6. **Analytics:** GA4 vs privacy-focused alternative?

---

## Appendix: Competitor Analysis (Brief)

| Product | Positioning | Key Differentiator |
|---------|-------------|-------------------|
| GitHub Copilot | AI pair programmer | Single-agent, in-editor |
| Cursor | AI-first IDE | IDE-integrated, single-agent |
| Devin | AI software engineer | Autonomous but single-agent |
| Sweep | AI junior developer | GitHub-integrated, single-agent |
| **Hive** | AI development team | Multi-agent, full SDLC, orchestration |

**Hive's unique position:** The only solution that models a complete development team with distinct roles, coordination, and the full lifecycle from requirement to PR.
