"use client"

import type React from "react"
import { useEffect, useState, useMemo } from "react"
import GradientBlinds from "./GradientBlinds"

interface SlideConfig {
  gradientColors: string[]
  angle: number
  blindCount: number
  spotlightRadius: number
  spotlightOpacity: number
}

const slides: SlideConfig[] = [
  {
    gradientColors: ["#000000", "#0a0a0a", "#1a1a2e", "#0f3460"],
    angle: 25,
    blindCount: 12,
    spotlightRadius: 0.45,
    spotlightOpacity: 0.3,
  },
  {
    gradientColors: ["#0f0f0f", "#1a1a3e", "#2d1b69", "#4a3f9a"],
    angle: 45,
    blindCount: 10,
    spotlightRadius: 0.5,
    spotlightOpacity: 0.35,
  },
  {
    gradientColors: ["#0a0a0a", "#1e1e2e", "#1f3a5f", "#0f4c75"],
    angle: 15,
    blindCount: 14,
    spotlightRadius: 0.4,
    spotlightOpacity: 0.28,
  },
]

interface GradientSlideshowProps {
  interval?: number
  transitionDuration?: number
}

const GradientSlideshow: React.FC<GradientSlideshowProps> = ({ interval = 6000, transitionDuration = 1500 }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)

      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsTransitioning(false)
      }, transitionDuration)
    }, interval)

    return () => clearInterval(timer)
  }, [interval, transitionDuration])

  const currentConfig = useMemo(() => slides[currentSlide], [currentSlide])
  const nextConfig = useMemo(() => slides[(currentSlide + 1) % slides.length], [currentSlide])

  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0"
        style={{
          opacity: isTransitioning ? 0 : 1,
          transition: `opacity ${transitionDuration}ms ease-in-out`,
          willChange: "opacity",
        }}
      >
        <GradientBlinds
          gradientColors={currentConfig.gradientColors}
          angle={currentConfig.angle}
          noise={0.1}
          blindCount={currentConfig.blindCount}
          blindMinWidth={80}
          spotlightRadius={currentConfig.spotlightRadius}
          spotlightSoftness={1.5}
          spotlightOpacity={currentConfig.spotlightOpacity}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="right"
          mixBlendMode="normal"
        />
      </div>

      {isTransitioning && (
        <div
          className="absolute inset-0"
          style={{
            opacity: 1,
            transition: `opacity ${transitionDuration}ms ease-in-out`,
            willChange: "opacity",
          }}
        >
          <GradientBlinds
            gradientColors={nextConfig.gradientColors}
            angle={nextConfig.angle}
            noise={0.1}
            blindCount={nextConfig.blindCount}
            blindMinWidth={80}
            spotlightRadius={nextConfig.spotlightRadius}
            spotlightSoftness={1.5}
            spotlightOpacity={nextConfig.spotlightOpacity}
            mouseDampening={0.15}
            distortAmount={0}
            shineDirection="right"
            mixBlendMode="normal"
          />
        </div>
      )}
    </div>
  )
}

export default GradientSlideshow
