import { Project } from '@/types/portfolio';

export const projects: Project[] = [
{
  id: 'skypulse',
  title: 'SkyPulse Weather App',
  tagline: 'Real-time weather at a glance — anywhere on Earth.',
  description:
  'A full-featured weather application that uses the Open-Meteo REST API and the browser Geolocation API to deliver real-time forecasts. Features include a 7-day forecast panel, hourly breakdowns, wind speed/UV index cards, and a voice-search capability powered by the Web Speech API. Deployed on Vercel with zero config.',
  category: 'Full Web Apps',
  tech: ['React', 'TypeScript', 'Tailwind CSS', 'Open-Meteo API', 'Geolocation API', 'Web Speech API', 'Vite'],
  features: [
  'Auto-detects user location via Geolocation API',
  'City search with Web Speech API voice input',
  '7-day forecast + hourly temperature chart',
  'Wind speed, UV index, and humidity cards',
  'Dark/light mode with smooth transitions',
  'Fully responsive — works on mobile and desktop'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11696c0f0-1788094694433.png",
  liveUrl: 'https://skypulse-sage.vercel.app',
  sourceUrl: 'https://github.com/Prince-406/skypulse.git',
  color: '#06B6D4',
  accentColor: '#0E7490'
},
{
  id: 'dine-luxury',
  title: 'Dine Luxury Restaurant',
  tagline: 'A Michelin-grade dining experience, online.',
  description:
  'A premium restaurant website built to translate a high-fidelity Figma design spec into pixel-perfect, responsive code. Showcases a full menu system with category filters, an interactive reservation form, a parallax hero section, and smooth scroll animations. Demonstrates design-to-code precision and CSS layout mastery.',
  category: 'Full Web Apps',
  tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'CSS Modules', 'Figma'],
  features: [
  'Pixel-perfect Figma-to-code implementation',
  'Interactive menu with category filter tabs',
  'Parallax hero with cinematic food photography',
  'Reservation form with client-side validation',
  'Smooth scroll reveal animations throughout',
  'Fully responsive across all breakpoints'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ecd2db33-1788094695278.png",
  liveUrl: 'https://dine-ashen.vercel.app',
  sourceUrl: 'https://github.com/Prince-406/dine.git',
  color: '#F59E0B',
  accentColor: '#D97706'
},
{
  id: 'sneakers-ecom',
  title: 'Sneakers E-Commerce',
  tagline: 'A product detail page that actually converts.',
  description:
  'A high-fidelity e-commerce product detail page for a premium sneaker brand. Features an interactive image gallery with thumbnail navigation, quantity selector, add-to-cart logic with a live cart counter, and a fully accessible modal lightbox. Built to demonstrate component-driven React architecture and state management patterns.',
  category: 'E-commerce / UI',
  tech: ['React', 'TypeScript', 'Tailwind CSS', 'Context API', 'CSS Grid', 'Figma'],
  features: [
  'Interactive image gallery with thumbnail switcher',
  'Lightbox modal for full-screen product view',
  'Add-to-cart with live cart counter in navbar',
  'Quantity selector with increment/decrement',
  'Context API for global cart state management',
  'WCAG-compliant accessible markup throughout'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d552d276-1767028341186.png",
  liveUrl: 'https://sneakers-7035.vercel.app',
  sourceUrl: 'https://github.com/Prince-406/sneakers_7035.git',
  color: '#8B5CF6',
  accentColor: '#7C3AED'
}];
