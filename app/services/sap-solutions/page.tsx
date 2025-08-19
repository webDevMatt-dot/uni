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

// SAP services data
const sapServices = [
  {
    emoji: "🛠️",
    title: "SAP Implementation",
    description: "Seamless deployment of SAP modules tailored to your business needs.",
  },
  
  {
    emoji: "⚡",
    title: "System Integration",
    description: "Connect SAP with your existing systems for smooth data flow and operations.",
  },

  {
    emoji: "📊",
    title: "Analytics & Reporting",
    description: "Generate actionable insights and reports with SAP’s powerful analytics tools.",
  },

  {
    emoji: "🔒",
    title: "Security & Compliance",
    description: "Ensure your SAP environment is secure and meets regulatory standards.",
  },

  {
    emoji: "🎓",
    title: "Training & Support",
    description: "Equip your team with the skills to effectively use and maintain SAP systems.",
  },

  {
    emoji: "🎓",
    title: "Training & Support",
    description: "Equip your team with the skills to effectively use and maintain SAP systems.",
  },
];

// SAP services list component
export function SAPServicesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      {sapServices.map((item, i) => (
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

export default function SAPSolutionsPage() {
  return (
    <Layout>
      <Head>
        <title>SAP Solutions | Unison</title>
      </Head>

      <Navbar />

      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans pt-6 px-4 md:px-6">
        {/* Hero Section */}
        <section className="pt-10 md:pt-14 pb-12 text-center px-4 md:px-6 mb-10 rounded-lg shadow-sm bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold text-black dark:text-white mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400">
                SAP Solutions & Digital Transformation
              </span>
            </h1>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Streamline your business operations and maximize efficiency with our comprehensive{" "}
              <strong className="font-semibold text-black dark:text-white">SAP solutions</strong>, tailored to drive your digital transformation journey.
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
            <h2 id="offerings" className="text-2xl md:text-3xl font-bold mb-8 text-black dark:text-white border-b-2 pb-2 border-indigo-200 dark:border-indigo-400">
              Our Comprehensive SAP Offerings
            </h2>

            <SAPServicesList />

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white border-b-2 pb-2 border-indigo-200 dark:border-indigo-400 mt-12">
              Why Partner with AAT for SAP Solutions?
            </h2>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-base">
              <p>
                Unison stands out as your trusted SAP partner. Our certified consultants combine deep technical expertise with a profound understanding of industry best practices to deliver SAP solutions that truly transform your business, ensuring efficiency and measurable growth.
              </p>
              <ul className="list-disc list-inside space-y-2 text-base ml-4">
                <li>
                  <strong className="text-black dark:text-white">Certified Experts:</strong> Our team consists of highly skilled and certified SAP consultants.
                </li>
                <li>
                  <strong className="text-black dark:text-white">Proven Methodologies:</strong> We follow industry-leading best practices for successful project delivery.
                </li>
                <li>
                  <strong className="text-black dark:text-white">Holistic Approach:</strong> From strategy to implementation and ongoing support, we cover all aspects of your SAP journey.
                </li>
                <li>
                  <strong className="text-black dark:text-white">Business-Centric Focus:</strong> Our solutions are designed to align with and accelerate your specific business objectives.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Sticky CTA */}
          <Card className={`${cardBaseStyle} w-full md:w-[320px] sticky md:top-28 relative`}>
            <CardContent className="p-6 flex flex-col h-full">
              <div>
                <h3 className="font-bold text-xl mb-3 text-center text-black dark:text-white">
                  Ready to Optimize with SAP?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 text-center leading-relaxed">
                  Streamline your operations and enhance efficiency. Contact us for a specialized SAP consultation.
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
