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
    <div className="bg-white dark:bg-zinc-900 py-8 sm:py-10 overflow-hidden relative border-t border-b border-gray-200 dark:border-zinc-800">
      <div className="flex w-fit animate-marquee absolute left-0 top-1/2 -translate-y-1/2">
        {[...partners, ...partners].map((partner, index) => (
          <img
            key={index}
            src={partner.src}
            alt={partner.alt}
            width={140}
            height={70}
            className="object-contain mx-8 transition duration-300 opacity-80 hover:opacity-100"
            style={{ maxHeight: "70px" }}
          />
        ))}
      </div>

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
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
