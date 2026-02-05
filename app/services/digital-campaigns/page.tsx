import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Campaigns | Halo',
  description: 'Integrated multi-platform strategies. We design cohesive campaigns that reach your target audience across various digital channels.',
};

export default function DigitalCampaignsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a1a1a]">Digital Campaigns</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
             <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg">
                <img 
                    src="/DIGITAL CAMPAIGNS.jpeg" 
                    alt="Digital Campaigns" 
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                    Integrated multi-platform strategies. We design cohesive campaigns that reach your target audience across various digital channels. From PPC ads to viral social challenges, we manage campaigns that deliver ROI.
                </p>
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Strategic Services</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center gap-2">
                           <span className="w-2 h-2 bg-black rounded-full"></span> Campaign Strategy & Planning
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full"></span> Multi-platform Integration
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full"></span> Paid Advertising (PPC, Social Ads)
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full"></span> Conversion Rate Optimization
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
