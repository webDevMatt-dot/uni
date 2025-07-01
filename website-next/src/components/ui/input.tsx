import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-2 text-sm font-semibold">{label}</label>}
      <input
        className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        {...props}
      />
    </div>
  );
};