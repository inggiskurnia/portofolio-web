import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSpringboot,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiRedis,
  SiGraphql,
  SiNeo4J,
  SiNestjs,
  SiNginx,
  SiUbuntu,
  SiVuedotjs,
  SiRefine,
  SiGrafana,
  SiGithubactions,
  SiApachekafka,
} from "react-icons/si";
import { BiLogoJava } from "react-icons/bi";
import { TechStack } from "@/types/techStack";
import { FaGear } from "react-icons/fa6";
import { TbBrandAzure } from "react-icons/tb";

interface Skill {
  category: string;
  skillList: TechStack[];
}

export const skills: Skill[] = [
  {
    category: "Frontend",
    skillList: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Refine", icon: SiRefine },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "Backend",
    skillList: [
      { name: "Java", icon: BiLogoJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Nest.js", icon: SiNestjs },
      { name: "Kafka", icon: SiApachekafka },
      { name: "Grafana", icon: SiGrafana },
      { name: "REST API", icon: FaGear },
      { name: "GraphQL", icon: SiGraphql },
    ],
  },
  {
    category: "Database",
    skillList: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Neo4j", icon: SiNeo4J },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    category: "DevOps",
    skillList: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Azure", icon: TbBrandAzure },
      { name: "Ubuntu", icon: SiUbuntu },
      { name: "Nginx", icon: SiNginx },
      { name: "Github Action", icon: SiGithubactions },
    ],
  },
];
