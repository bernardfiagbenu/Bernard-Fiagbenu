import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';
import ArticleHeader from '@/components/research/ArticleHeader';

export const metadata: Metadata = {
  title: '3D Printing for Local Manufacturing in Ghana - Research',
  description: 'A Masters in Computer Science proposal on leveraging 3D printing with recycled materials to create a decentralized manufacturing ecosystem in Ghana.',
  openGraph: {
    title: '3D Printing for Local Manufacturing in Ghana - Research',
    description: 'A Masters in Computer Science proposal on leveraging 3D printing with recycled materials to create a decentralized manufacturing ecosystem in Ghana.',
    url: '/research/3d-printing',
    type: 'article',
    images: [
      {
        url: 'https://www.bernard.com/placeholder-image.jpg',
        width: 1200,
        height: 630,
        alt: '3D Printing and Manufacturing',
      },
    ],
  },
};

export default function ThreeDPrintingPage() {
  const pageUrl = "/research/3d-printing";
  const pageTitle = "3D Printing for Local Manufacturing in Ghana";

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="3D Printing for Local Manufacturing in Ghana" subtitle="A Masters in Computer Science Proposal on Creating a Circular Economy with Additive Manufacturing">
        <ArticleHeader articleUrl={pageUrl} articleTitle={pageTitle} />
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto font-body text-foreground">
          
          <h3>Abstract</h3>
          <p>
            Supply chain fragility and the high cost of imported goods, from medical devices to machinery spare parts, are significant barriers to development in Ghana. This Masters in Computer Science proposal explores how <strong>3D printing (additive manufacturing)</strong>, when combined with a circular economy model, can address this challenge by creating a decentralized manufacturing ecosystem. The research focuses on developing a robust, open-source system for converting local plastic waste—specifically PET from water bottles and HDPE from containers—into high-quality 3D printing filament, and then using this filament to produce items of high local value, such as custom-fit prosthetics and essential agricultural equipment parts.
          </p>

          <h3>Key Research Questions for 3D Printing in Ghana</h3>
          <ol>
            <li><strong>Waste-to-Filament Process Optimization:</strong> What is the optimal, low-cost process for shredding, cleaning, melting, and extruding recycled PET and HDPE in a Ghanaian context to produce filament with consistent diameter and minimal impurities? How do variations in local plastic waste affect filament quality?</li>
            <li><strong>Material Properties and Reinforcement:</strong> Can the mechanical properties (e.g., tensile strength, durability) of the recycled filament be enhanced by creating composites with locally available natural fibers, such as coconut or pineapple leaf fibers?</li>
            <li><strong>Design for Additive Manufacturing (DfAM) for Local Needs:</strong> How can we develop a library of open-source, 3D-printable designs that are optimized for the properties of recycled filament and address specific needs in Ghana, such as water pump impellers, umbilical cord clamps, or jigs for local artisans?</li>
            <li><strong>Techno-Economic and Social Viability:</strong> What is the business case for a micro-factory model where local entrepreneurs in Ghana operate these waste-to-product systems? This involves analyzing operational costs, potential revenues, and the social impact on local employment and environmental cleanup.</li>
          </ol>

          <h3>Proposed Masters in Computer Science Research: An Open-Source Recycled Filament Production System</h3>
          <p>
            The core of this research is the design, fabrication, and testing of a complete, end-to-end, open-source system for turning plastic waste into useful 3D-printed objects.
          </p>
          <ul>
            <li><strong>Filament Extruder Development:</strong> Design and build a next-generation "RecycleBot" filament extruder that is more robust and easier to operate than existing open-source designs. The system will incorporate real-time diameter sensing and a closed-loop control system to ensure high-quality output.</li>
            <li><strong>Material Characterization:</strong> Systematically produce and test filaments from various sources of plastic waste in Ghana. The materials will be characterized for their mechanical and thermal properties using standard testing methods.</li>
            <li><strong>Case Study: 3D-Printed Prosthetics:</strong> As a primary case study, use the developed recycled PET filament to design and print custom-fit, below-the-knee prosthetic legs. In partnership with a Ghanaian orthopedic clinic, the comfort, durability, and cost-effectiveness of these prosthetics will be evaluated against conventionally produced ones.</li>
            <li><strong>Documentation and Dissemination:</strong> The entire system—hardware blueprints, control software, material processing protocols, and case study designs—will be meticulously documented and released under an open-source license to facilitate replication and local innovation.</li>
          </ul>

          <h3>Impact for Ghana and Africa</h3>
          <p>
            This research aims to create a practical, replicable model for "sovereign manufacturing," empowering local communities in Ghana and across Africa to turn a pervasive environmental problem (plastic waste) into a resource for economic development. A successful project would not only reduce reliance on foreign supply chains but also foster a new generation of Ghanaian engineers, designers, and entrepreneurs. It would provide a tangible pathway to a circular economy, creating green jobs and delivering essential products in a way that is both sustainable and locally owned.
          </p>
          
        </div>
      </SectionContainer>
    </div>
  );
}
