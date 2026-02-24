import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BRAND, INTEGRATIONS } from '@/config/integrations';

export const metadata: Metadata = {
  title: `${BRAND.name} | Leadership & Organisational Consulting`,
  description:
    'Cross-sector leadership consultancy spanning corporate, care, and start-up environments. Led by Glory Adebanjo-Taiwo.',
  keywords: [
    'leadership consulting',
    'organisational development',
    'care consultancy',
    'servant leadership',
    'coaching',
    'UK',
  ],
  openGraph: {
    title: BRAND.name,
    description: BRAND.tagline,
    type: 'website',
    url: `https://${INTEGRATIONS.domain}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
