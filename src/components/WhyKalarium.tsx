"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layers, Users, HelpCircle, HeartHandshake, Compass, Sparkles, ArrowRight } from "lucide-react";

interface BentoCardProps {
  id: string;
  purposeBadge: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gridClass: string;
  highlight?: boolean;
  delay?: number;
}

function SpotlightBentoCard({
  purposeBadge,
  title,
  description,
  icon,
  gridClass,
  highlight,
  delay = 0,
}: BentoCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-2xl bg-[#0d0d14] border border-[#1e1e2d] hover:border-[#8b5cf6]/70 p-7 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_-10px_rgba(139,92,246,0.3)] ${gridClass} ${
        highlight
          ? "bg-gradient-to-br from-[#0d0d14] via-[#110e22] to-[#151028] border-[#8b5cf6]/40"
          : ""
      }`}
    >
      {/* Interactive Cursor Spotlight Glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.16), transparent 75%)`,
          }}
        />
      )}

      {/* Static corner ambient glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-[#8b5cf6]/10 rounded-full blur-2xl group-hover:bg-[#a855f7]/20 transition-all duration-500 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#141424] border border-[#232338] group-hover:border-[#8b5cf6]/70 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
            {icon}
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8] bg-[#141422] border border-[#1e1e2d] px-3 py-1 rounded-full group-hover:text-[#c084fc] group-hover:border-[#8b5cf6]/40 transition-colors">
            {purposeBadge}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-[#f8fafc] group-hover:text-[#c084fc] transition-colors mb-3 font-display">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom accent indicator */}
      <div className="mt-8 pt-4 border-t border-[#1e1e2d] flex items-center justify-between text-xs text-[#64748b] group-hover:text-[#94a3b8] transition-colors relative z-10">
        <span className="font-mono text-[11px] tracking-wider text-[#8b5cf6]/80">CORE ETHOS</span>
        <div className="flex items-center gap-1.5 text-[#c084fc] opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-[11px] font-medium">Explore</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </motion.div>
  );
}

export default function WhyKalarium() {
  const cards = [
    {
      id: "depth",
      purposeBadge: "Depth Over Rote",
      title: "Igniting Depth Over Memorization",
      description:
        "Forget memorizing formulas you hate for tests you will forget in weeks. We align learning with what genuinely sparks your obsession — so you build axiomatic intuition from first principles.",
      icon: <Layers className="w-6 h-6 text-[#c084fc]" />,
      gridClass: "md:col-span-2 lg:col-span-2",
      highlight: true,
    },
    {
      id: "copilots",
      purposeBadge: "Relatable Peers",
      title: "Guidance From Someone Who Walked the Path",
      description:
        "Your mentor is not a detached professor in a suit. They are researchers from premier institutes who navigated the exact bottlenecks and breakthroughs you face today.",
      icon: <Users className="w-6 h-6 text-[#a855f7]" />,
      gridClass: "md:col-span-1 lg:col-span-1",
    },
    {
      id: "safety",
      purposeBadge: "Zero Judgment",
      title: "Eliminating the Fear of Failure",
      description:
        "Mess up freely. Ask the 'dumb' questions everyone else is afraid to voice. Genuine mastery only happens when you are psychologically safe to explore without penalty.",
      icon: <HelpCircle className="w-6 h-6 text-[#38bdf8]" />,
      gridClass: "md:col-span-1 lg:col-span-1",
    },
    {
      id: "health",
      purposeBadge: "Sustainable Mastery",
      title: "Protecting Well-Being & Preventing Burnout",
      description:
        "Burnout is not a badge of honor; it is a system failure. We keep intellectual intensity high while ensuring the pressure remains calibrated, restorative, and human.",
      icon: <HeartHandshake className="w-6 h-6 text-[#ec4899]" />,
      gridClass: "md:col-span-1 lg:col-span-1",
    },
    {
      id: "tribe",
      purposeBadge: "Lifelong Community",
      title: "Finding Your Unconventional Tribe",
      description:
        "Connect with peers who refuse to be boxed into generic syllabi. Growing together accelerates every breakthrough — you never have to walk the scientific path alone.",
      icon: <Compass className="w-6 h-6 text-[#34d399]" />,
      gridClass: "md:col-span-2 lg:col-span-1",
    },
  ];

  return (
    <section id="philosophy" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1e1e2d]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Described Strictly by Transformative Purpose */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8b5cf6]/30 bg-[#0d0d14] text-xs font-semibold text-[#c084fc] uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Core Ethos</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#f8fafc] tracking-tight font-display leading-[1.1]">
          Rethinking how ambitious minds{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#818cf8]">
            actually grow.
          </span>
        </h2>
        <p className="mt-4 text-[#94a3b8] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Standard education optimizes for rote compliance. We optimize for first-principles reasoning, fearless curiosity, and lasting scientific intuition.
        </p>
      </div>

      {/* Spotlight Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <SpotlightBentoCard
            key={card.id}
            id={card.id}
            purposeBadge={card.purposeBadge}
            title={card.title}
            description={card.description}
            icon={card.icon}
            gridClass={card.gridClass}
            highlight={card.highlight}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
