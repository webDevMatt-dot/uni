import React from "react";

export function TeamGallery() {
  const teamImages = [
    { src: "profile.png", alt: "Team Member 1", name: "Joe Mudangwe", prof: "SAP Expert" },
    { src: "profile.png", alt: "Team Member 2", name: "Trust Chuma", prof: "SAP" },
    { src: "profile.png", alt: "Team Member 3", name: "Kudakwashe Mudangwe", prof: "AI & Machine Learning" },
    { src: "profile.png", alt: "Team Member 4", name: "Tadiwa Mudangwe", prof: "Data Engineering" },
    { src: "profile.png", alt: "Team Member 5", name: "Matthew Luis", prof: "Software Engineer" },
    { src: "profile.png", alt: "Team Member 6", name: "Uncle Farai", prof: "Python Expert" },
  ];

  return (
    <div className="overflow-hidden w-full py-4 bg-white">
      <div className="flex w-max animate-marquee whitespace-nowrap gap-8">
        {[...teamImages, ...teamImages].map((member, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[150px]">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-md bg-gray-100">
              <img
                src={member.src}
                alt={member.alt}
                className="w-full h-full object-cover"
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
