import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Inggis Trisiawan",
  description: "Software Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Inggis Trisiawan | Software Engineer</title>
        <meta name="description" content="Software Engineer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Navbar />

        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
