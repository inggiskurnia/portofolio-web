"use client";

import { projects } from "@/data/projects";
import { useParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectPage: FC = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="pt-24 pb-4 md:pb-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-gray-800 border-b pb-4">
          {project.title}
        </h1>

        {/* Tech Stack */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map(({ name, icon: Icon }, index) => (
              <span
                key={index}
                className="px-2 md:px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-xs md:text-sm flex items-center hover:bg-gray-100 transition-colors"
              >
                {Icon && <Icon size={14} className="mr-1" />}
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Project Links */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Project Links</h2>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm md:text-base text-gray-700 hover:text-gray-900 hover:underline"
              >
                <FaExternalLinkAlt size={14} className="mr-1" />
                Live Demo
              </a>
            )}
            {project.frontendRepo && (
              <a
                href={project.frontendRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm md:text-base text-gray-700 hover:text-gray-900 hover:underline"
              >
                <FaGithub size={14} className="mr-1" />
                Frontend Repository
              </a>
            )}
            {project.backendRepo && (
              <a
                href={project.backendRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm md:text-base text-gray-700 hover:text-gray-900 hover:underline"
              >
                <FaGithub size={14} className="mr-1" />
                Backend Repository
              </a>
            )}
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">About the Project</h2>
          <p className="text-sm md:text-base text-gray-700 whitespace-pre-wrap">
            {project.description}
          </p>
        </div>

        {project.features && project.features.length > 0 && (
          <div className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Features</h2>
            <ul className="text-sm md:text-base text-gray-700 whitespace-pre-wrap pl-4">
              {project.features?.map((feature, index) => (
                <li key={index} className="mb-2 flex items-start">
                  <span className="mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Screenshots */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Screenshots</h2>
          <Carousel
            setApi={setApi}
            className="w-full mx-auto bg-white p-2 md:p-4 mb-4 rounded-lg shadow-sm"
          >
            <CarouselContent>
              {project.screenshots?.map((screenshot, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[16/9] rounded-md overflow-hidden">
                    <Image
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-white/90 hover:bg-white" />
            <CarouselNext className="hidden md:flex bg-white/90 hover:bg-white" />
          </Carousel>
          <div className="py-2 text-center text-xs md:text-sm text-muted-foreground">
            Slide {current} of {count}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
