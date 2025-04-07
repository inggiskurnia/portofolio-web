import Contact from "@/components/sections/Contact";
import Project from "@/components/sections/Project";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <main className="px-3">
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>
    </div>
  );
}
