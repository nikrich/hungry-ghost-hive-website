"use client";

import Link from "next/link";

const FinalCTA = () => {
  return (
    <section id="final-cta" className="relative py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="rounded-lg bg-gradient-to-r from-primary to-primary/80 px-8 py-12 text-center md:px-12 md:py-16 dark:from-primary/90 dark:to-primary/70">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Ready to Ship Faster?
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Get started with Hive in minutes.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-semibold text-primary transition-colors duration-300 hover:bg-gray-100"
            >
              Read the Docs
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            <a
              href="https://github.com/nikrich/hungry-ghost-hive"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors duration-300 hover:bg-white/10"
            >
              Star on GitHub
              <svg
                className="ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
            </a>
          </div>

          <p className="mt-8 text-sm text-white/70">
            No credit card required. Start building autonomous AI features today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
