import { SkillCategory } from '@/types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    id: 'core',
    label: 'Core & Frameworks',
    iconName: 'CodeBracketIcon',
    color: '#6366F1',
    skills: [
      { name: 'React', level: 'Advanced', icon: 'react' },
      { name: 'Next.js', level: 'Advanced', icon: 'nextjs' },
      { name: 'TypeScript', level: 'Advanced', icon: 'typescript' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', icon: 'javascript' },
      { name: 'HTML5', level: 'Advanced', icon: 'html' },
    ],
  },
  {
    id: 'styling',
    label: 'Styling & UI',
    iconName: 'PaintBrushIcon',
    color: '#06B6D4',
    skills: [
      { name: 'Tailwind CSS', level: 'Advanced', icon: 'tailwind' },
      { name: 'SASS / SCSS', level: 'Intermediate', icon: 'sass' },
      { name: 'CSS Modules', level: 'Advanced', icon: 'css' },
      { name: 'Responsive Design', level: 'Advanced', icon: 'responsive' },
      { name: 'Flexbox / Grid', level: 'Advanced', icon: 'layout' },
    ],
  },
  {
    id: 'apis',
    label: 'APIs & Web Capabilities',
    iconName: 'GlobeAltIcon',
    color: '#10B981',
    skills: [
      { name: 'REST APIs', level: 'Advanced', icon: 'api' },
      { name: 'Open-Meteo API', level: 'Advanced', icon: 'weather' },
      { name: 'Async / Fetch', level: 'Advanced', icon: 'async' },
      { name: 'Geolocation API', level: 'Intermediate', icon: 'location' },
      { name: 'Web Speech API', level: 'Intermediate', icon: 'speech' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Workflow',
    iconName: 'WrenchScrewdriverIcon',
    color: '#F59E0B',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', icon: 'git' },
      { name: 'VS Code', level: 'Advanced', icon: 'vscode' },
      { name: 'Vite', level: 'Advanced', icon: 'vite' },
      { name: 'Figma (Design-to-Code)', level: 'Intermediate', icon: 'figma' },
      { name: 'Vercel', level: 'Advanced', icon: 'vercel' },
    ],
  },
];