"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-accent/50 border border-border text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new projects
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-[1.1] mb-6 tracking-tight">
              Building <br />
              <span className="text-gradient">Digital Experiences</span>
              <br />
              That Matter.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              I'm Inggis Trisiawan, a Software Engineer passionate about crafting
              scalable applications and intuitive user interfaces with modern
              technologies.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
              >
                View My Work
                <ArrowRight size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                className="px-8 py-4 rounded-full bg-card border border-border text-foreground font-semibold flex items-center gap-2 hover:bg-accent hover:text-accent-foreground transition-all"
              >
                Download CV
                <Download size={20} />
              </motion.a>
            </div>

            <div className="flex items-center gap-6 text-muted-foreground">
              <a
                href="https://github.com/inggiskurnia"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/inggis-trisiawan"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:inggis.kurnia@gmail.com"
                className="hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Abstract decorative elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-blue-500/30 rounded-3xl blur-[60px]"
              />
              
              <div className="absolute inset-0 bg-card/50 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-2xl p-8 flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 p-10 opacity-20">
                      <div className="w-32 h-32 rounded-full bg-primary blur-3xl"/>
                  </div>
                  
                  {/* Code snippet mock */}
                  <div className="space-y-4 font-mono text-sm opacity-80">
                      <div className="flex gap-2 mb-6">
                          <div className="w-3 h-3 rounded-full bg-red-500"/>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                          <div className="w-3 h-3 rounded-full bg-green-500"/>
                      </div>
                      <div className="text-secondary-foreground">const <span className="text-primary">Developer</span> = {'{'}</div>
                      <div className="pl-4">name: <span className="text-green-400">'Inggis Trisiawan'</span>,</div>
                      <div className="pl-4">role: <span className="text-green-400">'Software Engineer'</span>,</div>
                      <div className="pl-4">skills: ['Next.js', 'React', 'TypeScript'],</div>
                      <div className="pl-4">hardWorker: <span className="text-blue-400">true</span>,</div>
                      <div className="text-secondary-foreground">{'}'};</div>
                  </div>

                  <div className="mt-8 p-4 rounded-xl bg-accent/50 border border-white/5">
                     <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                            <Code2Icon size={20}/>
                        </div>
                        <div>
                            <div className="text-sm font-semibold">Clean Code</div>
                            <div className="text-xs text-muted-foreground">Always optimized</div>
                        </div>
                     </div>
                  </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center p-1">
            <div className="w-1 h-3 rounded-full bg-muted-foreground/50"/>
        </div>
      </motion.div>
    </section>
  );
};

// Simple icon component for the card
function Code2Icon({ size }: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export default Hero;
