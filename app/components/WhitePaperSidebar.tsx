"use client";

import { useEffect, useState } from "react";

interface Section {
  id: string;
  title: string;
  number: string;
}

export default function WhitePaperSidebar({
  sections,
}: {
  sections: Section[];
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className="wp-sidebar">
      <div className="wp-sidebar-inner">
        <div className="wp-sidebar-label">Contents</div>
        <nav className="wp-sidebar-nav">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`wp-sidebar-link${activeId === s.id ? " wp-sidebar-link-active" : ""}`}
            >
              <span className="wp-sidebar-num">{s.number}</span>
              {s.title}
            </a>
          ))}
        </nav>
        <div className="wp-sidebar-download">
          <a
            href="/white-paper.pdf"
            target="_blank"
            className="btn btn-outline btn-sm"
          >
            ↓ Download PDF
          </a>
        </div>
      </div>
    </aside>
  );
}
