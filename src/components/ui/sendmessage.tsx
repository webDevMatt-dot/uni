import React from "react";
import { Button } from "./button";

export function SendMessageButton() {
  return (
    <div className="mt-4 flex justify-center w-full">
      <a href="#contact-form" className="block w-full md:w-auto">
        <Button
          className="
            bg-indigo-600 text-white
            hover:bg-indigo-500 hover:shadow-lg
            px-5 py-2.5 text-sm md:text-base
            rounded-full shadow-md
            transition duration-300 ease-in-out
            w-full md:w-auto whitespace-nowrap
          "
        >
          ✉️ Send us a Message
        </Button>
      </a>
    </div>
  );
}
