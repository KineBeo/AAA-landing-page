"use client";

import { useMemberstack } from "@/components/providers/MemberstackProvider";
import Link from "next/link";

type Course = {
  id: string;
  tag: string;
  tagColor: string;
  gradient: string;
  iconPath: string;
  title: string;
  description: string;
  lessons: number;
  hours: number;
  level: string;
  instructor: string;
  initials: string;
  avatarGradient: string;
  rating: number;
  reviews: number;
  badge?: string;
};

const COURSES: Course[] = [
  {
    id: "ba",
    tag: "Business Analysts",
    tagColor: "bg-primary-50 text-primary-700",
    gradient: "from-primary-500 to-primary-700",
    iconPath: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "AI for Business Analysts",
    description:
      "Automate requirements docs, stakeholder reports, and process mapping with GPT and Notion AI. Go from draft to deliverable in minutes.",
    lessons: 32,
    hours: 12,
    level: "Beginner–Intermediate",
    instructor: "Marcus Reid",
    initials: "MR",
    avatarGradient: "from-primary-500 to-blue-600",
    rating: 4.9,
    reviews: 1840,
    badge: "Bestseller",
  },
  {
    id: "pm",
    tag: "Product Managers",
    tagColor: "bg-violet-50 text-violet-700",
    gradient: "from-violet-500 to-purple-700",
    iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    title: "AI Workflows for Product Managers",
    description:
      "Use AI to write PRDs, synthesize user research, generate sprint plans, and run competitive analysis — all in a fraction of the time.",
    lessons: 26,
    hours: 10,
    level: "Intermediate",
    instructor: "Jenny Park",
    initials: "JP",
    avatarGradient: "from-violet-500 to-pink-600",
    rating: 4.8,
    reviews: 1120,
    badge: "New",
  },
  {
    id: "hr",
    tag: "HR Professionals",
    tagColor: "bg-emerald-50 text-emerald-700",
    gradient: "from-emerald-500 to-teal-700",
    iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "HR Automation Bootcamp",
    description:
      "Automate candidate screening, onboarding docs, performance review summaries, and policy Q&A bots. Build an AI HR toolkit from scratch.",
    lessons: 22,
    hours: 9,
    level: "Beginner–Intermediate",
    instructor: "Aisha Mensah",
    initials: "AM",
    avatarGradient: "from-emerald-500 to-teal-600",
    rating: 4.9,
    reviews: 940,
  },
  {
    id: "prompts",
    tag: "All Roles",
    tagColor: "bg-amber-50 text-amber-700",
    gradient: "from-amber-500 to-orange-600",
    iconPath: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "Advanced Prompt Engineering for Work",
    description:
      "Write prompts that consistently produce professional output. Learn chain-of-thought, few-shot patterns, and system prompt design for workplace tasks.",
    lessons: 18,
    hours: 7,
    level: "All levels",
    instructor: "Tom Nguyen",
    initials: "TN",
    avatarGradient: "from-amber-500 to-orange-600",
    rating: 4.9,
    reviews: 2310,
    badge: "Top Rated",
  },
];

function StarFill() {
  return (
    <svg className="w-3.5 h-3.5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function CourseCard({ course, onCTA }: { course: Course; onCTA: () => void }) {
  return (
    <div className="card overflow-hidden group cursor-pointer" onClick={onCTA}>
      {/* Card Header */}
      <div className={`h-44 bg-gradient-to-br ${course.gradient} relative flex items-center justify-center overflow-hidden`}>
        <svg className="w-20 h-20 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={course.iconPath} />
        </svg>
        {course.badge && (
          <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
            {course.badge}
          </div>
        )}
        <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white/90 text-xs">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {course.hours} hrs · {course.lessons} lessons
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${course.tagColor}`}>
            {course.tag}
          </span>
          <span className="text-xs text-slate-400">{course.level}</span>
        </div>

        <h3 className="font-heading font-bold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors leading-tight">
          {course.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Instructor */}
        <div className="flex items-center gap-2 mb-4">
          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${course.avatarGradient} flex items-center justify-center text-white text-xs font-bold`}>
            {course.initials}
          </div>
          <span className="text-xs text-slate-500">{course.instructor}</span>
        </div>

        {/* Rating + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => <StarFill key={i} />)}
            </div>
            <span className="text-sm font-bold text-slate-800 ml-1">{course.rating}</span>
            <span className="text-xs text-slate-400">
              ({course.reviews.toLocaleString()})
            </span>
          </div>
          <span className="text-xs font-semibold text-primary-600 group-hover:underline">
            Preview →
          </span>
        </div>
      </div>
    </div>
  );
}

export default function CourseCards() {
  const { member, isPaid, openSignup } = useMemberstack();

  const handleCTA = () => {
    if (member && isPaid) {
      window.location.href = "/dashboard";
    } else {
      openSignup();
    }
  };

  return (
    <section id="courses" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="section-badge bg-accent-500/10 text-accent-600">
              Course Library
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-slate-900">
              Courses Built for Your Role
            </h2>
            <p className="text-slate-500 mt-2 max-w-lg">
              Every course is designed around real workflows — not abstract theory.
            </p>
          </div>
          {member && isPaid ? (
            <Link
              href="/dashboard"
              className="text-sm font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1 cursor-pointer flex-shrink-0"
            >
              View all in dashboard
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <button
              onClick={openSignup}
              className="text-sm font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1 cursor-pointer flex-shrink-0"
            >
              View all courses
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} onCTA={handleCTA} />
          ))}
        </div>

        {/* Bottom CTA */}
        {!isPaid && (
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-primary-50 border border-primary-100 rounded-2xl px-8 py-6">
              <div className="text-left">
                <p className="font-heading font-bold text-slate-900">
                  All 4 courses included in Pro
                </p>
                <p className="text-sm text-slate-500">
                  Plus live sessions, certificates, and early access to new content.
                </p>
              </div>
              <button
                onClick={openSignup}
                className="btn-accent flex-shrink-0"
              >
                Get Full Access
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
