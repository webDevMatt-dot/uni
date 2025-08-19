"use client";
import React from "react";

// The logo data can be a simple object
const logo = { src: "/logo.png", alt: "Unison logo" };

export function Loader() {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-[9999] flex items-center justify-center">
      {/* Render the image directly */}
      <img
        src={logo.src}
        alt={logo.alt}
        className="w-48 md:w-64 object-contain opacity-90 animate-pulse"
      />
    </div>
  );
}