import React from "react";

export function TeamGallery() {
  const teamImages = [
    { src: "profile.png", alt: "Team Member 1", name: "Joe Mudangwe", prof:"SAP"},
    { src: "profile.png", alt: "Team Member 2", name: "Trust Chuma", prof:"SAP" },
    { src: "profile.png", alt: "Team Member 3", name: "Kudakwashe Mudangwe", prof:"AI & Machine Learning" },
    { src: "profile.png", alt: "Team Member 4", name: "Tadiwa Mudangwe", prof:"Data Engineering"  },
    { src: "profile.png", alt: "Team Member 5", name: "Matthew Luis", prof:"Software Engineer"  },
    { src: "profile.png", alt: "Team Member 6", name: "Uncle Farai", prof:"Python Expert"  },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
      {teamImages.map((member, idx) => (
        <div
          key={idx}
          className="w-full flex flex-col items-center"
        >
          <div className="w-full aspect-square bg-gray-100 rounded-xl shadow-md overflow-hidden">
            <img
              src={member.src}
              alt={member.alt}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-2 text-sm text-center font-medium text-gray-700">
            {member.name}
          </p>


          <p className="mt-2 text-sm text-center font-medium text-gray-700">
            {member.prof}
          </p>
        </div>
      ))}
    </div>
  );
}
