
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from 'next-themes';

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const siteUrl = rawSiteUrl 
  ? (rawSiteUrl.startsWith('http') ? rawSiteUrl : `https://${rawSiteUrl}`) 
  : '';

// Using the LinkedIn profile picture for OG image
const profileImageUrl = "https://media.licdn.com/dms/image/v2/D4E03AQHUX2NRr94X0g/profile-displayphoto-scale_200_200/B4EZhRbogBHIAc-/0/1753712855893?e=1756339200&v=beta&t=ENNu6kVKgGex8c_GZVC_0BtHBKcW6mj4C1CIeB1fVf4"; 

// Generate an SVG favicon with initials "BF"
const faviconUrl = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3e%3crect width='100' height='100' rx='20' fill='%234a00e0'/%3e%3ctext x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-size='50' fill='white' font-family='sans-serif' font-weight='bold'%3eBF%3c/text%3e%3c/svg%3e";

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : null,
  title: {
    default: 'Bernard Fiagbenu | Computer Scientist & Developer in Ghana',
    template: '%s | Bernard Fiagbenu',
  },
  description: 'The digital portfolio of Bernard Fiagbenu, a Computer Scientist and Software Developer based in Ghana, Africa. Specializing in web technologies, innovative tech solutions, and empowering the next generation of African tech leaders.',
  keywords: ['Bernard Fiagbenu', 'Computer Scientist', 'Ghana', 'Africa', 'Software Developer', 'Web Developer', 'Tech Educator', 'Next.js Developer', 'React Developer', 'Portfolio', 'Tech Projects', 'Software Engineering', 'Full-Stack Developer'],
  authors: [{ name: 'Bernard Fiagbenu', url: siteUrl || undefined }],
  creator: 'Bernard Fiagbenu',
  icons: {
    icon: faviconUrl,
  },
  openGraph: {
    title: 'Bernard Fiagbenu | Computer Scientist in Ghana',
    description: 'Digital portfolio of Bernard Fiagbenu, Computer Scientist and Software Engineer based in Ghana, Africa.',
    url: siteUrl || undefined,
    siteName: 'Bernard Fiagbenu Portfolio',
    images: [
      {
        url: profileImageUrl,
        width: 200,
        height: 200,
        alt: 'Bernard Fiagbenu - Profile Picture',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bernard Fiagbenu | Computer Scientist in Ghana',
    description: 'Digital portfolio of Bernard Fiagbenu, Computer Scientist and Software Engineer based in Ghana, Africa.',
    creator: '@FiagbenuBe14283',
    images: [profileImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google9d77f6db261420fa',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "name": "Bernard Fiagbenu | Portfolio",
        "url": siteUrl || undefined,
        "potentialAction": siteUrl ? {
          "@type": "SearchAction",
          "target": `${siteUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        } : undefined,
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        "name": "Bernard Fiagbenu",
        "url": siteUrl || undefined,
        "image": profileImageUrl,
        "jobTitle": ["Computer Scientist", "Software Developer"],
        "nationality": {
          "@type": "Country",
          "name": "Ghana"
        },
        "homeLocation": {
          "@type": "Place",
          "name": "Ghana, Africa"
        },
        "description": "Computer Scientist and Software Developer based in Ghana, Africa, passionate about technology, education, and innovation.",
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "University of the People"
        },
        "sameAs": [
          "https://github.com/bernardfiagbenu",
          "https://www.linkedin.com/in/bernardfiagbenu/"
        ]
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem={false}
            >
              <div className="flex flex-col flex-grow">
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
              </div>
              <Toaster />
            </ThemeProvider>
      </body>
    </html>
  );
}
