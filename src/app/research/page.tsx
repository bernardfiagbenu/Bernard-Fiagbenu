import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { LightbulbIcon, BookOpenIcon, LinkIcon, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Research & Tech Insights by Bernard Fiagbenu',
  description: 'Explore Bernard Fiagbenu\'s research interests in cutting-edge technologies like AGI, Quantum Computing, BCIs, Nanotechnology, and more.',
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const researchItems = [
   {
    id: 'quantum-computing-use-cases',
    title: 'Quantum Computing: Use Cases for Ghana',
    description: 'A comprehensive analysis of future quantum computing use cases across major industries in Ghana, including healthcare, finance, logistics, and agriculture. Read the full article.',
    date: 'Deep Dive Article',
    tags: ['Quantum', 'Ghana', 'Development', 'Industry'],
    link: '/research/quantum-computing-use-cases',
  },
  {
    id: 'agi',
    title: 'Artificial General Intelligence (AGI) in Ghana',
    description: 'A Masters in Computer Science proposal on developing robust, data-efficient, and causal AGI systems to address Ghana-specific challenges in agriculture and public health.',
    date: 'Masters in Computer Science Proposal',
    tags: ['AI', 'AGI', 'Ghana', 'Causal Inference'],
    link: '/research/artificial-general-intelligence', 
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Computing for Ghanaian Development',
    description: 'A Masters in Computer Science proposal investigating how to apply hybrid quantum-classical algorithms to solve complex optimization problems in Ghanaian industries like cocoa logistics.',
    date: 'Masters in Computer Science Proposal',
    tags: ['Quantum', 'Optimization', 'Ghana', 'Logistics'],
    link: '/research/quantum-computing',
  },
  {
    id: 'bcis',
    title: 'BCIs for Healthcare in Ghana',
    description: 'A Masters in Computer Science proposal on developing affordable, non-invasive Brain-Computer Interfaces for neurorehabilitation, focusing on a zero-calibration model for Ghanaian clinics.',
    date: 'Masters in Computer Science Proposal',
    tags: ['BCI', 'Neuroscience', 'Healthcare', 'Ghana'],
    link: '/research/brain-computer-interfaces',
  },
  {
    id: 'nanotech',
    title: 'Molecular Nanotechnology for Ghanaian Challenges',
    description: 'A Masters in Computer Science proposal for engineering low-cost, thermally-stable DNA nanosensors for field-deployable diagnostics for diseases relevant to Ghana.',
    date: 'Masters in Computer Science Proposal',
    tags: ['Nanotech', 'Diagnostics', 'Healthcare', 'Ghana'],
    link: '/research/molecular-nanotechnology',
  },
  {
    id: 'fusion-energy',
    title: 'Fusion Energy and Africa\'s Future',
    description: 'A Masters in Computer Science perspective on how Ghana can strategically engage with global fusion R&D by focusing on niche areas like AI for plasma control and materials science.',
    date: 'Masters in Computer Science Perspective',
    tags: ['Energy', 'Fusion', 'Ghana', 'Africa'],
    link: '/research/fusion-energy',
  },
   {
    id: 'autonomous-vehicles',
    title: 'Autonomous Vehicles for Ghanaian Logistics',
    description: 'A Masters in Computer Science proposal on innovating resilient, low-cost autonomous drones and ground vehicles to transform last-mile delivery and supply chains across Ghana.',
    date: 'Masters in Computer Science Proposal',
    tags: ['Autonomous', 'Mobility', 'Logistics', 'Ghana'],
    link: '/research/autonomous-vehicles',
  },
  {
    id: 'ar-vr',
    title: 'AR/VR for Education and Training in Ghana',
    description: 'A Masters in Computer Science proposal on creating accessible, smartphone-based immersive digital experiences to bridge gaps in vocational education in Ghana.',
    date: 'Masters in Computer Science Proposal',
    tags: ['AR', 'VR', 'EdTech', 'Ghana'],
    link: '/research/ar-vr',
  },
  {
    id: 'crispr',
    title: 'CRISPR for Ghanaian Agriculture and Health',
    description: 'A Masters in Computer Science proposal on utilizing gene-editing to develop drought-resistant crops (cowpea) and new diagnostic tools for genetic diseases in Ghana.',
    date: 'Masters in Computer Science Proposal',
    tags: ['CRISPR', 'Genetics', 'Biotech', 'Ghana'],
    link: '/research/crispr',
  },
  {
    id: '3d-printing',
    title: '3D Printing for Local Manufacturing in Ghana',
    description: 'A Masters in Computer Science proposal on transforming manufacturing by using recycled plastic waste to enable local production of medical devices and spare parts.',
    date: 'Masters in Computer Science Proposal',
    tags: ['3D Printing', 'Manufacturing', 'Circular Economy', 'Ghana'],
    link: '/research/3d-printing',
  },
  {
    id: 'space-tech',
    title: 'Space Technologies for Ghanaian Development',
    description: 'A Masters in Computer Science proposal on using satellite remote sensing and AI to monitor illegal mining (galamsey) and manage natural resources in Ghana.',
    date: 'Masters in Computer Science Proposal',
    tags: ['Space', 'AI', 'Environment', 'Ghana'],
    link: '/research/space-tech',
  },
  {
    id: 'neuromorphic-computing',
    title: 'Neuromorphic Computing for Low-Power AI in Ghana',
    description: 'A Masters in Computer Science proposal on designing brain-inspired hardware for highly efficient AI that can run on low-power, off-grid devices for applications like crop disease detection.',
    date: 'Masters in Computer Science Proposal',
    tags: ['AI', 'Hardware', 'Edge AI', 'Ghana'],
    link: '/research/neuromorphic-computing',
  },
  {
    id: 'synthetic-biology',
    title: 'Synthetic Biology for Ghanaian Challenges',
    description: 'A Masters in Computer Science proposal on designing new biological systems to produce medicines, clean water, and sustainable materials locally in Ghana using cell-free systems.',
    date: 'Masters in Computer Science Proposal',
    tags: ['SynBio', 'Biotech', 'Ghana', 'Healthcare'],
    link: '/research/synthetic-biology',
  },
  {
    id: 'xenobots',
    title: 'Xenobots and Synthetic Morphology',
    description: 'A Masters in Computer Science proposal on creating novel life-forms ("living robots") by assembling cells into functional, programmable organisms to understand biological construction.',
    date: 'Masters in Computer Science Proposal',
    tags: ['Robotics', 'Biology', 'AI', 'A-Life'],
    link: '/research/xenobots',
  },
  {
    id: 'lab-grown-meat',
    title: 'Cellular Agriculture for Food Security in Ghana',
    description: 'A Masters in Computer Science proposal on developing sustainable and scalable protein sources through cell-based food production to improve food security in Ghana.',
    date: 'Masters in Computer Science Proposal',
    tags: ['Food Tech', 'Sustainability', 'Ghana', 'Circular Economy'],
    link: '/research/cellular-agriculture',
  },
  {
    id: 'vertical-farming',
    title: 'Vertical Farming for Urban Ghana',
    description: 'A Masters in Computer Science proposal on innovating in agriculture with low-energy, aquaponics-based vertical farming methods for efficient food production in Ghanaian cities.',
    date: 'Masters in Computer Science Proposal',
    tags: ['AgriTech', 'Urban Farming', 'Ghana', 'Sustainability'],
    link: '/research/vertical-farming',
  },
  {
    id: 'direct-air-capture',
    title: 'Direct Air Capture for Ghana\'s Climate Future',
    description: 'A Masters in Computer Science proposal on developing techno-economic models for solar-powered DAC in Ghana, positioning the nation as a leader in the carbon removal economy.',
    date: 'Masters in Computer Science Proposal',
    tags: ['Climate', 'Carbon Capture', 'Energy', 'Ghana'],
    link: '/research/direct-air-capture',
  },
  {
    id: 'programmable-matter',
    title: 'Programmable Matter for Ghanaian Infrastructure',
    description: 'A Masters in Computer Science proposal on researching self-healing and adaptive materials (from local resources) to build resilient, low-cost infrastructure in Ghana.',
    date: 'Masters in Computer Science Proposal',
    tags: ['Materials', 'Infrastructure', 'Ghana'],
    link: '/research/programmable-matter',
  },
  {
    id: 'internet-of-everything',
    title: 'The Internet of Everything for African Smart Cities',
    description: 'A Masters in Computer Science proposal on expanding the concept of IoT to create a decentralized, privacy-preserving data framework for smart cities like Accra.',
    date: 'Masters in Computer Science Proposal',
    tags: ['IoT', 'Smart Cities', 'Ghana', 'Data'],
    link: '/research/internet-of-everything',
  },
  {
    id: 'solid-state-batteries',
    title: 'Solid-State Batteries for Energy Sovereignty',
    description: 'A Masters in Computer Science proposal on advancing energy storage with safer, more efficient solid-state batteries, using locally-sourced minerals from Ghana.',
    date: 'Masters in Computer Science Proposal',
    tags: ['Energy', 'Batteries', 'Materials', 'Ghana'],
    link: '/research/solid-state-batteries',
  },
  {
    id: 'mind-uploading',
    title: 'Mind Uploading & Computational Connectomics',
    description: 'A Masters in Computer Science proposal exploring the theoretical and computational neuroscience foundations of mind uploading by modeling neural circuits.',
    date: 'Masters in Computer Science Proposal',
    tags: ['Neuroscience', 'AI', 'Computation', 'Theory'],
    link: '/research/mind-uploading',
  },
  {
    id: 'anti-aging',
    title: 'Computational Genomics of Longevity',
    description: 'A Masters in Computer Science proposal on investigating the biological mechanisms of aging to develop interventions, with relevance for Africa\'s growing elderly population.',
    date: 'Masters in Computer Science Proposal',
    tags: ['Longevity', 'Biotech', 'Genomics', 'Africa'],
    link: '/research/anti-aging',
  },
  {
    id: 'dyson-spheres',
    title: 'Searching for Extraterrestrial Megastructures',
    description: 'A Masters in Computer Science proposal on conceptualizing the search for Dyson Spheres and other technosignatures by mining astronomical data.',
    date: 'Masters in Computer Science Proposal',
    tags: ['SETI', 'Astronomy', 'Data Science', 'Theory'],
    link: '/research/dyson-spheres',
  },
  {
    id: 'morphological-freedom',
    title: 'The Ethics of Morphological Freedom',
    description: 'A Masters in Computer Science proposal exploring the ethical and policy dimensions of human augmentation, focusing on equitable access in a global context.',
    date: 'Masters in Computer Science Proposal',
    tags: ['Ethics', 'Policy', 'Transhumanism', 'Africa'],
    link: '/research/morphological-freedom',
  },
  {
    id: 'warp-drives',
    title: 'Warp Drives & Faster-Than-Light Travel',
    description: 'A Masters in Computer Science proposal investigating the theoretical physics and potential experimental signatures of warp drive spacetimes.',
    date: 'Masters in Computer Science Proposal',
    tags: ['Space', 'Physics', 'FTL', 'Theory'],
    link: '/research/warp-drives',
  },
  {
    id: 'artificial-life',
    title: 'Artificial Life & Simulating Origins',
    description: 'A Masters in Computer Science proposal on creating synthetic life forms (A-Life) and protocells in simulation to understand the origins of life.',
    date: 'Masters in Computer Science Proposal',
    tags: ['A-Life', 'Biology', 'Origins', 'Computation'],
    link: '/research/artificial-life',
  },
  {
    id: 'wireless-power',
    title: 'Wireless Power at Scale',
    description: 'A Masters in Computer Science proposal on developing methods for efficient, long-range wireless power transmission for off-grid applications in Ghana.',
    date: 'Masters in Computer Science Proposal',
    tags: ['Energy', 'Wireless', 'Ghana', 'Hardware'],
    link: '/research/wireless-power',
  },
  {
    id: 'cryonics',
    title: 'The Science of Cryopreservation',
    description: 'A Masters in Computer Science proposal on researching low-temperature preservation, focusing on vitrification to enable organ banking for transplantation in Africa.',
    date: 'Masters in Computer Science Proposal',
    tags: ['Cryonics', 'Longevity', 'Biotech', 'Africa'],
    link: '/research/cryonics',
  },
  {
    id: 'satellite-internet',
    title: 'Satellite Internet for Ghana',
    description: 'A Masters in Computer Science proposal on building decentralized community mesh networks to provide global, high-speed internet access to bridge the digital divide in Ghana.',
    date: 'Masters in Computer Science Proposal',
    tags: ['Internet', 'Connectivity', 'Networks', 'Ghana'],
    link: '/research/satellite-internet',
  },
];

export default function ResearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="Research & Insights" subtitle="Applying Frontier Technology to Solve Challenges in Ghana and Africa">
        <div className="space-y-8">
          {researchItems.map((item, index) => {
            const articleSchema = {
              "@context": "https://schema.org",
              "@type": "TechArticle", 
              "headline": item.title,
              "description": item.description,
              "author": {
                "@type": "Person",
                "name": "Bernard Fiagbenu"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Bernard Fiagbenu Portfolio",
                "logo": {
                  "@type": "ImageObject",
                  "url": siteUrl ? `${siteUrl}/icon.png` : '/icon.png' 
                }
              },
              "datePublished": new Date().toISOString(), 
              "keywords": item.tags.join(', ')
            };
            return (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
                  key={`research-schema-${item.id}`}
                />
                <article>
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <LightbulbIcon className="w-6 h-6 text-accent mr-3" aria-hidden="true" />
                        <CardTitle className="font-headline text-2xl text-primary">{item.title}</CardTitle>
                      </div>
                      <CardDescription className="font-body text-sm text-muted-foreground">{item.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="font-body text-foreground mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={`${item.id}-${tag}-${index}`} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full font-body">{tag}</span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                       <Link 
                          href={item.link} 
                          className="text-primary hover:text-accent font-semibold font-body flex items-center" 
                          aria-label={`Learn more about ${item.title}`}
                        >
                          {item.date === 'Deep Dive Article' ? 'Read Full Article' : 'Explore Topic'}
                          <ExternalLink className="ml-2 w-4 h-4" />
                       </Link>
                    </CardFooter>
                </article>
              </Card>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center text-lg text-muted-foreground">
            <BookOpenIcon className="w-6 h-6 mr-2 text-accent" aria-hidden="true" />
            <p className="font-body">Continuously learning and exploring new ideas. These topics represent areas of significant interest and potential future impact.</p>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
