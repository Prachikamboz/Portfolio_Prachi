"use client";

import { ChevronDown } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function Explore({ route = "/", target = "projects" }) {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToTarget = () => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = () => {
    if (pathname !== route) {
      router.push(`${route}?scrollTo=${target}`);
    } else {
      scrollToTarget();
    }
  };

  return (
    <div
      className="
        absolute bottom-6 left-0 right-0 mx-auto
        w-fit cursor-pointer select-none z-20
      "
      onClick={handleClick}
    >
      <div className="flex flex-col items-center gap-1 text-zinc-500 dark:text-white hover:text-zinc-900 dark:hover:text-lime-400 hover:scale-110 transition-all duration-200">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
          Explore
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </div>
  );
}
