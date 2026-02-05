import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Hive - AI Development Team",
  description: "Get in touch with the Hive team. Have questions about autonomous AI development? We'd love to hear from you.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Have questions about Hive? Reach out to our team and we'll get back to you as soon as possible."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
