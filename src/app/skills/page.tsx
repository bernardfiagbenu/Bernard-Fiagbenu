
import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CodeIcon, 
  GlobeIcon, 
  BriefcaseIcon, 
  BinaryIcon, 
  ServerIcon, 
  DatabaseIcon, 
  BrainIcon, 
  SmartphoneIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  PaletteIcon, 
  CalculatorIcon, 
  UsersIcon,
  Presentation,
  Crown
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technical Skills of Bernard Fiagbenu',
  description: 'A comprehensive list of Bernard Fiagbenu\'s technical skills, including programming languages, web development, software engineering, AI/ML, databases, and more.',
};

interface SkillCategory {
  name: string;
  icon: LucideIcon;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    icon: CodeIcon,
    skills: ['Python', 'Java', 'C++', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'Go', 'Swift', 'Kotlin'],
  },
  {
    name: 'Web Development',
    icon: GlobeIcon,
    skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'React', 'Next.js', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'RESTful APIs', 'Client-Side & Server-Side Development', 'Web Security (XSS, CSRF)'],
  },
  {
    name: 'Software Engineering & Architecture',
    icon: BriefcaseIcon,
    skills: ['SDLC (Software Development Life Cycle)', 'Agile & Scrum Methodologies', 'Version Control (Git, GitHub)', 'Software Design Patterns', 'UML (Unified Modeling Language)', 'Testing (Unit, Integration, System)', 'Computer Architecture Principles'],
  },
  {
    name: 'Data Structures & Algorithms',
    icon: BinaryIcon,
    skills: ['Arrays, Linked Lists, Stacks, Queues', 'Trees (Binary, AVL, B-Trees), Graphs', 'Hash Tables', 'Sorting & Searching Algorithms', 'Algorithm Analysis (Big O Notation)', 'Problem Solving with Algorithms'],
  },
  {
    name: 'Operating Systems & Networking',
    icon: ServerIcon,
    skills: ['OS Concepts (Processes, Threads, Scheduling)', 'Memory Management, File Systems', 'Concurrency & Synchronization', 'Computer Networks (TCP/IP, HTTP, DNS)', 'Network Protocols & Security'],
  },
  {
    name: 'Databases',
    icon: DatabaseIcon,
    skills: ['Relational Databases (MySQL, PostgreSQL)', 'NoSQL Databases (MongoDB)', 'Database Design & Modeling (ERDs)', 'SQL & Data Manipulation', 'Data Normalization', 'Firebase Firestore'],
  },
  {
    name: 'Artificial Intelligence & Machine Learning',
    icon: BrainIcon,
    skills: ['Core AI Concepts', 'Machine Learning Algorithms (Supervised, Unsupervised)', 'Natural Language Processing (NLP)', 'Computer Vision Basics', 'Data Mining & Analysis'],
  },
  {
    name: 'Mobile Development',
    icon: SmartphoneIcon,
    skills: ['Android (Kotlin/Java)', 'iOS (Swift)', 'Cross-Platform Concepts (e.g., Flutter, React Native)', 'Mobile UI/UX Principles', 'Mobile Application Lifecycle'],
  },
  {
    name: 'Cybersecurity',
    icon: ShieldCheckIcon,
    skills: ['Information Security Fundamentals', 'Cryptography Basics', 'Network Security Concepts', 'Web Application Security', 'Ethical Hacking Awareness'],
  },
  {
    name: 'Cloud Computing & DevOps',
    icon: CloudIcon,
    skills: ['Cloud Platforms (AWS, Azure, GCP concepts)', 'Virtualization & Containers (Docker)', 'CI/CD Principles & Tools (e.g., GitHub Actions)', 'Deployment Strategies', 'Infrastructure as Code (IaC) concepts'],
  },
  {
    name: 'Design & User Experience',
    icon: PaletteIcon,
    skills: ['UI/UX Principles', 'Interaction Design', 'Wireframing & Prototyping', 'Usability & Accessibility Concepts', 'Responsive Design Principles'],
  },
  {
    name: 'Mathematical Foundations',
    icon: CalculatorIcon,
    skills: ['Discrete Mathematics', 'Calculus', 'Linear Algebra', 'Statistics & Probability'],
  },
   {
    name: 'Teaching & Mentorship',
    icon: Presentation,
    skills: ['Curriculum Development', 'Technical Instruction', 'Mentoring Junior Developers', 'Workshop Facilitation', 'Public Speaking'],
  },
  {
    name: 'Leadership & Management',
    icon: Crown,
    skills: ['Team Leadership', 'Strategic Planning', 'Project Coordination', 'Decision Making', 'Conflict Resolution', 'Risk Management'],
  },
  {
    name: 'Soft Skills & Project Management',
    icon: UsersIcon,
    skills: ['Problem Solving & Critical Thinking', 'Communication (Technical & General)', 'Teamwork & Collaboration', 'Project Management Fundamentals', 'Ethical Conduct in Computing', 'Adaptability & Continuous Learning'],
  },
];

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="My Skills" subtitle="A Showcase of My Computer Science Expertise">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <section key={category.name} aria-labelledby={`skill-category-${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
              <Card className="hover:shadow-2xl transition-all duration-300 flex flex-col h-full perspective-container dashboard-3d rounded-[2.5rem]">
                <CardHeader className="flex flex-row items-center space-x-3 pb-3">
                  <category.icon className="w-8 h-8 text-primary" aria-hidden="true" />
                  <CardTitle id={`skill-category-${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="font-headline text-xl text-primary">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pt-0">
                  <ul className="space-y-1.5 font-body">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-muted-foreground text-sm flex items-start">
                        <span className="text-primary mr-2 mt-1">&#8227;</span> {/* Bullet point */}
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
