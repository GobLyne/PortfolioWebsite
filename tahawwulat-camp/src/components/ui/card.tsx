"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "gold" | "teal" | "none";
}

export function Card({ children, className, hover = true, glow = "none" }: CardProps) {
  const glowStyles = {
    gold: "hover:shadow-[0_0_40px_-10px_rgba(212,168,83,0.3)]",
    teal: "hover:shadow-[0_0_40px_-10px_rgba(20,184,166,0.3)]",
    none: "",
  };

  return (
    <motion.div
      className={cn(
        "rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6",
        hover && "transition-all duration-300 hover:-translate-y-1",
        glowStyles[glow],
        className
      )}
      whileHover={hover ? { y: -5 } : undefined}
    >
      {children}
    </motion.div>
  );
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6",
        className
      )}
    >
      {children}
    </div>
  );
}
