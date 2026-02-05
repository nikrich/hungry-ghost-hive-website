import React from "react";
import { render, screen } from "@testing-library/react";
import ProblemSection from "../index";

describe("ProblemSection Component (Story 4)", () => {
  it("renders the problem section heading", () => {
    render(<ProblemSection />);
    const heading = screen.getByRole("heading", {
      name: /Development is Full of Friction/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders 3 pain point cards", () => {
    const { container } = render(<ProblemSection />);
    // Check for component wrapper divs that represent the 3 cards
    const cards = container.querySelectorAll('[class*="max-w"]');
    expect(cards.length).toBeGreaterThanOrEqual(3);
  });

  it("contains Manual Coordination pain point", () => {
    render(<ProblemSection />);
    const manualCoordination = screen.getByText(
      /Manual Coordination|Planning.*coordination/i
    );
    expect(manualCoordination).toBeInTheDocument();
  });

  it("has dark mode support", () => {
    const { container } = render(<ProblemSection />);
    const section = container.querySelector("section");
    expect(section).toHaveClass("dark:bg-gray-dark");
  });

  it("is responsive with proper Tailwind classes", () => {
    const { container } = render(<ProblemSection />);
    const section = container.querySelector("section");
    expect(section).toHaveClass("md:pt-20", "lg:pt-24");
  });

  it("renders with proper section structure", () => {
    const { container } = render(<ProblemSection />);
    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass("relative", "z-10", "overflow-hidden");
  });
});
