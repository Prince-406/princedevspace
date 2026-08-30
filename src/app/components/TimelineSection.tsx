'use client';

import React, { useEffect, useRef } from 'react';
import {
  AcademicCapIcon,
  CpuChipIcon,
  GlobeAltIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';

const milestones = [
  {
    id: 'foundations',
    phase: 'Phase 01',
    title: 'HTML, CSS & JavaScript Foundations',
    description:
      'Mastered semantic HTML5 markup, modern CSS layout systems (Flexbox and Grid), and ES6+ JavaScript fundamentals through hands-on project execution rather than passive tutorials.',
    tags: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'ES6+'],
    icon: <AcademicCapIcon className="w-5 h-5" />,
    color: '#06B6D4',
  },
  {
    id: 'react-nextjs',
    phase: 'Phase 02',
    title: 'React & Next.js Ecosystem',
    description:
      'Built responsive, component-driven interfaces using React, Next.js (App Router), TypeScript, and Tailwind CSS. Learned to think in components, manage props and state, and structure real applications.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'App Router'],
    icon: <CpuChipIcon className="w-5 h-5" />,
    color: '#6366F1',
  },
  {
    id: 'apis-state',
    phase: 'Phase 03',
    title: 'APIs, State & Browser Capabilities',
    description:
      'Connected REST APIs (Open-Meteo), managed client-side state with Context API, and implemented native browser APIs including Geolocation for location detection and Web Speech API for voice search.',
    tags: ['REST APIs', 'Context API', 'Geolocation API', 'Web Speech API', 'Async/Await'],
    icon: <GlobeAltIcon className="w-5 h-5" />,
    color: '#10B981',
  },
  {
    id: 'workflow',
    phase: 'Phase 04',
    title: 'Developer Workflow & Shipping',
    description:
      'Established a professional development workflow: version control with Git/GitHub, translating Figma design specs into pixel-perfect responsive code, and deploying production applications on Vercel.',
    tags: ['Git', 'GitHub', 'Figma', 'Vercel', 'Design-to-Code'],
    icon: <CommandLineIcon className="w-5 h-5" />,
    color: '#F59E0B',
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
    <section id="journey" ref={sectionRef} className="section-padding px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blob-primary opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-mono text-sm text-primary tracking-widest uppercase mb-2">
            // learning journey
          </p>
          <h2 className="text-4xl font-bold text-foreground tracking-tight">
            How I Got Here
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            A self-directed path from zero to shipping real products — built through deliberate practice and project execution.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent hidden md:block" />

          <div className="flex flex-col gap-8">
            {milestones?.map((milestone, index) => (
              <div
                key={milestone?.id}
                className="timeline-item opacity-0-init flex gap-6 group"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Icon node */}
                <div className="flex-shrink-0 relative hidden md:flex">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${milestone?.color}20, ${milestone?.color}10)`,
                      border: `1px solid ${milestone?.color}40`,
                      color: milestone?.color,
                    }}
                  >
                    {milestone?.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 glass-card rounded-2xl border border-border p-6 card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <p
                        className="font-mono text-xs font-semibold tracking-widest uppercase mb-1"
                        style={{ color: milestone?.color }}
                      >
                        {milestone?.phase}
                      </p>
                      <h3 className="text-lg font-bold text-foreground">
                        {milestone?.title}
                      </h3>
                    </div>
                    {/* Mobile icon */}
                    <div
                      className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${milestone?.color}15`,
                        border: `1px solid ${milestone?.color}30`,
                        color: milestone?.color,
                      }}
                    >
                      {milestone?.icon}
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                    {milestone?.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {milestone?.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2.5 py-1 rounded-lg border"
                        style={{
                          background: `${milestone?.color}10`,
                          color: milestone?.color,
                          borderColor: `${milestone?.color}25`,
                        }}
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
      </div>
    </section>
  );
}