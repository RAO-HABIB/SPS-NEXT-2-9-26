
import Footer from '@/components/layout/Footer/footer';
import Navbar from '@/components/layout/Navbar/navbar';
import InternshipForm from '@/features/activities/intership/InternshipForm';
import React from 'react';


export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar />
      <main className="grow">
        <InternshipForm />
      </main>
      <Footer />
    </div>
  );
}