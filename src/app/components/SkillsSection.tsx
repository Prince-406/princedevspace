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
    Advanced: 'var(--primary)',
    Intermediate: 'var(--foreground)',
    Learning: 'var(--muted-foreground)',
  };

  return (
    <section id="skills" ref={sectionRef} className="border-t" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-10">
        <p className="section-number mb-4">03 // Capabilities</p>
        <h2 className="font-sans font-black leading-none"
          style={{ fontSize: 'clamp(2.2rem, 7vw, 5rem)', color: 'var(--foreground)' }}>
          SKILLS.
        </h2>
        <p className="font-mono text-xs tracking-widest uppercase mt-3" style={{ color: 'var(--muted-foreground)' }}>
          The tools and technologies I use to build production-quality web applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border" style={{ borderColor: 'var(--border)' }}>
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.id}
              className={`skill-card opacity-0-init flex flex-col
                ${catIndex % 2 === 0 ? 'sm:border-r' : ''}
                lg:border-r lg:last:border-r-0
                ${catIndex >= 1 ? 'border-t sm:border-t-0' : ''}
                ${catIndex >= 2 ? 'sm:border-t' : ''}
                ${catIndex >= 2 && catIndex % 2 === 0 ? 'sm:border-r' : ''}
              `}
              style={{ borderColor: 'var(--border)', transitionDelay: `${catIndex * 80}ms` }}
            >
              {/* Category header */}
              <div className="px-5 sm:px-6 py-4 sm:py-5 border-b" style={{ borderColor: 'var(--border)' }}>
                <h3 className="font-mono text-xs font-bold tracking-widest uppercase" style={{ color: 'var(--primary)' }}>
                  {category.label}
                </h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-col divide-y" style={{ borderColor: 'var(--border)' }}>
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between gap-2 px-5 sm:px-6 py-3 sm:py-4 transition-colors duration-150"
                    style={{ borderColor: 'var(--muted)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--muted)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <span className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>{skill.name}</span>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: levelDot[skill.level] }} />
                      <span className="font-mono text-[10px] tracking-wider uppercase" style={{ color: 'var(--muted-foreground)' }}>
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
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
          <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'var(--muted-foreground)' }}>Legend:</span>
          {[
            { label: 'Advanced', colorKey: 'var(--primary)' },
            { label: 'Intermediate', colorKey: 'var(--foreground)' },
            { label: 'Learning', colorKey: 'var(--muted-foreground)' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.colorKey }} />
              <span className="font-mono text-[10px] tracking-wider uppercase" style={{ color: 'var(--muted-foreground)' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}