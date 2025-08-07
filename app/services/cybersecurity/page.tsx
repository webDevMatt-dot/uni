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
import { SecurityServicesList } from "src/components/sections/serviceSections/SecurityServicesList";

export default function CyberSecurityPage() {
  return (
    <Layout>
      <Head>
        <title>Antivirus Solutions | Unison</title>
      </Head>

      <Navbar />

      <div className="min-h-screen bg-zinc-950 text-white font-sans pt-6 px-4 md:px-6">
        {/* Hero Section */}
        <section className="pt-10 md:pt-14 pb-12 text-center px-4 md:px-6 mb-10 rounded-lg shadow-sm bg-zinc-900/80 backdrop-blur-md">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight text-indigo-400">
              Antivirus Services
            </h1>
            <p className="text-base md:text-xl text-zinc-300 max-w-2xl mx-auto mb-8">
              Safeguard your digital assets with{" "}
              <strong className="font-semibold text-white">
                top-tier security solutions
              </strong>{" "}
              tailored to defend against today's cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div><ScheduleButton /></div>
              <div><LearnButton /></div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto pb-16 flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left: Offerings */}
          <div className="md:w-2/3 w-full">
            <h2
              id="offerings"
              className="text-2xl md:text-3xl font-bold mb-8 border-b-2 pb-2 border-indigo-600 text-indigo-400"
            >
              Our Antivirus Offerings
            </h2>

            <SecurityServicesList />

            {/* Why Us */}
            <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b-2 pb-2 border-indigo-600 mt-12 text-indigo-400">
              Why Choose Unison Security?
            </h2>
            <div className="space-y-6 text-zinc-400 text-base leading-relaxed">
              <p>
                We protect your infrastructure, data, and reputation with a
                multi-layered approach tailored to your risk profile.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <strong className="text-indigo-400">Proactive Defense:</strong>{" "}
                  We don&rsquo;t just react — we prevent.
                </li>
                <li>
                  <strong className="text-indigo-400">24/7 Monitoring:</strong>{" "}
                  Around-the-clock security for peace of mind.
                </li>
                <li>
                  <strong className="text-indigo-400">Compliance Ready:</strong>{" "}
                  We help you meet local and global standards with ease.
                </li>
                <li>
                  <strong className="text-indigo-400">Scalable & Future-Proof:</strong>{" "}
                  Grow your business without growing your risks.
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Sticky CTA */}
          <Card className="w-full md:w-[320px] border border-zinc-700 shadow-xl rounded-lg sticky md:top-28 self-start bg-zinc-900/70 backdrop-blur-md">
            <CardContent className="p-6 flex flex-col h-full text-white">
              <div>
                <h3 className="font-bold text-xl mb-3 text-center text-indigo-400">
                  Let&rsquo;s Secure Your Business
                </h3>
                <p className="text-sm text-zinc-400 mb-5 text-center leading-relaxed">
                  Get a customized antivirus strategy and take control of
                  your organization&rsquo;s digital safety.
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
