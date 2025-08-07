import React from "react";
import { Button } from "./button";

export function ScheduleButton() {
  return (
    <div className="mt-4 flex justify-center w-full">
      <a
        href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ28DxHcn7rNkJfGFEJ4nRx_QjwFZ1nlpt149jJaNMfdqZadaQ6FbUw5Kh2JjMEPnIsN0rsRp8hp"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full md:w-auto"
      >
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
          📅 Schedule a Consultation
        </Button>
      </a>
    </div>
  );
}
