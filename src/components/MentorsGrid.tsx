"use client";

import React, { useState } from "react";
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

function getDomainIcon(tag: string) {
  switch (tag) {
    case "Physics & Math":
      return <Atom className="w-4 h-4 text-[#a855f7]" />;
    case "Biology & Chemistry":
      return <Stethoscope className="w-4 h-4 text-[#ec4899]" />;
    case "Strategy & Creative":
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
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredMentors = activeFilter === "all" 
    ? mentors 
    : mentors.filter((m) => m.tag.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="mentors" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1e1e2d]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#8b5cf6]/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Header Described by Transformative Purpose */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8b5cf6]/30 bg-[#0d0d14] text-xs font-semibold text-[#c084fc] uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Direct 1-on-1 Access</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f8fafc] tracking-tight font-display">
          Collaborate with researchers{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#818cf8]">
            pushing the frontier.
          </span>
        </h2>
        <p className="mt-4 text-[#94a3b8] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Not detached professors or rote coaches. Work directly alongside young scientists studying at IISER, IIT, and top medical colleges who treat you as an intellectual peer.
        </p>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMentors.map((mentor, index) => {
          const isFeatured = index === 0;
          return (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-2xl bg-[#0d0d14] border border-[#1e1e2d] hover:border-[#8b5cf6]/70 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between overflow-hidden hover:shadow-[0_12px_40px_-10px_rgba(139,92,246,0.3)] ${
                isFeatured ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#0d0d14] via-[#110e20] to-[#15102a]" : ""
              }`}
            >
              {/* Corner hover glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8b5cf6]/10 rounded-full blur-2xl group-hover:bg-[#a855f7]/25 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Header row with Avatar & Domain */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3.5">
                    {/* Avatar with glow and pulsing active dot */}
                    <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#1e1e2d] to-[#131320] border border-[#2e2e44] group-hover:border-[#8b5cf6]/80 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all duration-300">
                      <span className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#f8fafc] to-[#c084fc] font-display">
                        {getInitials(mentor.name)}
                      </span>
                      <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#0d0d14] flex items-center justify-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-[#f8fafc] group-hover:text-[#c084fc] transition-colors font-display">
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

                {/* Academic Affiliation */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141422]/90 border border-[#1e1e2d] text-xs font-medium text-[#e2e8f0] mb-4">
                  <GraduationCap className="w-3.5 h-3.5 text-[#8b5cf6]" />
                  <span>{mentor.institute}</span>
                </div>

                {/* Personal Mission Bio */}
                <p className="text-sm text-[#94a3b8] leading-relaxed relative before:content-['“'] before:text-[#8b5cf6] before:text-lg before:mr-0.5 after:content-['”'] after:text-[#8b5cf6] after:text-lg after:ml-0.5">
                  {mentor.bio}
                </p>
              </div>

              {/* Action: Connect 1-on-1 */}
              <div className="mt-6 pt-4 border-t border-[#1e1e2d] flex items-center justify-between">
                <span className="text-xs text-[#64748b] group-hover:text-[#94a3b8] transition-colors font-mono">
                  1-on-1 Mentorship Available
                </span>
                <a
                  href="#start"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c084fc] group-hover:text-white group-hover:translate-x-0.5 transition-all"
                >
                  <span>Request {mentor.name.split(" ")[0]} as Guide</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8b5cf6] group-hover:text-white transition-colors" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footnote */}
      <p className="mt-12 text-center text-xs sm:text-sm text-[#64748b] tracking-wide">
        More mentors joining soon. Photos and research profiles dropping as cohorts open.
      </p>
    </section>
  );
}
