"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

const steps = [
  {
    number: "1",
    title: "Listening to Your Vision",
    description: "We begin by discussing your goals, audience, and expectations to ensure our approach aligns perfectly with your vision.",
  },
  {
    number: "2",
    title: "Planning with Purpose",
    description: "We analyze trends, competitors, and opportunities to craft a strategic roadmap tailored to your needs.",
  },
  {
    number: "3",
    title: "Visualizing Your Ideas",
    description: "Creative concepts come to life as we design user-friendly and visually appealing solutions.",
  },
  {
    number: "4",
    title: "Bringing It to Life",
    description: "Using cutting-edge technologies, we develop and implement your project with precision and care.",
  },
  {
    number: "5",
    title: "Delivering Success",
    description: "After a seamless launch, we provide ongoing support and optimization to ensure long-term success.",
  },
]

export function ApproachSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  return (
    <section 
      id="approach"
      className="w-full bg-[#fcfcfc] py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
        {/* Left Side - Sticky Header & Image */}
        <div className="lg:w-1/2 flex flex-col gap-8 lg:sticky lg:top-24 h-fit z-10">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#f55733]"
            >
              <div className="flex items-center gap-2">
                 <span className="text-lg font-medium">{`{`}</span>
                 <span className="text-lg font-medium">How We Work</span>
                 <span className="text-lg font-medium">{`}`}</span>
              </div>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-[#424242] leading-tight"
            >
              Strategic Steps to Impactful Results
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative w-full aspect-square rounded-[40px] overflow-hidden"
          >
            <Image 
              src="https://framerusercontent.com/images/VSxqLrfRMs8XEbT1SuK60xq3aKI.jpeg"
              alt="Strategic Steps"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Right Side - Timeline */}
        <div ref={containerRef} className="lg:w-1/2 flex flex-col gap-0 relative pl-4 lg:pl-0">
          {/* Continuous Line Background */}
          {/* We position the line relative to the timeline content */}
          <div className="absolute left-[31px] lg:left-[27px] top-4 bottom-12 w-[2px] bg-[#E0E0E0]" />
          
          <ScrollProgressLine containerRef={containerRef} />

          {steps.map((step, index) => (
            <TimelineStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ScrollProgressLine({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    })
    
    // Smooth out the progress
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-[31px] lg:left-[27px] top-4 bottom-12 w-[2px] bg-[#f55733] z-0" 
        />
    )
}

function TimelineStep({ step, index }: { step: { number: string, title: string, description: string }, index: number }) {
  const ref = useRef(null)
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="relative flex gap-8 pb-20 last:pb-0 group"
    >
      {/* Timeline Dot */}
      <div className="flex-shrink-0 z-10">
        <div className="w-[56px] h-[56px] lg:w-[56px] lg:h-[56px] rounded-full bg-white border-2 border-[#E0E0E0] flex items-center justify-center group-hover:border-[#f55733] transition-colors duration-500">
           <div className="w-3 h-3 rounded-full bg-[#E0E0E0] group-hover:bg-[#f55733] transition-colors duration-500" />
        </div>
      </div>

      <div className="pt-2">
        <div className="text-[#f55733] font-bold text-xl mb-2">{step.number}</div>
        <h3 className="text-2xl text-[#333333] font-bold mb-3">{step.title}</h3>
        <p className="text-[#757575] leading-relaxed text-lg max-w-md">{step.description}</p>
      </div>
    </motion.div>
  )
}
