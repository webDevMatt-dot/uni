"use client";
import React from "react";
import Head from "next/head";
import { Navbar } from "src/components/ui/Navbar";
import Layout from "src/components/ui/Layout";
import { Card, CardContent } from "src/components/ui/card";
import { SendMessageButton } from "src/components/ui/sendmessage";

export default function AboutUsPage() {
  return (
    <Layout>
      <Head>
        <title>About Us | Unison</title>
      </Head>

      <Navbar />

      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 pt-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          {/* Page Header */}
          <section className="text-center mb-8 sm:mb-12">
            <Card className="shadow-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg w-full">
              <CardContent className="p-6 sm:p-8 md:p-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400">
                    About Us
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                  At Unison, we combine
                  <strong className="font-semibold text-black dark:text-white"> innovative thinking with cutting-edge technology </strong>
                  to deliver results-driven business solutions in ICT and Communications.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Mission & Vision */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm w-full">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3">🎯 Our Mission</h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Our mission is to achieve the reputation of a quality, high standard & reliable solution and service provider company in the ICT and Communications industry.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm w-full">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3">👁️ Our Vision</h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Our vision is to achieve 100% customer satisfaction by delivering quality products and services at an affordable cost. Our forward vision is to become a leading
                  technology-based corporate solutions provider, capable of demanding unconditional response from the targeted niche.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Core Message */}
          <section className="text-center bg-gray-50 dark:bg-gray-800 py-10 sm:py-12 px-4 sm:px-6 rounded-lg shadow-sm mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4">It&apos;s All About Creativity</h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              AAT Solutions specializes in exceptional delivery of business and technical IT projects. We are dedicated to building long-term relationships with our clients,
              investing in their journey of technological adoption, and seeing projects come to life.
              <br /><br />
              We take the time to understand each client and their needs, walk the journey in envisioning the desired outcome, and then collaborate together in materializing
              those intentions. We embrace all our projects with ease and professionalism, ensuring that we become a trusted advisor and partner.
            </p>
          </section>

          {/* Call to Action */}
          <section className="py-16 sm:py-20 text-white text-center px-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white mb-6">
              Want to know how we can help you?
            </h3>
            <SendMessageButton />
          </section>

        </div>
      </div>
    </Layout>
  );
}
