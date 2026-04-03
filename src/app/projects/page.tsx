import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GithubIcon, ExternalLinkIcon, AppWindow } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects by Bernard Fiagbenu',
  description: 'Explore a collection of software development projects by Bernard Fiagbenu, showcasing skills in web applications, tools, and various technologies.',
};

const projects = [
  {
    title: 'A.I. Learning Path Generator',
    description: 'An AI-powered tool that generates personalized learning paths based on your goals and current skill level, helping you navigate the complex world of computer science.',
    imageUrl: 'https://picsum.photos/600/400',
    tags: ['AI', 'Education', 'Learning', 'Personalization', 'Next.js'],
    githubUrl: null,
    liveUrl: '/projects/learning-path-generator',
    aiHint: 'learning path flowchart'
  },
  {
    title: 'Online Safety Scenario Simulator',
    description: 'Practice navigating online safety challenges in a safe environment. AI generates realistic scenarios to help users identify and respond to potential threats.',
    imageUrl: 'https://picsum.photos/600/400',
    tags: ['AI', 'Cybersecurity', 'Safety', 'Education', 'Next.js'],
    githubUrl: null,
    liveUrl: '/projects/online-safety-scenarios',
    aiHint: 'shield and lock icons'
  },
  {
    title: 'Policy Simulator for Sustainable Cities',
    description: 'Simulate the impact of various urban policies using AI. See how decisions on transportation, housing, and energy affect a city\'s sustainability goals.',
    imageUrl: 'https://picsum.photos/600/400',
    tags: ['AI', 'Sustainability', 'Urban Planning', 'Policy', 'Next.js'],
    githubUrl: null,
    liveUrl: '/projects/policy-simulator',
    aiHint: 'city skyline with toggle switches'
  },
  {
    title: 'Social Impact Challenge Brainstormer',
    description: 'Brainstorm creative solutions to social challenges with the help of AI. This tool facilitates collaborative ideation for positive social impact.',
    imageUrl: 'https://picsum.photos/600/400',
    tags: ['AI', 'Social Impact', 'Innovation', 'Brainstorming', 'Next.js'],
    githubUrl: null,
    liveUrl: '/projects/social-impact-challenge',
    aiHint: 'diverse group of people together'
  },
  {
    title: 'Mental Wellbeing Compass for Ghana',
    description: 'A privacy-first demo app offering mental health screening (PHQ-9) and resources, inspired by UN/WHO guidance to provide accessible mental health information specifically for Ghana.',
    imageUrl: 'https://picsum.photos/600/400',
    tags: ['Health Tech', 'Mental Health', 'Ghana', 'React', 'Next.js'],
    githubUrl: null,
    liveUrl: '/projects/mental-wellbeing-compass',
    aiHint: 'mental health app interface'
  },
  {
    title: 'Urban Insights Dashboard for Accra',
    description: 'An interactive dashboard for visualizing urban data for Accra, including population, infrastructure, and climate risks, to support sustainable urban planning in Ghana.',
    imageUrl: 'https://picsum.photos/600/400',
    tags: ['Data Viz', 'Urban Planning', 'Accra', 'Firebase', 'p5.js'],
    githubUrl: null,
    liveUrl: '/projects/urban-insights',
    aiHint: 'city data dashboard'
  },
  {
    title: 'Health Tech Prototypes for Ghana',
    description: 'A collection of rapid-prototype health applications, from data dashboards to emergency supply trackers, designed to address healthcare challenges in Ghana.',
    imageUrl: 'https://picsum.photos/600/400',
    tags: ['Prototyping', 'Dashboards', 'Ghana', 'Data Viz', 'Next.js'],
    githubUrl: null,
    liveUrl: '/projects/demos',
    aiHint: 'app prototypes grid'
  },
  {
    title: 'World Population Trends Dashboard',
    description: 'An interactive dashboard visualizing UN population data. It highlights key demographic shifts, providing insights for development planning in Ghana and globally.',
    imageUrl: 'https://picsum.photos/600/400',
    tags: ['Data Viz', 'Demographics', 'UN Data', 'Next.js', 'Recharts'],
    githubUrl: null,
    liveUrl: '/projects/world-population-dashboard',
    aiHint: 'population data dashboard'
  },
  {
    title: 'HIV/AIDS Interactive Data Dashboard for Ghana',
    description: 'A data dashboard presenting key statistics on the HIV/AIDS epidemic in Ghana from UNAIDS, highlighting treatment gaps, gender inequalities, and funding challenges.',
    imageUrl: 'https://picsum.photos/600/400',
    tags: ['Data Viz', 'Health Tech', 'Ghana', 'Next.js', 'Recharts'],
    githubUrl: null,
    liveUrl: '/projects/hiv-aids-dashboard',
    aiHint: 'health data dashboard'
  },
  {
    title: 'Urban Resilience Planner for Accra',
    description: 'An interactive dashboard to monitor and analyze greenhouse gas emissions data, demonstrating data visualization concepts for climate action in Ghanaian cities like Accra.',
    imageUrl: 'https://picsum.photos/600/400',
    tags: ['Climate Action', 'Data Viz', 'GIS', 'Accra', 'React'],
    githubUrl: null,
    liveUrl: '/projects/ghg-emissions-tracker',
    aiHint: 'climate data dashboard'
  },
  {
    title: 'Stress Manager App',
    description: 'A web application designed to help users manage stress through various techniques and resources. Built with modern web technologies to promote well-being.',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4E22AQEiE7nA8hp7mA/feedshare-shrink_800/B4EZd4bzOmHsAo-/0/1750072245167?e=1752710400&v=beta&t=4gZhtXwZOF9GqMJ-LuUAKUo_8Nm6ijn9pcGs7tS7DlU',
    tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Web App', 'Health', 'Wellness'],
    githubUrl: 'https://github.com/bernardfiagbenu/stressmanager',
    liveUrl: 'https://bernardfiagbenu.github.io/stressmanager/',
    aiHint: 'wellness app interface'
  },
  {
    title: 'Fav ico Generator',
    description: 'A user-friendly web application that helps users quickly generate favicon files for their websites. Deployed on Netlify for easy access.',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4E22AQEwfd6DQ_ORwA/feedshare-shrink_800/B4EZd5vE3BHgAk-/0/1750094074334?e=1752710400&v=beta&t=lUJX6c9UXSeBkX4YNClxV6z-7BXHSko6GZyKxA5SuyI',
    tags: ['Netlify', 'Web App', 'Frontend', 'Favicon', 'Tool', 'JavaScript'],
    githubUrl: null,
    liveUrl: 'https://inspiring-moxie-f3674a.netlify.app/',
    aiHint: 'favicon generator app interface'
  },
  {
    title: 'Google Play Console Image Formatter',
    description: 'A tool to quickly and easily format developer icons and header images to meet Google Play Store requirements.',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4E22AQHLceGzsddiVg/feedshare-shrink_800/B4EZd7LfkBGwAg-/0/1750118300730?e=1752710400&v=beta&t=kAxXndPg9KxTh_7vM6CpRzO7SswVkBXlpeGBZL7s5rs',
    tags: ['Web App', 'Frontend', 'Image Tool', 'Utility', 'Google Play'],
    githubUrl: null,
    liveUrl: 'https://ubiquitous-speculoos-d2e478.netlify.app/',
    aiHint: 'image formatter tool'
  },
  {
    title: 'Modern Quiz App',
    description: 'An interactive and modern quiz application to test your knowledge on various subjects. Features a clean UI and engaging user experience.',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4E22AQHa5XJpX7b-2g/feedshare-shrink_800/B4EZep0aORHIAg-/0/1750900778472?e=1753920000&v=beta&t=-RjjrDLJC2WU2mjbCa1_Xu9diNICNxRGeRP0eWWYolQ',
    tags: ['React', 'Quiz App', 'JavaScript', 'Netlify', 'Frontend'],
    githubUrl: 'https://github.com/bernardfiagbenu/mordern-quiz-app',
    liveUrl: 'https://effulgent-mousse-1d069d.netlify.app/',
    aiHint: 'quiz app interface'
  }
];

