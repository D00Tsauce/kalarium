"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  Target, 
  CheckCircle2, 
  Video, 
  MessageSquare, 
  BookOpen, 
  Download, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Award, 
  Bell, 
  CheckSquare, 
  AlertCircle,
  ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";

interface StudentInfo {
  name: string;
  district: string;
  phone: string;
  grade: string;
  courseTitle: string;
  paymentId?: string;
  mentorLead?: string;
}

export default function StudentDashboardPage() {
  const [student, setStudent] = useState<StudentInfo>({
    name: "Adithya Varma",
    district: "Ernakulam, Kerala",
    phone: "98471 23456",
    grade: "Classes 11 & 12",
    courseTitle: "KEAM & NEET Intensive Mastery",
    paymentId: "PAY-842918",
    mentorLead: "Anirudh (IISER Tirupati)"
  });

  const [activeTab, setActiveTab] = useState<"overview" | "plan" | "assessments" | "mentor">("overview");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("kalarium_student");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setStudent((prev) => ({
            ...prev,
            ...parsed,
            district: parsed.district ? `${parsed.district}, Kerala` : prev.district,
          }));
        } catch {
          // fallback to default
        }
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#06060a] text-[#f8fafc] flex flex-col selection:bg-[#8b5cf6]/40 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        {/* Welcome Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#141028] via-[#100d20] to-[#0d0d14] border border-[#8b5cf6]/40 p-6 sm:p-8 mb-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#8b5cf6]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Active Enrollment
                </span>
                <span className="text-xs text-[#94a3b8] font-mono">
                  ID: {student.paymentId}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#f8fafc] font-display">
                Welcome back, {student.name}!
              </h1>
              <p className="mt-1 text-sm sm:text-base text-[#c084fc] font-medium">
                {student.courseTitle} • {student.district}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-[#94a3b8] max-w-xl">
                Personal attention. Purposeful preparation. Progress that matters.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="https://meet.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] hover:from-[#a855f7] hover:to-[#8b5cf6] text-white text-xs sm:text-sm font-semibold shadow-lg shadow-[#7c3aed]/30 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <Video className="w-4 h-4" />
                <span>Join 1-on-1 Mentor Room</span>
              </Link>

              <Link
                href="/#courses"
                className="px-4 py-3 rounded-xl bg-[#0d0d14] border border-[#1e1e2d] hover:border-[#8b5cf6]/50 text-xs sm:text-sm font-medium text-[#e2e8f0] transition-colors"
              >
                Explore More Tracks
              </Link>
            </div>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="mt-8 pt-4 border-t border-[#1e1e2d] flex items-center gap-2 overflow-x-auto">
            {(["overview", "plan", "assessments", "mentor"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 ${
                  activeTab === tab
                    ? "bg-[#8b5cf6] text-white shadow-md shadow-[#8b5cf6]/30"
                    : "text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#141424]"
                }`}
              >
                {tab === "overview" && "Dashboard Overview"}
                {tab === "plan" && "Personalised Plan"}
                {tab === "assessments" && "Progress You Can Track"}
                {tab === "mentor" && "Mentor Office Hours"}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Core Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Left Columns: Progress & Schedule */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. Progress You Can Track (Assessment & Diagnostics) */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0d0d14] border border-[#1e1e2d]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/15 border border-[#8b5cf6]/30 flex items-center justify-center text-[#c084fc]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#f8fafc] font-display">
                      Progress You Can Track
                    </h2>
                    <p className="text-xs text-[#94a3b8]">
                      Regular assessments and performance reviews identifying weaknesses and next milestones.
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono text-[#a855f7] bg-[#141424] px-3 py-1 rounded-full border border-[#1e1e2d]">
                  Week 4 Review
                </span>
              </div>

              {/* Metric Breakdown Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-[#08080e] border border-[#1e1e2d]">
                  <span className="text-xs text-[#94a3b8] block">Overall Syllabus</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-black text-[#f8fafc] font-display">52%</span>
                    <span className="text-xs text-emerald-400 font-medium">+12% this week</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#1e1e2d] mt-3 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#8b5cf6] to-[#c084fc] rounded-full w-[52%]" />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#08080e] border border-[#1e1e2d]">
                  <span className="text-xs text-[#94a3b8] block">Latest Mock Test Score</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-black text-[#c084fc] font-display">174 / 200</span>
                    <span className="text-xs text-emerald-400 font-medium">87th Percentile</span>
                  </div>
                  <span className="text-[11px] text-[#94a3b8] block mt-2">
                    KEAM Full Model Paper #2
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#08080e] border border-[#1e1e2d]">
                  <span className="text-xs text-[#94a3b8] block">1-on-1 Sessions Done</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-black text-white font-display">7 Hours</span>
                    <span className="text-xs text-[#c084fc] font-medium">100% Attendance</span>
                  </div>
                  <span className="text-[11px] text-[#94a3b8] block mt-2">
                    Direct with IISER Scholar
                  </span>
                </div>
              </div>

              {/* Diagnostic Strengths vs Focus Areas */}
              <div className="p-4 rounded-xl bg-[#08080e] border border-[#1e1e2d] space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#cbd5e1]">
                  Diagnostic Deep-Dive
                </h3>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#f8fafc] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Rotational Dynamics &amp; Angular Momentum (Physics)
                    </span>
                    <span className="text-emerald-400 font-mono font-semibold">94% Mastery (Strength)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#f8fafc] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Differential Equations &amp; Integrals (Math)
                    </span>
                    <span className="text-emerald-400 font-mono font-semibold">91% Mastery (Strength)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#f8fafc] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      Chemical Thermodynamics &amp; Ionic Equilibrium
                    </span>
                    <span className="text-amber-400 font-mono font-semibold">58% Mastery (Focus Target)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Personalised Learning Plan (Tailored to your pace) */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0d0d14] border border-[#1e1e2d]">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/15 border border-[#8b5cf6]/30 flex items-center justify-center text-[#c084fc]">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#f8fafc] font-display">
                      Personalised Learning Schedule
                    </h2>
                    <p className="text-xs text-[#94a3b8]">
                      Custom schedule matched to your school timetable and personal learning speed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#08080e] border border-[#1e1e2d] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <CheckSquare className="w-4 h-4 text-emerald-400" />
                    <div>
                      <span className="text-[#f8fafc] font-semibold block">
                        Today: First-Principles Review on Ionic Equilibrium
                      </span>
                      <span className="text-[11px] text-[#94a3b8]">Assigned by Anirudh • 15 Conceptual Practice Problems</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#141424] text-[#c084fc] font-mono">
                    Due 8:00 PM
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#08080e] border border-[#1e1e2d] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <Video className="w-4 h-4 text-[#8b5cf6]" />
                    <div>
                      <span className="text-[#f8fafc] font-semibold block">
                        Tomorrow, 5:30 PM: 1-on-1 Google Meet Session
                      </span>
                      <span className="text-[11px] text-[#94a3b8]">Topic: Electrostatics High-Yield Shortcuts for KEAM</span>
                    </div>
                  </div>
                  <Link
                    href="https://meet.google.com"
                    target="_blank"
                    className="px-2.5 py-1 rounded bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 text-[#c084fc] font-semibold hover:bg-[#8b5cf6]/30 transition-colors flex items-center gap-1"
                  >
                    <span>Room Link</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>

                <div className="p-3.5 rounded-xl bg-[#08080e] border border-[#1e1e2d] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <Target className="w-4 h-4 text-[#f59e0b]" />
                    <div>
                      <span className="text-[#f8fafc] font-semibold block">
                        Sunday, 10:00 AM: Weekly Diagnostic Assessment #5
                      </span>
                      <span className="text-[11px] text-[#94a3b8]">Timed Exam-Pattern Simulation (KEAM &amp; CBSE Physics)</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#141424] text-[#f59e0b] font-mono">
                    Upcoming
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Mentor Support & Community */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Dedicated Mentor Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0d0d14] via-[#110e20] to-[#15102a] border border-[#8b5cf6]/40">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#c084fc] uppercase tracking-wider font-semibold">
                  Assigned Mentor
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 flex items-center justify-center text-[#c084fc] font-black font-display text-lg">
                  A
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#f8fafc] font-display">
                    {student.mentorLead || "Anirudh"}
                  </h3>
                  <p className="text-xs text-[#94a3b8]">
                    IISER Tirupati • Physics &amp; Mathematics
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#cbd5e1] leading-relaxed mb-4">
                &quot;Feel free to ping me anytime you get stuck on a derivation or conceptual nuance. There are no silly questions.&quot;
              </p>

              <div className="space-y-2">
                <Link
                  href="https://wa.me"
                  target="_blank"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#08080e] hover:bg-[#141424] border border-[#1e1e2d] hover:border-[#8b5cf6]/50 text-xs font-semibold text-[#f8fafc] flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#8b5cf6]" />
                  <span>Ask Mentor on WhatsApp</span>
                </Link>

                <Link
                  href="https://meet.google.com"
                  target="_blank"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md shadow-[#8b5cf6]/30 transition-colors"
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>Schedule Instant 1-on-1 Call</span>
                </Link>
              </div>
            </div>

            {/* Supportive Learning Community Shortcut */}
            <div className="p-6 rounded-2xl bg-[#0d0d14] border border-[#1e1e2d]">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-[#5865F2]" />
                <h3 className="text-sm font-bold text-[#f8fafc] font-display">
                  Supportive Community
                </h3>
              </div>

              <p className="text-xs text-[#94a3b8] leading-relaxed mb-4">
                Connect with fellow Kerala &amp; CBSE students in our private Discord study rooms. Peer learning without pressure.
              </p>

              <Link
                href="https://discord.gg"
                target="_blank"
                className="w-full py-2.5 px-4 rounded-xl bg-[#5865F2] hover:bg-[#4752c4] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md shadow-[#5865F2]/25 transition-colors"
              >
                <span>Enter Discord Study Lounge</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Exam Resources & Downloads */}
            <div className="p-6 rounded-2xl bg-[#0d0d14] border border-[#1e1e2d]">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-[#c084fc]" />
                <h3 className="text-sm font-bold text-[#f8fafc] font-display">
                  Exam Vault &amp; Formulas
                </h3>
              </div>

              <div className="space-y-2 text-xs">
                <button
                  onClick={() => alert("Downloading Kalarium First-Principles Physics Formula Guide...")}
                  className="w-full p-2.5 rounded-lg bg-[#08080e] hover:bg-[#141424] border border-[#1e1e2d] text-left flex items-center justify-between text-[#cbd5e1] hover:text-[#f8fafc] transition-colors"
                >
                  <span>Physics Formula Vault (KEAM &amp; NEET)</span>
                  <Download className="w-3.5 h-3.5 text-[#8b5cf6]" />
                </button>

                <button
                  onClick={() => alert("Downloading High-Yield Chemistry Reaction Map...")}
                  className="w-full p-2.5 rounded-lg bg-[#08080e] hover:bg-[#141424] border border-[#1e1e2d] text-left flex items-center justify-between text-[#cbd5e1] hover:text-[#f8fafc] transition-colors"
                >
                  <span>Organic Reaction Roadmap 2026</span>
                  <Download className="w-3.5 h-3.5 text-[#8b5cf6]" />
                </button>

                <button
                  onClick={() => alert("Downloading Kerala DHSE Model Papers...")}
                  className="w-full p-2.5 rounded-lg bg-[#08080e] hover:bg-[#141424] border border-[#1e1e2d] text-left flex items-center justify-between text-[#cbd5e1] hover:text-[#f8fafc] transition-colors"
                >
                  <span>Kerala DHSE +2 Previous Papers</span>
                  <Download className="w-3.5 h-3.5 text-[#8b5cf6]" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}
