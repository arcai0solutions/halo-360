import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ContactPageClient } from '@/components/contact-page-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Halo',
  description: 'Get in touch with Halo for your next digital project. Call, email, or visit us in Colombo.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ContactPageClient />
      <Footer />
    </main>
  );
}
