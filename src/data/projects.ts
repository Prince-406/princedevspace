import { Project } from '@/types/portfolio';

export const projects: Project[] = [
{
  id: 'skypulse',
  title: 'SkyPulse Weather App',
  tagline: 'Real-time weather at a glance — anywhere on Earth.',
  description:
  'Engineered a real-time weather application integrating the Open-Meteo REST API and the native browser Geolocation API to deliver live forecasts. Features a 7-day forecast panel, hourly breakdowns, wind speed/UV index cards, and voice-search powered by the Web Speech API. Built with React, TypeScript, and Tailwind CSS — deployed on Vercel.',
  category: 'Full Web Apps',
  tech: ['React', 'TypeScript', 'Tailwind CSS', 'Open-Meteo REST API', 'Geolocation API', 'Web Speech API', 'Vite'],
  features: [
  'Auto-detects user location via native Geolocation API',
  'City search with Web Speech API voice input',
  '7-day forecast + hourly temperature chart',
  'Wind speed, UV index, and humidity cards',
  'Dark/light mode with smooth transitions',
  'Fully responsive — works on mobile and desktop'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_422fd0220-1788821392320.png",
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
  'Built a high-end restaurant interface using Next.js App Router and Framer Motion, with a strong focus on responsive mobile layouts and smooth page transitions. Translated a high-fidelity Figma design spec into pixel-perfect, production-ready code — showcasing design-to-code precision and CSS layout mastery.',
  category: 'Full Web Apps',
  tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'CSS Modules', 'Figma'],
  features: [
  'Pixel-perfect Figma-to-code implementation',
  'Interactive menu with category filter tabs',
  'Parallax hero with cinematic food photography',
  'Reservation form with client-side validation',
  'Smooth page transitions with Framer Motion',
  'Fully responsive with mobile-first layouts'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_48d66524d-1788821392190.png",
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
  'Developed a high-converting e-commerce product detail page with dynamic cart state management using React Context API. Implemented interactive UI components including product image carousels, a lightbox gallery, and a responsive navigation drawer — demonstrating component-driven React architecture and state management patterns.',
  category: 'E-commerce / UI',
  tech: ['React', 'TypeScript', 'Tailwind CSS', 'Context API', 'CSS Grid', 'Figma'],
  features: [
  'Dynamic cart management with React Context API',
  'Interactive product image carousel',
  'Lightbox modal for full-screen product view',
  'Responsive navigation drawer',
  'Quantity selector with increment/decrement',
  'WCAG-compliant accessible markup throughout'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d552d276-1767028341186.png",
  liveUrl: 'https://sneakers-7035.vercel.app',
  sourceUrl: 'https://github.com/Prince-406/sneakers_7035.git',
  color: '#8B5CF6',
  accentColor: '#7C3AED'
}];