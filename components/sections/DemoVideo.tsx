"use client";

import { useState } from "react";

// Replace with your actual YouTube video ID via NEXT_PUBLIC_DEMO_VIDEO_ID
const VIDEO_ID =
  process.env.NEXT_PUBLIC_DEMO_VIDEO_ID || "dQw4w9WgXcQ";

function PlayButtonOverlay({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute inset-0 flex flex-col items-center justify-center group cursor-pointer"
      aria-label="Play demo video"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-slate-900/10 rounded-2xl" />

      {/* Play button */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="w-18 h-18 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-200 w-20 h-20">
          <svg
            className="w-8 h-8 text-primary-600 ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <p className="text-white font-heading font-semibold text-lg drop-shadow-lg">
          Watch 3-min Demo
        </p>
      </div>

      {/* Thumbnail-like gradient BG */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-800/80 to-violet-900/80" />

      {/* Decorative code lines for visual interest */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="space-y-3 w-64">
          {["██████████ ████ ██", "████ █████████ ██████", "███████ ████ ██████████"].map((line, i) => (
            <div key={i} className="h-3 bg-white rounded text-xs font-mono text-transparent">
              {line}
            </div>
          ))}
        </div>
      </div>
    </button>
  );
}

export default function DemoVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="demo" className="py-24 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-badge bg-primary-50 text-primary-700">
            See It In Action
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
            Watch How We Automate a BA Report in 3 Minutes
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            This is a real workflow our students learn in Week 1. Imagine doing
            this for your own documents every single week.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/60 border border-slate-200 bg-slate-900">
          {playing ? (
            // Embedded YouTube player
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full rounded-2xl"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&color=white`}
                title="AI Work Academy Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (
            // Thumbnail + play button
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%", minHeight: "240px" }}
            >
              {/* Background: YouTube thumbnail */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                alt="Demo video thumbnail — AI automating a Business Analyst report"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                onError={(e) => {
                  // Fallback to hqdefault if maxresdefault doesn't exist
                  (e.target as HTMLImageElement).src =
                    `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;
                }}
              />
              <PlayButtonOverlay onClick={() => setPlaying(true)} />
            </div>
          )}
        </div>

        {/* Below video: quick stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {[
            { label: "Time saved per week", value: "5–15 hrs" },
            { label: "Avg. workflow built", value: "Day 1" },
            { label: "No coding needed", value: "100%" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading font-bold text-xl text-slate-900">{stat.value}</p>
              <p className="text-sm text-slate-400 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
