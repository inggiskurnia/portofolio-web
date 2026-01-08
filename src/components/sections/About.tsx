"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

const About: FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"/>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"/>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"/>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96">
                <div className="absolute inset-0 border-2 border-primary/20 rounded-[2rem] rotate-6"/>
                <div className="absolute inset-0 border-2 border-primary/20 rounded-[2rem] -rotate-6"/>
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl">
                    <Image
                      src="/images/pas-foto.jpg"
                      alt="Inggis Trisiawan"
                      fill
                      className="object-cover"
                    />
                </div>
            </div>
          </motion.div>

          {/* Right Column: Timeline/Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                 <p>
                  Hello! I'm Inggis, a Software Engineer in transition with over five years of engineering experience in control systems. 
                  I decided to pivot into software engineering because I have a deep curiosity for how things work on the web.
                 </p>
                 <p>
                  I apply a &quot;can-do approach&quot; to solving both technical and non-technical challenges. 
                  My background in automation and system design helps me build scalable, innovative software solutions.
                 </p>
            </div>

            <div className="pt-8 space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
                    <div className="p-3 bg-primary/10 text-primary rounded-lg">
                        <GraduationCap size={24}/>
                    </div>
                    <div>
                        <h4 className="font-bold text-foreground">Purwadhika Digital Technology School</h4>
                        <p className="text-sm text-muted-foreground">Full Stack Development Bootcamp</p>
                        <p className="text-sm text-muted-foreground mt-1">Honing software expertise through intensive training.</p>
                    </div>
                </div>
            </div>

            <div className="pt-4">
                <div className="flex flex-wrap gap-3">
                    {["Problem Solving", "System Design", "Automation", "Full Stack Development"].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
