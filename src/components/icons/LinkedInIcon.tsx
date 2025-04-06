import { FC } from "react";
import { FaLinkedin } from "react-icons/fa";

const LinkedInIcon: FC = () => {
  return (
    <a
      href="https://linkedin.com/in/inggis-trisiawan"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-gray-900"
    >
      <FaLinkedin size={24} />
    </a>
  );
};

export default LinkedInIcon;
