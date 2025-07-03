"use client";
import React, { useState } from "react";
import Head from "next/head";
import { Navbar } from "src/components/ui/Navbar";
import { Card, CardContent } from "src/components/ui/card";
import { Footer } from "src/components/ui/Footer";
import { TeamGallery } from "src/components/ui/TeamGallery";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("https://formspree.io/f/xanjvkeq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      form.reset();
      alert("Message sent!");
    } catch (err) {
      alert("Oops! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | AAT Business Solutions</title>
      </Head>

      <Navbar />

      <main className="pt-28 px-6 min-h-screen bg-white text-gray-800 font-sans">
        <div className="max-w-6xl mx-auto space-y-16">
          <Card className="bg-white border border-gray-200 shadow-lg rounded-xl">
            <CardContent className="p-8">
              <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-gray-700">
                We would love to hear from you. Please send us a message below.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 shadow-lg rounded-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  name="name"
                  placeholder="Your Full Name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </CardContent>
          </Card>

          <TeamGallery />
        </div>
      </main>

      <div className="bg-white pt-6">
        <Footer />
      </div>
    </>
  );
}
