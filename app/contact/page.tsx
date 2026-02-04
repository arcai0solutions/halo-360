'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
        >
            <h1 className="text-5xl md:text-7xl font-semibold text-[#1a1a1a] mb-6 font-[family-name:var(--font-ittenoviana)]">
                Get in Touch
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl">
                Ready to transform your digital presence? We're here to help. Reach out to us for any inquiries or to start your next project.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Details */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-12"
            >
                <div className="space-y-8">
                    <div className="flex items-start gap-4 group">
                        <div className="p-3 rounded-2xl bg-gray-50 group-hover:bg-red-50 transition-colors duration-300">
                            <Phone className="w-6 h-6 text-[#1a1a1a] group-hover:text-red-500 transition-colors" />
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-[#1a1a1a] mb-2">Call Us</h3>
                            <div className="space-y-1">
                                <p className="text-gray-600 text-lg">Rushdy Hassen</p>
                                <a href="tel:0771941153" className="text-lg font-medium hover:text-red-500 transition-colors">077 194 1153</a>
                                <div className="h-2"></div>
                                <p className="text-gray-600 text-lg">Azam Rishan</p>
                                <a href="tel:0777006116" className="text-lg font-medium hover:text-red-500 transition-colors">077 700 6116</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                        <div className="p-3 rounded-2xl bg-gray-50 group-hover:bg-red-50 transition-colors duration-300">
                            <MapPin className="w-6 h-6 text-[#1a1a1a] group-hover:text-red-500 transition-colors" />
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-[#1a1a1a] mb-2">Visit Us</h3>
                            <p className="text-gray-600 text-lg max-w-md leading-relaxed">
                                243 R A de Mel Mawatha<br />
                                Colombo 03, Sri Lanka
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                         <div className="p-3 rounded-2xl bg-gray-50 group-hover:bg-red-50 transition-colors duration-300">
                            <Mail className="w-6 h-6 text-[#1a1a1a] group-hover:text-red-500 transition-colors" />
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-[#1a1a1a] mb-2">Email Us</h3>
                            <a href="mailto:hello@halo360.com" className="text-gray-600 text-lg hover:text-red-500 transition-colors">
                                hello@halo360.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Map Placeholder or Image */}
                <div className="w-full h-64 bg-gray-100 rounded-2xl overflow-hidden relative">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9166687000787!2d79.85160867590209!3d6.899577993100654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259602cb3bc09%3A0x677419399138d674!2s243%20R.%20A.%20De%20Mel%20Mawatha%2C%20Colombo%2000300!5e0!3m2!1sen!2slk!4v1708945612345!5m2!1sen!2slk" 
                        className="absolute inset-0 w-full h-full border-0" 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 className="bg-gray-50 p-8 md:p-10 rounded-3xl"
            >
                <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                            <Input id="firstName" placeholder="John" className="bg-white border-0 h-12" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                            <Input id="lastName" placeholder="Doe" className="bg-white border-0 h-12" />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                        <Input id="email" type="email" placeholder="john@example.com" className="bg-white border-0 h-12" />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                        <Input id="phone" type="tel" placeholder="+94 77 123 4567" className="bg-white border-0 h-12" />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                        <Input id="subject" placeholder="Project Inquiry" className="bg-white border-0 h-12" />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                        <Textarea id="message" placeholder="Tell us about your project..." className="bg-white border-0 min-h-[150px] resize-none" />
                    </div>

                    <Button className="w-full h-12 text-base font-medium bg-[#1a1a1a] hover:bg-black text-white">
                        Send Message <Send className="w-4 h-4 ml-2" />
                    </Button>
                </form>
            </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
