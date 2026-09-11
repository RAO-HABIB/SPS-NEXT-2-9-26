'use client';

import React, { useState } from 'react';
import { User, Mail, Building2, Briefcase, Phone, Lock, AlertCircle, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';

export default function RountableRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    jobTitle: '',
    phone: ''
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [captchaError, setCaptchaError] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  // Dynamic Live Validation Logic details
  const validateField = (name: string, value: string): string => {
    let errorMsg = '';

    switch (name) {
      case 'name':
        const cleanName = value.trim();
        if (!cleanName) {
          errorMsg = 'Name is required';
        } else if (/[0-9]/.test(cleanName)) {
          errorMsg = 'Name cannot contain numbers';
        } else if (cleanName.length < 3) {
          errorMsg = 'Must be at least 3 characters';
        }
        break;

      case 'email':
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!value.trim()) {
          errorMsg = 'Email is required';
        } else if (!emailRegex.test(value.trim())) {
          errorMsg = 'Please enter a valid business email';
        }
        break;

      case 'organization':
        if (!value.trim()) {
          errorMsg = 'Organization / Agency name is required';
        }
        break;

      case 'jobTitle':
        if (!value.trim()) {
          errorMsg = 'Job Title / Role is required';
        }
        break;

      case 'phone':
        const cleanPhone = value.replace(/[\s-()]/g, '');
        if (!value.trim()) {
          errorMsg = 'Phone number is required';
        } else if (!/^\+?[0-9]{7,15}$/.test(cleanPhone)) {
          errorMsg = 'Enter a valid phone number (7-15 digits)';
        }
        break;

      default:
        break;
    }

    return errorMsg;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const allTouched: Record<string, boolean> = {};
    const newErrors: Record<string, string> = {};

    Object.keys(formData).forEach(key => {
      allTouched[key] = true;
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    setTouched(allTouched);
    setErrors(newErrors);

    if (!isCaptchaVerified) {
      setCaptchaError('Please complete the security check');
      return;
    }

    if (Object.keys(newErrors).length === 0) {
      setIsRegistered(true);
    }
  };

  const getFieldContainerClass = (name: string) => {
    const isTouched = touched[name];
    const hasError = !!errors[name];
    const base = "flex items-center gap-3 px-3.5 py-2.5 sm:py-3 rounded-xl border transition-all duration-200 bg-slate-50/60";

    if (isTouched && hasError) {
      return `${base} border-red-500 bg-red-50/30 ring-2 ring-red-500/20`;
    }
    if (isTouched && !hasError && formData[name as keyof typeof formData]) {
      return `${base} border-emerald-500 bg-emerald-50/30 ring-2 ring-emerald-500/20`;
    }
    return `${base} border-slate-200 hover:border-slate-300 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:bg-white`;
  };

  if (isRegistered) {
    return (
      <div className="py-8 text-center space-y-5 animate-fade-in border border-emerald-100 bg-emerald-50/30 rounded-2xl p-6">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle className="w-7 h-7" />
        </div>
        <div className="space-y-2 px-2">
          <h4 className="text-xl font-extrabold text-slate-900">Registration Confirmed!</h4>
          <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
            Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your registration has been received. Please check your inbox (<span className="text-blue-600 font-semibold">{formData.email}</span>) for the virtual session calendar invite and access credentials.
          </p>
        </div>
        <button 
          onClick={() => {
            setIsRegistered(false);
            setFormData({ name: '', email: '', organization: '', jobTitle: '', phone: '' });
            setTouched({});
            setErrors({});
            setIsCaptchaVerified(false);
          }}
          className="bg-[#03122F] hover:bg-slate-900 text-white text-xs font-bold py-3 px-6 rounded-xl transition shadow-md"
        >
          Register Another Colleague
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      
      {/* Full Name */}
      <div className="flex flex-col gap-1.5">
        <label className="block text-xs font-bold text-slate-700">
          Full Name <span className="text-red-500">*</span>
        </label>
        <div className={getFieldContainerClass('name')}>
          <User className="w-4 h-4 text-slate-400 shrink-0 pointer-events-none" />
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="e.g. John Smith" 
            className="w-full bg-transparent border-0 p-0 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:ring-0 focus:outline-none"
          />
        </div>
        {touched.name && errors.name && (
          <p className="text-[11px] text-red-500 flex items-center gap-1 font-semibold pl-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.name}
          </p>
        )}
      </div>

      {/* Work Email */}
      <div className="flex flex-col gap-1.5">
        <label className="block text-xs font-bold text-slate-700">
          Work Email Address <span className="text-red-500">*</span>
        </label>
        <div className={getFieldContainerClass('email')}>
          <Mail className="w-4 h-4 text-slate-400 shrink-0 pointer-events-none" />
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="name@agency.virginia.gov" 
            className="w-full bg-transparent border-0 p-0 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:ring-0 focus:outline-none"
          />
        </div>
        {touched.email && errors.email && (
          <p className="text-[11px] text-red-500 flex items-center gap-1 font-semibold pl-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.email}
          </p>
        )}
      </div>

      {/* Organization */}
      <div className="flex flex-col gap-1.5">
        <label className="block text-xs font-bold text-slate-700">
          Organization / Agency <span className="text-red-500">*</span>
        </label>
        <div className={getFieldContainerClass('organization')}>
          <Building2 className="w-4 h-4 text-slate-400 shrink-0 pointer-events-none" />
          <input 
            type="text" 
            name="organization" 
            value={formData.organization} 
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="e.g. Dept. of Technology" 
            className="w-full bg-transparent border-0 p-0 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:ring-0 focus:outline-none"
          />
        </div>
        {touched.organization && errors.organization && (
          <p className="text-[11px] text-red-500 flex items-center gap-1 font-semibold pl-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.organization}
          </p>
        )}
      </div>

      {/* Job Title */}
      <div className="flex flex-col gap-1.5">
        <label className="block text-xs font-bold text-slate-700">
          Job Title / Role <span className="text-red-500">*</span>
        </label>
        <div className={getFieldContainerClass('jobTitle')}>
          <Briefcase className="w-4 h-4 text-slate-400 shrink-0 pointer-events-none" />
          <input 
            type="text" 
            name="jobTitle" 
            value={formData.jobTitle} 
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="e.g. Information Security Officer" 
            className="w-full bg-transparent border-0 p-0 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:ring-0 focus:outline-none"
          />
        </div>
        {touched.jobTitle && errors.jobTitle && (
          <p className="text-[11px] text-red-500 flex items-center gap-1 font-semibold pl-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.jobTitle}
          </p>
        )}
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1.5">
        <label className="block text-xs font-bold text-slate-700">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <div className={getFieldContainerClass('phone')}>
          <Phone className="w-4 h-4 text-slate-400 shrink-0 pointer-events-none" />
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="(804) 555-0199" 
            className="w-full bg-transparent border-0 p-0 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:ring-0 focus:outline-none"
          />
        </div>
        {touched.phone && errors.phone && (
          <p className="text-[11px] text-red-500 flex items-center gap-1 font-semibold pl-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.phone}
          </p>
        )}
      </div>

      {/* Clean Modern Mock Captcha */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between p-4 border border-slate-200 bg-slate-50 rounded-2xl">
          <div className="flex items-center gap-3">
            <input 
              type="checkbox" 
              id="mock-captcha" 
              checked={isCaptchaVerified}
              onChange={(e) => {
                setIsCaptchaVerified(e.target.checked);
                if (e.target.checked) setCaptchaError('');
              }}
              className="w-5 h-5 accent-blue-600 cursor-pointer rounded"
            />
            <label htmlFor="mock-captcha" className="text-xs font-bold text-slate-600 select-none cursor-pointer">
              I'm not a robot
            </label>
          </div>
          <div className="flex flex-col items-center justify-center text-slate-400">
            <Lock className="w-4 h-4 text-blue-500" />
            <span className="text-[8px] uppercase font-bold tracking-widest mt-0.5">reCAPTCHA</span>
          </div>
        </div>
        {captchaError && (
          <p className="text-[11px] text-red-500 flex items-center gap-1 font-semibold pl-1"><AlertCircle className="w-3.5 h-3.5 shrinkage-0" /> {captchaError}</p>
        )}
      </div>

      {/* Modern Pill-shaped Premium Action Button */}
      <button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm py-4 px-6 rounded-2xl shadow-xl shadow-blue-600/15 hover:shadow-2xl hover:shadow-blue-600/30 transition duration-300 flex items-center justify-center gap-2 group mt-2"
      >
        <span>Register</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
      </button>

      {/* Subtle Security reassurance details */}
      <p className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1 max-w-sm mx-auto">
        <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
        SPS activitygate is secured. Your registration details are safe and encrypted.
      </p>

    </form>
  );
}