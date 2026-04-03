import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';
import ArticleHeader from '@/components/research/ArticleHeader';

export const metadata: Metadata = {
  title: 'Cellular Agriculture for Food Security in Ghana - Research',
  description: 'A Masters in Computer Science proposal on developing low-cost, scalable cellular agriculture techniques to improve food security and sustainability in Ghana.',
  openGraph: {
    title: 'Cellular Agriculture for Food Security in Ghana - Research',
    description: 'A Masters in Computer Science proposal on developing low-cost, scalable cellular agriculture techniques to improve food security and sustainability in Ghana.',
    url: '/research/cellular-agriculture',
    type: 'article',
    images: [
      {
        url: 'https://www.bernard.com/placeholder-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lab-grown meat in a petri dish',
      },
    ],
  },
};

export default function CellularAgriculturePage() {
  const pageUrl = "/research/cellular-agriculture";
  const pageTitle = "Cellular Agriculture for Food Security in Ghana";

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="Cellular Agriculture for Food Security in Ghana" subtitle="A Masters in Computer Science Proposal on Sustainable Protein Production">
        <ArticleHeader articleUrl={pageUrl} articleTitle={pageTitle} />
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto font-body text-foreground">
          
          <h3>Abstract</h3>
          <p>
            Protein deficiency and the environmental strain of conventional livestock farming are pressing issues for food security in Ghana. <strong>Cellular agriculture</strong>, the production of animal products from cell cultures, offers a transformative solution, but its high cost and technical complexity are major barriers. This Masters in Computer Science proposal outlines a research strategy to develop a low-cost, decentralized platform for producing cultured meat, focusing on a locally relevant species like poultry. The research will tackle the single biggest cost driver: the growth medium, by investigating the use of agricultural byproducts available in Ghana as a nutrient source, aiming to create a sustainable and economically viable model for local protein production.
          </p>

          <h3>Key Research Questions for Cellular Agriculture in Ghana</h3>
          <ol>
            <li><strong>Low-Cost Growth Media from Local Feedstocks:</strong> Can a nutritionally complete, serum-free growth medium for avian muscle stem cells be formulated using hydrolysates from Ghanaian agricultural surpluses or byproducts, such as cassava peels or shea nut cake?</li>
            <li><strong>Scaffolding with Natural Biomaterials:</strong> What is the most effective, edible, and low-cost scaffolding material for structuring the cultured cells into a meat-like texture? This research will explore the use of plant-based materials abundant in Ghana, such as cellulose from plantain fibers or decellularized cocoa pods.</li>
            <li><strong>Bioreactor Design for Decentralized Production:</strong> How can a simple, low-cost, and easy-to-operate bioreactor be designed for small-scale, decentralized production of cultured meat in Ghanaian communities, minimizing the need for complex infrastructure?</li>
            <li><strong>Consumer Acceptance and Sensory Analysis:</strong> What are the cultural and sensory factors that will influence the acceptance of cultured meat by Ghanaian consumers? This involves conducting sensory panels and consumer surveys in Ghana to guide product development.</li>
          </ol>

          <h3>Proposed Masters in Computer Science Research: A Circular Model for Cultured Poultry</h3>
          <p>
            This thesis will focus on developing an integrated system for producing cultured chicken, from sourcing local nutrients to final product analysis.
          </p>
          <ul>
            <li><strong>Cell Line Isolation:</strong> Isolate and establish a robust muscle stem cell line from a local Ghanaian chicken breed.</li>
            <li><strong>Media Formulation and Optimization:</strong> Create various growth media formulations using enzymatic digests of cassava peels and other agricultural waste. The performance of these media in supporting cell proliferation and differentiation will be compared against expensive commercial media.</li>
            <li><strong>Scaffold Development:</strong> Fabricate and test various edible scaffolds. The goal is to find a material that supports cell attachment and the formation of aligned muscle fibers, mimicking the texture of conventional chicken.</li>
            <li><strong>Taste and Texture Analysis:</strong> The final cultured poultry product will be harvested, cooked, and analyzed. Its nutritional profile, texture, and flavor will be compared to farm-raised chicken. A small-scale sensory panel with Ghanaian consumers will provide critical feedback on product acceptance.</li>
          </ul>

          <h3>Impact for Ghana and Africa</h3>
          <p>
            This research aims to create a new paradigm for food production in Africa. A successful project would provide a blueprint for a circular and sustainable food system where agricultural "waste" is upcycled into high-value protein. This could drastically reduce land and water use, lower greenhouse gas emissions from livestock, and provide a stable, locally-controlled source of protein, insulated from climate shocks and global supply chain disruptions. By pioneering low-cost, open-source methods, Ghana can become a leader in a technology that is poised to redefine the future of food, ensuring that Africa is not just a consumer but a key innovator in the protein transition.
          </p>
          
        </div>
      </SectionContainer>
    </div>
  );
}
