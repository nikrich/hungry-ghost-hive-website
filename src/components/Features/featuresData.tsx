import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 0C9.05 0 0 9.05 0 20s9.05 20 20 20 20-9.05 20-20S30.95 0 20 0zm0 36c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16z" />
        <circle cx="20" cy="12" r="2.5" />
        <circle cx="28" cy="20" r="2.5" />
        <circle cx="12" cy="20" r="2.5" />
        <circle cx="20" cy="28" r="2.5" />
      </svg>
    ),
    title: "Intelligent Delegation",
    paragraph:
      "Automatically assigns work based on complexity scoring. Stories are analyzed and assigned to the right agent type: Juniors handle 1-3 points, Intermediates take 4-5 points, Seniors tackle 6+ points.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M35 5H5C2.24 5 0 7.24 0 10v20c0 2.76 2.24 5 5 5h30c2.76 0 5-2.24 5-5V10c0-2.76-2.24-5-5-5zm0 25H5V10h30v20z" />
        <rect x="8" y="13" width="6" height="6" />
        <rect x="17" y="13" width="6" height="6" />
        <rect x="26" y="13" width="6" height="6" />
        <rect x="8" y="22" width="6" height="6" />
        <rect x="17" y="22" width="6" height="6" />
        <rect x="26" y="22" width="6" height="6" />
      </svg>
    ),
    title: "Real-time Dashboard",
    paragraph:
      "Monitor your AI team through an interactive dashboard. See live agent status, story pipeline progression, activity logs, and escalation notifications in real-time.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M25 5H15c-1.1 0-2 .9-2 2v26c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-4 28h-2v-2h2v2zm8-5H7V7h22v21z" />
        <path d="M12 12h16v2H12zm0 5h16v2H12zm0 5h16v2H12z" />
      </svg>
    ),
    title: "Multi-Repo Orchestration",
    paragraph:
      "Manage complex microservice architectures through git submodules. Tech Lead coordinates work across multiple repositories and tracks cross-repo dependencies.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 0C8.95 0 0 8.95 0 20s8.95 20 20 20 20-8.95 20-20S31.05 0 20 0zm0 36c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16z" />
        <path d="M20 8c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        <path d="M20 12c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
      </svg>
    ),
    title: "Human-in-the-Loop",
    paragraph:
      "Agents escalate to humans when they need guidance on architectural decisions, ambiguous requirements, or technical blockers. You stay in control while the system handles routine work.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M32 4H8C5.79 4 4 5.79 4 8v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm0 28H8V8h24v24z" />
        <rect x="10" y="10" width="20" height="20" />
        <path d="M16 18h8v2h-8zm0 4h8v2h-8z" />
      </svg>
    ),
    title: "State Persistence",
    paragraph:
      "All Hive state is persisted in SQLite, making the system resilient to crashes and restarts. Requirements, stories, assignments, and progress are stored durably with continuous checkpointing.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 2C10.06 2 2 10.06 2 20s8.06 18 18 18 18-8.06 18-18S29.94 2 20 2zm0 32c-7.73 0-14-6.27-14-14S12.27 6 20 6s14 6.27 14 14-6.27 14-14 14z" />
        <path d="M15 11h10c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H15c-1.1 0-2-.9-2-2V13c0-1.1.9-2 2-2zm2 2v12h6V13h-6z" />
      </svg>
    ),
    title: "Git & GitHub Integration",
    paragraph:
      "Seamless integration with your Git workflow. Agents automatically create feature branches, commit with clear messages, and create pull requests with comprehensive descriptions and CI/CD compatibility.",
  },
];
export default featuresData;
