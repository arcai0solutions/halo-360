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
  metadataBase: new URL('https://halo360.online'),
  icons: {
    icon: '/halo-favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://halo360.online',
    title: 'Halo | Strategic Digital Partner',
    description: 'We transform your vision into reality with custom software solutions and world-class design.',
    siteName: 'Halo',
    images: [
      {
        url: '/halo-shareable.jpeg',
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
    images: ['/halo-shareable.jpeg'],
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
};

import { Preloader } from '@/components/preloader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${ittenoviana.variable}`}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
