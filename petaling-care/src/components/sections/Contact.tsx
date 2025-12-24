"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CONTACT_INFO } from "@/lib/constants";
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
} from "@/components/ui/Icons";
import { IconButton } from "@/components/ui/Button";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - could integrate with email service
    const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
      formState.subject
    )}&body=${encodeURIComponent(
      `Nama: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="hubungi"
      className="section-padding relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-secondary-400/20 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/15 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          title="Hubungi Kami"
          subtitle="Kami sentiasa gembira untuk mendengar daripada anda"
          light
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Jom Berhubung!
            </h3>
            <p className="text-white/80 text-lg mb-8">
              Ada soalan, cadangan, atau ingin menyertai kami? Jangan segan untuk 
              menghubungi kami melalui mana-mana saluran di bawah.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* Email */}
              <motion.a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <EmailIcon className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-sm text-white/60">Email</div>
                  <div className="text-white font-medium group-hover:text-secondary-300 transition-colors">
                    {CONTACT_INFO.email}
                  </div>
                </div>
              </motion.a>

              {/* Facebook */}
              <motion.a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <FacebookIcon className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-sm text-white/60">Facebook</div>
                  <div className="text-white font-medium group-hover:text-secondary-300 transition-colors">
                    {CONTACT_INFO.facebook}
                  </div>
                </div>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <InstagramIcon className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-sm text-white/60">Instagram</div>
                  <div className="text-white font-medium group-hover:text-secondary-300 transition-colors">
                    {CONTACT_INFO.instagram}
                  </div>
                </div>
              </motion.a>

              {/* TikTok */}
              <motion.a
                href={CONTACT_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <TikTokIcon className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-sm text-white/60">TikTok</div>
                  <div className="text-white font-medium group-hover:text-secondary-300 transition-colors">
                    {CONTACT_INFO.tiktok}
                  </div>
                </div>
              </motion.a>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-4 mt-8">
              <span className="text-white/60 text-sm">Ikuti Kami:</span>
              <div className="flex gap-2">
                <IconButton
                  icon={<FacebookIcon size={20} />}
                  href={CONTACT_INFO.facebookUrl}
                  label="Facebook"
                  variant="primary"
                />
                <IconButton
                  icon={<InstagramIcon size={20} />}
                  href={CONTACT_INFO.instagramUrl}
                  label="Instagram"
                  variant="primary"
                />
                <IconButton
                  icon={<TikTokIcon size={20} />}
                  href={CONTACT_INFO.tiktokUrl}
                  label="TikTok"
                  variant="primary"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Hantar Mesej
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nama Penuh
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    placeholder="Masukkan nama anda"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    placeholder="email@contoh.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subjek
                  </label>
                  <select
                    id="subject"
                    required
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  >
                    <option value="">Pilih subjek</option>
                    <option value="Jadi Sukarelawan">Jadi Sukarelawan</option>
                    <option value="Sumbangan/Derma">Sumbangan/Derma</option>
                    <option value="Kerjasama/Partnership">
                      Kerjasama/Partnership
                    </option>
                    <option value="Pertanyaan Am">Pertanyaan Am</option>
                    <option value="Lain-lain">Lain-lain</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Mesej
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                    placeholder="Tulis mesej anda di sini..."
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="primary" className="w-full">
                  Hantar Mesej
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
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
            fill="#111827"
          />
        </svg>
      </div>
    </section>
  );
}
