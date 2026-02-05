"use client";

import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleStep from "./SingleStep";

const stepsData = [
  {
    id: 1,
    number: 1,
    title: "Submit a Requirement",
    description:
      'Run "hive req \\"Add user authentication\\"" - one command, that\'s it.',
  },
  {
    id: 2,
    number: 2,
    title: "AI Team Plans",
    description:
      "Tech Lead breaks it down, Seniors estimate complexity, stories are created.",
  },
  {
    id: 3,
    number: 3,
    title: "Autonomous Development",
    description:
      "Agents implement based on complexity. Juniors handle simple tasks, Seniors tackle complex ones.",
  },
  {
    id: 4,
    number: 4,
    title: "Review, QA, Ship",
    description:
      "Code reviewed by Seniors, tested by QA agent, PR submitted automatically.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Ship Features in 4 Steps"
          paragraph="From requirement to production-ready code in a coordinated workflow powered by your AI team."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-14">
          {stepsData.map((step) => (
            <SingleStep key={step.id} step={step} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/how-it-works"
            className="inline-flex items-center rounded-lg bg-primary px-8 py-4 font-semibold text-white transition-colors duration-300 hover:bg-opacity-90"
          >
            See the Full Workflow
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
