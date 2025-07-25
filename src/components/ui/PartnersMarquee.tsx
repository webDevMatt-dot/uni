"use client";
import React from "react";

const partners = [
  { src: "/avast.png", alt: "Avast" },
  { src: "/avg.jpg", alt: "AVG" },
  { src: "/bitdef.png", alt: "Bitdefender" },
  { src: "/mcafee.png", alt: "McAfee" },
  { src: "/oracle.jfif", alt: "Oracle" },
  { src: "/ibm.png", alt: "IBM" },
];

export function PartnersMarquee() {
  return (
    <div className="bg-zinc-900 py-8 sm:py-10 overflow-hidden relative border-t border-b border-zinc-800"> {/* Dark background, generous padding, subtle borders */}
      <div className="flex w-fit animate-marquee absolute left-0 top-1/2 -translate-y-1/2">
        {[...partners, ...partners].map((partner, index) => (
          <img
            key={index}
            src={partner.src}
            alt={partner.alt}
            width={140} // Slightly larger logos
            height={70} // Adjusted height to maintain aspect ratio
            // Removed 'grayscale hover:grayscale-0' to keep images in color
            className="object-contain mx-8 transition duration-300 opacity-80 hover:opacity-100" // More spacing, subtle opacity, hover effect
            style={{ maxHeight: "70px" }} // Ensure max height
          />
        ))}
      </div>

      {/* The style jsx block remains as it defines the specific marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite; /* Animation duration */
        }

        /* Removed: Pause animation on hover */
        /*
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        */
      `}</style>
    </div>
  );
}
