'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import { projects } from '@/data/projects';
import { Project } from '@/types/portfolio';
import { ArrowUpRightIcon, CodeBracketIcon, XMarkIcon, CheckIcon } from '@heroicons/react/24/outline';

type FilterTab = 'All' | 'Full Web Apps' | 'E-commerce / UI';
const TABS: FilterTab[] = ['All', 'Full Web Apps', 'E-commerce / UI'];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<FilterTab>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeTab === 'All' ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="section-padding px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 blob-primary opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-mono text-sm text-primary tracking-widest uppercase mb-2">
              // featured work
            </p>
            <h2 className="text-4xl font-bold text-foreground tracking-tight">
              Projects I&apos;ve Built
            </h2>
          </div>
          {/* Filter tabs */}
          <div className="flex items-center gap-2 glass-card p-1 rounded-xl border border-border self-start">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* BENTO GRID AUDIT:
            Cards: [SkyPulse, DineLuxury, Sneakers] — 3 cards total
            Row 1: [col-1-2: SkyPulse cs-2] [col-3: DineLuxury cs-1]
            Row 2: [col-1-3: Sneakers cs-3]
            Placed 3/3 cards ✓
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[380px]">
          {filtered.map((project, index) => {
            const isWide = index === 0 && activeTab === 'All';
            return (
              <div
                key={project.id}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-xl card-hover border border-border ${
                  isWide ? 'md:col-span-2' : 'md:col-span-1'
                } ${filtered.length === 1 ? 'md:col-span-3' : ''}`}
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
                aria-label={`View details for ${project.title}`}
              >
                <AppImage
                  src={project.image}
                  alt={`${project.title} screenshot — ${project.tagline}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Color accent top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: `linear-gradient(90deg, ${project.color}, ${project.accentColor})` }}
                />

                {/* Category badge */}
                <div className="absolute top-5 left-5">
                  <span className="font-mono text-xs px-3 py-1 rounded-full glass-card border border-white/20 text-white/90">
                    {project.category}
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute top-5 right-5 w-10 h-10 rounded-xl glass-card border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRightIcon className="w-4 h-4 text-white" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/70 mb-4 line-clamp-2">
                    {project.tagline}
                  </p>
                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2 py-1 rounded-md"
                        style={{ background: `${project.color}20`, color: project.color, border: `1px solid ${project.color}40` }}
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="font-mono text-xs px-2 py-1 rounded-md bg-white/10 text-white/60">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="flex items-center justify-center h-64 text-muted-foreground">
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
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-border shadow-2xl animate-scale-in">
        {/* Hero image */}
        <div className="relative h-64 overflow-hidden rounded-t-3xl">
          <AppImage
            src={project.image}
            alt={`${project.title} detailed view — ${project.tagline}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: `linear-gradient(90deg, ${project.color}, ${project.accentColor})` }}
          />
          <div className="absolute bottom-6 left-6">
            <p className="font-mono text-xs text-white/60 uppercase tracking-widest mb-1">
              {project.category}
            </p>
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl glass-card border border-white/20 text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
          <p className="text-base leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {/* Features */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest font-mono mb-4">
              Key Features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckIcon className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: project.color }} />
                  <span className="text-sm text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest font-mono mb-4">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-3 py-1.5 rounded-lg border"
                  style={{ background: `${project.color}15`, color: project.color, borderColor: `${project.color}30` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90 shadow-lg"
              style={{ background: `linear-gradient(135deg, ${project.color}, ${project.accentColor})` }}
            >
              <ArrowUpRightIcon className="w-4 h-4" />
              Live Demo
            </a>
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-border text-foreground hover:bg-muted/50 transition-all duration-200 glass-card"
            >
              <CodeBracketIcon className="w-4 h-4" />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}