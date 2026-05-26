"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projectsData = [
  {
    title: "Gymuzzi",
    number: "01",
    link: "https://gymuzzi.com",
    tag: "Gym Discovery Platform",
    description:
      "A production-ready gym discovery platform built for fitness seekers across India. Users can search, filter, and access gyms on a pay-per-visit basis — no memberships, no lock-ins. Built with Next.js SSR for fast initial loads and strong SEO performance.",
    bullets: [
      "Search and filter gyms by location with real-time REST API data.",
      "SSR with Next.js ensures fast page loads and Google search visibility.",
      "Reusable card and filter components used consistently across all pages.",
      "Fully responsive UI across mobile, tablet, and desktop screens.",
      "Loading states and error handling for reliable user experience.",
    ],
    stack: ["React.js", "Next.js", "Tailwind CSS", "REST APIs", "SSR"],
    images: ["/gym.png", "/Gym2.png"],
  },

  {
    title: "Begawn",
    number: "02",
    link: "https://begawn.com",
    tag: "Business Platform",
    description:
      "A production business platform where I worked as a core frontend engineer. Responsibilities included resolving UI bugs, ensuring cross-browser consistency, integrating REST APIs, and building reusable components that are used across the entire platform.",
    bullets: [
      "Fixed UI issues and ensured correct rendering across all screen sizes.",
      "Resolved cross-browser bugs for consistent experience in Chrome, Firefox, and Safari.",
      "Connected REST APIs with proper loading and error state handling.",
      "Built and updated reusable components shared across multiple platform pages.",
    ],
    stack: ["React.js", "Tailwind CSS", "REST APIs", "JavaScript ES6+"],
    images: ["/Begawn.png", "/Begawn2.png"],
  },
   {
    title: "Academic Begawn",
    number: "03",
    link: "https://academy.begawn.com/",
    tag: "Course Platform",
    description:
      "An online course listing platform where users can browse, explore, and view detailed course information. Built with React.js and connected to REST APIs for dynamic data loading. Clean, responsive UI with reusable components throughout.",
    bullets: [
      "Course listing and detail pages powered by dynamic REST API data.",
      "Reusable course card and filter components used across multiple pages.",
      "Component-based architecture for clean code and easy scalability.",
      "Fully responsive design — clean and functional on mobile and desktop.",
    ],
    stack: ["React.js", "Tailwind CSS", "REST APIs", "Component Architecture"],
    images: ["/academy.png", "/academy2.png"],
  },
  {
    title: "Boggot",
    number: "04",
    link: "https://boggot.com",
    tag: "Web Application",
    description:
      "A full-scale web application built from scratch with Next.js and TypeScript. The project focused on performance-first architecture — combining SSR and SSG for SEO-optimised, fast-loading pages with a clean, scalable codebase.",
    bullets: [
      "Built entirely with TypeScript to catch errors early and maintain code quality.",
      "SSR and SSG implemented for quick page loads and better search engine rankings.",
      "Lazy loading applied to heavy pages to reduce first-load time significantly.",
      "Scalable folder structure designed for easy feature additions and maintenance.",
    ],
    stack: ["Next.js", "TypeScript", "SSR", "SSG", "Performance Optimization"],
    images: ["/Boggot.png", "/boggot1.png"],
  },
  
 
];


function ImagePanel({ project }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [slide, setSlide] = useState(null);

  useEffect(() => {
    setSlide("reset");
    const t = setTimeout(() => {
      setImgIndex(0);
      setSlide(null);
    }, 180);
    return () => clearTimeout(t);
  }, [project.title]);

  const navigate = (dir) => {
    const total = project.images.length;
    const next =
      dir === "right"
        ? (imgIndex + 1) % total
        : (imgIndex - 1 + total) % total;
    setSlide(dir);
    setTimeout(() => {
      setImgIndex(next);
      setSlide(null);
    }, 180);
  };

  const total = project.images.length;

  const imgStyle = {
    opacity: slide ? 0 : 1,
    transform:
      slide === "right"
        ? "translateX(-20px)"
        : slide === "left"
        ? "translateX(20px)"
        : "translateX(0px)",
    transition: "opacity 0.18s ease, transform 0.18s ease",
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex items-center gap-3">

        {/* Left arrow */}
        <button
          onClick={() => navigate("left")}
          disabled={total <= 1}
          className="
            shrink-0 w-10 h-10 rounded-xl
            flex items-center justify-center
            border border-zinc-200 dark:border-zinc-800
            bg-white dark:bg-zinc-900
            text-zinc-500 dark:text-zinc-400
            hover:border-zinc-900 dark:hover:border-white
            hover:text-zinc-900 dark:hover:text-white
            hover:bg-zinc-50 dark:hover:bg-zinc-800
            disabled:opacity-30 disabled:cursor-not-allowed
            transition-all duration-200
          "
        >
          <ChevronLeft size={18} />
        </button>

        {/* Image */}
        <div className="flex-1 aspect-video rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
          <img
            src={project.images[imgIndex]}
            alt={`${project.title} screenshot ${imgIndex + 1}`}
            className="w-full h-full object-cover"
            style={imgStyle}
          />
        </div>

        {/* Right arrow */}
        <button
          onClick={() => navigate("right")}
          disabled={total <= 1}
          className="
            shrink-0 w-10 h-10 rounded-xl
            flex items-center justify-center
            border border-zinc-200 dark:border-zinc-800
            bg-white dark:bg-zinc-900
            text-zinc-500 dark:text-zinc-400
            hover:border-zinc-900 dark:hover:border-white
            hover:text-zinc-900 dark:hover:text-white
            hover:bg-zinc-50 dark:hover:bg-zinc-800
            disabled:opacity-30 disabled:cursor-not-allowed
            transition-all duration-200
          "
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Dots + counter */}
      {total > 1 && (
        <div className="flex items-center justify-center gap-3">
          <div className="flex gap-1.5">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const dir = i > imgIndex ? "right" : "left";
                  setSlide(dir);
                  setTimeout(() => { setImgIndex(i); setSlide(null); }, 180);
                }}
                className={`
                  rounded-full transition-all duration-300
                  ${i === imgIndex
                    ? "bg-[#ccff00] w-5 h-1.5 shadow-[0_0_6px_#ccff00]"
                    : "bg-zinc-300 dark:bg-zinc-700 w-1.5 h-1.5 hover:bg-zinc-400"
                  }
                `}
              />
            ))}
          </div>
          <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 tabular-nums">
            {imgIndex + 1} / {total}
          </span>
        </div>
      )}
    </div>
  );
}

