"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/professional-detailer-applying-ceramic-coating-to-.jpg",
    title: "Ceramic Coating Application",
    description: "Premium protection for your vehicle's paint",
  },
  {
    image: "/luxury-ferrari-supercar-with-glossy-finish-after-d.jpg",
    title: "Exotic Car Detailing",
    description: "Specialized care for high-end vehicles",
  },
  {
    image: "/detailer-polishing-black-lamborghini-with-machine-.jpg",
    title: "Paint Correction Process",
    description: "Removing swirls and scratches for a mirror finish",
  },
  {
    image: "/stunning-blue-porsche-911-with-perfect-paint-after.jpg",
    title: "Show Car Finish",
    description: "Achieving perfection in every detail",
  },
  {
    image: "/professional-steam-cleaning-luxury-car-interior-le.jpg",
    title: "Interior Deep Cleaning",
    description: "Restoring your cabin to pristine condition",
  },
  {
    image: "/white-tesla-model-s-with-flawless-ceramic-coating-.jpg",
    title: "Electric Vehicle Care",
    description: "Specialized detailing for modern EVs",
  },
  {
    image: "/detailer-applying-paint-protection-film-to-mercede.jpg",
    title: "Paint Protection Film",
    description: "Ultimate defense against road damage",
  },
  {
    image: "/red-ferrari-supercar-with-perfect-mirror-finish-af.jpg",
    title: "Supercar Perfection",
    description: "World-class results for world-class cars",
  },
]

export default function DetailingSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative py-24 px-5 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold backdrop-blur-sm inline-block">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
            Detailing Excellence Showcase
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto text-pretty leading-relaxed">
            Experience the Blue Planet difference through our portfolio of stunning transformations
          </p>
        </div>

        <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
          {/* Slideshow Container */}
          <div className="relative aspect-video md:aspect-[21/9] overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              >
                <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Slide Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">{slide.title}</h3>
                  <p className="text-lg md:text-xl text-white/80">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/70 hover:scale-110 transition-all z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/70 hover:scale-110 transition-all z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? "bg-blue-500 w-8" : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
