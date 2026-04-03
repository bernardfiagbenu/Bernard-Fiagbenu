import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';
import ArticleHeader from '@/components/research/ArticleHeader';

export const metadata: Metadata = {
  title: 'Autonomous Vehicles for Ghanaian Logistics - Research',
  description: 'A Masters in Computer Science proposal on developing robust, low-cost autonomous ground and aerial vehicles for Ghana\'s unique logistical challenges.',
  openGraph: {
    title: 'Autonomous Vehicles for Ghanaian Logistics - Research',
    description: 'A Masters in Computer Science proposal on developing robust, low-cost autonomous ground and aerial vehicles for Ghana\'s unique logistical challenges.',
    url: '/research/autonomous-vehicles',
    type: 'article',
    images: [
      {
        url: 'https://www.bernard.com/placeholder-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Autonomous delivery drone',
      },
    ],
  },
};

export default function AutonomousVehiclesPage() {
  const pageUrl = "/research/autonomous-vehicles";
  const pageTitle = "Autonomous Vehicles for Ghanaian Logistics";

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="Autonomous Vehicles for Ghanaian Logistics" subtitle="A Masters in Computer Science Proposal on Resilient and Low-Cost Autonomous Systems">
        <ArticleHeader articleUrl={pageUrl} articleTitle={pageTitle} />
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto font-body text-foreground">
          
          <h3>Abstract</h3>
          <p>
            The "last-mile" delivery problem is a significant bottleneck in Ghana's supply chain, particularly for agriculture and healthcare. Poor road infrastructure, informal addressing systems, and traffic congestion make conventional logistics inefficient and costly. This Masters in Computer Science research proposal outlines a framework for developing a tiered system of autonomous ground vehicles (AGVs) and unmanned aerial vehicles (UAVs or drones) tailored to overcome these uniquely Ghanaian challenges. The research will focus on robust, low-cost sensor fusion and path-planning algorithms that can operate effectively in GPS-denied or unreliable environments, using computer vision and SLAM (Simultaneous Localization and Mapping).
          </p>

          <h3>Key Research Questions for Autonomous Systems in Ghana</h3>
          <ol>
            <li><strong>Robust Localization and Mapping:</strong> How can we develop a lightweight, vision-based SLAM algorithm that can create and navigate using maps of semi-structured and off-road environments, typical of rural Ghana, using only low-cost monocular cameras?</li>
            <li><strong>Sensor Fusion for Affordability:</strong> What is the optimal sensor suite for a low-cost delivery drone or AGV in Ghana? This research will investigate the trade-offs between expensive sensors like LiDAR and a more affordable combination of cameras, IMUs, and potentially sonar.</li>
            <li><strong>Dynamic Path Planning:</strong> How can autonomous agents dynamically re-plan their routes in response to unpredictable obstacles, such as temporary market stalls, roaming livestock, or flooded roads, which are common in Ghanaian urban and rural settings?</li>
            <li><strong>Human-Robot Interaction:</strong> How can we design an intuitive interface (e.g., a simple USSD or SMS-based system) for users in rural communities to request a delivery or pickup, and to safely interact with the autonomous vehicle upon its arrival?</li>
          </ol>

          <h3>Proposed Masters in Computer Science Research: A Vision-Based SLAM for Last-Mile Drone Delivery</h3>
          <p>
            This thesis will focus on creating a robust navigation system for a small, autonomous quadcopter designed for delivering critical medical supplies (e.g., vaccines, anti-venom) to remote clinics in Ghana.
          </p>
          <ul>
            <li><strong>Dataset Curation:</strong> A unique dataset of video footage from Ghanaian rural and peri-urban areas will be collected to train and test the navigation algorithms. This will capture the specific visual features of the local environment.</li>
            <li><strong>Algorithm Development:</strong> A novel Direct Visual SLAM algorithm will be developed. Unlike feature-based methods, this approach can work well in the visually repetitive but texturally rich environments found in Ghana. The algorithm will be optimized to run on a low-power, embedded computer suitable for a drone.</li>
            <li><strong>Hardware Integration:</strong> The algorithm will be deployed on a custom-built quadcopter platform using affordable, off-the-shelf components.</li>
            <li><strong>Simulation and Field Testing:</strong> The system will first be tested extensively in a high-fidelity simulator (e.g., AirSim). The core of the research will be a series of field tests in a controlled area in Ghana, evaluating the drone's ability to navigate a predefined path and land at a target location without relying on GPS.</li>
          </ul>

          <h3>Broader Impact for Ghana and Africa</h3>
          <p>
            A successful outcome will provide a blueprint for affordable, resilient autonomous logistics systems that can be deployed across Africa. This technology could revolutionize healthcare delivery, connect smallholder farmers to larger markets, and create a new high-tech industry in Ghana focused on robotics and AI. By focusing on low-cost, vision-based navigation, this research bypasses the need for expensive satellite infrastructure, making the solution scalable and locally maintainable.
          </p>
          
        </div>
      </SectionContainer>
    </div>
  );
}
