"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Project: FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
            <div>
                 <span className="text-primary font-semibold tracking-wider uppercase text-sm">Portfolio</span>
                 <h2 className="text-3xl md:text-5xl font-bold font-heading mt-2">Selected Works</h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-lg md:text-right">
                Here are some projects I've worked on. Each one was a unique challenge.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col h-full bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <Link href={`/project/${project.slug}`} className="block w-full h-full cursor-pointer">
                    <div className="absolute inset-0 bg-primary/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"/>
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </Link>
                
                {/* Links Overlay */}
                <div className="absolute inset-0 z-20 flex pt-10 px-4 justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px] pointer-events-none">
                    <div className="flex gap-4 pointer-events-auto">
                        {project.demoUrl && (
                            <Link 
                                href={project.demoUrl} 
                                target="_blank"
                                className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                                title="Live Demo"
                            >
                                <ExternalLink size={20} />
                            </Link>
                        )}
                        {(project.frontendRepo || project.backendRepo) && (
                             <Link 
                                href={project.frontendRepo || project.backendRepo || "#"} 
                                target="_blank"
                                className="p-3 bg-black text-white border border-white/20 rounded-full hover:scale-110 transition-transform"
                                title="View Code"
                             >
                                <Github size={20} />
                             </Link>
                        )}
                    </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
                        <Link href={`/project/${project.slug}`} className="hover:underline decoration-primary underline-offset-4">
                            {project.title}
                        </Link>
                        <ArrowUpRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" size={20}/>
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                        {project.description}
                    </p>
                </div>

                <div className="mt-auto pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((tech, i) => {
                            const Icon = tech.icon;
                            return (
                                <div key={i} className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                                    {Icon && <Icon size={12}/>}
                                    <span>{tech.name}</span>
                                </div>
                            )
                        })}
                        {project.techStack.length > 4 && (
                            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                                +{project.techStack.length - 4}
                            </span>
                        )}
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <Link 
                href="https://github.com/inggiskurnia" 
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
            >
                View detailed works on GitHub <Github size={18}/>
             </Link>
        </div>
      </div>
    </section>
  );
};

export default Project;
