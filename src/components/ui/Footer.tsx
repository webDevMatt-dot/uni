import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-white dark:bg-zinc-950 text-gray-900 dark:text-zinc-300 border-t border-gray-200 dark:border-zinc-800 pt-10 pb-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-emerald-400">
              Unison
            </h4>
            <p className="text-sm text-gray-700 dark:text-zinc-400 leading-relaxed">
              Your trusted partner for cutting-edge technology solutions. Specializing in AI,
              Data Engineering, SAP Solutions, and Cybersecurity.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-emerald-400">
              Our Services
            </h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/services/ai-machine-learning" className="text-gray-700 dark:text-zinc-300 hover:text-indigo-400 transition">
                  AI & Machine Learning Training
                </Link>
              </li>
              <li>
                <Link href="/services/data-engineering" className="text-gray-700 dark:text-zinc-300 hover:text-indigo-400 transition">
                  Data Engineering & Science
                </Link>
              </li>
              <li>
                <Link href="/services/sap-solutions" className="text-gray-700 dark:text-zinc-300 hover:text-indigo-400 transition">
                  SAP Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-gray-700 dark:text-zinc-300 hover:text-indigo-400 transition">
                  Anti-Virus & Security Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-emerald-400">
              Contact Us
            </h4>
            <ul className="text-sm space-y-2 text-gray-700 dark:text-zinc-300">
              <li>
                <a
                  href="https://www.google.com/maps?q=8+Fred+Verseput+Road,+Halfway+Gardens+1686,+Midrand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition block"
                >
                  📍 8 Fred Verseput Rd, Halfway Gardens, Midrand
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/27816515179?text=Hello, I'm contacting you regarding AAT Solutions"
                  className="hover:text-indigo-400 transition block"
                >
                  📱 +27 81 651 5179
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@unidata.co.za"
                  className="hover:text-indigo-400 transition block"
                >
                  📧 admin@unidata.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500 dark:text-zinc-600 py-4 mt-8 border-t border-gray-200 dark:border-zinc-800 mx-auto max-w-7xl">
          &copy; {new Date().getFullYear()} Unison. All rights reserved.
        </p>
      </footer>
    </>
  );
};
