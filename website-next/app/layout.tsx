import React from "react";
import { Navbar } from "src/components/ui/Navbar";
import { Footer } from "src/components/ui/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}