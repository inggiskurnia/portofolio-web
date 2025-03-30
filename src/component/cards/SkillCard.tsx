import { FC } from "react";
import { TechStack } from "@/types/techStack";

interface SkillCardProps {
  category: string;
  skillList: TechStack[];
}

const SkillCard: FC<SkillCardProps> = ({ category, skillList }) => {
  return (
    <div key={category} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 capitalize">{category}</h3>
      <ul className="space-y-2">
        {skillList.map((skill, index) => (
          <li key={index} className="flex items-center text-gray-700">
            {skill.icon && <span className="mr-2 text-gray-500">{<skill.icon size={20} />}</span>}
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
