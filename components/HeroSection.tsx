"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Shield, Award, Clock } from "lucide-react";
import BookingModal from "./BookingModal";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const mobileBackgroundImages = [
    "/stunning-blue-porsche-911-with-perfect-paint-after.jpg",
    "/luxury-ferrari-supercar-with-glossy-finish-after-d.jpg",
    "/white-tesla-model-s-with-flawless-ceramic-coating-.jpg",
    "/professional-detailer-applying-ceramic-coating-to-.jpg",
    "/detailer-polishing-black-lamborghini-with-machine-.jpg",
  ];

  const desktopBackgroundImages = [
    "/stunning-blue-porsche-911-with-perfect-paint-after.jpg",
    "/luxury-ferrari-supercar-with-glossy-finish-after-d.jpg",
    "/white-tesla-model-s-with-flawless-ceramic-coating-.jpg",
    "/professional-detailer-applying-ceramic-coating-to-.jpg",
    "/detailer-polishing-black-lamborghini-with-machine-.jpg",
    "/red-ferrari-supercar-with-perfect-mirror-finish-af.jpg",
    "/detailer-applying-paint-protection-film-to-mercede.jpg",
    "/car-paint-correction-polishing-machine-on-black-ca.jpg",
    "/professional-steam-cleaning-luxury-car-interior-le.jpg",
    "/paint-protection-film-being-installed-on-car-hood-.jpg",
    "/person-washing-shiny-luxury-sports-car-with-foam-a.jpg",
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [backgroundImages, setBackgroundImages] = useState(
    mobileBackgroundImages
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setBackgroundImages(
        window.innerWidth < 768
          ? mobileBackgroundImages
          : desktopBackgroundImages
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const nextIndex = (prev + 1) % backgroundImages.length;
        return nextIndex;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [backgroundImages]);

  return (
    <>
      <section
        id="home"
        className="relative min-h-fit md:min-h-screen flex items-start md:items-center justify-center px-5 sm:px-10 lg:px-20 overflow-hidden pt-24 md:pt-0"
      >
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-all duration-[1800ms] ease-in-out ${
                index === currentImageIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-110"
              }`}
              style={{
                willChange:
                  index === currentImageIndex ||
                  index === (currentImageIndex + 1) % backgroundImages.length
                    ? "opacity, transform"
                    : "auto",
              }}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Premium auto detailing showcase ${index + 1}`}
                className="w-full h-full object-cover md:object-center object-[center_30%]"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-blue-600/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </div>

        <div className="max-w-6xl mx-auto w-full pb-0 pt-2 md:py-20 lg:py-24 relative z-10">
          <div
            className={`space-y-6 md:space-y-8 max-w-4xl mx-auto text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div className="inline-block mt-4 md:mt-0">
              <span className="px-6 py-3 glass border-2 border-blue-500/50 rounded-full text-blue-300 text-sm font-semibold relative overflow-hidden group animate-scale-in hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                <span className="relative z-10">
                  Vehicle Protection Specialists
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
              </span>
            </div>

            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight text-white text-balance transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-20 scale-95"
              }`}
              style={{
                textShadow:
                  "0 4px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.5)",
              }}
            >
              We drive for <span className="text-blue-400">perfection.</span>
            </h1>

            <p
              className={`text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto text-pretty leading-relaxed px-2 transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.7)" }}
            >
              {
                "Detailing To GO - USA's premier mobile automotive detailing and paint protection specialists. Transform your vehicle with our expert care and attention to detail."
              }
            </p>
            {/* change this*/}
            <div
              className={`flex justify-center pt-2 md:pt-4 transition-all duration-1000 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <button
                onClick={() => setBookingOpen(true)}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-semibold text-white transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/60 animate-glow hover:from-blue-500 hover:to-blue-600"
              >
                Make a Booking
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>

            <div
              className={`grid grid-cols-3 gap-4 md:gap-6 pt-10 md:pt-6 mt-12 md:mt-0 border-t border-white/20 max-w-3xl mx-auto transition-all duration-1000 delay-800 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <div className="flex flex-col items-center gap-1.5 md:gap-2 group cursor-pointer">
                <Shield className="w-8 h-8 md:w-10 md:h-10 text-blue-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-float drop-shadow-lg" />
                <p className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  10+
                </p>
                <p className="text-xs md:text-sm text-white/70 group-hover:text-white transition-colors">
                  Years Experience
                </p>
              </div>
              <div className="flex flex-col items-center gap-1.5 md:gap-2 group cursor-pointer">
                <Award
                  className="w-8 h-8 md:w-10 md:h-10 text-blue-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-float drop-shadow-lg"
                  style={{ animationDelay: "0.5s" }}
                />
                <p className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  5000+
                </p>
                <p className="text-xs md:text-sm text-white/70 group-hover:text-white transition-colors">
                  Cars Detailed
                </p>
              </div>
              <div className="flex flex-col items-center gap-1.5 md:gap-2 group cursor-pointer">
                <Clock
                  className="w-8 h-8 md:w-10 md:h-10 text-blue-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-float drop-shadow-lg"
                  style={{ animationDelay: "1s" }}
                />
                <p className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  24/7
                </p>
                <p className="text-xs md:text-sm text-white/70 group-hover:text-white transition-colors">
                  Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
}
