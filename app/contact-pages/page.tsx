"use client";
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Navbar } from "src/components/ui/Navbar";
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "src/components/ui/card";
import Layout from "src/components/ui/Layout";
import { ScheduleButton } from "src/components/ui/schedule";
import { countryCodes } from "src/data/countryCodes";

export default function ContactPage() {
  const [selectedCode, setSelectedCode] = useState("+27");

  return (
    <Layout>
      <Head>
        <title>Contact Us | AAT Business Solutions</title>
      </Head>

      <Navbar />

      <div className="min-h-screen bg-white text-gray-800 font-sans pt-20 px-4 md:px-6">
        {/* Hero Section */}
        <section className="py-16 md:py-20 text-center px-4 md:px-6 mb-12 rounded-lg shadow-sm bg-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-4 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Get in Touch with AAT Business Solutions
              </span>
            </h1>
            <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              We'd love to hear from you! Whether you have questions about our AI & Machine Learning services, need support, or want to discuss a project, our team is here to help.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
              <a href="mailto:admin@aatsolutions.co.za">
                <Button size="lg" className="rounded-md shadow-md w-full sm:w-auto">
                  📧 Email Us
                </Button>
              </a>
              <a href="#contact-form">
                <Button size="lg" variant="outline" className="rounded-md shadow-md w-full sm:w-auto">
                  Send a Message
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto pb-16 flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left: Contact Form */}
          <div className="md:w-2/3 w-full">
            <h2 id="contact-form" className="text-2xl md:text-3xl font-bold mb-8 text-black border-b-2 pb-2 border-indigo-200">
              Send Us a Message
            </h2>

            <Card className="border border-gray-200 rounded-lg shadow-md mb-10">
              <CardContent className="p-6">
                <form
                  action="https://formspree.io/f/xanjvkeq"
                  method="POST"
                  className="space-y-6"
                >
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <div className="flex gap-2">
                      <select
                        name="country_code"
                        value={selectedCode}
                        onChange={(e) => setSelectedCode(e.target.value)}
                        className="w-1/3 border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {countryCodes.map((c, i) => (
                          <option key={i} value={c.code}>
                            {c.label} ({c.code})
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. 812345678"
                        className="w-2/3 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Send Message
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right: Sticky CTA */}
          <Card className="w-full md:w-[320px] border border-gray-200 shadow-xl rounded-lg sticky md:top-28 self-start bg-white">
            <CardContent className="p-6 flex flex-col h-full">
              <div>
                <h3 className="font-bold text-xl mb-3 text-center text-black">Ready to Innovate with AI?</h3>
                <p className="text-sm text-gray-600 mb-5 text-center leading-relaxed">
                  Unlock new possibilities and gain a competitive edge. Let&apos;s discuss how AI can transform your business.
                </p>
              </div>
              <div className="flex flex-col gap-3 mt-4">
                <ScheduleButton />
                <a href="/AAT_Solutions_AI_ML_Brochure.pdf" download className="w-full">
                  <Button variant="outline" className="w-full py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                    Download AI/ML Brochure
                  </Button>
                </a>
              </div>
              <div className="mt-6 text-center text-sm text-gray-500 border-t pt-4 border-indigo-200">
                <p className="mb-2">
                  <a href="mailto:admin@aatsolutions.co.za" className="hover:underline flex items-center justify-center gap-2">
                    📧 admin@aatsolutions.co.za
                  </a>
                </p>
                <p>
                  <a href="tel:+27816515179" className="hover:underline flex items-center justify-center gap-2">
                    📞 +27 81 651 5179
                  </a>
                </p>
                <p className="mt-2">
                  <a
                    href="https://wa.me/27816515179?text=Hello, I'm contacting you regarding your AI & Machine Learning services."
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
