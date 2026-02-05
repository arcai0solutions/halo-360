'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const row1 = [
    { name: 'Angular', src: 'https://sanlabz.com/wp-content/uploads/2024/08/angular_wordmark_gradient-800x250.png' },
    { name: 'Docker', src: 'https://sanlabz.com/wp-content/uploads/2024/08/Docker_logo.png' },
    { name: 'Google Cloud', src: 'https://sanlabz.com/wp-content/uploads/2024/08/Google-Cloud-Logo-800x450.png' },
    { name: 'Java', src: 'https://sanlabz.com/wp-content/uploads/2024/08/Java-Logo-800x500.png' },
    { name: 'Jenkins', src: 'https://sanlabz.com/wp-content/uploads/2024/08/Jenkins_logo_with_title.svg-800x258.png' },
    { name: 'Kubernetes', src: 'https://sanlabz.com/wp-content/uploads/2024/08/Kubernetes_logo.svg-800x142.png' },
];

const row2 = [
    { name: 'Azure', src: 'https://sanlabz.com/wp-content/uploads/2024/08/Microsoft_Azure_Logo.svg-800x231.png' },
    { name: 'React', src: 'https://sanlabz.com/wp-content/uploads/2024/08/React-Symbol-800x450.png' },
    { name: 'Python', src: 'https://sanlabz.com/wp-content/uploads/2024/08/Python-Emblem-800x450.png' },
    { name: 'Django', src: 'https://sanlabz.com/wp-content/uploads/2024/08/Django-Logo-800x500.png' },
    { name: 'JavaScript', src: 'https://sanlabz.com/wp-content/uploads/2024/08/JavaScript-Symbol-800x450.png' },
    { name: 'HTML5', src: 'https://sanlabz.com/wp-content/uploads/2024/08/HTML5_logo_and_wordmark.svg-800x800.png' },
];

export function TechMarquee() {
    return (
        <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
            <div className="flex flex-col gap-12">
                {/* Row 1: Left */}
                <div className="flex w-full overflow-hidden mask-fade-sides">
                    <motion.div
                        className="flex gap-16 md:gap-24 pl-16 md:pl-24 w-max items-center"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                        {[...row1, ...row1].map((logo, idx) => (
                            <LogoItem key={`r1-${idx}`} logo={logo} />
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Right */}
                <div className="flex w-full overflow-hidden mask-fade-sides">
                    <motion.div
                        className="flex gap-16 md:gap-24 pl-16 md:pl-24 w-max items-center"
                        initial={{ x: "-50%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                        {[...row2, ...row2].map((logo, idx) => (
                            <LogoItem key={`r2-${idx}`} logo={logo} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function LogoItem({ logo }: { logo: { name: string; src: string } }) {
    return (
        <div className="relative w-32 h-16 md:w-40 md:h-20 flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
            <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 128px, 160px"
            />
        </div>
    );
}
