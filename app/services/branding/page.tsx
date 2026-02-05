import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Branding & Design | Halo',
  description: 'Unique logos, profiles & standout visuals. We craft distinctive brand identities that make a lasting impression.',
};

export default function BrandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a1a1a]">Branding & Design</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
             <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg">
                <img 
                    src="/Branding.jpeg" 
                    alt="Branding & Design" 
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                    Unique logos, profiles & standout visuals. We craft distinctive brand identities that make a lasting impression. Your brand is more than just a logo; it's the entire experience your customers have with your business.
                </p>
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Our Design Solutions</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center gap-2">
                           <span className="w-2 h-2 bg-black rounded-full"></span> Logo Design & Brand Guidelines
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full"></span> Brand Identity Development
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full"></span> Visual Assets & Graphics
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full"></span> Graphic Design for Digital & Print
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
