import React from "react";
import { Button } from "./button";

export function LearnButton() {
  return (
    <div className="mt-5">
        <a href="#offerings">
        <Button size="lg" variant="outline" className="rounded-md shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
            Learn More
        </Button>
        </a>
    </div>

  );
}
