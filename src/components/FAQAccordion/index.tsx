"use client";

import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="mx-auto max-w-2xl rounded-lg border border-gray-200 dark:border-gray-700">
      {items.map((item) => (
        <div
          key={item.id}
          className="border-b border-gray-200 dark:border-gray-700 last:border-b-0"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="flex w-full items-center justify-between py-5 px-4 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <h3 className="text-lg font-semibold text-black dark:text-white">
              {item.question}
            </h3>
            <svg
              className={`h-6 w-6 text-primary transition-transform duration-300 flex-shrink-0 ml-4 ${
                openId === item.id ? "rotate-180" : ""
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
          </button>
          {openId === item.id && (
            <div className="bg-gray-50 px-4 py-5 dark:bg-gray-800/50">
              <p className="text-body-color dark:text-body-color-dark">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
