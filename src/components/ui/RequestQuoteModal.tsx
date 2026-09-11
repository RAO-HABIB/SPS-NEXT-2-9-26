"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, FileText, CheckCircle2, ShieldCheck, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RequestQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
}

export default function RequestQuoteModal({
  isOpen,
  onClose,
  serviceTitle = "Enterprise Solutions",
}: RequestQuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: "",
  });
  const [isRobotVerified, setIsRobotVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Reset state after close animation completes
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setErrorMessage("");
        setIsRobotVerified(false);
      }, 300);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMessage("Please fill in your name and email address.");
      return;
    }
    if (!isRobotVerified) {
      setErrorMessage("Please complete the verification check.");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    // Simulate clean network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 overflow-y-auto">
          {/* Frosted Glass Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-all"
          />

          {/* Modal Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
            className="relative w-full max-w-[95%] sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-white/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/60 overflow-hidden z-10 my-4 sm:my-8 ring-1 ring-black/5"
          >

            {/* Modal Header */}
            <div className="px-5 sm:px-8 md:px-10 pt-6 sm:pt-7 md:pt-8 pb-4 sm:pb-5 flex items-start justify-between border-b border-white/40">
              <div>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <span className="text-[10px] sm:text-[11px] md:text-xs font-bold tracking-widest text-cyan-600 uppercase">
                    Direct Consultation
                  </span>
                  <span className="hidden sm:block size-1 rounded-full bg-slate-400" />
                  <span className="text-[11px] sm:text-xs md:text-sm text-slate-800 font-medium line-clamp-1 max-w-[200px] sm:max-w-[240px] md:max-w-[320px]">
                    {serviceTitle}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#031B3D] tracking-tight">
                  Request a Quote
                </h3>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="size-8 sm:size-9 md:size-10 rounded-full bg-white/50 hover:bg-white/80 border border-white/60 shadow-sm text-slate-500 hover:text-slate-800 transition-all flex items-center justify-center shrink-0 -mr-1 sm:-mr-2"
                aria-label="Close dialog"
              >
                <X className="size-4 sm:size-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-5 sm:px-8 md:px-10 py-5 sm:py-6 md:py-8">
              {isSubmitted ? (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center flex flex-col items-center"
                >
                  <div className="size-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-5 shadow-sm">
                    <CheckCircle2 className="size-9" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#031B3D] mb-2">
                    Quote Request Received!
                  </h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed mb-6">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our enterprise solutions team has received your inquiry for <strong>{serviceTitle}</strong> and will reach out with a comprehensive proposal within 24 business hours.
                  </p>
                  <Button
                    onClick={onClose}
                    className="bg-[#031B3D] hover:bg-[#062654] text-white px-8 py-2.5 rounded-xl text-sm font-semibold transition-all"
                  >
                    Done
                  </Button>
                </motion.div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 text-xs rounded-xl bg-red-50 text-red-700 border border-red-200 flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-red-500 shrink-0" />
                      {errorMessage}
                    </div>
                  )}

                  {/* Name & Email (2 columns) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                    <div className="space-y-1.5 md:space-y-2">
                      <label className="text-xs md:text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                        <User className="size-3.5 md:size-4 text-slate-400" />
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm md:text-base bg-white/40 backdrop-blur-md border border-white/60 shadow-sm rounded-xl text-slate-900 placeholder:text-slate-500 focus:bg-white/80 focus:border-[#00a7e1] focus:ring-2 focus:ring-[#00a7e1]/20 transition-all outline-none"
                      />
                    </div>

                    <div className="space-y-1.5 md:space-y-2">
                      <label className="text-xs md:text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                        <Mail className="size-3.5 md:size-4 text-slate-400" />
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm md:text-base bg-white/40 backdrop-blur-md border border-white/60 shadow-sm rounded-xl text-slate-900 placeholder:text-slate-500 focus:bg-white/80 focus:border-[#00a7e1] focus:ring-2 focus:ring-[#00a7e1]/20 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-xs md:text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                      <Phone className="size-3.5 md:size-4 text-slate-400" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm md:text-base bg-white/40 backdrop-blur-md border border-white/60 shadow-sm rounded-xl text-slate-900 placeholder:text-slate-500 focus:bg-white/80 focus:border-[#00a7e1] focus:ring-2 focus:ring-[#00a7e1]/20 transition-all outline-none"
                    />
                  </div>

                  {/* Requirements (Textarea) */}
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-xs md:text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                      <FileText className="size-3.5 md:size-4 text-slate-400" />
                      Project Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      placeholder="Describe your current infrastructure, timeline, or specific operational requirements..."
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm md:text-base bg-white/40 backdrop-blur-md border border-white/60 shadow-sm rounded-xl text-slate-900 placeholder:text-slate-500 focus:bg-white/80 focus:border-[#00a7e1] focus:ring-2 focus:ring-[#00a7e1]/20 transition-all outline-none resize-none"
                    />
                  </div>

                  {/* Clean Verification Checkbox */}
                  <div className="pt-2 sm:pt-4">
                    <div
                      onClick={() => setIsRobotVerified(!isRobotVerified)}
                      className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 px-3 sm:px-5 py-3 sm:py-3.5 rounded-xl border border-white/60 bg-white/40 hover:bg-white/60 backdrop-blur-md shadow-sm cursor-pointer select-none transition-all w-full sm:w-auto"
                    >
                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div
                          className={`size-5 sm:size-6 rounded-md border flex items-center justify-center shrink-0 transition-all ${isRobotVerified
                            ? "bg-[#00a7e1] border-[#00a7e1] text-white shadow-xs"
                            : "border-slate-300 bg-white"
                            }`}
                        >
                          {isRobotVerified && <CheckCircle2 className="size-3.5 sm:size-4 stroke-[2.5]" />}
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-700">
                          I'm not a robot
                        </span>
                      </div>
                      <div className="pl-8 sm:pl-4 sm:ml-0 border-l-0 sm:border-l border-white/50 flex items-center gap-1.5 text-[10px] sm:text-[11px] md:text-xs text-slate-500">
                        <ShieldCheck className="size-3 sm:size-3.5 md:size-4 text-[#00a7e1]" />
                        <span>SPS Verified</span>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-end gap-3 w-full">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={onClose}
                      className="w-full sm:w-auto text-slate-600 hover:text-slate-900 text-sm md:text-base px-4 py-2.5 sm:py-2 order-2 sm:order-1"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-[#00a7e1] hover:bg-[#008dbf] text-white px-6 sm:px-8 py-3.5 sm:py-3 rounded-xl text-sm md:text-base font-semibold shadow-md shadow-[#00a7e1]/25 hover:shadow-lg transition-all hover:scale-[1.02] order-1 sm:order-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="size-4 md:size-5 animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="size-4 md:size-5 ml-1.5 sm:ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