// ── Detail Panel ──
function DetailPanel({ project }) {
  const [displayed, setDisplayed] = useState(project);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (project.title === displayed.title) return;
    setFading(true);
    const t = setTimeout(() => { setDisplayed(project); setFading(false); }, 200);
    return () => clearTimeout(t);
  }, [project]);

  return (
    <div
      className="transition-all duration-200 ease-out"
      style={{ opacity: fading ? 0 : 1, transform: fading ? "translateY(8px)" : "translateY(0px)" }}
    >
      {/* Tag */}
      <span className="inline-block text-[10px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-800 rounded-full px-3 py-1 mb-5">
        {displayed.tag}
      </span>

      {/* Title */}
      <div className="flex items-center gap-3 mb-4">
        <div className="h-1 w-6 bg-[#ccff00] rounded-full shadow-[0_0_10px_#ccff00] shrink-0" />
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase">
          <a
            href={displayed.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ccff00] transition-colors duration-200"
          >
            {displayed.title} ↗
          </a>
        </h2>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 max-w-lg">
        {displayed.description}
      </p>

      {/* Bullets */}
      <ul className="space-y-2.5 mb-7 border-l-2 border-zinc-100 dark:border-zinc-900 pl-4">
        {displayed.bullets.map((point, idx) => (
          <li key={idx} className="flex gap-3 text-sm items-start text-zinc-500 dark:text-zinc-400">
            <div className="h-1.5 w-1.5 mt-[7px] bg-[#ccff00] rounded-full shrink-0" />
            {point}
          </li>
        ))}
      </ul>

      {/* Stack */}
      <div className="flex flex-wrap gap-2">
        {displayed.stack.map((tech) => (
          <span
            key={tech}
            className="
              text-[10px] font-bold uppercase tracking-wide
              px-3 py-1.5 rounded-full
              bg-zinc-100 dark:bg-zinc-900
              border border-zinc-200 dark:border-zinc-800
              text-zinc-600 dark:text-zinc-400
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Main ──
export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projectsData[activeIndex];

  return (
    <section
      id="projects"
      className="bg-white dark:bg-black text-zinc-900 dark:text-white py-20 px-6 md:px-10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500 mb-3">
            Work I've shipped
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Project{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-500">
              SHOWCASE
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* LEFT — project list */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-1">
              {projectsData.map((project, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={project.title}
                    onClick={() => setActiveIndex(i)}
                    className={`
                      w-full text-left group flex items-center justify-between
                      px-5 py-4 rounded-xl border transition-all duration-200
                      ${isActive
                        ? "bg-zinc-900 dark:bg-white border-zinc-900 dark:border-white"
                        : "bg-transparent border-zinc-100 dark:border-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
                      }
                    `}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-xs font-black tabular-nums ${isActive ? "text-zinc-400 dark:text-zinc-500" : "text-zinc-300 dark:text-zinc-700"}`}>
                        {project.number}
                      </span>
                      <div>
                        <p className={`text-sm font-black tracking-tight ${isActive ? "text-white dark:text-black" : "text-zinc-800 dark:text-zinc-200"}`}>
                          {project.title}
                        </p>
                        <p className="text-[10px] font-semibold mt-0.5 text-zinc-400 dark:text-zinc-600">
                          {project.tag}
                        </p>
                      </div>
                    </div>
                    <span className={`text-sm transition-transform duration-200 ${isActive ? "text-[#ccff00]" : "text-zinc-300 dark:text-zinc-700 -translate-x-1 group-hover:translate-x-0"}`}>
                      →
                    </span>
                  </button>
                );
              })}

              {/* Progress dots */}
              <div className="flex gap-1.5 px-5 pt-4">
                {projectsData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-0.5 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-[#ccff00] w-8 shadow-[0_0_6px_#ccff00]" : "bg-zinc-200 dark:bg-zinc-800 w-4 hover:bg-zinc-400"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="w-[1px] h-full bg-zinc-100 dark:bg-zinc-900" />
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7 space-y-10">
            <DetailPanel project={activeProject} />
            <ImagePanel project={activeProject} />
          </div>

        </div>
      </div>
    </section>
  );
}