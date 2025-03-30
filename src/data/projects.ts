import { Project } from "@/types/project";

export const projects: Project = [
  {
    id: 1,
    title: "Ticketing E-commerce",
    description:
      "An online ticket booking system that allows users to browse events, purchase tickets, and receive digital confirmations.",
    thumbnail: "",
    techStackNames: ["Next.js", "React", "Tailwind CSS", "Java", "Spring Boot", "PostgreSQL"],
    techStackIcons: [""],
    demoUrl: "https://dti-eventure.vercel.app/",
    backendRepo: "https://github.com/inggiskurnia/dti-minpro-be",
    frontendRepo: "https://github.com/inggiskurnia/dti-minpro-fe",
  },
  {
    id: 2,
    title: "Multi Storage E-commerce",
    description:
      "A web application that optimizes delivery by using multiple warehouses, automatically routing orders to the nearest location, and calculating shipping costs based on distance.",
    techStackNames: ["Next.js", "Firebase", "Tailwind CSS", "React DnD"],
    demoUrl: "warehub.vercel.app",
    backendRepo: "",
    frontendRepo: "#",
  },
];
