import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="text-black fixed top-0 left-0 right-0 bg-white border-b border-gray-300 shadow-lg z-50 h-20 flex items-center justify-between px-6">
      
      {/* Left: Logo */}
      <div className="flex items-center">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/logo.ico"
            alt="AAT Business Solutions Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Right: Navigation links */}
      <nav aria-label="Main Navigation" className="space-x-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/#services" className="hover:underline">Services</Link>
        <Link href="/header-pages/about-us" className="hover:underline">About</Link>
        <Link href="/contact-pages" className="hover:underline">Contact</Link>
      </nav>
    </header>
  );
}
