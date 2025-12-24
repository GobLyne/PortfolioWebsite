"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { LogoIcon, FacebookIcon, InstagramIcon, TikTokIcon, EmailIcon } from "@/components/ui/Icons";
import { NAV_LINKS, CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#" className="flex items-center gap-3 mb-4">
              <LogoIcon size={50} />
              <div>
                <div className="text-xl font-bold">PETALING</div>
                <div className="text-sm text-secondary-400 font-semibold -mt-1">CARE</div>
              </div>
            </a>
            <p className="text-gray-400 mb-6">
              Memperkasa komuniti melalui pembangunan berterusan untuk masa depan yang lebih cerah.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <FacebookIcon size={18} className="text-white" />
              </a>
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <InstagramIcon size={18} className="text-white" />
              </a>
              <a
                href={CONTACT_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <TikTokIcon size={18} className="text-white" />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <EmailIcon size={18} className="text-white" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Pautan Pantas</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:pl-2 transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Program Kami</h4>
            <ul className="space-y-3">
              {[
                "Program Pendidikan",
                "Aktiviti Sukan",
                "Bantuan Kebajikan",
                "Program Sukarelawan",
                "Kempen Kesedaran",
              ].map((program) => (
                <li key={program}>
                  <a
                    href="#program"
                    className="text-gray-400 hover:text-white hover:pl-2 transition-all"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <EmailIcon size={18} className="text-primary-400 mt-1" />
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-gray-300 hover:text-white"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FacebookIcon size={18} className="text-primary-400 mt-1" />
                <div>
                  <div className="text-sm text-gray-500">Facebook</div>
                  <a
                    href={CONTACT_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white"
                  >
                    {CONTACT_INFO.facebook}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <InstagramIcon size={18} className="text-primary-400 mt-1" />
                <div>
                  <div className="text-sm text-gray-500">Instagram</div>
                  <a
                    href={CONTACT_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white"
                  >
                    {CONTACT_INFO.instagram}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Petaling Care. Hak Cipta Terpelihara.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                Dasar Privasi
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                Terma & Syarat
              </a>
            </div>
          </div>
        </div>

        {/* Made with love */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-sm">
            Dibina dengan 💚 untuk komuniti
          </p>
        </motion.div>
      </Container>
    </footer>
  );
}
