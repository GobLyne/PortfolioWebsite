"use client";

import { motion } from "framer-motion";

// Floating decorative elements for backgrounds
export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent-400/15 rounded-full blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

// Animated particles background
export function ParticleBackground({ count = 20 }: { count?: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Floating shapes for hero section
export function FloatingShapes() {
  const shapes = [
    { size: 60, color: "bg-primary-400/30", delay: 0, x: "10%", y: "20%" },
    { size: 40, color: "bg-secondary-400/30", delay: 1, x: "80%", y: "15%" },
    { size: 80, color: "bg-accent-400/20", delay: 2, x: "70%", y: "70%" },
    { size: 50, color: "bg-coral-400/25", delay: 0.5, x: "20%", y: "75%" },
    { size: 30, color: "bg-primary-300/30", delay: 1.5, x: "90%", y: "50%" },
    { size: 45, color: "bg-secondary-300/25", delay: 2.5, x: "5%", y: "50%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.color} rounded-full blur-sm`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Geometric pattern background
export function GeometricPattern() {
  return (
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="geometric"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="30" cy="30" r="2" fill="currentColor" />
            <path
              d="M0 30h60M30 0v60"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geometric)" />
      </svg>
    </div>
  );
}

// Wave decoration
export function WaveDecoration({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className={`absolute left-0 right-0 ${
        flip ? "top-0 rotate-180" : "bottom-0"
      } pointer-events-none`}
    >
      <svg
        viewBox="0 0 1440 120"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 C480,150 960,-20 1440,64 L1440,120 L0,120 Z"
          fill="currentColor"
          className="text-white"
        />
      </svg>
    </div>
  );
}

// Blob shapes
export function BlobShape({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        scale: [1, 1.1, 0.9, 1],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <path
          d="M47.5,-57.2C59.4,-47.3,65.4,-30.6,67.8,-13.5C70.2,3.7,69,21.3,61.1,35.6C53.2,49.9,38.6,60.9,22.3,66.5C6,72.1,-12,72.3,-27.8,66.1C-43.6,59.9,-57.2,47.3,-64.8,31.8C-72.4,16.3,-74,-2.1,-69.4,-18.7C-64.8,-35.3,-54,-50.1,-40.5,-59.6C-27,-69.1,-10.8,-73.3,3.8,-77.8C18.4,-82.3,35.6,-67.1,47.5,-57.2Z"
          transform="translate(100 100)"
          fill="currentColor"
        />
      </svg>
    </motion.div>
  );
}
