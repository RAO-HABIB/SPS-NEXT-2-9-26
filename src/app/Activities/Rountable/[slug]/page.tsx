import React from 'react';
import { notFound } from 'next/navigation';
import { getRoundtableBySlug, getAllRoundtableSlugs } from '@/data/activities-data';
import Navbar from '@/components/layout/Navbar/navbar';
import RountableHero from '@/features/activities/rountables/RoundtableHero';
import RountableContent from '@/features/activities/rountables/RoundtableContent';
import Footer from '@/components/layout/Footer/footer';


interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllRoundtableSlugs();
}

export default async function RoundtableDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const roundtable = getRoundtableBySlug(slug);

  if (!roundtable) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fafbfe] font-sans antialiased text-slate-800">
        {/* 1. Dynamic Hero Section with Countdown */}
        <RountableHero roundtable={roundtable} />

        {/* 2. Main content area with layout split & registration form */}
        <RountableContent roundtable={roundtable} />
      </main>
      <Footer />
    </>
  );
}