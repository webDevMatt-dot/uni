"use client";
import React from "react";
import Image from "next/image";

export function Loader() {
  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      <Image
        src="https://aat-website.netlify.app/logo.png" // ✅ Update this to your actual logo path
        alt="AAT Business Solutions Logo"
        width={350}
        height={350}
        className="animate-pulse object-contain"
      />
    </div>
  );
}
