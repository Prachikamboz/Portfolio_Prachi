"use client";

import { useEffect, useState } from "react";

export default function Section({ name = "", title = "", tagline = "", speed = 80 }) {
  const [isVisible, setIsVisible] = useState(false);
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isVisible && title && index < title.length) {
      const timeout = setTimeout(() => {
        setDisplay((prev) => prev + title[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, isVisible, title, speed]);

  return (
    <section className="
      relative min-h-[80vh] sm:min-h-[85vh] md:min-h-[70vh] w-full
      bg-white dark:bg-black
      flex flex-col items-center justify-center text-center
      px-4 sm:px-6 md:px-10
      overflow-hidden
      transition-colors duration-300
    ">

      {/* Name — giant hero text */}
      <h1 className={`
        font-black uppercase tracking-tight
        text-zinc-900 dark:text-white
        leading-none mb-6 sm:mb-8 md:mb-10
        transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        text-[18vw] sm:text-[14vw] md:text-[12vw] lg:text-[13vw]
      `}>
        {name}
      </h1>

      
      <div className={`
        space-y-4 sm:space-y-5 md:space-y-6
        transition-all duration-1000 ease-out delay-500
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}>
       
        <p className="
          text-zinc-400 dark:text-zinc-500 tracking-[0.25em]
          text-[8px] sm:text-[9px] md:text-[11px] lg:text-xs
          font-bold uppercase min-h-[1.2em]
        ">
          {display}
          {index < title.length && (
            <span className="inline-block w-[2px] h-[1em] bg-lime-400 ml-0.5 animate-pulse" />
          )}
        </p>

        {/* Tagline */}
        <h2 className="
          font-playfair italic
          text-zinc-900 dark:text-white
          text-xl sm:text-2xl md:text-3xl lg:text-4xl
          flex flex-wrap justify-center gap-x-3
          px-4 sm:px-6 md:px-10
        ">
          {tagline}
        </h2>
      </div>
    </section>
  );
}
