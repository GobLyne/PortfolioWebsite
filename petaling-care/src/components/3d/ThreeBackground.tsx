"use client";

import { motion } from "framer-motion";

// Animated CSS-based background with 3D-like floating elements
export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-400/30 to-accent-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-br from-secondary-400/25 to-coral-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-accent-400/20 to-primary-400/15 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating 3D-like Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20"
        animate={{
          y: [0, -20, 0],
          rotateY: [0, 360],
          rotateX: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ perspective: "1000px" }}
      >
        <div className="w-full h-full bg-gradient-to-br from-primary-400/40 to-primary-600/40 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/20" 
          style={{ transform: "rotateX(20deg) rotateY(-20deg)" }}
        />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-20 w-16 h-16"
        animate={{
          y: [0, 25, 0],
          rotateZ: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-secondary-400/50 to-secondary-500/50 rounded-full shadow-xl" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-12 h-12"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-accent-400/40 to-accent-500/40 rounded-lg shadow-lg rotate-45" />
      </motion.div>

      <motion.div
        className="absolute top-2/3 right-1/3 w-24 h-24"
        animate={{
          y: [0, 20, 0],
          rotateZ: [0, -90, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ perspective: "1000px" }}
      >
        <div 
          className="w-full h-full bg-gradient-to-br from-coral-400/30 to-coral-500/30 rounded-3xl shadow-xl border border-white/10"
          style={{ transform: "rotateX(-15deg) rotateY(25deg)" }}
        />
      </motion.div>

      {/* Particle-like dots */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Torus-like ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotateZ: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-full h-full rounded-full border-4 border-white/10" 
          style={{ 
            borderTopColor: "rgba(0, 175, 155, 0.3)",
            borderRightColor: "rgba(250, 180, 0, 0.3)",
          }}
        />
      </motion.div>
    </div>
  );
}

// Simpler floating orbs for sections
export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-400/20 rounded-full blur-2xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary-400/20 rounded-full blur-2xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
