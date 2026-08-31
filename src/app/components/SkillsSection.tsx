'use client';

import React, { useEffect, useRef } from 'react';
import { skillCategories } from '@/data/skills';

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

  const levelDot: Record<string, string> = {
    Advanced: 'bg-[#CBFF00]',
    Intermediate: 'bg-white',
    Learning: 'bg-[#888888]',
  };

  return (
    <section id="skills" ref={sectionRef} className="bg-[#0A0A0A] border-t border-[#2A2A2A]">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <p className="section-number mb-4">03 // Capabilities</p>
        <h2 className="font-sans font-black text-white leading-none"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
          SKILLS.
        </h2>
        <p className="font-mono text-xs tracking-widest uppercase text-[#888888] mt-3">
          The tools and technologies I use to build production-quality web applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#2A2A2A]">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.id}
              className={`skill-card opacity-0-init flex flex-col border-r border-[#2A2A2A] last:border-r-0 ${catIndex >= 2 ? 'border-t border-[#2A2A2A] sm:border-t-0 lg:border-t-0' : ''}`}
              style={{ transitionDelay: `${catIndex * 80}ms` }}
            >
              {/* Category header */}
              <div className="px-6 py-5 border-b border-[#2A2A2A]">
                <h3 className="font-mono text-xs font-bold tracking-widest uppercase text-[#CBFF00]">
                  {category.label}
                </h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-col divide-y divide-[#1A1A1A]">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between gap-2 px-6 py-4 hover:bg-[#111111] transition-colors duration-150">
                    <span className="text-sm text-white font-medium">{skill.name}</span>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className={`w-1.5 h-1.5 rounded-full ${levelDot[skill.level]}`} />
                      <span className="font-mono text-[10px] tracking-wider uppercase text-[#888888]">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 mt-6 pt-6 border-t border-[#2A2A2A]">
          <span className="font-mono text-[10px] tracking-widest uppercase text-[#888888]">Legend:</span>
          {[
            { label: 'Advanced', color: 'bg-[#CBFF00]' },
            { label: 'Intermediate', color: 'bg-white' },
            { label: 'Learning', color: 'bg-[#888888]' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
              <span className="font-mono text-[10px] tracking-wider uppercase text-[#888888]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}