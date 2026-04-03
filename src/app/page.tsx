
'use client';

import dynamic from 'next/dynamic';
import { homePageSketch } from '@/components/p5/HomePageSketch';
import AnimatedCard from '@/components/ui/AnimatedCard';
import AnimatedHeroHeadline from '@/components/ui/AnimatedHeroHeadline';
import { Briefcase, Code, GraduationCap, Lightbulb, Mail, Search } from 'lucide-react';

// Dynamically import the P5Sketch component to ensure it's client-side only
const P5Sketch = dynamic(() => import('@/components/ui/P5Sketch'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 w-full h-full bg-background z-0" />,
});

const navigationSections = [
  {
    title: 'About Me',
    description: 'Learn about my background, education, and mission to innovate for Africa.',
    icon: GraduationCap,
    href: '/about',
    delay: 100,
  },
  {
    title: 'Projects',
    description: 'Explore my software development projects, technical demos, and prototypes.',
    icon: Code,
    href: '/projects',
    delay: 200,
  },
  {
    title: 'Research',
    description: 'Insights into my technical explorations and areas of academic interest.',
    icon: Search,
    href: '/research',
    delay: 300,
  },
  {
    title: 'Skills',
    description: 'A comprehensive list of my technical expertise and professional skills.',
    icon: Lightbulb,
    href: '/skills',
    delay: 400,
  },
  {
    title: 'Contact',
    description: "Let's connect! Reach out for collaborations or opportunities.",
    icon: Mail,
    href: '/contact',
    delay: 500,
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center overflow-hidden">
      <P5Sketch sketch={homePageSketch} className="fixed inset-0 w-full h-full z-0" />
      <div className="fixed inset-0 z-10 bg-background/60 dark:bg-background/70 backdrop-blur-[2px]"></div>

      <div className="relative z-20 container mx-auto px-4 py-12">
        <AnimatedHeroHeadline />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {navigationSections.map((section) => (
            <AnimatedCard
              key={section.title}
              title={section.title}
              description={section.description}
              icon={section.icon}
              href={section.href}
              delay={section.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
