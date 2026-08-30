'use client';

import React, { useState } from 'react';
import {
  EnvelopeIcon,
  ClipboardDocumentIcon,
  CheckIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline';

const EMAIL = 'macauleyprince.dev@gmail.com';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
      const el = document.createElement('textarea');
      el.value = EMAIL;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="section-padding px-6 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 blob-primary opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 w-64 h-64 blob-accent opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-mono text-sm text-primary tracking-widest uppercase mb-2">
            // get in touch
          </p>
          <h2 className="text-4xl font-bold text-foreground tracking-tight">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            I&apos;m actively looking for remote frontend engineering roles. If you have a position or project that fits, I&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Email card — spans 2 cols */}
          <div className="md:col-span-2 glass-card rounded-2xl border border-border p-7 flex flex-col gap-5 card-hover">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <EnvelopeIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-0.5">
                  Preferred Contact
                </p>
                <p className="text-sm font-semibold text-foreground">Email</p>
              </div>
            </div>

            <div className="glass-card rounded-xl border border-border px-4 py-3 flex items-center justify-between gap-3">
              <span className="font-mono text-sm text-foreground truncate">
                {EMAIL}
              </span>
              <button
                onClick={handleCopy}
                aria-label="Copy email address"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 flex-shrink-0 border"
                style={
                  copied
                    ? { background: 'rgba(52,211,153,0.1)', color: '#34D399', borderColor: 'rgba(52,211,153,0.3)' }
                    : { background: 'rgba(99,102,241,0.1)', color: 'var(--primary)', borderColor: 'rgba(99,102,241,0.3)' }
                }
              >
                {copied ? (
                  <>
                    <CheckIcon className="w-3.5 h-3.5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <ClipboardDocumentIcon className="w-3.5 h-3.5" />
                    Copy
                  </>
                )}
              </button>
            </div>

            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all duration-200 shadow-lg w-full"
            >
              <EnvelopeIcon className="w-4 h-4" />
              Send Email
            </a>
          </div>

          {/* Social cards — 1 col stacked */}
          <div className="flex flex-col gap-4">
            <a
              href="https://github.com/macauleyprince"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl border border-border p-5 flex items-center gap-4 card-hover group transition-all duration-200 hover:border-primary/40"
            >
              <div className="w-10 h-10 rounded-xl bg-foreground/10 border border-border flex items-center justify-center text-foreground group-hover:text-primary group-hover:border-primary/30 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground">GitHub</p>
                <p className="font-mono text-xs text-muted-foreground truncate">
                  @macauleyprince
                </p>
              </div>
              <ArrowUpRightIcon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </a>

            <a
              href="https://linkedin.com/in/macauleyprince"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl border border-border p-5 flex items-center gap-4 card-hover group transition-all duration-200 hover:border-accent/40"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:border-blue-400/40 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground">LinkedIn</p>
                <p className="font-mono text-xs text-muted-foreground truncate">
                  Macauley Prince
                </p>
              </div>
              <ArrowUpRightIcon className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
            </a>
          </div>
        </div>

        {/* Availability note */}
        <div className="glass-card rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5 flex items-center gap-4">
          <span className="relative flex h-3 w-3 flex-shrink-0">
            <span className="status-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
          </span>
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Currently available</span> — open to full-time remote frontend engineering roles and freelance projects starting immediately.
          </p>
        </div>
      </div>
    </section>
  );
}