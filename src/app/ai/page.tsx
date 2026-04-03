
import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';
import Chatbot from '@/components/ai/Chatbot';

export const metadata: Metadata = {
  title: 'A.I. Playground by Bernard Fiagbenu',
  description: 'A collection of A.I. projects by Bernard Fiagbenu, showcasing experiments with large language models, computer vision, and other AI technologies.',
};

export default function AiPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="A.I. Playground" subtitle="Experiments with Generative AI">
        <div className="space-y-12">
          <Chatbot />
        </div>
      </SectionContainer>
    </div>
  );
}
