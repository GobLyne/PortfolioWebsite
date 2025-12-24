"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { PROGRAMS } from "@/lib/constants";
import { ArrowRightIcon } from "@/components/ui/Icons";

const categoryColors = {
  Pendidikan: "from-primary-500 to-primary-600",
  Sukan: "from-accent-500 to-accent-600",
  Kebajikan: "from-coral-500 to-coral-600",
  Sukarelawan: "from-secondary-500 to-secondary-600",
};

const categoryIcons = {
  Pendidikan: "📚",
  Sukan: "⚽",
  Kebajikan: "❤️",
  Sukarelawan: "🤝",
};

export default function Programs() {
  return (
    <section id="program" className="section-padding relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent" />

      <Container className="relative z-10">
        <SectionHeading
          title="Program & Aktiviti"
          subtitle="Pelbagai program yang kami jalankan untuk manfaat komuniti"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {PROGRAMS.map((program, index) => (
            <motion.div
              key={program.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Image Area with Gradient */}
                <div
                  className={`relative h-48 bg-gradient-to-br ${
                    categoryColors[program.category as keyof typeof categoryColors]
                  }`}
                >
                  {/* Icon Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-6xl opacity-80"
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      {categoryIcons[program.category as keyof typeof categoryIcons]}
                    </motion.div>
                  </div>

                  {/* Overlay Pattern */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                      {program.category}
                    </span>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/10 rounded-tl-full" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {program.description}
                  </p>

                  {/* Learn More Link */}
                  <motion.a
                    href="#hubungi"
                    className="inline-flex items-center gap-2 text-primary-600 font-medium text-sm group/link"
                    whileHover={{ x: 5 }}
                  >
                    Ketahui Lebih Lanjut
                    <ArrowRightIcon
                      size={16}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </motion.a>
                </div>

                {/* Bottom Accent Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    categoryColors[program.category as keyof typeof categoryColors]
                  } transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Programs */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button variant="secondary" href="#hubungi">
            <span className="flex items-center gap-2">
              Lihat Semua Program
              <ArrowRightIcon size={18} />
            </span>
          </Button>
        </motion.div>

        {/* Program Highlights */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-16 pt-16 border-t border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { icon: "🎯", title: "Fokus Komuniti", desc: "Program direka khas untuk keperluan setempat" },
            { icon: "🌟", title: "Impak Berkekalan", desc: "Hasil yang dapat dirasai untuk jangka panjang" },
            { icon: "🤗", title: "Terbuka Untuk Semua", desc: "Tiada halangan untuk menyertai program kami" },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">{item.icon}</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
