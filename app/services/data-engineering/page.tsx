"use client";
import React from "react";
import Head from "next/head";
import { Navbar } from "src/components/ui/Navbar";
import { Card, CardContent } from "src/components/ui/card";
import Layout from "src/components/ui/Layout";
import { ScheduleButton } from "src/components/ui/schedule";
import { LearnButton } from "src/components/ui/learn";
import { DownloadBrochureButton } from "src/components/ui/DownloadBrochureButton";

export default function DataEngineeringSciencePage() {
  return (
    <Layout>
      <Head>
        <title>Data Engineering & Science | AAT Business Solutions</title>
      </Head>

      {/* Navbar */}
      <Navbar />
      
      <div className="min-h-screen bg-white text-gray-800 font-sans pt-6 px-4 md:px-6">
        {/* Hero Section */}
        <section className="pt-10 md:pt-14 pb-12 text-center px-4 md:px-6 mb-10 rounded-lg shadow-sm bg-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
                Data Engineering & Science Solutions
              </span>
            </h1>
            <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Unlock the true potential of your data with robust <strong className="font-semibold text-black">data engineering and advanced data science</strong> services, driving insights and informed decision-making.
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

        <div className="max-w-6xl mx-auto pb-16 flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left Column */}
          <div className="md:w-2/3 w-full">
            <h2 id="offerings" className="text-2xl md:text-3xl font-bold mb-8 text-black border-b-2 pb-2 border-teal-200">
              Our Core Data Offerings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {[
                {
                  emoji: "🔗",
                  title: "ETL Pipelines & Data Integration",
                  description:
                    "We design and implement robust Extract, Transform, Load (ETL) pipelines to consolidate data from disparate sources, ensuring data quality and accessibility for analysis.",
                },
                {
                  emoji: "☁️",
                  title: "Data Warehousing & Data Lakes",
                  description:
                    "Build scalable and secure data storage solutions tailored to your needs, whether it's a structured data warehouse or a flexible data lake for big data analytics.",
                },
                {
                  emoji: "📈",
                  title: "Business Intelligence (BI) & Reporting",
                  description:
                    "Transform raw data into actionable insights with interactive dashboards and custom reports, empowering your team to make data-driven decisions swiftly.",
                },
                {
                  emoji: "🔬",
                  title: "Advanced Analytics & Statistical Modeling",
                  description:
                    "Utilize sophisticated analytical techniques and statistical models to uncover hidden patterns, forecast trends, and optimize business processes for maximum efficiency.",
                },
                {
                  emoji: "🔒",
                  title: "Data Governance & Security",
                  description:
                    "Establish robust data governance frameworks and implement stringent security measures to ensure data integrity, compliance, and protection against unauthorized access.",
                },
                {
                  emoji: "🧭",
                  title: "Data Strategy & Consulting",
                  description:
                    "Develop a comprehensive data strategy aligned with your business goals. We provide expert consulting to maximize the value of your data assets and drive innovation.",
                },
              ].map((item, index) => (
                <Card
                  key={index}
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

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black border-b-2 pb-2 border-teal-200 mt-12">
              Why Partner with AAT for Data Solutions?
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-base">
              <p>
                At AAT Business Solutions, we transform complex data challenges into actionable opportunities. Our holistic approach ensures your data infrastructure is efficient, secure, and capable of delivering profound insights that propel your business forward.
              </p>
              <ul className="list-disc list-inside space-y-2 text-base ml-4">
                <li>
                  <strong className="text-black">Expertise:</strong> Our team comprises seasoned data engineers and scientists with a deep understanding of various industries.
                </li>
                <li>
                  <strong className="text-black">Scalable Solutions:</strong> We build future-proof data architectures that grow with your business needs.
                </li>
                <li>
                  <strong className="text-black">Actionable Insights:</strong> We focus on translating raw data into clear, strategic intelligence for decision-makers.
                </li>
                <li>
                  <strong className="text-black">Security & Compliance:</strong> Your data&apos;s safety and regulatory adherence are our top priorities.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Sticky CTA */}
          <Card
            className="w-full md:w-[320px] border border-gray-200 shadow-xl rounded-lg self-start bg-white
              sticky md:top-28 md:sticky relative"
          >
            <CardContent className="p-6 flex flex-col h-full">
              <div>
                <h3 className="font-bold text-xl mb-3 text-center text-black">Ready to Transform Your Data?</h3>
                <p className="text-sm text-gray-600 mb-5 text-center leading-relaxed">
                  Harness the power of your information for strategic growth. Contact us for a data solution consultation.
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
              <div className="mt-6 text-center text-sm text-gray-500 border-t pt-4 border-teal-200">
                <p className="mb-2">
                  <a
                    href="mailto:admin@aatsolutions.co.za"
                    className="hover:underline flex items-center justify-center gap-2"
                  >
                    📧 admin@aatsolutions.co.za
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+27816515179"
                    className="hover:underline flex items-center justify-center gap-2"
                  >
                    📞 +27 81 651 5179
                  </a>
                </p>
                <p className="mt-2">
                  <a
                    href="https://wa.me/27816515179?text=Hello, I&apos;m contacting you regarding your Data Engineering & Science services."
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
    </Layout>
  );
}
