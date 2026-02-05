import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Marketing | Halo',
  description: 'Drive leads & sales with engaging content. We create strategies that resonate with your audience and boost your online presence.',
};

export default function SocialMediaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a1a1a]">Social Media Marketing</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
             <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg">
                <img 
                    src="/social.jpeg" 
                    alt="Social Media Marketing" 
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                    Drive leads & sales with engaging content. We create strategies that resonate with your audience and boost your online presence. Our team of experts will help you navigate the complex world of social media to ensure your brand stands out.
                </p>
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Key Features</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center gap-2">
                           <span className="w-2 h-2 bg-black rounded-full"></span> Content Strategy & Creation
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full"></span> Community Management
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full"></span> Analytics & Performance Tracking
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full"></span> Growth & Engagement Optimization
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
