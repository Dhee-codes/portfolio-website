"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700"></div>
    );
  }

  const currentIcon =
    resolvedTheme === "dark" ? (
      <Sun size={24} />
    ) : (
      <Moon size={24} strokeWidth={2} />
    );


  return (
    <button
      onClick={toggleTheme}
      className="p-1 rounded-lg focus:border focus:border-primary"
      aria-label={
        resolvedTheme === "dark"
          ? "Switch to light theme"
          : "Switch to dark theme"
      }
      title={
        resolvedTheme === "dark"
          ? "Switch to light theme"
          : "Switch to dark theme"
      }
    >
      {currentIcon}
    </button>
  );
}
