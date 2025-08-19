"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50
        bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-700
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
        <nav className="hidden md:flex space-x-8 text-white font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-indigo-400 transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-t border-zinc-700 px-6 pb-4">
          <nav className="flex flex-col gap-3 text-white font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="py-2 hover:bg-zinc-800 rounded-md"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
