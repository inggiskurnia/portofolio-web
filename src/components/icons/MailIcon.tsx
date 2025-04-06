import { FC } from "react";
import { FaEnvelope } from "react-icons/fa";

const MailIcon: FC = () => {
  return (
    <a
      href="mailto:inggiskurnia32@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-gray-900"
    >
      <FaEnvelope size={24} />
    </a>
  );
};

export default MailIcon;
