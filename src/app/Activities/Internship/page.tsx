
import Footer from '@/components/layout/Footer/footer';
import Navbar from '@/components/layout/Navbar/navbar';
import ApplicationProcess from '@/features/activities/intership/ApplicationProcess';
import AreasOfInternship from '@/features/activities/intership/AreaofSpeciality';
import Eligibility from '@/features/activities/intership/Eligibility';
import FAQ from '@/features/activities/intership/FAQ';
import Hero from '@/features/activities/intership/HeroSection';
import Overview from '@/features/activities/intership/Overview';
import ProgressivePhases from '@/features/activities/intership/ProgramPhases';
import SubNavigation from '@/features/activities/intership/SubNavigation';
import Universities from '@/features/activities/intership/Universities';
import WhatYouWillDo from '@/features/activities/intership/WhatWillYouDo';
import WhySps from '@/features/activities/intership/WhyChooseUs';
import React from 'react';

export default function InternshipPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Aapka custom Navbar */}
      <Navbar />
      <Hero />
      <SubNavigation />
      <Overview />
      <ProgressivePhases />
      <AreasOfInternship />
      <WhySps />
      <Universities />
      <WhatYouWillDo />
      <Eligibility />
      <ApplicationProcess />
      <FAQ />
      <Footer />
    </div>
  );
}