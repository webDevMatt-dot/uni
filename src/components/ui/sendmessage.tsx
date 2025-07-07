import React from "react";
import { Button } from "./button";

export function SendMessageButton() {
  return (
    <div className="mt-5 flex justify-center  w-full">
      <a href="#contact-form" className="inline-block">
        <Button className="w-full md:w-auto px-4 py-2 text-sm md:text-base rounded-md shadow-md hover:shadow-lg transition duration-300">
          ✉️ Send a Message
        </Button>
      </a>
    </div>
  );
}
