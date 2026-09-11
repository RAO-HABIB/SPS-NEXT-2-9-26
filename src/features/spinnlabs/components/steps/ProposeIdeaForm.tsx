'use client';

import React, { useState } from 'react';
import { 
  User, Mail, Phone, Lightbulb, Target, TrendingUp, 
  Users, Shield, Briefcase, Zap, CheckCircle2, AlertCircle,
  Flag, Rocket, PieChart, Banknote, HelpCircle, Activity
} from 'lucide-react';

interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
  icon: React.ElementType;
}

interface FieldGroup {
  title: string;
  description: string;
  fields: FormField[];
}

export default function ProposeIdeaForm() {
  // Form Data Structure with Logical Groupings & Lucide Icons
  const formGroups: FieldGroup[] = [
    {
      title: "Personal Information",
      description: "Let's start with your contact details.",
      fields: [
        { name: "fullName", label: "Full Name", type: "text", placeholder: "e.g. Ali Khan", icon: User },
        { name: "email", label: "Email Address", type: "email", placeholder: "ali@example.com", icon: Mail },
        { name: "phone", label: "Phone No.", type: "text", placeholder: "+92 300 1234567", icon: Phone },
      ]
    },
    {
      title: "The Vision & Core Idea",
      description: "What are you building and why?",
      fields: [
        { name: "projectName", label: "Project Name", type: "text", placeholder: "e.g. TechVenture AI", icon: Zap },
        { name: "visionMission", label: "Vision, Mission & Idea", type: "textarea", placeholder: "Explain your key objectives...", icon: Lightbulb },
        { name: "passionReason", label: "Why are you passionate about this?", type: "textarea", placeholder: "What drives you to solve this problem?", icon: Activity },
        { name: "longTermVision", label: "Long-term vision (5 Years)", type: "textarea", placeholder: "Where do you see this company?", icon: Flag },
      ]
    },
    {
      title: "Market & Audience",
      description: "Who is this for and what is the landscape?",
      fields: [
        { name: "marketOpportunity", label: "Market Opportunity", type: "textarea", placeholder: "Specify market size & demographics...", icon: PieChart },
        { name: "targetAudience", label: "Target Audience", type: "textarea", placeholder: "Who will buy or use your product?", icon: Users },
        { name: "valueProposition", label: "Unique Value Proposition", type: "textarea", placeholder: "Why choose you over others?", icon: Target },
        { name: "competitiveAnalysis", label: "Competitive Analysis", type: "textarea", placeholder: "Direct and indirect competitors...", icon: Shield },
      ]
    },
    {
      title: "Business & Strategy",
      description: "How will you execute and make money?",
      fields: [
        { name: "revenueModel", label: "Revenue Model", type: "textarea", placeholder: "How does your company make money?", icon: Banknote },
        { name: "businessPlan", label: "Business Plan", type: "textarea", placeholder: "Initial structure mapped out...", icon: Briefcase },
        { name: "goToMarket", label: "Go-to-market Strategy", type: "textarea", placeholder: "How will you reach your first 100 users?", icon: Rocket },
        { name: "timeline", label: "Timeline for Launch", type: "textarea", placeholder: "Expected duration for initial rollout...", icon: TrendingUp },
        { name: "exitStrategy", label: "Exit Strategy", type: "textarea", placeholder: "Acquisition, IPO, or dividends?", icon: Flag },
      ]
    },
    {
      title: "Team & Logistics",
      description: "Resources, challenges, and support.",
      fields: [
        { name: "team", label: "Who is on your team?", type: "textarea", placeholder: "Roles, core skills, and contributors...", icon: Users },
        { name: "financialPlan", label: "Financial Plan & Funding", type: "textarea", placeholder: "How much capital do you need?", icon: Banknote },
        { name: "validation", label: "Idea Validation", type: "textarea", placeholder: "Surveys, landing pages, or MVP feedback...", icon: CheckCircle2 },
        { name: "mentors", label: "Mentors or Advisors", type: "textarea", placeholder: "Who is guiding you?", icon: Users },
        { name: "experience", label: "Personal Background", type: "textarea", placeholder: "Your work history and expertise...", icon: Briefcase },
      ]
    },
    {
      title: "Risk & Compliance",
      description: "Navigating hurdles and responsibilities.",
      fields: [
        { name: "challenges", label: "Anticipated Challenges", type: "textarea", placeholder: "Technological or logistical hurdles...", icon: AlertCircle },
        { name: "adaptability", label: "Adaptability to Market Changes", type: "textarea", placeholder: "Your pivot framework...", icon: Activity },
        { name: "setbacks", label: "Handling Setbacks", type: "textarea", placeholder: "Risk mitigation protocols...", icon: Shield },
        { name: "ipLegal", label: "IP & Legal Issues", type: "textarea", placeholder: "Patent, trademark protection...", icon: Shield },
        { name: "ethicalImplications", label: "Ethical & Social Implications", type: "textarea", placeholder: "How does it affect the community?", icon: HelpCircle },
      ]
    }
  ];

  // FIX: Pre-populate the state with empty strings for all fields to guarantee they are strictly controlled from mounting
  const [formData, setFormData] = useState<Record<string, string>>(() => {
    const initialData: Record<string, string> = {};
    formGroups.forEach(group => {
      group.fields.forEach(field => {
        initialData[field.name] = "";
      });
    });
    return initialData;
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string) => {
    if (!value.trim()) return "This field is required";
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address";
    if (name === "phone" && !/^\+?[\d\s-]{10,}$/.test(value)) return "Enter a valid phone number";
    if (value.length < 15 && !["fullName", "email", "phone", "projectName"].includes(name)) {
      return "Please provide a bit more detail (min 15 characters)";
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newErrors: Record<string, string> = {};
    let isFormValid = true;

    formGroups.forEach(group => {
      group.fields.forEach(field => {
        const value = formData[field.name] || "";
        const error = validateField(field.name, value);
        if (error) {
          newErrors[field.name] = error;
          isFormValid = false;
        }
      });
    });

    setErrors(newErrors);
    const allTouched: Record<string, boolean> = {};
    formGroups.forEach(group => group.fields.forEach(f => allTouched[f.name] = true));
    setTouched(allTouched);

    if (isFormValid) {
      console.log("SaaS Form Data: ", formData);
      alert('Proposal Submitted! Our team will review your application.');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#F8FAFC] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Ribbon Section */}
        <div className="mb-10 p-8 rounded-3xl bg-[#0a1b3d] text-white overflow-hidden relative shadow-md">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1BA6C7] opacity-20 blur-[100px] rounded-full"></div>
          <h2 className="text-3xl font-black tracking-tight text-white">Propose Your Idea</h2>
          <p className="text-[#1BA6C7] font-semibold mt-2">Professional application framework for SpinnLabs evaluation</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {formGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
              
              {/* Section Header */}
              <div className="px-8 py-5 border-b border-slate-100 bg-slate-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center rounded-xl bg-[#0a1b3d] text-[#1BA6C7] text-xs font-black shadow-xs">
                    {groupIdx + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#0a1b3d]">{group.title}</h3>
                    <p className="text-xs text-slate-500 font-medium">{group.description}</p>
                  </div>
                </div>
              </div>

              {/* Input Grid Workspace */}
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {group.fields.map((field, idx) => {
                  const hasError = touched[field.name] && errors[field.name];
                  const isValid = touched[field.name] && !errors[field.name] && formData[field.name];
                  const Icon = field.icon;

                  const inputStyle = `w-full bg-slate-50 border-2 rounded-xl py-3.5 px-4 text-sm font-medium text-slate-900 placeholder-slate-500/80 outline-none transition-all duration-200 
                    ${hasError 
                      ? 'border-red-300 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100/50' 
                      : isValid
                      ? 'border-emerald-200 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100/40'
                      : 'border-slate-200/80 focus:border-[#1BA6C7] focus:bg-white focus:ring-4 focus:ring-[#1BA6C7]/10'
                    }`;

                  return (
                    <div key={idx} className={`flex flex-col ${field.type === 'textarea' ? 'md:col-span-2' : ''}`}>
                      <label className="text-[13px] font-bold text-slate-700 tracking-wide mb-2 flex items-center gap-2">
                        <Icon size={14} className="text-[#0a1b3d]" />
                        {field.label}
                      </label>
                      
                      <div className="relative">
                        {field.type === "textarea" ? (
                          <textarea
                            name={field.name}
                            value={formData[field.name] || ""} // Guaranteed Controlled Fallback
                            onChange={handleChange}
                            onBlur={handleBlur}
                            rows={3}
                            placeholder={field.placeholder}
                            className={`${inputStyle} resize-none`}
                          />
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name] || ""} // Guaranteed Controlled Fallback
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={field.placeholder}
                            className={inputStyle}
                          />
                        )}

                        {/* Status Icons */}
                        {isValid && (
                          <div className="absolute right-3.5 top-4 text-emerald-500">
                            <CheckCircle2 size={16} />
                          </div>
                        )}
                        {hasError && (
                          <div className="absolute right-3.5 top-4 text-red-500">
                            <AlertCircle size={16} />
                          </div>
                        )}
                      </div>

                      {/* Error Messages */}
                      {hasError && (
                        <p className="text-xs text-red-600 mt-1.5 font-semibold flex items-center gap-1">
                          {errors[field.name]}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Action Footer */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-200">
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#0a1b3d] hover:bg-[#1BA6C7] text-white font-bold text-sm py-4 px-10 rounded-xl transition-all duration-300 shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Submit Proposal <Rocket size={16} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}