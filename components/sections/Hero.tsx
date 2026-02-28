"use client";

import Link from "next/link";
import { useMemberstack } from "@/components/providers/MemberstackProvider";

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

// ─── Hero Dashboard Preview ───────────────────────────────────────────────────

function DashboardPreview() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/80 p-5 relative z-10 border border-slate-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
        <div>
          <p className="text-xs text-slate-400 font-medium">Good morning</p>
          <p className="font-heading font-bold text-slate-900 text-sm">Sarah Chen, BA</p>
        </div>
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-violet-600 flex items-center justify-center text-white font-bold text-xs">
          SC
        </div>
      </div>

      {/* Active Course */}
      <div className="bg-gradient-to-r from-primary-50 to-violet-50 rounded-xl p-4 mb-4 border border-primary-100">
        <div className="flex items-start justify-between mb-2.5">
          <div>
            <p className="text-xs font-semibold text-primary-700 mb-0.5">In Progress</p>
            <p className="font-heading font-bold text-slate-900 text-sm leading-tight">
              AI for Business Analysts
            </p>
          </div>
          <span className="text-xs font-bold text-primary-600 bg-primary-100 px-2 py-0.5 rounded-full">
            64%
          </span>
        </div>
        <div className="w-full bg-white rounded-full h-1.5 mb-2">
          <div className="bg-primary-600 h-1.5 rounded-full" style={{ width: "64%" }} />
        </div>
        <p className="text-xs text-slate-500">Next: Automating Reports with GPT · 18 min</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: "Courses", value: "3" },
          { label: "Hrs Learned", value: "24" },
          { label: "Certificate", value: "1" },
        ].map((stat) => (
          <div key={stat.label} className="bg-slate-50 rounded-xl p-3 text-center">
            <p className="font-heading font-bold text-slate-900 text-lg">{stat.value}</p>
            <p className="text-xs text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Courses List */}
      <div className="space-y-2.5">
        {[
          { title: "AI Workflows for PM", icon: "bg-purple-100", iconColor: "text-purple-600", pct: 32 },
          { title: "HR Automation Bootcamp", icon: "bg-green-100", iconColor: "text-green-600", pct: 10 },
        ].map((course) => (
          <div
            key={course.title}
            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors"
          >
            <div className={`w-8 h-8 ${course.icon} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <svg className={`w-4 h-4 ${course.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-slate-800 truncate">{course.title}</p>
              <p className="text-xs text-slate-400">{course.pct}% complete</p>
            </div>
            <div className="w-12 bg-slate-100 rounded-full h-1">
              <div className="bg-slate-400 h-1 rounded-full" style={{ width: `${course.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Hero() {
  const { member, isPaid, isLoading, openSignup } = useMemberstack();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="hero-bg min-h-screen flex items-center pt-28 pb-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary-700">
                New cohort open — Limited seats
              </span>
            </div>

            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-5">
              Master AI Automation{" "}
              <span className="gradient-text">for BA, PM & HR</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Stop doing manual work that AI can do in seconds. Join 10,000+
              professionals learning to automate, delegate, and deliver faster
              with practical AI workflows built for modern workplaces.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              {isLoading ? (
                <div className="h-12 w-48 bg-slate-200 rounded-xl animate-pulse" />
              ) : member && isPaid ? (
                <Link href="/dashboard" className="btn-accent text-base px-7 py-3.5">
                  Go to Dashboard
                  <ArrowRight />
                </Link>
              ) : (
                <>
                  <button
                    onClick={openSignup}
                    className="btn-accent text-base px-7 py-3.5"
                  >
                    Join Free Session
                    <ArrowRight />
                  </button>
                  <button
                    onClick={() => scrollTo("courses")}
                    className="btn-outline text-base px-7 py-3.5"
                  >
                    <PlayIcon />
                    View Courses
                  </button>
                </>
              )}
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-6">
              <div>
                <p className="font-heading text-2xl font-bold text-slate-900">10,000+</p>
                <p className="text-xs text-slate-500 mt-0.5">Professionals trained</p>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div>
                <p className="font-heading text-2xl font-bold text-slate-900">4.9</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} />)}
                  </div>
                  <span className="text-xs text-slate-400">rating</span>
                </div>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div>
                <p className="font-heading text-2xl font-bold text-slate-900">40+</p>
                <p className="text-xs text-slate-500 mt-0.5">Hrs of content</p>
              </div>
            </div>
          </div>

          {/* Right: Dashboard Preview */}
          <div className="relative">
            <DashboardPreview />

            {/* Floating Badge: Certificate */}
            <div className="absolute -top-4 -right-3 glass-card rounded-2xl px-3.5 py-2.5 shadow-lg hidden sm:flex items-center gap-2.5">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">Certificate Earned!</p>
                <p className="text-xs text-slate-500">Prompt Engineering</p>
              </div>
            </div>

            {/* Floating Badge: Live */}
            <div className="absolute -bottom-4 -left-3 glass-card rounded-2xl px-3.5 py-2.5 shadow-lg hidden sm:flex items-center gap-2.5">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">342 members online</p>
                <p className="text-xs text-slate-500">Live right now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
