import React from "react";
import Head from "next/head";
import { Navbar } from "src/components/ui/Navbar";
import { Card, CardContent } from "src/components/ui/card";
import { Footer } from "src/components/ui/Footer";
import { TeamGallery } from "src/components/ui/TeamGallery";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | AAT Business Solutions</title>
      </Head>

      <Navbar />

      <main className="pt-24 px-6 min-h-screen bg-white text-gray-800 font-sans">
        <div className="max-w-6xl mx-auto">

          {/* Contact Info inside Card */}
          <Card className="bg-white border border-gray-200 shadow-lg rounded-xl mb-16">
            <CardContent className="p-8">
              {/* Page Header */}
              <section className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-red-700">
                    Get in Touch with AAT Business Solutions
                  </span>
                </h1>

                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We&apos;d love to hear from you. Whether you have a question about our services, want to work with us, or just want to connect — we’re here.
                </p>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                  <h2 className="text-xl font-bold mb-2">Our Office</h2>
                  <p className="text-sm">
                    <a
                      href="https://www.google.com/maps?q=8+Fred+Verseput+Road,+Halfway+Gardens+1686,+Midrand"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline block"
                    >
                      8 Fred Verseput Road<br />
                      Halfway Gardens 1686, Midrand
                    </a>
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Contact</h2>
                  <p className="text-sm">
                    📞 <a href="tel:+27816515179" className="hover:underline">+27 81 651 5179</a><br />
                    📧 <a href="mailto:admin@aatsolutions.co.za" className="hover:underline">admin@aatsolutions.co.za</a>
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Other Ways to Reach Us</h2>
                  <p className="text-sm">
                    📱 <a
                      href="https://wa.me/27816515179?text=Hello, I&apos;m contacting you from your website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Message us on WhatsApp
                    </a>
                  </p>
                </div>
              </section>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 shadow-lg rounded-xl mb-0">
            <CardContent className="p-8">
              {/* Team Members Row */}
              <section>
                <TeamGallery />
              </section>
            </CardContent>
          </Card>

        </div>
      </main>

      <div className="bg-white pt-6">
        <Footer />
      </div>
    </>
  );
}
