import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Project from "@/components/sections/Project";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Hero />
      <Project />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
