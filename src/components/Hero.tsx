"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import KalariumAnimatedLogo from "@/components/KalariumAnimatedLogo";
import { ArrowRight, Compass, ShieldCheck, Zap, ChevronDown, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const marqueeValues = [
    "Ignite Pure Curiosity",
    "Eradicate Unnecessary Pressure",
    "Paired First-Principles Problem Solving",
    "Protect Mental Well-Being",
    "Uncompromising Scientific Depth",
    "Axiomatic Mathematics",
    "Self-Directed Autonomy",
    "Ignite Pure Curiosity",
    "Eradicate Unnecessary Pressure",
    "Paired First-Principles Problem Solving",
    "Protect Mental Well-Being",
    "Uncompromising Scientific Depth",
  ];

  return (
    <section id="home" className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Dynamic Cosmic Background with Aurora & Reticle Grid */}
      <div className="absolute inset-0 pointer-events-none radial-glow-hero z-0" />

      {/* Coordinate grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none z-0 bg-[linear-gradient(to_right,#a855f7_1px,transparent_1px),linear-gradient(to_bottom,#a855f7_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_70%,transparent_100%)]"
      />

      {/* Interactive mouse-following ambient neon orb */}
      <motion.div
        animate={{
          x: mousePos.x * 2.5,
          y: mousePos.y * 2.5,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-[#7c3aed]/25 via-[#8b5cf6]/30 to-[#c084fc]/15 rounded-full blur-[110px] pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Animated Centerpiece: The New Kalarium Compass-K Logo with Pulse Aura */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6 group"
        >
          {/* Radiant back-glow rings */}
          <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-[#8b5cf6]/30 via-[#c084fc]/20 to-[#a855f7]/30 blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
          
          <KalariumAnimatedLogo
            size="hero"
            animateOnScroll={true}
            interactive={true}
            className="transform group-hover:scale-105 transition-all duration-500"
          />
        </motion.div>

        {/* Purpose-Driven Welcome Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8b5cf6]/35 bg-[#0d0d14]/85 backdrop-blur-md text-xs sm:text-sm font-medium text-[#c084fc] shadow-lg shadow-[#8b5cf6]/10 mb-6 hover:border-[#a855f7]/60 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a855f7] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8b5cf6]"></span>
          </span>
          <span className="tracking-wide">A Sanctuary for Self-Directed Minds</span>
          <span className="text-[#64748b]">·</span>
          <span className="text-[#f8fafc] font-semibold flex items-center gap-1">
            Now Enrolling Cohorts
          </span>
        </motion.div>

        {/* High-Impact Core Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#f8fafc] max-w-4xl leading-[1.06] font-display"
        >
          <span className="block">Learning</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#818cf8] drop-shadow-[0_12px_30px_rgba(139,92,246,0.45)] my-1">
            shouldn&apos;t feel
          </span>
          <span className="block text-[#f8fafc]">like a chore.</span>
        </motion.h1>

        {/* Dynamic Purpose Values Ticker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 w-full max-w-2xl overflow-hidden py-2.5 px-4 rounded-full border border-[#1e1e2d] bg-[#0d0d14]/75 backdrop-blur-sm shadow-inner"
        >
          <div className="animate-marquee whitespace-nowrap flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-[#a855f7]">
            {marqueeValues.map((value, index) => (
              <span key={index} className="inline-flex items-center gap-4">
                <span className="text-[#e2e8f0] hover:text-[#c084fc] transition-colors">{value}</span>
                <span className="text-[#8b5cf6]/60">✦</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Subtitle Describing Transformative Purpose */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-6 text-base sm:text-xl text-[#94a3b8] max-w-2xl leading-relaxed"
        >
          Break free from rote memorization. We pair you 1-on-1 with scholars and researchers from premier science institutes to explore <span className="text-[#f8fafc] font-semibold">physics</span>, <span className="text-[#f8fafc] font-semibold">pure mathematics</span>, and <span className="text-[#f8fafc] font-semibold">medicine</span> on your own terms — with zero pressure and complete psychological safety.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md"
        >
          <Link
            id="hero-primary-cta"
            href="#start"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] hover:from-[#a855f7] hover:to-[#7c3aed] text-[#f8fafc] font-semibold text-base shadow-xl shadow-[#7c3aed]/40 hover:shadow-[#8b5cf6]/60 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 group"
          >
            <span>Begin Your Exploration</span>
            <ArrowRight className="w-5 h-5 text-[#f8fafc] group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            id="hero-secondary-cta"
            href="#philosophy"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#0d0d14]/90 hover:bg-[#161622] text-[#f8fafc] border border-[#1e1e2d] hover:border-[#8b5cf6]/50 font-medium text-base transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
          >
            <span>Discover Our Ethos ↓</span>
          </Link>
        </motion.div>

        {/* Feature / Trust Pillars Described by Purpose */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-10 border-t border-[#1e1e2d]/80 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-3xl text-left"
        >
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-4 rounded-xl bg-[#0d0d14]/50 border border-[#1e1e2d]/50 hover:border-[#8b5cf6]/30 transition-colors">
            <div className="flex items-center gap-2 text-[#c084fc] font-semibold text-sm mb-1">
              <Zap className="w-4 h-4 text-[#a855f7]" />
              <span>Interest-Driven Depth</span>
            </div>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              We align with what actually sparks you, allowing you to go deep into first principles rather than memorizing exams.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-4 rounded-xl bg-[#0d0d14]/50 border border-[#1e1e2d]/50 hover:border-[#8b5cf6]/30 transition-colors">
            <div className="flex items-center gap-2 text-[#c084fc] font-semibold text-sm mb-1">
              <ShieldCheck className="w-4 h-4 text-[#a855f7]" />
              <span>Active Researchers</span>
            </div>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              1-on-1 access to peers and scholars actively pursuing cutting-edge science at IISER, IIT, and top medical colleges.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-4 rounded-xl bg-[#0d0d14]/50 border border-[#1e1e2d]/50 hover:border-[#8b5cf6]/30 transition-colors">
            <div className="flex items-center gap-2 text-[#c084fc] font-semibold text-sm mb-1">
              <Compass className="w-4 h-4 text-[#a855f7]" />
              <span>Zero-Risk Trial</span>
            </div>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Experience genuine 1-on-1 intellectual mentorship, custom diagnostics, and community with no strings attached.
            </p>
          </div>
        </motion.div>

        {/* Navigational Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-14 text-[#64748b] hover:text-[#c084fc] transition-colors"
        >
          <Link href="#philosophy" className="flex flex-col items-center gap-1.5 text-xs uppercase tracking-widest group">
            <span className="text-[11px] font-semibold tracking-[0.2em]">EXPLORE ETHOS</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
