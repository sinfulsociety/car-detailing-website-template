import { Check, ArrowLeft, Phone, Droplets } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Interior Car Detailing Services | Hugh's Detailing Miami",
  description:
    "Professional interior car detailing in Miami. Deep cleaning, carpet shampooing, leather conditioning, and odor elimination for a healthier, cleaner vehicle interior.",
}

export default function InteriorDetailingPage() {
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

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
              <Droplets className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Interior Detailing
            </h1>
          </div>

          <p className="text-xl text-white/70 leading-relaxed mb-8">
            Transform your vehicle's interior with our comprehensive deep cleaning service. We eliminate dirt, stains,
            odors, and allergens to create a healthier, more comfortable driving environment.
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

      {/* Services Included Section */}
      <section className="py-20 px-5 sm:px-10 lg:px-20 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Complete Interior Services</h2>

          <div className="space-y-6">
            <div className="bg-black/50 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Deep Carpet & Seat Shampooing</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Heavy-duty enzyme cleaners penetrate deep into fabric fibers to remove embedded dirt, stains, and odors.
                Our extraction process ensures thorough cleaning and faster drying times.
              </p>
              <ul className="space-y-2">
                {[
                  "Hot water extraction for deep cleaning",
                  "Stain removal treatment for tough spots",
                  "Fabric protection application",
                  "Fast-drying techniques",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Leather Cleaning & Conditioning</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Specialized leather care products clean, condition, and protect leather surfaces to prevent cracking,
                fading, and premature aging.
              </p>
              <ul className="space-y-2">
                {[
                  "pH-balanced leather cleaner",
                  "Deep conditioning treatment",
                  "UV protection application",
                  "Color restoration for faded leather",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Complete Vacuuming & Detailing</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Every inch of your interior is meticulously vacuumed and detailed, including hard-to-reach areas that
                accumulate dust and debris.
              </p>
              <ul className="space-y-2">
                {[
                  "High-powered vacuum for deep cleaning",
                  "Crevice tool for tight spaces",
                  "Pet hair removal with specialized tools",
                  "Floor mat deep cleaning",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Dashboard & Console Care</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                All hard surfaces are cleaned and protected with non-greasy, UV-protectant products that prevent fading
                and cracking.
              </p>
              <ul className="space-y-2">
                {[
                  "Dust and grime removal",
                  "UV protectant application",
                  "Streak-free finish",
                  "Button and vent detailing",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Odor Elimination</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Advanced odor neutralizers and optional ozone treatment eliminate persistent smells from smoke, pets,
                food, and mildew.
              </p>
              <ul className="space-y-2">
                {[
                  "Enzyme-based odor neutralizers",
                  "Ozone treatment for severe odors",
                  "Air vent sanitization",
                  "Long-lasting freshness",
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

      {/* Health Benefits Section */}
      <section className="py-20 px-5 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Health Benefits</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Eliminates Bacteria & Allergens",
                description:
                  "Professional cleaning removes bacteria, dust mites, and pollen that can cause illness and allergic reactions.",
              },
              {
                title: "Prevents Mold & Mildew",
                description:
                  "Deep cleaning and sanitization prevent mold growth that can cause respiratory issues and infections.",
              },
              {
                title: "Reduces VOC Exposure",
                description:
                  "Removes volatile organic compounds that cause headaches, dizziness, and other health concerns.",
              },
              {
                title: "Improves Air Quality",
                description:
                  "Clean interiors mean cleaner air for you and your passengers, reducing respiratory problems.",
              },
              {
                title: "Sanitizes High-Touch Areas",
                description:
                  "Steering wheels and gear shifts harbor more bacteria than public restrooms - we sanitize them thoroughly.",
              },
              {
                title: "Enhances Mental Well-Being",
                description: "A clean, organized interior reduces stress and improves focus while driving.",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">{benefit.title}</h3>
                <p className="text-white/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-5 sm:px-10 lg:px-20 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="bg-black/50 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Sedans</h3>
              <p className="text-3xl font-bold text-blue-400">Starting at $199</p>
            </div>
            <div className="bg-black/50 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">SUVs & Trucks</h3>
              <p className="text-3xl font-bold text-blue-400">Starting at $249</p>
            </div>
          </div>
          <p className="text-white/70 mb-8">
            Pricing varies based on vehicle size and condition. Additional services like pet hair removal and ozone
            treatment available.
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
