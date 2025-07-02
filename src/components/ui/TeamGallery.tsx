"use client";
import React from "react";
import Image from "next/image";

export function TeamGallery() {
  const teamImages = [
    { src: "/team1.jpg", alt: "Team Member 1", name: "Alice", prof: "Data Engineer" },
    { src: "/team2.jpg", alt: "Team Member 2", name: "Bob", prof: "ML Expert" },
  ];

  return (
    <div className="overflow-hidden w-full py-4 bg-white">
      <div className="flex w-max animate-marquee whitespace-nowrap gap-8">
        {[...teamImages, ...teamImages].map((member, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[150px]">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-md bg-gray-100">
              <Image
                src={member.src}
                alt={member.alt}
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-sm font-semibold text-gray-800 text-center">{member.name}</p>
            <p className="text-xs text-gray-500 text-center">{member.prof}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
