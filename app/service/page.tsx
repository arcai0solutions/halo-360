import { Navbar } from '@/components/navbar';
import { ServiceSection } from '@/components/service-section';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our comprehensive digital services including social media marketing, web development, video production, branding, and more.',
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32">
        <ServiceSection />
      </div>
      <Footer />
    </main>
  );
}
