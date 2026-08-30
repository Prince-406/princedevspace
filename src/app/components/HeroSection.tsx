'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import {
  ArrowDownTrayIcon,
  EnvelopeIcon,
  ArrowUpRightIcon } from
'@heroicons/react/24/outline';

const socialLinks = [
{
  label: 'GitHub',
  href: 'https://github.com/Prince-406',
  icon:
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>

},
{
  label: 'LinkedIn',
  href: 'https://www.linkedin.com/in/prince-macauley-7630632a9',
  icon:
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>

},
{
  label: 'Email',
  href: 'mailto:macauleyprince.dev@gmail.com',
  icon: <EnvelopeIcon className="w-5 h-5" />
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
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden opacity-100">
      
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 blob-primary animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 blob-accent animate-float-delayed pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Bio & CTA */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 self-start glass-card px-4 py-2 rounded-full border border-border">
              <span className="relative flex h-2 w-2">
                <span className="status-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="font-mono text-xs font-medium text-emerald-400 tracking-wide">
                Available for remote work
              </span>
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-2">
              <p className="font-mono text-sm text-muted-foreground tracking-widest uppercase">
                Hi, I&apos;m
              </p>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight text-foreground">
                Macauley{' '}
                <span className="text-gradient-primary">Prince</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-muted-foreground mt-1">
                Frontend Developer
              </p>
            </div>

            {/* Bio */}
            <p className="text-base leading-relaxed text-muted-foreground max-w-lg">
              I build fast, accessible, and visually polished web applications
              using React and Next.js. Focused on shipping real products that
              demonstrate clean architecture and strong UI fundamentals.
            </p>

            {/* Code snippet accent */}
            <div className="glass-card rounded-xl px-4 py-3 border border-border self-start">
              <p className="font-mono text-sm">
                <span className="text-accent">const</span>{' '}
                <span className="text-primary">stack</span>{' '}
                <span className="text-muted-foreground">=</span>{' '}
                <span className="text-foreground">
                  [<span className="text-emerald-400">&apos;React&apos;</span>,{' '}
                  <span className="text-emerald-400">&apos;Next.js&apos;</span>,{' '}
                  <span className="text-emerald-400">&apos;TypeScript&apos;</span>]
                </span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-200 shadow-lg glow-primary">
                
                View Projects
                <ArrowUpRightIcon className="w-4 h-4" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-semibold text-sm hover:bg-muted/50 transition-all duration-200 glass-card">
                
                <ArrowDownTrayIcon className="w-4 h-4" />
                Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-1">
              {socialLinks?.map((social) =>
              <a
                key={social?.label}
                href={social?.href}
                target={social?.href?.startsWith('http') ? '_blank' : undefined}
                rel={social?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={social?.label}
                className="p-3 rounded-xl glass-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200 card-hover">
                
                  {social?.icon}
                </a>
              )}
            </div>
          </div>

          {/* Right: Bento Grid Visual */}
          <div className="lg:col-span-7 hidden lg:grid grid-cols-12 grid-rows-6 gap-4 h-[580px] relative">

            {/* Main profile image — col 1-7, row 1-6 */}
            <div className="col-span-7 row-span-6 rounded-3xl overflow-hidden relative group shadow-2xl">
              <AppImage
                src="/assets/images/image_18b22e75-1788093940243.png"
                alt="Macauley Prince, Frontend Developer, professional headshot in clean setting with neutral background"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-mono text-xs text-accent tracking-widest uppercase mb-1">
                  Frontend Dev
                </p>
                <p className="text-white text-lg font-semibold">Macauley Prince</p>
              </div>
            </div>

            {/* Top right — col 8-12, row 1-3 */}
            <div className="col-span-5 row-span-3 rounded-3xl overflow-hidden relative group shadow-xl glass-card border border-border flex flex-col justify-between p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-mono text-xs text-emerald-400">open to work</span>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">3</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Production projects shipped on Vercel
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {['React', 'Next.js', 'TS']?.map((t) =>
                <span
                  key={t}
                  className="font-mono text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                  
                    {t}
                  </span>
                )}
              </div>
            </div>

            {/* Bottom right — col 8-12, row 4-6 */}
            <div className="col-span-5 row-span-3 rounded-3xl overflow-hidden relative shadow-xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_178ed799d-1785088751486.png"
                alt="Code editor on screen in dark environment, clean code visible on monitor, professional developer workspace"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 25vw" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-mono text-xs text-accent tracking-wider uppercase mb-1">Stack</p>
                <p className="text-white text-sm font-medium">React · Next.js · Tailwind</p>
              </div>
            </div>

            {/* Floating status card */}
            <div className="absolute top-1/3 right-[-24px] glass-card p-4 rounded-2xl w-52 shadow-2xl border border-border z-20 animate-float">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wide">
                  Latest Build
                </span>
              </div>
              <p className="text-sm font-semibold text-foreground mb-1">SkyPulse Weather</p>
              <p className="text-xs text-muted-foreground mb-3">Deployed on Vercel</p>
              <div className="flex items-center gap-2 text-xs font-medium px-2 py-1 rounded-md bg-emerald-400/10 text-emerald-400 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Live
              </div>
            </div>
          </div>

          {/* Mobile profile image */}
          <div className="lg:hidden relative w-48 h-48 mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/30">
            <AppImage
              src="/assets/images/image_18b22e75-1788093940243.png"
              alt="Macauley Prince, Frontend Developer, professional headshot"
              fill
              className="object-cover object-top"
              priority
              sizes="192px" />
            
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <a
            href="#projects"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 animate-float">
            
            <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>);

}