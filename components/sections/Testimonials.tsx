const TESTIMONIALS = [
  {
    quote:
      "I used to spend 3 hours every Friday writing stakeholder update reports. After the BA course, I built a GPT workflow that drafts the entire report from my Jira board in under 5 minutes. That's 12 hours back every month.",
    name: "Priya Sharma",
    role: "Senior Business Analyst",
    company: "Telstra",
    initials: "PS",
    gradient: "from-primary-500 to-primary-800",
    stars: 5,
  },
  {
    quote:
      "The PM course completely changed how I run sprint planning. I prompt-engineer my way through PRDs, retros, and competitive analysis now. Our team ships features 40% faster and I haven't worked a weekend in 2 months.",
    name: "Luca Bianchi",
    role: "Product Manager",
    company: "Revolut",
    initials: "LB",
    gradient: "from-violet-500 to-purple-600",
    stars: 5,
  },
  {
    quote:
      "We automated our entire candidate screening pipeline — CV scoring, follow-up emails, interview scheduling. What took a 3-person team a week now runs in hours. The ROI in the first month paid for the course 20x over.",
    name: "Fatima Al-Rashid",
    role: "Head of Talent",
    company: "Careem",
    initials: "FA",
    gradient: "from-emerald-500 to-teal-600",
    stars: 5,
  },
];

function StarFill() {
  return (
    <svg className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg className="w-8 h-8 text-primary-200" fill="currentColor" viewBox="0 0 32 32">
      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-badge bg-amber-50 text-amber-700">
            Student Results
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-sand-900 mb-3">
            Real Professionals. Real Time Saved.
          </h2>
          {/* Aggregate Rating */}
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => <StarFill key={i} />)}
            </div>
            <span className="font-bold text-sand-900">4.9</span>
            <span className="text-sand-400 text-sm">from 3,200+ reviews</span>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-sand-50 rounded-2xl border border-sand-200 p-6 hover:shadow-lg hover:border-sand-300 transition-all duration-300 flex flex-col"
            >
              {/* Quote Icon */}
              <QuoteIcon />

              {/* Stars */}
              <div className="flex mt-3 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <StarFill key={i} />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-sand-700 text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-sand-200">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-heading font-semibold text-sand-900 text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-sand-500">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Bar */}
        <div className="mt-14 text-center">
          <p className="text-sm font-medium text-sand-400 uppercase tracking-widest mb-6">
            Members work at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {["Telstra", "Revolut", "Shopify", "Careem", "Atlassian", "ANZ Bank"].map((co) => (
              <span key={co} className="font-heading font-bold text-lg text-sand-600">
                {co}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
