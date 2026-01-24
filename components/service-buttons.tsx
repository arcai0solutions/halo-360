'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Lightbulb, Globe, Code, Stamp } from 'lucide-react';

const services = [
  {
    name: 'UIUX Design',
    href: '/services/ui-ux',
    icon: Lightbulb,
    delay: 0,
  },
  {
    name: 'Marketing',
    href: '/services/marketing',
    icon: Globe,
    delay: 100,
  },
  {
    name: 'Development',
    href: '/services/develop',
    icon: Code,
    delay: 200,
  },
  {
    name: 'Branding',
    href: '/services/branding',
    icon: Stamp,
    delay: 300,
  },
];

export function ServiceButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-[600px] w-full">
      {services.map((service, index) => {
        const Icon = service.icon;
        const positions = [
          'top-8 right-16',
          'top-40 right-32',
          'top-72 right-20',
          'top-[26rem] right-36',
        ];

        return (
          <Link
            key={service.name}
            href={service.href}
            className={`absolute ${positions[index]} group transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: `${service.delay}ms` }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>

              <div className="relative bg-gradient-to-br from-white/90 to-white/50 backdrop-blur-md border border-white/50 rounded-full px-6 py-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-900 whitespace-nowrap">
                    {service.name}
                  </span>
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <div className="absolute -inset-4 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
