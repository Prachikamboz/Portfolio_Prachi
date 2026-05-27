"use client";

const cards = [
  {
    title: "UI / UX Design",
    desc: "Clean, user-friendly interfaces with modern layout systems.",
    icon: "✦",
  },
  {
    title: "React Development",
    desc: "Scalable React applications with clean component architecture.",
    icon: "⬡",
  },
  {
    title: "Next.js & SSR",
    desc: "Fast, SEO-friendly apps using SSR, SSG, and App Router.",
    icon: "▲",
  },
  {
    title: "REST API Integration",
    desc: "Async data fetching with loading states and error handling.",
    icon: "◈",
  },
  {
    title: "Performance Optimization",
    desc: "Lazy loading, code splitting, and Core Web Vitals tuning.",
    icon: "◎",
  },
  {
    title: "Responsive Design",
    desc: "Mobile-first layouts that work across all screen sizes.",
    icon: "❐",
  },
];

export default function CardsSection() {
  return (
    <section className="bg-white dark:bg-black py-24 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">

       
        <div className="mb-12">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600 mb-3">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
            What I{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-500">
              Do
            </span>
          </h2>
        </div>

        {/* Cards Grid — 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                group
                bg-zinc-50 dark:bg-zinc-900/50
                border border-zinc-200 dark:border-zinc-800
                rounded-2xl p-6
                transition-all duration-300
                hover:-translate-y-1.5
                hover:border-lime-400/50 dark:hover:border-lime-400/30
                hover:shadow-lg hover:shadow-zinc-100 dark:hover:shadow-none
                hover:bg-white dark:hover:bg-zinc-900/80
              "
            >
              <span className="text-xl text-lime-500 dark:text-lime-400 mb-4 block">
                {card.icon}
              </span>
              <h3 className="text-sm font-black text-zinc-900 dark:text-white mb-2">
                {card.title}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-500 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}