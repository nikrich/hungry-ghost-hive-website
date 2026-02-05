import Link from "next/link";
import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Pricing | Hive - AI Agent Orchestrator",
  description:
    "Simple, transparent pricing for Hive. Start free with open source, upgrade to Pro or Enterprise for managed hosting and support.",
};

const pricingTiers = [
  {
    id: 1,
    title: "Open Source",
    price: "Free",
    description: "Self-hosted, bring your own API keys",
    features: [
      "Self-hosted deployment",
      "Bring your own API keys",
      "Full feature set",
      "Community support",
      "Apache 2.0 components",
    ],
    highlight: false,
    cta: "View Docs",
    ctaHref: "/docs",
  },
  {
    id: 2,
    title: "Pro",
    price: "Coming Soon",
    description: "Managed hosting with priority support",
    features: [
      "Managed cloud hosting",
      "API key management",
      "Priority email support",
      "Usage analytics dashboard",
      "Team collaboration features",
    ],
    highlight: true,
    cta: "Notify Me",
    ctaHref: "#",
  },
  {
    id: 3,
    title: "Enterprise",
    price: "Custom",
    description: "Dedicated infrastructure and support",
    features: [
      "Dedicated infrastructure",
      "SSO/SAML integration",
      "99.9% SLA",
      "Dedicated support engineer",
      "Custom integrations",
      "On-premise deployment",
    ],
    highlight: false,
    cta: "Contact Sales",
    ctaHref: "/contact",
  },
];

const faqData = [
  {
    id: 1,
    question: "What API keys do I need?",
    answer:
      "For the open-source version, you'll need API keys from your chosen LLM providers. Hive supports Anthropic (Claude models), OpenAI (GPT models), and other compatible providers. You can configure which models to use for each agent role in your hive.config.yaml file.",
  },
  {
    id: 2,
    question: "Can I use my own models?",
    answer:
      "Yes! Hive is model-agnostic. You can use any LLM provider you prefer. The open-source version lets you configure models at the agent level, so you could use Claude for seniors, GPT for juniors, and other models for other roles.",
  },
  {
    id: 3,
    question: "Is my code sent to third parties?",
    answer:
      "With the self-hosted open-source version, your code stays on your infrastructure. You control where data goes - you can point Hive to your local LLM or any private endpoint. The Pro and Enterprise managed versions can be configured to comply with any data residency requirements.",
  },
  {
    id: 4,
    question: "How does billing work for Pro?",
    answer:
      "Pro is billed based on your usage of the managed Hive platform. You pay for compute resources, API calls, and storage. Detailed usage analytics help you understand costs. Enterprise plans are custom-quoted based on your specific needs.",
  },
  {
    id: 5,
    question: "Do you offer discounts for startups?",
    answer:
      "Yes! We support early-stage startups with special pricing. The open-source version is completely free, so that's perfect for getting started. For Pro tier early-stage companies, reach out to our team for startup discounts and special terms.",
  },
  {
    id: 6,
    question: "Can I switch plans later?",
    answer:
      "Absolutely. You can start with the free open-source version and upgrade to Pro or Enterprise whenever you're ready. Your configuration and workflows transfer seamlessly between versions.",
  },
];

export default function PricingPage() {

  return (
    <>
      <Breadcrumb
        pageName="Pricing"
        description="Simple, transparent pricing for every stage of your journey"
      />

      {/* Pricing Tiers Section */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-black md:text-5xl dark:text-white">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-body-color dark:text-body-color-dark">
              Choose the plan that fits your needs. Start free, upgrade when
              you're ready.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-lg border-2 p-8 transition-all duration-300 ${
                  tier.highlight
                    ? "border-primary bg-primary/5 shadow-lg dark:bg-primary/10"
                    : "border-gray-200 dark:border-gray-700"
                }`}
              >
                <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
                  {tier.title}
                </h3>
                <p className="mb-6 text-body-color dark:text-body-color-dark">
                  {tier.description}
                </p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-primary">
                      {tier.price}
                    </span>
                    {tier.price !== "Coming Soon" &&
                      tier.price !== "Custom" && (
                        <span className="text-body-color dark:text-body-color-dark">
                          /month
                        </span>
                      )}
                  </div>
                </div>

                <ul className="mb-8 space-y-4 border-b border-gray-200 pb-8 dark:border-gray-700">
                  {tier.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-body-color dark:text-body-color-dark"
                    >
                      <svg
                        className="h-5 w-5 text-accent"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.ctaHref}
                  className={`block w-full rounded-lg px-6 py-3 text-center font-semibold transition-all duration-300 ${
                    tier.highlight
                      ? "bg-primary text-white hover:bg-primary-800"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-white dark:border-primary-400 dark:text-primary-400"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-body-color dark:text-body-color-dark">
              Need a custom plan or have questions?{" "}
              <Link
                href="/contact"
                className="font-semibold text-primary hover:underline"
              >
                Contact our sales team
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-black dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-body-color dark:text-body-color-dark">
              Find answers to common questions about Hive pricing and plans
            </p>
          </div>

          <FAQAccordion items={faqData} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 dark:from-primary/90 dark:to-primary/70 md:py-20 lg:py-28">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Ready to Ship Faster?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Start with Hive's free open-source version today
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
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
