import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Navbar } from "src/components/ui/Navbar";
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "src/components/ui/card";
import Layout from "src/components/ui/Layout";
import { Footer } from "src/components/ui/Footer";
import { ScheduleButton } from "src/components/ui/schedule";


export default function SAPSolutionsPage() {
  return (
    <Layout>
      <Head>
        <title>SAP Solutions | AAT Business Solutions</title>
      </Head>

      {/* Navbar */}
      <Navbar />

      <div className="min-h-screen bg-white text-gray-800 font-sans pt-20 px-6">

        <section className="py-16 md:py-20 text-center px-6 mb-12 rounded-lg shadow-sm bg-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">
                SAP Solutions & Digital Transformation
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Streamline your business operations and maximize efficiency with our comprehensive <strong className="font-semibold text-black">SAP solutions</strong>, tailored to drive your digital transformation journey.
            </p>
            <div className="space-x-4 flex justify-center">
              <Link href="/contact">
                <Button size="lg" className="rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                  Get a Free SAP Consultation
                </Button>
              </Link>
              <a href="#offerings">
                <Button size="lg" variant="outline" className="rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto pb-16 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="md:w-2/3">
            <h2 id="offerings" className="text-3xl font-bold mb-8 text-black border-b-2 pb-2 border-indigo-200">
              Our Comprehensive SAP Offerings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {[
                {
                  emoji: "🚀",
                  title: "SAP Implementation",
                  description: "End-to-end SAP implementation services tailored to your business needs, ensuring a smooth transition and optimal system setup for maximum efficiency."
                },
                {
                  emoji: "🔄",
                  title: "Migration & Upgrades",
                  description: "Seamless migration of your existing SAP systems to newer versions or cloud platforms, minimizing downtime and ensuring data integrity throughout the process."
                },
                {
                  emoji: "🔧",
                  title: "Customization & Development",
                  description: "Tailored SAP customizations, including ABAP development, Fiori apps, and integration with third-party systems to meet your specific business requirements."
                },
                {
                  emoji: "🤝",
                  title: "Support & Maintenance",
                  description: "Reliable ongoing support, proactive monitoring, and expert maintenance services to ensure your SAP systems run smoothly and efficiently 24/7."
                },
                {
                  emoji: "💡",
                  title: "S/4HANA Transformation",
                  description: "Guide your transition to SAP S/4HANA, leveraging its in-memory computing capabilities for real-time analytics and simplified processes."
                },
                {
                  emoji: "☁️",
                  title: "Cloud SAP Solutions",
                  description: "Implement and manage SAP solutions on leading cloud platforms, offering flexibility, scalability, and reduced infrastructure costs."
                }
              ].map((item, index) => (
                <Card key={index} className="border border-gray-200 rounded-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
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

            <h2 className="text-3xl font-bold mb-6 text-black border-b-2 pb-2 border-indigo-200 mt-12">
              Why Partner with AAT for SAP Solutions?
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-base">
              <p>
                AAT Business Solutions stands out as your trusted SAP partner. Our certified consultants combine deep technical expertise with a profound understanding of industry best practices to deliver SAP solutions that truly transform your business, ensuring efficiency and measurable growth.
              </p>
              <ul className="list-disc list-inside space-y-2 text-base ml-4">
                <li><strong className="text-black">Certified Experts:</strong> Our team consists of highly skilled and certified SAP consultants.</li>
                <li><strong className="text-black">Proven Methodologies:</strong> We follow industry-leading best practices for successful project delivery.</li>
                <li><strong className="text-black">Holistic Approach:</strong> From strategy to implementation and ongoing support, we cover all aspects of your SAP journey.</li>
                <li><strong className="text-black">Business-Centric Focus:</strong> Our solutions are designed to align with and accelerate your specific business objectives.</li>
              </ul>
            </div>
          </div>

          <Card className="w-full md:w-[320px] border border-gray-200 shadow-xl rounded-lg sticky md:top-28 self-start bg-white">
            <CardContent className="p-6 flex flex-col h-full">
              <div>
                <h3 className="font-bold text-xl mb-3 text-center text-black">Ready to Optimize with SAP?</h3>
                <p className="text-sm text-gray-600 mb-5 text-center leading-relaxed">
                  Streamline your operations and enhance efficiency. Contact us for a specialized SAP consultation.
                </p>
              </div>
              <div className="flex flex-col gap-3 mt-4">

              {/*button to schedule appointments */}
              <ScheduleButton />

                <a href="/AAT_Solutions_SAP_Brochure.pdf" download="AAT_SAP_Brochure.pdf" className="w-full">
                  <Button variant="outline" className="w-full py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                    Download Our SAP Brochure
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
                  <a href="https://wa.me/27816515179?text=Hello, I&apos;m contacting you regarding your SAP Solutions services." target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center justify-center gap-2">
                    📱 WhatsApp Us
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
