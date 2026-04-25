/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site-config";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/corridors", label: "Corridors" },
  { href: "/nos-operations", label: "Nos opérations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    (window as any).__heroRef = heroRef;
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const textColor = isScrolled ? "text-foreground" : "text-white";
  const bgClass = isScrolled ? "bg-white shadow-md" : "bg-transparent";
  const burgerColor = isScrolled ? "bg-foreground" : "bg-white";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-3">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 h-10 md:h-12 w-auto"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/logo-removebg.png"
              alt="NTCHOUPE SUPPLY CHAIN"
              height={48}
              width={200}
              priority
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav
            className={`hidden md:flex gap-6 lg:gap-8 ${textColor} text-sm font-medium`}
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-all duration-200 ${
                    isActive
                      ? "font-bold border-b-2 border-accent pb-1"
                      : "hover:opacity-75"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right cluster: WhatsApp + Burger */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* WhatsApp CTA Button — desktop only */}
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block shrink-0 px-6 py-2.5 bg-accent hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors duration-200 text-base"
            >
              WhatsApp
            </a>

            {/* Burger menu — mobile only */}
            <button
              type="button"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((v) => !v)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 shrink-0"
            >
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${burgerColor} ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${burgerColor} ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${burgerColor} ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`md:hidden overflow-hidden bg-white shadow-lg transition-[max-height] duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col px-4 py-4 gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-primary-50 text-primary border-l-4 border-accent"
                      : "text-foreground hover:bg-surface"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 px-4 py-3 bg-accent text-white font-semibold rounded-lg text-center"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      {/* Marker for IntersectionObserver — placed right before hero */}
      <div ref={heroRef} className="h-0" aria-hidden="true" />
    </>
  );
}
