"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import KalariumAnimatedLogo from "@/components/KalariumAnimatedLogo";
import { ArrowRight, Compass, ShieldCheck, Zap, Sparkles, CheckCircle2, LayoutDashboard, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Flashy Cosmic Aurora & Reticle Background */}
      <div className="absolute inset-0 pointer-events-none radial-glow-hero z-0" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-0 bg-[linear-gradient(to_right,#a855f7_1px,transparent_1px),linear-gradient(to_bottom,#a855f7_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_70%,transparent_100%)]"
      />

      {/* Flashy glowing nebula orbs in the background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#7c3aed]/30 via-[#8b5cf6]/35 to-[#c084fc]/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#6366f1]/15 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-[#ec4899]/15 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Top Pill: Free Trial & Enrolling */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#8b5cf6]/40 bg-[#0d0d14]/90 backdrop-blur-md text-xs sm:text-sm font-medium text-[#c084fc] shadow-lg shadow-[#8b5cf6]/10 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a855f7] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8b5cf6]" />
              </span>
              <span className="text-[#f8fafc] font-semibold">Kalarium Learning</span>
              <span className="text-[#64748b]">·</span>
              <span>2-Week Free Trial Available</span>
            </motion.div>

            {/* Core Headline from user spec */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#f8fafc] leading-[1.08] font-display"
            >
              Personalise Your Learning.{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#818cf8] drop-shadow-[0_8px_25px_rgba(139,92,246,0.35)]">
                Excel in Every Exam.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg sm:text-xl font-medium text-[#c084fc]/90"
            >
              Your goals. Your learning pace. Your path to success.
            </motion.p>

            {/* Concise, impactful overview */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-3 text-sm sm:text-base text-[#94a3b8] leading-relaxed max-w-2xl"
            >
              Get personalised learning plans, structured study schedules, individual attention, and expert guidance tailored to your needs. From CBSE and Kerala State Board examinations to competitive exams like KEAM and NEET, we help you strengthen concepts, master exam patterns, and prepare with confidence.
            </motion.p>

            {/* Visual Pills for Target Audience (as in reference image) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex flex-wrap gap-2.5 justify-center lg:justify-start"
            >
              <span className="px-3.5 py-1.5 rounded-lg bg-[#141424] border border-[#2e2e44] text-xs font-semibold text-[#c084fc] flex items-center gap-1.5 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#a855f7]" />
                Classes 8–12
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[#141424] border border-[#2e2e44] text-xs font-semibold text-[#c084fc] flex items-center gap-1.5 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#a855f7]" />
                CBSE &amp; Kerala State Boards
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[#141424] border border-[#2e2e44] text-xs font-semibold text-[#c084fc] flex items-center gap-1.5 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#a855f7]" />
                KEAM &amp; NEET
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 text-xs font-semibold text-white flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#c084fc]" />
                1-on-1 Researcher Mentors
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Link
                id="hero-primary-cta"
                href="#courses"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] hover:from-[#a855f7] hover:to-[#7c3aed] text-[#f8fafc] font-semibold text-base shadow-xl shadow-[#7c3aed]/40 hover:shadow-[#8b5cf6]/60 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 group"
              >
                <span>Explore Our Programmes</span>
                <ArrowRight className="w-5 h-5 text-[#f8fafc] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                id="hero-dashboard-cta"
                href="/dashboard"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#0d0d14]/90 hover:bg-[#161622] text-[#f8fafc] border border-[#1e1e2d] hover:border-[#8b5cf6]/50 font-medium text-base transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <LayoutDashboard className="w-4 h-4 text-[#a855f7]" />
                <span>Student Dashboard</span>
              </Link>
            </motion.div>

            {/* High-Impact Stat / Trust Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10 pt-6 border-t border-[#1e1e2d] grid grid-cols-3 gap-4 w-full max-w-lg text-left"
            >
              <div>
                <p className="text-xl sm:text-2xl font-black text-[#f8fafc] font-display">1-on-1</p>
                <p className="text-xs text-[#94a3b8]">Personal Attention</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-[#c084fc] font-display">100%</p>
                <p className="text-xs text-[#94a3b8]">Tailored Pace</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-[#f8fafc] font-display">0 Rote</p>
                <p className="text-xs text-[#94a3b8]">First-Principles</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Flashy Official Logo Showcase with Cosmic Backdrop Effects */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-6 sm:p-8 flex flex-col items-center justify-center"
            >
              {/* Flashy Logo Container with background orbit and nebula effects */}
              <KalariumAnimatedLogo
                size="hero"
                withFlashyEffects={true}
                withGlow={true}
                className="transform hover:scale-105 transition-transform duration-500 cursor-pointer"
              />

              {/* Floating Badges around the logo for edtech visual energy */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 right-0 sm:right-4 px-3.5 py-2 rounded-xl bg-[#0d0d14]/95 border border-[#8b5cf6]/50 shadow-xl shadow-[#8b5cf6]/20 backdrop-blur-md flex items-center gap-2"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-[#f8fafc]">Active Doubt Clearing</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 left-0 sm:left-4 px-3.5 py-2 rounded-xl bg-[#0d0d14]/95 border border-[#8b5cf6]/50 shadow-xl shadow-[#8b5cf6]/20 backdrop-blur-md flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#c084fc]" />
                <span className="text-xs font-semibold text-[#c084fc]">50% Off Early Bird</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
