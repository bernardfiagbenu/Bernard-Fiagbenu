
'use client';

import SectionContainer from '@/components/ui/SectionContainer';
import { Briefcase, GraduationCap, Lightbulb } from 'lucide-react';
import dynamic from 'next/dynamic';
import { homePageSketch } from '@/components/p5/HomePageSketch';

// Dynamically import the P5Sketch component to ensure it's client-side only
const P5Sketch = dynamic(() => import('@/components/ui/P5Sketch'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 w-full h-full bg-background z-0" />,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Bernard Fiagbenu",
  "url": siteUrl ? `${siteUrl}/about` : '/about',
  "image": "https://media.licdn.com/dms/image/v2/D4E03AQHUX2NRr94X0g/profile-displayphoto-scale_200_200/B4EZhRbogBHIAc-/0/1753712855893?e=1756339200&v=beta&t=ENNu6kVKgGex8c_GZVC_0BtHBKcW6mj4C1CIeB1fVf4",
  "jobTitle": "Computer Science Innovator",
  "description": "A Computer Scientist and leader dedicated to applying foundational principles and future technologies to solve critical challenges in Ghana and Africa.",
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "University of the People",
    "location": "Pasadena, California"
  },
  "knowsAbout": ["Software Development", "Computer Science", "Web Technologies", "AI", "Machine Learning", "Innovation for Africa"],
  "worksFor": {
    "@type": "Organization",
    "name": "Technology & Innovation for Development" 
  },
  "sameAs": [
    "https://github.com/bernardfiagbenu",
    "https://www.linkedin.com/in/bernard-fiagbenu-26b50b19a/",
    "https://x.com/FiagbenuBe14283"
  ]
};

export default function AboutPage() {
  return (
    <div className="overflow-hidden min-h-screen">
      <P5Sketch sketch={homePageSketch} className="fixed inset-0 w-full h-full z-0" />
      <div className="fixed inset-0 z-10 bg-background/80 dark:bg-background/90 backdrop-blur-sm"></div>

      <div className="relative z-20 container mx-auto px-4 py-8 md:py-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          key="person-schema"
        ></script>
        
        <SectionContainer title="About Me" subtitle="Innovating for Ghana and Africa">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <article className="text-left md:text-left">
              <h2 className="text-2xl font-headline font-semibold text-primary mb-4">Bernard Fiagbenu</h2>
              <p className="font-body text-lg text-foreground mb-4 text-pretty">
                Hello! I am a Computer Scientist and innovator driven by a mission: to harness the power of technology to solve critical challenges in Ghana and across the African continent. My work is rooted in the belief that a deep understanding of theoretical computer science is the key to unlocking practical, high-impact solutions.
              </p>
              <p className="font-body text-lg text-foreground mb-4">
                As a leader, I focus on transforming complex theories into tangible innovations. Whether it's designing AI for agriculture, developing low-cost healthcare diagnostics, or conceptualizing next-generation energy grids, my goal is to build robust, efficient, and scalable systems that are tailored to the unique economic and social landscape of our region. I am passionate about creating a future where technology empowers local communities and positions Africa as a hub for global innovation.
              </p>
              <p className="font-body text-lg text-foreground mb-6">
                This portfolio showcases my journey and my vision. It's a collection of projects and research dedicated to this cause—building a more prosperous and sustainable future for Ghana and Africa, one technological leap at a time.
              </p>
            </article>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <section className="flex flex-col items-center p-6 bg-background/80 rounded-lg shadow-md border border-primary/10">
              <GraduationCap className="w-12 h-12 text-accent mb-3" aria-hidden="true" />
              <h3 className="text-xl font-headline font-semibold text-primary mb-2">Education</h3>
              <p className="font-body text-center text-muted-foreground">
                Bachelor of Science in Computer Science
                <br />
                University of the People (Pasadena, California)
                <br />
                Graduated in 2025 | GPA: 3.06
              </p>
            </section>
            <section className="flex flex-col items-center p-6 bg-background/80 rounded-lg shadow-md border border-primary/10">
              <Briefcase className="w-12 h-12 text-accent mb-3" aria-hidden="true" />
              <h3 className="text-xl font-headline font-semibold text-primary mb-2">Experience</h3>
              <p className="font-body text-center text-muted-foreground">5+ years in Software Development<br/>Experienced in various computer science and software engineering roles.</p>
            </section>
            <section className="flex flex-col items-center p-6 bg-background/80 rounded-lg shadow-md border border-primary/10">
              <Lightbulb className="w-12 h-12 text-accent mb-3" aria-hidden="true" />
              <h3 className="text-xl font-headline font-semibold text-primary mb-2">Philosophy</h3>
              <p className="font-body text-center text-muted-foreground">"Simplicity is the ultimate sophistication." - Leonardo da Vinci. I strive for clarity and impact in design and code.</p>
            </section>
          </div>
        </SectionContainer>
      </div>
    </div>
  );
}
