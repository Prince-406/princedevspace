import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import SkillsSection from '@/app/components/SkillsSection';
import TimelineSection from '@/app/components/TimelineSection';
import ContactSection from '@/app/components/ContactSection';

export default function HomePage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <TimelineSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}