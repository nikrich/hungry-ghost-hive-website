import SectionTitle from "../Common/SectionTitle";
import SingleSolution from "./SingleSolution";

const solutionsData = [
  {
    id: 1,
    title: "100% Autonomous",
    description: "From requirement to PR without human intervention.",
  },
  {
    id: 2,
    title: "24/7 Development",
    description: "AI agents don't sleep—your features ship around the clock.",
  },
  {
    id: 3,
    title: "Production Ready",
    description: "Real Git integration, CI/CD compatible, battle-tested.",
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Meet Hive: Your Autonomous AI Development Team"
          paragraph="Hive is an AI Agent Orchestrator. Submit a requirement, and Hive's team of AI agents—Tech Lead, Seniors, Juniors, and QA—autonomously plan, implement, review, and ship your feature."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
          {solutionsData.map((solution) => (
            <SingleSolution key={solution.id} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
