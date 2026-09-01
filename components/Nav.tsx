"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import LogoMark from "./LogoMark";

const pageLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/now", label: "Now" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [contactActive, setContactActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const section = document.getElementById("contact");
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setContactActive(entry.isIntersecting);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const linkClass = (isActive: boolean) =>
    `text-sm transition-colors duration-[var(--duration-fast)] ${
      isActive
        ? "text-accent"
        : "text-text-secondary hover:text-text-primary"
    }`;

  const underlineClass = (isActive: boolean) =>
    `absolute -bottom-1 left-0 h-px w-full origin-left bg-accent transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out)] ${
      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
    }`;

  const contactHref = isHome ? "#contact" : "/#contact";

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
          {pageLinks.map((link) => (
            <li key={link.href} className="relative">
              <Link
                href={link.href}
                className={`group relative inline-block py-1 ${linkClass(
                  pathname === link.href
                )}`}
              >
                {link.label}
                <span className={underlineClass(pathname === link.href)} />
              </Link>
            </li>
          ))}
          <li className="relative">
            <a
              href={contactHref}
              className={`group relative inline-block py-1 ${linkClass(
                isHome && contactActive
              )}`}
            >
              Contact
              <span className={underlineClass(isHome && contactActive)} />
            </a>
          </li>
        </ul>

        <motion.button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setMenuOpen((v) => !v)}
          whileTap={{ scale: 0.9 }}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center text-text-secondary transition-colors duration-[var(--duration-fast)] hover:text-accent"
        >
          <motion.span
            key={menuOpen ? "close" : "open"}
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.2 }}
            className="flex"
          >
            {menuOpen ? (
              <X size={22} strokeWidth={1.75} />
            ) : (
              <Menu size={22} strokeWidth={1.75} />
            )}
          </motion.span>
        </motion.button>
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
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-2.5 text-sm ${linkClass(
                      pathname === link.href
                    )}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={contactHref}
                  className={`block py-2.5 text-sm ${linkClass(
                    isHome && contactActive
                  )}`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
