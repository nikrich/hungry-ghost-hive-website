"use client";

import Link from "next/link";

interface Pricing {
  id: number;
  title: string;
  price: string;
  description: string;
  features: string[];
  isComingSoon: boolean;
  ctaText: string;
  ctaLink: string;
}

const PricingCard = ({ pricing }: { pricing: Pricing }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-8 transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
      {/* Header */}
      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
          {pricing.title}
        </h3>
        <p className="mb-4 text-sm text-body-color dark:text-body-color-dark">
          {pricing.description}
        </p>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-primary">{pricing.price}</span>
          {!pricing.isComingSoon && pricing.title !== "Enterprise" && (
            <span className="text-body-color dark:text-body-color-dark">/month</span>
          )}
        </div>
      </div>

      {/* Features List */}
      <ul className="mb-8 space-y-3 border-b border-gray-200 pb-8 dark:border-gray-700">
        {pricing.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg
              className="mt-1 h-5 w-5 flex-shrink-0 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-body-color dark:text-body-color-dark">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link
        href={pricing.ctaLink}
        className={`block w-full rounded-lg py-3 text-center font-semibold transition-colors duration-300 ${
          pricing.isComingSoon
            ? "cursor-not-allowed bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400"
            : "bg-primary text-white hover:bg-opacity-90"
        }`}
      >
        {pricing.ctaText}
      </Link>
    </div>
  );
};

export default PricingCard;
