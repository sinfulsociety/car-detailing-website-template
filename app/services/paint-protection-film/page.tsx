import { Check, ArrowLeft, Phone, Shield } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Paint Protection Film (PPF) Installation | Hugh's Detailing Miami",
  description:
    "Professional PPF installation in Miami. Protect your vehicle's paint from rock chips, scratches, and environmental damage with self-healing paint protection film.",
}

export default function PPFPage() {
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
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Paint Protection Film
            </h1>
          </div>

          <p className="text-xl text-white/70 leading-relaxed mb-8">
            Protect your vehicle's paint with our professional PPF installation. This transparent, durable thermoplastic
            urethane film shields your car from rock chips, scratches, and environmental damage while maintaining its
            pristine appearance.
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
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-5 sm:px-10 lg:px-20 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">How PPF Works</h2>

          <div className="space-y-8">
            <div className="bg-black/50 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Multi-Layer Construction</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Paint Protection Film features a sophisticated multi-layered design made from high-quality thermoplastic
                polyurethane (TPU):
              </p>
              <ul className="space-y-3">
                {[
                  "Acrylic-based adhesive layer for secure bonding to your vehicle's paint",
                  "Polyurethane core that absorbs impacts from road debris and prevents damage",
                  "Clear top coat that protects against UV radiation and environmental pollutants",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Self-Healing Technology</h3>
              <p className="text-white/70 leading-relaxed">
                A key feature of modern PPF is its self-healing capability. Minor scratches and swirl marks can vanish
                when exposed to heat from sunlight or warm water, as the film's molecular structure realigns itself.
                This ensures your vehicle maintains its flawless appearance over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-5 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Benefits of Paint Protection Film</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Unmatched Physical Protection",
                description:
                  "Shields against rock chips, road debris, scratches, and swirl marks from everyday driving.",
              },
              {
                title: "Chemical Resistance",
                description: "Protects against bird droppings, tree sap, road salt, and other corrosive substances.",
              },
              {
                title: "UV Protection",
                description: "Superior defense against harmful UV radiation prevents paint fading and oxidation.",
              },
              {
                title: "Preserves Resale Value",
                description:
                  "Maintains your vehicle's original gloss and aesthetic appeal, leading to higher resale value.",
              },
              {
                title: "Lower Maintenance Costs",
                description: "Reduces expenses related to paint touch-ups, repairs, and repainting over time.",
              },
              {
                title: "Invisible Protection",
                description:
                  "Crystal-clear film is virtually invisible, preserving your vehicle's original appearance.",
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

      {/* Installation Process Section */}
      <section className="py-20 px-5 sm:px-10 lg:px-20 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Professional Installation Process</h2>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Surface Preparation",
                description:
                  "Thorough cleaning with non-wax, pH-neutral solutions and specialized clay bar techniques to remove all contaminants.",
              },
              {
                step: "2",
                title: "Precision Cutting",
                description:
                  "Film is precision-cut to match your vehicle's exact specifications using computer-aided design.",
              },
              {
                step: "3",
                title: "Expert Application",
                description:
                  "Film is applied using soapy water solutions for accurate positioning and professional squeegees to eliminate air bubbles.",
              },
              {
                step: "4",
                title: "Quality Inspection",
                description:
                  "Final inspection ensures complete contact, flawless finish, and proper edge sealing for long-lasting protection.",
              },
            ].map((step, index) => (
              <div key={index} className="flex gap-6 bg-black/50 border border-white/10 rounded-xl p-8">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-2xl font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-blue-400">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-5 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Coverage Options & Pricing</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Front-End Protection</h3>
              <p className="text-white/70 mb-4">
                Covers hood, bumper, fenders, mirrors, and headlights - the most vulnerable areas.
              </p>
              <p className="text-3xl font-bold text-blue-400">$1,500 - $3,000</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Full Vehicle Protection</h3>
              <p className="text-white/70 mb-4">Complete coverage for maximum protection and peace of mind.</p>
              <p className="text-3xl font-bold text-blue-400">$5,500 - $8,000</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-white/70 mb-8">
              Pricing varies based on vehicle size, complexity, and film quality. Contact us for a personalized quote.
            </p>
            <a
              href="tel:+13055551234"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg hover:scale-105 transition-all shadow-lg shadow-blue-500/30"
            >
              <Phone className="w-5 h-5" />
              Get Your Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
