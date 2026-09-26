"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { COURSES, Course } from "@/data/courses";
import Navbar from "@/components/Navbar";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  CreditCard, 
  Smartphone, 
  Building2, 
  Lock, 
  ArrowRight, 
  UserCheck, 
  Calendar, 
  Clock, 
  BookOpen,
  QrCode
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const KERALA_DISTRICTS = [
  "Ernakulam",
  "Thiruvananthapuram",
  "Kozhikode",
  "Thrissur",
  "Malappuram",
  "Kollam",
  "Kottayam",
  "Palakkad",
  "Alappuzha",
  "Kannur",
  "Pathanamthitta",
  "Idukki",
  "Wayanad",
  "Kasaragod",
  "Outside Kerala / Other"
];

export default function CourseOverviewPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const courseId = resolvedParams.id;

  const course = COURSES.find((c) => c.id === courseId) || COURSES[0];

  // Enrollment Form State
  const [fullName, setFullName] = useState("");
  const [district, setDistrict] = useState("Ernakulam");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [grade, setGrade] = useState(course.grade);
  const [paymentMethod, setPaymentMethod] = useState<"gpay" | "cards" | "netbanking">("gpay");
  const [upiId, setUpiId] = useState("");

  // Card details state
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  // Status & processing
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStep, setPaymentStep] = useState<"idle" | "verifying" | "success">("idle");

  const handleEnrollment = (e: React.FormEvent) => {
    e.preventDefault();

    const errors: { [key: string]: string } = {};
    if (!fullName.trim()) errors.fullName = "Please enter your full name";
    if (!district.trim()) errors.district = "Please select your district";
    if (!phoneNumber.trim() || phoneNumber.length < 10) errors.phoneNumber = "Please enter a valid 10-digit mobile number";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsProcessing(true);
    setPaymentStep("verifying");

    // Simulate real gateway processing
    setTimeout(() => {
      setPaymentStep("success");
      
      // Save student session in localStorage
      const studentData = {
        name: fullName,
        district,
        phone: phoneNumber,
        grade,
        courseId: course.id,
        courseTitle: course.title,
        enrolledAt: new Date().toISOString(),
        paymentId: `PAY-${Math.floor(100000 + Math.random() * 900000)}`,
        mentorLead: course.mentorLead.name
      };

      if (typeof window !== "undefined") {
        localStorage.setItem("kalarium_student", JSON.stringify(studentData));
      }

      // Redirect to Student Dashboard
      setTimeout(() => {
        router.push("/dashboard");
      }, 1200);
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[#06060a] text-[#f8fafc] flex flex-col selection:bg-[#8b5cf6]/40 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Link
            href="/#courses"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#94a3b8] hover:text-[#c084fc] transition-colors p-2 rounded-lg hover:bg-[#0d0d14]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Programmes</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Comprehensive Course Overview & Syllabus */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header info */}
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 text-[#c084fc]">
                  {course.grade}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#141424] border border-[#232338] text-[#e2e8f0]">
                  {course.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 border border-amber-500/40 text-amber-300 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Flat 50% Off Early Bird
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#f8fafc] font-display tracking-tight leading-[1.1]">
                {course.title}
              </h1>
              <p className="mt-3 text-base sm:text-lg text-[#c084fc] font-medium">
                {course.tagline}
              </p>
              <p className="mt-4 text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* What you get / Highlights */}
            <div className="p-6 rounded-2xl bg-[#0d0d14] border border-[#1e1e2d]">
              <h2 className="text-base font-bold text-[#f8fafc] mb-4 font-display flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8b5cf6]" />
                <span>What Is Included in This Learning Track</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {course.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#cbd5e1]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mentor Lead Spotlight */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0d0d14] to-[#141026] border border-[#8b5cf6]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 flex items-center justify-center text-[#c084fc] font-display font-black text-xl shrink-0">
                  {course.mentorLead.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-[#f8fafc] font-display">
                      {course.mentorLead.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#8b5cf6]/20 text-[#c084fc]">
                      Lead Mentor
                    </span>
                  </div>
                  <p className="text-xs text-[#94a3b8] mt-0.5">
                    {course.mentorLead.institute} • {course.mentorLead.subject}
                  </p>
                </div>
              </div>

              <div className="text-xs text-[#a855f7] font-mono bg-[#0d0d14] px-3 py-1.5 rounded-lg border border-[#1e1e2d]">
                1-on-1 Dedicated
              </div>
            </div>

            {/* Curriculum Breakdown */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#f8fafc] font-display flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#8b5cf6]" />
                <span>Syllabus &amp; Conceptual Roadmap</span>
              </h2>

              <div className="space-y-3">
                {course.syllabus.map((section, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#0d0d14] border border-[#1e1e2d] hover:border-[#8b5cf6]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-bold text-[#f8fafc] font-display flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#1e1e2d] text-[#c084fc] flex items-center justify-center text-[11px] font-mono">
                          {idx + 1}
                        </span>
                        <span>{section.unit}</span>
                      </h3>
                      <span className="text-[11px] font-mono text-[#8b5cf6]">Module {idx + 1}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#94a3b8]">
                      {section.topics.map((topic, tIdx) => (
                        <div key={tIdx} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#8b5cf6]" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Enrollment Form & Secure Payment */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-3xl bg-[#0d0d14] border border-[#8b5cf6]/50 p-6 sm:p-8 shadow-2xl shadow-[#8b5cf6]/10">
              
              {/* Box Header & Pricing */}
              <div className="pb-5 border-b border-[#1e1e2d]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider">
                    Course Enrollment
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold text-[11px]">
                    Save ₹{(course.originalPrice - course.price).toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-[#f8fafc] font-display">
                    ₹{course.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-base text-[#64748b] line-through">
                    ₹{course.originalPrice.toLocaleString("en-IN")}
                  </span>
                  <span className="text-xs font-semibold text-[#c084fc]">
                    (Code: KALARIUM50 applied)
                  </span>
                </div>
              </div>

              {/* Enrollment Form */}
              <form onSubmit={handleEnrollment} className="mt-6 space-y-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#e2e8f0] mb-1.5">
                    Student Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Adithya Varma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#08080e] border border-[#1e1e2d] focus:border-[#8b5cf6] text-sm text-[#f8fafc] placeholder-[#64748b] focus:outline-none transition-colors"
                  />
                  {formErrors.fullName && (
                    <span className="text-xs text-rose-400 mt-1 block">{formErrors.fullName}</span>
                  )}
                </div>

                {/* District Selection (Kerala Districts) */}
                <div>
                  <label className="block text-xs font-semibold text-[#e2e8f0] mb-1.5">
                    District <span className="text-rose-400">*</span>
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#08080e] border border-[#1e1e2d] focus:border-[#8b5cf6] text-sm text-[#f8fafc] focus:outline-none transition-colors"
                  >
                    {KERALA_DISTRICTS.map((dist) => (
                      <option key={dist} value={dist} className="bg-[#0d0d14] text-white">
                        {dist}
                      </option>
                    ))}
                  </select>
                  {formErrors.district && (
                    <span className="text-xs text-rose-400 mt-1 block">{formErrors.district}</span>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-[#e2e8f0] mb-1.5">
                    WhatsApp / Mobile Number <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3.5 text-xs text-[#94a3b8] font-mono">+91</span>
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                      placeholder="98765 43210"
                      className="w-full pl-12 pr-3.5 py-2.5 rounded-xl bg-[#08080e] border border-[#1e1e2d] focus:border-[#8b5cf6] text-sm text-[#f8fafc] placeholder-[#64748b] focus:outline-none transition-colors"
                    />
                  </div>
                  {formErrors.phoneNumber && (
                    <span className="text-xs text-rose-400 mt-1 block">{formErrors.phoneNumber}</span>
                  )}
                </div>

                {/* Payment Option Tabs */}
                <div className="pt-2">
                  <label className="block text-xs font-semibold text-[#e2e8f0] mb-2">
                    Select Payment Method
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("gpay")}
                      className={`p-2.5 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all ${
                        paymentMethod === "gpay"
                          ? "bg-[#8b5cf6]/20 border-[#8b5cf6] text-[#c084fc] shadow-md shadow-[#8b5cf6]/20"
                          : "bg-[#08080e] border-[#1e1e2d] text-[#94a3b8] hover:border-[#8b5cf6]/40"
                      }`}
                    >
                      <Smartphone className="w-4 h-4" />
                      <span>GPay / UPI</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("cards")}
                      className={`p-2.5 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all ${
                        paymentMethod === "cards"
                          ? "bg-[#8b5cf6]/20 border-[#8b5cf6] text-[#c084fc] shadow-md shadow-[#8b5cf6]/20"
                          : "bg-[#08080e] border-[#1e1e2d] text-[#94a3b8] hover:border-[#8b5cf6]/40"
                      }`}
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>Credit/Debit</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("netbanking")}
                      className={`p-2.5 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all ${
                        paymentMethod === "netbanking"
                          ? "bg-[#8b5cf6]/20 border-[#8b5cf6] text-[#c084fc] shadow-md shadow-[#8b5cf6]/20"
                          : "bg-[#08080e] border-[#1e1e2d] text-[#94a3b8] hover:border-[#8b5cf6]/40"
                      }`}
                    >
                      <Building2 className="w-4 h-4" />
                      <span>Net Banking</span>
                    </button>
                  </div>
                </div>

                {/* Sub-inputs based on payment method */}
                {paymentMethod === "gpay" && (
                  <div className="p-3.5 rounded-xl bg-[#08080e] border border-[#1e1e2d] space-y-2 text-xs">
                    <div className="flex items-center justify-between text-xs text-[#94a3b8]">
                      <span>Instant UPI / QR Option</span>
                      <span className="text-emerald-400 font-mono font-semibold">Zero Surcharge</span>
                    </div>
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="e.g. yourname@okhdfcbank or 9876543210@paytm"
                      className="w-full px-3 py-2 rounded-lg bg-[#0d0d14] border border-[#232338] text-xs text-[#f8fafc] focus:outline-none focus:border-[#8b5cf6]"
                    />
                    <div className="flex items-center gap-1.5 text-[11px] text-[#64748b]">
                      <QrCode className="w-3.5 h-3.5 text-[#8b5cf6]" />
                      <span>Or scan dynamic QR at final checkout</span>
                    </div>
                  </div>
                )}

                {paymentMethod === "cards" && (
                  <div className="p-3.5 rounded-xl bg-[#08080e] border border-[#1e1e2d] space-y-2.5 text-xs">
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, "").slice(0, 16))}
                      placeholder="Card Number (16 Digits)"
                      className="w-full px-3 py-2 rounded-lg bg-[#0d0d14] border border-[#232338] text-xs text-[#f8fafc] focus:outline-none focus:border-[#8b5cf6]"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value.slice(0, 5))}
                        placeholder="MM / YY"
                        className="px-3 py-2 rounded-lg bg-[#0d0d14] border border-[#232338] text-xs text-[#f8fafc] focus:outline-none focus:border-[#8b5cf6]"
                      />
                      <input
                        type="password"
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value.slice(0, 3))}
                        placeholder="CVV"
                        className="px-3 py-2 rounded-lg bg-[#0d0d14] border border-[#232338] text-xs text-[#f8fafc] focus:outline-none focus:border-[#8b5cf6]"
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === "netbanking" && (
                  <div className="p-3.5 rounded-xl bg-[#08080e] border border-[#1e1e2d] text-xs space-y-2">
                    <select className="w-full px-3 py-2 rounded-lg bg-[#0d0d14] border border-[#232338] text-xs text-[#f8fafc] focus:outline-none">
                      <option>Federal Bank (Kerala)</option>
                      <option>State Bank of India (SBI)</option>
                      <option>HDFC Bank</option>
                      <option>ICICI Bank</option>
                      <option>South Indian Bank</option>
                      <option>Axis Bank</option>
                    </select>
                  </div>
                )}

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] hover:from-[#a855f7] hover:to-[#7c3aed] text-white font-bold text-sm shadow-xl shadow-[#7c3aed]/40 hover:shadow-[#8b5cf6]/60 transition-all flex items-center justify-center gap-2 group disabled:opacity-75"
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>
                        {paymentStep === "verifying" ? "Processing Payment Gateway..." : "Enrolling to Dashboard..."}
                      </span>
                    </div>
                  ) : (
                    <>
                      <span>Pay ₹{course.price.toLocaleString("en-IN")} &amp; Access Dashboard</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[#64748b] pt-1">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>256-bit Encrypted Checkout • Instant Dashboard Access</span>
                </div>
              </form>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
