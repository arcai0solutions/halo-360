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
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                                    </a>
                                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.419-4.814a2.504 2.504 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418zM15.194 12 10 15V9l5.194 3z" clipRule="evenodd" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Navigation & Image */}
                    <div className="relative">
                        {/* Center Image (Floating 3D Effect) */}
                        <div className="absolute top-[80%] left-0 transform -translate-y-1/2 -translate-x-[10%] w-[80%] h-auto -z-10 pointer-events-none opacity-80 mix-blend-screen">
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
                    <p>All Rights Reserved. Designed by <a href="https://www.arcai.agency" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">ARC AI</a></p>
                    <p className="hidden md:block">|</p>
                    <p>Powered by <span className="text-white">Next.js</span></p>
                </div>
            </div>
        </footer>
    );
}
