"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface KalariumLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  animateOnScroll?: boolean;
  interactive?: boolean;
  showWordmark?: boolean;
  variant?: "vector" | "image" | "hybrid";
}

export default function KalariumAnimatedLogo({
  className = "",
  size = "md",
  animateOnScroll = false,
  interactive = true,
  showWordmark = false,
  variant = "vector",
}: KalariumLogoProps) {
  // Optional scroll-linked rotation for hero / interactive placements
  const { scrollYProgress } = useScroll();
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Size mapping
  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-11 h-11",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
    hero: "w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64",
  };

  const containerSize = sizeMap[size] || sizeMap.md;

  if (variant === "image") {
    return (
      <div className={`relative flex flex-col items-center justify-center ${className}`}>
        <div className={`relative ${containerSize} rounded-2xl overflow-hidden shadow-[0_0_35px_rgba(139,92,246,0.35)]`}>
          <Image
            src="/kalarium-logo.png"
            alt="Kalarium Logo"
            fill
            className="object-cover"
            priority
          />
        </div>
        {showWordmark && (
          <span className="mt-3 font-display font-black tracking-[0.3em] uppercase text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#f8fafc] via-[#c084fc] to-[#a855f7]">
            Kalarium
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {/* Outer ambient glow halo */}
      <div className="absolute inset-0 bg-[#8b5cf6]/20 rounded-full blur-2xl pointer-events-none scale-125 animate-pulse" />

      <motion.div
        whileHover={interactive ? { scale: 1.08 } : undefined}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`relative ${containerSize} flex items-center justify-center cursor-pointer`}
      >
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_20px_rgba(168,85,247,0.75)]"
          aria-label="Kalarium Compass Logo Mark"
        >
          <defs>
            {/* Neon Linear Gradient */}
            <linearGradient id="kalariumViolet" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C084FC" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>

            {/* Core Radial Glow */}
            <radialGradient id="compassCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#7C3AED" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6D28D9" stopOpacity="0" />
            </radialGradient>

            {/* Intense Neon Filter */}
            <filter id="neonFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 1. OUTER COORDINATE RING WITH GAP & DIAMOND RETICLE (Rotating gently or on scroll) */}
          <motion.g
            animate={animateOnScroll ? undefined : { rotate: [0, 360] }}
            style={animateOnScroll ? { rotate: scrollRotate, transformOrigin: "100px 100px" } : { transformOrigin: "100px 100px" }}
            transition={animateOnScroll ? undefined : { repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {/* Upper Arc */}
            <path
              d="M 52,70 A 55,55 0 0,1 138,55"
              stroke="#A855F7"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.9"
            />
            {/* Lower-Right Arc */}
            <path
              d="M 148,135 A 55,55 0 0,1 60,138"
              stroke="#A855F7"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.9"
            />
            {/* Left Arc Segment connecting to Diamond */}
            <path
              d="M 60,138 A 55,55 0 0,1 52,70"
              stroke="#A855F7"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.9"
            />

            {/* Left Diamond Reticle (At 9 o'clock position) */}
            <polygon
              points="34,100 45,95 56,100 45,105"
              fill="#C084FC"
              stroke="#A855F7"
              strokeWidth="1.5"
            />

            {/* Coordinate Tick Marks (Subtle compass degrees) */}
            <line x1="100" y1="36" x2="100" y2="42" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" />
            <line x1="100" y1="158" x2="100" y2="164" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" />
          </motion.g>

          {/* 2. THE GEOMETRIC 'K' RIGHT-BRANCHING LEG */}
          <g filter="url(#neonFilter)">
            {/* Upper 'K' diagonal arm */}
            <polygon
              points="110,88 126,88 152,56 140,56"
              fill="#A855F7"
            />
            <polygon
              points="114,96 148,60 148,70 122,100"
              fill="url(#kalariumViolet)"
            />

            {/* Lower 'K' diagonal arm */}
            <polygon
              points="112,102 122,100 152,144 140,144"
              fill="#A855F7"
            />
            <polygon
              points="118,104 148,140 138,148 112,112"
              fill="url(#kalariumViolet)"
            />

            {/* Accent connection segment forming crisp letter K */}
            <polygon
              points="116,92 144,60 152,68 126,98 150,132 142,140 114,106"
              fill="#A855F7"
            />
          </g>

          {/* 3. THE POLARIS VERTICAL NEEDLE (True North / South) */}
          <g filter="url(#neonFilter)">
            {/* Upper Needle Tip (North) */}
            <polygon
              points="100,16 93,84 100,90"
              fill="#C084FC"
            />
            <polygon
              points="100,16 107,84 100,90"
              fill="#9333EA"
            />

            {/* Lower Needle Tip (South) */}
            <polygon
              points="100,172 93,116 100,110"
              fill="#C084FC"
            />
            <polygon
              points="100,172 107,116 100,110"
              fill="#9333EA"
            />

            {/* Center Pivot Ring (Outer boundary) */}
            <circle
              cx="100"
              cy="100"
              r="17"
              fill="url(#kalariumViolet)"
            />

            {/* Center Hollow Aperture (Cutout showing deep cosmic background) */}
            <circle
              cx="100"
              cy="100"
              r="9.5"
              fill="#06060a"
              stroke="#C084FC"
              strokeWidth="2"
            />
          </g>

          {/* 4. PULSING CENTER CORE LIGHT */}
          <motion.circle
            cx="100"
            cy="100"
            r="3.5"
            fill="#FFFFFF"
            animate={{ scale: [1, 1.4, 1], opacity: [0.9, 1, 0.9] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      {/* Wordmark display */}
      {showWordmark && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 flex items-center justify-center gap-1.5 tracking-[0.28em] font-display font-black text-lg sm:text-xl text-[#f8fafc]"
        >
          <span className="text-[#a855f7]">K</span>
          <span>A</span>
          <span>L</span>
          <span>A</span>
          <span>R</span>
          <span>I</span>
          <span>U</span>
          <span className="text-[#a855f7]">M</span>
        </motion.div>
      )}
    </div>
  );
}
