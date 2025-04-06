import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="text-5xl md:text-6xl font-bold">Hi👋, I&#39;m Inggis Trisiawan</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-600">Software Engineer</h2>
          <p className="text-lg mb-8 text-gray-700 leading-relaxed">
            I build exceptional and scalable web applications with modern technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-700 transition-all hover:scale-105"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-white text-gray-800 font-medium rounded-full hover:bg-gray-50 transition-all hover:scale-105 shadow-sm"
            >
              View My Work
            </a>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-gradient-to-t from-gray-100 to-transparent opacity-50" />
      </div>
    </section>
  );
};

export default Hero;
