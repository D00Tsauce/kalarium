"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.aside
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        id="announcement-bar"
        aria-label="Announcement"
        className="relative z-50 bg-gradient-to-r from-[#170e2b] via-[#241344] to-[#170e2b] border-b border-[#8b5cf6]/30 text-xs sm:text-sm text-[#f8fafc] px-4 py-2.5 overflow-hidden shadow-inner"
      >
        {/* Subtle background shimmer */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#a855f7]/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 relative z-10">
          <div className="flex-1 flex items-center justify-center gap-2.5 sm:gap-3 flex-wrap text-center">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#8b5cf6]/30 border border-[#c084fc]/40 text-[#c084fc] font-semibold text-[11px] tracking-wide uppercase">
              <Sparkles className="w-3 h-3 text-[#c084fc]" />
              New
            </span>

            <span className="font-medium text-[#e2e8f0]">
              Kalarium is now enrolling — 2-week free trial available
            </span>

            <Link
              href="#start"
              className="inline-flex items-center gap-1 font-semibold text-[#c084fc] hover:text-[#f8fafc] underline underline-offset-4 hover:no-underline transition-colors ml-1"
            >
              <span>Explore The Trial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="text-[#94a3b8] hover:text-[#f8fafc] p-1 rounded-md hover:bg-[#8b5cf6]/20 transition-colors focus:outline-none focus:ring-1 focus:ring-[#8b5cf6]"
            aria-label="Dismiss announcement"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}
