"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { IMPACT_STATS } from "@/lib/constants";

export default function Impact() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-gray-50 to-primary-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="impactPattern"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M30 0L60 30L30 60L0 30Z"
                stroke="#00af9b"
                strokeWidth="0.5"
                fill="none"
                opacity="0.1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#impactPattern)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <SectionHeading
          title="Impak Kami"
          subtitle="Pencapaian dan sumbangan Petaling Care kepada masyarakat"
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
          {IMPACT_STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-400 to-accent-500" />
                
                {/* Floating circles */}
                <motion.div
                  className="absolute -top-10 -right-10 w-20 h-20 bg-primary-100 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                />

                {/* Counter */}
                <div className="relative z-10">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    className="text-4xl md:text-5xl font-bold gradient-text"
                  />
                  <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Story Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
            </div>

            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left - Content */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Setiap Sumbangan Membawa Makna
                  </h3>
                  <p className="text-white/80 text-lg mb-6">
                    Sejak penubuhan, kami telah berjaya membantu ribuan individu dan keluarga 
                    melalui pelbagai program kebajikan, pendidikan, dan pembangunan komuniti. 
                    Kejayaan ini adalah hasil sokongan padu daripada sukarelawan dan penderma seperti anda.
                  </p>
                  
                  {/* Key Achievements */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Keluarga Dibantu", value: "1,000+" },
                      { label: "Bantuan Makanan", value: "RM 500K+" },
                      { label: "Biasiswa Diberikan", value: "200+" },
                      { label: "Komuniti Dilawati", value: "50+" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <div className="text-xl font-bold text-white">{item.value}</div>
                        <div className="text-sm text-white/70">{item.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right - Visual */}
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Testimonial Cards */}
                    <motion.div
                      className="bg-white rounded-2xl p-6 shadow-xl"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <div className="text-4xl mb-4">💚</div>
                      <p className="text-gray-600 text-sm italic mb-4">
                        &ldquo;Bantuan Petaling Care sangat bermakna untuk keluarga kami.&rdquo;
                      </p>
                      <div className="text-sm font-semibold text-gray-800">- Penerima Bantuan</div>
                    </motion.div>

                    <motion.div
                      className="bg-white rounded-2xl p-6 shadow-xl mt-8"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity }}
                    >
                      <div className="text-4xl mb-4">🌟</div>
                      <p className="text-gray-600 text-sm italic mb-4">
                        &ldquo;Program pendidikan membuka peluang baru untuk anak saya.&rdquo;
                      </p>
                      <div className="text-sm font-semibold text-gray-800">- Ibu Bapa</div>
                    </motion.div>
                  </div>

                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 bg-secondary-400 rounded-full flex items-center justify-center shadow-lg"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="text-2xl">✨</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
