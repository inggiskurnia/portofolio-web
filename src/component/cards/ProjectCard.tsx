import { Project } from "@/types/project";
import { FC } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";

const ProjectCard: FC<Project> = ({
  id,
  thumbnail,
  title,
  description,
  techStackNames,
  techStackIcons,
  demoUrl,
  frontendRepo,
  backendRepo,
}) => {
  return (
    <div
      key={id}
      className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-transform hover:shadow-md hover:-translate-y-1"
    >
      <div className="h-48 bg-gray-100 relative">
        {thumbnail ? (
          <Image src={thumbnail} alt={`${title} thumbnail`} fill className="object-cover" />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-gray-400">
            No Image Available
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStackNames.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm flex items-center"
            >
              {techStackIcons && techStackIcons[index] && (
                <span className="mr-1">{techStackIcons[index]}</span>
              )}
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <FaExternalLinkAlt size={16} className="mr-1" />
              Demo
            </a>
          )}

          {frontendRepo && (
            <a
              href={frontendRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <FaGithub size={16} className="mr-1" />
              Frontend
            </a>
          )}

          {backendRepo && (
            <a
              href={backendRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <FaGithub size={16} className="mr-1" />
              Backend
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
