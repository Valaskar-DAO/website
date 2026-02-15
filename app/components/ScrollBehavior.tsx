"use client";

import { useEffect } from "react";

export default function ScrollBehavior() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (!header) return;

      if (window.scrollY > 180) {
        header.classList.add("header-scroled");
      } else {
        header.classList.remove("header-scroled");
      }

      const sections = document.querySelectorAll("section[id]");
      const navLinks = document.querySelectorAll(".nav a");
      const scrollPos = window.scrollY + 200;

      sections.forEach((section) => {
        const el = section as HTMLElement;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        const id = el.getAttribute("id");

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + id) {
              link.classList.add("active");
            }
          });
        }
      });
    };

    const handleNavClick = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const navLinks = document.querySelectorAll(".nav a");
      navLinks.forEach((l) => l.classList.remove("active"));
      const href = target.getAttribute("href");
      if (href) {
        document
          .querySelectorAll(`.nav a[href="${href}"]`)
          .forEach((l) => l.classList.add("active"));
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navLinks = document.querySelectorAll(".nav a");
    navLinks.forEach((link) => link.addEventListener("click", handleNavClick));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      navLinks.forEach((link) =>
        link.removeEventListener("click", handleNavClick)
      );
    };
  }, []);

  return null;
}
