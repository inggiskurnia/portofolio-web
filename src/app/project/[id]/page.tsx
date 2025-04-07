"use client";

import { projects } from "@/data/projects";
import { useParams } from "next/navigation";
import { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const ProjectPage: FC = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">{project.title}</h1>

        {/* Tech Stack */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Project Links */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project Links</h2>
          <div className="flex gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Live Demo
              </a>
            )}
            {project.frontendRepo && (
              <a
                href={project.frontendRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Frontend Repository
              </a>
            )}
            {project.backendRepo && (
              <a
                href={project.backendRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Backend Repository
              </a>
            )}
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
          <p className="text-gray-700 whitespace-pre-wrap">{project.description}</p>
        </div>

        {/* Screenshots */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {project.screenshots?.map((screenshot, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
