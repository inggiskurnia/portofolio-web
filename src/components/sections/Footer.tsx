"use client";

import { Github, Heart, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
    const socialLinks = [
        { icon: Github, href: "https://github.com/inggiskurnia", label: "GitHub" },
        { icon: Linkedin, href: "https://linkedin.com/in/inggis-trisiawan", label: "LinkedIn" },
        { icon: Mail, href: "mailto:inggis.kurnia@gmail.com", label: "Email" },
    ];

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start">
                 <span className="font-heading font-bold text-xl tracking-tight mb-2">Inggis<span className="text-primary">.dev</span></span>
                 <p className="text-muted-foreground text-sm flex items-center gap-1">
                    Made with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse"/> in Indonesia
                 </p>
                 <p className="text-muted-foreground text-sm mt-1">
                    © {new Date().getFullYear()} Inggis Trisiawan.
                 </p>
            </div>

            <div className="flex items-center gap-6">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                    <Link
                        key={label}
                        href={href}
                        target="_blank"
                        aria-label={label}
                        className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                    >
                        <Icon size={20} />
                    </Link>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
