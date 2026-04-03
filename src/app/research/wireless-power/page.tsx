import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';
import ArticleHeader from '@/components/research/ArticleHeader';

export const metadata: Metadata = {
  title: 'Wireless Power at Scale - Research',
  description: 'A Masters in Computer Science proposal on developing efficient, long-range wireless power transmission for applications in Ghana.',
  openGraph: {
    title: 'Wireless Power at Scale - Research',
    description: 'A Masters in Computer Science proposal on developing efficient, long-range wireless power transmission for applications in Ghana.',
    url: '/research/wireless-power',
    type: 'article',
    images: [
      {
        url: 'https://www.bernard.com/placeholder-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wireless power transmission concept',
      },
    ],
  },
};

export default function WirelessPowerPage() {
  const pageUrl = "/research/wireless-power";
  const pageTitle = "Wireless Power Transmission for Rural Ghana";

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="Wireless Power Transmission for Rural Ghana" subtitle="A Masters in Computer Science Proposal on Resonant Beamforming for Off-Grid Applications">
        <ArticleHeader articleUrl={pageUrl} articleTitle={pageTitle} />
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto font-body text-foreground">
          
          <h3>Abstract</h3>
          <p>
            Extending the electrical grid to remote and rural areas of Ghana is economically challenging and logistically complex. <strong>Wireless power transmission (WPT)</strong> offers a radical alternative for powering low-power devices and sensors in these off-grid locations. While near-field WPT (like Qi chargers) is common, long-range WPT remains inefficient. This Masters in Computer Science proposal focuses on developing a highly efficient, long-range WPT system using microwave beamforming and metamaterial-based rectifying antennas ("rectennas"). The goal is to create a system that can safely and efficiently power multiple devices within a small village or on a farm from a central, solar-powered transmitter.
          </p>

          <h3>Key Research Questions in Long-Range WPT for Ghana</h3>
          <ol>
            <li><strong>Dynamic Beamforming:</strong> How can a phased-array antenna be controlled in real-time to create a narrow, steerable microwave beam that can accurately and safely track multiple moving devices (e.g., sensors on livestock, a mobile phone)?</li>
            <li><strong>Metamaterial Rectenna Design:</strong> Can a low-cost, high-efficiency rectenna be designed using metamaterials to maximize the capture of microwave energy and its conversion into DC electricity? The design must be robust to the environmental conditions in Ghana.</li>
            <li><strong>Safety and Bio-Compatibility:</strong> What is a safe power level for microwave transmission in this application? The research will involve detailed modeling of electromagnetic field exposure to ensure the system operates well within international safety standards.</li>
            <li><strong>System-Level Efficiency:</strong> What is the end-to-end efficiency of the entire system, from the DC power at the solar panel to the DC power delivered to the device? This involves optimizing the efficiency of the transmitter, the beamforming algorithm, and the rectenna.</li>
          </ol>

          <h3>Proposed Masters in Computer Science Research: A Multi-Device Resonant Beamforming System</h3>
          <p>
            The core of this research is to build and test a prototype WPT system capable of powering several devices at a range of tens of meters.
          </p>
          <ul>
            <li><strong>Phased-Array Transmitter:</strong> Design and build a software-defined phased-array antenna operating in the 5.8 GHz ISM band. A key innovation will be the development of a feedback-based algorithm where the target device communicates its position back to the transmitter (e.g., via a low-power Bluetooth signal) to allow for precise beam-steering.</li>
            <li><strong>Metamaterial Rectenna Fabrication:</strong> Design a novel rectenna using a metasurface that focuses incoming microwave energy onto a high-efficiency rectifying diode. The rectenna will be fabricated using standard printed circuit board (PCB) technology to keep costs low.</li>
            <li><strong>System Integration and Testing:</strong> Integrate the transmitter and several rectennas into a complete system. The system's performance will be characterized in a lab environment, measuring the power delivered to each device, the end-to-end efficiency, and the beam-steering accuracy.</li>
            <li><strong>Field Demonstration:</strong> A small-scale field test will be conducted in a rural setting in Ghana. The system will be used to power a network of simple environmental sensors (e.g., temperature and humidity sensors) on a small farm, demonstrating its viability for real-world applications like precision agriculture.</li>
          </ul>

          <h3>Impact for Ghana and Africa</h3>
          <p>
            This research could unlock a new way of delivering power to the "last hundred meters" in Africa. A successful WPT system would eliminate the need for charging cables, disposable batteries, and individual solar panels for a vast range of low-power devices. This could revolutionize applications in agriculture (powering sensor networks for irrigation), healthcare (powering remote health monitors), and education (charging low-cost tablets in rural schools). By developing expertise in this frontier technology, Ghana could become a leader in designing and manufacturing WPT systems tailored for the unique challenges and opportunities of the African market, creating a new, high-tech industry and accelerating digital inclusion.
          </p>
          
        </div>
      </SectionContainer>
    </div>
  );
}
