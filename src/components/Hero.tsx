"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Zap, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background radial glow & mesh layers */}
      <div className="absolute inset-0 pointer-events-none radial-glow-hero z-0" />
      
      {/* Subtle geometric coordinate grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" 
      />

      {/* Ambient background blur orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-[#7c3aed]/20 via-[#8b5cf6]/25 to-[#c084fc]/15 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top announcement pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#8b5cf6]/30 bg-[#0d0d14]/80 backdrop-blur-md text-xs sm:text-sm font-medium text-[#c084fc] shadow-sm shadow-[#8b5cf6]/10 mb-8 hover:border-[#a855f7]/50 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a855f7] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8b5cf6]"></span>
          </span>
          <span className="tracking-wide">Elite Peer Mentorship Cohort</span>
          <span className="text-[#64748b]">|</span>
          <span className="text-[#f8fafc] font-semibold flex items-center gap-1">
            Now Accepting Applications
          </span>
        </motion.div>

        {/* High-impact headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#f8fafc] max-w-4xl leading-[1.12]"
        >
          The Launch:{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#f8fafc] drop-shadow-[0_10px_25px_rgba(139,92,246,0.35)]">
            Your 2-Week Upgrade
          </span>
        </motion.h1>

        {/* Subtitle highlighting first-principles peer mentorship */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-[#94a3b8] max-w-2xl leading-relaxed"
        >
          Experience rigorous, first-principles peer mentorship delivered directly by top
          scholars and researchers from <span className="text-[#f8fafc] font-semibold">IISER</span>,{" "}
          <span className="text-[#f8fafc] font-semibold">IIT</span>, and leading{" "}
          <span className="text-[#f8fafc] font-semibold">medical institutions</span>.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md"
        >
          <Link
            id="hero-primary-cta"
            href="#trial"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] hover:from-[#a855f7] hover:to-[#7c3aed] text-[#f8fafc] font-semibold text-base shadow-lg shadow-[#7c3aed]/30 hover:shadow-[#8b5cf6]/50 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 group"
          >
            <span>Apply for 2-Week Trial</span>
            <ArrowRight className="w-5 h-5 text-[#f8fafc] group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            id="hero-secondary-cta"
            href="#mentors"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#0d0d14] hover:bg-[#161622] text-[#f8fafc] border border-[#1e1e2d] hover:border-[#8b5cf6]/50 font-medium text-base transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-[#8b5cf6]" />
            <span>Explore Mentors</span>
          </Link>
        </motion.div>

        {/* Feature / trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-10 border-t border-[#1e1e2d]/80 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-3xl"
        >
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-2 text-[#c084fc] font-semibold text-sm mb-1">
              <Zap className="w-4 h-4 text-[#a855f7]" />
              <span>First-Principles Core</span>
            </div>
            <p className="text-xs text-[#94a3b8]">
              Deconstruct complex topics down to fundamental axioms and real-world intuition.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-2 text-[#c084fc] font-semibold text-sm mb-1">
              <ShieldCheck className="w-4 h-4 text-[#a855f7]" />
              <span>Elite Verified Scholars</span>
            </div>
            <p className="text-xs text-[#94a3b8]">
              Direct 1-on-1 access to mentors actively pursuing cutting-edge science and medicine.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-2 text-[#c084fc] font-semibold text-sm mb-1">
              <Compass className="w-4 h-4 text-[#a855f7]" />
              <span>14-Day Trajectory Shift</span>
            </div>
            <p className="text-xs text-[#94a3b8]">
              High-intensity personalized sprint engineered to shatter academic plateaus.
            </p>
          </div>
        </motion.div>

        {/* Bottom scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-[#64748b] hover:text-[#c084fc] transition-colors"
        >
          <Link href="#mentors" className="flex flex-col items-center gap-1 text-xs uppercase tracking-widest">
            <span>Discover The Roster</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
