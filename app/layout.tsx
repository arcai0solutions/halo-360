import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });
const ittenoviana = localFont({
  src: '../public/ITTENOVIANADEMO-Regular.otf',
  variable: '--font-ittenoviana',
});

export const metadata: Metadata = {
  title: {
    default: 'Halo | Strategic Digital Partner',
    template: '%s | Halo'
  },
  description: 'Halo is your dedicated digital partner. We specialize in custom software development, web & mobile apps, product design, and digital strategy to drive innovation.',
  keywords: ['Halo', 'Digital Agency', 'Software Development', 'Web Development', 'Mobile Apps', 'Product Design', 'UI/UX', 'Digital Strategy', 'Business Growth'],
  authors: [{ name: 'Halo' }],
  creator: 'Halo',
  metadataBase: new URL('https://sanlabz.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sanlabz.com',
    title: 'Halo | Strategic Digital Partner',
    description: 'We transform your vision into reality with custom software solutions and world-class design.',
    siteName: 'Halo',
    images: [
      {
        url: '/og-image.png', // Assuming a default OG image path or reusing a known one
        width: 1200,
        height: 630,
        alt: 'Halo - Strategic Digital Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Halo | Strategic Digital Partner',
    description: 'We transform your vision into reality with custom software solutions and world-class design.',
    images: ['/og-image.png'],
    creator: '@halo', // Placeholder handle
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
      <body className={`${inter.className} ${ittenoviana.variable}`}>{children}</body>
    </html>
  );
}
