'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const services = [
    {
        number: '01',
        title: 'SOCIAL MEDIA MARKETING',
        description: 'Drive leads & sales with engaging content. We create strategies that resonate with your audience and boost your online presence.',
        tags: ['Content Strategy', 'Community Management', 'Analytics', 'Growth'],
        image: '/social.jpeg',
        href: '/services/social-media'
    },
    {
        number: '02',
        title: 'WEB DEVELOPMENT & MANAGEMENT',
        description: 'Fast, secure & user-friendly websites. We build scalable solutions that enhance user experience and drive business success.',
        tags: ['Frontend', 'Backend', 'CMS', 'Maintenance', 'Security'],
        image: '/web.jpeg',
        href: '/services/web-development'
    },
    {
        number: '03',
        title: 'VIDEO & REELS',
        description: 'Product shoots, reels & cinematic edits. We bring your brand to life with high-quality video content that captures attention.',
        tags: ['Videography', 'Editing', 'Social Reels', 'Product Shoots'],
        image: '/video.jpeg',
        href: '/services/video-reels'
    },
    {
        number: '04',
        title: 'BRANDING & DESIGN',
        description: 'Unique logos, profiles & standout visuals. We craft distinctive brand identities that make a lasting impression.',
        tags: ['Logo Design', 'Brand Identity', 'Visuals', 'Graphic Design'],
        image: '/Branding.jpeg',
        href: '/services/branding'
    },
    {
        number: '05',
        title: 'PRINT DESIGN',
        description: 'Flyers, brochures, menus & more. We provide high-quality print designs that effectively communicate your message offline.',
        tags: ['Flyers', 'Brochures', 'Menus', 'Packaging'],
        image: '/PRINT DESIGN.jpeg',
        href: '/services/print-design'
    },
    {
        number: '06',
        title: 'DIGITAL CAMPAIGNS',
        description: 'Integrated multi-platform strategies. We design cohesive campaigns that reach your target audience across various digital channels.',
        tags: ['Strategy', 'Multi-platform', 'Ads', 'Conversion'],
        image: '/DIGITAL CAMPAIGNS.jpeg',
        href: '/services/digital-campaigns'
    }
];

export function ServiceSection() {
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">

                {/* Section Header */}
                <motion.div
                    className="mb-20 space-y-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <div className="flex items-center gap-2 text-[#FF5722]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 25 24" fill="currentColor" className="w-5 h-5">
                            <path d="M2 13.125C8.98287 14.7037 9.5 21.75 9.5 21.75C9.5 21.75 10.0171 14.7037 17 13.125C10.0171 11.5463 9.5 4.5 9.5 4.5C9.5 4.5 8.98287 11.5463 2 13.125ZM14.75 18C18.5904 18.825 18.875 22.5 18.875 22.5C18.875 22.5 19.1596 18.825 23 18C19.1596 17.175 18.875 13.5 18.875 13.5C18.875 13.5 18.5904 17.175 14.75 18ZM12.125 6C15.9654 6.825 16.25 10.5 16.25 10.5C16.25 10.5 16.5346 6.825 20.375 6C16.5346 5.175 16.25 1.5 16.25 1.5C16.25 1.5 15.9654 5.175 12.125 6Z"></path>
                        </svg>
                        <span className="text-lg font-medium">What we offer</span>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold text-[#1a1a1a] max-w-2xl leading-tight">
                            We Craft Services That Turn Brands
                        </h2>
                        <p className="text-gray-600 max-w-lg text-lg">
                            Our services help you create digital products and solve your problems objectively, strategy, technology and analysis.
                        </p>
                    </div>
                </motion.div>

                {/* Services List */}
                <div className="flex flex-col gap-24">
                    {services.map((service, index) => (
                        <ServiceItem key={index} service={service} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
}

function ServiceItem({ service, index }: { service: any, index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            className="group grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-b border-gray-100 pb-24 last:border-0 last:pb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >

            {/* Left Column: Info */}
            <div className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
                <span className="text-lg font-medium text-gray-500">{service.number}</span>
                <h3 className="text-3xl md:text-4xl font-semibold text-[#1a1a1a]">{service.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                </p>
            </div>

            {/* Center Column: Image */}
            <div className="lg:col-span-4 flex justify-center order-1 lg:order-2 perspective-1000">
                <div className="relative w-full aspect-square max-w-[400px] transition-transform duration-700 ease-out transform group-hover:rotate-6 group-hover:scale-105 rotate-0 lg:rotate-[15deg] overflow-hidden rounded-md shadow-2xl">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Right Column: Tags & CTA */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full gap-8 order-3 pl-0 lg:pl-10 pt-4">
                <div className="space-y-4">
                    {service.tags.map((tag: string, idx: number) => (
                        <h5 key={idx} className="text-xl font-medium text-[#1a1a1a] border-l-2 border-transparent hover:border-[#FF5722] hover:pl-4 transition-all duration-300 cursor-default">
                            {tag}
                        </h5>
                    ))}
                </div>

                <div className="pt-4">
                    <Link href="/projects">
                        <Button
                            variant="outline"
                            className="h-12 px-8 rounded-full border border-gray-200 text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors group/btn"
                        >
                            <span className="mr-2">See work</span>
                            <span className="transform transition-transform group-hover/btn:translate-x-1">→</span>
                        </Button>
                    </Link>
                </div>
            </div>

        </motion.div>
    );
}
