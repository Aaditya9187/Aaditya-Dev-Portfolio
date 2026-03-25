import { useState, useEffect, useCallback } from "react";

type Theme = "dark" | "light";

export const useTheme = () => {
  const getInitialTheme = (): Theme => {
    if (typeof window === "undefined") return "light";

    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) return savedTheme;

    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    return systemPrefersDark ? "dark" : "light";
  };

  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme };
};