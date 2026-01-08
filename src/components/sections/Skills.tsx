"use client";

import { skills } from "@/data/skills";
import { motion } from "framer-motion";
import { FC } from "react";

const Skills: FC = () => {
    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 },
    };

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-2 mb-6">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
             A comprehensive toolkit of modern technologies I use to build robust and scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, idx) => (
            <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
            >
              <div className="h-full bg-card hover:bg-accent/30 border border-border/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-6 pb-4 border-b border-border/50 flex items-center justify-between">
                    {category.category}
                    <span className="text-xs font-normal px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {category.skillList.length} items
                    </span>
                </h3>
                
                <motion.div 
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-4"
                >
                  {category.skillList.map((skill, skillIdx) => {
                    const Icon = skill.icon;
                    return (
                        <motion.div
                            key={skillIdx}
                            variants={item}
                            className="flex flex-col items-center justify-center p-3 rounded-xl bg-background/50 border border-border/30 hover:border-primary/50 hover:bg-primary/5 transition-colors group/skill"
                        >
                        <div className="text-3xl text-muted-foreground group-hover/skill:text-primary transition-colors mb-2">
                            {Icon && <Icon />}
                        </div>
                        <span className="text-sm font-medium text-center truncate w-full">
                            {skill.name}
                        </span>
                        </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
