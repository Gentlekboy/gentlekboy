"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import LogoMark from "./LogoMark";

const sectionLinks = [
  { id: "now", label: "Now" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const sections = sectionLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const projectsLinkClass = (isActive: boolean) =>
    `text-sm transition-colors duration-[var(--duration-fast)] ${
      isActive
        ? "text-accent"
        : "text-text-secondary hover:text-text-primary"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 flex flex-col transition-colors duration-[var(--duration-base)] ${
        scrolled || menuOpen
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-page w-full h-16 flex items-center justify-between">
        <Link
          href={isHome ? "#top" : "/#top"}
          aria-label="Kufre Udoh, back to top"
          className="text-accent"
        >
          <LogoMark className="h-7 w-7" />
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link
              href="/projects"
              className={projectsLinkClass(pathname === "/projects")}
            >
              Projects
            </Link>
          </li>
          {sectionLinks.map((link) => {
            const href = isHome ? `#${link.id}` : `/#${link.id}`;
            return (
              <li key={link.id}>
                <a
                  href={href}
                  className={projectsLinkClass(
                    isHome && active === `#${link.id}`
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center text-text-secondary transition-colors duration-[var(--duration-fast)] hover:text-accent"
        >
          {menuOpen ? (
            <X size={22} strokeWidth={1.75} />
          ) : (
            <Menu size={22} strokeWidth={1.75} />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden"
          >
            <ul className="container-page flex flex-col gap-1 pb-4">
              <li>
                <Link
                  href="/projects"
                  className={`block py-2.5 text-sm ${projectsLinkClass(
                    pathname === "/projects"
                  )}`}
                >
                  Projects
                </Link>
              </li>
              {sectionLinks.map((link) => {
                const href = isHome ? `#${link.id}` : `/#${link.id}`;
                return (
                  <li key={link.id}>
                    <a
                      href={href}
                      className={`block py-2.5 text-sm ${projectsLinkClass(
                        isHome && active === `#${link.id}`
                      )}`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
