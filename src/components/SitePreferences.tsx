"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "en" | "vi";
export type Theme = "light" | "dark";

type SitePreferencesValue = {
  locale: Locale;
  theme: Theme;
  setLocale: (locale: Locale) => void;
  toggleTheme: () => void;
};

const SitePreferencesContext = createContext<SitePreferencesValue | null>(null);

export function SitePreferences({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("portfolio-locale");
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedLocale === "en" || savedLocale === "vi") setLocaleState(savedLocale);
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem("portfolio-locale", locale);
  }, [locale]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      locale,
      theme,
      setLocale: setLocaleState,
      toggleTheme: () => setTheme((current) => (current === "light" ? "dark" : "light")),
    }),
    [locale, theme]
  );

  return <SitePreferencesContext.Provider value={value}>{children}</SitePreferencesContext.Provider>;
}

export function useSitePreferences() {
  const value = useContext(SitePreferencesContext);
  if (!value) throw new Error("SitePreferences is missing");
  return value;
}
