// filepath: website-next/app/page.tsx
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
    link: "/services/ai-machine-learning"
  },
  {
    title: "Data Engineering & Science",
    items: [
      "ETL pipelines",
      "Data lakes & warehousing",
      "Analytics and BI reporting"
    ],
    link: "/services/data-engineering"
  },
  {
    title: "SAP Solutions",
    items: [
      "SAP implementation",
      "Migration & integration",
      "SAP customization & support"
    ],
    link: "/services/sap-solutions"
  },
  {
    title: "Cybersecurity Services",
    items: [
      "Vulnerability assessment",
      "Penetration testing",
      "Managed security solutions"
    ],
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
          content="Leading provider of <b>AI & Machine Learning solutions, 
          Data Engineering, SAP implementations, and cybersecurity services.<b>"
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
                rel="noopener noreferrer"
                className="w-full">
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
          {services.map(({ title, items, link }, i) => (
            <Card key={i} className="border border-gray-200 hover:border-gray-400 transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
              <CardContent className="p-6 flex flex-col h-full justify-between">
                <div>
                  <h4 className="font-bold mb-3">{title}</h4>
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

      <section id="contact" className="bg-white py-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h3 className="text-3xl font-bold mb-2">Contact Us</h3>
          <p className="text-gray-600 text-lg">
            Ready to transform your business? Get in touch with our team of experts today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {/* Our Location - spans 2 columns */}
          <Card className="md:col-span-2 border border-gray-200 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h4 className="font-bold mb-4">Our Location</h4>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Address */}
                <div className="text-sm leading-relaxed md:w-1/2">
                  <a
                    href="https://www.google.com/maps?q=8+Fred+Verseput+Road,+Halfway+Gardens+1686,+Midrand,+Johannesburg,+South+Africa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline block"
                  >
                    📍 8 Fred Verseput Road<br />
                    Halfway Gardens 1686<br />
                    Midrand, Johannesburg<br />
                    South Africa
                  </a>
                </div>
                {/* Google Map */}
                <div className="w-full md:w-1/2">
                  <iframe
                    loading="lazy"
                    src="https://maps.google.com/maps?q=8%20Fred%20Verseput%20Road%2C%20Halfway%20Gardens%201686%2C%20Midrand%2C%20Johannesburg%2C%20South%20Africa&t=m&z=15&output=embed&iwloc=near"
                    title="8 Fred Verseput Road, Halfway Gardens 1686, Midrand, Johannesburg, South Africa"
                    aria-label="8 Fred Verseput Road, Halfway Gardens 1686, Midrand, Johannesburg, South Africa"
                    className="w-full h-64 rounded"
                  ></iframe>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Get In Touch - spans 2 rows */}
          <Card className="md:row-span-2 border border-gray-200">
            <CardContent className="p-6 text-center">
              <h4 className="font-bold mb-4">Get In Touch</h4>
              <div>
                <p>Choose your preferred way to contact us</p>
                <br /><br /><br /><br />
              </div>
              <div className="space-y-2">
                <Button className="w-full">
                  <a href="https://wa.me/27816515179?text=Hello, I&apos;m contacting you regarding AAT Solutions">
                    WhatsApp Us
                  </a>
                </Button>
                <Button variant="outline" className="w-full">
                  <a href="tel:+27 10 442 4640">
                    Call Now
                  </a>
                </Button>
                <Button variant="outline" className="w-full">
                  <a href="mailto:admin@aatsolutions.co.za">
                    Send Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Phone */}
          <Card className="border border-gray-200 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h4 className="font-bold mb-2">Phone</h4>
              <p>
                <a href="https://wa.me/27816515179?text=Hello, I&apos;m contacting you regarding AAT Solutions" className="hover:underline">
                  Cell: +27 81 651 5179
                </a>
              </p>
              <br />
              <p>
                <a href="tel:+27 10 442 4640" className="hover:underline">
                  Tel: +27 10 442 4640
                </a>
              </p>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="border border-gray-200 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h4 className="font-bold mb-2">Email</h4>
              <p>
                <a href="mailto:admin@aatsolutions.co.za" className="hover:underline">
                  admin@aatsolutions.co.za
                </a>
              </p>
            </CardContent>
          </Card>

          {/* Business Hours - spans all 3 columns */}
          <Card className="md:col-span-3 border border-gray-200">
            <CardContent className="p-6 text-center">
              <h4 className="font-bold mb-2">Business Hours</h4>
              <p>
                Monday - Friday: 8:00 AM - 5:00 PM<br />
                Saturday: 9:00 AM - 1:00 PM<br />
                Sunday: Closed
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}