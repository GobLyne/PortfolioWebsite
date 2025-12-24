"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { OBJECTIVES } from "@/lib/constants";
import { EducationIcon, SportsIcon, WelfareIcon } from "@/components/ui/Icons";

const iconMap = {
  education: EducationIcon,
  sports: SportsIcon,
  welfare: WelfareIcon,
};

const colorMap = {
  primary: {
    bg: "bg-gradient-to-br from-primary-500 to-primary-600",
    light: "bg-primary-50",
    text: "text-primary-600",
    shadow: "shadow-primary-500/30",
  },
  accent: {
    bg: "bg-gradient-to-br from-accent-500 to-accent-600",
    light: "bg-accent-50",
    text: "text-accent-600",
    shadow: "shadow-accent-500/30",
  },
  coral: {
    bg: "bg-gradient-to-br from-coral-500 to-coral-600",
    light: "bg-coral-50",
    text: "text-coral-600",
    shadow: "shadow-coral-500/30",
  },
};

export default function Objectives() {
  return (
    <section id="objektif" className="section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white" />

      <Container className="relative z-10">
        <SectionHeading
          title="Objektif Kami"
          subtitle="Tiga teras utama yang menjadi fokus program dan aktiviti kami"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {OBJECTIVES.map((objective, index) => {
            const IconComponent = iconMap[objective.icon as keyof typeof iconMap];
            const colors = colorMap[objective.color as keyof typeof colorMap];

            return (
              <motion.div
                key={objective.id}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:-translate-y-2">
                  {/* Top Colored Section */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-32 ${colors.bg} -mx-8 -mt-8 mb-8`}
                  >
                    {/* Decorative circles */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full" />
                    <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/10 rounded-full" />
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`relative z-10 w-20 h-20 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 shadow-xl ${colors.shadow} mx-auto -mt-4`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {IconComponent && (
                      <IconComponent className="text-white" size={40} />
                    )}
                  </motion.div>

                  {/* Content */}
                  <div className="text-center mt-8">
                    {/* Category Tag */}
                    <div
                      className={`inline-flex items-center gap-2 ${colors.light} ${colors.text} px-4 py-1.5 rounded-full text-sm font-semibold mb-4`}
                    >
                      {objective.title}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {objective.description}
                    </p>
                  </div>

                  {/* Hover Effect Line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 ${colors.bg}`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Floating Badge */}
                <motion.div
                  className={`absolute -top-3 -right-3 w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center text-white font-bold shadow-lg z-20`}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  0{objective.id}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-full px-8 py-4">
            <span className="text-gray-600">
              Ketiga-tiga objektif ini saling berkait untuk mewujudkan
            </span>
            <span className="font-semibold text-primary-600">
              komuniti yang seimbang
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
