"use client";

interface PhaseData {
  id: number;
  phase: string;
  title: string;
  icon: string;
  summary: string;
  details: string[];
  codeExample: string;
  dataFlow: string;
}

interface PhaseCardProps {
  phase: PhaseData;
  isExpanded: boolean;
  isLast: boolean;
  onToggle: () => void;
}

export default function PhaseCard({ phase, isExpanded, isLast, onToggle }: PhaseCardProps) {
  return (
    <div className="relative">
      {/* Timeline dot - hidden on mobile */}
      <div className="absolute left-8 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-primary ring-4 ring-white dark:ring-gray-900 md:block" />

      <div
        className={`ml-0 rounded-lg border transition-all duration-300 md:ml-20 ${
          isExpanded
            ? "border-primary bg-primary/5 shadow-lg dark:bg-primary/10"
            : "border-gray-200 bg-white hover:border-primary/50 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
        }`}
      >
        {/* Header - Always visible, clickable */}
        <button
          onClick={onToggle}
          className="w-full p-6 text-left transition-colors"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-1 items-start gap-4">
              <div className="text-4xl">{phase.icon}</div>
              <div className="flex-1">
                <div className="mb-1 text-sm font-semibold text-primary">
                  {phase.phase}
                </div>
                <h3 className="mb-2 text-xl font-bold text-black dark:text-white md:text-2xl">
                  {phase.title}
                </h3>
                <p className="text-body-color dark:text-body-color-dark">
                  {phase.summary}
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <svg
                className={`h-6 w-6 text-primary transition-transform ${
                  isExpanded ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </button>

        {/* Expanded content */}
        {isExpanded && (
          <div className="border-t border-gray-200 p-6 dark:border-gray-700">
            {/* Data Flow */}
            <div className="mb-6">
              <h4 className="mb-3 text-sm font-semibold uppercase text-black dark:text-white">
                Data Flow
              </h4>
              <div className="rounded-lg bg-gray-100 p-4 font-mono text-sm text-body-color dark:bg-gray-900 dark:text-body-color-dark">
                {phase.dataFlow}
              </div>
            </div>

            {/* Details */}
            <div className="mb-6">
              <h4 className="mb-3 text-sm font-semibold uppercase text-black dark:text-white">
                How It Works
              </h4>
              <ul className="space-y-2">
                {phase.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="flex-1 text-body-color dark:text-body-color-dark">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Code Example */}
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase text-black dark:text-white">
                Example
              </h4>
              <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm text-gray-100">
                <code>{phase.codeExample}</code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
