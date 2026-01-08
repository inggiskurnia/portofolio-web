import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import MouseSpotlight from "@/components/ui/MouseSpotlight";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inggis Trisiawan",
  description: "Software Engineering Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} bg-background min-h-screen relative`}>
        <div className="fixed inset-0 bg-grid z-[-1] pointer-events-none" />
        <div className="ambient-glow" />
        <MouseSpotlight />
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
