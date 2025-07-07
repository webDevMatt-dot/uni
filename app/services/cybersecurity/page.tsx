"use client";
import React from "react";
import Head from "next/head";
import { Navbar } from "src/components/ui/Navbar";
import { Card, CardContent } from "src/components/ui/card";
import Layout from "src/components/ui/Layout";
import { ScheduleButton } from "src/components/ui/schedule";
import { LearnButton } from "src/components/ui/learn";
import { DownloadBrochureButton } from "src/components/ui/DownloadBrochureButton";

export default function CybersecurityServicesPage() {
  return (
    <Layout>
      <Head>
        <title>Cybersecurity Services | AAT Business Solutions</title>
      </Head>

      <Navbar />

      <div className="min-h-screen bg-white text-gray-800 font-sans pt-15 px-4 md:px-6">

        {/* Hero Section */}
        <section className="py-16 md:py-20 text-center px-4 md:px-6 mb-12 rounded-lg shadow-sm bg-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-gray-800">
                Anti-Virus & Security Packages
              </span>
            </h1>
            <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Protect your digital assets and ensure business continuity with our{" "}
              <strong className="font-semibold text-black">cybersecurity services</strong>, safeguarding your organization from evolving threats.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div>
                <ScheduleButton />
              </div>
              <div>
                <LearnButton />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto pb-16 flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left Column */}
          <div className="md:w-2/3 w-full">
            <h2 id="offerings" className="text-2xl md:text-3xl font-bold mb-8 text-black border-b-2 pb-2 border-red-200">
              Our Comprehensive Cybersecurity Offerings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {[
                { emoji: "🔍", title: "Vulnerability Assessment", description: "Identify and categorize security weaknesses in your systems and applications before they can be exploited by malicious actors." },
                { emoji: "🛡️", title: "Penetration Testing", description: "Simulate real-world attacks to uncover exploitable vulnerabilities in your network, applications, and physical security posture." },
                { emoji: "🚨", title: "Managed Security Services (MSS)", description: "Outsource your security operations to our experts for 24/7 monitoring, threat detection, incident response, and improvement." },
                { emoji: "🧠", title: "Security Consulting & Strategy", description: "Develop a cybersecurity roadmap aligned with your goals — covering compliance, risk, and architecture." },
                { emoji: "🩹", title: "Incident Response & Recovery", description: "Minimize the impact of breaches with rapid detection, containment, and recovery strategies." },
                { emoji: "🧑‍🏫", title: "Security Awareness Training", description: "Train employees on phishing, password hygiene, and how to defend against threats effectively." },
              ].map((item, i) => (
                <Card key={i} className="border border-gray-200 rounded-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{item.emoji}</span>
                      <h3 className="font-bold text-lg md:text-xl text-black">{item.title}</h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Why Us Section */}
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black border-b-2 pb-2 border-red-200 mt-12">
              Why Partner with AAT for Cybersecurity?
            </h2>
            <div className="space-y-6 text-gray-700 text-base leading-relaxed">
              <p>
                In today&apos;s interconnected world, robust cybersecurity is non-negotiable. AAT Business Solutions provides proactive and comprehensive security services designed to protect your most valuable assets, ensuring compliance and peace of mind.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong className="text-black">Proactive Defense:</strong> We anticipate and mitigate threats before they impact you.</li>
                <li><strong className="text-black">Certified Professionals:</strong> Our experts are credentialed and experienced.</li>
                <li><strong className="text-black">Tailored Solutions:</strong> Every business is different — your protection should be too.</li>
                <li><strong className="text-black">24/7 Vigilance:</strong> We never sleep, so you can.</li>
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
                <div>
                  <ScheduleButton />
                </div>
                
                <div>
                  <DownloadBrochureButton />
                </div>
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
                  <a href="https://wa.me/27816515179?text=Hello, I&apos;m contacting you regarding your Cybersecurity services." target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center justify-center gap-2">
                    📱 WhatsApp Us
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
