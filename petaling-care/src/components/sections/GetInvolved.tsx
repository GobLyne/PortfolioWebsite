"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { GET_INVOLVED } from "@/lib/constants";
import { VolunteerIcon, DonateIcon, ShareIcon, ArrowRightIcon } from "@/components/ui/Icons";

const iconMap = {
  volunteer: VolunteerIcon,
  donate: DonateIcon,
  share: ShareIcon,
};

const cardColors = [
  { bg: "from-primary-500 to-primary-600", hover: "group-hover:from-primary-600 group-hover:to-primary-700" },
  { bg: "from-secondary-500 to-secondary-600", hover: "group-hover:from-secondary-600 group-hover:to-secondary-700" },
  { bg: "from-coral-500 to-coral-600", hover: "group-hover:from-coral-600 group-hover:to-coral-700" },
];

export default function GetInvolved() {
  return (
    <section id="libatkan" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-white" />

      <Container className="relative z-10">
        <SectionHeading
          title="Libatkan Diri Anda"
          subtitle="Pelbagai cara untuk anda menyumbang dan membuat perbezaan"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {GET_INVOLVED.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            const colors = cardColors[index];

            return (
              <motion.div
                key={item.id}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:-translate-y-2">
                  {/* Animated Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${colors.bg} ${colors.hover} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${colors.bg} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:bg-white/20 group-hover:backdrop-blur-sm transition-all duration-500`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {IconComponent && (
                        <IconComponent
                          className="text-white group-hover:text-white transition-colors"
                          size={36}
                        />
                      )}
                    </motion.div>

                    {/* Number Badge */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 group-hover:bg-white/20 rounded-full flex items-center justify-center text-sm font-bold text-gray-400 group-hover:text-white transition-all duration-500">
                      0{item.id}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white mb-3 transition-colors duration-500">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 group-hover:text-white/90 mb-6 transition-colors duration-500">
                      {item.description}
                    </p>

                    {/* CTA Button */}
                    <motion.a
                      href="#hubungi"
                      className="inline-flex items-center gap-2 font-semibold text-primary-600 group-hover:text-white transition-colors duration-500"
                      whileHover={{ x: 5 }}
                    >
                      {item.cta}
                      <ArrowRightIcon size={18} />
                    </motion.a>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gray-100 group-hover:bg-white/10 rounded-full transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action Banner */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative bg-gradient-to-r from-primary-50 via-secondary-50 to-accent-50 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Background Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-100/50 via-transparent to-secondary-100/50"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <motion.div
                className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-2xl">🙌</span>
                <span className="text-sm font-medium text-gray-600">
                  Bersama Kita Bisa!
                </span>
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Jadilah Sebahagian Daripada Perubahan
              </h3>

              <p className="text-gray-600 text-lg mb-8">
                Setiap sumbangan, sama ada masa, tenaga, atau kewangan, memberi impak 
                yang besar kepada komuniti. Sertai kami hari ini!
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="primary" size="lg" href="#hubungi">
                  Hubungi Kami Sekarang
                </Button>
                <Button variant="secondary" size="lg" href="https://facebook.com/PetalingCare">
                  Ikuti Kami di Facebook
                </Button>
              </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-4 left-4 text-4xl opacity-20">💚</div>
            <div className="absolute bottom-4 right-4 text-4xl opacity-20">🌱</div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
