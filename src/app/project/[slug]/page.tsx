"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects } from "@/data/projects";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const ProjectPage: FC = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
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
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-foreground">Project not found</h1>
          <a href="/#projects" className="text-primary hover:underline mt-4 block">Return to Portfolio</a>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 border-b border-border pb-8">
            <a href="/#projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-6 transition-colors">
                <span className="mr-2">←</span> Back to Projects
            </a>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
            {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                {project.description}
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content (Left Column) */}
            <div className="lg:col-span-2 space-y-12">
                {/* Screenshots Carousel */}
                <div className="rounded-2xl border border-border/50 bg-secondary/20 p-4 shadow-sm">
                    <Carousel setApi={setApi} className="w-full">
                        <CarouselContent>
                        {project.screenshots?.map((screenshot, index) => (
                            <CarouselItem key={index}>
                            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-white shadow-inner">
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
                        <div className="flex justify-center mt-4 gap-2">
                             {Array.from({ length: count }).map((_, i) => (
                                <button
                                    key={i}
                                    className={`w-2 h-2 rounded-full transition-all ${i + 1 === current ? "bg-primary w-6" : "bg-muted-foreground/30"}`}
                                    onClick={() => api?.scrollTo(i)}
                                />
                             ))}
                        </div>
                        <CarouselPrevious className="left-2 bg-white/80 hover:bg-white text-foreground" />
                        <CarouselNext className="right-2 bg-white/80 hover:bg-white text-foreground" />
                    </Carousel>
                </div>
                
                {project.features && project.features.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold font-heading mb-6 text-foreground">Key Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.features.map((feature, index) => (
                                <div key={index} className="flex items-start p-4 rounded-lg bg-secondary/30 border border-border/50">
                                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3"/>
                                    <span className="text-muted-foreground leading-relaxed">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Sidebar (Right Column) */}
            <div className="space-y-8">
                 {/* Links */}
                 <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
                    <h3 className="text-lg font-bold font-heading mb-4 text-foreground">Project Links</h3>
                    <div className="flex flex-col gap-3">
                        {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 p-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
                        >
                            <FaExternalLinkAlt size={16} />
                            View Live Demo
                        </a>
                        )}
                        <div className="grid grid-cols-2 gap-3">
                            {project.frontendRepo && (
                            <a
                                href={project.frontendRepo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 p-3 rounded-lg border border-border bg-white hover:bg-secondary/50 text-foreground transition-all"
                            >
                                <FaGithub size={18} />
                                Frontend
                            </a>
                            )}
                            {project.backendRepo && (
                            <a
                                href={project.backendRepo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 p-3 rounded-lg border border-border bg-white hover:bg-secondary/50 text-foreground transition-all"
                            >
                                <FaGithub size={18} />
                                Backend
                            </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
                    <h3 className="text-lg font-bold font-heading mb-4 text-foreground">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map(({ name, icon: Icon }, index) => (
                        <div
                            key={index}
                            className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium flex items-center gap-2 transition-colors hover:bg-secondary/80 border border-border/50"
                        >
                            {Icon && <Icon size={16} className="text-primary" />}
                            {name}
                        </div>
                        ))}
                    </div>
                </div>

                {/* Description (About) */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary/30 to-background border border-border/50">
                    <h3 className="text-lg font-bold font-heading mb-3 text-foreground">About</h3>
                     <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
