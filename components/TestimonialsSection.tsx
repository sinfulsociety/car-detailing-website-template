"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Michael Rodriguez",
    vehicle: "2023 Porsche 911",
    rating: 5,
    text: "Absolutely incredible work! My Porsche looks better than the day I bought it. The attention to detail is unmatched. Blue Planet's team went above and beyond.",
    image: "/professional-happy-customer-with-luxury-car.jpg",
  },
  {
    name: "Sarah Chen",
    vehicle: "2022 Tesla Model S",
    rating: 5,
    text: "Best detailing service in the USA! The ceramic coating they applied has kept my Tesla looking pristine for months. Professional, punctual, and perfectionists.",
    image: "/satisfied-female-customer-smiling.jpg",
  },
  {
    name: "David Thompson",
    vehicle: "2021 BMW M5",
    rating: 5,
    text: "I've tried many detailing services, but Blue Planet is on another level. The paint correction removed years of swirls and scratches. Highly recommend!",
    image: "/happy-male-customer-with-bmw.jpg",
  },
  {
    name: "Jessica Martinez",
    vehicle: "2023 Mercedes-Benz S-Class",
    rating: 5,
    text: "Outstanding service from start to finish. They treated my car like it was their own. The interior detailing was phenomenal. Worth every penny!",
    image: "/elegant-woman-customer-with-mercedes.jpg",
  },
]

export default function TestimonialsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            testimonials.forEach((_, index) => {
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
    <section id="testimonials" ref={sectionRef} className="relative py-24 px-5 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold backdrop-blur-sm inline-block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">What Our Clients Say</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto text-pretty leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 ${
                visibleCards.includes(index) ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-500/20" />

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/50"
                />
                <div>
                  <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-white/60">{testimonial.vehicle}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-white/80 leading-relaxed italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-12 py-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">500+</p>
              <p className="text-white/60">5-Star Reviews</p>
            </div>
            <div className="w-px h-16 bg-white/20" />
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">98%</p>
              <p className="text-white/60">Customer Satisfaction</p>
            </div>
            <div className="w-px h-16 bg-white/20" />
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">5000+</p>
              <p className="text-white/60">Cars Detailed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
