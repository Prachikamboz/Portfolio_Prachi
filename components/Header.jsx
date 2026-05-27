"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "HOME",   path: "/" },
  { label: "ABOUT",  path: "/about" },
  { label: "SKILLS", path: "/skillspage" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="
      flex items-center justify-between sticky top-0
      px-6 md:px-8 py-5
      bg-white dark:bg-black
      border-b border-zinc-100 dark:border-zinc-900
      relative z-50 transition-colors duration-300
    ">

     
      <div className="flex items-center gap-3">
        <div className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-white">PK</div>
        <div className="h-6 w-[1px] bg-zinc-200 dark:bg-zinc-800 hidden sm:block" />
        <div className="hidden sm:flex flex-col leading-none">
          <span className="text-[10px] text-zinc-400 font-bold tracking-widest uppercase">
            Prachi Kamboj
          </span>
          <span className="text-[10px] text-emerald-500 font-bold tracking-widest uppercase flex items-center gap-1.5 mt-1">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            Frontend Developer
          </span>
        </div>
      </div>

     
      <nav className="hidden md:flex items-center bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-full px-2 py-1 transition-colors duration-300">
        {navLinks.map(({ label, path }) => {
          const isActive = pathname === path;
          return (
            <Link
              key={label}
              href={path}
              className={`
                px-6 py-2 rounded-full text-xs font-bold tracking-wide
                transition-all duration-200
                ${isActive
                  ? "bg-zinc-900 dark:bg-white text-white dark:text-black"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                }
              `}
            >
              {label}
            </Link>
          );
        })}
      </nav>

     
      <div className="hidden md:flex items-center gap-3">
        <ThemeToggle />
        <a
          href="mailto:prachikamboz8@gmail.com"
          className="
            px-5 py-2 rounded-lg text-sm font-semibold
            bg-zinc-900 dark:bg-white
            text-white dark:text-black
            hover:opacity-90
            transition-all duration-200
          "
        >
          Contact
        </a>
      </div>

     
      <div className="md:hidden flex items-center gap-2">
        <ThemeToggle />
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-zinc-800 dark:text-white p-2 rounded-lg border border-zinc-200 dark:border-zinc-800"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      
      {mobileOpen && (
        <div className="
          absolute top-full left-0 w-full
          bg-white dark:bg-black
          border-b border-zinc-100 dark:border-zinc-800
          flex flex-col py-4 px-6 md:hidden shadow-lg
          transition-colors duration-300
        ">
          {navLinks.map(({ label, path }) => {
            const isActive = pathname === path;
            return (
              <Link
                key={label}
                href={path}
                onClick={() => setMobileOpen(false)}
                className={`
                  py-3 text-sm font-semibold tracking-wide
                  border-b border-zinc-100 dark:border-zinc-900 last:border-0
                  ${isActive ? "text-lime-500 dark:text-lime-400" : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"}
                `}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="mailto:prachikamboz8@gmail.com"
            className="mt-4 w-full px-5 py-2 rounded-lg text-sm font-semibold text-center bg-zinc-900 dark:bg-white text-white dark:text-black"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
