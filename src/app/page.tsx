import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AgentTeamSection from "@/components/AgentTeamSection";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import CodeExampleSection from "@/components/CodeExampleSection";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProblemSection from "@/components/ProblemSection";
import Pricing from "@/components/Pricing";
import PricingPreview from "@/components/PricingPreview";
import SolutionSection from "@/components/SolutionSection";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hive | Your AI Development Team, Ready to Ship",
  description:
    "Deploy a team of AI agents that autonomously plan, develop, and ship features. From requirement to production in minutes, not months.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <AgentTeamSection />
      <Features />
      <CodeExampleSection />
      <PricingPreview />
      <FinalCTA />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
