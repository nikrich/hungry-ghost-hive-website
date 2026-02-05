"use client";

const workflowPhases = [
  {
    id: 1,
    number: "01",
    title: "Requirement Intake",
    description:
      "Submit requirements via CLI (hive req) or API. Requirements are parsed and stored in the database with full audit trail.",
    details: [
      "CLI submission with requirement text",
      "API endpoint for programmatic access",
      "Full requirement history tracking",
      "Integration with version control",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Planning & Estimation",
    description:
      "Tech Lead analyzes requirements, breaks them into stories, and estimates complexity (1-10 scale).",
    details: [
      "Intelligent requirement analysis",
      "Automatic story generation",
      "Complexity estimation",
      "Dependency mapping",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Intelligent Delegation",
    description:
      "Stories are assigned to agents based on complexity: Juniors (1-3 pts), Intermediates (4-5 pts), Seniors (6+ pts).",
    details: [
      "Complexity-based assignment",
      "Load balancing across agents",
      "Workload management",
      "Automatic re-assignment on blockers",
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Autonomous Development",
    description:
      "Agents implement assigned stories in parallel, writing code, creating commits, and submitting PRs automatically.",
    details: [
      "Parallel implementation across agents",
      "Automated code generation",
      "Git workflow automation",
      "Real-time progress tracking",
    ],
  },
  {
    id: 5,
    number: "05",
    title: "Code Review & Quality",
    description:
      "Senior agents review code, run tests and linting, request changes if needed, and approve when ready.",
    details: [
      "Comprehensive code review",
      "Automated testing execution",
      "Linting and type checking",
      "Quality gate enforcement",
    ],
  },
  {
    id: 6,
    number: "06",
    title: "Merge & Ship",
    description:
      "Approved PRs are merged to main and automatically deployed to production or staging environment.",
    details: [
      "CI/CD pipeline integration",
      "Automatic deployment",
      "Rollback capabilities",
      "Production monitoring",
    ],
  },
];

export default function HowItWorksTimeline() {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mb-16">
          <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl dark:text-white">
            6-Phase Development Workflow
          </h2>
          <p className="text-lg text-body-color dark:text-body-color-dark">
            From requirement to production in a coordinated, autonomous workflow
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent md:left-1/2 md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {workflowPhases.map((phase, index) => (
              <div key={phase.id} className={`md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Content */}
                <div className="ml-16 md:ml-0 md:w-1/2">
                  <div className={`rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}>
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">
                        {phase.number}
                      </div>
                      <h3 className="text-2xl font-bold text-black dark:text-white">
                        {phase.title}
                      </h3>
                    </div>
                    <p className="mb-6 text-body-color dark:text-body-color-dark">
                      {phase.description}
                    </p>
                    <ul className="space-y-2">
                      {phase.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-body-color dark:text-body-color-dark">
                          <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="relative flex justify-center md:w-0">
                  <div className="absolute left-4 top-8 h-6 w-6 -translate-x-2.5 rounded-full border-4 border-white bg-primary dark:border-gray-900 md:left-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-body-color dark:text-body-color-dark">
            Ready to see Hive in action?{" "}
            <a href="/docs" className="font-semibold text-primary hover:underline">
              Read the documentation
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
