import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development & Management | Halo',
  description: 'Fast, secure & user-friendly websites. We build scalable solutions that enhance user experience and drive business success.',
};

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a1a1a]">Web Development & Management</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
             <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg">
                <img 
                    src="/web.jpeg" 
                    alt="Web Development" 
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                    Fast, secure & user-friendly websites. We build scalable solutions that enhance user experience and drive business success. From simple landing pages to complex web applications, we have the expertise to bring your vision to life.
                </p>
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Our Expertise</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center gap-2">
                           <span className="w-2 h-2 bg-black rounded-full"></span> Frontend Development (React, Next.js)
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full"></span> Backend Development & API Integration
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full"></span> CMS Implementation
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full"></span> Maintenance & Security Updates
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
