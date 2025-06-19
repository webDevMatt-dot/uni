import React from "react";
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "src/components/ui/card";
import { Input } from "src/components/ui/input";
import { Textarea } from "src/components/ui/textarea";


export default function AATBusinessSolutions() {

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-300 shadow-lg z-50 p-4 flex justify-between items-center">         
          <h1 className="text-lg font-bold">AAT Business Solutions</h1>
          <nav className="space-x-6">
            <a href="#" className="hover:underline">Home</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-white to-gray-100">
        <img src="/logo.png" alt="Logo" className="mx-auto mb-6 w-[90px]" />
        <h2 className="text-4xl font-bold mb-4">Transforming Business Through Technology</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Leading provider of AI & Machine Learning solutions, 
          Data Engineering, 
          SAP implementations,
          and comprehensive cybersecurity services.
        </p>
        <div className="space-x-4">
          <Button><a href="#services" className="hover:underline">Explore Our Services</a></Button>
          <Button variant="outline">Schedule Consultation</Button>
        </div>
        <div className="flex justify-center mt-10 space-x-10 text-lg">
          <div><strong>15+</strong><br />Years Experience</div>
          <div><strong>500+</strong><br />Projects Completed</div>
          <div><strong>200+</strong><br />Happy Clients</div>
          <div><strong>24/7</strong><br />Support</div>
        </div>
      </section>

      {/* Services */}
<section id="services" className="py-16 bg-white">
  <h3 className="text-center text-2xl font-bold mb-4">Our Services</h3>
  <p className="text-center mb-10 text-gray-600">
    We provide comprehensive technology solutions to help your business thrive in the digital age
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 max-w-5xl mx-auto">
    {[
      {
        title: "AI & Machine Learning",
        items: [
          "Custom AI Models",
          "ML Training Programs",
          "Predictive Analytics",
          "Natural Language Processing"
        ]
      },
      {
        title: "Data Engineering & Science",
        items: [
          "Data Pipeline Development",
          "Big Data Analytics",
          "Data Warehouse Solutions",
          "Business Intelligence"
        ]
      },
      {
        title: "SAP Solutions",
        items: [
          "SAP Implementation",
          "System Integration",
          "Custom Development",
          "Training & Support"
        ]
      },
      {
        title: "Anti-Virus & Security",
        items: [
          "Endpoint Protection",
          "Network Security",
          "Threat Detection",
          "Security Audits"
        ]
      }
    ].map(({ title, items }, i) => (
      <Card
        key={i}
        className="border border-gray-200 hover:border-gray-400 transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
      >
        <CardContent className="p-6">
          <h4 className="font-bold mb-3">{title}</h4>
          <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Button variant="outline" className="mt-2">
            View More Info
          </Button>
        </CardContent>
      </Card>
    ))}
  </div>
</section>


      {/* Contact Form */}
      <section id="contact" className="py-16 bg-gray-50" >
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
          <form className="space-y-4">
            <Input placeholder="Your full name" required />
            <Input placeholder="Phone" />
            <Input type="email" placeholder="your.email@example.com" required />
            <Textarea placeholder="Tell us about your project..." maxLength={2000} />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </section>


<section id="contact" className="bg-white py-10">
  <div className="max-w-3xl mx-auto text-center mb-10">
    <h3 className="text-3xl font-bold mb-2">Contact Us</h3>
    <p className="text-gray-600 text-lg">
      Ready to transform your business? Get in touch with our team of experts today
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

    {/* Our Location - spans 2 columns */}
    <Card className="md:col-span-2 border border-gray-200 hover:shadow-md transition-shadow">
<CardContent className="p-6">
  <h4 className="font-bold mb-4">Our Location</h4>

  <div className="flex flex-col md:flex-row gap-6 items-start">
    {/* Address */}
    <div className="text-sm leading-relaxed md:w-1/2">
      <a
        href="https://www.google.com/maps?q=8+Fred+Verseput+Road,+Halfway+Gardens+1686,+Midrand,+Johannesburg,+South+Africa"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline block"
      >
        📍 8 Fred Verseput Road<br />
        Halfway Gardens 1686<br />
        Midrand, Johannesburg<br />
        South Africa
      </a>
    </div>

    {/* Google Map */}
    <div className="w-full md:w-1/2">
      <iframe
        loading="lazy"
        src="https://maps.google.com/maps?q=8%20Fred%20Verseput%20Road%2C%20Halfway%20Gardens%201686%2C%20Midrand%2C%20Johannesburg%2C%20South%20Africa&t=m&z=15&output=embed&iwloc=near"
        title="8 Fred Verseput Road, Halfway Gardens 1686, Midrand, Johannesburg, South Africa"
        aria-label="8 Fred Verseput Road, Halfway Gardens 1686, Midrand, Johannesburg, South Africa"
        className="w-full h-64 rounded"
      ></iframe>
    </div>
  </div>
</CardContent>

    </Card>

    {/* Get In Touch - spans 2 rows */}
    <Card className="md:row-span-2 border border-gray-200">
      <CardContent className="p-6 text-center">
        <h4 className="font-bold mb-4">Get In Touch</h4>
        <div>
          <p>Choose your preferred way to contact us</p>
          <br /><br /><br /><br />
        </div>
        <div className="space-y-2">

          <Button className="w-full">
            <a href="https://wa.me/27816515179?text=Hello, I'm contacting you regarding AAT Solutions">
              WhatsApp Us
            </a>
          </Button>

          <Button variant="outline" className="w-full">
            <a href="tel:+27 10 442 4640">
              Call Now
            </a>
          </Button>
          
          <Button variant="outline" className="w-full">
            <a href="mailto:admin@aatsolutions.co.za">
              Send Email
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>

    {/* Phone */}
    <Card className="border border-gray-200 hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <h4 className="font-bold mb-2">Phone</h4>

         {/*+27 81 651 5179 (Call &amp; WhatsApp)*/}
        <p>
          <a href="https://wa.me/27816515179?text=Hello, I'm contacting you regarding AAT Solutions" className="hover:underline">
            Cell: +27 81 651 5179
          </a>
        </p>

<br/>
        <p>
          <a href="tel:+27 10 442 4640" className="hover:underline">
            Tel: +27 10 442 4640
          </a>
        </p>

      </CardContent>
    </Card>

    {/* Email */}
    <Card className="border border-gray-200 hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <h4 className="font-bold mb-2">Email</h4>
        <p>
          <a href="mailto:admin@aatsolutions.co.za" className="hover:underline">
            admin@aatsolutions.co.za
          </a>
        </p>
      </CardContent>
    </Card>

    {/* Business Hours - spans all 3 columns */}
    <Card className="md:col-span-3 border border-gray-200">
      <CardContent className="p-6 text-center">
        <h4 className="font-bold mb-2">Business Hours</h4>
        <p>
          Monday - Friday: 8:00 AM - 5:00 PM<br />
          Saturday: 9:00 AM - 1:00 PM<br />
          Sunday: Closed
        </p>
      </CardContent>
    </Card>

  </div>
</section>



      {/* Footer */}
<footer className="bg-gray-100 text-gray-700 py-10 border-t border-b border-gray-300">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
    
    {/* Column 1: Company Info */}
    <div>
      <h4 className="text-lg font-bold mb-2">AAT Business Solutions</h4>
      <p className="text-sm">
        Your trusted partner for <br />
        cutting-edge technology solutions.<br />
        Specializing in AI, Data Engineering, <br />SAP Solutions, and Cybersecurity.
      </p>
    </div>

    {/* Column 2: Services */}
    <div>
      <h4 className="text-lg font-bold mb-2">Our Services</h4>
      <ul className="text-sm space-y-1">

        <li className="hover:underline">
          AI & Machine Learning Training
        </li>

        <li className="hover:underline">
          Data Engineering & Science
        </li>

        <li className="hover:underline">
          SAP Solutions
        </li>

        <li className="hover:underline">
          Anti-Virus & Security Packages
        </li>

      </ul>
    </div>

    {/* Column 3: Contact Info */}
    <div>
      <h4 className="text-lg font-bold mb-2">Contact Information</h4>
      {/* Address link*/}
      <p className="text-sm mb-2">
        <a href="https://www.google.com/maps?q=8+Fred+Verseput+Road,+Halfway+Gardens+1686,+Midrand,+Johannesburg,+South+Africa" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:underline block">

            8 Fred Verseput Road<br />
            Halfway Gardens 1686, Midrand
        </a>
      </p>


      {/* Phone link*/}
      <p className="text-sm mb-2">
        <a href="https://wa.me/27816515179?text=Hello, I'm contacting you regarding AAT Solutions" className="hover:underline">
          +27 81 651 5179
        </a>  
      </p>


      {/* Email link*/}
      <p className="text-sm">
        <a href="mailto:admin@aatsolutions.co.za" className="hover:underline">
          admin@aatsolutions.co.za
        </a>  
      </p>
    </div>

  </div>
</footer>


      <footer className="bg-gray-100 text-center py-6 text-sm text-gray-500">
        <div>&copy; 2025 AAT Business Solutions. All rights reserved.</div>
      </footer>
    </div>
  );
}
