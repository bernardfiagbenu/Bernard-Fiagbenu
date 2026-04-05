
'use client';

import dynamic from 'next/dynamic';
import { homePageSketch } from '@/components/p5/HomePageSketch';
import AnimatedCard from '@/components/ui/AnimatedCard';
import AnimatedHeroHeadline from '@/components/ui/AnimatedHeroHeadline';
import { Briefcase, Code, GraduationCap, Lightbulb, Mail, Search, BookOpen } from 'lucide-react';
import MagicBento from '@/components/ui/MagicBento';

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
    label: 'Profile',
  },
  {
    title: 'Projects',
    description: 'Explore my software development projects, technical demos, and prototypes.',
    icon: Code,
    href: '/projects',
    label: 'Development',
  },
  {
    title: 'Research',
    description: 'Insights into my technical explorations and areas of academic interest.',
    icon: Search,
    href: '/research',
    label: 'Academic',
  },
  {
    title: 'Skills',
    description: 'A comprehensive list of my technical expertise and professional skills.',
    icon: Lightbulb,
    href: '/skills',
    label: 'Expertise',
  },
  {
    title: 'Experience',
    description: 'My professional journey as a Computer Scientist and Developer.',
    icon: Briefcase,
    href: '/experience',
    label: 'Career',
  },
  {
    title: 'Contact',
    description: "Let's connect! Reach out for collaborations or opportunities.",
    icon: Mail,
    href: '/contact',
    label: 'Connect',
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center overflow-hidden">
      <P5Sketch sketch={homePageSketch} className="fixed inset-0 w-full h-full z-0" />
      <div className="fixed inset-0 z-10 bg-background/60 dark:bg-background/70 backdrop-blur-[2px]"></div>

      <div className="relative z-20 container mx-auto px-4 py-12 flex flex-col items-center">
        <AnimatedHeroHeadline />

        <div className="w-full max-w-6xl mt-8">
          <MagicBento 
            cards={navigationSections}
            glowColor="74, 0, 224" // Matching the BF logo color #4a00e0
            enableStars={true}
            enableTilt={true}
          />
        </div>
      </div>
    </div>
  );
}
