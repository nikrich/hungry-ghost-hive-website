import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import FeatureDetailSection from "@/components/FeatureDetail";

export const metadata: Metadata = {
  title: "Features | Hive - AI Agent Orchestrator",
  description: "Explore Hive's powerful features: autonomous agent teams, intelligent delegation, workflow automation, and more.",
};

const featuresData = [
  {
    id: "autonomous-agent-team",
    icon: "👥",
    title: "Autonomous Agent Team",
    description: `Hive models a complete development team with distinct roles and responsibilities. Each agent type - Tech Lead (Opus), Senior Developer (Sonnet), Intermediate Developer (Haiku), Junior Developer (GPT-4o-mini), and QA Engineer (Sonnet) - operates with specialized capabilities and coordination protocols. The Tech Lead orchestrates planning and breaks down requirements, Seniors handle complex implementations and code reviews, Intermediates tackle medium-complexity tasks, Juniors learn patterns and handle simple work, and QA ensures quality through comprehensive testing.`,
    details: [
      "Tech Lead (Claude Opus) - Requirement analysis, story breakdown, cross-repo orchestration",
      "Senior Developers (Claude Sonnet) - Complex implementations (6+ points), code review, mentorship",
      "Intermediate Developers (Claude Haiku) - Medium tasks (4-5 points), balanced capability",
      "Junior Developers (GPT-4o-mini) - Simple tasks (1-3 points), pattern learning",
      "QA Engineers (Claude Sonnet) - Testing, linting, type checking, PR approval"
    ],
    codeExample: `# Agents coordinate automatically
Tech Lead: Creates STORY-001, STORY-002, STORY-003
Senior: Claims STORY-001 (8 pts complexity)
Junior: Claims STORY-003 (2 pts complexity)
QA: Reviews and approves completed work`,
  },
  {
    id: "intelligent-delegation",
    icon: "⚖️",
    title: "Intelligent Task Delegation",
    description: `Hive automatically assigns work based on complexity scoring. Each story is analyzed and assigned a complexity score (1-10) considering factors like architectural changes, integration complexity, testing requirements, and technical risk. Stories are then delegated to the appropriate agent type: Juniors handle 1-3 points, Intermediates take 4-5 points, and Seniors tackle 6+ points. This ensures optimal resource utilization and prevents junior agents from being overwhelmed by complex tasks while keeping senior agents focused on high-value work.`,
    details: [
      "Automatic complexity scoring based on story analysis",
      "Right-sized assignments prevent over/under-utilization",
      "Workload balancing across available agents",
      "Dynamic re-assignment when agents are blocked"
    ],
    codeExample: `Story Complexity Scoring:
- Story: "Add OAuth2 Google login" → 5 pts → Intermediate
- Story: "Update button color" → 2 pts → Junior
- Story: "Refactor auth architecture" → 8 pts → Senior`,
  },
  {
    id: "workflow-automation",
    icon: "🔄",
    title: "Complete Workflow Automation",
    description: `From requirement submission to production deployment, Hive automates the entire software development lifecycle. The workflow progresses through six distinct phases: Requirement Intake (CLI submission, database storage), Planning & Estimation (Tech Lead analysis, story creation), Development (parallel implementation by multiple agents), Code Review (Senior-led review cycles), Quality Assurance (automated testing and validation), and PR Submission & Merge (GitHub integration with CI/CD compatibility). Each phase completes autonomously before proceeding to the next.`,
    details: [
      "Phase 1: Requirement intake via CLI → Database",
      "Phase 2: Tech Lead plans, Seniors estimate → Stories created",
      "Phase 3: Agents implement in parallel → Code committed",
      "Phase 4: Seniors review → Feedback loop until approved",
      "Phase 5: QA runs tests, lint, types → Pass/Fail",
      "Phase 6: PR created automatically → Ready for merge"
    ],
    codeExample: `$ hive req "Add user authentication"
✓ REQ-001 created → Tech Lead analyzing...
✓ 3 stories created → Agents assigned
✓ Development in progress...
✓ Code review passed → QA testing
✓ All checks passed → PR #42 created`,
  },
  {
    id: "realtime-dashboard",
    icon: "📊",
    title: "Real-time Dashboard",
    description: `Monitor your AI development team through an interactive TUI dashboard. The dashboard provides live visibility into agent status, story pipeline progression, active work streams, escalation notifications, and detailed activity logs. See which agents are working on which stories, track progress through the pipeline stages (Planned → In Progress → Review → QA → Complete), and get real-time notifications when agents need human guidance or encounter blockers.`,
    details: [
      "Live agent status panel showing current work",
      "Story pipeline visualization (Kanban-style)",
      "Activity log with timestamped events",
      "Escalation alerts requiring human input",
      "Resource utilization metrics"
    ],
    codeExample: `$ hive dashboard

┌─ Agents ──────────────────┐  ┌─ Pipeline ─────────────┐
│ Senior-1  → STORY-005 ⚡️  │  │ Planned:     7 stories │
│ Junior-2  → STORY-003 ⚡️  │  │ In Progress: 3 stories │
│ QA-1      → Testing   🧪  │  │ Review:      2 stories │
└───────────────────────────┘  │ Complete:    12 stories│
                                └────────────────────────┘`,
  },
  {
    id: "escalation-protocol",
    icon: "🤝",
    title: "Human-in-the-Loop Escalation",
    description: `While Hive operates autonomously, it knows when to ask for help. Agents escalate to humans when they encounter ambiguous requirements, technical blockers, architectural decisions requiring input, or situations outside their training. Escalations pause the agent's work, notify you through the dashboard and CLI, and wait for your response before proceeding. You stay in control while the system handles routine work automatically.`,
    details: [
      "Agents detect when they need human guidance",
      "Escalations include context and specific questions",
      "Work pauses until human responds",
      "Dashboard and CLI notifications",
      "Escalation history tracked for learning"
    ],
    codeExample: `🚨 Escalation from Senior-1 on STORY-005:

Question: "Should we use JWT or session-based auth?
Both are viable. JWT offers stateless scaling but
requires key rotation. Sessions are simpler but
need Redis/Memcached for multi-instance setups."

$ hive escalations respond ESC-001 "Use JWT"
✓ Senior-1 resuming work with your guidance`,
  },
  {
    id: "multi-repo",
    icon: "🌳",
    title: "Multi-Repo Orchestration",
    description: `Hive manages complex microservice architectures through git submodules. The Tech Lead coordinates work across multiple repositories, tracking cross-repo dependencies and ensuring coordinated releases. When a requirement spans multiple services (e.g., "Add new API endpoint" affecting both backend and frontend), Hive creates stories for each affected repo, assigns them to appropriate agents, and manages the integration work.`,
    details: [
      "Git submodules for service organization",
      "Cross-repo dependency tracking",
      "Coordinated multi-service releases",
      "Tech Lead orchestrates integration work",
      "Agents work within their assigned repos"
    ],
    codeExample: `# Requirement affects 3 services
REQ-001: "Add payment processing"
  → backend-api: STORY-001 (API endpoint)
  → frontend-web: STORY-002 (UI integration)
  → worker-service: STORY-003 (async processing)

Tech Lead coordinates cross-repo integration`,
  },
  {
    id: "state-persistence",
    icon: "💾",
    title: "State Persistence & Recovery",
    description: `All Hive state is persisted in a SQLite database, making the system resilient to crashes and restarts. Requirements, stories, agent assignments, work progress, code changes, and escalations are all stored durably. If Hive crashes or you restart your machine, simply run 'hive resume' and all agents pick up exactly where they left off. Checkpointing occurs continuously, so no work is ever lost.`,
    details: [
      "SQLite database for all state storage",
      "Continuous checkpointing of agent work",
      "Crash recovery with zero data loss",
      "Resume command restarts all agents",
      "Full audit trail of all changes"
    ],
    codeExample: `$ hive dashboard
# System crashes! 💥

# Later...
$ hive resume
✓ Restored 3 agents from checkpoint
✓ Senior-1 resuming STORY-005 at line 42
✓ Junior-2 resuming STORY-003
✓ QA-1 re-running test suite`,
  },
  {
    id: "git-integration",
    icon: "🔗",
    title: "Git & GitHub Integration",
    description: `Hive integrates seamlessly with your existing Git and GitHub workflows. Agents automatically create feature branches following your naming conventions, commit code with clear messages referencing story IDs, push to remote repositories, and create pull requests with comprehensive descriptions. PRs include links to stories, list all changes, and are ready for human review or automatic merge based on your CI/CD configuration.`,
    details: [
      "Automatic feature branch creation",
      "Clear commit messages with story references",
      "PR creation with detailed descriptions",
      "CI/CD integration (GitHub Actions, etc.)",
      "Supports GitHub Enterprise and self-hosted Git"
    ],
    codeExample: `# Agent workflow
1. Agent creates: feature/story-005-add-auth
2. Agent commits: "feat: implement JWT auth (STORY-005)"
3. Agent pushes: origin/feature/story-005-add-auth
4. Agent opens PR: "Story 005: Add JWT Authentication"

PR includes: Story link, changes summary, test plan`,
  },
  {
    id: "configuration",
    icon: "⚙️",
    title: "Flexible Configuration",
    description: `Configure Hive to match your team's needs through a simple YAML file. Choose which AI models to use for each agent type (supports OpenAI, Anthropic, and custom providers), set complexity thresholds for task delegation, customize agent behavior and personas, configure repository locations, and define escalation triggers. Hive adapts to your preferences while maintaining autonomous operation.`,
    details: [
      "YAML-based configuration",
      "Customizable AI model selection per agent type",
      "Adjustable complexity scoring thresholds",
      "Agent persona customization",
      "Repository and Git settings"
    ],
    codeExample: `# hive.config.yaml
agents:
  tech_lead:
    model: anthropic/claude-opus-4
  senior:
    model: anthropic/claude-sonnet-4
    complexity_min: 6
  junior:
    model: openai/gpt-4o-mini
    complexity_max: 3

repository:
  main: ./repos/my-app
  submodules:
    - ./repos/backend-api
    - ./repos/frontend-web`,
  },
  {
    id: "manager-daemon",
    icon: "🔧",
    title: "Manager Daemon",
    description: `The Hive Manager is a background daemon that monitors agent health and keeps your team productive. It detects when agents get stuck, have been idle too long, or encounter repeated failures. The manager can automatically restart stalled agents, reassign problematic stories, and alert you to systemic issues. It also handles graceful shutdown, ensuring all work is checkpointed before agents terminate.`,
    details: [
      "Continuous agent health monitoring",
      "Automatic restart of stalled agents",
      "Idle timeout detection and recovery",
      "Failure pattern analysis",
      "Graceful shutdown with checkpointing"
    ],
    codeExample: `$ hive manager start
✓ Manager daemon started (PID 1234)

# Manager detects stuck agent
⚠️  Senior-1 idle for 10m on STORY-005
→ Manager: Restarting agent...
✓ Senior-1 restarted, resumed from checkpoint

$ hive manager status
✓ All agents healthy
✓ 3 restarts in last 24h
✓ 0 escalations pending`,
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Breadcrumb
        pageName="Features"
        description="Explore Hive's powerful capabilities for autonomous software development"
      />

      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container">
          <div className="flex flex-col gap-16">
            {featuresData.map((feature) => (
              <FeatureDetailSection key={feature.id} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
