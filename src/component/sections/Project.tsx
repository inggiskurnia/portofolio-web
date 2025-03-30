import { FC } from "react";
import { projects } from "@/data/projects";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Project: FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-transform hover:shadow-md hover:-translate-y-1"
            >
              <div className="h-48 bg-gray-100"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demoUrl}
                    className="flex items-center text-gray-700 hover:text-gray-900"
                  >
                    <FaExternalLinkAlt size={16} className="mr-1" />
                    Demo
                  </a>
                  <a
                    href={project.repoBEUrl}
                    className="flex items-center text-gray-700 hover:text-gray-900"
                  >
                    <FaGithub size={16} className="mr-1" />
                    Backend
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
