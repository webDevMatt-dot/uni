"use client";
import React, { useState } from "react";
import Head from "next/head";
import { Navbar } from "src/components/ui/Navbar";
import { Card, CardContent } from "src/components/ui/card";
import { Footer } from "src/components/ui/Footer";
import { TeamGallery } from "src/components/ui/TeamGallery";
import { countryCodes } from "src/data/countryCodes";
import { SubmitButton } from "src/components/ui/SubmitButton";

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

      <main className="pt-24 px-6 min-h-screen bg-white text-gray-800 font-sans">
        <div className="max-w-6xl mx-auto">
          {/* ... Contact Info Card ... */}

          {/* 🧁 Contact Form Card */}
          <Card className="bg-white border border-gray-200 shadow-lg rounded-xl mb-16">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                />

                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    required
                    className="w-1/3 p-3 border border-gray-300 rounded-md"
                  >
                    {countryCodes.map((country) => (
                      <option
                        key={`${country.code}-${country.label}`}
                        value={country.code}
                      >
                        {`${country.label.replace(/^[^ ]+ /, "")} ${country.code}`}
                      </option>
                    ))}
                  </select>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    pattern="[0-9]{4,15}"
                    inputMode="numeric"
                    className="w-2/3 p-3 border border-gray-300 rounded-md"
                    onInput={(e) => {
                      const input = e.target as HTMLInputElement;
                      input.value = input.value.replace(/[^0-9]/g, '');
                    }}
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company Name (or type 'personal' or 'pvt')"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                ></textarea>

                <SubmitButton loading={loading} />
              </form>
            </CardContent>
          </Card>

          {/* 👥 Team Gallery */}
          <TeamGallery />
        </div>
      </main>

      <div className="bg-white pt-6">
        <Footer />
      </div>
    </>
  );
}
