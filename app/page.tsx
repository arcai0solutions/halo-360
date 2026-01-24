import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { CategoryMarquee } from '@/components/category-marquee';
import { AboutSection } from '@/components/about-section';
import { ServiceSection } from '@/components/service-section';
import { TechMarquee } from '@/components/tech-marquee';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CategoryMarquee />
      <AboutSection />
      <ServiceSection />
      <TechMarquee />
    </main>
  );
}
