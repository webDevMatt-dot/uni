import React, { ReactNode } from "react";

type ScheduleButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

export const ScheduleButton = ({ onClick, children }: ScheduleButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};
