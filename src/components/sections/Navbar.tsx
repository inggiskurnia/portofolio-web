"use client";

import { FC, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-sm bg-white/70 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <span className="font-bold text-2xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                IT
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {["about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`/#${item}`}
                className="text-gray-600 hover:text-gray-900 capitalize relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/#about"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/#skills"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="/#projects"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="/#contact"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
