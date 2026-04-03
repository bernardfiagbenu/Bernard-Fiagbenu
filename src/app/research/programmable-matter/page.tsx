import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';
import ArticleHeader from '@/components/research/ArticleHeader';

export const metadata: Metadata = {
  title: 'Programmable Matter - Research',
  description: 'A deep dive into Programmable Matter, exploring its challenges, research directions, and ethical implications.',
  openGraph: {
    title: 'Programmable Matter - Research',
    description: 'A deep dive into Programmable Matter, exploring its challenges, research directions, and ethical implications.',
    url: '/research/programmable-matter',
    type: 'article',
    images: [
      {
        url: 'https://www.bernard.com/placeholder-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Programmable matter concept art',
      },
    ],
  },
};

export default function ProgrammableMatterPage() {
  const pageUrl = "/research/programmable-matter";
  const pageTitle = "Programmable Matter for Resilient Infrastructure in Ghana";

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="Programmable Matter for Resilient Infrastructure in Ghana" subtitle="A Masters in Computer Science Proposal on Self-Healing, Low-Cost Composites">
        <ArticleHeader articleUrl={pageUrl} articleTitle={pageTitle} />
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto font-body text-foreground">
          
          <h3>Abstract</h3>
          <p>
            Ghana's path to development is critically dependent on building robust and cost-effective infrastructure. However, harsh environmental conditions and limited maintenance budgets pose significant challenges to the longevity of roads, buildings, and water systems. This Masters in Computer Science proposal explores the frontier of <strong>programmable matter</strong> to create a new class of low-cost, self-healing composite materials specifically designed for the Ghanaian context. The research will focus on developing a material that can autonomously repair damage, drastically reducing lifecycle maintenance costs and improving the resilience of critical infrastructure, particularly in rural and underserved areas of Ghana.
          </p>

          <h3>Key Research Questions for Programmable Matter in Ghana</h3>
          <ul>
            <li><strong>Material Composition from Local Resources:</strong> How can we create a durable composite matrix using primarily locally sourced and waste materials from Ghana? This involves investigating the use of lateritic soils, recycled plastics (like PET from water sachets), and natural fibers (like coconut coir) as the bulk components.</li>
            <li><strong>Micro-encapsulation of Healing Agents:</strong> What is the most effective method to create stable microcapsules containing a healing agent that can be dispersed within this composite matrix? The research will focus on bio-based polymers as healing agents and develop encapsulation techniques that can be scaled up at low cost.</li>
            <li><strong>Triggering and Healing Efficiency:</strong> How can the healing mechanism be optimized for the Ghanaian environment? The project will explore passive triggering mechanisms, where cracks are induced by mechanical stress, and evaluate the healing efficiency (i.e., the percentage of mechanical strength recovered) under cyclic loading and high-humidity conditions.</li>
            <li><strong>Lifecycle and Economic Analysis:</strong> What is the techno-economic feasibility of this material compared to traditional materials like asphalt or concrete for a typical use case like a rural road in Ghana? This involves a full lifecycle cost analysis, factoring in reduced maintenance.</li>
          </ul>

          <h3>Proposed Masters in Computer Science Research: A Self-Healing Laterite-Polymer Composite</h3>
          <p>
            The central hypothesis of this thesis is that a self-healing composite can be created by embedding microcapsules of a reactive, bio-based monomer into a matrix of polymer-stabilized laterite soil.
          </p>
          <p>
            <strong>Methods:</strong>
          </p>
          <ul>
            <li><strong>Matrix Formulation:</strong> Characterize different types of laterite soils from various regions of Ghana. Develop a formulation that blends this soil with processed recycled plastic to create a durable, water-resistant matrix. The mechanical properties (compressive strength, flexural strength) will be optimized.</li>
            <li><strong>Microcapsule Synthesis:</strong> Develop a scalable method (e.g., interfacial polymerization) to create microcapsules with a robust shell that protects a liquid healing agent. The healing agent could be a bio-resin derived from local plant sources.</li>
            <li><strong>Composite Fabrication & Testing:</strong> Fabricate composite samples with varying concentrations of microcapsules. These samples will be subjected to mechanical stress to induce micro-cracks. The healing process will be observed using microscopy and the recovery of mechanical properties will be quantified using a universal testing machine.</li>
            <li><strong>Durability and Environmental Testing:</strong> The healed samples will be exposed to accelerated weathering tests that simulate Ghanaian conditions (UV radiation, high humidity, thermal cycling) to assess the long-term stability of the repaired material.</li>
          </ul>

          <h3>Expected Outcomes and Impact for Ghana</h3>
          <p>
            This research will produce a proof-of-concept for a new category of intelligent, sustainable construction material. It would be one of the first attempts to design programmable matter specifically for the challenges of a developing nation. A successful project would not only offer a direct solution for improving infrastructure in Ghana but would also create a new, high-value use for recycled plastic waste and local soils. By focusing on low-cost and local manufacturing, this research paves the way for a decentralized industry where communities in Ghana can produce their own advanced construction materials. This represents a paradigm shift from importing expensive infrastructure solutions to fostering indigenous, sustainable innovation.
          </p>
          
        </div>
      </SectionContainer>
    </div>
  );
}
