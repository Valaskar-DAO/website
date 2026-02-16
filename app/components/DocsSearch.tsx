"use client";

import { useState, useRef, useEffect, useCallback } from "react";

export default function DocsSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<{ id: string; title: string; snippet: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard shortcut: Ctrl+K / Cmd+K to focus search
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const clearHighlights = useCallback(() => {
    document.querySelectorAll("mark.docs-search-highlight").forEach((el) => {
      const parent = el.parentNode;
      if (parent) {
        parent.replaceChild(document.createTextNode(el.textContent || ""), el);
        parent.normalize();
      }
    });
  }, []);

  const search = useCallback(
    (term: string) => {
      clearHighlights();

      if (!term.trim()) {
        setResults([]);
        setIsOpen(false);
        return;
      }

      const contentEl = document.querySelector(".wp-content");
      if (!contentEl) return;

      const sections = contentEl.querySelectorAll("section.wp-section");
      const found: { id: string; title: string; snippet: string }[] = [];
      const lowerTerm = term.toLowerCase();

      sections.forEach((section) => {
        const text = section.textContent || "";
        if (text.toLowerCase().includes(lowerTerm)) {
          const heading =
            section.querySelector("h2, h3")?.textContent || "Section";
          const id = section.id || "";

          // Get snippet around match
          const idx = text.toLowerCase().indexOf(lowerTerm);
          const start = Math.max(0, idx - 40);
          const end = Math.min(text.length, idx + term.length + 40);
          let snippet = (start > 0 ? "…" : "") + text.slice(start, end) + (end < text.length ? "…" : "");

          found.push({ id, title: heading, snippet });
        }
      });

      setResults(found);
      setIsOpen(true);
    },
    [clearHighlights]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    search(val);
  };

  const scrollToSection = (id: string) => {
    clearHighlights();

    const section = document.getElementById(id);
    if (!section) return;

    // Highlight matching text inside the section
    if (query.trim()) {
      highlightText(section, query.trim());
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  const highlightText = (root: HTMLElement, term: string) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const lowerTerm = term.toLowerCase();
    const nodesToHighlight: { node: Text; index: number }[] = [];

    let node: Text | null;
    while ((node = walker.nextNode() as Text | null)) {
      const idx = node.textContent?.toLowerCase().indexOf(lowerTerm) ?? -1;
      if (idx !== -1) {
        nodesToHighlight.push({ node, index: idx });
      }
    }

    nodesToHighlight.forEach(({ node, index }) => {
      const range = document.createRange();
      range.setStart(node, index);
      range.setEnd(node, index + term.length);

      const mark = document.createElement("mark");
      mark.className = "docs-search-highlight";
      range.surroundContents(mark);
    });
  };

  return (
    <div className="docs-search-wrapper" ref={wrapperRef}>
      <div className="docs-search-input-box">
        <svg
          className="docs-search-icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          className="docs-search-input"
          placeholder="Search docs…"
          value={query}
          onChange={handleChange}
          onFocus={() => {
            if (query.trim()) setIsOpen(true);
          }}
        />
        <kbd className="docs-search-kbd">⌘K</kbd>
      </div>

      {isOpen && results.length > 0 && (
        <div className="docs-search-dropdown">
          {results.map((r, i) => (
            <button
              key={`${r.id}-${i}`}
              className="docs-search-result"
              onClick={() => scrollToSection(r.id)}
            >
              <span className="docs-search-result-title">{r.title}</span>
              <span className="docs-search-result-snippet">{r.snippet}</span>
            </button>
          ))}
        </div>
      )}

      {isOpen && query.trim() && results.length === 0 && (
        <div className="docs-search-dropdown">
          <div className="docs-search-empty">No results found</div>
        </div>
      )}
    </div>
  );
}
