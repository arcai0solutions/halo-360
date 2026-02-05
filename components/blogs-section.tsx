"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

const blogs = [
  {
    id: 1,
    title: "The Future of AI in Digital Marketing",
    date: "May 5, 2025",
    type: "Insights",
    image: "https://framerusercontent.com/images/iSOSdvRlqBEkFyQWxpbKwxe1Cw.jpg",
    content: "Artificial Intelligence is revolutionizing the digital marketing landscape. From predictive analytics to personalized customer experiences, AI tools are enabling marketers to reach their audiences with unprecedented precision. This article explores the emerging trends in AI marketing, including chatbot evolution, content generation, and automated decision-making processes that are setting new standards for efficiency and engagement."
  },
  {
    id: 2,
    title: "The Role of Artificial Intelligence in Modern Digital Marketing",
    date: "May 5, 2025",
    type: "Insights",
    image: "https://framerusercontent.com/images/XpegwdaUteVjDqo880uY6bzCONU.jpg",
    content: "Modern digital marketing is increasingly dependent on AI for data analysis and campaign optimization. We delve into how machine learning algorithms are being used to analyze consumer behavior, forecast trends, and optimize ad spend in real-time. Understanding these technologies is crucial for any business looking to stay competitive in a rapidly evolving digital ecosystem."
  },
  {
    id: 3,
    title: "Top Digital Marketing Trends for 2025",
    date: "May 3, 2025",
    type: "Marketing",
    image: "https://framerusercontent.com/images/5yyiq2tkZSescxjDzYMQnk1n8E.jpg",
    content: "As we move further into 2025, the digital marketing world continues to shift. This piece highlights the top trends defining the year, such as the resurgence of email marketing, the dominance of short-form video content, and the growing importance of privacy-first marketing strategies. Stay ahead of the curve by integrating these key trends into your marketing strategy."
  }
]

export function BlogsSection() {
  const [selectedBlog, setSelectedBlog] = useState<typeof blogs[0] | null>(null)

  return (
    <section id="blog" className="w-full bg-[#fcfcfc] py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12">
        
        {/* Header */}
        <div className="flex flex-col gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#f55733]"
          >
            <div className="flex items-center gap-2">
               <span className="text-lg font-medium">{`{`}</span>
               <span className="text-lg font-medium">Our Insights</span>
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
            Stay Ahead with the Latest in Digital Marketing
          </motion.h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedBlog(blog)}
              className="group cursor-pointer flex flex-col gap-4"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[3/2] rounded-[40px] overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.02]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 px-2">
                <div className="flex items-center gap-2 text-[#757575] text-sm">
                   <div className="flex items-center gap-1">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className="w-4 h-4">
                        <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"></path>
                     </svg>
                     <span>{blog.date}</span>
                   </div>
                   <span>/</span>
                   <span>{blog.type}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-[#333333] group-hover:text-[#f55733] transition-colors duration-300">
                  {blog.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedBlog} onOpenChange={(open) => !open && setSelectedBlog(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto sm:rounded-[32px] p-0 gap-0 border-none">
          {selectedBlog && (
            <>
               <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image
                    src={selectedBlog.image}
                    alt={selectedBlog.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 md:p-10">
                     <Badge className="w-fit mb-4 bg-[#f55733] hover:bg-[#f55733] text-white border-none text-sm px-3 py-1 rounded-full">
                        {selectedBlog.type}
                     </Badge>
                     <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">{selectedBlog.title}</h2>
                     <p className="text-white/80 font-medium">{selectedBlog.date}</p>
                  </div>
               </div>
               
               <div className="p-6 md:p-10 bg-white">
                  <DialogHeader className="sr-only">
                    <DialogTitle>{selectedBlog.title}</DialogTitle>
                    <DialogDescription>{selectedBlog.date}</DialogDescription>
                  </DialogHeader>
                  
                  <div className="prose max-w-none text-[#555] text-lg leading-relaxed space-y-4">
                    <p>{selectedBlog.content}</p>
                    <p>
                      Donec sed odio dui. Nullám quis risus eget urna mollis ornare vel eu leo. 
                      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                  </div>
               </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
