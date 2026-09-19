"use client";

import React from "react";
import mentorsData from "@/data/mentors.json";
import { GraduationCap, ArrowUpRight, Sparkles, BookOpen, Atom, Stethoscope, Briefcase, Globe, Binary } from "lucide-react";
import { motion } from "framer-motion";

interface Mentor {
  id: string;
  name: string;
  role: string;
  institute: string;
  bio: string;
  tag: string;
}

// Helper to select an appropriate domain icon
function getDomainIcon(tag: string) {
  switch (tag) {
    case "Physics & Math":
      return <Atom className="w-4 h-4 text-[#a855f7]" />;
    case "Biology & Chemistry":
      return <Stethoscope className="w-4 h-4 text-[#ec4899]" />;
    case "Strategy & Mentorship":
      return <Briefcase className="w-4 h-4 text-[#38bdf8]" />;
    case "Geophysics & Tech":
      return <Globe className="w-4 h-4 text-[#34d399]" />;
    case "Pure Mathematics":
      return <Binary className="w-4 h-4 text-[#f59e0b]" />;
    default:
      return <BookOpen className="w-4 h-4 text-[#8b5cf6]" />;
  }
}

// Generate initials for avatar placeholders
function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function MentorsGrid() {
  const mentors = mentorsData as Mentor[];

  return (
    <section id="mentors" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#8b5cf6]/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8b5cf6]/30 bg-[#0d0d14] text-xs font-semibold text-[#c084fc] uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Minds of Kalarium</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f8fafc] tracking-tight">
          Mentorship by Scholars Who Live the Science
        </h2>
        <p className="mt-4 text-[#94a3b8] text-base sm:text-lg">
          No generic coaching or disconnected lecture slides. You work 1-on-1 with mentors actively studying at premier national institutes.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor, index) => {
          const isFeatured = index === 0; // Founder card has featured bento emphasis
          return (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-2xl bg-[#0d0d14] border border-[#1e1e2d] hover:border-[#8b5cf6]/60 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between overflow-hidden hover:shadow-[0_10px_35px_-10px_rgba(139,92,246,0.3)] ${
                isFeatured ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#0d0d14] via-[#10101a] to-[#141024]" : ""
              }`}
            >
              {/* Subtle top-right card corner glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8b5cf6]/10 rounded-full blur-2xl group-hover:bg-[#a855f7]/20 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Header row with Avatar and Badges */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3.5">
                    {/* Stylized Avatar Placeholder */}
                    <div className="relative flex items-center justify-center w-13 h-13 rounded-xl bg-gradient-to-br from-[#1e1e2d] to-[#131320] border border-[#2e2e44] group-hover:border-[#8b5cf6]/80 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all duration-300">
                      <span className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#f8fafc] to-[#c084fc]">
                        {getInitials(mentor.name)}
                      </span>
                      {/* Active mentor status dot */}
                      <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#0d0d14] flex items-center justify-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-[#f8fafc] group-hover:text-[#c084fc] transition-colors">
                          {mentor.name}
                        </h3>
                        {isFeatured && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#8b5cf6]/20 text-[#c084fc] border border-[#8b5cf6]/40">
                            Founder
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-[#94a3b8] font-medium mt-0.5">
                        {mentor.role}
                      </p>
                    </div>
                  </div>

                  {/* Domain Tag */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#161626] border border-[#232338] text-[#c084fc] group-hover:border-[#8b5cf6]/40 transition-colors shrink-0">
                    {getDomainIcon(mentor.tag)}
                    <span className="hidden sm:inline">{mentor.tag}</span>
                  </span>
                </div>

                {/* Institute Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141422]/90 border border-[#1e1e2d] text-xs font-medium text-[#e2e8f0] mb-4">
                  <GraduationCap className="w-3.5 h-3.5 text-[#8b5cf6]" />
                  <span>{mentor.institute}</span>
                </div>

                {/* Bio snippet */}
                <p className="text-sm text-[#94a3b8] leading-relaxed relative before:content-['“'] before:text-[#8b5cf6] before:text-lg before:mr-0.5 after:content-['”'] after:text-[#8b5cf6] after:text-lg after:ml-0.5">
                  {mentor.bio}
                </p>
              </div>

              {/* Card Footer CTA */}
              <div className="mt-6 pt-4 border-t border-[#1e1e2d] flex items-center justify-between">
                <span className="text-xs text-[#64748b] group-hover:text-[#94a3b8] transition-colors">
                  1-on-1 Focus Sessions Available
                </span>
                <a
                  href="#trial"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c084fc] group-hover:text-white group-hover:translate-x-0.5 transition-all"
                >
                  <span>Request Mentor</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8b5cf6] group-hover:text-white transition-colors" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
