"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COURSES, Course } from "@/data/courses";
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  UserCheck, 
  Tag, 
  BookOpen,
  Compass
} from "lucide-react";
import { motion } from "framer-motion";

export default function CoursesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "KEAM & NEET", "CBSE", "Kerala State Board", "Foundations", "1-on-1 Research"];

  const filteredCourses = selectedCategory === "All"
    ? COURSES
    : COURSES.filter((c) => c.category === selectedCategory);

  return (
    <section id="courses" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1e1e2d]">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#8b5cf6]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#8b5cf6]/30 bg-[#0d0d14] text-xs font-semibold text-[#c084fc] uppercase tracking-wider mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Curated Programmes</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#f8fafc] tracking-tight font-display leading-[1.15]">
          Explore Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#818cf8]">
            Learning Tracks.
          </span>
        </h2>
        <p className="mt-4 text-[#94a3b8] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          From Kerala Board &amp; CBSE to KEAM and NEET entrance exams. Choose your path and get paired with dedicated research mentors.
        </p>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white shadow-lg shadow-[#7c3aed]/30 scale-105"
                  : "bg-[#0d0d14] text-[#94a3b8] hover:text-[#f8fafc] border border-[#1e1e2d] hover:border-[#8b5cf6]/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredCourses.map((course, idx) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="group relative rounded-2xl bg-[#0d0d14] border border-[#1e1e2d] hover:border-[#8b5cf6]/70 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between overflow-hidden hover:shadow-[0_15px_45px_-10px_rgba(139,92,246,0.3)] bg-gradient-to-b from-[#0d0d14] to-[#110e20]"
          >
            {/* Top ambient hover glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8b5cf6]/10 rounded-full blur-2xl group-hover:bg-[#a855f7]/25 transition-all duration-500 pointer-events-none" />

            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 text-[#c084fc]">
                  {course.grade}
                </span>

                {course.badge && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/15 border border-amber-500/30 text-amber-300">
                    <Sparkles className="w-2.5 h-2.5" />
                    {course.badge}
                  </span>
                )}
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl font-bold text-[#f8fafc] group-hover:text-[#c084fc] transition-colors font-display mb-2">
                {course.title}
              </h3>
              <p className="text-xs text-[#c084fc] font-medium mb-3">
                {course.target}
              </p>
              <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">
                {course.tagline}
              </p>

              {/* Highlights List */}
              <div className="space-y-2.5 mb-6 pt-4 border-t border-[#1e1e2d]">
                {course.highlights.slice(0, 3).map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#cbd5e1]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#a855f7] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Mentor Lead Info */}
              <div className="p-3 rounded-xl bg-[#08080e] border border-[#1e1e2d] mb-6 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#8b5cf6]" />
                  <div>
                    <span className="text-[#f8fafc] font-semibold block">{course.mentorLead.name}</span>
                    <span className="text-[11px] text-[#94a3b8]">{course.mentorLead.institute}</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#a855f7] bg-[#141424] px-2 py-1 rounded">
                  1-on-1 Lead
                </span>
              </div>
            </div>

            {/* Bottom: Pricing & Action */}
            <div className="pt-4 border-t border-[#1e1e2d]">
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-[#f8fafc] font-display">
                      ₹{course.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-sm text-[#64748b] line-through">
                      ₹{course.originalPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-semibold">
                    Flat 50% Early Bird Discount
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-[#94a3b8] block">Format</span>
                  <span className="text-xs font-semibold text-[#c084fc]">Interactive 1-on-1</span>
                </div>
              </div>

              <Link
                id={`enroll-course-${course.id}`}
                href={`/courses/${course.id}`}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] hover:from-[#a855f7] hover:to-[#7c3aed] text-white font-semibold text-sm shadow-lg shadow-[#7c3aed]/30 hover:shadow-[#8b5cf6]/50 transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>View Overview &amp; Enroll</span>
                <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
