"use client";

import React from "react";
import { 
  TrendingUp, 
  Users, 
  HeartHandshake, 
  Compass, 
  Target, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight,
  ShieldCheck,
  MessageSquare
} from "lucide-react";
import { motion } from "framer-motion";

export default function WhyKalarium() {
  return (
    <section id="why-us" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1e1e2d]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-[#8b5cf6]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#8b5cf6]/30 bg-[#0d0d14] text-xs font-semibold text-[#c084fc] uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Why Kalarium</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#f8fafc] tracking-tight font-display leading-[1.15]">
          Personal attention. Purposeful preparation.{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#818cf8]">
            Progress that matters.
          </span>
        </h2>
        <p className="mt-4 text-[#94a3b8] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Traditional coaching factories treat you like a roll number in a crowded hall. At Kalarium, every student gets tailored mentorship designed for genuine understanding and exam mastery.
        </p>
      </div>

      {/* Grid of the 5 Core Pillars with Visual Mockups */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Pillar 1: Progress you can track (Featured 2-column card) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative rounded-2xl bg-[#0d0d14] border border-[#1e1e2d] hover:border-[#8b5cf6]/60 p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_-10px_rgba(139,92,246,0.25)] md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#0d0d14] via-[#100d20] to-[#141026]"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#141424] border border-[#232338] group-hover:border-[#8b5cf6]/70 flex items-center justify-center transition-all group-hover:scale-110">
                <TrendingUp className="w-6 h-6 text-[#c084fc]" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#c084fc] bg-[#8b5cf6]/15 border border-[#8b5cf6]/30 px-3 py-1 rounded-full">
                Metric-Driven Growth
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#f8fafc] group-hover:text-[#c084fc] transition-colors mb-2 font-display">
              Progress you can track
            </h3>
            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed max-w-xl">
              Regular assessments and performance reviews help students identify weaknesses, track improvement and focus on what they need to work on next.
            </p>

            {/* Visual Tracker Mockup Widget */}
            <div className="mt-6 p-4 rounded-xl bg-[#08080e] border border-[#1e1e2d] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-[#f8fafc] font-medium">Physics: Mechanics &amp; Optics</span>
                  <span className="text-[#c084fc] font-bold">88% (+14% vs Diagnostic)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#1e1e2d] overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#8b5cf6] to-[#c084fc] rounded-full w-[88%]" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-[#f8fafc] font-medium">Math: Calculus &amp; Probability</span>
                  <span className="text-emerald-400 font-bold">92% (+20% vs Diagnostic)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#1e1e2d] overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-[92%]" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#1e1e2d] flex items-center justify-between text-xs text-[#64748b]">
            <span className="font-mono text-[#8b5cf6]">WEEKLY DIAGNOSTIC RADAR</span>
            <span className="text-[#c084fc] font-medium flex items-center gap-1">Available in Student Portal <ArrowUpRight className="w-3.5 h-3.5" /></span>
          </div>
        </motion.div>

        {/* Pillar 2: Mentors Who Understand You */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group relative rounded-2xl bg-[#0d0d14] border border-[#1e1e2d] hover:border-[#8b5cf6]/60 p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_-10px_rgba(139,92,246,0.25)]"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#141424] border border-[#232338] group-hover:border-[#8b5cf6]/70 flex items-center justify-center transition-all group-hover:scale-110">
                <Users className="w-6 h-6 text-[#a855f7]" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8] bg-[#141422] border border-[#1e1e2d] px-3 py-1 rounded-full">
                1-on-1 Guidance
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#f8fafc] group-hover:text-[#c084fc] transition-colors mb-2 font-display">
              Mentors Who Understand You
            </h3>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              Get guidance beyond the classroom. Ask questions freely, discuss your challenges and receive support in planning your studies and working towards your goals.
            </p>

            {/* Visual Chat Mockup */}
            <div className="mt-5 p-3 rounded-xl bg-[#08080e] border border-[#1e1e2d] space-y-2 text-xs">
              <div className="bg-[#141422] p-2 rounded-lg text-[#94a3b8] border border-[#1e1e2d]">
                <span className="text-[#a855f7] font-semibold block text-[10px]">Student</span>
                &quot;I keep freezing on rotational physics questions...&quot;
              </div>
              <div className="bg-[#8b5cf6]/15 p-2 rounded-lg text-[#f8fafc] border border-[#8b5cf6]/30">
                <span className="text-[#c084fc] font-semibold block text-[10px]">Anirudh (IISER Scholar)</span>
                &quot;Let&apos;s derive it together from first principles at 5 PM!&quot;
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#1e1e2d] text-xs text-[#64748b]">
            <span className="font-mono text-[#8b5cf6]">ZERO INTIMIDATION</span>
          </div>
        </motion.div>

        {/* Pillar 3: A Supportive Learning Community */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group relative rounded-2xl bg-[#0d0d14] border border-[#1e1e2d] hover:border-[#8b5cf6]/60 p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_-10px_rgba(139,92,246,0.25)]"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#141424] border border-[#232338] group-hover:border-[#8b5cf6]/70 flex items-center justify-center transition-all group-hover:scale-110">
                <HeartHandshake className="w-6 h-6 text-[#ec4899]" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8] bg-[#141422] border border-[#1e1e2d] px-3 py-1 rounded-full">
                Safe &amp; Inclusive
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#f8fafc] group-hover:text-[#c084fc] transition-colors mb-2 font-display">
              A Supportive Learning Community
            </h3>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              Learn in an encouraging, non-judgmental environment where curiosity is welcome, mistakes are part of learning, and students grow together.
            </p>

            {/* Visual community tags */}
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-[#161626] border border-[#232338] text-[#c084fc]">
                ✦ Discord Study Rooms
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#161626] border border-[#232338] text-[#e2e8f0]">
                ✦ Peer Problem Circles
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#161626] border border-[#232338] text-emerald-400">
                ✦ Zero Fear of Asking
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#1e1e2d] text-xs text-[#64748b]">
            <span className="font-mono text-[#8b5cf6]">COMMUNITY DRIVEN</span>
          </div>
        </motion.div>

        {/* Pillar 4: Personalised Learning Plans */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="group relative rounded-2xl bg-[#0d0d14] border border-[#1e1e2d] hover:border-[#8b5cf6]/60 p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_-10px_rgba(139,92,246,0.25)]"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#141424] border border-[#232338] group-hover:border-[#8b5cf6]/70 flex items-center justify-center transition-all group-hover:scale-110">
                <Compass className="w-6 h-6 text-[#38bdf8]" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8] bg-[#141422] border border-[#1e1e2d] px-3 py-1 rounded-full">
                Custom Roadmap
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#f8fafc] group-hover:text-[#c084fc] transition-colors mb-2 font-display">
              Personalised Learning Plans
            </h3>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              Every student learns differently. We tailor learning schedules, practice and guidance to each student&apos;s learning pace, strengths and areas for improvement.
            </p>

            {/* Visual Roadmap Pill */}
            <div className="mt-5 p-3 rounded-xl bg-[#08080e] border border-[#1e1e2d] space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Diagnostics identify weak core topics</span>
              </div>
              <div className="flex items-center gap-2 text-[#c084fc]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Timetable syncs with your school hours</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#1e1e2d] text-xs text-[#64748b]">
            <span className="font-mono text-[#8b5cf6]">ADAPTIVE TO YOU</span>
          </div>
        </motion.div>

        {/* Pillar 5: Focused Exam Preparation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="group relative rounded-2xl bg-[#0d0d14] border border-[#1e1e2d] hover:border-[#8b5cf6]/60 p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_-10px_rgba(139,92,246,0.25)] md:col-span-2 lg:col-span-1 bg-gradient-to-br from-[#0d0d14] via-[#120f24] to-[#18122e] border-[#8b5cf6]/40"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#141424] border border-[#232338] group-hover:border-[#8b5cf6]/70 flex items-center justify-center transition-all group-hover:scale-110">
                <Target className="w-6 h-6 text-[#f59e0b]" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#c084fc] bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 px-3 py-1 rounded-full">
                Board &amp; Entrance
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#f8fafc] group-hover:text-[#c084fc] transition-colors mb-2 font-display">
              Focused Exam Preparation
            </h3>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              From CBSE and Kerala State Board exams to KEAM and NEET, prepare with structured syllabus coverage, targeted practice and exam-pattern-based assessments.
            </p>

            {/* Exam Badges */}
            <div className="mt-5 grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 rounded-lg bg-[#08080e] border border-[#1e1e2d] text-center font-medium text-[#f8fafc]">
                CBSE 10 &amp; 12
              </div>
              <div className="p-2 rounded-lg bg-[#08080e] border border-[#1e1e2d] text-center font-medium text-[#f8fafc]">
                Kerala DHSE (+1, +2)
              </div>
              <div className="p-2 rounded-lg bg-[#08080e] border border-[#8b5cf6]/40 text-center font-semibold text-[#c084fc]">
                KEAM 2026/27
              </div>
              <div className="p-2 rounded-lg bg-[#08080e] border border-[#8b5cf6]/40 text-center font-semibold text-[#c084fc]">
                NEET Mastery
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#1e1e2d] text-xs text-[#64748b]">
            <span className="font-mono text-[#8b5cf6]">EXAM-PROVEN BLUEPRINT</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
