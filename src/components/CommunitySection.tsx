"use client";

import React from "react";
import Link from "next/link";
import { 
  MessageSquare, 
  Users, 
  Sparkles, 
  ArrowUpRight, 
  Radio, 
  Send, 
  Heart, 
  Share2, 
  CheckCircle2 
} from "lucide-react";
import { motion } from "framer-motion";

export default function CommunitySection() {
  return (
    <section id="community" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1e1e2d]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-[#5865F2]/10 via-[#8b5cf6]/10 to-[#E1306C]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#8b5cf6]/30 bg-[#0d0d14] text-xs font-semibold text-[#c084fc] uppercase tracking-wider mb-4">
          <Users className="w-3.5 h-3.5" />
          <span>Active Learning Network</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#f8fafc] tracking-tight font-display leading-[1.15]">
          Learn Together.{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5865F2] via-[#a855f7] to-[#E1306C]">
            Never Walk Alone.
          </span>
        </h2>
        <p className="mt-4 text-[#94a3b8] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Surround yourself with curious minds, competitive exam aspirants, and researcher mentors. Join our vibrant community hubs across Discord and Instagram.
        </p>
      </div>

      {/* Two Column Grid: Discord Hub & Instagram Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Discord Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative rounded-3xl bg-[#0d0d14] border border-[#1e1e2d] hover:border-[#5865F2]/70 p-7 sm:p-9 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_-15px_rgba(88,101,242,0.3)] bg-gradient-to-br from-[#0d0d14] via-[#0f1026] to-[#121330]"
        >
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#5865F2]/15 rounded-full blur-3xl group-hover:bg-[#5865F2]/30 transition-all pointer-events-none" />

          <div>
            {/* Header info */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-[#5865F2]/20 border border-[#5865F2]/40 flex items-center justify-center text-[#5865F2] group-hover:scale-105 transition-transform">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#f8fafc] font-display">
                    Kalarium Discord
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-emerald-400 font-semibold">1,240+ Members Online</span>
                  </div>
                </div>
              </div>

              <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#5865F2]/15 text-[#818cf8] border border-[#5865F2]/30">
                #study-hub
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed mb-6">
              Instant doubt clearing, late-night study rooms, and weekly AMA sessions with research scholars from IISER, IIT, and Medical Colleges.
            </p>

            {/* Channels Mockup */}
            <div className="p-4 rounded-2xl bg-[#080812] border border-[#1e1e2d] space-y-2 mb-6">
              <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-[#14152b] text-[#cbd5e1]">
                <span className="font-mono text-[#5865F2]"># physics-first-principles</span>
                <span className="text-[10px] text-[#94a3b8]">Live doubt session</span>
              </div>
              <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-[#14152b] text-[#cbd5e1]">
                <span className="font-mono text-[#5865F2]"># keam-neet-sprints</span>
                <span className="text-[10px] text-emerald-400">Daily 5-question challenge</span>
              </div>
              <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-[#14152b] text-[#cbd5e1]">
                <span className="font-mono text-[#5865F2]"># silent-co-study-room-🔊</span>
                <span className="text-[10px] text-[#c084fc]">34 students studying</span>
              </div>
            </div>
          </div>

          <a
            id="join-discord-btn"
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 rounded-xl bg-[#5865F2] hover:bg-[#4752c4] text-white font-semibold text-sm shadow-xl shadow-[#5865F2]/25 transition-all flex items-center justify-center gap-2 group/btn"
          >
            <span>Join the Discord Community</span>
            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Instagram Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group relative rounded-3xl bg-[#0d0d14] border border-[#1e1e2d] hover:border-[#E1306C]/70 p-7 sm:p-9 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_-15px_rgba(225,48,108,0.25)] bg-gradient-to-br from-[#0d0d14] via-[#1a0f18] to-[#24101e]"
        >
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#E1306C]/15 rounded-full blur-3xl group-hover:bg-[#E1306C]/30 transition-all pointer-events-none" />

          <div>
            {/* Header info */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center text-white group-hover:scale-105 transition-transform shadow-md">
                  <svg className="w-7 h-7 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#f8fafc] font-display">
                    @kalarium.learn
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-[#f472b6] font-semibold">Instagram Community</span>
                    <span className="text-[#64748b]">·</span>
                    <span className="text-xs text-[#94a3b8]">Daily Reels &amp; Tips</span>
                  </div>
                </div>
              </div>

              <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#E1306C]/15 text-[#f472b6] border border-[#E1306C]/30">
                #visuals
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed mb-6">
              Bite-sized visual science, intuitive math proofs, exam strategy reels, and behind-the-scenes life of research scholars across Kerala and India.
            </p>

            {/* Reels Grid Preview Mockup */}
            <div className="grid grid-cols-3 gap-2.5 mb-6">
              <div className="relative aspect-[4/5] rounded-xl bg-[#140e16] border border-[#2e1a29] overflow-hidden p-2 flex flex-col justify-end">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="relative z-10 text-[11px] font-semibold text-white leading-tight">
                  Rotational Dynamics in 60s 🌀
                </span>
                <span className="relative z-10 text-[9px] text-[#f472b6]">24K Views</span>
              </div>
              <div className="relative aspect-[4/5] rounded-xl bg-[#140e16] border border-[#2e1a29] overflow-hidden p-2 flex flex-col justify-end">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="relative z-10 text-[11px] font-semibold text-white leading-tight">
                  KEAM Physics Speed Hacks ⚡
                </span>
                <span className="relative z-10 text-[9px] text-[#f472b6]">41K Views</span>
              </div>
              <div className="relative aspect-[4/5] rounded-xl bg-[#140e16] border border-[#2e1a29] overflow-hidden p-2 flex flex-col justify-end">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="relative z-10 text-[11px] font-semibold text-white leading-tight">
                  Day in the Life: IISER 🔬
                </span>
                <span className="relative z-10 text-[9px] text-[#f472b6]">18K Views</span>
              </div>
            </div>
          </div>

          <a
            id="follow-instagram-btn"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#f09433] via-[#bc1888] to-[#962fbf] hover:opacity-95 text-white font-semibold text-sm shadow-xl shadow-[#bc1888]/25 transition-all flex items-center justify-center gap-2 group/btn"
          >
            <span>Follow @kalarium.learn on Instagram</span>
            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
