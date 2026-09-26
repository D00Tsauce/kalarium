"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Play, BookOpen, Clock, X, Video, FileText } from "lucide-react";

interface Story {
  id: string;
  type: "Blog" | "Vlog";
  date: string;
  readTime: string;
  title: string;
  summary: string;
  image: string;
  videoDuration?: string;
  content: string[];
}

export default function BlogsSection() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [activeTab, setActiveTab] = useState<"All" | "Blog" | "Vlog">("All");

  const stories: Story[] = [
    {
      id: "keam-physics-first-principles",
      type: "Vlog",
      date: "Sep 22, 2026",
      readTime: "8 min watch",
      videoDuration: "08:14",
      title: "Mastering Rotational Dynamics Without Formula Cramming",
      summary: "Anirudh (IISER) demonstrates how 90% of tricky KEAM & JEE mechanics problems reduce to simple angular momentum conservation.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      content: [
        "In this video walkthrough, Anirudh deconstructs one of the most intimidating topics for Plus One students: Rolling motion and Rotational Dynamics.",
        "Instead of memorizing 15 different moment of inertia formulas and acceleration equations, we trace the motion from translational and rotational kinetic energy balance.",
        "Watch the step-by-step problem breakdown from actual previous year KEAM and NEET question papers, showing how clear intuition solves in 45 seconds what takes algebra pages by brute force."
      ],
    },
    {
      id: "curiosity-beats-curriculum",
      type: "Blog",
      date: "Sep 20, 2026",
      readTime: "4 min read",
      title: "Why Curiosity Beats Curriculum in Competitive Science",
      summary: "Self-directed learning vs rigid coaching structures — and why conceptual depth wins every single time.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      content: [
        "Traditional curricula are built around industrial batch processing: everyone moves at the exact same pace, studies identical chapters, and is graded on how faithfully they reproduce memorized templates.",
        "Curiosity works fundamentally differently. When a student chooses a question because they genuinely want to understand the answer — whether that's why Maxwell's equations require gauge invariance or how enzymes accelerate biochemical reactions — the retention and intuition surpass any syllabus constraint.",
        "At Kalarium, mentors don't act as gatekeepers of an arbitrary timetable. Instead, we identify what sparks the student's intrinsic motivation and provide the scaffolding to explore deep mathematical and scientific concepts without fear of failure."
      ],
    },
    {
      id: "day-in-the-life-researcher",
      type: "Vlog",
      date: "Sep 16, 2026",
      readTime: "6 min watch",
      videoDuration: "06:32",
      title: "Day in the Life of an IISER & IIT Research Scholar",
      summary: "Behind-the-scenes look into how science is actually done at India's premier science institutes, and how that informs 1-on-1 mentorship.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
      content: [
        "What does an authentic peer mentorship session actually look like?",
        "No suit-and-tie hierarchy. No punitive quizzes. Sessions usually start with an open whiteboard and a puzzling paradox: a physical anomaly, an unexpected algebraic identity, or an intriguing clinical case study.",
        "We discuss failed intuition openly. Mentors demonstrate how research scientists actually approach unknown problems: by formulating hypotheses, making reasonable approximations, and testing edge cases together."
      ],
    },
    {
      id: "problem-with-working-harder",
      type: "Blog",
      date: "Sep 12, 2026",
      readTime: "5 min read",
      title: "The Danger of Burnout in Entrance Prep",
      summary: "Burnout is not a badge of honor; it is an engineering failure in study strategy. Here is how we calibrate load.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b6a97?auto=format&fit=crop&w=800&q=80",
      content: [
        "In hyper-competitive academic pipelines, the default advice given to struggling students is almost always: 'Just work harder. Put in 14 hours. Sleep less.'",
        "This advice confuses cognitive exhaustion with mastery. Cognitive fatigue degrades working memory, kills divergent thinking, and turns learning into a miserable endurance test.",
        "A calibrated 3-hour focused session targeting diagnostic weaknesses consistently outperforms 10 hours of mindless formula re-copying. Rest and psychological calm are active ingredients in retention."
      ],
    }
  ];

  const filteredStories = activeTab === "All"
    ? stories
    : stories.filter((s) => s.type === activeTab);

  return (
    <section id="blogs-vlogs" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1e1e2d]">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#8b5cf6]/30 bg-[#0d0d14] text-xs font-semibold text-[#c084fc] uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Knowledge &amp; Insights</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#f8fafc] tracking-tight font-display leading-[1.15]">
          Field Notes &amp;{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#818cf8]">
            Video Vlogs.
          </span>
        </h2>
        <p className="mt-4 text-[#94a3b8] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Deep dives into first-principles problem solving, exam blueprints, and candid reflections from mentors navigating premier science institutes.
        </p>

        {/* Filter Tabs */}
        <div className="mt-8 flex items-center justify-center gap-2 sm:gap-3">
          {(["All", "Blog", "Vlog"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab
                  ? "bg-[#8b5cf6] text-white shadow-lg shadow-[#8b5cf6]/30"
                  : "bg-[#0d0d14] text-[#94a3b8] hover:text-[#f8fafc] border border-[#1e1e2d]"
              }`}
            >
              {tab === "All" ? "All Media" : tab === "Blog" ? "Blogs & Articles" : "Video Vlogs"}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredStories.map((story) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => setSelectedStory(story)}
            className="group relative rounded-2xl bg-[#0d0d14] border border-[#1e1e2d] hover:border-[#8b5cf6]/70 overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_40px_-10px_rgba(139,92,246,0.3)] hover:-translate-y-1"
          >
            {/* Visual Thumbnail */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#161622]">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-transparent to-black/30" />

              {/* Type Badge */}
              <div className="absolute top-3 left-3">
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    story.type === "Vlog"
                      ? "bg-[#8b5cf6] text-white shadow-md shadow-[#8b5cf6]/40"
                      : "bg-[#141424]/90 text-[#c084fc] border border-[#8b5cf6]/40 backdrop-blur-sm"
                  }`}
                >
                  {story.type === "Vlog" ? <Video className="w-3 h-3" /> : <FileText className="w-3 h-3" />}
                  {story.type}
                </span>
              </div>

              {/* Play Button Overlay for Vlogs */}
              {story.type === "Vlog" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-[#8b5cf6]/90 backdrop-blur-md flex items-center justify-center text-white shadow-lg shadow-[#8b5cf6]/50 group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 ml-0.5 fill-current" />
                  </div>
                  {story.videoDuration && (
                    <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white">
                      {story.videoDuration}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#64748b] mb-2 font-mono">
                  <span>{story.date}</span>
                  <span>•</span>
                  <span>{story.readTime}</span>
                </div>

                <h3 className="text-base font-bold text-[#f8fafc] group-hover:text-[#c084fc] transition-colors line-clamp-2 mb-2 font-display">
                  {story.title}
                </h3>

                <p className="text-xs text-[#94a3b8] line-clamp-3 leading-relaxed">
                  {story.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1e1e2d] flex items-center justify-between text-xs text-[#8b5cf6] font-medium group-hover:text-[#c084fc]">
                <span>{story.type === "Vlog" ? "Watch Video" : "Read Field Note"}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Reader / Video Modal */}
      <AnimatePresence>
        {selectedStory && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#0d0d14] border border-[#8b5cf6]/50 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-[#1e1e2d] flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#a855f7] mb-1">
                    <span className="uppercase font-bold">{selectedStory.type}</span>
                    <span>•</span>
                    <span>{selectedStory.date}</span>
                    <span>•</span>
                    <span>{selectedStory.readTime}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#f8fafc] font-display">
                    {selectedStory.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="p-1.5 rounded-lg bg-[#141424] text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1e1e2d] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-4 text-sm text-[#cbd5e1] leading-relaxed">
                {selectedStory.type === "Vlog" && (
                  <div className="aspect-video w-full rounded-xl bg-black border border-[#1e1e2d] flex flex-col items-center justify-center relative overflow-hidden mb-4 group">
                    <img
                      src={selectedStory.image}
                      alt="Thumbnail"
                      className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <div className="relative z-10 w-16 h-16 rounded-full bg-[#8b5cf6] flex items-center justify-center text-white shadow-xl shadow-[#8b5cf6]/50">
                      <Play className="w-8 h-8 ml-1 fill-current" />
                    </div>
                    <span className="relative z-10 mt-3 text-xs font-semibold text-white bg-black/60 px-3 py-1 rounded-full">
                      Video Stream Ready • Kalarium Academy
                    </span>
                  </div>
                )}

                {selectedStory.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-[#1e1e2d] bg-[#09090f] flex justify-end">
                <button
                  onClick={() => setSelectedStory(null)}
                  className="px-5 py-2 rounded-xl bg-[#1e1e2d] hover:bg-[#2e2e44] text-[#f8fafc] text-xs font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
