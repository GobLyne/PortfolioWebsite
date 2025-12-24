"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { VENUES } from "@/lib/constants";

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export function Venues() {
  return (
    <section id="lokasi" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary" />

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a853' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          subtitle="Pilih Lokasi Anda"
          highlight="TARIKH &"
          title="LOKASI"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {VENUES.map((venue, index) => (
            <motion.div
              key={venue.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="group relative rounded-2xl overflow-hidden">
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm" />
                <div className="absolute inset-0 border border-white/10 rounded-2xl" />

                {/* Content */}
                <div className="relative p-6 lg:p-8">
                  {/* Date Badge */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-gold to-gold-dark rounded-xl p-4 text-center shadow-lg shadow-gold/20">
                        <div className="text-2xl md:text-3xl font-bold text-black leading-tight">
                          {venue.date.split(" - ")[0]}
                        </div>
                        <div className="text-xs font-medium text-black/70 uppercase">
                          Dis
                        </div>
                      </div>
                    </div>
                    <div className="pt-1">
                      <div className="text-gold font-bold text-lg">
                        {venue.date}
                      </div>
                      <div className="text-foreground-muted text-sm">
                        {venue.day}
                      </div>
                      <div className="text-2xl font-bold text-white mt-1">
                        {venue.year}
                      </div>
                    </div>
                  </div>

                  {/* Venue Info */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-teal flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>
                        <h3 className="text-white font-semibold leading-tight group-hover:text-gold transition-colors">
                          {venue.name}
                        </h3>
                        <p className="text-foreground-muted text-sm mt-1">
                          {venue.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
