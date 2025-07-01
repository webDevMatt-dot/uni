import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Navbar } from "src/components/ui/Navbar";
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "src/components/ui/card";
import { Layout } from "src/components/ui/Layout";
import { Footer } from "src/components/ui/Footer";
import { ScheduleButton } from "src/components/ui/schedule";


export default function AIMachineLearningPage() {
  return (
    <Layout>
      <Head>
        <title>AI & Machine Learning | AAT Business Solutions</title>
      </Head>

      {/* Navbar */}
      <Navbar />
      
      {/* Page Content */}
      <div className="min-h-screen bg-white text-gray-800 font-sans pt-20 px-6">


        {/* Hero Section */}
        <section className="py-16 md:py-20 text-center px-6 mb-12 rounded-lg shadow-sm bg-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                AI & Machine Learning Solutions
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Transform your business with <strong className="font-semibold text-black">cutting-edge artificial intelligence and machine learning</strong>,
              driving innovation, efficiency, and data-driven decision-making.
            </p>
            <div className="space-x-4 flex justify-center">
              <Link href="/contact">
                <Button size="lg" className="rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                  Get a Free AI Consultation
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

        {/* Main Content */}
        <div className="max-w-6xl mx-auto pb-16 flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left Column: Offerings */}
          <div className="md:w-2/3">
            <h2 id="offerings" className="text-3xl font-bold mb-8 text-black border-b-2 pb-2 border-indigo-200">
              Our Core AI & ML Offerings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {[
                {
                  emoji: "⚙️",
                  title: "Custom AI Model Development",
                  description:
                    "We design and build bespoke AI models tailored to your unique business problems, from predictive analytics to advanced pattern recognition, ensuring optimal performance and relevance.",
                },
                {
                  emoji: "📊",
                  title: "Predictive Analytics & Forecasting",
                  description:
                    "Leverage historical data to predict future trends and outcomes. Our solutions provide valuable insights for demand forecasting, risk assessment, and strategic planning.",
                },
                {
                  emoji: "🗣️",
                  title: "Natural Language Processing (NLP)",
                  description:
                    "Enhance customer service, analyze sentiment, and automate content generation with advanced NLP models that understand, interpret, and generate human language.",
                },
                {
                  emoji: "👁️",
                  title: "Computer Vision Applications",
                  description:
                    "Implement visual recognition systems for quality control, security, and retail analytics. Our computer vision solutions bring machines closer to human-like perception.",
                },
                {
                  emoji: "📈",
                  title: "AI Strategy Consulting",
                  description:
                    "Develop a clear AI roadmap for your organization. We help you identify opportunities, assess readiness, and define a scalable strategy for successful AI adoption.",
                },
                {
                  emoji: "🎓",
                  title: "Machine Learning Training Programs",
                  description:
                    "Empower your team with comprehensive ML training programs, covering foundational concepts to advanced deployment. Ensure your staff can effectively leverage AI technologies.",
                },
              ].map((item, idx) => (
                <Card key={idx} className="border border-gray-200 rounded-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
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

            {/* Why Us Section */}
            <h2 className="text-3xl font-bold mb-6 text-black border-b-2 pb-2 border-indigo-200 mt-12">
              Why Partner with AAT Business Solutions?
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-base">
              <p>
                At AAT Business Solutions, we believe in practical AI. Our approach combines deep technical expertise with a keen understanding of your business objectives.
                We don&apos;t just build models; we build solutions that integrate seamlessly into your operations and deliver measurable ROI.
              </p>
              <ul className="list-disc list-inside space-y-2 text-base ml-4">
                <li><strong className="text-black">Experienced Team:</strong> Our data scientists and ML engineers bring years of industry experience and a passion for innovation.</li>
                <li><strong className="text-black">Customized Solutions:</strong> We never offer off-the-shelf answers; only tailored solutions meticulously designed for your unique challenges.</li>
                <li><strong className="text-black">End-to-End Support:</strong> From initial conceptualization and data preparation to model deployment and ongoing maintenance, we&apos;re with you every step of the way.</li>
                <li><strong className="text-black">Focus on ROI:</strong> We prioritize AI applications that genuinely drive significant business value, enhance efficiency, and provide a clear return on your investment.</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Sticky CTA */}
          <Card className="w-full md:w-[320px] border border-gray-200 shadow-xl rounded-lg sticky md:top-28 self-start bg-white">
            <CardContent className="p-6 flex flex-col h-full">
              <div>
                <h3 className="font-bold text-xl mb-3 text-center text-black">Ready to Innovate with AI?</h3>
                <p className="text-sm text-gray-600 mb-5 text-center leading-relaxed">
                  Unlock new possibilities and gain a competitive edge. Let&apos;s discuss how AI can transform your business.
                </p>
              </div>
              <div className="flex flex-col gap-3 mt-4">
                
              {/*button to schedule appointments */}
              <ScheduleButton />

                <a href="/AAT_Solutions_AI_ML_Brochure.pdf" download="AAT_AI_ML_Brochure.pdf" className="w-full">
                  <Button variant="outline" className="w-full py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                    Download Our AI/ML Brochure
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
                  <a href="https://wa.me/27816515179?text=Hello, I&apos;m contacting you regarding your AI & Machine Learning services." target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center justify-center gap-2">
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
