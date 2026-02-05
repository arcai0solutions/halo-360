import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ProjectsPageClient } from '@/components/projects-page-client';
import { ApproachSection } from '@/components/approach-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Halo',
  description: 'Explore our portfolio of successful projects in branding, web development, and digital marketing.',
};

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <ProjectsPageClient />
            <ApproachSection />
            <Footer />
        </main>
    );
}
