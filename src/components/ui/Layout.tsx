import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className="text-black fixed top-0 left-0 right-0 bg-white border-b border-gray-300 shadow-lg z-50 p-4 flex justify-between items-center">
      </header>

      {/* Add padding top to offset fixed header height */}
      <main className="pt-0">{children}</main>
    </>
  );
}
