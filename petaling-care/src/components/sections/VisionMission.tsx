"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { VISION, MISSION } from "@/lib/constants";
import { LightbulbIcon, TargetIcon } from "@/components/ui/Icons";

export default function VisionMission() {
  return (
    <section
      id="visi-misi"
      className="section-padding relative overflow-hidden bg-gradient-to-br from-primary-50 to-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="visionPattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="1.5" fill="#00af9b" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#visionPattern)" />
        </svg>
      </div>

      <Container className="relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-gray-800 mb-4">Visi & Misi</h2>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            Panduan dan hala tuju kami dalam memperkasa komuniti
          </p>
          <motion.div
            className="h-1 w-20 mt-6 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-secondary-400"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision Card */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-3xl transform rotate-2 group-hover:rotate-1 transition-transform" />
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl">
              {/* Icon */}
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-secondary-500/30"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <LightbulbIcon className="text-white" size={32} />
              </motion.div>

              {/* Label */}
              <div className="inline-flex items-center gap-2 bg-secondary-50 text-secondary-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <span className="w-2 h-2 bg-secondary-500 rounded-full" />
                Apakah Visi Kami?
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {VISION.title}
              </h3>

              {/* Content */}
              <p className="text-lg text-gray-600 leading-relaxed">
                {VISION.content}
              </p>

              {/* Decorative */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-secondary-100 rounded-full opacity-50 blur-xl" />
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl transform -rotate-2 group-hover:-rotate-1 transition-transform" />
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl">
              {/* Icon */}
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/30"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <TargetIcon className="text-white" size={32} />
              </motion.div>

              {/* Label */}
              <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <span className="w-2 h-2 bg-primary-500 rounded-full" />
                Apakah Misi Kami?
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {MISSION.title}
              </h3>

              {/* Content */}
              <p className="text-lg text-gray-600 leading-relaxed">
                {MISSION.content}
              </p>

              {/* Decorative */}
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-primary-100 rounded-full opacity-50 blur-xl" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Decoration */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-primary-400 rounded-full" />
            <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-secondary-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
            <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-accent-400 rounded-full" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
