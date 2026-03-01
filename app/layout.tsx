import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Work Academy — Master AI Automation for BA, PM & HR",
  description:
    "Join 10,000+ professionals mastering AI automation with expert-led courses built for Business Analysts, Product Managers, and HR teams.",
  keywords: [
    "AI automation",
    "business analyst",
    "product manager",
    "HR automation",
    "online courses",
    "AI skills",
  ],
  openGraph: {
    title: "AI Work Academy — Master AI Automation for BA, PM & HR",
    description:
      "Join 10,000+ professionals mastering AI automation with expert-led courses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
