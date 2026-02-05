"use client";

import { useState } from "react";
import PhaseCard from "./PhaseCard";

const phasesData = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Requirement Intake",
    icon: "📝",
    summary: "Submit requirements via CLI and store them in the database for processing",
    details: [
      "Developer submits requirement using: hive req \"Add user authentication\"",
      "Requirement is assigned a unique ID (REQ-001) and stored in SQLite",
      "Requirement includes: description, context, acceptance criteria, and priority",
      "Tech Lead is automatically notified of new requirement",
      "Requirement enters the planning queue for analysis",
    ],
    codeExample: `$ hive req "Add JWT-based user authentication"

✓ Requirement created: REQ-042
  Description: Add JWT-based user authentication
  Priority: high
  Status: pending_planning

→ Tech Lead notified for planning`,
    dataFlow: "Developer → CLI → SQLite Database → Tech Lead Queue",
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "Planning & Estimation",
    icon: "🎯",
    summary: "Tech Lead analyzes requirements and breaks them into implementable stories with complexity estimates",
    details: [
      "Tech Lead Agent (Claude Opus) reads requirement from database",
      "Performs technical analysis: architecture impact, dependencies, risks",
      "Breaks requirement into atomic stories (user-facing features)",
      "Senior Agents provide complexity estimates (1-10 point scale)",
      "Stories are created with: title, description, acceptance criteria, complexity",
      "Stories enter the development queue, ready for agent assignment",
    ],
    codeExample: `Tech Lead analyzing REQ-042...

✓ Created 3 stories:
  STORY-042-1: "Implement JWT token generation" (6 pts)
  STORY-042-2: "Add auth middleware" (5 pts)
  STORY-042-3: "Create login UI" (3 pts)

→ Stories ready for assignment`,
    dataFlow: "Tech Lead Analysis → Story Creation → Complexity Estimation → Development Queue",
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "Autonomous Development",
    icon: "⚡",
    summary: "Multiple agents claim stories based on complexity and implement features in parallel",
    details: [
      "Agents query database for unclaimed stories matching their complexity range",
      "Junior agents claim 1-3 point stories",
      "Intermediate agents claim 4-5 point stories",
      "Senior agents claim 6+ point stories",
      "Each agent creates a feature branch and implements the story",
      "Agents commit code with clear messages and push to remote",
      "Agents update story status throughout development",
      "Multiple agents work simultaneously on different stories",
    ],
    codeExample: `Agents claiming stories:

Senior-1 claims STORY-042-1 (6 pts)
→ Created branch: feature/story-042-1-jwt-token
→ Implementing JWT generation...
✓ Committed: "feat: implement JWT token generation"

Intermediate-2 claims STORY-042-2 (5 pts)
→ Created branch: feature/story-042-2-auth-middleware
→ Implementing middleware...

Junior-3 claims STORY-042-3 (3 pts)
→ Created branch: feature/story-042-3-login-ui
→ Building login form...`,
    dataFlow: "Story Queue → Agent Assignment → Feature Branch → Implementation → Code Commit → Push",
  },
  {
    id: 4,
    phase: "Phase 4",
    title: "Code Review",
    icon: "👀",
    summary: "Senior developers review code for quality, correctness, and adherence to standards",
    details: [
      "Story transitions to 'review_requested' status after development",
      "Senior Agent is assigned as reviewer",
      "Reviewer checks: code quality, testing, architecture, security",
      "Reviewer leaves feedback as comments in the story",
      "If changes needed: story returns to development with feedback",
      "If approved: story advances to QA phase",
      "Review feedback is stored for agent learning",
    ],
    codeExample: `Senior-2 reviewing STORY-042-1:

✓ Code structure: Good
✓ JWT implementation: Secure
✓ Unit tests: Comprehensive
⚠ Feedback: "Add token expiry validation"

Status: changes_requested
→ Senior-1 implements feedback
→ Senior-2 re-reviews
✓ Approved → Ready for QA`,
    dataFlow: "Development Complete → Review Assignment → Code Analysis → Feedback Loop → Approval → QA Queue",
  },
  {
    id: 5,
    phase: "Phase 5",
    title: "Quality Assurance",
    icon: "🧪",
    summary: "QA agents run automated tests, linting, type checking, and validate acceptance criteria",
    details: [
      "QA Agent claims story from QA queue",
      "Checks out the feature branch",
      "Runs test suite: npm test or equivalent",
      "Runs linting: eslint, prettier",
      "Runs type checking: TypeScript",
      "Validates acceptance criteria are met",
      "If any check fails: story returns to development with details",
      "If all checks pass: story is marked as QA-approved",
    ],
    codeExample: `QA-1 testing STORY-042-1:

→ Checking out feature/story-042-1-jwt-token
→ Running test suite...
✓ 24/24 tests passed
→ Running linter...
✓ No issues found
→ Type checking...
✓ No errors
→ Validating acceptance criteria...
✓ All criteria met

Status: qa_approved → Ready for PR`,
    dataFlow: "QA Queue → Test Execution → Lint/Type Check → Acceptance Validation → Pass/Fail → PR Queue",
  },
  {
    id: 6,
    phase: "Phase 6",
    title: "PR Submission & Merge",
    icon: "🚀",
    summary: "Agents create pull requests with comprehensive descriptions, ready for merge to main",
    details: [
      "Agent creates GitHub PR via gh CLI",
      "PR title follows convention: \"Story XXX: <title>\"",
      "PR body includes: summary, changes list, acceptance criteria, test plan",
      "PR links back to story in Hive database",
      "PR is submitted to merge queue for human review (optional)",
      "CI/CD pipeline runs automated checks",
      "Once approved: PR is merged to main branch",
      "Story is marked as 'completed' in database",
    ],
    codeExample: `Agent creating PR for STORY-042-1:

$ gh pr create \\
  --title "Story 042-1: Implement JWT token generation" \\
  --body "..."

✓ Pull Request created: PR #156
  https://github.com/org/repo/pull/156

→ Added to merge queue
→ CI/CD checks running...
✓ All checks passed
→ Ready for merge

$ git merge feature/story-042-1-jwt-token
✓ Merged to main
✓ STORY-042-1 marked as completed`,
    dataFlow: "QA Approved → PR Creation → CI/CD Checks → Human Review (Optional) → Merge → Production",
  },
];

export default function HowItWorksTimeline() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(1);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
          The Autonomous Development Pipeline
        </h2>
        <p className="text-lg text-body-color dark:text-body-color-dark">
          Click each phase to expand and see detailed workflow steps
        </p>
      </div>

      <div className="relative">
        {/* Timeline vertical line - hidden on mobile */}
        <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary via-primary to-primary/30 md:block" />

        <div className="space-y-8">
          {phasesData.map((phase, index) => (
            <PhaseCard
              key={phase.id}
              phase={phase}
              isExpanded={expandedPhase === phase.id}
              isLast={index === phasesData.length - 1}
              onToggle={() =>
                setExpandedPhase(expandedPhase === phase.id ? null : phase.id)
              }
            />
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-lg bg-primary/5 p-8 text-center dark:bg-primary/10">
        <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
          Ready to See It In Action?
        </h3>
        <p className="mb-6 text-body-color dark:text-body-color-dark">
          Experience autonomous development with your own AI team
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://github.com/hungry-ghost/hive"
            className="rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
          >
            Get Started - Open Source
          </a>
          <a
            href="/features"
            className="rounded-lg border-2 border-primary px-8 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            Explore All Features
          </a>
        </div>
      </div>
    </div>
  );
}
