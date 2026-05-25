"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({ dark: true, toggle: () => {} });

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true); // default dark

  // On mount, read saved preference or system preference
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setDark(saved === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(prefersDark);
    }
  }, []);

  // Apply class to <html> whenever dark changes
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const toggle = () => setDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
