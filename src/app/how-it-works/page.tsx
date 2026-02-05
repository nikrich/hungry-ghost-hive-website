import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import HowItWorksTimeline from "@/components/HowItWorksTimeline";

export const metadata: Metadata = {
  title: "How It Works | Hive - AI Development Workflow",
  description: "Understand Hive's autonomous development workflow: from requirement intake to production deployment, see how AI agents coordinate to ship features.",
  keywords: [
    "AI development workflow",
    "autonomous software development",
    "AI agents",
    "development pipeline",
    "code automation",
  ],
};

export default function HowItWorksPage() {
  return (
    <>
      <Breadcrumb
        pageName="How It Works"
        description="From requirement to production: See how Hive's AI team autonomously plans, develops, and ships features"
      />

      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container">
          <HowItWorksTimeline />
        </div>
      </section>
    </>
  );
}
