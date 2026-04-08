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
              "url('./6861e0b69d8274bdb158b18c_885bd01970b30ea18bd8a107c3a07838_tokenized-assets-footer--explore.avif')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto md:py-12 text-left bg-[#000]/40 p-8 shadow">

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
            <span className="text-[#2F6FD6]">Digital Asset Tracing,</span>{" "}
            <br className="hidden md:block lg:block"/>
            <span className="text-[#EFF6FF]">
              Assessment & Protection Frameworks
            </span>
          </motion.h1>

          {/* Fade Up (delayed) */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-[#D1E0FA] md:text-base text-xs text-opacity-75 mb-6 md:max-w-3xl leading-relaxed pt-5"
          >
            Structured blockchain analysis, asset tracing, and recovery feasibility assessment for lost, inaccessible, or at-risk digital assets across wallets, exchanges, and on-chain environments.
          </motion.p>

          <div className="border-t pb-5 border-[#fff] max-w-3xl border-opacity-30"></div>
          <div className="max-w-5xl md:text-sm text-xs text-[#D1E0FA] text-opacity-75 mb-6 leading-relaxed">
            <p>
              Designed for high-value cases requiring technical precision, forensic analysis, and controlled handling.
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
              Request Case Assessment →
            </a>

            <a
              href="/"
              className="px-6 py-3 md:text-base text-sm text-white border border-white border-opacity-50 font-semibold shadow text-center"
            >
              Learn More Process
            </a>
          </motion.div>

        </div>
      </section>
    </div>
  );
}