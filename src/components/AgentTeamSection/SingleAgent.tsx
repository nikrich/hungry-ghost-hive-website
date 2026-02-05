interface Agent {
  id: number;
  role: string;
  model: string;
  color: string;
  responsibilities: string[];
}

interface SingleAgentProps {
  agent: Agent;
}

const SingleAgent = ({ agent }: SingleAgentProps) => {
  return (
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
      {/* Agent Header with Color */}
      <div
        className={`h-20 rounded-t-lg bg-gradient-to-r ${agent.color}`}
      />

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-1 text-xl font-bold text-black dark:text-white">
          {agent.role}
        </h3>
        <p className="mb-4 text-sm font-semibold text-primary-700 dark:text-primary-400">
          {agent.model}
        </p>

        {/* Responsibilities */}
        <div className="flex-1">
          <p className="mb-3 text-xs font-semibold uppercase text-body-color dark:text-body-color-dark">
            Responsibilities
          </p>
          <ul className="space-y-2">
            {agent.responsibilities.map((responsibility, index) => (
              <li
                key={index}
                className="flex items-start text-sm text-body-color dark:text-body-color-dark"
              >
                <span className="mr-2 mt-1 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-700" />
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleAgent;
