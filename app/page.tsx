import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import DetailingSlideshow from "@/components/DetailingSlideshow"
import TestimonialsSection from "@/components/TestimonialsSection"
import BlogSection from "@/components/BlogSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import EmailPopup from "@/components/EmailPopup"
import ChatWidget from "@/components/ChatWidget"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <Navbar />

      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <DetailingSlideshow />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </div>

      <EmailPopup />
      <ChatWidget />
    </main>
  )
}
