import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="mb-2">© {new Date().getFullYear()} AAT Business Solutions. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> | 
          <a href="/terms-of-service" className="hover:underline"> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};