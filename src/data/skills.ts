import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSpringboot,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiGooglecloud,
  SiVercel,
  SiSupabase,
  SiRedis,
  SiGraphql,
  SiRedux,
} from "react-icons/si";
import { BiLogoJava } from "react-icons/bi";
import { TechStack } from "@/types/techStack";
import { FaGear } from "react-icons/fa6";

interface Skill {
  category: string;
  skillList: TechStack[];
}

export const skills: Skill[] = [
  {
    category: "Frontend",
    skillList: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Zustand", icon: SiRedux },
    ],
  },
  {
    category: "Backend",
    skillList: [
      { name: "Java", icon: BiLogoJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "REST API", icon: FaGear },
      { name: "GraphQL", icon: SiGraphql },
    ],
  },
  {
    category: "Database",
    skillList: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    category: "DevOps",
    skillList: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Google Cloud Run", icon: SiGooglecloud },
      { name: "Vercel", icon: SiVercel },
      { name: "Supabase", icon: SiSupabase },
    ],
  },
];
