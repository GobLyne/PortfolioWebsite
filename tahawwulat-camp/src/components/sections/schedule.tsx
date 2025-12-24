"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SCHEDULE } from "@/lib/constants";

type DayKey = "day1" | "day2" | "day3" | "day4";

const days: { key: DayKey; label: string }[] = [
  { key: "day1", label: "HARI 1" },
  { key: "day2", label: "HARI 2" },
  { key: "day3", label: "HARI 3" },
  { key: "day4", label: "HARI 4" },
];

export function Schedule() {
  const [activeDay, setActiveDay] = useState<DayKey>("day1");
  const currentSchedule = SCHEDULE[activeDay];

  return (
    <section id="jadual" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      <Container className="relative z-10">
        <SectionHeading
          subtitle="Tentatif Lengkap"
          highlight="TENTATIF"
          title="PROGRAM"
        />

        {/* Day Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {days.map((day) => (
            <motion.button
              key={day.key}
              onClick={() => setActiveDay(day.key)}
              className={`relative px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeDay === day.key
                  ? "text-black"
                  : "text-foreground-muted hover:text-white border border-white/10 hover:border-white/20"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {activeDay === day.key && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-gold to-gold-light rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{day.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Schedule Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            {/* Day Theme */}
            <div className="text-center mb-10">
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-white mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {currentSchedule.theme}
              </motion.h3>
              <motion.p
                className="text-gold font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                (Fokus: {currentSchedule.focus})
              </motion.p>
            </div>

            {/* Schedule Table */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
              {/* Header */}
              <div className="grid grid-cols-12 bg-white/10 px-6 py-4 font-semibold text-sm uppercase tracking-wider">
                <div className="col-span-3 text-foreground-muted">Masa</div>
                <div className="col-span-9 text-foreground-muted">Aktiviti</div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-white/5">
                {currentSchedule.activities.map((item, index) => (
                  <motion.div
                    key={index}
                    className="grid grid-cols-12 px-6 py-4 hover:bg-white/5 transition-colors group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.03 }}
                  >
                    <div className="col-span-3 text-gold font-medium text-sm md:text-base">
                      {item.time}
                    </div>
                    <div className="col-span-9 text-white group-hover:text-gold transition-colors text-sm md:text-base">
                      {item.activity}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation Hint */}
            <motion.p
              className="text-center text-foreground-muted text-sm mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Klik tab di atas untuk lihat jadual hari lain
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
