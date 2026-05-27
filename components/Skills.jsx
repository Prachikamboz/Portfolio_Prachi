"use client";

const skillGroups = [
  {
    label: "Languages",
    skills: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "HTML5",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
  },
  {
    label: "Frameworks",
    skills: [
      { name: "React.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind CSS", icon: "/tailwind.png" }, // ← local file from /public/tailwind.png
      { name: "Node.js",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Figma",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
    ],
  },
  {
    label: "Concepts",
    skills: [
      { name: "SSR / SSG",      icon: null, emoji: "⚡" },
      { name: "REST APIs",      icon: null, emoji: "🔗" },
      { name: "Core Web Vitals",icon: null, emoji: "📊" },
      { name: "Mobile-First",   icon: null, emoji: "📱" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="
      bg-white dark:bg-black text-zinc-900 dark:text-white
      font-inter py-24 px-6
      transition-colors duration-300
    ">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-3">
            Skills{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-500">
              SHOWCASE
            </span>
          </h1>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 font-bold tracking-widest uppercase">
            Technologies I work with
          </p>
        </div>

        {/* Grouped Skills */}
        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.label}>

              
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600 mb-4 pl-1">
                {group.label}
              </p>

              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      group flex items-center gap-3
                      bg-zinc-50 dark:bg-zinc-900/80
                      border border-zinc-200 dark:border-zinc-800
                      px-4 py-3 rounded-xl
                      transition-all duration-300
                      hover:border-lime-400/60 dark:hover:border-lime-400/40
                      hover:scale-[1.03]
                      hover:shadow-md hover:shadow-zinc-100 dark:hover:shadow-none
                      text-zinc-700 dark:text-zinc-300
                    "
                  >
                    {skill.icon ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-5 h-5 object-contain shrink-0"
                      />
                    ) : (
                      <span className="text-base leading-none">{skill.emoji}</span>
                    )}
                    <span className="text-xs font-semibold">{skill.name}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}