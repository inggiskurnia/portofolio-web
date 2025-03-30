import { FC } from "react";
import { skills } from "@/data/skills";

const Skills: FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">My Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Frontend</h3>
            <ul className="space-y-2">
              {skills.frontend.map((skill, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="mr-2 text-gray-400">•</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Backend</h3>
            <ul className="space-y-2">
              {skills.backend.map((skill, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="mr-2 text-gray-400">•</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Database</h3>
            <ul className="space-y-2">
              {skills.database.map((skill, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="mr-2 text-gray-400">•</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">DevOps</h3>
            <ul className="space-y-2">
              {skills.devops.map((skill, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="mr-2 text-gray-400">•</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
