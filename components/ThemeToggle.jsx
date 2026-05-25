"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { dark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="
        relative flex items-center justify-center
        w-9 h-9 rounded-lg
        border border-zinc-200 dark:border-zinc-800
        bg-zinc-100 dark:bg-zinc-900
        text-zinc-600 dark:text-zinc-400
        hover:border-zinc-300 dark:hover:border-zinc-700
        hover:text-zinc-900 dark:hover:text-white
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-lime-400/40
      "
    >
      <span
        className="absolute transition-all duration-300"
        style={{
          opacity: dark ? 1 : 0,
          transform: dark ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.5)",
        }}
      >
        <Moon size={16} />
      </span>
      <span
        className="absolute transition-all duration-300"
        style={{
          opacity: dark ? 0 : 1,
          transform: dark ? "rotate(-90deg) scale(0.5)" : "rotate(0deg) scale(1)",
        }}
      >
        <Sun size={16} />
      </span>
    </button>
  );
}
