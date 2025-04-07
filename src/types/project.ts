import { TechStack } from "@/types/techStack";

export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  techStack: TechStack[];
  demoUrl: string;
  backendRepo?: string;
  frontendRepo: string;
  screenshots?: string[]; // Add this new field
  detailedDescription?: string; // Optional longer description
}
