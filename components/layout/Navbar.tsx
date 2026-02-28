"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useMemberstack } from "@/components/providers/MemberstackProvider";

const NAV_LINKS = [
  { label: "Courses", href: "#courses" },
  { label: "Demo", href: "#demo" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

// ─── Icons ────────────────────────────────────────────────────────────────────

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

// ─── Component ────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { member, isPaid, isLoading, openLogin, openSignup, logout } = useMemberstack();

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
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <LogoIcon />
          </div>
          <span className="font-heading font-bold text-lg text-slate-900 whitespace-nowrap">
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
              className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {isLoading ? (
            <div className="w-20 h-8 bg-slate-100 rounded-lg animate-pulse" />
          ) : member ? (
            <>
              {isPaid ? (
                <Link
                  href="/dashboard"
                  className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors cursor-pointer px-3 py-2"
                >
                  Dashboard
                </Link>
              ) : (
                <button
                  onClick={openSignup}
                  className="text-sm font-semibold text-accent-500 hover:text-accent-600 transition-colors cursor-pointer px-3 py-2"
                >
                  Upgrade to Pro
                </button>
              )}
              <button
                onClick={logout}
                className="text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors cursor-pointer px-3 py-2"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <button
                onClick={openLogin}
                className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors duration-200 cursor-pointer px-3 py-2"
              >
                Log in
              </button>
              <button
                onClick={openSignup}
                className="btn-primary text-sm px-5 py-2.5"
              >
                Join Free Session
              </button>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer text-slate-700"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 px-4 pb-4 pt-3">
          <div className="flex flex-col gap-1 mb-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors py-2 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2 border-t border-slate-100 pt-3">
            {isLoading ? (
              <div className="h-10 bg-slate-100 rounded-xl animate-pulse" />
            ) : member ? (
              <>
                {isPaid && (
                  <Link
                    href="/dashboard"
                    onClick={closeMobile}
                    className="text-center text-sm font-semibold text-primary-600 border border-primary-200 px-5 py-2.5 rounded-xl hover:bg-primary-50 transition-colors cursor-pointer"
                  >
                    Dashboard
                  </Link>
                )}
                {!isPaid && (
                  <button
                    onClick={() => { openSignup(); closeMobile(); }}
                    className="btn-accent text-sm py-2.5"
                  >
                    Upgrade to Pro
                  </button>
                )}
                <button
                  onClick={() => { logout(); closeMobile(); }}
                  className="text-center text-sm font-medium text-slate-500 hover:text-slate-700 py-2 cursor-pointer"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => { openLogin(); closeMobile(); }}
                  className="text-center text-sm font-medium text-slate-600 border border-slate-200 px-5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Log in
                </button>
                <button
                  onClick={() => { openSignup(); closeMobile(); }}
                  className="btn-primary text-sm py-2.5"
                >
                  Join Free Session
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