const ProjectLinkWrapper = ({ liveUrl, children }: { liveUrl: string | null, children: React.ReactNode }) => {
  if (liveUrl && liveUrl.startsWith('/')) {
    return <Link href={liveUrl} className="group block h-full">{children}</Link>;
  }
  return <div className="group block h-full">{children}</div>;
};

const ActionButton = ({ url, label, icon: Icon, isInternal }: { url: string, label: string, icon: React.ElementType, isInternal?: boolean }) => {
  const commonProps = {
    children: (
      <>
        <Icon className="mr-2 h-4 w-4" /> {label}
      </>
    ),
  };

  if (isInternal) {
    return (
      <Button variant="default" size="sm" asChild>
        <Link href={url} {...commonProps} />
      </Button>
    );
  }

  return (
    <Button variant="default" size="sm" asChild>
      <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of project`} {...commonProps} />
    </Button>
  );
};


export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="My Projects" subtitle="A Glimpse into My Work">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const projectSchema = {
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": project.title,
              "description": project.description,
              "image": project.imageUrl,
              "url": project.liveUrl || project.githubUrl,
              "author": {
                "@type": "Person",
                "name": "Bernard Fiagbenu"
              },
              "keywords": project.tags.join(', ')
            };
            return (
              <Card key={index} className="flex flex-col overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
                  key={`project-schema-${index}`}
                />
                <ProjectLinkWrapper liveUrl={project.liveUrl}>
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary mb-2 group-hover:text-accent transition-colors">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="font-body text-muted-foreground mb-4">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full font-body">{tag}</span>
                      ))}
                    </div>
                  </CardContent>
                </ProjectLinkWrapper>
                <CardFooter className="flex justify-end space-x-2 p-4 bg-muted/30 mt-auto">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
                        <GithubIcon className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <ActionButton
                      url={project.liveUrl}
                      label={project.liveUrl.startsWith('/') ? 'View Demo' : 'Live Demo'}
                      icon={project.liveUrl.startsWith('/') ? AppWindow : ExternalLinkIcon}
                      isInternal={project.liveUrl.startsWith('/')}
                    />
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </SectionContainer>
    </div>
  );
}
