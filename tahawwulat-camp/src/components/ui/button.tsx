"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function Button({ 
  variant = "primary", 
  size = "md", 
  children, 
  href, 
  className,
  onClick 
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-full cursor-pointer";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-gold to-gold-dark text-black hover:shadow-[0_10px_30px_-10px_rgba(212,168,83,0.5)]",
    secondary:
      "border-2 border-gold text-gold hover:bg-gold/10",
    ghost:
      "text-foreground hover:text-gold hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={cn(baseStyles, variantStyles[variant], sizes[size], className)}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={cn(baseStyles, variantStyles[variant], sizes[size], className)}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
