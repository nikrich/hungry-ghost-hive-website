import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { Metadata, Viewport } from "next";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://hive.dev"),
  title: {
    default: "Hive | Your AI Development Team, Ready to Ship",
    template: "%s | Hive",
  },
  description:
    "Deploy a team of AI agents that autonomously plan, develop, and ship features. From requirement to production in minutes, not months.",
  keywords: [
    "AI agents",
    "software development",
    "autonomous development",
    "AI orchestrator",
    "development automation",
    "CI/CD",
    "DevOps",
    "code review",
  ],
  authors: [
    {
      name: "Hive Team",
    },
  ],
  creator: "Hive",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hive.dev",
    siteName: "Hive",
    title: "Hive | Your AI Development Team, Ready to Ship",
    description:
      "Deploy a team of AI agents that autonomously plan, develop, and ship features. From requirement to production in minutes, not months.",
    images: [
      {
        url: "https://hive.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hive - AI Development Team",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hive | Your AI Development Team, Ready to Ship",
    description:
      "Deploy a team of AI agents that autonomously plan, develop, and ship features.",
    images: ["https://hive.dev/og-image.png"],
    creator: "@HiveAI",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://hive.dev",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};


import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="canonical" href="https://hive.dev" />
        <meta name="google-site-verification" content="verification-code-here" />
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <div className="isolate">
            <Header />
            {children}
            <Footer />
          </div>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

