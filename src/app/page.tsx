import Head from "next/head";
import Footer from "@/component/sections/Footer";
import Contact from "@/component/sections/Contact";
import Project from "@/component/sections/Project";
import Skills from "@/component/sections/Skills";
import About from "@/component/sections/About";
import Navbar from "@/component/sections/Navbar";
import Hero from "@/component/sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Head>
        <title>Inggis Trisiawan | Software Engineer</title>
        <meta name="description" content="Software Engineer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main>
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
