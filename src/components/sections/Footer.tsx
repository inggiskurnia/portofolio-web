import { FC } from "react";
import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import MailIcon from "@/components/icons/MailIcon";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between space-y-4">
          <p className="mt-2 text-gray-600 text-center">
            © {new Date().getFullYear()} Inggis Trisiawan. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end space-x-6">
            <GitHubIcon />
            <LinkedInIcon />
            <MailIcon />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
