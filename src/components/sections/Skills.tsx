import { FC } from "react";
import { skills } from "@/data/skills";
import SkillCard from "@/components/cards/SkillCard";

const Skills: FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">My Skills</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map(({ category, skillList }, index) => (
            <SkillCard key={index} category={category} skillList={skillList} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
