'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const services = [
    {
        number: '01',
        title: 'Custom Software Development',
        description: 'Our custom software development services are designed to meet the unique needs of your business. We work closely with you to understand your requirements and deliver solutions that drive growth and efficiency.',
        tags: ['Scalability', 'Flexibility', 'Integration', 'Java', '.NET', 'Python'],
        image: 'https://cdn.prod.website-files.com/6858b3e20ac6c1c654647bd5/685aa96cc0fae4eeb5af1083_Develop%20Thumb.avif',
        href: '/services/software-development'
    },
    {
        number: '02',
        title: 'Web Application Development',
        description: 'We create robust and scalable web applications that enhance user experience and drive business success.',
        tags: ['Angular', 'React', 'Node.js', 'E-commerce platforms', 'CRM systems'],
        image: 'https://cdn.prod.website-files.com/6858b3e20ac6c1c654647bd5/685aa9ad34ace088fafd1083_UX%20Thumb.avif', // Reusing relevant thumb
        href: '/services/web-development'
    },
    {
        number: '03',
        title: 'Mobile Application Development',
        description: 'Our mobile app development services cover iOS and Android platforms, providing seamless user experiences and cutting-edge functionalities.',
        tags: ['Swift', 'Kotlin', 'Flutter', 'Social media apps', 'Financial apps'],
        image: 'https://cdn.prod.website-files.com/6858b3e20ac6c1c654647bd5/685aa93f595699301bf01ee3_Branding%20Thumb.avif', // Reusing relevant thumb
        href: '/services/mobile-development'
    },
    {
        number: '04',
        title: 'Product Design',
        description: 'Our design team focuses on creating user-centric designs that are both visually appealing and functional.',
        tags: ['UI/UX Design', 'Prototyping', 'User Testing', 'Mobile app interfaces'],
        image: 'https://cdn.prod.website-files.com/6858b3e20ac6c1c654647bd5/685aa9ad34ace088fafd1083_UX%20Thumb.avif',
        href: '/services/product-design'
    },
    {
        number: '05',
        title: 'Quality Assurance',
        description: 'We offer comprehensive testing services to ensure your software is reliable, secure, and performs well under all conditions.',
        tags: ['Automated Testing', 'Manual Testing', 'Performance Testing', 'Selenium', 'JIRA'],
        image: 'https://cdn.prod.website-files.com/6858b3e20ac6c1c654647bd5/685aa910c67b5698ad6142e0_Motion%20Thumb.avif',
        href: '/services/qa'
    },
    {
        number: '06',
        title: 'DevOps & Cloud Services',
        description: 'Our DevOps and cloud services help you achieve continuous delivery and scalability.',
        tags: ['Cloud Architecture', 'CI/CD', 'Infrastructure Management', 'AWS', 'Azure'],
        image: 'https://cdn.prod.website-files.com/6858b3e20ac6c1c654647bd5/685aa96cc0fae4eeb5af1083_Develop%20Thumb.avif',
        href: '/services/devops'
    },
    {
        number: '07',
        title: 'Consulting Services',
        description: 'Our consulting services help you navigate the complexities of IT strategy, business analysis, and project management.',
        tags: ['IT Strategy Consulting', 'Business Analysis', 'Project Management'],
        image: 'https://cdn.prod.website-files.com/6858b3e20ac6c1c654647bd5/685aa93f595699301bf01ee3_Branding%20Thumb.avif',
        href: '/services/consulting'
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
                    <Link href={service.href}>
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
