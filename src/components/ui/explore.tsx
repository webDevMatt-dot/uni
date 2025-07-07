import React from "react";
import { Button } from "./button";

export function ExploreButton() {
  return (
    <div className="mt-5 w-full">
      <a href="#services" className="block w-full md:w-auto">
        <Button className="w-full md:w-auto py-3 text-base md:text-lg rounded-md shadow-md hover:shadow-lg transition duration-300">
          🔍 Explore Our Services
        </Button>
      </a>
    </div>
  );
}
