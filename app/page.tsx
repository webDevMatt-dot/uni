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
    title: "Anti-Virus & Security Packages",
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
      <section className="text-center py-20 md:py-24 bg-[url('/bg.webp')] bg-cover bg-center bg-no-repeat">
        <div className="bg-white/80 backdrop-blur-sm py-12 px-6 rounded-md max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-4 leading-snug">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-yellow-600">
              AAT Business Solutions
            </span>
            <br />
            <span className="text-xl md:text-2xl font-semibold block mt-2">
              Empowering Digital Excellence Through Innovation, Data, and Skills
            </span>
          </h1>
          <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto mb-6 md:mb-8">
            Leading provider of AI & Machine Learning solutions, Data Engineering, SAP implementations, and comprehensive Cybersecurity Services.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center justify-center">
            <Button className="w-full md:w-auto">
              <a href="#services">Explore Our Services</a>
            </Button>
            <Button variant="outline" className="w-full md:w-auto">
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ28DxHcn7rNkJfGFEJ4nRx_QjwFZ1nlpt149jJaNMfdqZadaQ6FbUw5Kh2JjMEPnIsN0rsRp8hp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Consultation
              </a>
            </Button>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mt-10 text-base font-medium">
            <div><strong className="block text-xl font-bold">7+</strong> Years Experience</div>
            <div><strong className="block text-xl font-bold">100+</strong> Projects Completed</div>
            <div><strong className="block text-xl font-bold">100+</strong> Happy Clients</div>
            <div><strong className="block text-xl font-bold">24/7</strong> Support</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <h3 className="text-center text-2xl font-bold mb-4">Our Services</h3>
        <p className="text-center mb-10 text-gray-600">
          We provide comprehensive technology solutions to help your business thrive in the digital age.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-4 md:px-6 max-w-6xl mx-auto">
          {services.map(({ title, items, link, emoji }, i) => (
            <Card
              key={i}
              className="border border-gray-200 hover:border-gray-400 transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              <CardContent className="p-6 flex flex-col h-full justify-between">
                <div style={{ animationDelay: `${i * 150}ms` }}>
                  <h4 className="font-bold mb-3 text-lg">{emoji} {title}</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
                    {items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <Link href={link} passHref>
                    <Button variant="outline" className="w-full mt-auto">View More Info</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Why Choose AAT?</h3>
          <p className="text-gray-700 mb-6">
            We don&apos;t just deliver technology — we deliver measurable impact. Our team ensures each solution is tailor-made and ROI-driven.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div><strong className="text-black">✔️ Industry Expertise:</strong> We bring deep domain knowledge.</div>
            <div><strong className="text-black">✔️ Agile & Scalable:</strong> Our solutions grow with you.</div>
            <div><strong className="text-black">✔️ End-to-End Delivery:</strong> From ideation to rollout and beyond.</div>
            <div><strong className="text-black">✔️ Proven Results:</strong> We build systems that drive business growth.</div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="border rounded-lg p-6 shadow-sm bg-gray-50">
              <h4 className="font-semibold text-lg mb-2">Retail AI Forecasting</h4>
              <p className="text-gray-700 text-sm">
                Helped a major retailer reduce overstock by 30% with predictive demand forecasting using AI.
              </p>
            </div>
            <div className="border rounded-lg p-6 shadow-sm bg-gray-50">
              <h4 className="font-semibold text-lg mb-2">SAP Integration for Logistics</h4>
              <p className="text-gray-700 text-sm">
                Migrated and integrated SAP for a large logistics firm, improving reporting time by 40%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA Section */}
      <section className="py-16 bg-indigo-600 text-white text-center px-6">
        <h3 className="text-2xl font-bold mb-4">Let’s Build Something Great</h3>
        <p className="mb-6 max-w-xl mx-auto">
          Whether you need help with AI, data engineering, SAP, or security — we&apos;re here to help you thrive.
        </p>
        <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 transition-all duration-300">
          <a href="#services">Discover Our Solutions</a>
        </Button>
      </section>

      <Footer />
    </div>
  );
}
