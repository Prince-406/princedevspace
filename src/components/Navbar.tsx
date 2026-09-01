'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import {
  Bars3Icon,
  XMarkIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0A0A0A] border-b border-[#2A2A2A]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group flex-shrink-0">
          {/* X mark logo */}
          <div className="w-7 h-7 relative flex items-center justify-center">
            <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
              <line x1="4" y1="4" x2="24" y2="24" stroke="#CBFF00" strokeWidth="2.5" strokeLinecap="square"/>
              <line x1="24" y1="4" x2="4" y2="24" stroke="#CBFF00" strokeWidth="2.5" strokeLinecap="square"/>
            </svg>
          </div>
          <span className="font-mono text-sm font-semibold text-white tracking-tight hidden sm:block">
            prince<span className="text-[#CBFF00]">.dev</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks?.map((link) => (
            <a
              key={link?.label}
              href={link?.href}
              className="font-mono text-xs tracking-widest uppercase text-[#888888] hover:text-white transition-colors duration-200"
            >
              {link?.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="font-mono text-xs text-[#888888] hover:text-[#CBFF00] transition-colors duration-200 hidden sm:block"
          >
            {theme === 'dark' ? '[ LIGHT ]' : '[ DARK ]'}
          </button>

          <a
            href="/Professional_cv.pdf"
            download
            className="hidden sm:flex items-center gap-2 px-3 lg:px-4 py-2 text-xs font-mono font-bold tracking-widest uppercase bg-[#CBFF00] text-[#0A0A0A] hover:bg-white transition-colors duration-200"
          >
            <ArrowDownTrayIcon className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Resume</span>
            <span className="lg:hidden">CV</span>
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[#888888] hover:text-white transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {menuOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 sm:px-6 pb-6 pt-4 flex flex-col gap-1 border-t border-[#2A2A2A] bg-[#0A0A0A]">
          {navLinks?.map((link) => (
            <a
              key={link?.label}
              href={link?.href}
              onClick={handleNavClick}
              className="px-0 py-3 font-mono text-xs tracking-widest uppercase text-[#888888] hover:text-white border-b border-[#1A1A1A] transition-colors duration-200"
            >
              {link?.label}
            </a>
          ))}
          {/* Theme toggle in mobile menu */}
          <button
            onClick={() => { toggleTheme(); handleNavClick(); }}
            className="py-3 font-mono text-xs tracking-widest uppercase text-[#888888] hover:text-[#CBFF00] border-b border-[#1A1A1A] transition-colors duration-200 text-left"
          >
            {theme === 'dark' ? '[ LIGHT MODE ]' : '[ DARK MODE ]'}
          </button>
          <a
            href="/Professional_cv.pdf"
            download
            className="flex items-center justify-center gap-2 px-4 py-3 text-xs font-mono font-bold tracking-widest uppercase bg-[#CBFF00] text-[#0A0A0A] hover:bg-white transition-colors duration-200 mt-4"
          >
            <ArrowDownTrayIcon className="w-3.5 h-3.5" />
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
