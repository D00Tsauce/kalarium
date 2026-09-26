"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight, Sparkles, LayoutDashboard, Compass } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#06060a]/95 backdrop-blur-md border-b border-[#1e1e2d] py-3 shadow-2xl shadow-black/80"
          : "bg-[#06060a]/85 backdrop-blur-sm border-b border-[#1e1e2d]/60 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left: Official Kalarium Brand & 50% Off Pill */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              id="nav-logo-anchor"
              href="/"
              className="group flex items-center space-x-3 text-[#f8fafc] focus:outline-none"
              aria-label="Kalarium Home"
            >
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[#8b5cf6]/40 shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:border-[#c084fc] transition-colors">
                <Image
                  src="/kalarium-logo.png"
                  alt="Kalarium"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="font-bold text-lg sm:text-xl tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#f8fafc] via-[#e2e8f0] to-[#c084fc] font-display">
                Kalarium
              </span>
            </Link>

            {/* 50% OFF Pill on Top Left */}
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#8b5cf6]/20 to-[#a855f7]/20 border border-[#8b5cf6]/40 text-[11px] font-semibold text-[#c084fc] shadow-sm">
              <Sparkles className="w-3 h-3 text-[#c084fc] animate-pulse" />
              <span>50% OFF Early Bird</span>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              id="nav-link-why-us"
              href="/#why-us"
              className="text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#8b5cf6] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
            >
              Why Choose Us
            </Link>
            <Link
              id="nav-link-courses"
              href="/#courses"
              className="text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#8b5cf6] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
            >
              Explore Courses
            </Link>
            <Link
              id="nav-link-community"
              href="/#community"
              className="text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#8b5cf6] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
            >
              Community
            </Link>
            <Link
              id="nav-link-blogs-vlogs"
              href="/#blogs-vlogs"
              className="text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#8b5cf6] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
            >
              Blogs & Vlogs
            </Link>
            <Link
              id="nav-link-mentors"
              href="/#mentors"
              className="text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#8b5cf6] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
            >
              Your Mentors
            </Link>
          </nav>

          {/* Right: Actions (Student Dashboard & Enroll CTA) */}
          <div className="hidden sm:flex items-center space-x-3.5 shrink-0">
            <Link
              id="nav-student-dashboard"
              href="/dashboard"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0d0d14] hover:bg-[#161622] border border-[#1e1e2d] hover:border-[#8b5cf6]/60 text-xs font-semibold text-[#e2e8f0] transition-colors"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-[#a855f7]" />
              <span>Student Dashboard</span>
            </Link>

            <Link
              id="nav-cta-explore"
              href="/#courses"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-full font-medium transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/50 shadow-md shadow-[#8b5cf6]/20 hover:shadow-[#a855f7]/40"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#8b5cf6] via-[#7c3aed] to-[#a855f7] group-hover:from-[#a855f7] group-hover:to-[#7c3aed]" />
              <span className="relative px-4 py-1.5 transition-all ease-out bg-[#06060a]/40 group-hover:bg-transparent rounded-full flex items-center gap-1.5 text-xs font-semibold tracking-wide text-white uppercase">
                <span>Explore Courses</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#c084fc] group-hover:translate-x-0.5 group-hover:text-white transition-all" />
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Link
              href="/dashboard"
              className="p-2 rounded-lg bg-[#0d0d14] border border-[#1e1e2d] text-[#c084fc] text-xs font-semibold flex items-center gap-1"
            >
              <LayoutDashboard className="w-4 h-4" />
            </Link>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1e1e2d] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#06060a]/98 border-b border-[#1e1e2d] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 text-xs font-semibold text-[#c084fc] mb-2">
            <Sparkles className="w-3 h-3 text-[#c084fc]" />
            <span>Limited Offer: Flat 50% Off on All Courses</span>
          </div>

          <nav className="flex flex-col space-y-2">
            <Link
              href="/#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#0d0d14]"
            >
              Why Choose Us
            </Link>
            <Link
              href="/#courses"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#0d0d14]"
            >
              Explore Courses
            </Link>
            <Link
              href="/#community"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#0d0d14]"
            >
              Discord & Instagram Community
            </Link>
            <Link
              href="/#blogs-vlogs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#0d0d14]"
            >
              Blogs & Vlogs
            </Link>
            <Link
              href="/#mentors"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#0d0d14]"
            >
              Your Mentors
            </Link>
          </nav>

          <div className="pt-3 border-t border-[#1e1e2d] space-y-2">
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0d0d14] border border-[#8b5cf6]/40 text-sm font-medium text-[#f8fafc]"
            >
              <LayoutDashboard className="w-4 h-4 text-[#a855f7]" />
              <span>Student Dashboard</span>
            </Link>
            <Link
              href="/#courses"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-sm font-semibold text-white shadow-lg shadow-[#7c3aed]/30"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
