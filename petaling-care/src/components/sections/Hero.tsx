"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { FloatingShapes } from "@/components/ui/FloatingElements";
import { ArrowRightIcon, ChevronDownIcon } from "@/components/ui/Icons";
import ThreeBackground from "@/components/3d/ThreeBackground";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2074&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 mix-blend-multiply z-0" />

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/50 via-accent-500/30 to-secondary-500/40 animate-gradient bg-[length:400%_400%]" />
      </div>

      {/* 3D Background */}
      <ThreeBackground />

      {/* Floating Shapes */}
      <FloatingShapes />

      {/* Decorative Circles */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-secondary-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />

      {/* Content */}
      <Container className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-2 h-2 bg-secondary-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Bersama Membangun Komuniti
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="heading-xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Memperkasa{" "}
            <span className="relative inline-block">
              <span className="relative z-10 gradient-text-coral">Komuniti</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-3 bg-secondary-400/30 -rotate-1"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              />
            </span>
            <br />
            Untuk Masa Depan
            <br />
            <span className="text-secondary-300">Lebih Cerah</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Petaling Care adalah pertubuhan bukan kerajaan yang komited untuk
            pembangunan komuniti melalui pendidikan, sukan, dan kesukarelawanan.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button variant="accent" size="lg" href="#libatkan">
              <span className="flex items-center gap-2">
                Sertai Kami
                <ArrowRightIcon size={20} />
              </span>
            </Button>
            <Button variant="outline" size="lg" href="#tentang">
              Ketahui Lebih Lanjut
            </Button>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { value: "5,000+", label: "Penerima Manfaat" },
              { value: "150+", label: "Program" },
              { value: "500+", label: "Sukarelawan" },
              { value: "10+", label: "Tahun" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.a
          href="#tentang"
          className="flex flex-col items-center text-primary-600 hover:text-primary-700 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-sm mb-2 font-medium">Tatal ke bawah</span>
          <ChevronDownIcon size={24} />
        </motion.a>
      </motion.div>

      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C480,150 960,-20 1440,64 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
