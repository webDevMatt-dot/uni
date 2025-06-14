import React from "react";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 font-sans text-gray-800">
      <h1 className="text-4xl font-bold mb-10 text-center">About AAT Business Solutions</h1>

      {/* Mission & Vision Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Our Mission & Vision</h2>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            Our Mission is to achieve the reputation of a quality, high standard & reliable solution & service Provider Company in the ICT and Communications industry.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            Our Vision is to achieve 100% customer satisfaction by delivering quality products and services at an affordable cost. Our forward vision is to strive to become an entity in technology based corporate solutions, capable of demanding unconditional response from the targeted niche.
          </p>
        </div>
      </section>

      {/* Company Philosophy Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">It's All About Creativity</h2>
        <p className="text-gray-700 leading-relaxed">
          AAT Solutions specializes in exceptional delivery of business and technical IT projects. We are dedicated to building long-term relationships with our clients, investing in their journey of technological adoption, and seeing projects come to life. We take the time to understand each client and their needs, walk the journey in envisioning the desired outcome, and then collaborate together in materializing those intentions. We embrace all our projects with ease and professionalism, ensuring that we become a trusted advisor and partner.
        </p>
      </section>
    </main>
  );
}
