import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Hive | AI Development Team Orchestrator",
  description:
    "Learn about Hive: our mission to build the future of software development with AI agents that handle routine work so humans can focus on the creative.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Hive"
        description="We're building the future of software development - where AI agents handle the routine so humans can focus on the creative."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
