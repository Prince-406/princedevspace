import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';

const ProjectsSection = lazy(() => import('@/app/components/ProjectsSection'));
const SkillsSection = lazy(() => import('@/app/components/SkillsSection'));
const TimelineSection = lazy(() => import('@/app/components/TimelineSection'));
const ContactSection = lazy(() => import('@/app/components/ContactSection'));

function SectionFallback() {
  return <div className="min-h-[200px]" aria-hidden="true" />;
}

export default function HomePage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <Suspense fallback={<SectionFallback />}>
            <ProjectsSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <SkillsSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <TimelineSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <ContactSection />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}