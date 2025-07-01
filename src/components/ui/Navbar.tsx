import React from "react";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="text-black fixed top-0 left-0 right-0 bg-white border-b border-gray-300 shadow-lg z-50 p-4 flex justify-between items-center">
      <a href="/"><img src="/logo.png" alt="AAT Business Solutions Logo" className="left-20 mb-1 w-[70px]" /></a>
      {/*<h1 className="text-lg font-bold">AAT Business Solutions</h1>*/}
      <nav className="space-x-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/#services" className="hover:underline">Services</Link>
        <Link href="/header-pages/about-us" className="hover:underline">About</Link>
        <Link href="/contact-pages" className="hover:underline">Contact</Link>
      </nav>
    </header>
  );
}
