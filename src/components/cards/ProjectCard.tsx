import { Project } from "@/types/project";
import { FC } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ProjectCard: FC<Project> = ({
  id,
  thumbnail,
  title,
  slug,
  description,
  techStack,
  demoUrl,
  frontendRepo,
  backendRepo,
}) => {
  return (
    <div
      key={id}
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <Link href={`/project/${slug}`}>
        <div className="h-48 bg-gray-100 relative overflow-hidden">
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt={`${title} thumbnail`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-gray-400">
              No Image Available
            </div>
          )}
        </div>
      </Link>

      <div className="p-6">
        <Link href={`/project/${slug}`}>
          <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-gray-600 transition-colors">
            {title}
          </h3>
        </Link>

        <p className="text-gray-700 mb-4 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map(({ name, icon: Icon }, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm flex items-center hover:bg-gray-100 transition-colors"
            >
              {Icon && <Icon size={16} className="mr-1" />}
              {name}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-4 border-t">
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
