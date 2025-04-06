import { FC } from "react";
import { FaGithub } from "react-icons/fa";

const GitHubIcon: FC = () => {
  return (
    <a
      href="https://github.com/inggiskurnia"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-gray-900"
    >
      <FaGithub size={24} />
    </a>
  );
};

export default GitHubIcon;
