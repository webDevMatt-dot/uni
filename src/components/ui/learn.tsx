import React from "react";
import { Button } from "./button";

export function LearnButton() {
  return (
    <div className="mt-5 w-full flex justify-center">
      <a
        href="#offerings"
        className="inline-block"
      >
        <Button
          size="lg"
          variant="outline"
          className="px-6 py-3 text-base md:text-lg rounded-md shadow-md hover:shadow-lg transition duration-300"
        >
          Learn More
        </Button>
      </a>
    </div>
  );
}
