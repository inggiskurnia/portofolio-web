import { FC } from "react";
import { skills } from "@/data/skills";
import SkillCard from "@/components/cards/SkillCard";

const Skills: FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">My Skills</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive collection of technologies I work with
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map(({ category, skillList }, index) => (
            <div
              key={index}
              className="transform hover:-translate-y-2 transition-transform duration-300"
            >
              <SkillCard category={category} skillList={skillList} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
