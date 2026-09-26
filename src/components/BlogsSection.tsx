"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Play, BookOpen, Clock, X } from "lucide-react";

interface Story {
  id: string;
  type: "Article" | "Vlog";
  date: string;
  readTime: string;
  title: string;
  summary: string;
  image: string;
  content: string[];
}

export default function BlogsSection() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const stories: Story[] = [
    {
      id: "curiosity-beats-curriculum",
      type: "Article",
      date: "Sep 20, 2026",
      readTime: "4 min read",
      title: "Why Curiosity Beats Curriculum",
      summary: "Self-directed learning vs rigid structures — and why one wins every time.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      content: [
        "Traditional curricula are built around industrial batch processing: everyone moves at the exact same pace, studies identical chapters, and is graded on how faithfully they reproduce memorized templates.",
        "Curiosity works fundamentally differently. When a student chooses a question because they genuinely want to understand the answer — whether that's why Maxwell's equations require gauge invariance or how enzymes accelerate biochemical reactions by ten orders of magnitude — the retention and intuition surpass any syllabus constraint.",
        "At Kalarium, mentors don't act as gatekeepers of an arbitrary timetable. Instead, we identify what sparks the student's intrinsic motivation and provide the scaffolding to explore deep mathematical and scientific concepts without fear of failure."
      ],
    },
    {
      id: "day-in-the-life",
      type: "Vlog",
      date: "Sep 15, 2026",
      readTime: "6 min watch",
      title: "A Day in the Life at Kalarium",
      summary: "Behind-the-scenes: how we build, learn, and stay curious together.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      content: [
        "What does an authentic peer mentorship session actually look like?",
        "No suit-and-tie hierarchy. No punitive quizzes. Sessions usually start with an open whiteboard and a puzzling paradox: a physical anomaly, an unexpected algebraic identity, or an intriguing clinical case study.",
        "We discuss failed intuition openly. Mentors demonstrate how research scientists actually approach unknown problems: by formulating hypotheses, making reasonable approximations, and testing edge cases together."
      ],
    },
    {
      id: "problem-with-working-harder",
      type: "Article",
      date: "Sep 10, 2026",
      readTime: "5 min read",
      title: 'The Problem With "Working Harder"',
      summary: "Burnout is a system failure, not a personal one. Let's talk about it.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b6a97?auto=format&fit=crop&w=800&q=80",
      content: [
        "In hyper-competitive academic pipelines, the default advice given to struggling students is almost always: 'Just work harder. Put in 14 hours. Sleep less.'",
        "This advice confuses cognitive exhaustion with mastery. Cognitive fatigue degrades working memory, kills divergent thinking, and turns learning into a miserable endurance test.",
        "Sustainable intellectual growth requires calibrated intensity: deep, focused sprints balanced with rest, reflection, and empathetic mentorship. When pressure is kept human, breakthroughs happen naturally."
      ],
    },
  ];

  return (
    <section id="perspectives" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1e1e2d]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Described by Transformative Purpose */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8b5cf6]/30 bg-[#0d0d14] text-xs font-semibold text-[#c084fc] uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Field Notes &amp; Honest Reflections</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f8fafc] tracking-tight font-display">
          Unfiltered perspectives on{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#818cf8]">
            learning freely.
          </span>
        </h2>
        <p className="mt-4 text-[#94a3b8] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Essays and dispatches examining why standard academic pressure cookers fail ambitious students and how to cultivate lasting scientific mastery without burning out.
        </p>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group rounded-2xl bg-[#0d0d14] border border-[#1e1e2d] hover:border-[#8b5cf6]/70 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_40px_-10px_rgba(139,92,246,0.3)] hover:-translate-y-1"
          >
            <div>
              {/* Thumbnail with overlay & badge */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#141422]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${story.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-[#0d0d14]/40 to-transparent" />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-md ${
                      story.type === "Vlog"
                        ? "bg-rose-500/80 text-white border border-rose-400/50"
                        : "bg-[#8b5cf6]/80 text-white border border-[#c084fc]/50"
                    }`}
                  >
                    {story.type === "Vlog" ? <Play className="w-3 h-3 fill-current" /> : <BookOpen className="w-3 h-3" />}
                    <span>{story.type}</span>
                  </span>
                </div>

                <div className="absolute bottom-3 right-4 flex items-center gap-1 text-[11px] text-[#e2e8f0] bg-[#06060a]/75 px-2.5 py-0.5 rounded backdrop-blur-sm">
                  <Clock className="w-3 h-3 text-[#c084fc]" />
                  <span>{story.readTime}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <span className="text-xs text-[#a855f7] font-mono tracking-wide">
                  {story.date}
                </span>
                <h3 className="mt-2 text-xl font-bold text-[#f8fafc] group-hover:text-[#c084fc] transition-colors leading-snug font-display">
                  {story.title}
                </h3>
                <p className="mt-3 text-sm text-[#94a3b8] leading-relaxed line-clamp-3">
                  {story.summary}
                </p>
              </div>
            </div>

            {/* Read/Watch button */}
            <div className="p-6 pt-0">
              <button
                onClick={() => setSelectedStory(story)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#141424] hover:bg-[#20183b] text-[#c084fc] hover:text-[#f8fafc] border border-[#232338] hover:border-[#8b5cf6]/70 text-xs font-semibold flex items-center justify-center gap-2 transition-all group/btn cursor-pointer"
              >
                <span>{story.type === "Vlog" ? "Watch Video Dispatch" : "Read Reflection"}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Modal Reader */}
      <AnimatePresence>
        {selectedStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#0d0d14] border border-[#8b5cf6]/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-purple-950/40 text-left"
            >
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-[#141422] text-[#94a3b8] hover:text-white hover:bg-[#1e1e2d] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 text-xs mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 text-[#c084fc] font-semibold uppercase">
                  {selectedStory.type}
                </span>
                <span className="text-[#94a3b8] font-mono">{selectedStory.date}</span>
                <span className="text-[#64748b]">·</span>
                <span className="text-[#94a3b8]">{selectedStory.readTime}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#f8fafc] font-display mb-4">
                {selectedStory.title}
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#94a3b8] leading-relaxed border-t border-[#1e1e2d] pt-4">
                {selectedStory.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#1e1e2d] flex items-center justify-between">
                <span className="text-xs text-[#64748b] font-mono">Kalarium Field Notes</span>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="px-5 py-2 rounded-lg bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Done Reading
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
