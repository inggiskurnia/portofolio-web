import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 border-b">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi👋, I&#39;m Inggis Trisiawan</h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-600">Software Engineer</h2>
          <p className="text-lg mb-8 text-gray-700">
            I build exceptional and scalable web applications with modern technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-transparent border border-gray-800 text-gray-800 font-medium rounded-md hover:bg-gray-50 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
