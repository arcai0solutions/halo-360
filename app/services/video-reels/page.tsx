import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video & Reels | Halo',
  description: 'Product shoots, reels & cinematic edits. We bring your brand to life with high-quality video content that captures attention.',
};

export default function VideoReelsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a1a1a]">Video & Reels Production</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
             <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg">
                <img 
                    src="/video.jpeg" 
                    alt="Video & Reels" 
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                    Product shoots, reels & cinematic edits. We bring your brand to life with high-quality video content that captures attention. Video is the most powerful way to tell your story, and we make sure yours is told beautifully.
                </p>
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Services Include</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center gap-2">
                           <span className="w-2 h-2 bg-black rounded-full"></span> Professional Videography
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full"></span> Creative Editing & Post-Production
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full"></span> Social Media Reels & Shorts
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full"></span> Product Photography & Videography
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
