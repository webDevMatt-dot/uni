"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Home" className="flex items-center gap-2">
          <Image
            src="/"
            alt=""
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">AAT Business Solutions</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/#services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="/header-pages/about-us" className="hover:text-blue-600 transition">About</Link>
          <Link href="/contact-pages" className="hover:text-blue-600 transition">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm px-6 pb-4">
          <nav className="flex flex-col gap-4 text-gray-700 font-medium">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/#services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="/header-pages/about-us" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact-pages" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
