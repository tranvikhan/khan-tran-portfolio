"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Moon, Sun, X } from "react-feather";
import { useEffect, useState } from "react";
import { useSitePreferences } from "@/components/SitePreferences";
import { copy } from "@/data/siteCopy";

export function SiteSkipLink() {
  const { locale } = useSitePreferences();
  return <a className="skip-link" href="#main-content">{locale === "vi" ? "Bỏ qua đến nội dung" : "Skip to content"}</a>;
}

export function SiteHeader() {
  const { locale, setLocale, theme, toggleTheme } = useSitePreferences();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = copy[locale];
  const prefix = pathname === "/" ? "" : "/";

  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="site-header__inner page-gutter">
        <Link className="wordmark" href="/" aria-label="Kevin Khan Trần — home" onClick={() => setMenuOpen(false)}>
          <strong>KEVIN</strong><span aria-hidden="true">/</span><span>KHAN TRẦN</span>
        </Link>
        <nav className={`site-nav${menuOpen ? " site-nav--open" : ""}`} aria-label={locale === "vi" ? "Điều hướng chính" : "Main navigation"} id="site-navigation">
          <a href={`${prefix}#work`} onClick={() => setMenuOpen(false)}>{t.nav.work}</a>
          <a href={`${prefix}#about`} onClick={() => setMenuOpen(false)}>{t.nav.about}</a>
          <a href={`${prefix}#contact`} onClick={() => setMenuOpen(false)}>{t.nav.contact}</a>
        </nav>
        <div className="site-controls">
          <div className="language-switch" role="group" aria-label={locale === "vi" ? "Ngôn ngữ" : "Language"}>
            <button type="button" className={locale === "en" ? "active" : ""} aria-pressed={locale === "en"} onClick={() => setLocale("en")}>EN</button>
            <span aria-hidden="true">/</span>
            <button type="button" className={locale === "vi" ? "active" : ""} aria-pressed={locale === "vi"} onClick={() => setLocale("vi")}>VI</button>
          </div>
          <span className="control-divider" aria-hidden="true" />
          <button className="theme-switch" type="button" onClick={toggleTheme} aria-label={theme === "light" ? t.theme.dark : t.theme.light} title={theme === "light" ? t.theme.dark : t.theme.light}>
            <Sun size={16} aria-hidden="true" />
            <span className="theme-switch__thumb" aria-hidden="true" />
            <Moon size={15} aria-hidden="true" />
          </button>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? t.nav.close : t.nav.menu} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const { locale } = useSitePreferences();
  const t = copy[locale];
  return (
    <footer className="site-footer page-gutter">
      <p>© {new Date().getFullYear()} Khan Trần <span aria-hidden="true">·</span> {t.footer}</p>
      <a href="mailto:tranvikhan@gmail.com">tranvikhan@gmail.com <ArrowUpRight size={14} aria-hidden="true" /></a>
    </footer>
  );
}
