"use client";

import { motion } from "framer-motion";

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  rotateRange?: number;
}

export function FloatingElement({
  children,
  delay = 0,
  duration = 6,
  className,
  rotateRange = 5,
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-10, 10, -10],
        rotate: [-rotateRange, rotateRange, -rotateRange],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

// Decorative 3D-style elements
export function FloatingMoon({ className }: { className?: string }) {
  return (
    <FloatingElement className={className} duration={8} delay={0}>
      <div className="relative w-20 h-20 md:w-32 md:h-32">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark shadow-[0_0_60px_20px_rgba(212,168,83,0.3)]" />
        <div className="absolute top-2 left-2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-gold-dark/30" />
        <div className="absolute top-6 right-4 w-2 h-2 md:w-3 md:h-3 rounded-full bg-gold-dark/20" />
        <div className="absolute bottom-4 left-6 w-3 h-3 md:w-4 md:h-4 rounded-full bg-gold-dark/25" />
      </div>
    </FloatingElement>
  );
}

export function FloatingStars({ className }: { className?: string }) {
  return (
    <div className={className}>
      {[...Array(5)].map((_, i) => (
        <FloatingElement
          key={i}
          delay={i * 0.5}
          duration={4 + i}
          rotateRange={10}
          className="absolute"
        >
          <svg
            className="text-gold/60"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
            width={12 + i * 4}
            height={12 + i * 4}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
          </svg>
        </FloatingElement>
      ))}
    </div>
  );
}

export function FloatingGeometric({ className }: { className?: string }) {
  return (
    <FloatingElement className={className} duration={10} delay={2} rotateRange={15}>
      <div className="relative w-16 h-16 md:w-24 md:h-24">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-2 border-teal/30 animate-spin-slow" />
        {/* Inner geometric shape */}
        <div className="absolute inset-2 rotate-45 border-2 border-gold/40" />
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-teal/20 to-gold/20" />
      </div>
    </FloatingElement>
  );
}

export function FloatingOrb({ 
  className, 
  color = "gold" 
}: { 
  className?: string;
  color?: "gold" | "teal";
}) {
  const colors = {
    gold: {
      gradient: "from-gold/30 to-gold-dark/10",
      shadow: "rgba(212,168,83,0.2)",
    },
    teal: {
      gradient: "from-teal/30 to-teal-light/10",
      shadow: "rgba(20,184,166,0.2)",
    },
  };

  return (
    <FloatingElement className={className} duration={7} delay={1}>
      <div 
        className={`w-12 h-12 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${colors[color].gradient} blur-sm`}
        style={{ boxShadow: `0 0 40px 10px ${colors[color].shadow}` }}
      />
    </FloatingElement>
  );
}

// Pre-generated particle positions to avoid hydration mismatch
const PARTICLE_POSITIONS = [
  { left: 15, top: 20, duration: 3.2, delay: 0.1 },
  { left: 85, top: 15, duration: 4.1, delay: 0.5 },
  { left: 25, top: 75, duration: 3.8, delay: 1.2 },
  { left: 70, top: 45, duration: 4.5, delay: 0.3 },
  { left: 45, top: 85, duration: 3.5, delay: 1.8 },
  { left: 90, top: 60, duration: 4.2, delay: 0.7 },
  { left: 10, top: 40, duration: 3.9, delay: 1.5 },
  { left: 60, top: 25, duration: 4.0, delay: 0.9 },
  { left: 35, top: 55, duration: 3.6, delay: 1.1 },
  { left: 80, top: 80, duration: 4.3, delay: 0.2 },
  { left: 5, top: 65, duration: 3.7, delay: 1.6 },
  { left: 55, top: 10, duration: 4.4, delay: 0.4 },
  { left: 40, top: 35, duration: 3.3, delay: 1.3 },
  { left: 75, top: 70, duration: 4.1, delay: 0.8 },
  { left: 20, top: 90, duration: 3.4, delay: 1.9 },
  { left: 65, top: 50, duration: 4.6, delay: 0.6 },
  { left: 30, top: 5, duration: 3.1, delay: 1.4 },
  { left: 95, top: 30, duration: 4.0, delay: 1.0 },
  { left: 50, top: 65, duration: 3.8, delay: 0.0 },
  { left: 12, top: 82, duration: 4.2, delay: 1.7 },
  { left: 78, top: 12, duration: 3.5, delay: 0.5 },
  { left: 42, top: 48, duration: 4.3, delay: 1.2 },
  { left: 88, top: 88, duration: 3.9, delay: 0.3 },
  { left: 22, top: 28, duration: 4.1, delay: 1.8 },
  { left: 58, top: 72, duration: 3.6, delay: 0.9 },
  { left: 8, top: 55, duration: 4.4, delay: 1.5 },
  { left: 72, top: 38, duration: 3.2, delay: 0.7 },
  { left: 38, top: 95, duration: 4.0, delay: 1.1 },
  { left: 92, top: 22, duration: 3.7, delay: 0.4 },
  { left: 18, top: 58, duration: 4.5, delay: 1.6 },
];

// Particle field for background
export function ParticleField({ count = 20 }: { count?: number }) {
  const particles = PARTICLE_POSITIONS.slice(0, count);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
