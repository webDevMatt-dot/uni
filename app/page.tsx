"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Navbar } from "src/components/ui/Navbar";
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "src/components/ui/card";
import { Footer } from "src/components/ui/Footer";

const services = [
  {
    title: "AI & Machine Learning",
    items: [
      "Custom model development",
      "ML training and deployment",
      "AI integration for business workflows",
    ],
    emoji: "🤖",
    link: "/services/ai-machine-learning",
  },
  {
    title: "Data Engineering & Science",
    items: [
      "ETL pipelines",
      "Data lakes & warehousing",
      "Analytics and BI reporting",
    ],
    emoji: "📊",
    link: "/services/data-engineering",
  },
  {
    title: "SAP Solutions",
    items: [
      "SAP implementation",
      "Migration & integration",
      "SAP customization & support",
    ],
    emoji: "⚙️",
    link: "/services/sap-solutions",
  },
  {
    title: "Cybersecurity Services",
    items: [
      "Vulnerability assessment",
      "Penetration testing",
      "Managed security solutions",
    ],
    emoji: "🔒",
    link: "/services/cybersecurity",
  },
];

export default function AATBusinessSolutions() {
  return (
    <div className="font-sans text-gray-800">
      <Head>
        <title>AAT Business Solutions</title>
        <meta
          name="description"
          content="Leading provider of AI & Machine Learning solutions, Data Engineering, SAP implementations, and Cybersecurity Services."
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative text-center py-20 md:py-24 bg-[url('/bg.webp')] bg-cover bg-center bg-no-repeat">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative bg-white/90 backdrop-blur-sm py-14 px-6 rounded-md max-w-4xl mx-auto shadow-lg">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-yellow-600">
              AAT Business Solutions
            </span>
            <br />
            <span className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-yellow-600 block mt-2">
              Empowering Digital Excellence Through Innovation, Data, and Skills
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            Leading provider of AI & Machine Learning solutions, Data Engineering, SAP implementations, and comprehensive Cybersecurity Services.
          </p>

          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center justify-center">
            <Button className="w-full md:w-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-lg">
              <a href="#services" aria-label="Explore Our Services">
                Explore Our Services
              </a>
            </Button>

            <Button
              variant="outline"
              className="w-full md:w-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-lg"
            >
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ28DxHcn7rNkJfGFEJ4nRx_QjwFZ1nlpt149jJaNMfdqZadaQ6FbUw5Kh2JjMEPnIsN0rsRp8hp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Schedule Consultation"
              >
                Schedule Consultation
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mt-12 text-base font-medium text-gray-900">
            <div>
              <strong className="block text-2xl font-extrabold">7+</strong>
              Years Experience
            </div>
            <div>
              <strong className="block text-2xl font-extrabold">100+</strong>
              Projects Completed
            </div>
            <div>
              <strong className="block text-2xl font-extrabold">100+</strong>
              Happy Clients
            </div>
            <div>
              <strong className="block text-2xl font-extrabold">24/7</strong>
              Support
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-16 bg-gray-50 border-t border-gray-200"
        aria-label="Our Services"
      >
        <h3 className="text-center text-3xl font-extrabold mb-6 text-gray-900">
          Our Services
        </h3>
        <p className="text-center mb-12 text-gray-600 max-w-xl mx-auto text-lg leading-relaxed">
          We provide comprehensive technology solutions to help your business
          thrive in the digital age.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4 md:px-6 max-w-6xl mx-auto">
          {services.map(({ title, items, link, emoji }, i) => (
            <Card
              key={i}
              className="border border-gray-200 rounded-lg cursor-pointer shadow-sm hover:shadow-lg hover:border-indigo-500 transition-shadow transition-transform duration-300 ease-in-out transform hover:scale-[1.03] opacity-0 animate-fadeIn"
              style={{ animationDelay: `${i * 150}ms`, animationFillMode: "forwards" }}
            >
              <CardContent className="p-6 flex flex-col h-full justify-between">
                <div>
                  <h4
                    className="font-bold mb-3 text-lg flex items-center gap-2"
                    aria-label={`${title} icon and title`}
                  >
                    <span
                      className="text-3xl inline-block transition-transform duration-300 ease-in-out hover:rotate-12"
                      role="img"
                      aria-hidden="true"
                    >
                      {emoji}
                    </span>
                    {title}
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
                    {items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <Link href={link} passHref>
                  <Button
                    variant="outline"
                    className="mt-auto w-full transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-lg"
                    aria-label={`View more information about ${title}`}
                  >
                    View More Info
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Sticky Schedule Consultation Button */}
      <a
        href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ28DxHcn7rNkJfGFEJ4nRx_QjwFZ1nlpt149jJaNMfdqZadaQ6FbUw5Kh2JjMEPnIsN0rsRp8hp"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-400 transition-colors duration-300 z-50"
        aria-label="Schedule Consultation"
      >
        📅 Schedule Consultation
      </a>

      <Footer />

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
          from {
            opacity: 0;
            transform: translateY(10px);
          }
        }
        .animate-fadeIn {
          animation-name: fadeIn;
          animation-duration: 0.5s;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}
