import React from "react";

export function TeamGallery() {
  const teamImages = [
    { src: "profile.png", alt: "Team Member 1", name: "Joe Mudangwe", prof: "SAP" },
    { src: "profile.png", alt: "Team Member 2", name: "Trust Chuma", prof: "SAP" },
    { src: "profile.png", alt: "Team Member 3", name: "Kudakwashe Mudangwe", prof: "AI & Machine Learning" },
    { src: "profile.png", alt: "Team Member 4", name: "Tadiwa Mudangwe", prof: "Data Engineering" },
    { src: "profile.png", alt: "Team Member 5", name: "Matthew Luis", prof: "Software Engineer" },
    { src: "profile.png", alt: "Team Member 6", name: "Uncle Farai", prof: "Python Expert" },
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap py-4">
      <div className="animate-marquee flex gap-10">
        {teamImages.map((member, idx) => (
          <div key={idx} className="inline-block text-center">
            <div className="w-24 h-24 mx-auto mb-2 rounded-full overflow-hidden shadow-md">
              <img
                src={member.src}
                alt={member.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm font-semibold text-gray-700">{member.name}</p>
            <p className="text-xs text-gray-500">{member.prof}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
