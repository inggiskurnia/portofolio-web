import { FC } from "react";
import Image from "next/image";

const About: FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">About Me</h2>
        <div className="md:flex md:items-center md:space-x-12">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <Image
              src={"/images/pas-foto.jpg"}
              alt={"pas foto"}
              width={200}
              height={200}
              className={"rounded-full"}
            />
          </div>
          <div className="md:w-2/3 text-gray-700">
            <p className="text-lg mb-6">
              I'm a passionate Software Engineer with over 5 years of experience in building web
              applications and services. My journey in software development began with a curiosity
              for creating interactive websites, which evolved into a career focused on building
              scalable and performant applications.
            </p>
            <p className="text-lg mb-6">
              I specialize in full-stack development using modern JavaScript frameworks like React
              and Next.js for the frontend, and Node.js/Express for the backend. I'm also
              experienced with database design and management, as well as deploying applications to
              cloud platforms.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge through technical blog posts and
              mentoring junior developers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
