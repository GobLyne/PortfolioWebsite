"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icons";
import { BENEFITS } from "@/lib/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function Benefits() {
  return (
    <section id="tentang" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-secondary via-background to-background-secondary" />

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-teal/10 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <SectionHeading
          subtitle="Apa Yang Anak Anda Akan Dapat"
          highlight="HASIL"
          title="PROGRAM"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              variants={itemVariants}
              className="group"
            >
              <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 overflow-hidden transition-all duration-300 hover:border-gold/30 hover:shadow-[0_0_30px_-10px_rgba(212,168,83,0.2)]">
                {/* Number Badge */}
                <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center text-gold/50 font-bold text-xl">
                  {index + 1}
                </div>

                {/* Icon */}
                <motion.div
                  className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-gold/20 to-teal/10 flex items-center justify-center text-gold"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon name={benefit.icon} size={28} />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
