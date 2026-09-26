"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface KalariumLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  showWordmark?: boolean;
  withGlow?: boolean;
  withFlashyEffects?: boolean;
}

export default function KalariumAnimatedLogo({
  className = "",
  size = "md",
  showWordmark = false,
  withGlow = true,
  withFlashyEffects = false,
}: KalariumLogoProps) {
  // Size mapping
  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-11 h-11",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
    hero: "w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72",
  };

  const containerSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {/* Flashy Background Effects (Orbit rings, glowing nebula, light beams) */}
      {withFlashyEffects && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Pulsing violet aura */}
          <motion.div
            animate={{
              scale: [1, 1.18, 1],
              opacity: [0.45, 0.75, 0.45],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-10 rounded-full bg-gradient-to-tr from-[#7c3aed]/40 via-[#a855f7]/35 to-[#c084fc]/20 blur-3xl"
          />

          {/* Futuristic cosmic orbit line 1 */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[135%] h-[135%] rounded-full border border-[#8b5cf6]/30 border-dashed"
          />

          {/* Futuristic cosmic orbit line 2 with counter rotation */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute w-[160%] h-[160%] rounded-full border border-[#a855f7]/20 border-dotted"
          />

          {/* Flashy beacon nodes along the orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[135%] h-[135%]"
          >
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#c084fc] shadow-[0_0_12px_#c084fc]" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#8b5cf6] shadow-[0_0_8px_#8b5cf6]" />
          </motion.div>
        </div>
      )}

      {/* Subtle standard ambient glow behind logo */}
      {withGlow && !withFlashyEffects && (
        <div className="absolute inset-0 bg-[#8b5cf6]/25 rounded-full blur-xl pointer-events-none transform scale-110" />
      )}

      {/* Official Kalarium Logo Image Container */}
      <div
        className={`relative ${containerSize} rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
          size === "hero"
            ? "border border-[#8b5cf6]/40 shadow-[0_0_50px_rgba(139,92,246,0.35)]"
            : ""
        }`}
      >
        <Image
          src="/kalarium-logo.png"
          alt="Kalarium Official Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Optional Wordmark */}
      {showWordmark && (
        <span className="mt-3 font-display font-bold tracking-[0.22em] uppercase text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#f8fafc] via-[#e2e8f0] to-[#c084fc]">
          Kalarium
        </span>
      )}
    </div>
  );
}
