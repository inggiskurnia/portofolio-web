import { FC } from "react";
import Image from "next/image";

const About: FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
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
          <div className="md:w-2/3 text-gray-700 space-y-6 text-lg">
            <p>
              Software Engineer in transition with over five years of engineering experience in
              control systems.
            </p>
            <p>
              A self-driven individual with a high degree of curiosity and a passion for solving
              both technical and non-technical challenges using a &#34;can-do approach.&#34;
            </p>
            <p>
              Proven in managing complex projects, developing comprehensive technical documentation,
              and resolving intricate problems.
            </p>
            <p>
              Currently honing software expertise through an intensive fullstack development
              bootcamp in Purwadhika, and eager to leverage a strong background in automation and
              system design to build scalable, innovative software solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
