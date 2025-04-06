import { FC } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/cards/ProjectCard";

const Project: FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              thumbnail={project.thumbnail}
              techStack={project.techStack}
              demoUrl={project.demoUrl}
              frontendRepo={project.frontendRepo}
              backendRepo={project.backendRepo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
