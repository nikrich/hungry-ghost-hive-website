interface Problem {
  id: number;
  title: string;
  description: string;
}

interface SingleProblemProps {
  problem: Problem;
}

const SingleProblem: React.FC<SingleProblemProps> = ({ problem }) => {
  return (
    <div className="rounded-lg bg-gradient-to-br from-red-50 to-red-100 p-8 text-center dark:from-red-900/20 dark:to-red-800/20">
      <h3 className="mb-3 text-3xl font-bold text-red-600 dark:text-red-300">
        {problem.title}
      </h3>
      <p className="text-body-color dark:text-body-color-dark">
        {problem.description}
      </p>
    </div>
  );
};

export default SingleProblem;
