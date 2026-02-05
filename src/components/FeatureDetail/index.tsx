"use client";

interface FeatureDetailProps {
  id: string;
  icon: string;
  title: string;
  description: string;
  details: string[];
  codeExample: string;
}

const FeatureDetailSection = ({
  icon,
  title,
  description,
  details,
  codeExample,
}: FeatureDetailProps) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
      {/* Header with icon and title */}
      <div className="mb-6 flex items-start gap-4">
        <span className="text-4xl">{icon}</span>
        <div>
          <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
            {title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="mb-6 text-body-color dark:text-body-color-dark">
        {description}
      </p>

      {/* Details list */}
      <div className="mb-8">
        <h4 className="mb-4 font-semibold text-black dark:text-white">
          Key Benefits:
        </h4>
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li
              key={index}
              className="flex items-start text-body-color dark:text-body-color-dark"
            >
              <span className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary-700">
                ✓
              </span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Code example */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900/50">
        <div className="px-6 py-4">
          <pre className="overflow-x-auto font-mono text-sm text-gray-800 dark:text-gray-300">
            <code>{codeExample}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetailSection;
