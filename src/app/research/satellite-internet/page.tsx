import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';
import ArticleHeader from '@/components/research/ArticleHeader';

export const metadata: Metadata = {
  title: 'Satellite Internet for Ghana - Research',
  description: 'A Masters in Computer Science proposal on developing resilient, decentralized mesh networks to extend satellite internet coverage in rural Ghana.',
  openGraph: {
    title: 'Satellite Internet for Ghana - Research',
    description: 'A Masters in Computer Science proposal on developing resilient, decentralized mesh networks to extend satellite internet coverage in rural Ghana.',
    url: '/research/satellite-internet',
    type: 'article',
    images: [
      {
        url: 'https://www.bernard.com/placeholder-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Satellite internet dish and rural village',
      },
    ],
  },
};

export default function SatelliteInternetPage() {
  const pageUrl = "/research/satellite-internet";
  const pageTitle = "Satellite Internet and Community Mesh Networks for Rural Ghana";

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="Satellite Internet and Community Mesh Networks for Rural Ghana" subtitle="A Masters in Computer Science Proposal on Bridging the Last-Mile Connectivity Gap">
        <ArticleHeader articleUrl={pageUrl} articleTitle={pageTitle} />
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto font-body text-foreground">
          
          <h3>Abstract</h3>
          <p>
            Low Earth Orbit (LEO) <strong>satellite internet</strong> constellations like Starlink offer the promise of high-speed internet access for previously unconnected areas. However, the cost of a single user terminal is still too high for most individuals in rural Ghana, and a single dish cannot cover an entire community. This Masters in Computer Science proposal addresses this "last-mile" challenge by focusing on the design and optimization of a low-cost, decentralized wireless <strong>mesh network</strong>. The goal is to create a system where a single satellite terminal can provide reliable internet access to an entire village or community, using a robust, self-healing network of low-power radio nodes.
          </p>

          <h3>Key Research Questions for Community Networks in Ghana</h3>
          <ol>
            <li><strong>Optimal Routing Protocol:</strong> Standard mesh routing protocols (like AODV or OLSR) are not optimized for a network topology with a single, high-throughput internet gateway. What is the most efficient routing algorithm for this specific "many-to-one" traffic pattern, minimizing latency and maximizing throughput for users?</li>
            <li><strong>Hardware and Power Management:</strong> What is the most cost-effective and energy-efficient hardware for the mesh nodes? This research will focus on using off-the-shelf hardware like LoRa or Wi-Fi HaLow radios, combined with small solar panels and batteries, to create nodes that can operate off-grid indefinitely.</li>
            <li><strong>Network Management and Quality of Service (QoS):</strong> How can network resources be managed fairly and efficiently? This involves developing a QoS system that can prioritize critical traffic (e.g., for a health clinic's teleconference) over less critical traffic (e.g., video streaming) and prevent any single user from saturating the network.</li>
            <li><strong>Techno-Economic and Social Model:</strong> What is a sustainable business model for a community-owned and operated network? This involves designing a pre-paid voucher system or a subscription model that is affordable for local users and generates enough revenue to maintain the network.</li>
          </ol>

          <h3>Proposed Masters in Computer Science Research: A Self-Optimizing Mesh Network Protocol</h3>
          <p>
            The core of this research is to develop and field-test a new routing protocol and management system for community mesh networks connected to a satellite backhaul.
          </p>
          <ul>
            <li><strong>Protocol Development and Simulation:</strong> A new, "gateway-aware" routing protocol will be designed. Its performance will be extensively tested in a network simulator (like ns-3) and compared against existing protocols under realistic Ghanaian network conditions (e.g., node failures, signal interference).</li>
            <li><strong>Prototype Network Deployment:</strong> A small-scale, 10-15 node prototype mesh network will be deployed in a rural community in Ghana. The network will be powered by a single Starlink terminal and solar-powered mesh nodes.</li>
            <li><strong>Real-World Performance Analysis:</strong> The network's performance will be monitored over several months, collecting data on throughput, latency, packet loss, and uptime. This data will be used to further refine the routing protocol and the QoS system.</li>
            <li><strong>Community-Based Co-Design:</strong> The project will be conducted in close collaboration with the local community. Community members will be trained to help maintain the network, and their feedback will be used to design the user interface for accessing the network and managing payments.</li>
          </ul>

          <h3>Impact for Ghana and Africa</h3>
          <p>
            This research addresses the most critical barrier to digital inclusion in Africa: affordable last-mile access. A successful project would produce an open-source, replicable blueprint for how communities can build and manage their own internet infrastructure. This would be a powerful alternative to waiting for large telecom companies to expand their services. It would empower villages, schools, and clinics across Ghana and the continent with the connectivity needed for modern education, healthcare, and commerce. By fostering a model of decentralized, community-owned infrastructure, this research provides a pathway to a more equitable and resilient digital future for Africa.
          </p>
          
        </div>
      </SectionContainer>
    </div>
  );
}
