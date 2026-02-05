"use client";

import SectionTitle from "../Common/SectionTitle";

const CodeExampleSection = () => {
  const codeExample = `$ hive req "Add OAuth2 authentication with Google and GitHub providers"

✓ Requirement REQ-001 created
✓ Tech Lead spawned - analyzing requirement...
✓ 3 stories created:
  - STORY-001: Set up OAuth2 provider config (3 pts) → Junior
  - STORY-002: Implement Google OAuth flow (5 pts) → Intermediate
  - STORY-003: Implement GitHub OAuth flow (5 pts) → Intermediate
✓ Development started...

$ hive dashboard
# Opens real-time TUI dashboard showing agent progress`;

  return (
    <section id="code-example" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="One Command to Ship a Feature"
          paragraph="Watch how Hive breaks down your requirements into stories and starts autonomous development instantly."
          center
        />

        <div className="mx-auto max-w-4xl rounded-lg border border-gray-700 bg-gray-900 shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center bg-gray-950 px-6 py-4 border-b border-gray-700">
            <div className="flex space-x-3">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <span className="ml-4 text-sm font-semibold text-gray-400">hive-shell</span>
          </div>

          {/* Terminal Content */}
          <div className="overflow-x-auto p-6">
            <pre className="font-mono text-sm leading-relaxed">
              <code className="text-green-400">
                {codeExample.split('\n').map((line, index) => (
                  <div key={index}>
                    {line.startsWith('$') && <span className="text-blue-400">{line.substring(0, 1)}</span>}
                    {line.startsWith('$') ? (
                      <>
                        <span className="text-blue-400">$ </span>
                        <span className="text-white">{line.substring(2)}</span>
                      </>
                    ) : line.startsWith('#') ? (
                      <span className="text-gray-500">{line}</span>
                    ) : (
                      <span>{line}</span>
                    )}
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </div>

        {/* Description */}
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
              That's it. Hive handles the rest.
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-body-color dark:text-body-color-dark">
                  <strong>Autonomous planning:</strong> Tech Lead analyzes your requirement and breaks it into stories
                </span>
              </li>
              <li className="flex items-start">
                <svg className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-body-color dark:text-body-color-dark">
                  <strong>Smart delegation:</strong> Stories are assigned based on complexity to the right agent
                </span>
              </li>
              <li className="flex items-start">
                <svg className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-body-color dark:text-body-color-dark">
                  <strong>Live progress:</strong> Watch your team work in real-time on the dashboard
                </span>
              </li>
              <li className="flex items-start">
                <svg className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-body-color dark:text-body-color-dark">
                  <strong>Quality guaranteed:</strong> PRs created automatically with all reviews and tests passed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExampleSection;
