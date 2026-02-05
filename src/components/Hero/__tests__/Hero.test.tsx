import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../index";

describe("Hero Component", () => {
  it("renders the hero section with main heading", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", {
      name: /Your AI Development Team, Ready to Ship/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders the subheadline with value proposition", () => {
    render(<Hero />);
    const subheading = screen.getByText(
      /Hive orchestrates autonomous AI agents/i
    );
    expect(subheading).toBeInTheDocument();
  });

  it("renders Get Started CTA button linking to /docs", () => {
    render(<Hero />);
    const getStartedLink = screen.getByRole("link", {
      name: /Get Started/i,
    });
    expect(getStartedLink).toHaveAttribute("href", "/docs");
  });

  it("renders How It Works CTA button linking to /how-it-works", () => {
    render(<Hero />);
    const howItWorksLink = screen.getByRole("link", {
      name: /How It Works/i,
    });
    expect(howItWorksLink).toHaveAttribute("href", "/how-it-works");
  });

  it("has proper responsive classes for mobile and desktop", () => {
    const { container } = render(<Hero />);
    const section = container.querySelector("section");
    expect(section).toHaveClass("md:pb-[120px]", "md:pt-[150px]");
  });

  it("has dark mode support with dark: classes", () => {
    const { container } = render(<Hero />);
    const section = container.querySelector("section");
    expect(section).toHaveClass("dark:bg-gray-dark");
  });

  it("contains SVG decorative elements", () => {
    const { container } = render(<Hero />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThan(0);
  });

  it("renders within a proper section element with id 'home'", () => {
    render(<Hero />);
    const section = screen.getByRole("region");
    expect(section).toHaveAttribute("id", "home");
  });
});
