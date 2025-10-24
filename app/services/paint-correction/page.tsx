import { ArrowLeft, Phone, Wrench } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Paint Correction Services | Hugh's Detailing Miami",
  description:
    "Professional paint correction in Miami. Remove swirl marks, scratches, oxidation, and restore your vehicle's paint to showroom condition with multi-stage polishing.",
}

export default function PaintCorrectionPage() {
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
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Paint Correction
            </h1>
          </div>

          <p className="text-xl text-white/70 leading-relaxed mb-8">
            Restore your vehicle's paint to showroom perfection with our professional paint correction service. We
            remove swirl marks, scratches, oxidation, and other imperfections to reveal a flawless, mirror-like finish.
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

      {/* What We Fix Section */}
      <section className="py-20 px-5 sm:px-10 lg:px-20 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">What We Correct</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Swirl Marks",
                description: "Fine, circular scratches caused by improper washing or drying techniques.",
              },
              {
                title: "Light Scratches",
                description: "Shallow surface scratches affecting only the clear coat layer.",
              },
              {
                title: "Oxidation",
                description: "Dull, faded paint caused by UV exposure and environmental damage.",
              },
              {
                title: "Water Spots & Etching",
                description: "Mineral deposits and acid rain damage that etch into the clear coat.",
              },
              {
                title: "Bird Dropping Etching",
                description: "Acidic damage from bird droppings that has penetrated the paint surface.",
              },
              {
                title: "Hologramming",
                description: "Buffer trails and haze left by improper polishing techniques.",
              },
            ].map((issue, index) => (
              <div key={index} className="bg-black/50 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">{issue.title}</h3>
                <p className="text-white/70 leading-relaxed">{issue.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-5 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Correction Process</h2>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Thorough Cleaning & Decontamination",
                description:
                  "Complete wash and clay bar treatment to remove all bonded contaminants and prepare the surface.",
              },
              {
                step: "2",
                title: "Paint Inspection",
                description:
                  "Detailed inspection under specialized lighting to identify all defects and measure paint thickness.",
              },
              {
                step: "3",
                title: "Taping & Masking",
                description: "Careful masking of adjacent panels and trim to isolate the correction area.",
              },
              {
                step: "4",
                title: "Multi-Stage Machine Polishing",
                description:
                  "Progressive polishing with different grades of compounds and pads to gently level the clear coat.",
              },
              {
                step: "5",
                title: "Final Polishing & Refining",
                description: "Fine polishing to enhance shine and remove any remaining micro-marring.",
              },
              {
                step: "6",
                title: "Protection Application",
                description: "Application of sealant or ceramic coating to lock in results and protect the finish.",
              },
            ].map((step, index) => (
              <div key={index} className="flex gap-6 bg-white/5 border border-white/10 rounded-xl p-8">
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

      {/* Benefits Section */}
      <section className="py-20 px-5 sm:px-10 lg:px-20 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Paint Correction</h2>

          <div className="space-y-6">
            <div className="bg-black/50 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Permanent Results</h3>
              <p className="text-white/70 leading-relaxed">
                Unlike waxes or fillers that temporarily mask imperfections, paint correction actually removes defects
                from the clear coat, providing lasting, high-quality results that won't wash away.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Enhanced Appearance</h3>
              <p className="text-white/70 leading-relaxed">
                Restores your vehicle's paint to a mirror-like finish with incredible depth and clarity. Colors become
                more vibrant and the overall appearance is dramatically improved.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Perfect Prep for Protection</h3>
              <p className="text-white/70 leading-relaxed">
                Paint correction creates the ideal surface for ceramic coating or paint protection film application,
                ensuring maximum adhesion and performance of protective products.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Increased Resale Value</h3>
              <p className="text-white/70 leading-relaxed">
                A vehicle with flawless paint commands a higher resale price. Paint correction is an investment that
                pays off when it's time to sell or trade in your vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-5 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Pricing</h2>
          <p className="text-3xl font-bold text-blue-400 mb-4">Starting at $600</p>
          <p className="text-white/70 mb-8">
            Pricing varies based on vehicle size, paint condition, and correction level required. We provide before and
            after documentation with every service.
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
