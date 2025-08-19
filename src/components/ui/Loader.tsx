"use client";
import React from "react";

const logo = [
  { src: "/logo.png", alt: "Avast" }
];

export function Loader() {
  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
        {[...logo].map((partner, index) => (
          <img
            key={index}
            src={partner.src}
            alt={partner.alt}
            width={140} // Slightly larger logos
            height={70} // Adjusted height to maintain aspect ratio
            className="object-contain mx-8 opacity-80 hover:opacity-100" // More spacing, subtle opacity, hover effect
            style={{ maxHeight: "70px" }} // Ensure max height
          />
        ))}
      </div>
  );
}
