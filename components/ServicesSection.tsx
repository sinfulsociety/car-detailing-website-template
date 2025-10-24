"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronRight, Shield, Sparkles, Car, Wrench, Droplets, Sun, Settings } from "lucide-react"
import Link from "next/link"

const services = [
  {
    image: "https://assets-global.website-files.com/613f61814858fe0764bc22a2/61a0e053f741908457ecb414_A-10.jpg",
    title: "Paint Protection Film",
    description:
      "Protect and preserve the paint of your vehicle against rock chips, road debris and minor scratches with our Professionally installed Paint Protection Film.",
    icon: Shield,
    included: [
      "Full front-end coverage or custom areas",
      "Self-healing technology",
      "10-year warranty",
      "Professional installation",
      "Post-installation care kit",
    ],
    price: "Starting at $1,500",
    slug: "paint-protection-film",
  },
  {
    image: "https://assets-global.website-files.com/613f61814858fe0764bc22a2/61a0e028e47224f033e70f8d_A-9.jpg",
    title: "Ceramic Coating",
    description:
      "Advanced paint coating based on a three-dimensional molecular frame that creates an extremely durable, clear and hard glass layer for automotive paint, wheels and metals to produce a 'candy-like' gloss appearance.",
    icon: Sparkles,
    included: [
      "Multi-layer ceramic coating application",
      "Paint decontamination and prep",
      "5-7 year durability",
      "Hydrophobic properties",
      "UV protection and gloss enhancement",
    ],
    price: "Starting at $1,200",
    slug: "ceramic-coating",
  },
  {
    image: "https://assets-global.website-files.com/613f61814858fe0764bc22a2/61a0e027deccc371c9175786_A-2.jpg",
    title: "Premium Detailing",
    description:
      "Comprehensive interior and exterior detailing service that restores your vehicle to showroom condition. Includes paint decontamination, correction, and protection.",
    icon: Car,
    included: [
      "Paint decontamination and clay bar treatment",
      "Removal of dealer markings and adhesives",
      "Single-stage paint correction",
      "Interior deep clean and protection",
      "Wheel and tire detailing",
    ],
    price: "Starting at $299",
    slug: "premium-detailing",
  },
  {
    image: "https://assets-global.website-files.com/613f61814858fe0764bc22a2/61a0e03e5c8f596baf6e6d58_A-28.jpg",
    title: "Paint Correction",
    description:
      "Paint correction is the process of removing surface scratches and imperfections from a vehicle's paintwork. These imperfections include but are not limited to, swirl marks & fine scratches, bird dropping etching & acid rain etching, hologramming & buffer trails.",
    icon: Wrench,
    included: [
      "Multi-stage machine polishing",
      "Swirl mark and scratch removal",
      "Paint depth measurement",
      "Before and after documentation",
      "Paint sealant application",
    ],
    price: "Starting at $600",
    slug: "paint-correction",
  },
  {
    image: "https://assets-global.website-files.com/613f61814858fe0764bc22a2/61a0df76fc102cb7c378c501_A-15.jpg",
    title: "Interior Detailing",
    description:
      "Deep interior cleaning service that eliminates dirt, stains, odors, and allergens. Includes carpet shampooing, leather conditioning, and complete sanitization.",
    icon: Droplets,
    included: [
      "Deep carpet and seat shampooing",
      "Leather cleaning and conditioning",
      "Complete vacuuming and detailing",
      "Dashboard and console care",
      "Odor elimination treatment",
    ],
    price: "Starting at $199",
    slug: "interior-detailing",
  },
  {
    image: "https://assets-global.website-files.com/613f61814858fe0764bc22a2/61a0e027d2986a57e8b22420_DSC01443.jpg",
    title: "Headlight Restoration",
    description:
      "Professional headlight restoration removes yellowing, oxidation, and cloudiness to restore clarity and improve visibility for safer night driving.",
    icon: Sun,
    included: [
      "Complete oxidation removal",
      "Multi-stage sanding and polishing",
      "UV-resistant sealant application",
      "Improved visibility and safety",
      "Cost-effective alternative to replacement",
    ],
    price: "$99 - $149",
    slug: "headlight-restoration",
  },
  {
    image: "https://assets-global.website-files.com/613f61814858fe0764bc22a2/61a0e0289cb6fda04c5abeb1_DSC01767.jpg",
    title: "Other Services",
    description:
      "We offer a wide range of additional services including engine bay detailing, wheel refinishing, and more. Contact us to learn about our full service menu.",
    icon: Settings,
    included: [
      "Engine bay detailing",
      "Wheel refinishing and coating",
      "Leather conditioning and repair",
      "Window tinting",
      "Custom detailing packages",
    ],
    price: "Custom Quote",
    slug: null,
  },
]

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(3)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [visibleElements, setVisibleElements] = useState<Set<number>>(new Set())
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2)
      } else {
        setVisibleCards(3)
      }
    }

    updateVisibleCards()
    window.addEventListener("resize", updateVisibleCards)
    return () => window.removeEventListener("resize", updateVisibleCards)
  }, [])

  useEffect(() => {
    console.log("[v0] Setting up intersection observer for animations")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            console.log("[v0] Element visible:", index)
            setVisibleElements((prev) => {
              const newSet = new Set(prev)
              newSet.add(index)
              return newSet
            })
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    console.log("[v0] Found cards to observe:", cards?.length)
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index)
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.scrollWidth / services.length
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      })
    }
  }

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : services.length - visibleCards
    scrollToIndex(newIndex)
  }

  const handleNext = () => {
    const newIndex = currentIndex < services.length - visibleCards ? currentIndex + 1 : 0
    scrollToIndex(newIndex)
  }

  return (
    <section
      id="services"
      className="relative py-12 md:py-20 px-5 sm:px-10 lg:px-20 bg-black pt-40 md:pt-32 mt-0 md:mt-16"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 opacity-0 animate-slide-up-bounce">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-pulse-glow">Auto Care Services</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Premium automotive detailing and protection services for discerning vehicle owners
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative mb-8 md:mb-12">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
              >
                <div className="group relative bg-black border-2 border-white/10 rounded-2xl overflow-hidden hover:border-blue-500 transition-all duration-700 h-full hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-shimmer" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 group-hover:scale-105 transform">
                      {service.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed line-clamp-3 group-hover:text-white/90 transition-colors">
                      {service.description}
                    </p>
                    {service.slug ? (
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-white/90 hover:text-blue-400 font-semibold flex items-center gap-2 group/link transition-all duration-300 hover:gap-4"
                      >
                        View service
                        <ChevronRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                      </Link>
                    ) : (
                      <Link
                        href="/#contact"
                        className="text-white/90 hover:text-blue-400 font-semibold flex items-center gap-2 group/link transition-all duration-300 hover:gap-4"
                      >
                        Contact us
                        <ChevronRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: services.length - visibleCards + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "w-8 bg-blue-500" : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Service Grid List */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-8 opacity-0 animate-fade-in-up">
            <h3 className="text-4xl font-bold text-white mb-4">Our Services</h3>
            <p className="text-white/70 text-lg">Comprehensive detailing packages with transparent pricing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              const isLastItem = index === services.length - 1
              const isVisible = visibleElements.has(index)
              return (
                <div
                  key={index}
                  data-index={index}
                  className={`group glass-dark rounded-xl p-8 hover:border-blue-500 border-2 border-transparent hover:bg-zinc-900/90 transition-all duration-700 w-full max-w-md hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 ${
                    isLastItem ? "lg:col-span-3 mx-auto" : ""
                  } ${isVisible ? "opacity-100 animate-slide-up-bounce" : "opacity-0"}`}
                  style={{ animationDelay: `${(index % 3) * 0.15}s` }}
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-500/40 group-hover:to-blue-600/40 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 animate-float shadow-lg shadow-blue-500/20">
                      <Icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 group-hover:scale-105 transform">
                    {service.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-6 group-hover:text-white/80 transition-colors">
                    {service.description}
                  </p>

                  {/* What's Included */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wide">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.included.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-white/60 flex items-start gap-2 group-hover:text-white/90 transition-all duration-300 hover:translate-x-1"
                        >
                          <span className="text-blue-400 mt-1 text-lg">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="pt-6 border-t border-white/10 group-hover:border-blue-500/30 transition-colors">
                    <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent mb-4 animate-gradient group-hover:scale-110 transform transition-transform">
                      {service.price}
                    </p>
                    {service.slug ? (
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 group/link transition-all duration-300 hover:gap-4 hover:scale-105"
                      >
                        Learn More
                        <ChevronRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                      </Link>
                    ) : (
                      <Link
                        href="/#contact"
                        className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 group/link transition-all duration-300 hover:gap-4 hover:scale-105"
                      >
                        Contact Us
                        <ChevronRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
