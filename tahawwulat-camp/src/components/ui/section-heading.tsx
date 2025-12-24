"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  highlight,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn(centered && "text-center", "mb-12 lg:mb-16", className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {subtitle && (
        <motion.p
          className="text-gold font-semibold text-sm uppercase tracking-widest mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
        {highlight ? (
          <>
            <span className="gradient-text">{highlight}</span>{" "}
            <span>{title}</span>
          </>
        ) : (
          title
        )}
      </h2>
    </motion.div>
  );
}
