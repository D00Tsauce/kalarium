"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyKalarium from "@/components/WhyKalarium";
import CoursesSection from "@/components/CoursesSection";
import CommunitySection from "@/components/CommunitySection";
import BlogsSection from "@/components/BlogsSection";
import MentorsGrid from "@/components/MentorsGrid";
import ContactSection from "@/components/ContactSection";
import { 
  Sparkles, 
  ArrowRight, 
  Compass, 
  Heart,
  LayoutDashboard,
  ShieldCheck,
  CheckCircle2
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
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#a855f7] z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Main Top Navigation Header */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section (Personalise Your Learning. Excel in Every Exam.) */}
        <Hero />

        {/* 2. Why Choose Us Section (5 core visual pillars from user spec) */}
        <WhyKalarium />

        {/* 3. Explore Courses Section (KEAM & NEET, CBSE, Kerala State Board, 1-on-1 Research) */}
        <CoursesSection />

        {/* 4. Discord & Instagram Communities Hub */}
        <CommunitySection />

        {/* 5. Blogs and Vlogs (Field notes & video breakdowns) */}
        <BlogsSection />

        {/* 6. Mentors Grid (Scholars from IISER, IIT & Medical Colleges) */}
        <MentorsGrid />

        {/* 7. Free Trial & Consultation Inquiry */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1e1e2d] bg-[#040407] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3.5">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-[#8b5cf6]/40 shadow-sm">
              <Image
                src="/kalarium-logo.png"
                alt="Kalarium Official Logo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-bold text-lg tracking-[0.2em] uppercase font-display bg-clip-text text-transparent bg-gradient-to-r from-[#f8fafc] via-[#e2e8f0] to-[#c084fc]">
                Kalarium
              </span>
              <p className="text-[11px] text-[#64748b]">
                Personal attention. Purposeful preparation. Progress that matters.
              </p>
            </div>
          </div>

          {/* Quick Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#94a3b8]">
            <Link href="#why-us" className="hover:text-[#c084fc] transition-colors">
              Why Choose Us
            </Link>
            <Link href="#courses" className="hover:text-[#c084fc] transition-colors">
              Explore Courses
            </Link>
            <Link href="#community" className="hover:text-[#c084fc] transition-colors">
              Discord &amp; Instagram
            </Link>
            <Link href="#blogs-vlogs" className="hover:text-[#c084fc] transition-colors">
              Blogs &amp; Vlogs
            </Link>
            <Link href="/dashboard" className="hover:text-[#c084fc] transition-colors font-semibold text-[#a855f7]">
              Student Dashboard
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#64748b] text-center md:text-right">
            © {new Date().getFullYear()} Kalarium. All rights reserved. Built for curious minds.
          </p>

        </div>
      </footer>
    </div>
  );
}
