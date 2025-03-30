import { FC } from "react";
import Image from "next/image";
import { Download } from "lucide-react";

const Hero: FC = () => {
  return (
    <section className="min-h-[calc(100svh-100px)] flex justify-center items-center p-4">
      <div className="text-center max-w-xl space-y-8 text-gray-800">
        <div className={"flex justify-center items-center"}>
          <Image
            src={"/images/pas-foto.jpg"}
            alt={"pas foto"}
            width={150}
            height={150}
            className={"rounded-full"}
          />
        </div>

        <h1 className="text-2xl font-semibold">👋 Hi, I&#39;m Inggis</h1>
        <h2 className="text-4xl font-semibold">Software Engineer based in Jakarta, Indonesia</h2>
        <p className="text-lg text-gray-500">
          I specialize in building reliable and efficient software, focusing on writing clean code,
          improving performance, and following best practices in software development.
        </p>
        <div className={"flex gap-16 justify-center h-12"}>
          <button
            className={
              "bg-black rounded-2xl text-white p-4 w-40 cursor-pointer items-center flex justify-center"
            }
          >
            Hire me
          </button>
          <button className={"flex gap-4 justify-center items-center cursor-pointer"}>
            Download CV
            <Download />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
