'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Palette, Briefcase, Clock, Users } from 'lucide-react';
import Image from 'next/image';

export function AboutPageClient() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const features = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Insight-Driven",
      description: "Every strategy is built on research, not guesswork."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative & Memorable",
      description: "Designs and campaigns that truly stand out."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "All-in-One Expertise",
      description: "Branding, social media, advertising, and more."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reliable Delivery",
      description: "High-quality work, always on time."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client-Centered",
      description: "Your goals shape our strategies, your growth is our success."
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
            About Halo
          </h1>
          <p className="text-2xl md:text-3xl font-medium leading-tight text-gray-800 mb-8">
            At Halo, we blend creativity, strategy, and insights to help businesses thrive in the digital world.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Our mission is to craft campaigns that connect with audiences, drive results, and bring brand stories to life.
          </p>
        </motion.div>
      </section>

      {/* Section 2: Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="container px-6 md:px-12 lg:px-24 mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative rounded-3xl overflow-hidden"
             >
                 <Image
                    src="/halo-about.jpeg"
                    alt="About Halo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                 />
             </motion.div>

             <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="space-y-6"
             >
                <div className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 font-medium text-sm mb-2">
                    Our Philosophy
                </div>
                <h2 className="text-4xl md:text-5xl font-semibold font-[family-name:var(--font-ittenoviana)]">
                    Innovation & Transparency
                </h2>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                    <p>
                        From social media strategies to full-scale digital campaigns, we deliver tailored solutions aligned with your goals.
                    </p>
                    <p>
                        In an ever-evolving industry, our team stays committed to innovation, transparency, and results—ensuring impactful campaigns within budget while building lasting brand loyalty.
                    </p>
                    <p className="font-medium text-[#1a1a1a] pt-2">
                        Partner with Halo and unlock marketing without limits.
                    </p>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 font-[family-name:var(--font-ittenoviana)]">
                Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600">
                At Halo, we fuse creativity, strategy, and technology to deliver marketing that drives results—not just looks good.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
                <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.1 } }
                    }}
                    className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-100 transition-all duration-300 group"
                >
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 text-[#1a1a1a] group-hover:bg-red-50 group-hover:text-red-600 flex items-center justify-center mb-6 transition-colors">
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-500 leading-relaxed">
                        {feature.description}
                    </p>
                </motion.div>
            ))}
        </div>

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-20 text-center"
        >
            <p className="text-2xl md:text-3xl font-medium font-[family-name:var(--font-ittenoviana)] text-gray-800">
                Halo transforms visions into stories that connect, inspire, and deliver measurable impact.
            </p>
        </motion.div>
      </section>
    </div>
  );
}
