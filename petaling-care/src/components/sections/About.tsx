"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { FloatingElements } from "@/components/ui/FloatingElements";
import { LogoIcon } from "@/components/ui/Icons";

export default function About() {
  return (
    <section id="tentang" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <FloatingElements />
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              title="Tentang Petaling Care"
              subtitle="Mengenali siapa kami dan apa yang kami perjuangkan"
              centered={false}
            />
            
            <div className="space-y-6">
              <motion.p
                className="text-gray-600 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="font-semibold text-primary-600">Petaling Care</span>{" "}
                adalah sebuah pertubuhan bukan kerajaan (NGO) yang ditubuhkan dengan 
                hasrat untuk memperkasa komuniti setempat melalui pelbagai program 
                pembangunan yang berterusan dan berimpak tinggi.
              </motion.p>
              
              <motion.p
                className="text-gray-600 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Kami percaya bahawa setiap individu mempunyai potensi untuk berjaya 
                dan menyumbang kepada masyarakat. Melalui program pendidikan, aktiviti 
                sukan, dan inisiatif kebajikan, kami berusaha untuk membina komuniti 
                yang lebih bersatu padu dan berdaya maju.
              </motion.p>

              <motion.p
                className="text-gray-600 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Dengan sokongan sukarelawan yang berdedikasi dan sumbangan dari 
                masyarakat, kami terus berusaha untuk membawa perubahan positif 
                kepada kehidupan mereka yang memerlukan.
              </motion.p>
            </div>

            {/* Key Points */}
            <motion.div
              className="grid grid-cols-2 gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {[
                "Berdaftar dengan ROS",
                "Beroperasi sejak 2014",
                "Berpusat di Petaling Jaya",
                "Rangkaian sukarelawan aktif",
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-400 rounded-full" />
                  <span className="text-gray-700 font-medium">{point}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Card */}
            <div className="relative z-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary-500/30">
              {/* Logo */}
              <motion.div
                className="flex justify-center mb-8"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <LogoIcon size={80} />
                </div>
              </motion.div>

              {/* Quote */}
              <blockquote className="text-center">
                <p className="text-xl md:text-2xl text-white font-medium italic mb-4">
                  &ldquo;Bersama-sama kita membina komuniti yang lebih kuat, lebih bersatu, 
                  dan lebih berdaya maju.&rdquo;
                </p>
                <footer className="text-white/80">
                  — Pasukan Petaling Care
                </footer>
              </blockquote>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-secondary-400/20 rounded-full blur-xl" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent-400/20 rounded-full blur-xl" />
            </div>

            {/* Floating Cards */}
            <motion.div
              className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-lg z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">💚</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">Komuniti</div>
                  <div className="text-xs text-gray-500">Bersatu Padu</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg z-20"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-coral-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">🤝</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">Sukarelawan</div>
                  <div className="text-xs text-gray-500">500+ Aktif</div>
                </div>
              </div>
            </motion.div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl -z-10 rotate-3" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
