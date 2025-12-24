"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
  glass = false,
}: CardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-2xl overflow-hidden",
        glass
          ? "bg-white/70 backdrop-blur-lg border border-white/20"
          : "bg-white shadow-lg",
        hover && "card-hover",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

// Feature Card with Icon
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  color = "bg-primary-500",
  className,
}: FeatureCardProps) {
  return (
    <Card className={cn("p-6 md:p-8", className)}>
      <>
        <div
          className={cn(
            "w-14 h-14 rounded-xl flex items-center justify-center mb-4",
            color
          )}
        >
          <span className="text-white">{icon}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </>
    </Card>
  );
}

// Value Card with Background Color
interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  className?: string;
}

export function ValueCard({
  icon,
  title,
  description,
  color,
  className,
}: ValueCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-2xl p-6 text-white overflow-hidden relative group",
        color,
        className
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12" />
      </div>
      
      <div className="relative z-10">
        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm">
          {icon}
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-white/90 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

// Stat Card
interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

export function StatCard({ value, suffix = "", label, className }: StatCardProps) {
  return (
    <motion.div
      className={cn(
        "text-center p-6",
        className
      )}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {value}{suffix}
      </div>
      <p className="text-gray-600 font-medium">{label}</p>
    </motion.div>
  );
}

// Program Card
interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  className?: string;
}

export function ProgramCard({
  title,
  description,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  image,
  category,
  className,
}: ProgramCardProps) {
  return (
    <motion.div
      className={cn(
        "group rounded-2xl overflow-hidden bg-white shadow-lg",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200">
        {/* Placeholder gradient instead of image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-primary-500/20 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-primary-500/40" />
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
