"use client";
import React from "react";
import Image from "next/image";

const partners = [
  { src: "/avast.png", alt: "avast" },
  { src: "/avg.jpg", alt: "avg" },
  { src: "/bitdef.png", alt: "bitdefender" },
  { src: "/mcafee.png", alt: "McAfee" },
  { src: "/oracle.jfif", alt: "Oracle" },
  { src: "/ibm.png", alt: "IBM" },
];

export function PartnersMarquee() {
  return (
    <div className="relative overflow-hidden bg-gray-50 py-6 sm:py-8">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="flex animate-marquee gap-12 px-6 w-max">
          {[...partners, ...partners].map((partner, index) => (
            <Image
              key={index}
              src={partner.src}
              alt={partner.alt}
              width={120}
              height={60}
              className="object-contain transition duration-300"
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
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
