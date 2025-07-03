import React from "react";
import Head from "next/head";
import { Navbar } from "src/components/ui/Navbar";
import { Card, CardContent } from "src/components/ui/card";
import { Footer } from "src/components/ui/Footer";
import { TeamGallery } from "src/components/ui/TeamGallery";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | AAT Business Solutions</title>
      </Head>

      <Navbar />

    </>
  );
}
