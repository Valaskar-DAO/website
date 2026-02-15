"use client";

import { usePathname } from "next/navigation";
import { i18n, localeNames, type Locale } from "../i18n/config";
import { useState, useRef, useEffect } from "react";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function getLocalePath(targetLocale: string) {
    // Replace the current locale prefix with the target one
    const segments = pathname.split("/");
    segments[1] = targetLocale;
    return segments.join("/");
  }

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        className="lang-switcher-btn"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Select language"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span>{locale.toUpperCase()}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className={`lang-switcher-chevron ${open ? "lang-switcher-chevron-open" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="lang-dropdown">
          {i18n.locales.map((l) => (
            <a
              key={l}
              href={getLocalePath(l)}
              className={`lang-option ${l === locale ? "lang-option-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              <span className="lang-option-code">{l.toUpperCase()}</span>
              <span className="lang-option-name">{localeNames[l]}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
