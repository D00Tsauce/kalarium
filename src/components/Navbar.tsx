"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import KalariumAnimatedLogo from "@/components/KalariumAnimatedLogo";
import { Menu, X, ArrowRight, Compass } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentBearing, setCurrentBearing] = useState("N 000°");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrolled(scrollPos > 20);

      // Dynamically calculate navigational compass heading based on scroll depth
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        const ratio = scrollPos / maxScroll;
        const degrees = Math.round(ratio * 360);
        let direction = "N";
        if (degrees >= 23 && degrees < 68) direction = "NE";
        else if (degrees >= 68 && degrees < 113) direction = "E";
        else if (degrees >= 113 && degrees < 158) direction = "SE";
        else if (degrees >= 158 && degrees < 203) direction = "S";
        else if (degrees >= 203 && degrees < 248) direction = "SW";
        else if (degrees >= 248 && degrees < 293) direction = "W";
        else if (degrees >= 293 && degrees < 338) direction = "NW";
        setCurrentBearing(`${direction} ${String(degrees).padStart(3, "0")}°`);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#06060a]/92 backdrop-blur-md border-b border-[#1e1e2d] py-2.5 shadow-xl shadow-black/50"
          : "bg-[#06060a]/50 backdrop-blur-sm border-b border-[#1e1e2d]/60 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Purpose-Driven Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7">
            <Link
              id="nav-link-philosophy"
              href="#philosophy"
              className="text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#8b5cf6] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
            >
              The Philosophy
            </Link>
            <Link
              id="nav-link-guides"
              href="#guides"
              className="text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#8b5cf6] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
            >
              Your Guides
            </Link>
            <Link
              id="nav-link-transformation"
              href="#transformation"
              className="text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#8b5cf6] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
            >
              14-Day Sprint
            </Link>
            <Link
              id="nav-link-perspectives"
              href="#perspectives"
              className="text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#8b5cf6] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
            >
              Field Notes
            </Link>
          </nav>

          {/* Center: The New Kalarium Logo Mark & Geometric Wordmark */}
          <div className="flex items-center justify-center">
            <Link
              id="nav-logo-anchor"
              href="/"
              className="group flex items-center space-x-3 text-[#f8fafc] focus:outline-none"
              aria-label="Kalarium Home"
            >
              <div className="relative flex items-center justify-center">
                <KalariumAnimatedLogo size="md" className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="font-bold text-lg sm:text-xl tracking-[0.22em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#f8fafc] via-[#e2e8f0] to-[#c084fc] font-display">
                Kalarium
              </span>
            </Link>
          </div>

          {/* Right: Real-time Compass Telemetry & Purpose-Driven CTA */}
          <div className="hidden md:flex items-center space-x-5">
            {/* Live Navigational Bearing HUD */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0d0d14] border border-[#1e1e2d] text-[11px] font-mono text-[#a855f7] shadow-inner">
              <Compass className="w-3.5 h-3.5 text-[#8b5cf6] animate-pulse" />
              <span>{currentBearing}</span>
            </div>

            <Link
              id="nav-cta-start"
              href="#start"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-full font-medium transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/50 shadow-md shadow-[#8b5cf6]/20 hover:shadow-[#a855f7]/40"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#8b5cf6] via-[#7c3aed] to-[#a855f7] group-hover:from-[#a855f7] group-hover:to-[#7c3aed]"></span>
              <span className="relative px-5 py-2 transition-all ease-out bg-[#06060a]/50 group-hover:bg-transparent rounded-full flex items-center gap-2 text-xs font-semibold tracking-wide text-white uppercase">
                <span>Begin Exploration</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#c084fc] group-hover:translate-x-0.5 group-hover:text-white transition-all" />
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Link
              href="#start"
              className="px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white shadow-sm"
            >
              Explore
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

        {/* Mobile dropdown menu with purpose-driven links */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-panel"
            className="md:hidden mt-3 pt-3 pb-4 border-t border-[#1e1e2d] flex flex-col space-y-3 bg-[#0d0d14]/98 rounded-xl p-4 backdrop-blur-xl border border-[#1e1e2d]"
          >
            <Link
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] px-3 py-2 rounded-md hover:bg-[#1e1e2d]"
            >
              The Philosophy
            </Link>
            <Link
              href="#guides"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] px-3 py-2 rounded-md hover:bg-[#1e1e2d]"
            >
              Your Guides
            </Link>
            <Link
              href="#transformation"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] px-3 py-2 rounded-md hover:bg-[#1e1e2d]"
            >
              14-Day Sprint
            </Link>
            <Link
              href="#perspectives"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] px-3 py-2 rounded-md hover:bg-[#1e1e2d]"
            >
              Field Notes
            </Link>
            <div className="pt-2 border-t border-[#1e1e2d] flex flex-col space-y-2">
              <Link
                href="#start"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 rounded-lg bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white text-sm font-semibold flex items-center justify-center gap-2"
              >
                <span>Begin Exploration</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
