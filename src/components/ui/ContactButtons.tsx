import React from "react";
import { Button } from "./button";

export function ContactButtons() {
  return (
    <div className="space-y-3 w-full">
      <a href="mailto:admin@aatsolutions.co.za" className="block w-full">
        <Button
          className="
            bg-indigo-600 text-white
            hover:bg-indigo-500 hover:shadow-lg
            px-5 py-2.5 text-sm md:text-base rounded-full
            shadow-md transition duration-300 ease-in-out
            w-full whitespace-nowrap
          "
        >
          📧 Email Us
        </Button>
      </a>

      <a href="tel:+27816515179" className="block w-full">
        <Button
          className="
            bg-indigo-600 text-white
            hover:bg-indigo-500 hover:shadow-lg
            px-5 py-2.5 text-sm md:text-base rounded-full
            shadow-md transition duration-300 ease-in-out
            w-full whitespace-nowrap
          "
        >
          📞 Call Now
        </Button>
      </a>

      <a
        href="https://wa.me/27816515179?text=Hi%20AAT%20Team!%20I%20have%20a%20question%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
      >
        <Button
          className="
            bg-indigo-600 text-white
            hover:bg-indigo-500 hover:shadow-lg
            px-5 py-2.5 text-sm md:text-base rounded-full
            shadow-md transition duration-300 ease-in-out
            w-full whitespace-nowrap
          "
        >
          💬 WhatsApp Us
        </Button>
      </a>
    </div>
  );
}
