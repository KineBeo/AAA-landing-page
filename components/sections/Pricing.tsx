"use client";

import { useState } from "react";

const LMS_URL = process.env.NEXT_PUBLIC_LMS_URL ?? "#";

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-4 h-4 flex-shrink-0 ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="w-4 h-4 text-sand-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

const FREE_FEATURES = [
  { label: "3 intro lessons (any course)", included: true },
  { label: "Community access", included: true },
  { label: "Progress tracking", included: true },
  { label: "Live Q&A sessions", included: false },
  { label: "Full course library", included: false },
  { label: "Verified certificates", included: false },
  { label: "AI learning path", included: false },
];

const PRO_FEATURES = [
  { label: "All 4 courses — full access", included: true },
  { label: "Weekly live Q&A sessions", included: true },
  { label: "Verified certificates", included: true },
  { label: "AI-personalized learning path", included: true },
  { label: "Offline downloads", included: true },
  { label: "Private community + peer groups", included: true },
  { label: "New content as it drops", included: true },
];

const TEAM_FEATURES = [
  { label: "Everything in Pro", included: true },
  { label: "Team dashboard & analytics", included: true },
  { label: "Custom onboarding path", included: true },
  { label: "Dedicated success manager", included: true },
  { label: "Priority live session booking", included: true },
  { label: "SSO & invoicing", included: true },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  const monthlyPrice = 29;
  const annualPrice = Math.round((monthlyPrice * 12 * 0.7) / 12); // 30% off

  return (
    <section id="pricing" className="py-24 px-4 bg-sand-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-badge bg-primary-50 text-primary-700">
            Pricing
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-sand-900 mb-3">
            Invest Once. Save Hours Every Week.
          </h2>
          <p className="text-sand-500 max-w-xl mx-auto mb-8">
            Start free. Upgrade when you&apos;re ready. No contracts, cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 bg-white border border-sand-200 rounded-full p-1.5 shadow-sm">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                !annual
                  ? "bg-primary-600 text-white shadow-sm"
                  : "text-sand-500 hover:text-sand-800"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                annual
                  ? "bg-primary-600 text-white shadow-sm"
                  : "text-sand-500 hover:text-sand-800"
              }`}
            >
              Annual
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${annual ? "bg-white/20 text-white" : "bg-green-100 text-green-700"}`}>
                Save 30%
              </span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl border border-sand-200 p-7">
            <div className="mb-6">
              <p className="text-sand-400 text-sm font-medium mb-1">Starter</p>
              <p className="font-heading text-4xl font-bold text-sand-900 mb-1">Free</p>
              <p className="text-sand-400 text-sm">No credit card needed</p>
            </div>

            <a
              href={`${LMS_URL}/signup`}
              className="block w-full text-center font-semibold py-3 rounded-xl mb-6 transition-colors cursor-pointer text-sm bg-sand-100 hover:bg-sand-200 text-sand-800"
            >
              Get Started Free
            </a>

            <ul className="space-y-3">
              {FREE_FEATURES.map((f) => (
                <li key={f.label} className="flex items-start gap-3 text-sm">
                  {f.included ? (
                    <CheckIcon className="text-green-500 mt-0.5" />
                  ) : (
                    <CrossIcon />
                  )}
                  <span className={f.included ? "text-sand-700" : "text-sand-400"}>
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Plan — Featured */}
          <div className="bg-primary-600 rounded-2xl p-7 relative shadow-xl shadow-primary-200">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="bg-sand-900 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow">
                Most Popular
              </span>
            </div>

            <div className="mb-6">
              <p className="text-primary-200 text-sm font-medium mb-1">Pro</p>
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="font-heading text-4xl font-bold text-white">
                  ${annual ? annualPrice : monthlyPrice}
                </span>
                <span className="text-primary-200 text-sm">/month</span>
              </div>
              <p className="text-primary-200 text-sm">
                {annual
                  ? `Billed $${annualPrice * 12}/yr — save $${monthlyPrice * 12 - annualPrice * 12}`
                  : "Billed monthly"}
              </p>
            </div>

            <a
              href={`${LMS_URL}/signup?plan=pro${annual ? "&billing=annual" : ""}`}
              className="block text-center bg-white text-primary-600 font-bold py-3 rounded-xl mb-6 hover:bg-sand-50 transition-colors cursor-pointer text-sm"
            >
              Start Free Trial
            </a>

            <ul className="space-y-3">
              {PRO_FEATURES.map((f) => (
                <li key={f.label} className="flex items-start gap-3 text-sm text-primary-100">
                  <CheckIcon className="text-primary-200 mt-0.5" />
                  {f.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Team Plan */}
          <div className="bg-white rounded-2xl border border-sand-200 p-7">
            <div className="mb-6">
              <p className="text-sand-400 text-sm font-medium mb-1">Team</p>
              <p className="font-heading text-4xl font-bold text-sand-900 mb-1">Custom</p>
              <p className="text-sand-400 text-sm">For teams of 5+</p>
            </div>

            <a
              href="mailto:hello@aiworkacademy.com?subject=Team Plan Inquiry"
              className="block text-center bg-sand-900 hover:bg-sand-800 text-white font-semibold py-3 rounded-xl mb-6 transition-colors cursor-pointer text-sm"
            >
              Contact Sales
            </a>

            <ul className="space-y-3">
              {TEAM_FEATURES.map((f) => (
                <li key={f.label} className="flex items-start gap-3 text-sm">
                  <CheckIcon className="text-green-500 mt-0.5" />
                  <span className="text-sand-700">{f.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Guarantee */}
        <div className="flex items-center justify-center gap-2.5 mt-8 text-sm text-sand-500">
          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          30-day money-back guarantee · No questions asked · Cancel anytime
        </div>
      </div>
    </section>
  );
}
