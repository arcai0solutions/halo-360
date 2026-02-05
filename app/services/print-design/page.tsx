import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Print Design | Halo',
  description: 'Flyers, brochures, menus & more. We provide high-quality print designs that effectively communicate your message offline.',
};

export default function PrintDesignPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a1a1a]">Print Design</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
             <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg">
                <img 
                    src="/PRINT DESIGN.jpeg" 
                    alt="Print Design" 
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                    Flyers, brochures, menus & more. We provide high-quality print designs that effectively communicate your message offline. In a digital world, tangible marketing materials still have a powerful impact.
                </p>
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Print Services</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center gap-2">
                           <span className="w-2 h-2 bg-black rounded-full"></span> Flyers & Posters
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full"></span> Brochures & Catalogs
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full"></span> Menus & Packaging Design
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full"></span> Business Cards & Stationery
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
