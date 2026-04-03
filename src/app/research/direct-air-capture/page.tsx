import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';
import ArticleHeader from '@/components/research/ArticleHeader';

export const metadata: Metadata = {
  title: 'Direct Air Capture (DAC) - Research',
  description: 'A deep dive into Direct Air Capture (DAC), exploring its challenges, research directions, and ethical implications.',
  openGraph: {
    title: 'Direct Air Capture (DAC) - Research',
    description: 'A deep dive into Direct Air Capture (DAC), exploring its challenges, research directions, and ethical implications.',
    url: '/research/direct-air-capture',
    type: 'article',
    images: [
      {
        url: 'https://www.bernard.com/placeholder-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Direct Air Capture facility illustration',
      },
    ],
  },
};

export default function DirectAirCapturePage() {
  const pageUrl = "/research/direct-air-capture";
  const pageTitle = "Direct Air Capture (DAC) for Ghana's Energy and Climate Strategy";

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="Direct Air Capture (DAC) for Ghana's Energy and Climate Strategy" subtitle="A Masters in Computer Science Proposal on Systems Integration and Techno-Economic Analysis">
        <ArticleHeader articleUrl={pageUrl} articleTitle={pageTitle} />
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto font-body text-foreground">
          
          <h3>Abstract</h3>
          <p>
            <strong>Direct Air Capture (DAC)</strong> is an essential technology for achieving global net-zero emissions. For Ghana, a nation committed to climate action under the Paris Agreement yet poised for significant economic growth, DAC presents a strategic opportunity to pioneer a carbon-neutral or even carbon-negative development pathway. This Masters in Computer Science research proposal outlines a techno-economic and systems-level analysis for deploying DAC in Ghana, focusing on the critical challenge of integrating DAC with the nation's abundant but intermittent solar energy resources. The aim is to develop a decision-making framework for the optimal design and operation of a solar-powered DAC facility in a Ghanaian context.
          </p>

          <h3>Key Research Questions for DAC in Ghana</h3>
          <ul>
            <li><strong>Energy Systems Integration:</strong> What is the optimal configuration of solar PV, battery storage, and DAC operational scheduling to minimize the Levelized Cost of Capture (LCOC) in a location like Northern Ghana, where solar irradiance is high? How does this integrated system interact with the national grid?</li>
            <li><strong>Material Sourcing and Performance:</strong> Can locally sourced materials in Ghana (e.g., mineral waste from mining, agricultural byproducts) be processed into viable sorbents for DAC? This sub-objective would involve material characterization and testing under Ghanaian climate conditions (high temperature and humidity).</li>
            <li><strong>Water-Energy-Carbon Nexus:</strong> DAC processes can be water-intensive. This research will model the water requirements of different DAC technologies (e.g., solid sorbent vs. liquid solvent) and explore strategies for water conservation, such as atmospheric water harvesting, in a Ghanaian context.</li>
            <li><strong>CO₂ Utilization and Sequestration:</strong> What are the most viable pathways for the captured CO₂? This proposal will analyze the potential for geological sequestration in offshore basins (like the Tano Basin) versus its utilization in products like "green" concrete or synthetic fuels, creating a value chain within Ghana.</li>
          </ul>

          <h3>Proposed Masters in Computer Science Research: Model-Predictive Control for a Solar-Powered DAC Plant</h3>
          <p>
            The core of this thesis will be the development of a dynamic, multi-objective optimization model for a solid-sorbent DAC plant powered by a dedicated solar farm and battery energy storage system (BESS).
          </p>
          <p>
            <strong>Methods:</strong>
          </p>
          <ul>
            <li><strong>Dynamic Process Modeling:</strong> A first-principles model of a temperature-vacuum swing adsorption (TVSA) DAC process will be developed. This model will capture the process dynamics, energy consumption, and degradation of the sorbent.</li>
            <li><strong>Renewable Energy Modeling:</strong> Using high-resolution solar irradiance and temperature data for a specific site in Northern Ghana, a detailed model of the solar PV and BESS performance will be created.</li>
            <li><strong>Optimal Control Framework:</strong> A Model-Predictive Control (MPC) strategy will be designed to operate the DAC plant. The MPC will, at each time step, solve an optimization problem to decide the operational mode (e.g., absorption, regeneration, standby) that minimizes cost while respecting the constraints of the available solar energy and grid conditions.</li>
            <li><strong>Techno-Economic Analysis:</strong> The model will be used to run year-long simulations to determine the LCOC, net carbon removal efficiency, and overall profitability under various policy scenarios (e.g., a carbon price, renewable energy credits).</li>
          </ul>

          <h3>Expected Outcomes and Impact for Ghana</h3>
          <p>
            This research will produce a sophisticated, open-source tool for designing and operating renewable-powered DAC plants in Ghana and other similar regions in Africa. It will provide the first detailed, data-driven analysis of DAC's feasibility in West Africa, creating a roadmap for investment and policy-making. By identifying pathways for using local materials and creating new value chains, this work will frame carbon removal not as a cost but as an engine for sustainable industrial development in Ghana. The project will address the ethical dimensions by including a framework for community benefit-sharing and ensuring that DAC is pursued as a complement to, not a replacement for, aggressive emissions reduction.
          </p>

        </div>
      </SectionContainer>
    </div>
  );
}
