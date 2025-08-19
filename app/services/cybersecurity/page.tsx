"use client";
import React from "react";
import Head from "next/head";
import { Navbar } from "src/components/ui/Navbar";
import { Card, CardContent } from "src/components/ui/card";
import Layout from "src/components/ui/Layout";
import { ScheduleButton } from "src/components/ui/schedule";
import { LearnButton } from "src/components/ui/learn";
import { DownloadBrochureButton } from "src/components/ui/DownloadBrochureButton";
import { ContactInfo } from "src/components/ui/ContactInfo";

// Unified card style for all cards
const cardBaseStyle = "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300";

const securityServices = [
  {
    emoji: "🛡️",
    title: "Antivirus Deployment",
    description: "Install and configure advanced antivirus solutions to protect your endpoints and servers.",
  },
  {
    emoji: "⚡",
    title: "Real-Time Threat Detection",
    description: "Monitor and respond to emerging threats instantly to keep your data safe.",
  },
  {
    emoji: "🔐",
    title: "Data Encryption & Protection",
    description: "Ensure your sensitive data is encrypted and secure against unauthorized access.",
  },
  {
    emoji: "📈",
    title: "Security Audits & Reporting",
    description: "Comprehensive audits to identify vulnerabilities and provide actionable insights.",
  },
  {
    emoji: "🌐",
    title: "Network Security Management",
    description: "Manage firewalls, VPNs, and other network defenses for complete protection.",
  },
  {
    emoji: "🎓",
    title: "Security Awareness Training",
    description: "Educate your team on best practices to prevent human error and cyber incidents.",
  },
];

export function SecurityServicesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      {securityServices.map((item, i) => (
        <Card key={i} className={cardBaseStyle}>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{item.emoji}</span>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg md:text-xl">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function CyberSecurityPage() {
  return (
    <Layout>
      <Head>
        <title>Antivirus Solutions | Unison</title>
      </Head>

      <Navbar />

      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans pt-6 px-4 md:px-6">
        {/* Hero Section */}
        <section className="pt-10 md:pt-14 pb-12 text-center px-4 md:px-6 mb-10 rounded-lg shadow-sm bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold text-black dark:text-white mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400">
                Antivirus Services
              </span>
            </h1>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Safeguard your digital assets with{" "}
              <strong className="font-semibold text-white">top-tier security solutions</strong>{" "}
              tailored to defend against today’s cyber threats.
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
          {/* Left: Offerings */}
          <div className="md:w-2/3 w-full">
            <h2 id="offerings" className="text-2xl md:text-3xl font-bold mb-8 border-b-2 pb-2 border-indigo-600 text-indigo-400">
              Our Antivirus Offerings
            </h2>

            <SecurityServicesList />

            {/* Why Us */}
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white border-b-2 pb-2 border-indigo-200 dark:border-indigo-400 mt-12">
              Why Choose Unison Security?
            </h2>

            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-base">
              <p>
                We protect your infrastructure, data, and reputation with a multi-layered approach tailored to your risk profile.
              </p>
              <ul className="list-disc list-inside space-y-2 text-base ml-4">
                <li>
                  <strong className="text-indigo-400">Proactive Defense:</strong> We don’t just react — we prevent.
                </li>
                <li>
                  <strong className="text-indigo-400">24/7 Monitoring:</strong> Around-the-clock security for peace of mind.
                </li>
                <li>
                  <strong className="text-indigo-400">Compliance Ready:</strong> We help you meet local and global standards with ease.
                </li>
                <li>
                  <strong className="text-indigo-400">Scalable & Future-Proof:</strong> Grow your business without growing your risks.
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Sticky CTA */}
          <Card className={`${cardBaseStyle} w-full md:w-[320px] sticky md:top-28 relative`}>
            <CardContent className="p-6 flex flex-col h-full">
              <div>
                <h3 className="font-bold text-xl mb-3 text-center text-black dark:text-white">
                  Let’s Secure Your Business
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 text-center leading-relaxed">
                  Get a customized antivirus strategy and take control of your organization’s digital safety.
                </p>
              </div>
              <div className="flex flex-col gap-3 mt-4">
                <ScheduleButton />
                <DownloadBrochureButton />
                <ContactInfo />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
