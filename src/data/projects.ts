import { Project } from "@/types/project";
import { SiNextdotjs, SiTailwindcss, SiReact, SiSpringboot, SiPostgresql } from "react-icons/si";
import { BiLogoJava } from "react-icons/bi";

export const projects: Project[] = [
  {
    id: 1,
    title: "Ticketing E-commerce",
    description:
      "An online ticket booking system where users can browse events, purchase tickets. Includes user authentication, and authorization",
    thumbnail: "/images/eventure.jpg",
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
      "A multi warehouses e-commerce system where each order automatically routes to the nearest location and calculates shipping costs based on distance. Integrate with payment gateway Midtrans",
    thumbnail: "/images/warehub.jpg",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Java", icon: BiLogoJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    demoUrl: "https://warehub.vercel.app",
    backendRepo: "https://github.com/inggiskurnia/dti-fp-backend",
    frontendRepo: "https://github.com/inggiskurnia/dti-fp-frontend",
    screenshots: [
      "/images/warehub/category.jpg",
      "/images/warehub/category_edit.jpg",
      "/images/warehub/category_delete.jpg",
      "/images/warehub/product.jpg",
      "/images/warehub/product_edit.jpg",
      "/images/warehub/product_delete.jpg",
      "/images/warehub/product_view.jpg",
      "/images/warehub/inventory.jpg",
      "/images/warehub/inventory_edit.jpg",
      "/images/warehub/inventory_delete.jpg",
      "/images/warehub/mutation_inbound.jpg",
      "/images/warehub/mutation_outbond.jpg",
      "/images/warehub/mutation_adjustment.jpg",
      "/images/warehub/report_mutation.jpg",
      "/images/warehub/report_sales.jpg",
      "/images/warehub/user_dashboard.jpg",
      "/images/warehub/user_dashboard_address.jpg",
      "/images/warehub/user_dashboard_product.jpg",
    ],
  },
  {
    id: 3,
    title: "Company Landing Page",
    description:
      "A professional landing page for an investment firm, showcasing its portfolio, investment strategy, and market insights. Features real-time data visualization, dynamic content management, and an intuitive UI.",
    thumbnail: "/images/syncona.png",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    demoUrl: "https://syncona.vercel.app",
    frontendRepo: "https://github.com/inggiskurnia/dti-syncona",
  },
];
