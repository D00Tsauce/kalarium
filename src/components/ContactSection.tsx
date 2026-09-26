"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, Copy, Check, Sparkles, Compass } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "14-Day Sprint Transformation",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@kalarium.in");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section id="start" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1e1e2d]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#8b5cf6]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative rounded-3xl bg-gradient-to-b from-[#100c22] via-[#0d0d14] to-[#0d0d14] border border-[#8b5cf6]/35 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl shadow-purple-950/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context & Purpose */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#8b5cf6]/30 bg-[#0d0d14] text-xs font-semibold text-[#c084fc] uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-[#8b5cf6]" />
              <span>Take the First Step</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#f8fafc] tracking-tight font-display leading-[1.08]">
              Tell us what sparks you.
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#818cf8]">
                We&apos;ll build around it.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed">
              No high-pressure sales calls. No automated chatbots. Just an open conversation with an active student mentor who will listen to where you are and where you want to go.
            </p>

            <div className="pt-4 border-t border-[#1e1e2d] space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#64748b]">
                Direct Mentor Desk
              </div>

              <div className="inline-flex items-center gap-3 p-3.5 rounded-xl bg-[#141424] border border-[#232338] text-sm text-[#f8fafc] group">
                <Mail className="w-5 h-5 text-[#8b5cf6]" />
                <span className="font-mono text-xs sm:text-sm text-[#e2e8f0]">hello@kalarium.in</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="ml-2 p-1.5 rounded-lg bg-[#1e1e32] hover:bg-[#8b5cf6]/30 text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <p className="text-xs text-[#64748b] leading-relaxed">
                Response typically within 24 hours. We gladly welcome inquiries from both prospective students and parents.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Purpose Exploration Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#09090f]/95 border border-[#1e1e2d] p-6 sm:p-8 backdrop-blur-md shadow-xl">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#f8fafc] font-display">Message Received</h3>
                  <p className="text-sm text-[#94a3b8] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. An assigned mentor from our team will review your note and email you at <span className="text-white font-mono">{formData.email}</span> with personalized next steps.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", interest: "14-Day Sprint Transformation", message: "" });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-[#141424] hover:bg-[#1e1e32] text-xs font-semibold text-[#c084fc] border border-[#232338] transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="c-name" className="block text-xs font-semibold uppercase tracking-wider text-[#94a3b8] mb-2">
                        Your Name
                      </label>
                      <input
                        id="c-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Maya Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-[#12121e] border border-[#1e1e2d] focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] text-sm text-[#f8fafc] placeholder-[#475569] outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="c-email" className="block text-xs font-semibold uppercase tracking-wider text-[#94a3b8] mb-2">
                        Email Address
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#12121e] border border-[#1e1e2d] focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] text-sm text-[#f8fafc] placeholder-[#475569] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="c-interest" className="block text-xs font-semibold uppercase tracking-wider text-[#94a3b8] mb-2">
                      What are you hoping to transform?
                    </label>
                    <select
                      id="c-interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#12121e] border border-[#1e1e2d] focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] text-sm text-[#f8fafc] outline-none transition-all cursor-pointer"
                    >
                      <option value="14-Day Sprint Transformation" className="bg-[#0d0d14] text-[#f8fafc]">14-Day Sprint: Breaking Academic Bottlenecks</option>
                      <option value="Physics & Mathematics Mentorship" className="bg-[#0d0d14] text-[#f8fafc]">Physics & Math: First-Principles Mastery (IISER / IIT)</option>
                      <option value="Medical Sciences Guidance" className="bg-[#0d0d14] text-[#f8fafc]">Medical Sciences & Biology Without Rote Memorization</option>
                      <option value="Olympiad / IISER / Research Guidance" className="bg-[#0d0d14] text-[#f8fafc]">Olympiad, IAT, or Research Roadmap Calibration</option>
                      <option value="General Conversation" className="bg-[#0d0d14] text-[#f8fafc]">General Consultation / Unsure Where to Start</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="c-msg" className="block text-xs font-semibold uppercase tracking-wider text-[#94a3b8] mb-2">
                      Tell us about your curiosities or challenges
                    </label>
                    <textarea
                      id="c-msg"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="What topics spark your obsession? What are you finding difficult in traditional schooling?"
                      className="w-full px-4 py-3 rounded-xl bg-[#12121e] border border-[#1e1e2d] focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] text-sm text-[#f8fafc] placeholder-[#475569] outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] hover:from-[#a855f7] hover:to-[#7c3aed] text-white font-semibold text-sm shadow-xl shadow-[#7c3aed]/30 hover:shadow-[#8b5cf6]/50 transition-all flex items-center justify-center gap-2 group disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting note to mentors...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Message to Mentors</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
