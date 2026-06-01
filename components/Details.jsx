"use client";

import { useState, useRef, useEffect } from "react";
import Explore from "./Explore";

// const stats = [
//   { number: "1+",  label: "Year\nExperience" },
//   { number: "4+",  label: "Live\nProjects" },
//   { number: "8.7", label: "CGPA\nB.Tech CSE" },
// ];

const highlights = [
  {
    role: "Frontend Developer",
    company: "Begawn IT Pvt Ltd",
    period: "June 2025 – Present",
    dot: true,
  },
  {
    role: "Frontend Dev Intern",
    company: "Hoping Mind",
    period: "May 2025",
    dot: false,
  },
];

const techBadges = [
  "React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "SSR / SSG",
];

export default function Details() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) setIsVisible(true);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="details"
      ref={sectionRef}
      className={`
        relative w-full
        bg-white dark:bg-black text-zinc-900 dark:text-white
        py-24 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

        {/* ── LEFT ── */}
        <div className="flex flex-col gap-7">
          

          {/* Label */}
          <p className="text-[10px] font-black tracking-[0.3em] text-lime-500 dark:text-lime-400 uppercase">
            A little about me
          </p>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
            Nice to meet you.{" "}
            <br className="hidden sm:block" />
            I am{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-500 italic font-playfair">
              Prachi
            </span>
          </h1>

          {/* Bio */}
          <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Frontend Developer with hands-on experience building and shipping live production
            platforms. Skilled in React.js, Next.js, TypeScript, and Tailwind CSS with practical
            exposure to REST API integration, SSR/SSG, and performance optimization. Focused on
            clean, maintainable component architecture.
          </p>

          

          {/* ── Experience mini timeline ── */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-600">
              Experience
            </p>
            {highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                {/* Dot */}
                <div className={`w-2 h-2 rounded-full shrink-0 ${item.dot ? "bg-lime-400 shadow-[0_0_6px_#a3e635]" : "bg-zinc-300 dark:bg-zinc-700"}`} />
                <div className="flex flex-1 items-center justify-between gap-4 min-w-0">
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-zinc-900 dark:text-white truncate">{item.role}</p>
                    <p className="text-[11px] text-zinc-400 dark:text-zinc-500 font-medium">{item.company}</p>
                  </div>
                  <span className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-600 shrink-0">
                    {item.period}
                  </span>
                 
                </div>
              </div>
            ))}
          </div>

          {/* ── Tech badges ── */}
          <div className="flex flex-wrap gap-2">
            {techBadges.map((t) => (
              <span
                key={t}
                className="
                  text-[10px] font-bold uppercase tracking-wide
                  px-3 py-1.5 rounded-full
                  bg-zinc-100 dark:bg-zinc-900
                  border border-zinc-200 dark:border-zinc-800
                  text-zinc-600 dark:text-zinc-400
                "
              >
                {t}
              </span>
            ))}
          </div>

          {/* ── Links ── */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            <a
              href="https://linkedin.com/in/prachi-kamboj-041239309"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-1.5 text-xs font-bold
                px-4 py-2.5 rounded-xl
                border border-zinc-200 dark:border-zinc-800
                text-zinc-600 dark:text-zinc-400
                hover:border-lime-400/60 hover:text-lime-500 dark:hover:text-lime-400
                transition-all duration-200
              "
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/prachikamboz"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-1.5 text-xs font-bold
                px-4 py-2.5 rounded-xl
                border border-zinc-200 dark:border-zinc-800
                text-zinc-600 dark:text-zinc-400
                hover:border-lime-400/60 hover:text-lime-500 dark:hover:text-lime-400
                transition-all duration-200
              "
            >
              GitHub ↗
            </a>
            <a
              href="mailto:prachikamboz8@gmail.com"
              className="
                flex items-center gap-1.5 text-xs font-bold
                px-4 py-2.5 rounded-xl
                bg-zinc-900 dark:bg-lime-400
                text-white dark:text-black
                hover:opacity-90
                transition-all duration-200
              "
            >
              prachikamboz8@gmail.com
            </a>
          </div>
        </div>

        {/* ── RIGHT — Image card ── */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm">

            {/* Main image */}
            <div className="
              rounded-2xl overflow-hidden
              ring-1 ring-zinc-200 dark:ring-zinc-800
              shadow-2xl shadow-zinc-200/60 dark:shadow-none
              aspect-[3/4]
            ">
              <img
                src="/Pk.png"
                alt="Prachi Kamboj"
                className="w-full h-full object-cover"
              />
            </div>

          
            <div className="
              absolute -bottom-4 -left-4
              bg-white dark:bg-zinc-900
              border border-zinc-200 dark:border-zinc-800
              rounded-2xl px-4 py-3
              shadow-xl shadow-zinc-200/50 dark:shadow-none
              flex items-center gap-3
            ">
              <div className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_6px_#a3e635] animate-pulse shrink-0" />
              <div>
                <p className="text-xs font-black text-zinc-900 dark:text-white leading-none">
                  Open to Work
                </p>
                <p className="text-[10px] text-zinc-400 font-medium mt-0.5">
                  Frontend Developer
                </p>
              </div>
            </div>

            {/* Floating badge — top right */}
            {/* <div className="
              absolute -top-4 -right-4
              bg-white dark:bg-zinc-900
              border border-zinc-200 dark:border-zinc-800
              rounded-2xl px-4 py-3
              shadow-xl shadow-zinc-200/50 dark:shadow-none
            ">
              <p className="text-xs font-black text-zinc-900 dark:text-white leading-none">
                B.Tech CSE
              </p>
              <p className="text-[10px] text-lime-500 dark:text-lime-400 font-bold mt-0.5">
                CGPA 8.7 / 10
              </p>
            </div> */}
          </div>
        </div>

      </div>

  
    </section>
  );
}