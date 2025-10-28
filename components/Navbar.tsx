"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import BookingModal from "./BookingModal";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleBookingClick = () => {
    setIsMobileMenuOpen(false);
    setBookingOpen(true);
  };

  const handleCallClick = () => {
    window.location.href = "tel:+18885551234";
  };

  const services = [
    { name: "Premium Detailing", href: "/services/premium-detailing" },
    { name: "Paint Protection Film", href: "/services/paint-protection-film" },
    { name: "Ceramic Coating", href: "/services/ceramic-coating" },
    { name: "Paint Correction", href: "/services/paint-correction" },
    { name: "Interior Detailing", href: "/services/interior-detailing" },
    { name: "Headlight Restoration", href: "/services/headlight-restoration" },
  ];

  const locations = [
    { name: "Tampa", href: "/locations/tampa" },
    { name: "Dallas", href: "/locations/dallas" },
    { name: "Fort Worth", href: "/locations/fort-worth" },
  ];

  const blogPosts = [
    { name: "Ceramic Coating Guide", href: "/blog/ceramic-coating-guide" },
    {
      name: "Signs Your Car Needs Detailing",
      href: "/blog/signs-car-needs-detailing",
    },
    {
      name: "Paint Correction vs Ceramic Coating",
      href: "/blog/paint-correction-vs-ceramic-coating",
    },
    { name: "Maintain Your Car's Shine", href: "/blog/maintain-car-shine" },
    {
      name: "Paint Protection Film Guide",
      href: "/blog/paint-protection-film-guide",
    },
    {
      name: "Interior Detailing Health Benefits",
      href: "/blog/interior-detailing-health",
    },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`fixed top-4 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full backdrop-blur-md md:flex border transition-all duration-300 ${
          isScrolled
            ? "max-w-6xl px-4 border-white/20 shadow-2xl"
            : "max-w-7xl px-6 border-white/10 shadow-none"
        } py-3`}
        style={{
          background: isScrolled
            ? "rgba(10, 10, 10, 0.9)"
            : "rgba(10, 10, 10, 0.5)",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <a
          className={`z-50 flex items-center justify-center gap-2 transition-all duration-300 ${
            isScrolled ? "ml-2" : ""
          }`}
          href="/"
        >
          <div className="flex items-center gap-2">
            <Image
              src="/images/design-mode/logo.png"
              alt="Finest Detailing Logo"
              width={45}
              height={45}
              className="rounded-lg"
            />
            <span className="text-white font-bold text-lg">
              {"BPS Car Detailing Services Orlando"}
              {/* change this*/}
            </span>
          </div>
        </a>

        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-white/70 transition duration-200 md:flex px-52">
          <button
            onClick={() => scrollToSection("home")}
            className="relative px-3 py-2 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <span className="relative z-20">Home</span>
          </button>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="relative px-3 py-2 text-white/80 hover:text-white transition-colors cursor-pointer flex items-center gap-1">
              <span className="relative z-20">Services</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl py-2 z-50">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2.5 text-white/80 hover:text-white hover:bg-white/10 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Locations Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLocationsOpen(true)}
            onMouseLeave={() => setLocationsOpen(false)}
          >
            <button className="relative px-3 py-2 text-white/80 hover:text-white transition-colors cursor-pointer flex items-center gap-1">
              <span className="relative z-20">Locations</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            {locationsOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl py-2 z-50">
                {locations.map((location) => (
                  <Link
                    key={location.href}
                    href={location.href}
                    className="block px-4 py-2.5 text-white/80 hover:text-white hover:bg-white/10 transition-colors text-sm"
                  >
                    {location.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => scrollToSection("testimonials")}
            className="relative px-3 py-2 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <span className="relative z-20">Testimonials</span>
          </button>

          {/* Blog Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setBlogOpen(true)}
            onMouseLeave={() => setBlogOpen(false)}
          >
            <button className="relative px-3 py-2 text-white/80 hover:text-white transition-colors cursor-pointer flex items-center gap-1">
              <span className="relative z-20">Blog</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {blogOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-black/95 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl py-2 z-50">
                {blogPosts.map((post) => (
                  <Link
                    key={post.href}
                    href={post.href}
                    className="block px-4 py-2.5 text-white/80 hover:text-white hover:bg-white/10 transition-colors text-sm"
                  >
                    {post.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleCallClick}
            className="rounded-full font-semibold relative cursor-pointer hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 text-center px-5 py-2.5 text-sm bg-white/10 border border-white/20 text-white hover:bg-white/20"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </button>
          <button
            onClick={handleBookingClick}
            className="rounded-full font-semibold relative cursor-pointer hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 text-center px-6 py-2.5 text-sm bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30"
          >
            <Mail className="w-4 h-4" />
            Book Now
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className={`fixed top-4 z-[9999] flex w-auto flex-row items-center justify-between rounded-full backdrop-blur-md md:hidden px-4 py-3 border transition-all duration-300 ${
          isScrolled
            ? "border-white/20 shadow-2xl"
            : "border-white/10 shadow-none"
        }`}
        style={{
          background: isScrolled
            ? "rgba(10, 10, 10, 0.9)"
            : "rgba(10, 10, 10, 0.5)",
          left: "1rem",
          right: "1rem",
          width: "calc(100% - 2rem)",
        }}
      >
        <a className="flex items-center justify-center gap-2" href="/">
          <Image
            src="/images/design-mode/logo.png"
            alt="Finest Detailing Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-white font-bold">
            BPS Car Detailing Services Orlando
          </span>
          {/* change this*/}
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 transition-colors hover:bg-white/10"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span
              className={`block w-4 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="absolute top-24 left-4 right-4 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-6 max-h-[80vh] overflow-y-auto"
            style={{ background: "rgba(10, 10, 10, 0.95)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left px-4 py-3 text-lg font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
              >
                Home
              </button>

              <div className="space-y-2">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full text-left px-4 py-3 text-lg font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10 flex items-center justify-between"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {servicesOpen && (
                  <div className="pl-4 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => setLocationsOpen(!locationsOpen)}
                  className="w-full text-left px-4 py-3 text-lg font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10 flex items-center justify-between"
                >
                  Locations
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      locationsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {locationsOpen && (
                  <div className="pl-4 space-y-1">
                    {locations.map((location) => (
                      <Link
                        key={location.href}
                        href={location.href}
                        className="block px-4 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {location.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left px-4 py-3 text-lg font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
              >
                Testimonials
              </button>

              <div className="space-y-2">
                <button
                  onClick={() => setBlogOpen(!blogOpen)}
                  className="w-full text-left px-4 py-3 text-lg font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10 flex items-center justify-between"
                >
                  Blog
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      blogOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {blogOpen && (
                  <div className="pl-4 space-y-1">
                    {blogPosts.map((post) => (
                      <Link
                        key={post.href}
                        href={post.href}
                        className="block px-4 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {post.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-white/20 pt-4 mt-2 space-y-3">
                <button
                  onClick={handleCallClick}
                  className="flex items-center justify-center gap-2 px-4 py-3 text-lg font-bold text-center rounded-lg bg-white/10 border border-white/20 text-white w-full hover:bg-white/20"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </button>
                <button
                  onClick={handleBookingClick}
                  className="flex items-center justify-center gap-2 px-4 py-3 text-lg font-bold text-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white w-full"
                >
                  <Mail className="w-5 h-5" />
                  Book Now
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
}
