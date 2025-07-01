import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">
            <Link href="/" passHref>
              AAT Business Solutions
            </Link>
          </div>
          <div className="space-x-4">
            <Link href="#services" passHref>
              <a className="text-gray-700 hover:text-green-600">Services</a>
            </Link>
            <Link href="#contact" passHref>
              <a className="text-gray-700 hover:text-green-600">Contact</a>
            </Link>
            <Link href="https://calendar.google.com" passHref>
              <a className="text-gray-700 hover:text-green-600">Schedule</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};