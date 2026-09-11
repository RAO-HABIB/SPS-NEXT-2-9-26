'use client';

import React, { useState } from 'react';
import { 
  Calendar, 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  Award, 
  BookOpen, 
  FolderGit2, 
  Cpu, 
  Network, 
  Video, 
  UploadCloud, 
  CheckCircle2, 
  ChevronDown, 
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  FileSpreadsheet,
  Layers,
  AlertCircle,
  FileCheck
} from 'lucide-react';

type PathKey = 'project' | 'competence' | 'specialization' | 'micro';

export default function InternshipForm() {
  const [activePath, setActivePath] = useState<PathKey | null>('project');
  const [activeSubTab, setActiveSubTab] = useState<'works' | 'choose' | 'takeaways'>('works');

  // Form Fields State
  const [formData, setFormData] = useState({
    internship: '2026',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    university: '',
    degree: '',
    cgpa: '',
    semester: '',
    videoLink: '',
  });

  // Track which fields user has interacted with
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Files State
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [transcriptFile, setTranscriptFile] = useState<File | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [consentChecked, setConsentChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Core Live Validation Logic
  const validateField = (name: string, value: string): string => {
    let errorMsg = '';

    switch (name) {
      case 'firstName':
      case 'lastName':
        const cleanName = value.trim();
        if (!cleanName) {
          errorMsg = `${name === 'firstName' ? 'First name' : 'Last name'} is required`;
        } else if (/[0-9]/.test(cleanName)) {
          errorMsg = 'Name cannot contain numbers';
        } else if (/[!@#$%^&*(),.?":{}|<>_]/.test(cleanName)) {
          errorMsg = 'Special characters are not allowed';
        } else if (cleanName.length < 2) {
          errorMsg = 'Must be at least 2 characters';
        } else if (cleanName.length > 35) {
          errorMsg = 'Name cannot exceed 35 characters';
        }
        break;

      case 'email':
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!value.trim()) {
          errorMsg = 'Email is required';
        } else if (!emailRegex.test(value.trim())) {
          errorMsg = 'Please enter a valid email address (e.g. name@domain.com)';
        }
        break;

      case 'phone':
        const cleanPhone = value.replace(/[\s-()]/g, '');
        const phoneRegex = /^((\+92)|(92)|(0))?3\d{9}$/;
        if (!value.trim()) {
          errorMsg = 'Phone number is required';
        } else if (!/^\+?[0-9]+$/.test(cleanPhone)) {
          errorMsg = 'Only digits and optional "+" are allowed';
        } else if (!phoneRegex.test(cleanPhone)) {
          errorMsg = 'Enter valid Pakistani number (e.g. 03001234567)';
        }
        break;

      case 'cgpa':
        if (!value.trim()) {
          errorMsg = 'CGPA is required';
        } else {
          const cgpaNum = parseFloat(value);
          if (isNaN(cgpaNum)) {
            errorMsg = 'Must be a decimal number';
          } else if (cgpaNum < 0 || cgpaNum > 4.0) {
            errorMsg = 'CGPA must be between 0.0 and 4.0';
          } else if (!/^\d(\.\d{1,2})?$/.test(value)) {
            errorMsg = 'Use format: 3.7 or 3.75';
          }
        }
        break;

      case 'university':
        if (!value) errorMsg = 'Please select your university';
        break;

      case 'degree':
        if (!value) errorMsg = 'Please select your degree';
        break;

      case 'semester':
        if (!value) errorMsg = 'Please select current semester';
        break;

      case 'videoLink':
        if (value.trim()) {
          try {
            new URL(value);
          } catch (_) {
            errorMsg = 'Please enter a valid URL link';
          }
        }
        break;

      default:
        break;
    }

    return errorMsg;
  };

  // Change Handler (Validates on the fly)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  // Blur Handler (Validates when user leaves the input field)
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  // File handling & validation
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>, 
    setFileState: React.Dispatch<React.SetStateAction<File | null>>, 
    errorKey: string,
    maxSizeMB: number
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileSizeMB = file.size / (1024 * 1024);

      if (file.type !== 'application/pdf' && errorKey !== 'photo') {
        setErrors(prev => ({ ...prev, [errorKey]: 'Only PDF format is allowed' }));
        setFileState(null);
        return;
      }

      if (fileSizeMB > maxSizeMB) {
        setErrors(prev => ({ 
          ...prev, 
          [errorKey]: `File size exceeds ${maxSizeMB}MB limit` 
        }));
        setFileState(null);
      } else {
        setFileState(file);
        setErrors(prev => ({ ...prev, [errorKey]: '' }));
      }
    }
  };

  // Submit trigger & bulk validator
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched to trigger complete visual error states
    const allTouched: Record<string, boolean> = {};
    const newErrors: Record<string, string> = {};

    Object.keys(formData).forEach(key => {
      allTouched[key] = true;
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    if (!resumeFile) newErrors.resume = 'Resume PDF is required';
    if (!transcriptFile) newErrors.transcript = 'Official Transcript PDF is required';
    if (!consentChecked) newErrors.consent = 'Please accept declarations to proceed';

    setTouched(allTouched);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Clean dynamic classes for premium input states
  const getInputClasses = (name: string) => {
    const isTouched = touched[name];
    const hasError = !!errors[name];

    const baseClass = "w-full pl-11 pr-4 py-3.5 rounded-xl border outline-none transition duration-200 text-sm bg-slate-50/30 font-medium text-slate-800";
    
    if (isTouched && hasError) {
      return `${baseClass} border-red-500 bg-red-50/10 focus:ring-4 focus:ring-red-500/10 focus:border-red-500`;
    }
    if (isTouched && !hasError && formData[name as keyof typeof formData]) {
      return `${baseClass} border-emerald-500 bg-emerald-50/10 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500`;
    }
    return `${baseClass} border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600`;
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto my-16 p-8 bg-white border border-slate-100 shadow-2xl rounded-3xl text-center font-sans">
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <FileCheck className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-black text-slate-900">Application Submitted!</h2>
        <p className="text-slate-500 text-sm mt-3 leading-relaxed">
          Thank you, <strong className="text-slate-800">{formData.firstName} {formData.lastName}</strong>. Your application for the <strong className="text-slate-800">{formData.internship} Batch</strong> has been safely recorded. Our HR team will reach out to you within 3-5 working days.
        </p>
        <button 
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              internship: '2026',
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              university: '',
              degree: '',
              cgpa: '',
              semester: '',
              videoLink: '',
            });
            setTouched({});
            setErrors({});
            setResumeFile(null);
            setTranscriptFile(null);
            setPhotoFile(null);
            setConsentChecked(false);
          }}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-3 px-8 rounded-xl transition shadow-lg shadow-blue-500/20"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafbfe] py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-blue-600 selection:text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* 1. Header Hero Area */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 text-blue-700 text-xs font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Official SPS Internship Portal
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Start Your Professional Journey
          </h1>
          <p className="text-slate-500 text-sm md:text-base mt-3 max-w-2xl mx-auto">
            Join our hybrid internship program designed for graduate and undergraduate students. Choose your track and build market-ready skills.
          </p>
        </div>

        {/* 2. Intake Alert Banner (Clean Deep Blue Gradient) */}
        <div className="bg-linear-to-r from-blue-900 to-[#0f172a] text-white rounded-2xl shadow-xl shadow-blue-900/10 p-6 md:p-8 mb-10 relative overflow-hidden border border-blue-950">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                Internship Intake Information
              </div>
              <h3 className="text-lg md:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-400" />
                15th June 2026 - 15th July 2026 (For August Batch)
              </h3>
              <p className="text-blue-100/80 text-xs leading-relaxed max-w-2xl">
                The SPS Internship Program accepts applications on the <strong className="text-white">15th of every month</strong> and closes on the <strong className="text-white">15th of the following month</strong> for the next available batch.
              </p>
            </div>
            <div className="text-left md:text-right shrink-0">
              <span className="text-[10px] text-blue-300 block uppercase font-bold tracking-wider">Time Remaining</span>
              <span className="text-xl font-extrabold text-amber-400 block animate-pulse">Closing Tonight!</span>
            </div>
          </div>
        </div>

        {/* Main Application Form Container */}
        <form onSubmit={handleSubmit} className="bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-200/50 p-6 md:p-12 space-y-12">
          
          {/* 3. Personal Information Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">Personal Information</h2>
                <p className="text-xs text-slate-400">Provide details as mentioned on your official university documentations.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Year Select */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  Internship Year *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                  <select 
                    name="internship" 
                    value={formData.internship} 
                    onChange={handleInputChange} 
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition text-sm bg-slate-50/50 font-medium text-slate-700 appearance-none"
                  >
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-4 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Names Group */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">First Name *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      name="firstName" 
                      value={formData.firstName} 
                      onChange={handleInputChange} 
                      onBlur={handleBlur}
                      placeholder="First Name" 
                      className={getInputClasses('firstName')}
                    />
                  </div>
                  {touched.firstName && errors.firstName && (
                    <p className="text-[11px] text-red-500 flex items-center gap-1 font-semibold animate-pulse"><AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.firstName}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Last Name *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      name="lastName" 
                      value={formData.lastName} 
                      onChange={handleInputChange} 
                      onBlur={handleBlur}
                      placeholder="Last Name" 
                      className={getInputClasses('lastName')}
                    />
                  </div>
                  {touched.lastName && errors.lastName && (
                    <p className="text-[11px] text-red-500 flex items-center gap-1 font-semibold animate-pulse"><AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email *</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    onBlur={handleBlur}
                    placeholder="Please enter your Email" 
                    className={getInputClasses('email')}
                  />
                </div>
                {touched.email && errors.email && (
                  <p className="text-[11px] text-red-500 flex items-center gap-1 font-semibold"><AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    onBlur={handleBlur}
                    placeholder="Phone Number (e.g. 0345xxxxxxx)" 
                    className={getInputClasses('phone')}
                  />
                </div>
                {touched.phone && errors.phone && (
                  <p className="text-[11px] text-red-500 flex items-center gap-1 font-semibold"><AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.phone}</p>
                )}
              </div>

              {/* University Select */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">University *</label>
                <div className="relative">
                  <GraduationCap className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                  <select 
                    name="university" 
                    value={formData.university} 
                    onChange={handleInputChange} 
                    onBlur={handleBlur}
                    className={`w-full pl-11 pr-10 py-3.5 rounded-xl border outline-none transition text-sm bg-slate-50/50 font-medium text-slate-700 appearance-none ${touched.university && errors.university ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600'}`}
                  >
                    <option value="">Select University</option>
                    <option value="NUST">NUST</option>
                    <option value="FAST">FAST-NUCES</option>
                    <option value="COMSATS">COMSATS</option>
                    <option value="UET">UET</option>
                    <option value="GIKI">GIKI</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-4 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
                {touched.university && errors.university && (
                  <p className="text-[11px] text-red-500 flex items-center gap-1 font-semibold"><AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.university}</p>
                )}
              </div>

              {/* Degree Pursued */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Degree Pursued *</label>
                <div className="relative">
                  <BookOpen className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                  <select 
                    name="degree" 
                    value={formData.degree} 
                    onChange={handleInputChange} 
                    onBlur={handleBlur}
                    className={`w-full pl-11 pr-10 py-3.5 rounded-xl border outline-none transition text-sm bg-slate-50/50 font-medium text-slate-700 appearance-none ${touched.degree && errors.degree ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600'}`}
                  >
                    <option value="">Select Degree Pursued</option>
                    <option value="BSCS">BS Computer Science</option>
                    <option value="BSSE">BS Software Engineering</option>
                    <option value="BSIT">BS Information Technology</option>
                    <option value="BBA">BBA / Management Sciences</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-4 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
                {touched.degree && errors.degree && (
                  <p className="text-[11px] text-red-500 flex items-center gap-1 font-semibold"><AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.degree}</p>
                )}
              </div>

              {/* CGPA */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">CGPA *</label>
                <div className="relative">
                  <Award className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    name="cgpa" 
                    value={formData.cgpa} 
                    onChange={handleInputChange} 
                    onBlur={handleBlur}
                    placeholder="e.g. 3.67" 
                    className={getInputClasses('cgpa')}
                  />
                </div>
                {touched.cgpa && errors.cgpa && (
                  <p className="text-[11px] text-red-500 flex items-center gap-1 font-semibold"><AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.cgpa}</p>
                )}
              </div>

              {/* Semester */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Current Semester *</label>
                <div className="relative">
                  <Layers className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                  <select 
                    name="semester" 
                    value={formData.semester} 
                    onChange={handleInputChange} 
                    onBlur={handleBlur}
                    className={`w-full pl-11 pr-10 py-3.5 rounded-xl border outline-none transition text-sm bg-slate-50/50 font-medium text-slate-700 appearance-none ${touched.semester && errors.semester ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600'}`}
                  >
                    <option value="">Select current semester</option>
                    <option value="5">5th Semester</option>
                    <option value="6">6th Semester</option>
                    <option value="7">7th Semester</option>
                    <option value="8">8th Semester</option>
                    <option value="Graduated">Graduated / Alumnus</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-4 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
                {touched.semester && errors.semester && (
                  <p className="text-[11px] text-red-500 flex items-center gap-1 font-semibold"><AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.semester}</p>
                )}
              </div>

            </div>
          </section>

          {/* 4. Choose Your Internship Path (Blue Styled Accordion) */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">Choose Your Internship Path at SPS</h2>
                <p className="text-xs text-slate-400">At SPS, you have a choice of four different tracks based on tech-stacks, career goals, and experience.</p>
              </div>
            </div>

            <div className="space-y-4">
              
              {/* Project / Role Based */}
              <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${activePath === 'project' ? 'border-blue-600 shadow-md ring-4 ring-blue-500/5' : 'border-slate-200'}`}>
                <button type="button" onClick={() => setActivePath(activePath === 'project' ? null : 'project')} className="w-full flex items-center justify-between p-5 bg-white hover:bg-slate-50/50 transition text-left">
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg ${activePath === 'project' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                      <FolderGit2 className="w-4 h-4" />
                    </div>
                    <span className="font-extrabold text-sm text-slate-900">Project / Role-Based Internship (Electives)</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${activePath === 'project' ? 'rotate-180' : ''}`} />
                </button>
                {activePath === 'project' && (
                  <div className="p-6 border-t border-slate-100 bg-slate-50/20 space-y-6">
                    {/* Projects Domain */}
                    <div className="space-y-3">
                      <span className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                        <FileSpreadsheet className="w-4 h-4 text-blue-600" />
                        Projects
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl bg-white hover:border-blue-300 cursor-pointer transition">
                          <input type="radio" defaultChecked name="proj_opt" className="accent-blue-600 w-4 h-4" />
                          <span className="text-sm font-bold text-slate-800">Business</span>
                        </label>
                        <label className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl bg-white hover:border-blue-300 cursor-pointer transition">
                          <input type="radio" name="proj_opt" className="accent-blue-600 w-4 h-4" />
                          <span className="text-sm font-bold text-slate-800">Technical</span>
                        </label>
                      </div>
                    </div>

                    {/* Dynamic Tabs Inside Project Track */}
                    <div className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">
                      <div className="flex border-b border-slate-200 bg-slate-50/50">
                        <button type="button" onClick={() => setActiveSubTab('works')} className={`flex-1 py-3 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-center border-r border-slate-200 transition ${activeSubTab === 'works' ? 'bg-white text-blue-600 border-b-2 border-b-blue-600' : 'text-slate-500 hover:text-slate-900'}`}>How Project Track works</button>
                        <button type="button" onClick={() => setActiveSubTab('choose')} className={`flex-1 py-3 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-center border-r border-slate-200 transition ${activeSubTab === 'choose' ? 'bg-white text-blue-600 border-b-2 border-b-blue-600' : 'text-slate-500 hover:text-slate-900'}`}>Which track to choose?</button>
                        <button type="button" onClick={() => setActiveSubTab('takeaways')} className={`flex-1 py-3 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-center transition ${activeSubTab === 'takeaways' ? 'bg-white text-blue-600 border-b-2 border-b-blue-600' : 'text-slate-500 hover:text-slate-900'}`}>Key Takeaways</button>
                      </div>
                      <div className="p-4 text-xs leading-relaxed text-slate-600 bg-slate-50/10">
                        {activeSubTab === 'works' && <p>SPS guides current cohorts collaboratively. Hands-on roles prepare you to launch into commercial enterprise development instantly.</p>}
                        {activeSubTab === 'choose' && <p>Select based on your technical capabilities. Technical is great for software builders; Business is perfect for analysis, marketing and project managers.</p>}
                        {activeSubTab === 'takeaways' && <p>Get officially verified certifications, commercial grade stack experience, and immediate consideration for permanent contracts.</p>}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Competence-Based */}
              <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${activePath === 'competence' ? 'border-blue-600 shadow-md ring-4 ring-blue-500/5' : 'border-slate-200'}`}>
                <button type="button" onClick={() => setActivePath(activePath === 'competence' ? null : 'competence')} className="w-full flex items-center justify-between p-5 bg-white hover:bg-slate-50/50 transition text-left">
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg ${activePath === 'competence' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                      <Award className="w-4 h-4" />
                    </div>
                    <span className="font-extrabold text-sm text-slate-900">Competence-Based Internship (Choose Your Role)</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${activePath === 'competence' ? 'rotate-180' : ''}`} />
                </button>
                {activePath === 'competence' && (
                  <div className="p-6 border-t border-slate-100 bg-slate-50/20 space-y-4">
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wide block">Choose Competencies:</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <label className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl bg-white hover:border-blue-300 cursor-pointer transition">
                        <input type="radio" defaultChecked name="comp_opt" className="accent-blue-600 w-4 h-4" />
                        <span className="text-sm font-bold text-slate-800">Business</span>
                      </label>
                      <label className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl bg-white hover:border-blue-300 cursor-pointer transition">
                        <input type="radio" name="comp_opt" className="accent-blue-600 w-4 h-4" />
                        <span className="text-sm font-bold text-slate-800">Technical</span>
                      </label>
                    </div>
                  </div>
                )}
              </div>

              {/* Specialization-Based */}
              <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${activePath === 'specialization' ? 'border-blue-600 shadow-md ring-4 ring-blue-500/5' : 'border-slate-200'}`}>
                <button type="button" onClick={() => setActivePath(activePath === 'specialization' ? null : 'specialization')} className="w-full flex items-center justify-between p-5 bg-white hover:bg-slate-50/50 transition text-left">
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg ${activePath === 'specialization' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                      <Network className="w-4 h-4" />
                    </div>
                    <span className="font-extrabold text-sm text-slate-900">Specialization-Based Internship (Master a Technology)</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${activePath === 'specialization' ? 'rotate-180' : ''}`} />
                </button>
                {activePath === 'specialization' && (
                  <div className="p-6 border-t border-slate-100 bg-slate-50/20 space-y-4">
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wide block">Choose Specializations:</span>
                    <p className="text-xs text-slate-400">Select platforms you want to master to match corporate environments directly.</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {['Apple', 'AWS', 'Flutter Identity', 'Fortinet', 'IBM', 'Microsoft', 'TrendMicro'].map((partner) => (
                        <label key={partner} className="flex items-center gap-2 p-3 border border-slate-200 rounded-xl bg-white hover:border-blue-500 cursor-pointer transition text-xs font-semibold text-slate-700">
                          <input type="checkbox" className="accent-blue-600 w-4 h-4 rounded" />
                          <span>{partner}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Micro-Internships */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden opacity-75 bg-slate-50/50">
                <div className="flex items-center justify-between p-5">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-slate-200 text-slate-600">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <span className="font-extrabold text-sm text-slate-500">Micro-Internships</span>
                  </div>
                  <span className="bg-rose-50 text-rose-600 border border-rose-100 text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">Closed</span>
                </div>
                <div className="px-5 pb-5 pt-1 text-xs text-slate-400 border-t border-slate-100 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Leverage Open AI to Create Agentic Environments for SPS Roles (Applications closed)</span>
                </div>
              </div>

            </div>
          </section>

          {/* 5. Documents & Media Uploads */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                <Video className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">Documents & Media</h2>
                <p className="text-xs text-slate-400">Upload clean PDFs and media references.</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Video link */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">Video Interview Link</label>
                <div className="relative">
                  <Video className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                  <input 
                    type="url" 
                    name="videoLink" 
                    value={formData.videoLink} 
                    onChange={handleInputChange} 
                    onBlur={handleBlur}
                    placeholder="Paste your Video Link (YouTube, Google Drive, OneDrive)" 
                    className={getInputClasses('videoLink')}
                  />
                </div>
                {touched.videoLink && errors.videoLink && (
                  <p className="text-[11px] text-red-500 flex items-center gap-1 font-semibold"><AlertCircle className="w-3.5 h-3.5" /> {errors.videoLink}</p>
                )}
                <p className="text-[10px] text-blue-600 font-semibold hover:underline cursor-pointer">
                  ℹ️ Video Interview Submission Instructions
                </p>
              </div>

              {/* Upload Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                
                {/* Resume Upload */}
                <div className={`border-2 border-dashed rounded-2xl p-6 bg-slate-50/20 hover:bg-white transition-all flex flex-col justify-between items-center text-center h-56 ${errors.resume ? 'border-red-500 bg-red-50/5' : 'border-slate-200 hover:border-blue-500'}`}>
                  <div className="space-y-2">
                    <div className="mx-auto w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <UploadCloud className="w-5 h-5" />
                    </div>
                    <span className="block text-xs font-extrabold text-slate-800">Resume / CV *</span>
                    <span className="block text-[10px] text-slate-400">PDF, Max 5MB</span>
                    {resumeFile && <span className="block text-[11px] text-emerald-600 font-bold truncate max-w-37.5">✓ {resumeFile.name}</span>}
                  </div>
                  <div className="w-full">
                    <label className="w-full block bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded-xl cursor-pointer transition shadow-sm">
                      Choose File
                      <input 
                        type="file" 
                        accept=".pdf" 
                        className="hidden" 
                        onChange={(e) => handleFileChange(e, setResumeFile, 'resume', 5)} 
                      />
                    </label>
                    {errors.resume && <p className="text-[10px] text-red-500 font-semibold mt-1.5">{errors.resume}</p>}
                  </div>
                </div>

                {/* Degree Transcript Upload */}
                <div className={`border-2 border-dashed rounded-2xl p-6 bg-slate-50/20 hover:bg-white transition-all flex flex-col justify-between items-center text-center h-56 ${errors.transcript ? 'border-red-500 bg-red-50/5' : 'border-slate-200 hover:border-blue-500'}`}>
                  <div className="space-y-2">
                    <div className="mx-auto w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <UploadCloud className="w-5 h-5" />
                    </div>
                    <span className="block text-xs font-extrabold text-slate-800">Degree / Transcript *</span>
                    <span className="block text-[10px] text-slate-400">PDF, Max 5MB</span>
                    {transcriptFile && <span className="block text-[11px] text-emerald-600 font-bold truncate max-w-37.5">✓ {transcriptFile.name}</span>}
                  </div>
                  <div className="w-full">
                    <label className="w-full block bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded-xl cursor-pointer transition shadow-sm">
                      Choose File
                      <input 
                        type="file" 
                        accept=".pdf" 
                        className="hidden" 
                        onChange={(e) => handleFileChange(e, setTranscriptFile, 'transcript', 5)} 
                      />
                    </label>
                    {errors.transcript && <p className="text-[10px] text-red-500 font-semibold mt-1.5">{errors.transcript}</p>}
                  </div>
                </div>

                {/* Picture Upload */}
                <div className="border-2 border-dashed border-slate-200 hover:border-blue-500 rounded-2xl p-6 bg-slate-50/20 hover:bg-white transition-all flex flex-col justify-between items-center text-center h-56">
                  <div className="space-y-2">
                    <div className="mx-auto w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <UploadCloud className="w-5 h-5" />
                    </div>
                    <span className="block text-xs font-extrabold text-slate-800">Passport Photo</span>
                    <span className="block text-[10px] text-slate-400">JPG, PNG, Max 1MB</span>
                    {photoFile && <span className="block text-[11px] text-emerald-600 font-bold truncate max-w-37.5">✓ {photoFile.name}</span>}
                  </div>
                  <div className="w-full">
                    <label className="w-full block bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded-xl cursor-pointer transition shadow-sm">
                      Choose File
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => handleFileChange(e, setPhotoFile, 'photo', 1)} 
                      />
                    </label>
                    {errors.photo && <p className="text-[10px] text-red-500 font-semibold mt-1.5">{errors.photo}</p>}
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* 6. Consent Declarations & Action Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-100">
            {/* Declaration Checkbox Card */}
            <div className="w-full md:w-auto md:max-w-xl">
              <div className={`flex items-start gap-3 p-4 rounded-2xl border transition duration-200 ${errors.consent ? 'bg-red-50/40 border-red-200 text-red-900' : 'bg-slate-50 border-slate-200/60'}`}>
                <input 
                  type="checkbox" 
                  id="consent" 
                  checked={consentChecked}
                  onChange={(e) => {
                    setConsentChecked(e.target.checked);
                    if (errors.consent) setErrors(prev => ({ ...prev, consent: '' }));
                  }}
                  className="mt-1 w-5 h-5 rounded accent-blue-600 cursor-pointer shrink-0" 
                />
                <label htmlFor="consent" className="text-[11px] font-semibold text-slate-600 leading-normal select-none cursor-pointer">
                  I certify that all provided information is accurate with my best and consent to the use of personal data within the context of recruitment processing at SPS.
                </label>
              </div>
              {errors.consent && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-semibold"><AlertCircle className="w-3 h-3" /> {errors.consent}</p>
              )}
            </div>

            {/* Submit Action Button */}
            <button type="submit" className="group w-full md:w-56 bg-blue-600 hover:bg-blue-700 text-white text-sm font-extrabold py-4 px-6 rounded-2xl shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/35 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5">
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </form>

        {/* Trust Badge */}
        <div className="flex items-center justify-center gap-2 text-slate-400 text-xs mt-6">
          <ShieldCheck className="w-4 h-4 text-blue-500" />
          <span>Secured by SPS Application Gateways. Your data is encrypted.</span>
        </div>

      </div>
    </div>
  );
}