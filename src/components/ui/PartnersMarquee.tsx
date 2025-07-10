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
    <div className="bg-gray-50 py-6 sm:py-8 overflow-hidden">
      <div className="w-full whitespace-nowrap">
        <div className="flex gap-12 animate-marquee">
          {[...partners, ...partners].map((partner, index) => (
            <img
              key={index}
              src={partner.src}
              alt={partner.alt}
              width={120}
              height={60}
              className="object-contain transition duration-300"
              style={{ maxHeight: "60px" }}
            />
          ))}
        </div>
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
          display: flex;
          animation: marquee 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
}
