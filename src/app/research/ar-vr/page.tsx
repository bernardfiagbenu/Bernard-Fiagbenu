import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';
import ArticleHeader from '@/components/research/ArticleHeader';

export const metadata: Metadata = {
  title: 'AR/VR for Education and Training in Ghana - Research',
  description: 'A Masters in Computer Science proposal on using accessible AR and VR to bridge educational gaps in Ghana, focusing on vocational and medical training.',
  openGraph: {
    title: 'AR/VR for Education and Training in Ghana - Research',
    description: 'A Masters in Computer Science proposal on using accessible AR and VR to bridge educational gaps in Ghana, focusing on vocational and medical training.',
    url: '/research/ar-vr',
    type: 'article',
    images: [
      {
        url: 'https://www.bernard.com/placeholder-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AR/VR in an educational setting',
      },
    ],
  },
};

export default function ArVrPage() {
  const pageUrl = "/research/ar-vr";
  const pageTitle = "AR/VR for Education and Training in Ghana";

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="AR/VR for Education and Training in Ghana" subtitle="A Masters in Computer Science Proposal on Accessible Immersive Learning">
        <ArticleHeader articleUrl={pageUrl} articleTitle={pageTitle} />
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto font-body text-foreground">
          
          <h3>Abstract</h3>
          <p>
            Practical, hands-on training is a major challenge in Ghana's education system, especially in vocational fields and healthcare where physical equipment is scarce and expensive. This Masters in Computer Science proposal investigates how <strong>Augmented Reality (AR) and Virtual Reality (VR)</strong>, deployed on low-cost, accessible hardware like smartphones, can bridge this gap. The research focuses on creating and evaluating an AR-based training module for a specific, high-demand skill in Ghana—automotive maintenance—to measure its effectiveness against traditional learning methods and establish a framework for creating scalable immersive educational content.
          </p>

          <h3>Key Research Questions for Immersive Education in Ghana</h3>
          <ol>
            <li><strong>Efficacy on Accessible Hardware:</strong> How effective is smartphone-based AR for teaching complex procedural tasks compared to traditional textbook/manual-based learning? Can it lead to better skill retention and fewer errors?</li>
            <li><strong>Content Authoring for Local Needs:</strong> What is the most efficient workflow for creating culturally and technically relevant AR training content? This involves developing a simplified authoring tool that allows Ghanaian educators and industry experts (e.g., master mechanics) to create their own AR training modules without needing extensive programming knowledge.</li>
            <li><strong>User Experience (UX) in a New Context:</strong> What are the specific UX challenges and design principles for AR applications for first-time users in Ghana, who may have different levels of digital literacy?</li>
            <li><strong>Measuring Cognitive Load and Engagement:</strong> Does AR-based learning increase student engagement and motivation without imposing an excessive cognitive load that could hinder learning?</li>
          </ol>

          <h3>Proposed Masters in Computer Science Research: An AR-Powered Automotive Training System</h3>
          <p>
            The core of this research is to develop and test an AR application that overlays digital instructions and 3D models onto a real-world car engine, guiding students through common maintenance procedures (e.g., changing oil, replacing spark plugs).
          </p>
          <ul>
            <li><strong>Platform Development:</strong> An AR application will be built using a cross-platform framework like Unity with AR Foundation, ensuring it runs on a wide range of Android smartphones common in Ghana.</li>
            <li><strong>3D Content Creation:</strong> A detailed, interactive 3D model of a common car engine will be created. The focus will be on optimizing this model for real-time performance on mid-range mobile devices.</li>
            <li><strong>Controlled Efficacy Study:</strong> A study will be conducted with students from a vocational training institute in Ghana (e.g., Accra Technical Training Centre). One group will learn a procedure using the AR app, while a control group uses traditional printed manuals. Both groups will then be tested on their ability to perform the task on a real engine. Performance metrics will include completion time, number of errors, and skill retention over time.</li>
            <li><strong>Qualitative Feedback:</strong> In-depth interviews and surveys will be conducted with both students and instructors to gather qualitative feedback on usability, engagement, and perceived value.</li>
          </ul>

          <h3>Impact for Ghana and Africa</h3>
          <p>
            This research aims to provide a data-driven validation of AR as a transformative, low-cost tool for vocational education in Africa. A successful project would produce an open-source framework and a set of best practices for developing and deploying AR training solutions on the continent. It could be adapted for a wide range of fields, from nursing and surgical training to equipment operation and repair, democratizing access to high-quality, hands-on education and accelerating skill development for Ghana's youthful population.
          </p>
          
        </div>
      </SectionContainer>
    </div>
  );
}
