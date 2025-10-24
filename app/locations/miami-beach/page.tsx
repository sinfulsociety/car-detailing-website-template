import { ArrowLeft, Phone, MapPin, Clock, Mail } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Car Detailing Miami Beach FL | Hugh's Detailing Services",
  description:
    "Professional car detailing services in Miami Beach, FL. Premium paint protection, ceramic coating, and interior detailing. Serving South Beach, Mid-Beach, and North Beach areas.",
}

export default function MiamiBeachPage() {
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
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Miami Beach Detailing
            </h1>
          </div>

          <p className="text-xl text-white/70 leading-relaxed mb-8">
            Premium car detailing services in Miami Beach, FL. We serve South Beach, Mid-Beach, North Beach, and
            surrounding areas with professional automotive care that protects your vehicle from the harsh coastal
            environment.
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

      {/* Services for Miami Beach Section */}
      <section className="py-20 px-5 sm:px-10 lg:px-20 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Services in Miami Beach</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Ceramic Coating",
                description: "Protect against salt air and UV damage with long-lasting ceramic protection.",
                price: "From $1,200",
              },
              {
                title: "Paint Protection Film",
                description: "Shield your paint from road debris and coastal elements.",
                price: "From $1,500",
              },
              {
                title: "Paint Correction",
                description: "Remove oxidation and restore your vehicle's shine.",
                price: "From $600",
              },
              {
                title: "Interior Detailing",
                description: "Deep cleaning to remove sand, salt, and coastal grime.",
                price: "From $199",
              },
              {
                title: "Premium Detailing",
                description: "Complete interior and exterior restoration.",
                price: "From $299",
              },
              {
                title: "Headlight Restoration",
                description: "Restore clarity for safer night driving.",
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

      {/* Areas Served Section */}
      <section className="py-20 px-5 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Miami Beach Areas We Serve</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "South Beach (SoBe)",
              "Mid-Beach",
              "North Beach",
              "Sunset Islands",
              "Star Island",
              "Fisher Island",
              "Venetian Islands",
              "Bal Harbour",
              "Surfside",
              "Bay Harbor Islands",
            ].map((area, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-white font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-5 sm:px-10 lg:px-20 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Miami Beach Residents Choose Us</h2>

          <div className="space-y-6">
            <div className="bg-black/50 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Coastal Environment Expertise</h3>
              <p className="text-white/70 leading-relaxed">
                We understand the unique challenges of maintaining vehicles in Miami Beach's coastal environment. Salt
                air, intense UV rays, and humidity require specialized protection and care that we provide with every
                service.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Luxury Vehicle Specialists</h3>
              <p className="text-white/70 leading-relaxed">
                Miami Beach is home to some of the world's finest vehicles. Our team has extensive experience working
                with luxury and exotic cars, ensuring your investment receives the premium care it deserves.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Convenient Service</h3>
              <p className="text-white/70 leading-relaxed">
                We offer flexible scheduling to accommodate your busy Miami Beach lifestyle. Whether you're in South
                Beach, Mid-Beach, or North Beach, we make professional detailing convenient and accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-5 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Phone</h3>
              <a href="tel:+13055551234" className="text-white/70 hover:text-blue-400 transition-colors">
                (305) 555-1234
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <a href="mailto:info@hughsdetailing.com" className="text-white/70 hover:text-blue-400 transition-colors">
                info@hughsdetailing.com
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Hours</h3>
              <p className="text-white/70">Mon-Fri: 8AM-6PM</p>
              <p className="text-white/70">Sat-Sun: 9AM-5PM</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="tel:+13055551234"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg hover:scale-105 transition-all shadow-lg shadow-blue-500/30"
            >
              <Phone className="w-5 h-5" />
              Call for Miami Beach Service
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
