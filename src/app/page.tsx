"use client";

import React from "react";
import Link from "next/link";
import Navbar, { KalariumLogo } from "@/components/Navbar";
import Hero from "@/components/Hero";
import MentorsGrid from "@/components/MentorsGrid";
import { 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Activity, 
  Target, 
  Lock, 
  Sparkles
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#06060a] text-[#f8fafc] flex flex-col selection:bg-[#8b5cf6]/40 selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Mentors Bento Grid Section */}
        <MentorsGrid />

        {/* Curriculum Architecture Section */}
        <section id="curriculum" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1e1e2d]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8b5cf6]/30 bg-[#0d0d14] text-xs font-semibold text-[#c084fc] uppercase tracking-wider mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>Sprint Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f8fafc] tracking-tight">
              What Happens in the 2-Week Upgrade
            </h2>
            <p className="mt-4 text-[#94a3b8] text-base sm:text-lg">
              A high-cadence, structured protocol designed to identify mental bottlenecks and build genuine first-principles problem-solving speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#0d0d14] border border-[#1e1e2d] hover:border-[#8b5cf6]/50 rounded-2xl p-7 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 flex items-center justify-center text-[#c084fc] font-bold text-sm mb-5">
                01
              </div>
              <h3 className="text-xl font-bold text-[#f8fafc] mb-2">Diagnostic & Mental Model Audit</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
                Days 1–3: Your assigned mentor runs deep-dive diagnostic sessions to reveal surface-level memorization habits and rebuild axiomatic reasoning.
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

            <div className="bg-[#0d0d14] border border-[#1e1e2d] hover:border-[#8b5cf6]/50 rounded-2xl p-7 transition-all duration-300 relative">
              <div className="absolute top-4 right-4 px-2 py-0.5 rounded text-[10px] font-semibold bg-[#8b5cf6]/20 text-[#c084fc] border border-[#8b5cf6]/40 uppercase">
                Core Phase
              </div>
              <div className="w-10 h-10 rounded-lg bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 flex items-center justify-center text-[#c084fc] font-bold text-sm mb-5">
                02
              </div>
              <h3 className="text-xl font-bold text-[#f8fafc] mb-2">First-Principles Deconstruction</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
                Days 4–10: Daily 1-on-1 problem-solving marathons. Tackle Olympiad, IISER/IIT-level, and complex conceptual challenges without rote shortcuts.
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

            <div className="bg-[#0d0d14] border border-[#1e1e2d] hover:border-[#8b5cf6]/50 rounded-2xl p-7 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 flex items-center justify-center text-[#c084fc] font-bold text-sm mb-5">
                03
              </div>
              <h3 className="text-xl font-bold text-[#f8fafc] mb-2">Autonomous Velocity Benchmark</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
                Days 11–14: Final trajectory review, long-term self-directed study protocols, and institutional research/prep advice from your mentor.
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

        {/* Real-time Tracking Section */}
        <section id="tracking" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1e1e2d]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8b5cf6]/30 bg-[#0d0d14] text-xs font-semibold text-[#c084fc] uppercase tracking-wider mb-4">
                <Activity className="w-3.5 h-3.5" />
                <span>Transparent Analytics</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#f8fafc] tracking-tight">
                Quantified Academic Trajectory Tracking
              </h2>
              <p className="mt-4 text-[#94a3b8] text-base sm:text-lg leading-relaxed">
                Every mentoring session, diagnostic milestone, and conceptual breakthrough is logged into your personal Kalarium dashboard. No guesswork—only measurable progress.
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

            {/* Dashboard Mockup Card */}
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

        {/* Free Trial Conversion Section */}
        <section id="trial" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="relative rounded-3xl bg-gradient-to-b from-[#141028] via-[#0d0d14] to-[#0d0d14] border border-[#8b5cf6]/30 p-8 sm:p-14 overflow-hidden shadow-2xl shadow-purple-900/30">
            {/* Glow background accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#8b5cf6]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#8b5cf6]/20 text-[#c084fc] border border-[#8b5cf6]/40 uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Zero Risk • High Intensity
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f8fafc] tracking-tight">
                Launch Your 2-Week Trial Today
              </h2>
              <p className="mt-4 text-[#94a3b8] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                Connect directly with your mentor, receive your baseline diagnosis, and experience peer mentorship built for academic excellence.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] hover:from-[#a855f7] hover:to-[#6d28d9] text-[#f8fafc] font-semibold text-base shadow-lg shadow-[#8b5cf6]/30 hover:shadow-[#a855f7]/50 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Claim Your Spot</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#mentors"
                  className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#141422] hover:bg-[#1a1a2e] text-[#94a3b8] hover:text-[#f8fafc] border border-[#1e1e2d] text-base font-medium transition-all"
                >
                  Review Mentors Again
                </a>
              </div>

              <p className="mt-6 text-xs text-[#64748b]">
                Limited slots per mentor per cohort to maintain 1-on-1 pedagogical standards.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Sleek Dark Footer */}
      <footer className="border-t border-[#1e1e2d] bg-[#06060a] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand column */}
            <div className="space-y-4 md:col-span-1">
              <Link href="/" className="flex items-center space-x-3 text-[#f8fafc] group">
                <div className="relative group-hover:scale-105 transition-transform">
                  <KalariumLogo className="w-8 h-8" />
                </div>
                <span className="font-bold text-lg tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#f8fafc] to-[#c084fc]">
                  Kalarium
                </span>
              </Link>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Elite peer mentorship platform connecting driven students with scholars from IISER, IIT, and top medical colleges.
              </p>
              <div className="flex items-center space-x-3 pt-2 text-[#64748b]">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#c084fc] transition-colors p-1" aria-label="GitHub">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#c084fc] transition-colors p-1" aria-label="X (formerly Twitter)">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#c084fc] transition-colors p-1" aria-label="LinkedIn">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation links */}
            <div>
              <h4 className="text-xs font-semibold text-[#f8fafc] uppercase tracking-wider mb-4">
                Disciplines
              </h4>
              <ul className="space-y-2.5 text-xs text-[#94a3b8]">
                <li><Link href="#mentors" className="hover:text-[#c084fc] transition-colors">Physics & Pure Math</Link></li>
                <li><Link href="#mentors" className="hover:text-[#c084fc] transition-colors">Biology & Medical Sciences</Link></li>
                <li><Link href="#mentors" className="hover:text-[#c084fc] transition-colors">Geophysics & Space Tech</Link></li>
                <li><Link href="#mentors" className="hover:text-[#c084fc] transition-colors">Strategic Problem Solving</Link></li>
              </ul>
            </div>

            {/* Platform links */}
            <div>
              <h4 className="text-xs font-semibold text-[#f8fafc] uppercase tracking-wider mb-4">
                Platform
              </h4>
              <ul className="space-y-2.5 text-xs text-[#94a3b8]">
                <li><Link href="#curriculum" className="hover:text-[#c084fc] transition-colors">2-Week Sprint Architecture</Link></li>
                <li><Link href="#tracking" className="hover:text-[#c084fc] transition-colors">Quantified Progress Tracking</Link></li>
                <li><Link href="#trial" className="hover:text-[#c084fc] transition-colors">Application Process</Link></li>
                <li><Link href="#mentors" className="hover:text-[#c084fc] transition-colors">Mentor Roster</Link></li>
              </ul>
            </div>

            {/* Institutes */}
            <div>
              <h4 className="text-xs font-semibold text-[#f8fafc] uppercase tracking-wider mb-4">
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
            <p>© {new Date().getFullYear()} Kalarium. All rights reserved. First-principles peer mentorship.</p>
            <div className="flex items-center space-x-6">
              <span className="inline-flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Kalarium Network Online
              </span>
              <a href="#privacy" className="hover:text-[#94a3b8] transition-colors">Privacy</a>
              <a href="#terms" className="hover:text-[#94a3b8] transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
