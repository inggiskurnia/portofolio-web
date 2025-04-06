import Head from "next/head";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";
import Project from "@/components/sections/Project";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Head>
        <title>Inggis Trisiawan | Software Engineer</title>
        <meta name="description" content="Software Engineer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className="p-3">
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
