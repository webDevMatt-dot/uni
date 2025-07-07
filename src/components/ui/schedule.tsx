import React from "react";
import { Button } from "./button";

export function ScheduleButton() {
  return (
    <div className="mt-5 w-full flex justify-center">
      <a
        href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ28DxHcn7rNkJfGFEJ4nRx_QjwFZ1nlpt149jJaNMfdqZadaQ6FbUw5Kh2JjMEPnIsN0rsRp8hp"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <Button className="px-6 py-3 text-base md:text-lg rounded-md shadow-md hover:shadow-lg transition duration-300">
          Schedule a Consultation
        </Button>
      </a>
    </div>
  );
}
