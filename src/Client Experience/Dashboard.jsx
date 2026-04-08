import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative md:px-10 px-5 md:py-20 py-12 mx-auto min-h-screen">
      <section className="py-16">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('./5fa34299ac29f7468637c217_community-page-hero-2880-p-2000.webp')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto md:py-12 text-left">

          {/* Fade Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center uppercase gap-2 bg-[#1A2B6B] px-4 py-2 rounded-full shadow-sm text-xs text-[#D1E0FA] text-opacity-75 md:mb-6 mb-4"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Time-Sensitive Cases
          </motion.div>

          {/* Fade Up */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl md:text-5xl font-semibold leading-tight max-w-3xl"
          >
            <span className="text-[#2F6FD6]">A Private, Institutional-Grade</span>{" "}
            <br />
            <span className="text-[#000]">
              Experience for High-Value Clients
            </span>
          </motion.h1>

          {/* Fade Up (delayed) */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-[#000] md:text-base text-xs text-opacity-75 mb-6 md:max-w-2xl leading-relaxed pt-5"
          >
             Designed for individuals and organizations requiring discretion, precision execution, and high-touch advisory across digital asset transactions, liquidity operations, and security frameworks.
          </motion.p>

          <div className="border-t pb-5 border-[#2F6FD6] max-w-2xl border-opacity-75"></div>
          <div className="max-w-2xl md:text-sm text-xs text-[#2F6FD6] font-semibold text-opacity-75 mb-6 leading-relaxed">
            <p>
              Built for clients who demand confidential handling, structured execution, and institutional-level service standards.
            </p>
          </div>

          {/* Fade Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/"
              className="px-6 py-3 bg-[#2F6FD6] md:text-base text-sm text-white shadow text-center"
            >
              Request Private Consultation →
            </a>
          </motion.div>

        </div>
      </section>
    </div>
  );
}