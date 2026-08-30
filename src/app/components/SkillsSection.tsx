'use client';

import React, { useEffect, useRef } from 'react';
import { skillCategories } from '@/data/skills';
import {
  CodeBracketIcon,
  PaintBrushIcon,
  GlobeAltIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const iconMap: Record<string, React.ReactNode> = {
  CodeBracketIcon: <CodeBracketIcon className="w-5 h-5" />,
  PaintBrushIcon: <PaintBrushIcon className="w-5 h-5" />,
  GlobeAltIcon: <GlobeAltIcon className="w-5 h-5" />,
  WrenchScrewdriverIcon: <WrenchScrewdriverIcon className="w-5 h-5" />,
};

const levelColors: Record<string, string> = {
  Advanced: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
  Intermediate: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
  Learning: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
};

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.skill-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add('animate-slide-up');
                card.classList.remove('opacity-0-init');
              }, i * 80);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 blob-accent opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-mono text-sm text-primary tracking-widest uppercase mb-2">
            // technical skills
          </p>
          <h2 className="text-4xl font-bold text-foreground tracking-tight">
            Tech Stack & Capabilities
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            The tools and technologies I use to build production-quality web applications.
          </p>
        </div>

        {/* Skills Grid — 4 equal categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.id}
              className="skill-card opacity-0-init glass-card rounded-2xl border border-border p-6 flex flex-col gap-5 card-hover"
              style={{ transitionDelay: `${catIndex * 80}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${category.color}15`, color: category.color, border: `1px solid ${category.color}30` }}
                >
                  {iconMap[category.iconName]}
                </div>
                <h3 className="text-sm font-semibold text-foreground leading-tight">
                  {category.label}
                </h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-col gap-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between gap-2">
                    <span className="text-sm text-foreground font-medium">{skill.name}</span>
                    <span
                      className={`font-mono text-xs px-2 py-0.5 rounded-md border flex-shrink-0 ${levelColors[skill.level]}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-accent">// </span>
            Always learning — currently exploring Framer Motion and tRPC
          </p>
        </div>
      </div>
    </section>
  );
}