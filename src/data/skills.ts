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
      { name: 'Component Architecture', level: 'Advanced', icon: 'component' },
    ],
  },
  {
    id: 'styling',
    label: 'Styling & Design',
    iconName: 'PaintBrushIcon',
    color: '#06B6D4',
    skills: [
      { name: 'Tailwind CSS', level: 'Advanced', icon: 'tailwind' },
      { name: 'SASS / SCSS', level: 'Intermediate', icon: 'sass' },
      { name: 'Responsive Web Design', level: 'Advanced', icon: 'responsive' },
      { name: 'Figma Design-to-Code', level: 'Intermediate', icon: 'figma' },
      { name: 'HTML5 / CSS3', level: 'Advanced', icon: 'html' },
    ],
  },
  {
    id: 'apis',
    label: 'APIs & Integration',
    iconName: 'GlobeAltIcon',
    color: '#10B981',
    skills: [
      { name: 'REST API Integration', level: 'Advanced', icon: 'api' },
      { name: 'Open-Meteo API', level: 'Advanced', icon: 'weather' },
      { name: 'Geolocation API', level: 'Intermediate', icon: 'location' },
      { name: 'Web Speech API', level: 'Intermediate', icon: 'speech' },
      { name: 'Async / Fetch', level: 'Advanced', icon: 'async' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Workflow',
    iconName: 'WrenchScrewdriverIcon',
    color: '#F59E0B',
    skills: [
      { name: 'Git / GitHub Workflow', level: 'Advanced', icon: 'git' },
      { name: 'Vercel', level: 'Advanced', icon: 'vercel' },
      { name: 'Vite', level: 'Advanced', icon: 'vite' },
      { name: 'VS Code', level: 'Advanced', icon: 'vscode' },
      { name: 'Agile Practices', level: 'Intermediate', icon: 'agile' },
    ],
  },
];