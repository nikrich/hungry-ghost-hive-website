"use client";

interface FeatureDetailProps {
  id: string;
  icon: string;
  title: string;
  description: string;
  details: string[];
  codeExample: string;
  docsLink?: string;
  screenshotPlaceholder?: boolean;
}

const FeatureDetailSection = ({
  icon,
  title,
  description,
  details,
  codeExample,
  docsLink,
  screenshotPlaceholder,
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

      {/* Screenshot placeholder (if applicable) */}
      {screenshotPlaceholder && (
        <div className="mb-8 flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-100 p-12 dark:border-gray-600 dark:bg-gray-900/30">
          <div className="text-center">
            <svg
              className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Screenshot coming soon
            </p>
          </div>
        </div>
      )}

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
      <div className="mb-6 overflow-hidden rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900/50">
        <div className="px-6 py-4">
          <pre className="overflow-x-auto font-mono text-sm text-gray-800 dark:text-gray-300">
            <code>{codeExample}</code>
          </pre>
        </div>
      </div>

      {/* Documentation link */}
      {docsLink && (
        <div className="flex justify-end">
          <a
            href={docsLink}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary-dark dark:text-primary-light dark:hover:text-primary"
          >
            Learn more in documentation
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default FeatureDetailSection;
