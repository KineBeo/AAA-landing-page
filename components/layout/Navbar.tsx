"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const LMS_URL = process.env.NEXT_PUBLIC_LMS_URL ?? "#";

const NAV_LINKS = [
  { label: "Courses", href: "#courses" },
  { label: "Demo", href: "#demo" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

function LogoIcon() {
  return (
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ) : (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith("#")) {
        e.preventDefault();
        closeMobile();
        const el = document.querySelector(href);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 88;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    },
    [closeMobile]
  );

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 glass-card rounded-2xl transition-shadow duration-300 ${
        scrolled ? "nav-scrolled" : ""
      } border border-sand-200`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <LogoIcon />
          </div>
          <span className="font-heading font-bold text-lg text-sand-900 whitespace-nowrap">
            AI Work Academy
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-sand-600 hover:text-primary-600 transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`${LMS_URL}/login`}
            className="text-sm font-medium text-sand-600 hover:text-primary-600 transition-colors duration-200 cursor-pointer px-3 py-2"
          >
            Log in
          </a>
          <a href={`${LMS_URL}/login`} className="btn-primary text-sm px-5 py-2.5">
            Join Free Session
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg hover:bg-sand-100 transition-colors cursor-pointer text-sand-700"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-sand-200 px-4 pb-4 pt-3">
          <div className="flex flex-col gap-1 mb-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-sand-600 hover:text-primary-600 transition-colors py-2 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2 border-t border-sand-200 pt-3">
            <a
              href={`${LMS_URL}/login`}
              onClick={closeMobile}
              className="text-center text-sm font-medium text-sand-700 border border-sand-200 px-5 py-2.5 rounded-xl hover:bg-sand-100 transition-colors cursor-pointer"
            >
              Log in
            </a>
            <a
              href={`${LMS_URL}/login`}
              onClick={closeMobile}
              className="btn-primary text-sm py-2.5 text-center"
            >
              Join Free Session
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
