"use client";

import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Open Source & Community Driven"
          paragraph="Hive is built on the principle that AI agents should be open, transparent, and community-driven. We believe in giving developers full control over their AI workflows."
          center
          mb="50px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="wow fadeInUp mb-12 rounded-md bg-white p-8 shadow-one dark:bg-gray-800/30" data-wow-delay=".1s">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-md bg-primary/10">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4m0 0l1 1m-1-1l-1 1m1-1l1-1m-1 1l-1-1"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Transparent Code
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                All Hive code is open source under Apache 2.0. No proprietary lock-in. You own your AI workflows.
              </p>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="wow fadeInUp mb-12 rounded-md bg-white p-8 shadow-one dark:bg-gray-800/30" data-wow-delay=".15s">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-md bg-primary/10">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Customizable
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Bring your own LLM providers. Use Claude, GPT, or any model. Full control over your stack.
              </p>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="wow fadeInUp mb-12 rounded-md bg-white p-8 shadow-one dark:bg-gray-800/30" data-wow-delay=".2s">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-md bg-primary/10">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM15 20H9m6 0h.01"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Community First
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Built by developers, for developers. Community contributions drive features and improvements.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="mb-4 text-body-color dark:text-body-color-dark">
            Have questions? Check our GitHub or reach out to the community.
          </p>
          <a
            href="https://github.com/nikrich/hungry-ghost-hive"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-primary px-8 py-4 font-semibold text-white transition-colors duration-300 hover:bg-opacity-90"
          >
            Star on GitHub
            <svg
              className="ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
