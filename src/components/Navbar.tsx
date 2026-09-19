"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

export function KalariumLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Kalarium Reticle Mark"
    >
      <defs>
        <linearGradient id="kalariumGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
        <radialGradient id="reticleCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C084FC" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.1" />
        </radialGradient>
      </defs>

      {/* Subtle outer coordinate ring */}
      <circle
        cx="24"
        cy="24"
        r="22"
        stroke="url(#kalariumGlow)"
        strokeWidth="1.2"
        strokeOpacity="0.35"
        strokeDasharray="3 3"
      />

      {/* Main boundary circle */}
      <circle
        cx="24"
        cy="24"
        r="17"
        stroke="url(#kalariumGlow)"
        strokeWidth="1.8"
        strokeOpacity="0.9"
      />

      {/* Reticle ticks / crosshairs */}
      <line x1="24" y1="2" x2="24" y2="8" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="40" x2="24" y2="46" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
      <line x1="2" y1="24" x2="8" y2="24" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="24" x2="46" y2="24" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />

      {/* Compass / diamond interior target */}
      <polygon
        points="24,11 28,24 24,37 20,24"
        fill="url(#reticleCore)"
        stroke="url(#kalariumGlow)"
        strokeWidth="1.5"
      />
      <polygon
        points="11,24 24,28 37,24 24,20"
        fill="url(#reticleCore)"
        stroke="url(#kalariumGlow)"
        strokeWidth="1.5"
      />

      {/* Center glowing focal point */}
      <circle cx="24" cy="24" r="3.5" fill="#F8FAFC" />
      <circle cx="24" cy="24" r="1.5" fill="#7C3AED" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#06060a]/90 backdrop-blur-md border-b border-[#1e1e2d] py-3 shadow-lg shadow-black/40"
          : "bg-[#06060a]/50 backdrop-blur-sm border-b border-[#1e1e2d]/60 py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Navigation links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              id="nav-link-curriculum"
              href="#curriculum"
              className="text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#8b5cf6] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
            >
              Curriculum
            </Link>
            <Link
              id="nav-link-mentors"
              href="#mentors"
              className="text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#8b5cf6] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
            >
              Mentors
            </Link>
            <Link
              id="nav-link-tracking"
              href="#tracking"
              className="text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#8b5cf6] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
            >
              Tracking
            </Link>
          </nav>

          {/* Center: The Kalarium Logo Mark */}
          <div className="flex items-center justify-center">
            <Link
              id="nav-logo-anchor"
              href="/"
              className="group flex items-center space-x-3 text-[#f8fafc] focus:outline-none"
              aria-label="Kalarium Home"
            >
              <div className="relative flex items-center justify-center">
                {/* Ambient glow around the reticle mark */}
                <div className="absolute -inset-1.5 bg-[#8b5cf6]/30 rounded-full blur-md opacity-70 group-hover:opacity-100 group-hover:bg-[#a855f7]/50 transition-all duration-300" />
                <div className="relative transition-transform duration-500 ease-out group-hover:rotate-45 group-hover:scale-110 animate-reticle-pulse">
                  <KalariumLogo className="w-9 h-9 sm:w-10 sm:h-10" />
                </div>
              </div>
              <span className="font-bold text-lg sm:text-xl tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#f8fafc] via-[#e2e8f0] to-[#c084fc]">
                Kalarium
              </span>
            </Link>
          </div>

          {/* Right: Auth links and CTA */}
          <div className="hidden md:flex items-center space-x-5">
            <Link
              id="nav-link-login"
              href="#login"
              className="text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] transition-colors px-2 py-1"
            >
              Login
            </Link>

            <Link
              id="nav-cta-trial"
              href="#trial"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-full font-medium transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/50 shadow-md shadow-[#8b5cf6]/20 hover:shadow-[#a855f7]/40"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#8b5cf6] via-[#7c3aed] to-[#a855f7] group-hover:from-[#a855f7] group-hover:to-[#7c3aed]"></span>
              <span className="relative px-5 py-2 transition-all ease-out bg-[#06060a]/40 group-hover:bg-transparent rounded-full flex items-center gap-2 text-xs font-semibold tracking-wide text-white uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#c084fc] group-hover:text-white transition-colors" />
                <span>Start Free Trial</span>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Link
              href="#trial"
              className="px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white shadow-sm"
            >
              Free Trial
            </Link>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1e1e2d] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-panel"
            className="md:hidden mt-3 pt-3 pb-4 border-t border-[#1e1e2d] flex flex-col space-y-3 bg-[#0d0d14]/95 rounded-xl p-4 backdrop-blur-xl border"
          >
            <Link
              href="#curriculum"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] px-3 py-2 rounded-md hover:bg-[#1e1e2d]"
            >
              Curriculum
            </Link>
            <Link
              href="#mentors"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] px-3 py-2 rounded-md hover:bg-[#1e1e2d]"
            >
              Mentors
            </Link>
            <Link
              href="#tracking"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] px-3 py-2 rounded-md hover:bg-[#1e1e2d]"
            >
              Tracking
            </Link>
            <div className="pt-2 border-t border-[#1e1e2d] flex flex-col space-y-2">
              <Link
                href="#login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] px-3 py-2"
              >
                Login
              </Link>
              <Link
                href="#trial"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 rounded-lg bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white text-sm font-semibold flex items-center justify-center gap-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
