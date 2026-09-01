'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import { projects } from '@/data/projects';
import { Project } from '@/types/portfolio';
import { ArrowUpRightIcon, CodeBracketIcon, XMarkIcon } from '@heroicons/react/24/outline';

type FilterTab = 'All' | 'Full Web Apps' | 'E-commerce / UI';
const TABS: FilterTab[] = ['All', 'Full Web Apps', 'E-commerce / UI'];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<FilterTab>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeTab === 'All' ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="bg-[#0A0A0A] border-t border-[#2A2A2A]">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="section-number mb-4">02 // Selected Work</p>
            <h2 className="font-sans font-black text-white leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
              PROJECTS.
            </h2>
            <p className="font-mono text-xs tracking-widest uppercase text-[#888888] mt-3">
              Production applications shipped for real users.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-0 border border-[#2A2A2A] self-start">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 sm:px-4 py-2 font-mono text-[10px] sm:text-xs tracking-wider uppercase transition-all duration-200 border-r border-[#2A2A2A] last:border-r-0 ${
                  activeTab === tab
                    ? 'bg-[#CBFF00] text-[#0A0A0A] font-bold'
                    : 'text-[#888888] hover:text-white hover:bg-[#1A1A1A]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project cards — stacked editorial layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 flex flex-col gap-0">
        {filtered.map((project, index) => (
          <div
            key={project.id}
            className="group relative border border-[#2A2A2A] border-b-0 last:border-b overflow-hidden cursor-pointer"
            onClick={() => setSelectedProject(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
            aria-label={`View details for ${project.title}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[280px] md:min-h-[320px]">
              {/* Image side */}
              <div className={`relative overflow-hidden min-h-[200px] sm:min-h-[240px] md:min-h-[320px] ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <AppImage
                  src={project.image}
                  alt={`${project.title} screenshot — ${project.tagline}`}
                  fill
                  className="object-cover grayscale brightness-60 group-hover:grayscale-0 group-hover:brightness-80 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Featured badge */}
                {index === 0 && (
                  <div className="absolute top-4 left-4 lime-tag">Featured</div>
                )}
                <div className="absolute top-4 right-4 font-mono text-xs text-white/50">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Content side */}
              <div className={`flex flex-col justify-between p-5 sm:p-8 border-t border-[#2A2A2A] md:border-t-0 md:border-l border-[#2A2A2A] ${index % 2 === 1 ? 'md:order-1 md:border-l-0 md:border-r border-[#2A2A2A]' : ''}`}>
                <div>
                  <p className="font-mono text-xs tracking-widest uppercase text-[#888888] mb-3">
                    {project.category}
                  </p>
                  <h3 className="font-sans font-black text-white text-xl sm:text-2xl leading-tight mb-3 group-hover:text-[#CBFF00] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#888888] text-sm leading-relaxed mb-5 sm:mb-6">
                    {project.tagline}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="lime-tag"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="font-mono text-xs px-2 py-1 border border-[#2A2A2A] text-[#888888]">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                    className="flex items-center gap-2 px-4 sm:px-5 py-2.5 font-mono text-xs font-bold tracking-widest uppercase bg-white text-[#0A0A0A] hover:bg-[#CBFF00] transition-colors duration-200"
                  >
                    View Project
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-mono text-xs tracking-widest uppercase text-[#888888] hover:text-[#CBFF00] transition-colors duration-200"
                  >
                    Live →
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="flex items-center justify-center h-64 text-[#888888] font-mono text-sm">
            No projects in this category yet.
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Project details for ${project.title}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0F0F0F] border border-[#2A2A2A] animate-scale-in">
        {/* Hero image */}
        <div className="relative h-56 overflow-hidden">
          <AppImage
            src={project.image}
            alt={`${project.title} detailed view — ${project.tagline}`}
            fill
            className="object-cover grayscale brightness-60"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-black/40 to-transparent" />
          <div className="absolute bottom-5 left-6">
            <p className="font-mono text-xs text-[#888888] uppercase tracking-widest mb-1">
              {project.category}
            </p>
            <h2 className="font-sans font-black text-white text-2xl">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 border border-[#2A2A2A] bg-[#0F0F0F] text-white hover:bg-[#CBFF00] hover:text-[#0A0A0A] transition-colors"
            aria-label="Close modal"
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
          <p className="text-sm leading-relaxed text-[#888888]">
            {project.description}
          </p>

          {/* Features */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#888888] mb-4 border-b border-[#2A2A2A] pb-2">
              Key Features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="text-[#CBFF00] mt-0.5 flex-shrink-0 font-mono text-xs">→</span>
                  <span className="text-sm text-[#888888]">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#888888] mb-4 border-b border-[#2A2A2A] pb-2">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="lime-tag">{t}</span>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 pt-2 border-t border-[#2A2A2A]">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 text-xs font-mono font-bold tracking-widest uppercase bg-[#CBFF00] text-[#0A0A0A] hover:bg-white transition-colors duration-200"
            >
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
              Live Demo
            </a>
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 text-xs font-mono font-bold tracking-widest uppercase border border-[#2A2A2A] text-white hover:border-[#CBFF00] hover:text-[#CBFF00] transition-colors duration-200"
            >
              <CodeBracketIcon className="w-3.5 h-3.5" />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}