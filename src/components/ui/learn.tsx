import React from "react";
import { Button } from "./button";

export function LearnButton() {
  return (
    <div className="mt-5 w-full">
      <a href="#offerings" className="block w-full sm:w-auto">
        <Button
          size="lg"
          variant="outline"
          className="w-full sm:w-auto py-3 text-base sm:text-lg rounded-md shadow-md hover:shadow-lg transition duration-300"
        >
          📘 Learn More
        </Button>
      </a>
    </div>
  );
}
