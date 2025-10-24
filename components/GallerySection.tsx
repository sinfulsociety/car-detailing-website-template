"use client"

import { useEffect, useRef, useState } from "react"

const galleryImages = [
  {
    before: "/car-paint-oxidized-swirl-marks-before-correction.jpg",
    after: "/car-paint-glossy-mirror-finish-after-correction.jpg",
    title: "Paint Correction & Ceramic Coating",
  },
  {
    before: "/dirty-black-car-exterior-before-detailing.jpg",
    after: "/shiny-black-car-exterior-after-detailing.jpg",
    title: "Full Exterior Detail",
  },
  {
    before: "/car-headlights-foggy-yellowed-oxidized.jpg",
    after: "/car-headlights-crystal-clear-restored.jpg",
    title: "Headlight Restoration",
  },
  {
    before: "/car-interior-dirty-stained-leather-seats.jpg",
    after: "/car-interior-clean-pristine-leather-seats.jpg",
    title: "Interior Deep Clean",
  },
  {
    before: "/white-car-paint-scratches-swirls-before.jpg",
    after: "/white-car-paint-flawless-glossy-after.jpg",
    title: "Paint Enhancement",
  },
  {
    before: "/car-wheels-dirty-brake-dust-before-cleaning.jpg",
    after: "/car-wheels-shiny-clean-after-detailing.jpg",
    title: "Wheel & Tire Detail",
  },
]

export default function GallerySection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            galleryImages.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index])
              }, index * 150)
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
    <section id="gallery" ref={sectionRef} className="relative py-24 px-5 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold backdrop-blur-sm inline-block">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">Before & After Gallery</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto text-pretty leading-relaxed">
            See the incredible transformations we achieve with our expert detailing services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className={`group relative ${visibleItems.includes(index) ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="relative">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="absolute top-3 left-3 z-10 px-3 py-1.5 bg-red-500/90 backdrop-blur-sm rounded-full text-white text-xs font-bold uppercase tracking-wide">
                      Before
                    </div>
                    <img
                      src={item.before || "/placeholder.svg"}
                      alt="Before detailing"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden shine-effect">
                    <div className="absolute top-3 left-3 z-10 px-3 py-1.5 bg-green-500/90 backdrop-blur-sm rounded-full text-white text-xs font-bold uppercase tracking-wide">
                      After
                    </div>
                    <img
                      src={item.after || "/placeholder.svg"}
                      alt="After detailing"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-4 bg-black/40 backdrop-blur-sm">
                  <h3 className="text-lg font-bold text-white text-center">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
