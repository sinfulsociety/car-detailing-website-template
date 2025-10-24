"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "The Ultimate Guide to Ceramic Coating: Is It Worth It?",
    excerpt:
      "Discover everything you need to know about ceramic coating, from benefits to maintenance tips. Learn why it's the best investment for your vehicle's paint protection.",
    image: "/professional-detailer-applying-ceramic-coating-to-.jpg",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Paint Protection",
    slug: "ceramic-coating-guide",
  },
  {
    title: "5 Signs Your Car Needs Professional Detailing",
    excerpt:
      "Learn to recognize the telltale signs that your vehicle is due for professional detailing. From paint oxidation to interior odors, we cover it all.",
    image: "/professional-detailer-cleaning-luxury-car-with-mic.jpg",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Detailing Tips",
    slug: "signs-car-needs-detailing",
  },
  {
    title: "Paint Correction vs. Ceramic Coating: What's the Difference?",
    excerpt:
      "Understand the key differences between paint correction and ceramic coating, and why you might need both for optimal results.",
    image: "/car-paint-correction-polishing-machine-on-black-ca.jpg",
    date: "March 5, 2024",
    readTime: "7 min read",
    category: "Education",
    slug: "paint-correction-vs-ceramic-coating",
  },
  {
    title: "How to Maintain Your Car's Shine Between Details",
    excerpt:
      "Expert tips and tricks to keep your vehicle looking its best between professional detailing appointments. Simple maintenance that makes a big difference.",
    image: "/person-washing-shiny-luxury-sports-car-with-foam-a.jpg",
    date: "February 28, 2024",
    readTime: "5 min read",
    category: "Maintenance",
    slug: "maintain-car-shine",
  },
  {
    title: "The Science Behind Paint Protection Film (PPF)",
    excerpt:
      "Dive deep into how paint protection film works, its benefits, and why it's essential for preserving your vehicle's value and appearance.",
    image: "/paint-protection-film-being-installed-on-car-hood-.jpg",
    date: "February 20, 2024",
    readTime: "9 min read",
    category: "Paint Protection",
    slug: "paint-protection-film-guide",
  },
  {
    title: "Interior Detailing: Deep Cleaning for a Healthier Drive",
    excerpt:
      "Explore the health benefits of professional interior detailing and how it creates a cleaner, safer environment for you and your passengers.",
    image: "/luxury-car-interior-leather-seats-being-cleaned-an.jpg",
    date: "February 15, 2024",
    readTime: "6 min read",
    category: "Interior Care",
    slug: "interior-detailing-health",
  },
]

export default function BlogSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            blogPosts.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="blog" ref={sectionRef} className="relative py-24 px-5 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold backdrop-blur-sm inline-block">
            Blog & Resources
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">Expert Tips & Insights</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto text-pretty leading-relaxed">
            Stay informed with our latest articles on car care, detailing techniques, and industry insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Link key={index} href={`/blog/${post.slug}`}>
              <article
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 ${
                  visibleCards.includes(index) ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500/90 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-white/70 leading-relaxed line-clamp-3">{post.excerpt}</p>

                  <div className="inline-flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 transition-all">
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
