'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import {
  ArrowDownTrayIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

const socialLinks = [
{
  label: 'GitHub',
  href: 'https://github.com/Prince-406',
  icon:
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
},
{
  label: 'LinkedIn',
  href: 'https://www.linkedin.com/in/prince-macauley-7630632a9',
  icon:
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
},
{
  label: 'Email',
  href: 'mailto:macauleyprince.dev@gmail.com',
  icon: <EnvelopeIcon className="w-4 h-4" />
}];


export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef?.current;
    if (!el) return;
    el?.classList?.add('animate-fade-in');
  }, []);

  return (
    <section
      id="about"
      ref={heroRef}
      className="relative min-h-screen bg-[#0A0A0A] opacity-100 overflow-hidden"
    >
      {/* Top ticker bar */}
      <div className="fixed top-16 left-0 right-0 z-40 border-b border-[#2A2A2A] bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-9">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#888888]">
            Frontend Developer — Available for Remote Work
          </span>
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="status-dot absolute inline-flex h-full w-full rounded-full bg-[#CBFF00] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#CBFF00]" />
            </span>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#CBFF00]">
              Open to Opportunities
            </span>
          </div>
        </div>
      </div>

      <div className="pt-[100px] min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Text content */}
        <div className="flex flex-col justify-between px-6 lg:px-12 py-12 lg:py-16 border-r border-[#2A2A2A]">
          {/* Section label */}
          <div>
            <p className="section-number mb-8">01 // Identity</p>

            {/* Big name headline */}
            <div className="mb-8">
              <h1 className="font-sans font-black leading-[0.9] tracking-tight text-white"
                style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)' }}>
                MACAULEY
              </h1>
              <h1 className="font-sans font-black leading-[0.9] tracking-tight text-outline"
                style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)' }}>
                PRINCE
              </h1>
              <h1 className="font-sans font-black leading-[0.9] tracking-tight text-white"
                style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)' }}>
                BUILDS.
              </h1>
            </div>

            {/* Tagline */}
            <div className="mb-8 max-w-md">
              <p className="text-white font-bold text-lg leading-tight mb-3">
                Crafting interfaces that feel inevitable — not designed.
              </p>
              <p className="text-[#888888] text-sm leading-relaxed">
                Frontend Developer specializing in React, Next.js, TypeScript, and Tailwind CSS.
                I focus on responsive design, clean component architecture, REST API integration,
                and translating Figma designs into pixel-perfect, production-ready web applications.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 text-xs font-mono font-bold tracking-widest uppercase bg-white text-[#0A0A0A] hover:bg-[#CBFF00] transition-colors duration-200"
              >
                View Projects
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 text-xs font-mono font-bold tracking-widest uppercase border border-[#2A2A2A] text-white hover:border-[#CBFF00] hover:text-[#CBFF00] transition-colors duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Bottom: social + resume */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#2A2A2A]">
            <div className="flex items-center gap-4">
              {socialLinks?.map((social) =>
                <a
                  key={social?.label}
                  href={social?.href}
                  target={social?.href?.startsWith('http') ? '_blank' : undefined}
                  rel={social?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social?.label}
                  className="p-2 text-[#888888] hover:text-[#CBFF00] transition-colors duration-200"
                >
                  {social?.icon}
                </a>
              )}
            </div>
            <a
              href="/Professional_cv-1788217879487.pdf"
              download="Macauley_Prince_CV.pdf"
              className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#888888] hover:text-[#CBFF00] transition-colors duration-200"
            >
              <ArrowDownTrayIcon className="w-3.5 h-3.5" />
              Download CV
            </a>
          </div>
        </div>

        {/* Right: Profile image — full bleed */}
        <div className="relative hidden lg:block min-h-[600px]">
          <AppImage
            src="/assets/images/image_18b22e75-1788093940243.png"
            alt="Macauley Prince, Frontend Developer, professional headshot in clean setting with neutral background"
            fill
            className="object-cover object-top grayscale brightness-75 hover:grayscale-0 hover:brightness-90 transition-all duration-700"
            priority
            sizes="50vw"
          />
          {/* Bottom overlay with stack tags */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent">
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Next.js']?.map((t) => (
                <span key={t} className="lime-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile profile image */}
        <div className="lg:hidden relative h-72 mx-6 mb-8 overflow-hidden">
          <AppImage
            src="/assets/images/image_18b22e75-1788093940243.png"
            alt="Macauley Prince, Frontend Developer, professional headshot"
            fill
            className="object-cover object-top grayscale brightness-75"
            priority
            sizes="100vw"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0A0A0A] to-transparent">
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Next.js']?.map((t) => (
                <span key={t} className="lime-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-t border-[#2A2A2A] grid grid-cols-3 divide-x divide-[#2A2A2A]">
        {[
          { value: '3', label: 'Projects Shipped' },
          { value: '100%', label: 'Vercel Deployed' },
          { value: 'Remote', label: 'Work Ready' },
        ]?.map((stat) => (
          <div key={stat?.label} className="px-6 py-6 text-center">
            <p className="font-sans font-black text-3xl text-[#CBFF00] leading-none mb-1">{stat?.value}</p>
            <p className="font-mono text-[10px] tracking-widest uppercase text-[#888888]">{stat?.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
