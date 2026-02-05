"use client";

import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import PricingCard from "./PricingCard";

const pricingData = [
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
    isComingSoon: false,
    ctaText: "View Docs",
    ctaLink: "/docs",
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
    isComingSoon: true,
    ctaText: "Notify Me",
    ctaLink: "#",
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
    isComingSoon: true,
    ctaText: "Contact Sales",
    ctaLink: "/contact",
  },
];

const PricingPreview = () => {
  return (
    <section id="pricing" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple, Transparent Pricing"
          paragraph="Choose the plan that fits your needs. Start free, upgrade when you're ready."
          center
        />

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingData.map((pricing) => (
            <PricingCard key={pricing.id} pricing={pricing} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-4 text-body-color dark:text-body-color-dark">
            Want to know more about pricing? <br />
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center rounded-lg bg-primary px-8 py-4 font-semibold text-white transition-colors duration-300 hover:bg-opacity-90"
          >
            View Pricing Details
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
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
