"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { LogoIcon, MenuIcon, CloseIcon } from "@/components/ui/Icons";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-lg shadow-lg py-2"
            : "bg-transparent py-4"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
            >
              <LogoIcon size={45} />
              <div className="flex flex-col">
                <span
                  className={cn(
                    "text-xl font-bold font-display transition-colors",
                    isScrolled ? "text-primary-600" : "text-white"
                  )}
                >
                  PETALING
                </span>
                <span
                  className={cn(
                    "text-sm font-semibold -mt-1 transition-colors",
                    isScrolled ? "text-secondary-500" : "text-secondary-300"
                  )}
                >
                  CARE
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative group",
                    isScrolled
                      ? "text-gray-700 hover:text-primary-600"
                      : "text-white/90 hover:text-white"
                  )}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-400 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                variant={isScrolled ? "primary" : "outline"}
                size="sm"
                href="#libatkan"
              >
                Sertai Kami
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <CloseIcon
                  className={isScrolled ? "text-gray-700" : "text-white"}
                />
              ) : (
                <MenuIcon
                  className={isScrolled ? "text-gray-700" : "text-white"}
                />
              )}
            </button>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute top-0 right-0 w-80 h-full bg-white shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="p-6 pt-20">
                <div className="flex flex-col gap-4">
                  {NAV_LINKS.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-gray-700 hover:text-primary-600 py-2 border-b border-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
                <div className="mt-8">
                  <Button
                    variant="primary"
                    className="w-full"
                    href="#libatkan"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sertai Kami
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-2">Hubungi Kami</p>
                  <a
                    href="mailto:petalingcare@gmail.com"
                    className="text-primary-600 text-sm"
                  >
                    petalingcare@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
