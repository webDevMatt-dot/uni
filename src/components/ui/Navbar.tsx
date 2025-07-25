"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Adjusted scroll threshold for the shrinking effect
      setScrolled(window.scrollY > 50); // Consistent with your App.css scroll threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50
        bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-700
        transition-all duration-300 ease-in-out shadow-sm
        ${scrolled ? "py-2 shadow-md" : "py-4"}` // Adjusted padding for a slightly larger default/smaller scrolled state
      }
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-300">
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/unison.svg" // Your Unison logo image
            alt="Unison Logo" // More descriptive alt text
            width={scrolled ? 38 : 46} // Image size controlled by scroll
            height={scrolled ? 38 : 46} // Image size controlled by scroll
            className="object-contain transition-all duration-300"
          />
          {/* Removed the 'Unison' text next to the logo image if you intend for the image to be the sole logo */}
          {/* If you want text, add:
          <span
            className={`text-white font-semibold whitespace-nowrap transition-all duration-300 ${
              scrolled ? "text-base" : "text-lg"
            }`}
          >
            Unison
          </span>
          */}
        </Link>

        <nav className="hidden md:flex space-x-8 text-white font-medium">
          <Link href="/" className="hover:text-indigo-400 transition-colors duration-200">Home</Link>
          <Link href="/#services" className="hover:text-indigo-400 transition-colors duration-200">Services</Link>
          <Link href="/header-pages/about-us" className="hover:text-indigo-400 transition-colors duration-200">About Us</Link>
          <Link href="/contact-pages" className="hover:text-indigo-400 transition-colors duration-200">Contact</Link>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-t border-zinc-700 px-6 pb-4">
          <nav className="flex flex-col gap-4 text-white font-medium">
            <Link href="/" className="py-2 hover:bg-zinc-800 rounded-md" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/#services" className="py-2 hover:bg-zinc-800 rounded-md" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="/header-pages/about-us" className="py-2 hover:bg-zinc-800 rounded-md" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link href="/contact-pages" className="py-2 hover:bg-zinc-800 rounded-md" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
