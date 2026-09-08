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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Frosted Glass Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#020e24]/75 backdrop-blur-md transition-all"
          />

          {/* Modal Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.35)] border border-slate-100 overflow-hidden z-10 my-8"
          >
            {/* Top Accent Gradient Line */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#00a7e1] via-[#021b3d] to-[#00a7e1]" />

            {/* Modal Header */}
            <div className="px-6 sm:px-8 pt-7 pb-4 flex items-start justify-between border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-bold tracking-widest text-[#00a7e1] uppercase">
                    Direct Consultation
                  </span>
                  <span className="size-1 rounded-full bg-slate-300" />
                  <span className="text-xs text-slate-400 font-medium truncate max-w-[220px]">
                    {serviceTitle}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#031B3D] tracking-tight">
                  Request a Quote
                </h3>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="size-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors flex items-center justify-center -mr-1"
                aria-label="Close dialog"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 sm:px-8 py-6">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                        <User className="size-3.5 text-slate-400" />
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50/70 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#00a7e1] focus:ring-2 focus:ring-[#00a7e1]/15 transition-all outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                        <Mail className="size-3.5 text-slate-400" />
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50/70 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#00a7e1] focus:ring-2 focus:ring-[#00a7e1]/15 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                      <Phone className="size-3.5 text-slate-400" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50/70 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#00a7e1] focus:ring-2 focus:ring-[#00a7e1]/15 transition-all outline-none"
                    />
                  </div>

                  {/* Requirements (Textarea) */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                      <FileText className="size-3.5 text-slate-400" />
                      Project Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      placeholder="Describe your current infrastructure, timeline, or specific operational requirements..."
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50/70 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#00a7e1] focus:ring-2 focus:ring-[#00a7e1]/15 transition-all outline-none resize-none"
                    />
                  </div>

                  {/* Clean Verification Checkbox */}
                  <div className="pt-1">
                    <div
                      onClick={() => setIsRobotVerified(!isRobotVerified)}
                      className="inline-flex items-center gap-3.5 px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/80 hover:bg-slate-100/70 cursor-pointer select-none transition-colors"
                    >
                      <div
                        className={`size-5 rounded-md border flex items-center justify-center transition-all ${
                          isRobotVerified
                            ? "bg-[#00a7e1] border-[#00a7e1] text-white shadow-xs"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {isRobotVerified && <CheckCircle2 className="size-4 stroke-[2.5]" />}
                      </div>
                      <span className="text-xs font-medium text-slate-700">
                        I&apos;m not a robot
                      </span>
                      <div className="ml-4 pl-3 border-l border-slate-200 flex items-center gap-1 text-[11px] text-slate-400">
                        <ShieldCheck className="size-3.5 text-[#00a7e1]" />
                        <span>SPS Verified</span>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3 flex items-center justify-end gap-3">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={onClose}
                      className="text-slate-600 hover:text-slate-900 text-sm px-4"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#00a7e1] hover:bg-[#008dbf] text-white px-7 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-[#00a7e1]/25 hover:shadow-lg transition-all hover:scale-[1.02]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="size-4 animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="size-4 ml-1.5" />
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
