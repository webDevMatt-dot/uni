import React from "react";
import { Button } from "./button";

export function SendMessageButton() {
  return (
    <div className="mt-5 flex justify-center  w-full">
      <a href="#contact-form" className="inline-block">
        <Button
          size="lg"
          variant="outline"
          className="px-6 py-3 text-base md:text-lg rounded-md shadow-md hover:shadow-lg transition duration-300"
        >
          ✉️ Send a Message
        </Button>
      </a>
    </div>
  );
}
