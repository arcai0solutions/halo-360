import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { AboutPageClient } from '@/components/about-page-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Halo',
  description: 'Learn about Halo, a strategic digital partner blending creativity, strategy, and insights to help businesses thrive.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AboutPageClient />
      <Footer />
    </main>
  );
}
