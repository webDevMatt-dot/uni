import React from "react";
import { Button } from "./button";

export function ExploreButton() {
  return (
    <div className="mt-4 flex justify-center w-full">
      <a href="#services" className="inline-block w-full md:w-auto">
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
          🔍 Explore Our Services
        </Button>
      </a>
    </div>
  );
}
