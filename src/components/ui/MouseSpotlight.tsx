"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseSpotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for x and y
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        // Center the 400px circle on the cursor
        mouseX.set(e.clientX - 200);
        mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
        {/* Core Glow - Subtle Anchor */}
        <motion.div
            className="fixed z-0 pointer-events-none rounded-full blur-[80px]"
            style={{
                width: 300,
                height: 300,
                x: springX,
                y: springY,
                backgroundColor: "oklch(0.45 0.18 260 / 0.08)", // Very subtle base
                mixBlendMode: "multiply",
            }}
        />
        
        {/* Rotating Aurora Ring - Ethereal & Slow */}
        <motion.div
            className="fixed z-0 pointer-events-none rounded-full opacity-20 blur-[60px]"
            style={{
                width: 350,
                height: 350,
                x: springX,
                y: springY,
                mixBlendMode: "multiply",
                background: "conic-gradient(from 0deg, transparent 0deg, oklch(0.45 0.18 260) 90deg, oklch(0.6 0.15 240) 180deg, transparent 360deg)",
            }}
            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
            transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" }, // Much slower
                scale: { duration: 10, repeat: Infinity, ease: "easeInOut" } // Slower pulse
            }}
        />
    </>
  );
}
