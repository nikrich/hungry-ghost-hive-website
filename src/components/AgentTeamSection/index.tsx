"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleAgent from "./SingleAgent";

const agentData = [
  {
    id: 1,
    role: "Tech Lead",
    model: "Claude Opus",
    color: "from-purple-600 to-purple-700",
    responsibilities: [
      "Orchestrates planning",
      "Breaks down requirements",
      "Manages cross-repo work",
    ],
  },
  {
    id: 2,
    role: "Senior Developer",
    model: "Claude Sonnet",
    color: "from-blue-600 to-blue-700",
    responsibilities: [
      "Complex implementations (6+ points)",
      "Code review",
      "Mentors juniors",
    ],
  },
  {
    id: 3,
    role: "Intermediate Developer",
    model: "Claude Haiku",
    color: "from-indigo-600 to-indigo-700",
    responsibilities: [
      "Medium complexity tasks (4-5 points)",
      "Feature implementation",
      "Pattern development",
    ],
  },
  {
    id: 4,
    role: "Junior Developer",
    model: "GPT-4o-mini",
    color: "from-cyan-600 to-cyan-700",
    responsibilities: [
      "Simple tasks (1-3 points)",
      "Learns patterns",
      "Assists seniors",
    ],
  },
  {
    id: 5,
    role: "QA Engineer",
    model: "Claude Sonnet",
    color: "from-green-600 to-green-700",
    responsibilities: [
      "Runs tests & linting",
      "Type checks",
      "Approves PRs",
    ],
  },
];

const AgentTeamSection = () => {
  return (
    <section id="agent-team" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="A Team That Works Like Yours"
          paragraph="Five specialized AI agents, each with distinct expertise, coordinating autonomously to ship production-ready code."
          center
        />

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-x-4 lg:gap-y-10">
          {agentData.map((agent) => (
            <SingleAgent key={agent.id} agent={agent} />
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6 text-center dark:border-gray-700 dark:bg-gray-800/50">
          <p className="text-sm text-body-color dark:text-body-color-dark">
            <strong>Customizable:</strong> Models are configurable—use any LLM provider you prefer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgentTeamSection;
