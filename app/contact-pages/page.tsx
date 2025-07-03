"use client";
import React from "react";
import Head from "next/head";
import { Navbar } from "src/components/ui/Navbar";
import Layout from "src/components/ui/Layout";
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "src/components/ui/card";

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>Contact Us | AAT Business Solutions</title>
      </Head>

      <Navbar />

      <div className="min-h-screen bg-white text-gray-800 font-sans pt-20 px-4 md:px-6">
        {/* Hero Section */}
        <section className="py-16 md:py-20 text-center mb-12 bg-white rounded-lg shadow-sm">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-4 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Get in Touch with Us
              </span>
            </h1>
            <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto">
              Whether you're ready to innovate or just have questions — we’re here for you.
            </p>
          </div>
        </section>

        {/* Contact Info + Form */}
        <div className="max-w-6xl mx-auto pb-16 flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left: Contact Info */}
          <Card className="w-full md:w-[320px] border border-gray-200 shadow-lg rounded-lg bg-white">
            <CardContent className="p-6">
              <h2 className="font-bold text-xl mb-4 text-black text-center">Contact Information</h2>
              <ul className="text-sm text-gray-700 space-y-4">
                <li>
                  📧 Email:{" "}
                  <a href="mailto:admin@aatsolutions.co.za" className="text-indigo-600 hover:underline">
                    admin@aatsolutions.co.za
                  </a>
                </li>
                <li>
                  📞 Phone:{" "}
                  <a href="tel:+27816515179" className="text-indigo-600 hover:underline">
                    +27 81 651 5179
                  </a>
                </li>
                <li>
                  📱 WhatsApp:{" "}
                  <a
                    href="https://wa.me/27816515179?text=Hi%20AAT!%20I%27d%20like%20to%20get%20in%20touch."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    Message Us
                  </a>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <a href="/AAT_Company_Profile.pdf" download>
                  <Button variant="outline" className="w-full">
                    Download Company Profile
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Right: Contact Form (non-functional placeholder) */}
          <Card className="flex-1 border border-gray-200 shadow-lg rounded-lg bg-white">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-black mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Type your message here..."
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
