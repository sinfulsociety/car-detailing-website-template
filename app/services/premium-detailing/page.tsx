import { Check, ArrowLeft, Phone } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Premium Car Detailing Services | Hugh's Detailing Miami",
  description:
    "Professional premium car detailing services in Miami. Complete interior and exterior detailing with paint protection, ceramic coating, and more. Book your appointment today.",
}

export default function PremiumDetailingPage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-5 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Premium Car Detailing Services
          </h1>
          <p className="text-xl text-white/70 leading-relaxed mb-8">
            Experience the ultimate in automotive care with our comprehensive premium detailing services. We go beyond
            standard car washes to restore and protect your vehicle's beauty and value.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+13055551234"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg hover:scale-105 transition-all shadow-lg shadow-blue-500/30"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-5 sm:px-10 lg:px-20 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">What's Included</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-black/50 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Exterior Detailing</h3>
              <ul className="space-y-4">
                {[
                  "Thorough hand washing with pH-neutral soaps",
                  "Clay bar treatment to remove embedded contaminants",
                  "Multi-stage polishing to correct imperfections",
                  "High-quality wax or paint sealant application",
                  "Meticulous wheel, tire, and wheel well cleaning",
                  "Engine bay cleaning and detailing",
                  "Headlight restoration for improved visibility",
                  "Trim and plastic restoration",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Interior Detailing</h3>
              <ul className="space-y-4">
                {[
                  "Deep carpet and seat shampooing",
                  "Complete vacuuming of all surfaces and crevices",
                  "Leather cleaning and conditioning",
                  "Dashboard and console cleaning with UV protectant",
                  "Interior glass cleaning for crystal clarity",
                  "Advanced odor removal and neutralization",
                  "Pet hair removal treatment",
                  "Door jamb and trunk detailing",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-5 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Benefits of Premium Detailing</h2>

          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Enhanced Resale Value</h3>
              <p className="text-white/70 leading-relaxed">
                A consistently detailed car often commands a higher resale price. Our premium detailing services
                maintain your vehicle's showroom appearance, making it more attractive to potential buyers and
                increasing its market value.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Healthier Driving Environment</h3>
              <p className="text-white/70 leading-relaxed">
                Professional interior detailing eliminates allergens, dust, and bacteria that accumulate over time. Our
                deep cleaning process improves air quality inside your vehicle, creating a healthier and more
                comfortable environment for you and your passengers.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Long-Term Protection</h3>
              <p className="text-white/70 leading-relaxed">
                Our detailing services provide comprehensive protection for your car's surfaces against premature wear
                and environmental hazards. From UV damage to road contaminants, we apply protective coatings and
                treatments that preserve your vehicle's finish for years to come.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Preserves Vehicle Longevity</h3>
              <p className="text-white/70 leading-relaxed">
                Regular premium detailing ensures your car's longevity by protecting it from dirt, UV rays, and moisture
                damage. By maintaining both the interior and exterior, we help prevent deterioration and keep your
                vehicle in optimal condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-5 sm:px-10 lg:px-20 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Pricing</h2>
          <p className="text-3xl font-bold text-blue-400 mb-8">Starting at $299</p>
          <p className="text-white/70 mb-8">
            Final pricing depends on vehicle size, condition, and specific services required. Contact us for a detailed
            quote tailored to your vehicle's needs.
          </p>
          <a
            href="tel:+13055551234"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg hover:scale-105 transition-all shadow-lg shadow-blue-500/30"
          >
            <Phone className="w-5 h-5" />
            Get Your Quote
          </a>
        </div>
      </section>
    </main>
  )
}
