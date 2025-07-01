import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Navbar } from "src/components/ui/Navbar";
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "src/components/ui/card";
import { Layout } from "src/components/ui/Layout";
import { Footer } from "src/components/ui/Footer";
import { ScheduleButton } from "src/components/ui/schedule";


export default function CybersecurityServicesPage() {
  return (
    <Layout>
      <Head>
        <title>Cybersecurity Services | AAT Business Solutions</title>
      </Head>

      {/* Navbar */}
      <Navbar />
      
      {/* Page Content */}
      <div className="min-h-screen bg-white text-gray-800 font-sans pt-20 px-6">


        {/* Hero Section */}
        <section className="py-16 md:py-20 text-center px-6 mb-12 rounded-lg shadow-sm bg-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-gray-800">
                Cybersecurity Services
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Protect your digital assets and ensure business continuity with our robust{" "}
              <strong className="font-semibold text-black">cybersecurity services</strong>, safeguarding your organization from evolving threats.
            </p>
            <div className="space-x-4 flex justify-center">
              <Link href="/contact" passHref>
                <Button size="lg" className="rounded-md shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
                  Get a Free Security Assessment
                </Button>
              </Link>
              <a href="#offerings" className="cursor-pointer">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-md shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Learn More
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto pb-16 flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left Column */}
          <div className="md:w-2/3">
            <h2
              id="offerings"
              className="text-3xl font-bold mb-8 text-black border-b-2 pb-2 border-red-200"
            >
              Our Comprehensive Cybersecurity Offerings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {[
                {
                  emoji: "🔍",
                  title: "Vulnerability Assessment",
                  description:
                    "Identify and categorize security weaknesses in your systems and applications before they can be exploited by malicious actors.",
                },
                {
                  emoji: "🛡️",
                  title: "Penetration Testing",
                  description:
                    "Simulate real-world attacks to uncover exploitable vulnerabilities in your network, applications, and physical security posture.",
                },
                {
                  emoji: "🚨",
                  title: "Managed Security Services (MSS)",
                  description:
                    "Outsource your security operations to our experts for 24/7 monitoring, threat detection, incident response, and continuous security improvement.",
                },
                {
                  emoji: "🧠",
                  title: "Security Consulting & Strategy",
                  description:
                    "Develop a robust cybersecurity strategy aligned with your business objectives, addressing compliance, risk management, and security architecture.",
                },
                {
                  emoji: "🩹",
                  title: "Incident Response & Recovery",
                  description:
                    "Minimize the impact of security breaches with rapid detection, containment, eradication, and comprehensive recovery plans.",
                },
                {
                  emoji: "🧑‍🏫",
                  title: "Security Awareness Training",
                  description:
                    "Educate your employees on best security practices, phishing prevention, and data protection to strengthen your human firewall.",
                },
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="border border-gray-200 rounded-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{item.emoji}</span>
                      <h3 className="font-bold text-xl text-black">{item.title}</h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-6 text-black border-b-2 pb-2 border-red-200 mt-12">
              Why Partner with AAT for Cybersecurity?
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-base">
              <p>
                In today&apos;s interconnected world, robust cybersecurity is non-negotiable. AAT Business Solutions provides proactive and comprehensive security services designed to protect your most valuable assets, ensuring compliance and peace of mind in a complex threat landscape.
              </p>
              <ul className="list-disc list-inside space-y-2 text-base ml-4">
                <li>
                  <strong className="text-black">Proactive Defense:</strong> We anticipate and mitigate threats before they can impact your business.
                </li>
                <li>
                  <strong className="text-black">Certified Professionals:</strong> Our security experts hold industry-leading certifications and extensive experience.
                </li>
                <li>
                  <strong className="text-black">Tailored Solutions:</strong> We understand your unique risk profile and design security strategies that fit your specific needs.
                </li>
                <li>
                  <strong className="text-black">24/7 Vigilance:</strong> Continuous monitoring and rapid incident response ensure constant protection.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Sticky CTA */}
          <Card className="w-full md:w-[320px] border border-gray-200 shadow-xl rounded-lg sticky md:top-28 self-start bg-white">
            <CardContent className="p-6 flex flex-col h-full">
              <div>
                <h3 className="font-bold text-xl mb-3 text-center text-black">
                  Secure Your Business Today
                </h3>
                <p className="text-sm text-gray-600 mb-5 text-center leading-relaxed">
                  Don&apos;t wait for a breach. Get ahead of cyber threats with our expert security solutions.
                </p>
              </div>
              <div className="flex flex-col gap-3 mt-4">

              {/*button to schedule appointments */}
              <ScheduleButton />

                <a
                  href="/AAT_Solutions_Cybersecurity_Brochure.pdf"
                  download="AAT_Cybersecurity_Brochure.pdf"
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Download Our Security Brochure
                  </Button>
                </a>
              </div>
              <div className="mt-6 text-center text-sm text-gray-500 border-t pt-4 border-red-200 space-y-2">
                <p>
                  <a href="mailto:admin@aatsolutions.co.za" className="hover:underline flex items-center justify-center gap-2">
                    📧 admin@aatsolutions.co.za
                  </a>
                </p>
                <p>
                  <a href="tel:+27816515179" className="hover:underline flex items-center justify-center gap-2">
                    📞 +27 81 651 5179
                  </a>
                </p>
                <p>
                  <a
                    href="https://wa.me/27816515179?text=Hello, I&apos;m contacting you regarding your Cybersecurity services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center justify-center gap-2"
                  >
                    📱 WhatsApp Us
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    <Footer />  
    </Layout>
  );
}
