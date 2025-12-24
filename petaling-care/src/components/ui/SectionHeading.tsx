"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2
        className={cn(
          "heading-lg mb-4",
          light ? "text-white" : "text-gray-800"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "body-lg max-w-3xl",
            centered && "mx-auto",
            light ? "text-white/80" : "text-gray-600"
          )}
        >
          {subtitle}
        </p>
      )}
      {/* Decorative Line */}
      <motion.div
        className={cn(
          "h-1 w-20 mt-6 rounded-full",
          centered && "mx-auto",
          light
            ? "bg-gradient-to-r from-white/50 to-secondary-400"
            : "bg-gradient-to-r from-primary-500 to-secondary-400"
        )}
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </motion.div>
  );
}
