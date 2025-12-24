"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  href,
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg hover:shadow-xl hover:shadow-primary-500/30 hover:from-primary-600 hover:to-primary-700",
    secondary: "bg-white text-primary-600 border-2 border-primary-500 hover:bg-primary-50 shadow-md hover:shadow-lg",
    accent: "bg-gradient-to-r from-secondary-400 to-secondary-500 text-white shadow-lg hover:shadow-xl hover:shadow-secondary-500/30 hover:from-secondary-500 hover:to-secondary-600",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white/10",
  };

  const sizes = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg",
  };

  const buttonContent = (
    <motion.span
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className="inline-block">
      {buttonContent}
    </button>
  );
}

// Icon Button Component
interface IconButtonProps {
  icon: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  label: string;
}

export function IconButton({
  icon,
  variant = "ghost",
  size = "md",
  className,
  onClick,
  href,
  label,
}: IconButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-full transition-all duration-300";
  
  const variants = {
    primary: "bg-primary-500 text-white hover:bg-primary-600",
    secondary: "bg-white text-primary-600 border border-primary-200 hover:bg-primary-50",
    ghost: "text-gray-600 hover:bg-gray-100 hover:text-primary-600",
  };

  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const content = (
    <motion.span
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={label}
    >
      {icon}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block" aria-label={label}>
      {content}
    </button>
  );
}
