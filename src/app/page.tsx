"use client";

import React from "react";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyKalarium from "@/components/WhyKalarium";
import MentorsGrid from "@/components/MentorsGrid";
import BlogsSection from "@/components/BlogsSection";
import ContactSection from "@/components/ContactSection";
import KalariumAnimatedLogo from "@/components/KalariumAnimatedLogo";
import { 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Activity, 
  Target, 
  Lock, 
  Sparkles,
  Compass
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-[#06060a] text-[#f8fafc] flex flex-col selection:bg-[#8b5cf6]/40 selection:text-white">
      {/* Scroll Progress Bar at the top of viewport */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#a855f7] z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Navigation Header with Live Bearing HUD */}
      <Navbar />

      <main className="flex-1">
        {/* Animated Front Page Hero with Logo Centerpiece */}
        <Hero />

        {/* Section 1: The Core Philosophy (Rethinking How Ambitious Minds Grow) */}
        <WhyKalarium />

        {/* Section 2: Direct 1-on-1 Access (Collaborate with Frontier Researchers) */}
        <MentorsGrid />

        {/* Section 3: The 14-Day Transformation Protocol */}
        <section id="transformation" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1e1e2d]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8b5cf6]/30 bg-[#0d0d14] text-xs font-semibold text-[#c084fc] uppercase tracking-wider mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>The 14-Day Protocol</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f8fafc] tracking-tight font-display leading-[1.1]">
              A calibrated sprint to shatter{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#818cf8]">
                learning plateaus.
              </span>
            </h2>
            <p className="mt-4 text-[#94a3b8] text-base sm:text-lg leading-relaxed">
              Two weeks engineered to deconstruct mental bottlenecks, rebuild axiomatic problem-solving speed, and unlock lasting intellectual autonomy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#0d0d14] border border-[#1e1e2d] hover:border-[#8b5cf6]/60 rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:shadow-[0_10px_35px_-10px_rgba(139,92,246,0.25)]">
              <div className="w-10 h-10 rounded-lg bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 flex items-center justify-center text-[#c084fc] font-bold text-sm mb-5 font-mono">
                01
              </div>
              <span className="text-[11px] font-mono text-[#a855f7] uppercase tracking-wider block mb-1">Days 1–3</span>
              <h3 className="text-xl font-bold text-[#f8fafc] mb-2 font-display">Diagnosing Conceptual Bottlenecks</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
                Your assigned mentor runs deep-dive diagnostic sessions to reveal surface-level memorization habits and rebuild axiomatic reasoning from scratch.
              </p>
              <ul className="space-y-2 text-xs text-[#94a3b8]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#a855f7]" />
                  <span>Cognitive friction analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#a855f7]" />
                  <span>Custom roadmap calibration</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#0d0d14] border border-[#1e1e2d] hover:border-[#8b5cf6]/60 rounded-2xl p-7 sm:p-8 transition-all duration-300 relative hover:shadow-[0_10px_35px_-10px_rgba(139,92,246,0.25)] bg-gradient-to-br from-[#0d0d14] via-[#110e20] to-[#15102a]">
              <div className="absolute top-4 right-4 px-2 py-0.5 rounded text-[10px] font-semibold bg-[#8b5cf6]/20 text-[#c084fc] border border-[#8b5cf6]/40 uppercase tracking-wider font-mono">
                Core Marathon
              </div>
              <div className="w-10 h-10 rounded-lg bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 flex items-center justify-center text-[#c084fc] font-bold text-sm mb-5 font-mono">
                02
              </div>
              <span className="text-[11px] font-mono text-[#a855f7] uppercase tracking-wider block mb-1">Days 4–10</span>
              <h3 className="text-xl font-bold text-[#f8fafc] mb-2 font-display">Paired First-Principles Problem Solving</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
                Daily 1-on-1 problem-solving marathons. Tackle Olympiad, IISER/IIT-level, and complex conceptual challenges without rote shortcuts.
              </p>
              <ul className="space-y-2 text-xs text-[#94a3b8]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#a855f7]" />
                  <span>Real-time paired problem solving</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#a855f7]" />
                  <span>Cross-domain intuition synthesis</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#0d0d14] border border-[#1e1e2d] hover:border-[#8b5cf6]/60 rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:shadow-[0_10px_35px_-10px_rgba(139,92,246,0.25)]">
              <div className="w-10 h-10 rounded-lg bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 flex items-center justify-center text-[#c084fc] font-bold text-sm mb-5 font-mono">
                03
              </div>
              <span className="text-[11px] font-mono text-[#a855f7] uppercase tracking-wider block mb-1">Days 11–14</span>
              <h3 className="text-xl font-bold text-[#f8fafc] mb-2 font-display">Calibrating Autonomous Velocity</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
                Final trajectory review, long-term self-directed study protocols, and institutional research/prep advice from your mentor.
              </p>
              <ul className="space-y-2 text-xs text-[#94a3b8]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#a855f7]" />
                  <span>Comprehensive performance rubric</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#a855f7]" />
                  <span>Lifelong peer network access</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Measurable Growth Telemetry */}
        <section id="tracking" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1e1e2d]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8b5cf6]/30 bg-[#0d0d14] text-xs font-semibold text-[#c084fc] uppercase tracking-wider mb-4">
                <Activity className="w-3.5 h-3.5" />
                <span>Measurable Growth Telemetry</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#f8fafc] tracking-tight font-display leading-[1.15]">
                Total clarity on your progress, without the pressure of arbitrary tests.
              </h2>
              <p className="mt-4 text-[#94a3b8] text-base sm:text-lg leading-relaxed">
                Every mentoring session, diagnostic milestone, and conceptual breakthrough is logged into your personal Kalarium dashboard. No guesswork—only measurable progress and tailored support.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0d0d14] border border-[#1e1e2d]">
                  <Target className="w-6 h-6 text-[#8b5cf6] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#f8fafc]">Targeted Mastery Index</h4>
                    <p className="text-xs text-[#94a3b8] mt-1">Tracks your depth in pure mathematics, physics mechanics, organic synthesis, and computational logic.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0d0d14] border border-[#1e1e2d]">
                  <Lock className="w-6 h-6 text-[#8b5cf6] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#f8fafc]">Private Mentor Notes</h4>
                    <p className="text-xs text-[#94a3b8] mt-1">Direct feedback notes, recommended academic papers, and customized challenge problem sets after every call.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Telemetry Card */}
            <div className="relative rounded-2xl bg-[#0d0d14] border border-[#1e1e2d] p-6 sm:p-8 shadow-2xl shadow-purple-950/20">
              <div className="flex items-center justify-between border-b border-[#1e1e2d] pb-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-[#64748b]">kalarium-trajectory-v1.log</span>
                </div>
                <span className="text-[11px] font-mono text-[#a855f7] bg-[#8b5cf6]/10 px-2 py-0.5 rounded border border-[#8b5cf6]/30">
                  Sprint Status: Active
                </span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="p-3 rounded-lg bg-[#141422] border border-[#1e1e2d] flex justify-between items-center">
                  <span className="text-[#94a3b8]">Problem Solving Velocity</span>
                  <span className="text-[#c084fc] font-bold">+240% vs Baseline</span>
                </div>
                <div className="p-3 rounded-lg bg-[#141422] border border-[#1e1e2d] flex justify-between items-center">
                  <span className="text-[#94a3b8]">Conceptual Axiom Depth</span>
                  <span className="text-emerald-400 font-bold">Tier 1 (IISER Verified)</span>
                </div>
                <div className="p-3 rounded-lg bg-[#141422] border border-[#1e1e2d] flex justify-between items-center">
                  <span className="text-[#94a3b8]">Assigned Mentor</span>
                  <span className="text-[#f8fafc]">Anirudh (IISER Tirupati)</span>
                </div>
                <div className="p-3 rounded-lg bg-[#141422] border border-[#1e1e2d] flex justify-between items-center">
                  <span className="text-[#94a3b8]">Sprint Day</span>
                  <span className="text-[#8b5cf6] font-bold">Day 07 of 14</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Open Invitation (Zero-Risk Trial) */}
        <section id="trial" className="py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="relative rounded-3xl bg-gradient-to-b from-[#141028] via-[#0d0d14] to-[#0d0d14] border border-[#8b5cf6]/35 p-8 sm:p-14 overflow-hidden shadow-2xl shadow-purple-900/30">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#8b5cf6]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#8b5cf6]/20 text-[#c084fc] border border-[#8b5cf6]/40 uppercase tracking-wider mb-6 font-mono">
                <Compass className="w-3.5 h-3.5 text-[#8b5cf6]" />
                Zero Risk • High Intensity
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f8fafc] tracking-tight font-display">
                Experience genuine 1-on-1 mentorship before deciding.
              </h2>
              <p className="mt-4 text-[#94a3b8] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                Connect directly with your mentor, receive your baseline diagnosis, and experience peer mentorship built for academic excellence without the pressure.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#start"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] hover:from-[#a855f7] hover:to-[#6d28d9] text-[#f8fafc] font-semibold text-base shadow-lg shadow-[#8b5cf6]/30 hover:shadow-[#a855f7]/50 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Begin Your Exploration</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#guides"
                  className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#141422] hover:bg-[#1a1a2e] text-[#94a3b8] hover:text-[#f8fafc] border border-[#1e1e2d] text-base font-medium transition-all"
                >
                  Review Your Guides
                </a>
              </div>

              <p className="mt-6 text-xs text-[#64748b]">
                Limited slots per mentor per cohort to preserve 1-on-1 pedagogical standards.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Field Notes & Honest Reflections */}
        <BlogsSection />

        {/* Section 7: Take the First Step (Contact / Exploration) */}
        <ContactSection />
      </main>

      {/* Sleek Dark Footer Featuring The New Kalarium Logo */}
      <footer className="border-t border-[#1e1e2d] bg-[#06060a] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand column with new animated logo */}
            <div className="space-y-4 md:col-span-1">
              <Link href="/" className="flex items-center space-x-3 text-[#f8fafc] group">
                <KalariumAnimatedLogo size="sm" className="group-hover:scale-110 transition-transform" />
                <span className="font-bold text-lg tracking-[0.22em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#f8fafc] to-[#c084fc] font-display">
                  Kalarium
                </span>
              </Link>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                A place to learn, explore, and grow — without the pressure. Relatable peer mentorship connecting students with scholars from IISER, IIT, and premier institutions.
              </p>
              <p className="text-xs font-semibold text-[#c084fc] tracking-wider uppercase font-mono">
                Learn. Explore. Grow.
              </p>
            </div>

            {/* Disciplines column */}
            <div>
              <h4 className="text-xs font-semibold text-[#f8fafc] uppercase tracking-wider mb-4 font-mono">
                Intellectual Domains
              </h4>
              <ul className="space-y-2.5 text-xs text-[#94a3b8]">
                <li><Link href="#guides" className="hover:text-[#c084fc] transition-colors">Axiomatic Physics &amp; Mechanics</Link></li>
                <li><Link href="#guides" className="hover:text-[#c084fc] transition-colors">Pure Mathematics &amp; Algebra</Link></li>
                <li><Link href="#guides" className="hover:text-[#c084fc] transition-colors">Medical Sciences &amp; Biology</Link></li>
                <li><Link href="#guides" className="hover:text-[#c084fc] transition-colors">Planetary Geophysics &amp; Space Tech</Link></li>
              </ul>
            </div>

            {/* Purpose-Driven Navigation links */}
            <div>
              <h4 className="text-xs font-semibold text-[#f8fafc] uppercase tracking-wider mb-4 font-mono">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-xs text-[#94a3b8]">
                <li><Link href="#philosophy" className="hover:text-[#c084fc] transition-colors">The Philosophy (Core Ethos)</Link></li>
                <li><Link href="#guides" className="hover:text-[#c084fc] transition-colors">Your Guides (Frontier Mentors)</Link></li>
                <li><Link href="#transformation" className="hover:text-[#c084fc] transition-colors">14-Day Transformation Sprint</Link></li>
                <li><Link href="#perspectives" className="hover:text-[#c084fc] transition-colors">Field Notes &amp; Perspectives</Link></li>
                <li><Link href="#start" className="hover:text-[#c084fc] transition-colors">Take the First Step</Link></li>
              </ul>
            </div>

            {/* Collegiate Network */}
            <div>
              <h4 className="text-xs font-semibold text-[#f8fafc] uppercase tracking-wider mb-4 font-mono">
                Collegiate Network
              </h4>
              <ul className="space-y-2.5 text-xs text-[#94a3b8]">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                  <span>IISER Tirupati</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                  <span>IIT Roorkee</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                  <span>GMC Thrissur</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                  <span>IISER Thiruvananthapuram</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#1e1e2d] flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748b] gap-4">
            <p>© {new Date().getFullYear()} Kalarium. All rights reserved. Recalibrating self-directed learning.</p>
            <div className="flex items-center space-x-6">
              <span className="inline-flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Kalarium Network Online
              </span>
              <a href="#start" className="hover:text-[#94a3b8] transition-colors">Support Desk</a>
              <a href="#philosophy" className="hover:text-[#94a3b8] transition-colors">Manifesto</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
