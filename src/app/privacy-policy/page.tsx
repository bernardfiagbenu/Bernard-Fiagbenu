
import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for the portfolio website of Bernard Fiagbenu. Learn how your data is handled.',
  robots: { // No need to index privacy policy typically
    index: false,
    follow: true,
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="Privacy Policy" subtitle="Your privacy is important to us.">
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto font-body text-foreground">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <p>
            This Privacy Policy describes how Bernard Fiagbenu ("I", "me", or "my") collects, uses, and discloses your
            information in connection with your use of my portfolio website (the "Site").
          </p>

          <h2>Information I Collect</h2>
          <p>
            As this is a portfolio website, I aim to collect minimal personal information.
          </p>
          <ul>
            <li>
              <strong>Contact Information:</strong> If you use the contact form (which redirects to an email client), your email
              application will handle your name, email address, and the message content. I do not store this information
              directly on the Site's servers through the form itself. I will receive this information as an email.
            </li>
            <li>
              <strong>Usage Data:</strong> Like most websites, this Site may use hosting provider analytics (e.g., Firebase Hosting, Vercel Analytics)
              or third-party services like Google Analytics (if implemented) to collect standard internet log information and details
              of visitor behavior patterns. This may include your IP address, browser type, operating system, referring URLs,
              pages viewed, and the dates/times of your visits. This data is primarily used to understand website traffic and improve the user experience.
            </li>
          </ul>

          <h2>How I Use Your Information</h2>
          <ul>
            <li>
              <strong>To Respond to Inquiries:</strong> If you contact me, I will use your information to respond to your requests or inquiries.
            </li>
            <li>
              <strong>To Improve the Site:</strong> I may use aggregated and anonymized usage data to analyze trends, administer the Site,
              track users' movements around the Site, and gather demographic information about my user base as a whole.
            </li>
            <li>
              <strong>For AdSense (If Applicable):</strong> If this site uses Google AdSense, Google and its partners use cookies to serve ads based on a user's prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to this site and/or other sites on the Internet. Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Ads Settings</a>.
            </li>
          </ul>
          
          <h2>Cookies</h2>
          <p>
            Cookies are small files placed on your device. This Site may use cookies for:
          </p>
          <ul>
              <li><strong>Essential Functions:</strong> Such as theme preferences.</li>
              <li><strong>Analytics:</strong> If Google Analytics or similar services are used, they will place cookies to track usage.</li>
              <li><strong>Advertising:</strong> If Google AdSense is enabled, it will use cookies to serve personalized ads. You can manage your ad preferences through Google's Ad Settings.
              Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.
              </li>
          </ul>
          <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you
            do not accept cookies, some Vparts of our Site may not function properly.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            This site may integrate with third-party services, such as:
          </p>
          <ul>
              <li><strong>Google AdSense:</strong> For displaying advertisements. Google's privacy policy can be found <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">here</a>.</li>
              <li><strong>Hosting Providers (e.g., Firebase, Vercel):</strong> These services may collect analytics data.</li>
              <li><strong>Social Media Platforms:</strong> Links to my social media profiles are provided. Interacting with these links may take you to third-party sites with their own privacy policies.</li>
          </ul>
          
          <h2>Data Security</h2>
          <p>
            I take reasonable measures to protect the information I collect. However, no website or internet transmission
            is completely secure, and I cannot guarantee the security of your personal information.
          </p>

          <h2>Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, such as the right
            to access, correct, or delete your data. Please contact me if you wish to exercise these rights.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            This Site is not intended for individuals under the age of 13. I do not knowingly collect personal
            information from children under 13.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            I may update this Privacy Policy from time to time. I will notify you of any changes by posting the new
            Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2>Contact Me</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact me at: <a href="mailto:bernardfiagbenu1@gmail.com">bernardfiagbenu1@gmail.com</a>.
          </p>
        </div>
      </SectionContainer>
    </div>
  );
}
