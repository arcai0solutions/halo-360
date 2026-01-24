'use client';

import Link from 'next/link';

const categories = [
    { name: 'UI/UX', href: '/services/ui-ux' },
    { name: 'Develop', href: '/services/develop' },
    { name: 'Branding', href: '/services/branding' },
    { name: 'Motion', href: '/services/motion' },
    { name: 'SEO', href: '/services/seo' },
    { name: 'Marketing', href: '/services/marketing' },
    { name: 'Content', href: '/services/content' },
];

export function CategoryMarquee() {
    return (
        <section className="py-12 bg-[#FDFBF9] overflow-hidden border-b border-gray-100/50">
            <div className="relative w-full">
                {/* Marquee Container */}
                <div className="flex w-max animate-marquee">
                    {/* First Loop */}
                    <div className="flex gap-8 px-4">
                        {categories.map((cat, idx) => (
                            <CategoryItem key={`c1-${idx}`} name={cat.name} href={cat.href} />
                        ))}
                    </div>
                    {/* Second Loop (for seamless scrolling) */}
                    <div className="flex gap-8 px-4">
                        {categories.map((cat, idx) => (
                            <CategoryItem key={`c2-${idx}`} name={cat.name} href={cat.href} />
                        ))}
                    </div>
                    {/* Third Loop (safety) */}
                    <div className="flex gap-8 px-4">
                        {categories.map((cat, idx) => (
                            <CategoryItem key={`c3-${idx}`} name={cat.name} href={cat.href} />
                        ))}
                    </div>
                    {/* Fourth Loop (safety) */}
                    <div className="flex gap-8 px-4">
                        {categories.map((cat, idx) => (
                            <CategoryItem key={`c4-${idx}`} name={cat.name} href={cat.href} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function CategoryItem({ name, href }: { name: string; href: string }) {
    // Using an SVG filter trick or clip-path would be ideal for "jagged", 
    // but a squiggly SVG border image is easiest to implement purely with code if we inline it.
    // Here is a rough border using SVG inline.
    return (
        <Link
            href={href}
            className="group relative flex items-center justify-center w-[260px] h-[80px] text-[#1a1a1a] hover:text-[#000] transition-colors"
        >
            {/* SVG Border Approximation */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none text-current" width="100%" height="100%">
                <rect
                    x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    // Scribble effect using dasharray/offset or just a filter? 
                    // A simple rough filter is better.
                    style={{ filter: 'url(#rough-paper)' }}
                />
                <defs>
                    <filter id="rough-paper">
                        <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="5" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
                    </filter>
                </defs>
            </svg>

            <span className="text-2xl font-medium relative z-10">{name}</span>
        </Link>
    );
}
