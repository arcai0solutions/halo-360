'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z" opacity="0.7" />
              </svg>
            </div>
            <span className="text-xl font-bold">AextEra</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/service" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Service
            </Link>
            <div className="relative group">
              <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1">
                Pages
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Blog
            </Link>
          </div>

          <div className="hidden lg:block">
            <Link href="/contact">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                Contact us
              </button>
            </Link>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <Link href="/" className="block text-sm font-medium text-orange-500">
              Home
            </Link>
            <Link href="/about" className="block text-sm font-medium text-gray-700">
              About
            </Link>
            <Link href="/service" className="block text-sm font-medium text-gray-700">
              Service
            </Link>
            <Link href="/pages" className="block text-sm font-medium text-gray-700">
              Pages
            </Link>
            <Link href="/blog" className="block text-sm font-medium text-gray-700">
              Blog
            </Link>
            <Link href="/contact">
              <button className="w-full bg-gray-900 text-white px-6 py-3 rounded-md text-sm font-medium">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
