"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Do I need any technical background or coding skills?",
    a: "Not at all. Our courses are built specifically for non-technical professionals — Business Analysts, PMs, and HR folks. We use no-code tools and plain-English prompting. If you can write an email, you can learn this.",
  },
  {
    q: "What tools will I be using in the courses?",
    a: "We cover ChatGPT, Claude, Notion AI, Make (Integromat), Zapier, and Google Workspace AI features. You'll use the tools you likely already have, and we'll show you which free plans are enough to get started.",
  },
  {
    q: "How is this different from watching YouTube tutorials?",
    a: "Our curriculum is structured, role-specific, and project-based. You build a real deliverable in every module — not just watch demos. Plus you get live Q&A sessions with practitioners, peer accountability groups, and verified certificates.",
  },
  {
    q: "How long does each course take?",
    a: "Most students complete a full course in 3–4 weeks at 2–3 hours per week. Each course is designed so you can immediately apply what you learn. You keep lifetime access, so you can go at your own pace.",
  },
  {
    q: "Are the certificates recognized by employers?",
    a: "Yes. Each certificate includes a unique verification URL and is shareable directly to LinkedIn. We have members at Google, Shopify, Atlassian, Telstra, and hundreds of other companies who've added these certificates to their profiles.",
  },
  {
    q: "What if I'm not satisfied?",
    a: "We offer a 30-day, no-questions-asked money-back guarantee. If you go through the course and don't find value, just email us and we'll refund you in full. We're confident you will, though.",
  },
  {
    q: "Can I share my account with teammates?",
    a: "Individual Pro accounts are for one person. For teams, we offer our Team plan which includes shared dashboards, team analytics, and volume pricing. Contact us at hello@aiworkacademy.com to set this up.",
  },
];

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-sand-200 rounded-2xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-sand-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-heading font-semibold text-sand-900 text-sm leading-snug pr-4">
          {faq.q}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border-2 border-sand-200 flex items-center justify-center transition-all duration-200 ${
            open ? "bg-primary-600 border-primary-600 rotate-45" : "bg-white"
          }`}
        >
          <svg
            className={`w-3.5 h-3.5 ${open ? "text-white" : "text-sand-400"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="px-6 pb-5 text-sand-600 text-sm leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 bg-sand-50">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-badge bg-primary-50 text-primary-700">FAQ</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-sand-900">
            Questions? We&apos;ve Got Answers.
          </h2>
          <p className="text-sand-500 mt-3">
            Can&apos;t find what you need?{" "}
            <a
              href="mailto:hello@aiworkacademy.com"
              className="text-primary-600 hover:underline cursor-pointer"
            >
              Email us directly.
            </a>
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {FAQS.map((faq) => (
            <FAQItem key={faq.q} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
