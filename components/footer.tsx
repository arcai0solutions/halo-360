'use client';

import Link from 'next/link';

export function Footer() {
    return (
        <footer className="relative bg-[#080808] text-white pt-24 pb-12 overflow-hidden">

            {/* Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] opacity-20" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[100px] opacity-20" />
            </div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-20">

                    {/* Left Side: CTA and Brand */}
                    <div className="flex flex-col justify-between">
                        <div className="mb-16">
                            <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                                Have Any <br />
                                Project in your <br />
                                mind
                            </h2>
                            <div className="flex items-center gap-6">
                                <div className="inline-block">
                                    <div className="p-[1px] rounded-lg bg-gradient-to-r from-gray-700 to-gray-800">
                                        <Link
                                            href="/contact"
                                            className="block px-8 py-4 bg-[#1a1a1a] rounded-lg text-lg font-medium hover:bg-[#222] transition-colors"
                                        >
                                            Contact us
                                        </Link>
                                    </div>
                                </div>
                                {/* Mobile Image */}
                                <div className="block lg:hidden w-24 h-24 pointer-events-none opacity-80 mix-blend-screen transform translate-y-2">
                                     <img src="/footer.webp" alt="Abstract Footer Graphic" className="w-full h-full object-contain" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Halo</h3>
                                <p className="text-gray-400">Save time. Get Started Now.</p>
                                <p className="text-gray-500 text-sm">Unleash the most advanced Agency and boost your productivity</p>
                            </div>

                            <div className="space-y-4 pt-4">
                                <p className="text-sm font-medium">Stay in the know</p>
                                <div className="flex gap-4">
                                    {/* Social Icons */}
                                    <a href="https://www.instagram.com/halo.digitalmedia?igsh=YnNidjhkOHdyM2dl" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clipRule="evenodd" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Navigation & Image */}
                    <div className="relative">
                        {/* Center Image (Floating 3D Effect) */}
                        <div className="hidden lg:block absolute top-[80%] left-0 transform -translate-y-1/2 -translate-x-[10%] w-[80%] h-auto -z-10 pointer-events-none opacity-80 mix-blend-screen">
                            <img src="/footer.webp" alt="Abstract Footer Graphic" className="w-full h-full object-contain" />
                        </div>

                        <div className="grid grid-cols-2 gap-8 relative z-10 w-full max-w-sm ml-auto">
                            {/* Pages Column */}
                            <div className="space-y-6">
                                <h4 className="text-white font-medium">Pages</h4>
                                <ul className="space-y-4">
                                    <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                                    <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About us</Link></li>
                                    <li><Link href="/service" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                                    <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
                                    <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                                </ul>
                            </div>

                            {/* Utilities Column */}
                            <div className="space-y-6">
                                <h4 className="text-white font-medium">Utilities</h4>
                                <ul className="space-y-4">
                                    <li><Link href="/404" className="text-gray-400 hover:text-white transition-colors">404</Link></li>
                                    <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">License</Link></li>
                                    <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Style Guide</Link></li>
                                    <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Change-Log</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p className="flex items-center gap-2">All Rights Reserved. Designed by <a href="https://www.arcai.agency" target="_blank" rel="noopener noreferrer"><img src="/arc logo.png" alt="ARC AI" className="h-10 w-auto" /></a></p>
                    <p className="hidden md:block">|</p>
                    <p>Powered by <span className="text-white">Next.js</span></p>
                </div>
            </div>
        </footer>
    );
}
