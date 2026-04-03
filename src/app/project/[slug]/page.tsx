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
import Link from "next/link";
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
  const [fullscreenApi, setFullscreenApi] = useState<CarouselApi>();
  const [fullscreenCurrent, setFullscreenCurrent] = useState(0);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [fullscreenStartIndex, setFullscreenStartIndex] = useState(0);

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

  useEffect(() => {
    if (!fullscreenApi) {
      return;
    }

    setFullscreenCurrent(fullscreenApi.selectedScrollSnap() + 1);

    fullscreenApi.on("select", () => {
      setFullscreenCurrent(fullscreenApi.selectedScrollSnap() + 1);
    });
  }, [fullscreenApi]);

  useEffect(() => {
    if (!isFullscreenOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsFullscreenOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullscreenOpen]);

  const openFullscreenCarousel = (index: number) => {
    setFullscreenStartIndex(index);
    setFullscreenCurrent(index + 1);
    setIsFullscreenOpen(true);
  };

  if (!project) {
    return (
      <div className="relative z-10 min-h-screen pt-32 flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-foreground">Project not found</h1>
          <Link href="/#projects" className="text-primary hover:underline mt-4 block">
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10 pt-32 pb-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 border-b border-border pb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <span className="mr-2">←</span> Back to Projects
          </Link>
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
                      <button
                        type="button"
                        onClick={() => openFullscreenCarousel(index)}
                        className="relative block aspect-[16/9] w-full overflow-hidden rounded-xl bg-white shadow-inner transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        aria-label={`Open screenshot ${index + 1} in fullscreen`}
                      >
                        <Image
                          src={screenshot}
                          alt={`${project.title} screenshot ${index + 1}`}
                          fill
                          className="object-contain"
                          priority={index === 0}
                        />
                      </button>
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
                <h2 className="text-2xl font-bold font-heading mb-6 text-foreground">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 rounded-lg bg-secondary/30 border border-border/50"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3" />
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
                {!project.demoUrl &&
                  !project.frontendRepo &&
                  !project.backendRepo &&
                  project.confidential && (
                    <div className="flex items-center justify-center p-3 rounded-lg border border-dashed border-border bg-secondary/30 text-muted-foreground font-medium">
                      Confidential
                    </div>
                  )}
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
          </div>
        </div>
      </div>

      {isFullscreenOpen && project.screenshots && project.screenshots.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} screenshot gallery`}
          onClick={() => setIsFullscreenOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsFullscreenOpen(false)}
              className="absolute right-0 top-0 z-10 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              Close
            </button>

            <Carousel
              setApi={setFullscreenApi}
              opts={{ startIndex: fullscreenStartIndex }}
              className="w-full"
            >
              <CarouselContent>
                {project.screenshots.map((screenshot, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-black">
                      <Image
                        src={screenshot}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-contain"
                        sizes="100vw"
                        priority={index === fullscreenStartIndex}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="mt-4 text-center text-sm text-white/80">
                {fullscreenCurrent} / {project.screenshots.length}
              </div>

              <CarouselPrevious className="left-3 bg-white/15 text-white hover:bg-white/25 disabled:bg-white/5" />
              <CarouselNext className="right-3 bg-white/15 text-white hover:bg-white/25 disabled:bg-white/5" />
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
