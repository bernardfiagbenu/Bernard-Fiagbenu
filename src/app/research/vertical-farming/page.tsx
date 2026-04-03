import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';
import ArticleHeader from '@/components/research/ArticleHeader';

export const metadata: Metadata = {
  title: 'Vertical Farming for Urban Ghana - Research',
  description: 'A Masters in Computer Science proposal on developing cost-effective and resource-efficient vertical farming systems for Ghanaian cities.',
  openGraph: {
    title: 'Vertical Farming for Urban Ghana - Research',
    description: 'A Masters in Computer Science proposal on developing cost-effective and resource-efficient vertical farming systems for Ghanaian cities.',
    url: '/research/vertical-farming',
    type: 'article',
    images: [
      {
        url: 'https://www.bernard.com/placeholder-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Modern vertical farm with leafy greens',
      },
    ],
  },
};

export default function VerticalFarmingPage() {
  const pageUrl = "/research/vertical-farming";
  const pageTitle = "Vertical Farming for Urban Ghana";

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="Vertical Farming for Urban Ghana" subtitle="A Masters in Computer Science Proposal on Resilient Urban Food Systems">
        <ArticleHeader articleUrl={pageUrl} articleTitle={pageTitle} />
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto font-body text-foreground">
          
          <h3>Abstract</h3>
          <p>
            Rapid urbanization in Ghana is straining food supply chains, increasing food miles, and limiting access to fresh produce for city dwellers. <strong>Vertical farming</strong> offers a solution by enabling food production within urban centers, but conventional high-tech models are often too expensive and energy-intensive for the Ghanaian context. This Masters in Computer Science proposal focuses on designing and testing a hybrid, low-energy vertical farming system that is optimized for the climate and resources of a city like Accra. The research will focus on minimizing electricity consumption by maximizing natural sunlight and developing a closed-loop aquaponics system that uses locally sourced fish and reduces the need for chemical fertilizers.
          </p>

          <h3>Key Research Questions for Vertical Farming in Ghana</h3>
          <ol>
            <li><strong>Energy Efficiency and Light Management:</strong> What is the optimal balance between using natural sunlight (via a greenhouse-style structure) and low-power supplemental LED lighting to minimize energy costs while maximizing yield for popular Ghanaian vegetables like leafy greens ('kontomire') and tomatoes?</li>
            <li><strong>Aquaponics System Optimization:</strong> Can a stable, closed-loop aquaponics system be created using a native Ghanaian fish species like tilapia? The research will determine the ideal fish-to-plant ratio and a method for processing fish waste into a complete nutrient solution for the plants.</li>
            <li><strong>Water and Nutrient Cycling:</strong> How can water usage be minimized through efficient irrigation (e.g., nutrient film technique vs. drip irrigation) and the capture and recycling of evaporated water within a semi-enclosed system?</li>
            <li><strong>Techno-Economic Feasibility:</strong> What is the economic viability of this hybrid vertical farming model for a small-scale urban entrepreneur in Accra? This involves a detailed analysis of setup costs, operational expenses (energy, water, fish feed), and potential revenue from crop sales.</li>
          </ol>

          <h3>Proposed Masters in Computer Science Research: A Hybrid Sunlight-Aquaponics Vertical Farm</h3>
          <p>
            The core of this research is to build and operate a prototype vertical farm in Accra to gather real-world performance data.
          </p>
          <ul>
            <li><strong>Prototype Construction:</strong> Construct a small-scale vertical farm prototype. The structure will be designed to maximize natural light exposure while protecting crops from excessive heat and rain. It will integrate a multi-level hydroponic system with a tilapia-based aquaponics tank.</li>
            <li><strong>System Monitoring:</strong> The prototype will be instrumented with sensors to continuously monitor key parameters: light intensity (natural and LED), temperature, humidity, water pH, nutrient concentration, and energy consumption.</li>
            <li><strong>Crop Trials:</strong> Conduct several growing cycles of local leafy greens and tomatoes. The yield, growth rate, and nutritional content of crops grown in this system will be compared to those grown in a conventional soil-based farm.</li>
            <li><strong>Economic Modeling:</strong> Based on the data collected from the prototype, a detailed financial model will be built to assess the profitability and return on investment for a commercial-scale version of this system in the Ghanaian market.</li>
          </ul>

          <h3>Impact for Ghana and Africa</h3>
          <p>
            This research aims to develop a practical, sustainable, and economically viable blueprint for urban agriculture in West Africa. A successful project would demonstrate a model of vertical farming that is not dependent on high-tech imports or massive energy inputs. It would empower urban communities in Ghana to produce their own fresh, nutritious food, creating jobs, reducing food miles, and building a more resilient urban food system. By open-sourcing the designs and operational data, this work can catalyze the adoption of climate-smart urban agriculture across rapidly growing cities on the African continent.
          </p>
          
        </div>
      </SectionContainer>
    </div>
  );
}
