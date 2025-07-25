import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <>
      {/* Combined Main Footer and Copyright into a single footer */}
      <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-800 pt-10 pb-6"> {/* Dark background, lighter text, dark border */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-emerald-400"> {/* Larger title, Unison gradient */}
              Unison
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed"> {/* Lighter grey text */}
              Your trusted partner for cutting-edge technology solutions. Specializing in AI,
              Data Engineering, SAP Solutions, and Cybersecurity.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-emerald-400"> {/* Unison gradient for title */}
              Our Services
            </h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/components/AIML" className="text-zinc-300 hover:text-indigo-400 transition"> {/* Lighter grey text, accent hover */}
                  AI & Machine Learning Training
                </Link>
              </li>
              <li>
                <Link href="/services/data-engineering" className="text-zinc-300 hover:text-indigo-400 transition"> {/* Lighter grey text, accent hover */}
                  Data Engineering & Science
                </Link>
              </li>
              <li>
                <Link href="/services/sap-solutions" className="text-zinc-300 hover:text-indigo-400 transition"> {/* Lighter grey text, accent hover */}
                  SAP Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-zinc-300 hover:text-indigo-400 transition"> {/* Lighter grey text, accent hover */}
                  Anti-Virus & Security Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-emerald-400"> {/* Unison gradient for title */}
              Contact Us
            </h4>
            <ul className="text-sm space-y-2 text-zinc-300"> {/* Lighter grey text */}
              <li>
                <a
                  href="https://www.google.com/maps?q=8+Fred+Verseput+Road,+Halfway+Gardens+1686,+Midrand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition block" // Accent hover
                >
                  📍 8 Fred Verseput Rd, Halfway Gardens, Midrand
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/27816515179?text=Hello, I'm contacting you regarding AAT Solutions"
                  className="hover:text-indigo-400 transition block" // Accent hover
                >
                  📱 +27 81 651 5179
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@aatsolutions.co.za"
                  className="hover:text-indigo-400 transition block" // Accent hover
                >
                  📧 admin@aatsolutions.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright moved inside the main footer, with a top margin for separation */}
        <p className="text-center text-sm text-zinc-500 py-4 mt-8 border-t border-zinc-800 mx-auto max-w-7xl"> {/* Added mt-8 and border-t for separation */}
          &copy; {new Date().getFullYear()} Unison. All rights reserved.
        </p>
      </footer>
    </>
  );
};
