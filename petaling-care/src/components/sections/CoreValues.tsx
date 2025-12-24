"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { CORE_VALUES } from "@/lib/constants";
import {
  CommunityIcon,
  CompetitionIcon,
  InclusivityIcon,
  VolunteerIcon,
  IntegrityIcon,
} from "@/components/ui/Icons";

const iconMap = {
  community: CommunityIcon,
  competition: CompetitionIcon,
  inclusivity: InclusivityIcon,
  volunteer: VolunteerIcon,
  integrity: IntegrityIcon,
};

export default function CoreValues() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%221%22%20fill%3D%22white%22%20fill-opacity%3D%220.1%22/%3E%3C/svg%3E')] bg-repeat" style={{ backgroundSize: "20px 20px" }} />
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-secondary-400/20 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-accent-400/15 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <Container className="relative z-10">
        <SectionHeading
          title="Nilai Teras Petaling Care"
          subtitle="Prinsip-prinsip yang menjadi asas kepada setiap tindakan kami"
          light
        />

        {/* Values Grid - Bento Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mt-12">
          {CORE_VALUES.map((value, index) => {
            const IconComponent = iconMap[value.icon as keyof typeof iconMap];
            
            // Create varied grid spans for bento look
            const gridClass = index === 0 
              ? "col-span-2 row-span-2" 
              : index === 1 
              ? "col-span-2" 
              : index === 4 
              ? "col-span-2" 
              : "";

            return (
              <motion.div
                key={value.id}
                className={`relative group ${gridClass}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div
                  className={`h-full ${value.color} rounded-2xl p-6 overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon */}
                    <motion.div
                      className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {IconComponent && (
                        <IconComponent className="text-white" size={24} />
                      )}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                      {value.title}
                    </h3>

                    {/* Description - Show on larger cards */}
                    <p
                      className={`text-white/80 text-sm leading-relaxed ${
                        index === 0 ? "" : "hidden md:block"
                      }`}
                    >
                      {value.description}
                    </p>

                    {/* Hover indicator */}
                    <div className="mt-auto pt-4">
                      <motion.div
                        className="w-8 h-1 bg-white/50 rounded-full"
                        whileHover={{ width: 40 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Center Logo/Emblem */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
        >
          <div className="relative">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/20">
              <span className="text-4xl">🌱</span>
            </div>
            {/* Orbiting dots */}
            <motion.div
              className="absolute -inset-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-secondary-400 rounded-full -translate-x-1/2" />
              <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-accent-400 rounded-full -translate-x-1/2" />
              <div className="absolute left-0 top-1/2 w-3 h-3 bg-coral-400 rounded-full -translate-y-1/2" />
              <div className="absolute right-0 top-1/2 w-3 h-3 bg-primary-300 rounded-full -translate-y-1/2" />
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C360,20 720,100 1080,60 C1260,40 1380,80 1440,80 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
