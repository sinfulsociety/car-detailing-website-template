import { ArrowLeft, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Car Detailing Coral Gables FL | Hugh's Detailing Services",
  description:
    "Professional car detailing in Coral Gables, FL. Premium automotive care for luxury vehicles. Serving Miracle Mile, Biltmore, and surrounding areas.",
}

export default function CoralGablesPage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
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
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Coral Gables Detailing
            </h1>
          </div>

          <p className="text-xl text-white/70 leading-relaxed mb-8">
            Premium car detailing services in Coral Gables, FL. Serving the City Beautiful with professional automotive
            care that matches the elegance and sophistication of your neighborhood.
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

      <section className="py-20 px-5 sm:px-10 lg:px-20 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Services in Coral Gables</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Ceramic Coating",
                description: "Long-lasting protection for your luxury vehicle's finish.",
                price: "From $1,200",
              },
              {
                title: "Paint Protection Film",
                description: "Invisible shield against road debris and environmental damage.",
                price: "From $1,500",
              },
              {
                title: "Paint Correction",
                description: "Restore showroom perfection to your vehicle's paint.",
                price: "From $600",
              },
              {
                title: "Interior Detailing",
                description: "Meticulous cleaning and conditioning for premium interiors.",
                price: "From $199",
              },
              {
                title: "Premium Detailing",
                description: "Complete restoration inside and out.",
                price: "From $299",
              },
              {
                title: "Headlight Restoration",
                description: "Crystal-clear headlights for enhanced safety.",
                price: "$99-$149",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-black/50 border border-white/10 rounded-xl p-6 hover:border-blue-500 transition-all"
              >
                <h3 className="text-xl font-bold mb-3 text-blue-400">{service.title}</h3>
                <p className="text-white/70 mb-4 leading-relaxed">{service.description}</p>
                <p className="text-lg font-bold text-white">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Coral Gables Areas We Serve</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Miracle Mile",
              "Biltmore Area",
              "Cocoplum",
              "Gables Estates",
              "Coral Gables Waterway",
              "University of Miami Area",
              "Old Cutler Road",
              "Granada",
              "Ponce Davis",
              "South Gables",
            ].map((area, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-white font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-10 lg:px-20 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Serving Coral Gables' Finest Vehicles</h2>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            Coral Gables is known for its Mediterranean architecture, tree-lined streets, and discerning residents. We
            provide the same level of excellence and attention to detail for your vehicle that you expect from your
            community.
          </p>
          <a
            href="tel:+13055551234"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg hover:scale-105 transition-all shadow-lg shadow-blue-500/30"
          >
            <Phone className="w-5 h-5" />
            Schedule Your Service
          </a>
        </div>
      </section>
    </main>
  )
}
