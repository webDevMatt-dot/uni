import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-gray-100 text-gray-700 py-10 border-t border-b border-gray-300">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-lg font-bold mb-2">
              <Link href="/header-pages/about-us" className="hover:underline">AAT Business Solutions</Link>
            </h4>
            <p className="text-sm">
              Your trusted partner for cutting-edge technology solutions. Specializing in AI, Data Engineering, SAP Solutions, and Cybersecurity.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">Our Services</h4>
            <ul className="text-sm space-y-1">
              <li className="hover:underline">
                <a href="/services/ai-machine-learning">AI & Machine Learning Training</a>
              </li>

              <li className="hover:underline">
                <a href="/services/data-engineering">Data Engineering & Science</a>
              </li>

              <li className="hover:underline">
                <a href="/services/sap-solutions">SAP Solutions</a>
              </li>

              <li className="hover:underline">
                <a href="/services/cybersecurity">Anti-Virus & Security Packages</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">Contact Information</h4>
            <p className="text-sm mb-2">
              <a
                href="https://www.google.com/maps?q=8+Fred+Verseput+Road,+Halfway+Gardens+1686,+Midrand"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline block"
              >
                8 Fred Verseput Road<br />Halfway Gardens 1686, Midrand
              </a>
            </p>
            <p className="text-sm mb-2">
              <a
                href="https://wa.me/27816515179?text=Hello, I'm contacting you regarding AAT Solutions"
                className="hover:underline"
              >
                +27 81 651 5179
              </a>
            </p>
            <p className="text-sm">
              <a href="mailto:admin@aatsolutions.co.za" className="hover:underline">
                admin@aatsolutions.co.za
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <footer className="bg-gray-100 text-center py-6 text-sm text-gray-500">
        <div>&copy; {new Date().getFullYear()} AAT Business Solutions. All rights reserved.</div>
      </footer>
    </>
  );
};
