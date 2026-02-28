"use client";

import { useState } from "react";
import Link from "next/link";
import { useMemberstack } from "@/components/providers/MemberstackProvider";

// ─── Data ─────────────────────────────────────────────────────────────────────

type Lesson = { id: string; title: string; duration: string; done: boolean };
type Course = {
  id: string;
  title: string;
  tag: string;
  tagColor: string;
  gradient: string;
  initials: string;
  avatarGrad: string;
  instructor: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  videoId: string; // YouTube video ID
  lessons: Lesson[];
};

const COURSES: Course[] = [
  {
    id: "ba",
    title: "AI for Business Analysts",
    tag: "BA",
    tagColor: "bg-primary-100 text-primary-700",
    gradient: "from-primary-500 to-blue-600",
    initials: "MR",
    avatarGrad: "from-primary-500 to-blue-600",
    instructor: "Marcus Reid",
    progress: 64,
    totalLessons: 32,
    completedLessons: 20,
    videoId: process.env.NEXT_PUBLIC_DEMO_VIDEO_ID || "dQw4w9WgXcQ",
    lessons: [
      { id: "l1", title: "Welcome & Course Overview", duration: "6 min", done: true },
      { id: "l2", title: "What AI Can Do for BA Work", duration: "14 min", done: true },
      { id: "l3", title: "Setting Up Your AI Workspace", duration: "18 min", done: true },
      { id: "l4", title: "Prompting for Requirements Docs", duration: "22 min", done: false },
      { id: "l5", title: "Automating Stakeholder Reports", duration: "26 min", done: false },
      { id: "l6", title: "Process Mapping with AI", duration: "20 min", done: false },
    ],
  },
  {
    id: "pm",
    title: "AI Workflows for Product Managers",
    tag: "PM",
    tagColor: "bg-violet-100 text-violet-700",
    gradient: "from-violet-500 to-purple-600",
    initials: "JP",
    avatarGrad: "from-violet-500 to-pink-600",
    instructor: "Jenny Park",
    progress: 32,
    totalLessons: 26,
    completedLessons: 8,
    videoId: process.env.NEXT_PUBLIC_DEMO_VIDEO_ID || "dQw4w9WgXcQ",
    lessons: [
      { id: "l1", title: "AI-Assisted PRD Writing", duration: "20 min", done: true },
      { id: "l2", title: "User Research Synthesis", duration: "18 min", done: true },
      { id: "l3", title: "Sprint Planning Automation", duration: "24 min", done: false },
      { id: "l4", title: "Competitive Analysis with AI", duration: "16 min", done: false },
    ],
  },
  {
    id: "hr",
    title: "HR Automation Bootcamp",
    tag: "HR",
    tagColor: "bg-emerald-100 text-emerald-700",
    gradient: "from-emerald-500 to-teal-600",
    initials: "AM",
    avatarGrad: "from-emerald-500 to-teal-600",
    instructor: "Aisha Mensah",
    progress: 10,
    totalLessons: 22,
    completedLessons: 2,
    videoId: process.env.NEXT_PUBLIC_DEMO_VIDEO_ID || "dQw4w9WgXcQ",
    lessons: [
      { id: "l1", title: "Automating Candidate Screening", duration: "22 min", done: true },
      { id: "l2", title: "AI-Powered Onboarding Docs", duration: "18 min", done: false },
      { id: "l3", title: "Performance Review Summaries", duration: "20 min", done: false },
    ],
  },
  {
    id: "prompts",
    title: "Advanced Prompt Engineering",
    tag: "All",
    tagColor: "bg-amber-100 text-amber-700",
    gradient: "from-amber-500 to-orange-500",
    initials: "TN",
    avatarGrad: "from-amber-500 to-orange-600",
    instructor: "Tom Nguyen",
    progress: 0,
    totalLessons: 18,
    completedLessons: 0,
    videoId: process.env.NEXT_PUBLIC_DEMO_VIDEO_ID || "dQw4w9WgXcQ",
    lessons: [
      { id: "l1", title: "Anatomy of a Great Prompt", duration: "16 min", done: false },
      { id: "l2", title: "Chain-of-Thought Patterns", duration: "20 min", done: false },
      { id: "l3", title: "System Prompt Design", duration: "18 min", done: false },
    ],
  },
];

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function Sidebar({
  courses,
  activeCourseId,
  onSelect,
}: {
  courses: Course[];
  activeCourseId: string;
  onSelect: (id: string) => void;
}) {
  const { member, logout } = useMemberstack();
  const email = member?.auth?.email ?? "";

  return (
    <aside className="w-72 flex-shrink-0 bg-white border-r border-slate-100 flex flex-col h-full overflow-y-auto">
      {/* User Profile */}
      <div className="px-5 py-5 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            {email ? email[0].toUpperCase() : "M"}
          </div>
          <div className="min-w-0">
            <p className="font-heading font-semibold text-slate-900 text-sm truncate">
              {email || "Member"}
            </p>
            <p className="text-xs text-green-600 font-medium">Pro Member</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-3 py-4 flex-1">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 mb-2">
          My Courses
        </p>
        {courses.map((course) => (
          <button
            key={course.id}
            onClick={() => onSelect(course.id)}
            className={`w-full text-left px-3 py-3 rounded-xl mb-1 cursor-pointer transition-colors group ${
              activeCourseId === course.id
                ? "bg-primary-50 border border-primary-100"
                : "hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div
                className={`w-8 h-8 rounded-lg bg-gradient-to-br ${course.gradient} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
              >
                {course.tag}
              </div>
              <div className="min-w-0 flex-1">
                <p
                  className={`text-xs font-semibold truncate leading-tight ${
                    activeCourseId === course.id ? "text-primary-700" : "text-slate-800"
                  }`}
                >
                  {course.title}
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="flex-1 h-1 bg-slate-100 rounded-full">
                    <div
                      className="bg-primary-500 h-1 rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <span className="text-xs text-slate-400 flex-shrink-0">{course.progress}%</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </nav>

      {/* Bottom Links */}
      <div className="px-3 pb-4 border-t border-slate-100 pt-3">
        <Link
          href="/"
          className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer text-slate-500 hover:text-slate-700 text-sm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Back to Home
        </Link>
        <button
          onClick={logout}
          className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-red-50 transition-colors cursor-pointer text-slate-400 hover:text-red-600 text-sm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Sign Out
        </button>
      </div>
    </aside>
  );
}

// ─── Video Player ─────────────────────────────────────────────────────────────

function VideoPlayer({ course }: { course: Course }) {
  const [activeLesson, setActiveLesson] = useState(0);
  const currentLesson = course.lessons[activeLesson];

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-full">
      {/* Main Player */}
      <div className="flex-1 min-w-0">
        {/* YouTube Embed */}
        <div className="relative bg-slate-900 rounded-2xl overflow-hidden mb-4 shadow-lg" style={{ paddingBottom: "56.25%" }}>
          <iframe
            key={`${course.id}-${activeLesson}`}
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${course.videoId}?rel=0&modestbranding=1`}
            title={currentLesson.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Lesson Info */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-heading font-bold text-slate-900 text-lg leading-tight mb-1">
              {currentLesson.title}
            </h2>
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${course.avatarGrad} flex items-center justify-center text-white text-xs font-bold`}>
                {course.initials[0]}
              </div>
              <span>{course.instructor}</span>
              <span>·</span>
              <span>{currentLesson.duration}</span>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={() => setActiveLesson((i) => Math.max(0, i - 1))}
              disabled={activeLesson === 0}
              className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-default cursor-pointer transition-colors"
              aria-label="Previous lesson"
            >
              <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveLesson((i) => Math.min(course.lessons.length - 1, i + 1))}
              disabled={activeLesson === course.lessons.length - 1}
              className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-default cursor-pointer transition-colors"
              aria-label="Next lesson"
            >
              <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-5 p-4 bg-primary-50 rounded-xl border border-primary-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-slate-800">{course.title}</span>
            <span className="text-xs font-bold text-primary-600">
              {course.completedLessons}/{course.totalLessons} lessons
            </span>
          </div>
          <div className="w-full bg-primary-100 rounded-full h-2">
            <div
              className="bg-primary-600 h-2 rounded-full transition-all"
              style={{ width: `${course.progress}%` }}
            />
          </div>
          <p className="text-xs text-slate-400 mt-1.5">{course.progress}% complete</p>
        </div>
      </div>

      {/* Lesson List */}
      <div className="w-full lg:w-72 flex-shrink-0">
        <h3 className="font-heading font-bold text-slate-900 mb-3 text-sm">
          Course Lessons
        </h3>
        <div className="space-y-1.5 overflow-y-auto max-h-[500px]">
          {course.lessons.map((lesson, i) => (
            <button
              key={lesson.id}
              onClick={() => setActiveLesson(i)}
              className={`w-full text-left flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${
                activeLesson === i
                  ? "bg-primary-50 border border-primary-100"
                  : "hover:bg-slate-50"
              }`}
            >
              {/* Status Icon */}
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                  lesson.done
                    ? "bg-green-500"
                    : activeLesson === i
                    ? "bg-primary-600"
                    : "border-2 border-slate-200"
                }`}
              >
                {lesson.done ? (
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : activeLesson === i ? (
                  <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                ) : (
                  <span className="text-xs text-slate-400 font-medium">{i + 1}</span>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p
                  className={`text-xs font-medium truncate ${
                    activeLesson === i ? "text-primary-700" : "text-slate-700"
                  }`}
                >
                  {lesson.title}
                </p>
                <p className="text-xs text-slate-400">{lesson.duration}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Dashboard Stats ──────────────────────────────────────────────────────────

function StatsBar({ courses }: { courses: Course[] }) {
  const totalLessons = courses.reduce((a, c) => a + c.completedLessons, 0);
  const avgProgress =
    Math.round(courses.reduce((a, c) => a + c.progress, 0) / courses.length);
  const certs = courses.filter((c) => c.progress === 100).length;

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {[
        {
          label: "Lessons Completed",
          value: totalLessons,
          icon: (
            <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          bg: "bg-primary-50",
        },
        {
          label: "Avg. Progress",
          value: `${avgProgress}%`,
          icon: (
            <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          ),
          bg: "bg-violet-50",
        },
        {
          label: "Certificates",
          value: certs,
          icon: (
            <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          ),
          bg: "bg-amber-50",
        },
      ].map((s) => (
        <div key={s.label} className="bg-white rounded-2xl border border-slate-100 p-4 flex items-center gap-3">
          <div className={`w-10 h-10 ${s.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
            {s.icon}
          </div>
          <div>
            <p className="font-heading font-bold text-slate-900 text-xl">{s.value}</p>
            <p className="text-xs text-slate-400">{s.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────

export default function DashboardContent() {
  const [activeCourseId, setActiveCourseId] = useState(COURSES[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const activeCourse = COURSES.find((c) => c.id === activeCourseId) ?? COURSES[0];

  return (
    <div className="flex h-screen pt-20 bg-slate-50 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-slate-900/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-40 pt-20 lg:pt-0 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <Sidebar
          courses={COURSES}
          activeCourseId={activeCourseId}
          onSelect={(id) => { setActiveCourseId(id); setSidebarOpen(false); }}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
          {/* Mobile Header */}
          <div className="flex items-center gap-3 mb-5 lg:hidden">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-xl bg-white border border-slate-200 cursor-pointer"
              aria-label="Open sidebar"
            >
              <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="font-heading font-bold text-slate-900">My Dashboard</h1>
          </div>

          {/* Stats */}
          <StatsBar courses={COURSES} />

          {/* Video Player */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5">
            <VideoPlayer course={activeCourse} />
          </div>
        </div>
      </main>
    </div>
  );
}
