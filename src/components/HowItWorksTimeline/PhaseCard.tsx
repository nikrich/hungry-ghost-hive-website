"use client";

interface Phase {
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
  phase: Phase;
  isExpanded: boolean;
  isLast: boolean;
  onToggle: () => void;
}

export default function PhaseCard({
  phase,
  isExpanded,
  isLast,
  onToggle,
}: PhaseCardProps) {
  return (
    <div className="relative">
      {/* Timeline dot and connector */}
      <div className="absolute left-0 top-8 flex flex-col items-center md:left-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl ring-4 ring-white dark:bg-gray-900 dark:ring-gray-900">
          {phase.icon}
        </div>
        {!isLast && (
          <div className="h-12 w-1 bg-gradient-to-b from-primary to-primary/30" />
        )}
      </div>

      {/* Card content */}
      <div className="ml-24 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 md:ml-32">
        <button
          onClick={onToggle}
          className="w-full text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="mb-2 text-sm font-semibold text-primary">
                {phase.phase}
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white">
                {phase.title}
              </h3>
              <p className="mt-2 text-body-color dark:text-body-color-dark">
                {phase.summary}
              </p>
            </div>
            <svg
              className={`ml-4 h-6 w-6 flex-shrink-0 text-primary transition-transform ${
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
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </button>

        {/* Expanded content */}
        {isExpanded && (
          <div className="mt-6 space-y-6 border-t border-gray-200 pt-6 dark:border-gray-700">
            {/* Details list */}
            <div>
              <h4 className="mb-4 font-semibold text-black dark:text-white">
                Key Steps:
              </h4>
              <ul className="space-y-3">
                {phase.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-body-color dark:text-body-color-dark"
                  >
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Code example */}
            <div>
              <h4 className="mb-4 font-semibold text-black dark:text-white">
                Example:
              </h4>
              <div className="overflow-hidden rounded-lg border border-gray-700 bg-gray-900">
                <pre className="overflow-x-auto p-4 font-mono text-sm text-green-400">
                  <code>{phase.codeExample}</code>
                </pre>
              </div>
            </div>

            {/* Data flow */}
            <div>
              <h4 className="mb-4 font-semibold text-black dark:text-white">
                Data Flow:
              </h4>
              <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-4 font-mono text-sm dark:bg-primary/10">
                <p className="text-body-color dark:text-body-color-dark">
                  {phase.dataFlow}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
