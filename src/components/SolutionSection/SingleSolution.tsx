interface Solution {
  id: number;
  title: string;
  description: string;
}

interface SingleSolutionProps {
  solution: Solution;
}

const SingleSolution: React.FC<SingleSolutionProps> = ({ solution }) => {
  return (
    <div className="rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 p-8 text-center dark:from-primary-900/20 dark:to-primary-800/20">
      <h3 className="mb-3 text-3xl font-bold text-primary-700 dark:text-primary-300">
        {solution.title}
      </h3>
      <p className="text-body-color dark:text-body-color-dark">
        {solution.description}
      </p>
    </div>
  );
};

export default SingleSolution;
