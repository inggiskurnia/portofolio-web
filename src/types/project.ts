import { TechStack } from "@/types/techStack";

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  techStack: TechStack[];
  demoUrl: string;
  backendRepo?: string;
  frontendRepo: string;
  screenshots?: string[];
  detailedDescription?: string;
  features?: string[];
}
