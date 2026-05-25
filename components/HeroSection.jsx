"use client";

export default function HeroSection() {
  return (
    <section className="
      w-full px-6 md:px-10 py-4
      flex justify-between items-end
      text-[10px] md:text-xs font-bold tracking-widest uppercase
      bg-white dark:bg-black
      transition-colors duration-300
    ">
      {/* Left */}
      <div className="flex flex-col gap-2">
        <span className="text-zinc-900 dark:text-white">Based in Mohali,</span>
        <span className="text-zinc-400 dark:text-zinc-500">India</span>
      </div>

      {/* Right */}
      <div className="flex flex-col items-end gap-2 text-right">
        <span className="text-zinc-900 dark:text-white">Frontend Developer,</span>
        <span className="text-zinc-400 dark:text-zinc-500">&amp; Designer</span>
      </div>
    </section>
  );
}
