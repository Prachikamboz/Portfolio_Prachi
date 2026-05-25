"use client";

import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Begawn IT Pvt Ltd",
    period: "June 2025 — Present",
    type: "Full-time",
    active: true,
    bullets: [
      "Built and shipped production-grade React.js and Next.js web applications as core frontend engineer.",
      "Developed reusable UI components, reducing code duplication and improving development speed.",
      "Integrated REST APIs with async rendering, loading states, and error handling.",
      "Improved page performance using React.memo, useMemo, useCallback, and code splitting.",
      "Delivered consistent cross-browser, mobile-first responsive design across all platforms.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Hoping Mind",
    period: "May 2025",
    type: "Internship",
    active: false,
    bullets: [
      "Built responsive React.js UI components using ES6+ and component-based architecture.",
      "Practised Git version control — feature branching, pull requests, and team code collaboration.",
    ],
  },
];

function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

export default function Experience() {
  const [ref, visible] = useFadeIn();

  return (
    <section className="
      bg-white dark:bg-black text-zinc-900 dark:text-white
      py-24 px-6 md:px-10
      transition-colors duration-300
    ">
      <div className="max-w-5xl mx-auto">

        {/* ── Header ── */}
        <div
          ref={ref}
          className="transition-all duration-700 ease-out mb-16"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
        >
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600 mb-3">
            Career
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Work{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-500">
              EXPERIENCE
            </span>
          </h2>
        </div>

        {/* ── Timeline ── */}
        <div className="relative flex flex-col gap-0">

          {experiences.map((exp, i) => (
            <ExperienceRow key={i} exp={exp} index={i} last={i === experiences.length - 1} />
          ))}

        </div>
      </div>
    </section>
  );
}

function ExperienceRow({ exp, index, last }) {
  const [ref, visible] = useFadeIn();
  const [open, setOpen] = useState(index === 0); // first one open by default

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-16px)",
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <div className="flex gap-6">

        {/* ── Left: dot + line ── */}
        <div className="flex flex-col items-center pt-1">
          {/* Dot */}
          <div className={`
            w-3 h-3 rounded-full shrink-0 mt-1
            ${exp.active
              ? "bg-lime-400 shadow-[0_0_8px_#a3e635] animate-pulse"
              : "bg-zinc-300 dark:bg-zinc-700"
            }
          `} />
          {/* Line */}
          {!last && (
            <div className="w-[1px] flex-1 mt-2 mb-0 bg-zinc-100 dark:bg-zinc-900" />
          )}
        </div>

        {/* ── Right: content ── */}
        <div className={`flex-1 pb-10 ${last ? "pb-0" : ""}`}>

          {/* Top row — clickable to expand */}
          <button
            onClick={() => setOpen(!open)}
            className="w-full text-left group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
              <div className="flex items-center gap-3">
                <h3 className="text-base font-black text-zinc-900 dark:text-white group-hover:text-lime-500 dark:group-hover:text-lime-400 transition-colors duration-200">
                  {exp.role}
                </h3>
                <span className="
                  text-[9px] font-black uppercase tracking-wide
                  px-2 py-0.5 rounded-full
                  bg-zinc-100 dark:bg-zinc-900
                  border border-zinc-200 dark:border-zinc-800
                  text-zinc-500 dark:text-zinc-500
                ">
                  {exp.type}
                </span>
              </div>

              {/* Chevron */}
              <span className={`
                text-zinc-300 dark:text-zinc-700 text-sm transition-transform duration-300
                ${open ? "rotate-180" : "rotate-0"}
                group-hover:text-zinc-500 dark:group-hover:text-zinc-400
              `}>
                ↓
              </span>
            </div>

            {/* Company + period */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-sm font-semibold text-lime-500 dark:text-lime-400">
                {exp.company}
              </span>
              <span className="w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
              <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
                {exp.period}
              </span>
            </div>
          </button>

          {/* Expandable bullets */}
          <div className={`
            overflow-hidden transition-all duration-500 ease-out
            ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          `}>
            <ul className="
              space-y-2.5 pl-0
              border-l-2 border-zinc-100 dark:border-zinc-900
              pl-4 mt-1
            ">
              {exp.bullets.map((point, idx) => (
                <li key={idx} className="flex gap-2.5 text-sm text-zinc-500 dark:text-zinc-400 items-start">
                  <span className="mt-[7px] w-1 h-1 bg-[#ccff00] rounded-full shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}