import React, { ReactNode } from "react";
import { Navbar } from "src/components/ui/Navbar";
import { Footer } from "src/components/ui/Footer";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className="text-black fixed top-0 left-0 right-0 bg-white border-b border-gray-300 shadow-lg z-50 p-4 flex justify-between items-center">
        <Navbar />
      </header>

      {/* Add padding top to offset fixed header height */}
      <main className="pt-20">{children}</main>

      <Footer />
    </>
  );
}
