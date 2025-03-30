import { Project } from "@/types/project";
import {
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiReact,
  SiSpringboot,
  SiPostgresql,
} from "react-icons/si";
import { BiLogoJava } from "react-icons/bi";

export const projects: Project[] = [
  {
    id: 1,
    title: "Ticketing E-commerce",
    description:
      "An online ticket booking system where users can browse events, purchase tickets, and receive digital confirmations. Includes user authentication, payment integration, and QR-based ticket validation.",
    thumbnail: "",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Java", icon: BiLogoJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    demoUrl: "https://dti-eventure.vercel.app/",
    backendRepo: "https://github.com/inggiskurnia/dti-minpro-be",
    frontendRepo: "https://github.com/inggiskurnia/dti-minpro-fe",
  },
  {
    id: 2,
    title: "Multi-Storage E-commerce",
    description:
      "A logistics-driven e-commerce platform that optimizes deliveries using multiple warehouses. Automatically routes orders to the nearest location and calculates shipping costs based on distance.",
    thumbnail: "",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Firebase", icon: SiFirebase },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "React", icon: SiReact },
    ],
    demoUrl: "https://warehub.vercel.app",
    backendRepo: "https://github.com/inggiskurnia/dti-fp-backend",
    frontendRepo: "https://github.com/inggiskurnia/dti-fp-frontend",
  },
  {
    id: 3,
    title: "Company Landing Page",
    description:
      "A professional landing page for an investment firm, showcasing its portfolio, investment strategy, and market insights. Features real-time data visualization, dynamic content management, and an intuitive UI.",
    thumbnail: "",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Firebase", icon: SiFirebase },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "React DnD", icon: SiReact },
    ],
    demoUrl: "https://syncona.vercel.app",
    frontendRepo: "https://github.com/inggiskurnia/dti-syncona",
  },
];
