'use client';

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const industries = [
    {
        title: 'School Management',
        tags: ['Application', 'Software'],
        image: 'https://sanlabz.com/wp-content/uploads/2023/09/p16.jpg',
        description: 'In the education sector, we provide comprehensive school management solutions that streamline administrative processes, enhance communication, and improve the overall learning experience. Our platforms enable schools to manage everything from attendance tracking and grade management to parent-teacher communication and student progress monitoring. We understand the critical role that education plays in shaping the future, and our solutions are designed to empower educators and administrators to focus on what matters most—providing quality education.',
        href: '/portfolio/school-management'
    },
    {
        title: 'Logistics and Ports',
        tags: ['Application', 'Data Security', 'Logistics', 'Software'],
        image: 'https://sanlabz.com/wp-content/uploads/2023/09/p19.jpg',
        description: 'In the logistics and port management sector, we offer robust solutions that optimize the movement of goods and streamline operations, to handle the complexities of logistics, from inventory management and tracking to supply chain coordination and port operations. We help our clients increase efficiency, reduce costs, and improve the overall flow of goods, ensuring that they remain competitive in a fast-paced global market.',
        href: '/portfolio/logistics-ports'
    },
    {
        title: 'Health Care Management',
        tags: ['Application', 'Design'],
        image: 'https://sanlabz.com/wp-content/uploads/2023/07/b3.jpg',
        description: 'Our healthcare management systems are developed to meet the stringent demands of the medical field, ensuring that healthcare providers can deliver exceptional care with efficiency and accuracy. We specialize in creating solutions that manage patient records, appointment scheduling, billing, and telemedicine, all while ensuring compliance with industry regulations. By leveraging our technology, healthcare institutions can enhance patient care, reduce operational costs, and stay ahead in a rapidly evolving industry.',
        href: '/portfolio/healthcare-management'
    }
];

export function SpecializedIndustries() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Map scroll progress to active slide index
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const newIndex = Math.min(Math.floor(latest * industries.length), industries.length - 1);
        if (newIndex !== activeIndex && newIndex >= 0) {
            setActiveIndex(newIndex);
        }
    });

    // Transform for slide positions
    const slideProgress = useTransform(scrollYProgress, [0, 1], [0, industries.length - 1]);

    return (
        <div
            ref={containerRef}
            className="relative"
            style={{ height: `${(industries.length + 1) * 100}vh` }}
        >
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-white">
                <div className="container h-full px-4 md:px-6 mx-auto flex flex-col justify-center py-12">

                    {/* Section Header */}
                    <motion.div
                        className="mb-8 md:mb-12 space-y-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 text-[#FF5722]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 25 24" fill="currentColor" className="w-5 h-5">
                                <path d="M2 13.125C8.98287 14.7037 9.5 21.75 9.5 21.75C9.5 21.75 10.0171 14.7037 17 13.125C10.0171 11.5463 9.5 4.5 9.5 4.5C9.5 4.5 8.98287 11.5463 2 13.125ZM14.75 18C18.5904 18.825 18.875 22.5 18.875 22.5C18.875 22.5 19.1596 18.825 23 18C19.1596 17.175 18.875 13.5 18.875 13.5C18.875 13.5 18.5904 17.175 14.75 18ZM12.125 6C15.9654 6.825 16.25 10.5 16.25 10.5C16.25 10.5 16.5346 6.825 20.375 6C16.5346 5.175 16.25 1.5 16.25 1.5C16.25 1.5 15.9654 5.175 12.125 6Z"></path>
                            </svg>
                            <span className="text-lg font-medium">Industries we serve</span>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1a1a1a] max-w-xl leading-tight">
                                Specialized Industries
                            </h2>
                            <p className="text-gray-600 max-w-xl text-base lg:text-lg leading-relaxed">
                                At Halo, we bring our expertise to a variety of industries, offering tailored digital solutions that drive efficiency, innovation, and growth.
                            </p>
                        </div>
                    </motion.div>

                    {/* Progress Indicator */}
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-sm font-medium text-gray-500">
                            {String(activeIndex + 1).padStart(2, '0')} / {String(industries.length).padStart(2, '0')}
                        </span>
                        <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden max-w-xs">
                            <motion.div
                                className="h-full bg-[#FF5722] rounded-full"
                                style={{
                                    width: `${((activeIndex + 1) / industries.length) * 100}%`
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                        <span className="text-xs text-gray-400 hidden md:block">Scroll to explore</span>
                    </div>

                    {/* Cards Container */}
                    <div className="relative flex-1 flex items-center">
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">

                            {/* Image Side */}
                            <div className="relative h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-2xl">
                                {industries.map((industry, index) => (
                                    <motion.div
                                        key={index}
                                        className="absolute inset-0"
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{
                                            opacity: activeIndex === index ? 1 : 0,
                                            scale: activeIndex === index ? 1 : 1.1,
                                            zIndex: activeIndex === index ? 1 : 0
                                        }}
                                        transition={{ duration: 0.7, ease: "easeOut" }}
                                    >
                                        <img
                                            src={industry.image}
                                            alt={industry.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Content Side */}
                            <div className="relative min-h-[280px] md:min-h-[350px]">
                                {industries.map((industry, index) => (
                                    <motion.div
                                        key={index}
                                        className="absolute inset-0 flex flex-col justify-center"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{
                                            opacity: activeIndex === index ? 1 : 0,
                                            x: activeIndex === index ? 0 : 50,
                                            pointerEvents: activeIndex === index ? 'auto' : 'none'
                                        }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    >
                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {industry.tags.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 text-sm font-medium text-[#FF5722] bg-orange-50 rounded-full border border-orange-100"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1a1a1a] mb-4">
                                            {industry.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 leading-relaxed text-sm md:text-base line-clamp-5 mb-6">
                                            {industry.description}
                                        </p>

                                        {/* CTA */}
                                        <a
                                            href={industry.href}
                                            className="inline-flex items-center gap-2 text-[#FF5722] font-medium group w-fit"
                                        >
                                            <span>Learn more</span>
                                            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </a>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Slide Indicators */}
                    <div className="flex justify-center gap-3 mt-6">
                        {industries.map((_, index) => (
                            <button
                                key={index}
                                className={`transition-all duration-300 rounded-full ${activeIndex === index
                                        ? 'w-8 h-2 bg-[#FF5722]'
                                        : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Slide ${index + 1}`}
                            />
                        ))}
                    </div>

                </div>
            </div>

            {/* Closing Statement - appears after scrolling through all slides */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-screen flex items-center justify-center bg-white"
                style={{ opacity: useTransform(scrollYProgress, [0.85, 1], [0, 1]) }}
            >
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <motion.p
                        className="text-gray-700 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Let us be your digital partner in navigating the complexities of your industry, and together, we will build a future where technology and industry work hand in hand to achieve success.
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
}
