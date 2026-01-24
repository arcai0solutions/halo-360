'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function AboutSection() {
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    {/* Header Block */}
                    <motion.div variants={fadeInUp} className="space-y-6">
                        <div className="flex items-center justify-center gap-2 text-[#FF5722]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path d="M2 13.125C8.98287 14.7037 9.5 21.75 9.5 21.75C9.5 21.75 10.0171 14.7037 17 13.125C10.0171 11.5463 9.5 4.5 9.5 4.5C9.5 4.5 8.98287 11.5463 2 13.125ZM14.75 18C18.5904 18.825 18.875 22.5 18.875 22.5C18.875 22.5 19.1596 18.825 23 18C19.1596 17.175 18.875 13.5 18.875 13.5C18.875 13.5 18.5904 17.175 14.75 18ZM12.125 6C15.9654 6.825 16.25 10.5 16.25 10.5C16.25 10.5 16.5346 6.825 20.375 6C16.5346 5.175 16.25 1.5 16.25 1.5C16.25 1.5 15.9654 5.175 12.125 6Z"></path>
                            </svg>
                            <span className="text-lg font-medium">About us</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1a1a1a] leading-tight max-w-5xl">
                            At Sanlabz, we are more than just a software development company…
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-balance">
                            We are your dedicated digital partner. Our mission is to understand your unique challenges and goals, working closely with you to craft tailored solutions that drive innovation and success. With a deep commitment to excellence and collaboration, we transform your vision into reality, ensuring that every project not only meets but exceeds expectations. Together, we build the digital future of your business.
                        </p>
                    </motion.div>

                    {/* Reviews/Stats Block */}
                    <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl pt-8">
                        {/* Stat 1 */}
                        <div className="flex flex-col items-center text-center space-y-3 p-4">
                            <div className="w-12 h-12 mb-2 flex items-center justify-center">
                                <img src="https://cdn.prod.website-files.com/68542aee5c18c90474d64a51/685ab0d0ede52c6b4d639d65_Star.svg" alt="Star" className="w-full h-full" />
                            </div>
                            <h3 className="text-4xl font-bold text-[#1a1a1a]">4.9</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">Our high rating proves quality and positive user impact.</p>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex flex-col items-center text-center space-y-3 p-4">
                            <div className="w-12 h-12 mb-2 flex items-center justify-center">
                                <img src="https://cdn.prod.website-files.com/68542aee5c18c90474d64a51/685ab0d194914b645c67e9b7_Avatar.svg" alt="Users" className="w-full h-full" />
                            </div>
                            <h3 className="text-4xl font-bold text-[#1a1a1a]">15M</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">Our platform is a trusted choice for Wide User.</p>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex flex-col items-center text-center space-y-3 p-4">
                            <div className="w-12 h-12 mb-2 flex items-center justify-center">
                                <img src="https://cdn.prod.website-files.com/68542aee5c18c90474d64a51/685ab0d03e29cc442b69bcc5_Goal.svg" alt="Goal" className="w-full h-full" />
                            </div>
                            <h3 className="text-4xl font-bold text-[#1a1a1a]">92+</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">Our global presence reliable, efficient solutions.</p>
                        </div>
                    </motion.div>

                    {/* Button Block */}
                    <motion.div variants={fadeInUp} className="pt-4">
                        <Link href="/about">
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-14 px-8 rounded-full border border-gray-200 text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors text-lg"
                            >
                                More About Us
                            </Button>
                        </Link>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
