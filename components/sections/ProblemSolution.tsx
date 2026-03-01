const PROBLEMS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "bg-red-100 text-red-600",
    title: "Drowning in Manual Tasks",
    description:
      "Hours wasted copying data, writing status updates, and scheduling meetings that AI could handle in seconds.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: "bg-amber-100 text-amber-600",
    title: "Falling Behind on AI Skills",
    description:
      "Your colleagues are already using AI to 10x their output. Without these skills, the gap widens every week.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
      </svg>
    ),
    color: "bg-primary-100 text-primary-600",
    title: "Generic Courses, Zero Context",
    description:
      "Most AI courses are for developers. There's nothing built for BA, PM, or HR workflows — until now.",
  },
];

const SOLUTIONS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "bg-primary-100 text-primary-600",
    title: "Role-Specific AI Workflows",
    description:
      "Every lesson is built around your actual job. Automate BA requirements docs, PM sprint reports, and HR screening — not generic demos.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "bg-green-100 text-green-600",
    title: "Practical, Project-Based Learning",
    description:
      "You build real deliverables — an automation that saves 5+ hours/week — by the end of each course. No fluff, no theory overload.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    color: "bg-accent-500/10 text-accent-600",
    title: "Live Expert Coaching",
    description:
      "Weekly live sessions with practitioners who are doing this work daily. Ask real questions, get context-specific answers.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Problem Block */}
        <div className="text-center mb-12">
          <span className="section-badge bg-red-50 text-red-600">The Problem</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-sand-900 mb-3">
            Modern Work is Still Stuck in 2019
          </h2>
          <p className="text-sand-500 max-w-xl mx-auto">
            AI has transformed what&apos;s possible — but most professionals
            haven&apos;t changed how they work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {PROBLEMS.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-sand-50 border border-sand-200"
            >
              <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                {item.icon}
              </div>
              <h3 className="font-heading font-bold text-sand-900 mb-2">{item.title}</h3>
              <p className="text-sand-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-20">
          <div className="flex-1 h-px bg-sand-200" />
          <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="flex-1 h-px bg-sand-200" />
        </div>

        {/* Solution Block */}
        <div className="text-center mb-12">
          <span className="section-badge bg-green-50 text-green-700">The Solution</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-sand-900 mb-3">
            AI Skills Built for Your Role, Not for Developers
          </h2>
          <p className="text-sand-500 max-w-xl mx-auto">
            AI Work Academy teaches you to automate your specific workflows,
            so you can reclaim hours and focus on work that actually requires you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {SOLUTIONS.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border border-sand-200 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-50 transition-all duration-300 cursor-default bg-white"
            >
              <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                {item.icon}
              </div>
              <h3 className="font-heading font-bold text-sand-900 mb-2">{item.title}</h3>
              <p className="text-sand-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
