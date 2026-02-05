import SectionTitle from "../Common/SectionTitle";
import SingleProblem from "./SingleProblem";

const problemsData = [
  {
    id: 1,
    title: "Manual Coordination",
    description:
      "Planning, assigning, reviewing, merging—hours spent on coordination instead of building.",
  },
  {
    id: 2,
    title: "Bottlenecks at Scale",
    description:
      "More features mean more developers, more meetings, more slowdowns.",
  },
  {
    id: 3,
    title: "24/7 is Impossible",
    description: "Your team sleeps. Competitors ship around the clock.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Development is Full of Friction"
          paragraph="Building at scale is complex. Coordinate teams, manage bottlenecks, and lose precious hours to meetings instead of building."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
          {problemsData.map((problem) => (
            <SingleProblem key={problem.id} problem={problem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
