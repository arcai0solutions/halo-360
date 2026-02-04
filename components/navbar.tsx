'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
            <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="relative z-50">
                    <img
                        src="/new-logo.jpeg"
                        alt="Halo Logo"
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    <Link href="/" className="text-[#1a1a1a] font-medium hover:text-gray-600 transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="text-[#1a1a1a] font-medium hover:text-gray-600 transition-colors">
                        About
                    </Link>
                    <Link href="/service" className="text-[#1a1a1a] font-medium hover:text-gray-600 transition-colors">
                        Service
                    </Link>



                    <Link href="/projects" className="text-[#1a1a1a] font-medium hover:text-gray-600 transition-colors">
                        Projects
                    </Link>
                </nav>

                {/* CTA Button */}
                <div className="hidden lg:block">
                    <Link href="/contact" className="bg-[#111] text-white px-6 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity">
                        Contact us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden relative z-50 p-2 text-[#1a1a1a]"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                    <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                    <div className="w-6 h-0.5 bg-current"></div>
                </button>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-[#FDFBF9] z-40 flex flex-col items-center justify-center space-y-8 lg:hidden">
                        <Link href="/" className="text-2xl font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link href="/about" className="text-2xl font-medium" onClick={() => setIsMenuOpen(false)}>About</Link>
                        <Link href="/service" className="text-2xl font-medium" onClick={() => setIsMenuOpen(false)}>Service</Link>
                        <Link href="/blog" className="text-2xl font-medium" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                        <Link href="/contact" className="bg-[#111] text-white px-8 py-3 rounded-full font-medium" onClick={() => setIsMenuOpen(false)}>
                            Contact us
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
