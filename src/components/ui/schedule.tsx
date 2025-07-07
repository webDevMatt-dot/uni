import React from "react";
import { Button } from "./button";

export function ScheduleButton() {
  return (
    <div className="mt-5">
          <a
      href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ28DxHcn7rNkJfGFEJ4nRx_QjwFZ1nlpt149jJaNMfdqZadaQ6FbUw5Kh2JjMEPnIsN0rsRp8hp"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full"
    >
      <Button className="w-full py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
        Schedule A Consultation
      </Button>
    </a>
    </div>

  );
}
