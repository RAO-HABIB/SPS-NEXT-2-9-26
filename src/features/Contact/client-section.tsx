"use client";

import { useState } from "react";
import { Phone, Mail, Clock, MapPin, ArrowRight } from "lucide-react";

export default function ContactClientSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
      {/* Left Column: Form */}
      <div className="lg:col-span-7">
        <div className="rounded-[2rem] bg-[#F8F9FA] p-8 sm:p-10">
          <h2 className="mb-8 text-2xl font-semibold text-slate-900">
            Let's Talk About Your Project
          </h2>

          {isSubmitted ? (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
              <h3 className="text-xl font-bold text-green-900">Thank You!</h3>
              <p className="mt-2 text-sm text-green-700">
                Your message has been successfully received. We will be in touch shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: "",
                    email: "",
                    company: "",
                    subject: "",
                    message: "",
                  });
                }}
                className="mt-6 inline-flex rounded-xl bg-[#0057B8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#004494]"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-medium text-slate-900"
                >
                  Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-900"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="We'll get back to you here"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium text-slate-900"
                >
                  Company Name
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Let us know who you represent"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-900"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-900"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help"
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-[#0057B8] py-4 text-sm font-semibold text-white transition hover:bg-[#004494] disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Right Column: Info & Map */}
      <div className="flex flex-col gap-10 lg:col-span-5">
        {/* Contact Info */}
        <div className="pt-2">
          <h3 className="mb-6 text-xl font-semibold text-slate-900">
            Prefer a Direct Approach?
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-600">
              <Phone className="h-5 w-5 text-[#2563EB]" />
              <a
                href="tel:+13018400088"
                className="transition-colors hover:text-[#2563EB]"
              >
                +1 (301) 840-0088
              </a>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <Mail className="h-5 w-5 text-[#2563EB]" />
              <a
                href="mailto:info@spsnet.com"
                className="transition-colors hover:text-[#2563EB]"
              >
                info@spsnet.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <Clock className="h-5 w-5 text-[#2563EB]" />
              <span>Monday to Friday, 9 AM - 6 PM (EST)</span>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="relative h-[400px] w-full overflow-hidden rounded-[2rem] bg-slate-100 lg:h-full lg:min-h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3097.082452722005!2d-77.1875!3d39.087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7d2f5c5a5b5a5%3A0x1234567890!2s2400%20Research%20Blvd%2C%20Rockville%2C%20MD%2020850!5e0!3m2!1sen!2sus!4v1697040000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "400px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SPS Headquarters Location"
            className="absolute inset-0 h-full w-full grayscale opacity-70 transition-all duration-500 hover:opacity-100 hover:grayscale-0"
          />

          {/* Floating Card on Map */}
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white p-5 shadow-xl sm:p-6">
            <h4 className="text-lg font-semibold text-slate-900">
              Visit Our Office
            </h4>
            <div className="mt-3 flex items-start gap-2 text-sm text-slate-600">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" />
              <p>
                2400 Research Blvd, Suite 115, <br />
                Rockville, MD 20850
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=2400+Research+Blvd+Suite+115+Rockville+MD+20850"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-fit items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
            >
              Get a Direction
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}