import { Check, ArrowLeft, Phone, Sparkles } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Ceramic Coating Services | Hugh's Detailing Miami",
  description:
    "Professional ceramic coating application in Miami. Long-lasting paint protection with hydrophobic properties, UV resistance, and enhanced gloss. 2-10 year durability.",
}

export default function CeramicCoatingPage() {
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
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Ceramic Coating
            </h1>
          </div>

          <p className="text-xl text-white/70 leading-relaxed mb-8">
            Transform your vehicle with our professional ceramic coating service. This advanced liquid polymer
            chemically bonds with your paint to create a durable, protective layer that lasts for years while enhancing
            your vehicle's appearance.
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

      {/* Application Process Section */}
      <section className="py-20 px-5 sm:px-10 lg:px-20 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Professional Application Process</h2>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Thorough Cleaning & Decontamination",
                description:
                  "Complete washing, claying, and polishing to remove all imperfections and ensure proper bonding.",
              },
              {
                step: "2",
                title: "Paint Correction",
                description:
                  "Multi-stage polishing to eliminate swirl marks, scratches, and oxidation for a perfect surface.",
              },
              {
                step: "3",
                title: "Coating Application",
                description:
                  "Ceramic coating applied in thin, even layers with proper technique for maximum coverage and bonding.",
              },
              {
                step: "4",
                title: "Curing Process",
                description:
                  "Each layer requires proper curing time to form a strong chemical bond with your vehicle's paint.",
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

          <div className="mt-8 bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-blue-400">Post-Application Care</h3>
            <p className="text-white/70 leading-relaxed">
              After application, coatings typically take 1 to 3 weeks to fully cure. During this time, avoid direct
              sunlight, rain, water, car washing, and debris to ensure optimal bonding and durability.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-5 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Benefits of Ceramic Coating</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Long-Lasting Protection",
                description: "Professional-grade coatings last 2-10 years with proper maintenance and care.",
              },
              {
                title: "Enhanced Gloss & Shine",
                description: "Creates a deep, mirror-like finish that makes your paint color pop dramatically.",
              },
              {
                title: "Hydrophobic Properties",
                description:
                  "Water beads up and rolls off easily, making cleaning effortless and preventing water spots.",
              },
              {
                title: "UV Protection",
                description: "Robust defense against harmful UV rays prevents oxidation, fading, and discoloration.",
              },
              {
                title: "Chemical Resistance",
                description:
                  "Protects against bird droppings, tree sap, bug guts, and harsh chemicals from car washes.",
              },
              {
                title: "Scratch Resistance",
                description: "Adds hardness to your paint surface, helping resist minor scratches and swirl marks.",
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

      {/* Maintenance Section */}
      <section className="py-20 px-5 sm:px-10 lg:px-20 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Maintenance Guidelines</h2>

          <div className="space-y-6">
            <div className="bg-black/50 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Regular Washing</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Wash your vehicle every two weeks using pH-neutral car shampoo. This prevents dirt accumulation and
                maintains the coating's hydrophobic properties.
              </p>
              <ul className="space-y-2">
                {[
                  "Use soft washing mitts and microfiber towels",
                  "Avoid automatic car washes with harsh brushes",
                  "Never wash in direct sunlight",
                  "Use the two-bucket method to prevent scratches",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Periodic Maintenance</h3>
              <ul className="space-y-3">
                {[
                  "Apply ceramic-safe booster products every few months",
                  "Decontamination wash twice a year",
                  "Quarterly check-ins to assess water beading quality",
                  "Annual professional inspection and maintenance",
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

      {/* Pricing Section */}
      <section className="py-20 px-5 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Pricing</h2>
          <p className="text-3xl font-bold text-blue-400 mb-4">Starting at $1,200</p>
          <p className="text-white/70 mb-8">
            Professional-grade ceramic coating with 5-7 year durability. Pricing varies based on vehicle size and
            coating package selected.
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
