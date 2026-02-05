'use client';

import { motion } from 'framer-motion';

export function ProjectsPageClient() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const projects = [
        {
            title: "Project One",
            category: "Branding & Design",
            image: "/project-1.png",
            description: "A comprehensive branding overhaul designed to communicate modern values and innovation."
        },
        {
            title: "Project Two",
            category: "Branding & Design",
            image: "/project-2.png",
            description: "An engaging multi-platform campaign that increased user engagement and brand visibility significantly."
        },
        {
            title: "Project Three",
            category: "Branding & Design",
            image: "/project-3.png",
            description: "A responsive, high-performance website built to convert visitors into loyal customers."
        }
    ];

    return (
        <div className="bg-white text-[#1a1a1a]">
            {/* Section 1: Hero / Introduction */}
            <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl md:text-7xl font-semibold mb-8 font-[family-name:var(--font-ittenoviana)]">
                        Our Work
                    </h1>
                    <p className="text-2xl md:text-3xl font-medium leading-tight text-gray-800 mb-8">
                        Our portfolio showcases the results of blending creativity, strategy, and technology.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                        Explore some of our recent projects where we've helped brands connect with their audience and achieve their goals.
                    </p>
                </motion.div>
            </section>

            {/* Section 2: Projects Grid */}
            <section className="pb-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: idx * 0.2 } }
                            }}
                            className="group block"
                        >
                            <div className="relative overflow-hidden rounded-2xl mb-6 bg-gray-100">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>
                            
                            <div className="space-y-2">
                                <span className="text-sm font-medium text-red-500 uppercase tracking-wider">{project.category}</span>
                                <h3 className="text-2xl font-semibold font-[family-name:var(--font-ittenoviana)] text-[#1a1a1a] group-hover:text-gray-700 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 line-clamp-2">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
