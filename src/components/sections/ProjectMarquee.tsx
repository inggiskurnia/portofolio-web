import { FC } from "react";
import Image from "next/image";
import { ProjectImageList1, ProjectImageList2 } from "@/data/projectImages";

const ProjectMarquee: FC = function () {
  return (
    <>
      <div className="relative">
        <div className="flex items-center gap-10 overflow-hidden">
          <div className="flex animate-marqueeLeft gap-10">
            {ProjectImageList1.map((page, index) => (
              <div
                key={index}
                className="w-[450px] h-[300px] flex items-center justify-center bg-gray-100"
              >
                <Image
                  src={page.path}
                  alt={`Page ${index + 1}`}
                  width={420}
                  height={280}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <div className="flex animate-marqueeLeft gap-10">
            {ProjectImageList1.map((page, index) => (
              <div
                key={index}
                className="w-[440px] h-[300px] flex items-center justify-center bg-gray-100"
              >
                <Image
                  src={page.path}
                  alt={`Page ${index + 1}`}
                  width={420}
                  height={280}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-10 overflow-hidden">
        <div className="flex animate-marqueeRight gap-10">
          {ProjectImageList2.map((page, index) => (
            <div
              key={index}
              className="w-[440px] h-[300px] flex items-center justify-center bg-gray-100"
            >
              <Image
                src={page.path}
                alt={`Page ${index + 1}`}
                width={420}
                height={280}
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <div className="flex animate-marqueeRight gap-10">
          {ProjectImageList2.map((page, index) => (
            <div
              key={index}
              className="w-[440px] h-[300px] flex items-center justify-center bg-gray-100"
            >
              <Image
                src={page.path}
                alt={`Page ${index + 1}`}
                width={420}
                height={280}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectMarquee;
