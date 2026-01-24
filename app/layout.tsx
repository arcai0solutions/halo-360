import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Sanlabz | Strategic Digital Partner',
    template: '%s | Sanlabz'
  },
  description: 'Sanlabz is your dedicated digital partner. We specialize in custom software development, web & mobile apps, product design, and digital strategy to drive innovation.',
  keywords: ['Sanlabz', 'Digital Agency', 'Software Development', 'Web Development', 'Mobile Apps', 'Product Design', 'UI/UX', 'Digital Strategy', 'Business Growth'],
  authors: [{ name: 'Sanlabz' }],
  creator: 'Sanlabz',
  metadataBase: new URL('https://sanlabz.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sanlabz.com',
    title: 'Sanlabz | Strategic Digital Partner',
    description: 'We transform your vision into reality with custom software solutions and world-class design.',
    siteName: 'Sanlabz',
    images: [
      {
        url: '/og-image.png', // Assuming a default OG image path or reusing a known one
        width: 1200,
        height: 630,
        alt: 'Sanlabz - Strategic Digital Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanlabz | Strategic Digital Partner',
    description: 'We transform your vision into reality with custom software solutions and world-class design.',
    images: ['/og-image.png'],
    creator: '@sanlabz', // Placeholder handle
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
