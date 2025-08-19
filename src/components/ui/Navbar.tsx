"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const SCROLL_THRESHOLD = 50;

const logo = { src: "/logo.png", alt: "Unison logo" };
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/header-pages/about-us", label: "About Us" },
  { href: "/contact-pages", label: "Contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50
        bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm
        border-b border-gray-200 dark:border-zinc-700
        transition-all duration-300 ease-in-out
        ${scrolled ? "py-2 shadow-md" : "py-4 shadow-sm"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className={`object-contain opacity-90 hover:opacity-100 transition-all duration-300
              ${scrolled ? "h-8" : "h-12"}
            `}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-900 dark:text-white">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-900 dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`transition-all duration-300 ease-in-out md:hidden
          ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible h-0"}`}
      >
        <div className="bg-white/95 dark:bg-zinc-950/95 border-t border-gray-200 dark:border-zinc-700 px-6 pb-4">
          <nav className="flex flex-col gap-3 font-medium text-gray-900 dark:text-white">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="py-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
