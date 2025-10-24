import { Check, ArrowLeft, Phone, Sun } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Headlight Restoration Services | Hugh's Detailing Miami",
  description:
    "Professional headlight restoration in Miami. Remove yellowing, oxidation, and cloudiness to restore clarity, improve visibility, and enhance safety.",
}

export default function HeadlightRestorationPage() {
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
              <Sun className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Headlight Restoration
            </h1>
          </div>

          <p className="text-xl text-white/70 leading-relaxed mb-8">
            Restore clarity and brightness to your vehicle's headlights with our professional restoration service. We
            remove yellowing, oxidation, and cloudiness to improve visibility and safety while enhancing your vehicle's
            appearance.
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

      {/* Problem Section */}
      <section className="py-20 px-5 sm:px-10 lg:px-20 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Headlights Become Cloudy</h2>

          <div className="bg-black/50 border border-white/10 rounded-xl p-8 mb-8">
            <p className="text-white/70 leading-relaxed mb-6">
              Headlight yellowing and cloudiness are primarily caused by oxidation from UV rays, environmental factors,
              pollution, and road debris. Over time, the protective coating on headlight lenses breaks down, causing:
            </p>
            <ul className="space-y-3">
              {[
                "Yellow or brown discoloration",
                "Cloudy or hazy appearance",
                "Reduced light output and visibility",
                "Rough, pitted surface texture",
                "Failed vehicle inspections",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-5 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Restoration Process</h2>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Thorough Cleaning",
                description: "Complete cleaning of headlight lenses to remove surface dirt, grime, and contaminants.",
              },
              {
                step: "2",
                title: "Sanding & Oxidation Removal",
                description:
                  "Progressive wet sanding with multiple grits to remove the oxidized layer and surface imperfections.",
              },
              {
                step: "3",
                title: "Polishing & Refinement",
                description:
                  "Machine polishing with specialized compounds to refine the surface and restore crystal-clear clarity.",
              },
              {
                step: "4",
                title: "UV-Resistant Sealant",
                description:
                  "Application of professional-grade UV-resistant coating to protect against future oxidation and yellowing.",
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
          <h2 className="text-4xl font-bold mb-12 text-center">Benefits of Headlight Restoration</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Enhanced Safety",
                description:
                  "Restored headlights provide significantly improved visibility, especially when driving at night or in poor weather conditions.",
              },
              {
                title: "Improved Appearance",
                description:
                  "Clear, bright headlights dramatically enhance your vehicle's overall aesthetic and curb appeal.",
              },
              {
                title: "Cost Savings",
                description:
                  "Professional restoration costs a fraction of headlight replacement, saving you hundreds of dollars.",
              },
              {
                title: "Increased Resale Value",
                description:
                  "Clear headlights make your vehicle more attractive to potential buyers and increase its market value.",
              },
              {
                title: "Extended Lens Lifespan",
                description:
                  "Our UV-resistant sealant prolongs the life of your existing headlight lenses for years to come.",
              },
              {
                title: "Pass Vehicle Inspections",
                description:
                  "Restored headlights meet safety standards and help your vehicle pass required inspections.",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-black/50 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">{benefit.title}</h3>
                <p className="text-white/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-5 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Pricing</h2>
          <p className="text-3xl font-bold text-blue-400 mb-4">$99 - $149</p>
          <p className="text-white/70 mb-4">Per pair of headlights</p>
          <p className="text-white/60 mb-8">
            Includes complete restoration process with UV-resistant sealant. Most vehicles completed in 1-2 hours.
          </p>
          <a
            href="tel:+13055551234"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg hover:scale-105 transition-all shadow-lg shadow-blue-500/30"
          >
            <Phone className="w-5 h-5" />
            Book Now
          </a>
        </div>
      </section>
    </main>
  )
}
