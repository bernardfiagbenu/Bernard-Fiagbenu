
import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';
import ContactForm from '@/components/contact/ContactForm';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Bernard Fiagbenu',
  description: 'Get in touch with Bernard Fiagbenu to discuss projects, collaborations, or opportunities. Contact via email, phone, or the contact form.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="Get In Touch" subtitle="Let's Connect and Create Something Amazing">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-headline font-semibold text-primary mb-6">Contact Information</h2>
            <p className="font-body text-lg text-foreground mb-6">
              I'm always excited to discuss new projects, creative ideas, or opportunities to be part of something innovative. Feel free to reach out to me through any of the following channels, or use the contact form.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <MailIcon className="w-6 h-6 text-accent mr-3" aria-hidden="true" />
                <a href="mailto:bernardfiagbenu1@gmail.com" className="font-body text-foreground hover:text-primary">bernardfiagbenu1@gmail.com</a>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="w-6 h-6 text-accent mr-3" aria-hidden="true" />
                <span className="font-body text-foreground">0598914553</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="w-6 h-6 text-accent mr-3" aria-hidden="true" />
                <span className="font-body text-foreground">Accra, Ghana (Remote Available)</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-headline font-semibold text-primary mb-6">Send Me a Message</h2>
            <ContactForm />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
