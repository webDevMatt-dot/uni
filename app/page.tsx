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
      "AI integration for business workflows"
    ],
    emoji: "🤖",
    link: "/services/ai-machine-learning"
  },
  {
    title: "Data Engineering & Science",
    items: [
      "ETL pipelines",
      "Data lakes & warehousing",
      "Analytics and BI reporting"
    ],
    emoji: "📊",
    link: "/services/data-engineering"
  },
  {
    title: "SAP Solutions",
    items: [
      "SAP implementation",
      "Migration & integration",
      "SAP customization & support"
    ],
    emoji: "⚙️",
    link: "/services/sap-solutions"
  },
  {
    title: "Cybersecurity Services",
    items: [
      "Vulnerability assessment",
      "Penetration testing",
      "Managed security solutions"
    ],
    emoji: "🔒",
    link: "/services/cybersecurity"
  }
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
      <section className="text-center py-24 bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-yellow-600">
            Transforming Business Through Technology
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Leading provider of <strong className="font-semibold text-black">AI & Machine Learning solutions, Data Engineering, SAP implementations, and comprehensive Cybersecurity Services.</strong>
        </p>

        <div className="space-x-4">
          <Button>
            <a href="#services">Explore Our Services</a>
          </Button>

          <Button variant="outline">
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ28DxHcn7rNkJfGFEJ4nRx_QjwFZ1nlpt149jJaNMfdqZadaQ6FbUw5Kh2JjMEPnIsN0rsRp8hp" 
              target="_blank"
              rel="noopener noreferrer">
              Schedule Consultation
            </a>
          </Button>
        </div>

        <div className="flex justify-center mt-10 space-x-10 text-lg">
          <div><strong>15+</strong><br />Years Experience</div>
          <div><strong>500+</strong><br />Projects Completed</div>
          <div><strong>200+</strong><br />Happy Clients</div>
          <div><strong>24/7</strong><br />Support</div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <h3 className="text-center text-2xl font-bold mb-4">Our Services</h3>
        <p className="text-center mb-10 text-gray-600">
          We provide comprehensive technology solutions to help your business thrive in the digital age
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 max-w-5xl mx-auto">
          {services.map(({ title, items, link, emoji }, i) => (
            <Card key={i} className="border border-gray-200 hover:border-gray-400 transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
              <CardContent className="p-6 flex flex-col h-full justify-between">
                <div>
                  <h4 className="font-bold mb-3 text-lg">{emoji} {title}</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
                    {items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <Link href={link} passHref>
                  <Button variant="outline" className="mt-auto w-full">View More Info</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
