'use client';

import React, { useEffect, useRef } from 'react';
import {
  AcademicCapIcon,
  CpuChipIcon,
  GlobeAltIcon,
  CommandLineIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline';

const milestones = [
  {
    id: 'alx',
    phase: 'Professional Training',
    title: 'ALX Professional Foundations',
    description:
      'Completed intensive professional foundations training at ALX, focused on career readiness, effective communication, and structured problem-solving. Applied agile project workflows and collaboration practices directly to frontend development projects.',
    tags: ['ALX', 'Career Readiness', 'Agile Workflows', 'Communication', 'Problem-Solving'],
    icon: <BriefcaseIcon className="w-5 h-5" />,
  },
  {
    id: 'foundations',
    phase: 'Phase 01',
    title: 'HTML, CSS & JavaScript Foundations',
    description:
      'Mastered semantic HTML5 markup, modern CSS layout systems (Flexbox and Grid), and ES6+ JavaScript fundamentals through hands-on project execution rather than passive tutorials.',
    tags: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'ES6+'],
    icon: <AcademicCapIcon className="w-5 h-5" />,
  },
  {
    id: 'react-nextjs',
    phase: 'Phase 02',
    title: 'React & Next.js Ecosystem',
    description:
      'Built responsive, component-driven interfaces using React, Next.js (App Router), TypeScript, and Tailwind CSS. Learned to think in components, manage props and state, and structure real applications with clean component architecture.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Component Architecture'],
    icon: <CpuChipIcon className="w-5 h-5" />,
  },
  {
    id: 'apis-state',
    phase: 'Phase 03',
    title: 'APIs, State & Browser Capabilities',
    description:
      'Connected REST APIs (Open-Meteo), managed client-side state with Context API, and implemented native browser APIs including Geolocation for location detection and Web Speech API for voice search.',
    tags: ['REST APIs', 'Context API', 'Geolocation API', 'Web Speech API', 'Async/Await'],
    icon: <GlobeAltIcon className="w-5 h-5" />,
  },
  {
    id: 'workflow',
    phase: 'Phase 04',
    title: 'Developer Workflow & Shipping',
    description:
      'Established a professional development workflow: version control with Git/GitHub, translating Figma design specs into pixel-perfect responsive code, and deploying production applications on Vercel.',
    tags: ['Git', 'GitHub', 'Figma', 'Vercel', 'Design-to-Code'],
    icon: <CommandLineIcon className="w-5 h-5" />,
  },
];

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.timeline-item');
            items.forEach((item, i) => {
              setTimeout(() => {
                item.classList.add('animate-slide-up');
                item.classList.remove('opacity-0-init');
              }, i * 120);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="journey" ref={sectionRef} className="border-t theme-section" style={{ borderColor: 'var(--border)' }}>
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-10">
        <p className="section-number mb-4">04 // Learning Journey</p>
        <h2 className="font-sans font-black leading-none foreground-text"
          style={{ fontSize: 'clamp(2rem, 7vw, 5rem)' }}>
          HOW I GOT HERE.
        </h2>
        <p className="font-mono text-xs tracking-widest uppercase mt-3 max-w-xl muted-text">
          A self-directed path from zero to shipping real products — built through deliberate practice and project execution.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="flex flex-col gap-0 border" style={{ borderColor: 'var(--border)' }}>
          {milestones?.map((milestone, index) => (
            <div
              key={milestone?.id}
              className="timeline-item opacity-0-init grid grid-cols-1 md:grid-cols-[140px_1fr] lg:grid-cols-[200px_1fr] border-b last:border-b-0 transition-colors duration-200 timeline-row"
              style={{ borderColor: 'var(--border)', transitionDelay: `${index * 120}ms` }}
            >
              {/* Phase label column */}
              <div
                className="flex flex-row md:flex-col justify-between md:justify-start px-4 sm:px-6 py-4 md:py-6 border-b md:border-b-0 md:border-r gap-3 md:gap-0"
                style={{ borderColor: 'var(--border)' }}
              >
                <div>
                  <p className="font-mono text-xs font-bold tracking-widest uppercase mb-1 md:mb-2 primary-text">
                    {milestone?.phase}
                  </p>
                  <div className="muted-text">
                    {milestone?.icon}
                  </div>
                </div>
                <div className="hidden md:block w-px h-8 mt-4" style={{ backgroundColor: 'var(--border)' }} />
              </div>

              {/* Content column */}
              <div className="px-4 sm:px-6 py-5 md:py-6">
                <h3 className="font-sans font-bold text-base sm:text-lg leading-tight mb-3 foreground-text">
                  {milestone?.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 sm:mb-5 muted-text">
                  {milestone?.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {milestone?.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2.5 py-1 border tracking-wider uppercase transition-colors duration-200 muted-text timeline-tag"
                      style={{ borderColor: 'var(--border)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}