import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function MaintainCarShinePage() {
  return (
    <div className="min-h-screen bg-black">
      <article className="relative py-24 px-5 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold backdrop-blur-sm inline-block mb-4">
              Maintenance
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
              How to Maintain Your Car's Shine Between Details
            </h1>
            <div className="flex items-center gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>February 28, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>5 min read</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
            <img
              src="/person-washing-shiny-luxury-sports-car-with-foam.jpg"
              alt="Washing luxury car"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Professional detailing gives your car that showroom shine, but maintaining it between appointments doesn't
              have to be complicated. With these expert tips and simple maintenance routines, you can keep your vehicle
              looking its best all year round.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Daily Quick Maintenance</h2>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Microfiber Cloth Dusting</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Keep a clean microfiber cloth in your car for quick daily dusting. This prevents dust and light debris
              from accumulating and dulling your finish. A simple wipe-down takes just minutes but makes a significant
              difference in maintaining that fresh appearance.
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              Focus on horizontal surfaces like the hood, roof, and trunk where dust settles most. Never use a dry cloth
              on heavy dirt, as this can cause scratches. For anything more than light dust, use proper washing
              techniques.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Quick Detailer Spray</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Apply a quality quick detailer spray after each wash or light dusting. These products add instant gloss,
              slickness, and light protection while helping reduce dust buildup. They're perfect for refreshing your
              finish between full washes and take only minutes to apply.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Weekly Care Routine</h2>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Proper Washing Technique</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              When washing your car, always use the two-bucket method: one with soapy water and one with clean rinse
              water. This prevents dirt from being reintroduced to your paint, reducing the risk of swirl marks and
              scratches.
            </p>
            <ul className="list-disc list-inside text-white/80 leading-relaxed mb-6 space-y-2">
              <li>Use pH-neutral car shampoo designed for automotive paint</li>
              <li>Wash from top to bottom, allowing gravity to help remove dirt</li>
              <li>Use separate mitts for wheels and paint</li>
              <li>Rinse thoroughly before washing to remove loose debris</li>
              <li>Dry with clean microfiber towels or a dedicated drying towel</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Waterless or Rinseless Wash</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              For light dust or fingerprints, consider using a waterless or rinseless wash solution. These products are
              specially formulated to safely lift and encapsulate dirt without scratching, making them perfect for quick
              touch-ups when a full wash isn't necessary.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Monthly Protection Boosters</h2>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Ceramic Spray Coating</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Apply a ceramic spray coating every few weeks to boost water beading and gloss. While not as durable as
              professional ceramic coatings, these spray products provide excellent interim protection and are easy to
              apply at home.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Wax or Sealant Application</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              If you don't have a ceramic coating, apply a quality car wax or sealant every 2-3 months. This provides a
              protective layer that repels water, dirt, and contaminants, making it easier to maintain a clean and
              glossy surface.
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              Modern synthetic sealants typically last longer than traditional carnauba wax and provide excellent
              protection. Choose products specifically designed for your paint type and climate conditions.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Immediate Attention Items</h2>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Emergency Cleanup Kit</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Keep an emergency cleanup kit in your trunk with microfiber towels and detail spray. This allows you to
              quickly address:
            </p>
            <ul className="list-disc list-inside text-white/80 leading-relaxed mb-6 space-y-2">
              <li>Bird droppings (highly acidic and can etch paint within hours)</li>
              <li>Bug splatter (contains acids that damage clear coat)</li>
              <li>Tree sap (becomes harder to remove over time)</li>
              <li>Water spots from sprinklers or rain</li>
            </ul>

            <p className="text-white/80 leading-relaxed mb-6">
              Never let these contaminants sit for extended periods. The longer they remain on your paint, the more
              damage they cause and the harder they become to remove.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Environmental Protection</h2>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Smart Parking Choices</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Where you park significantly impacts your car's condition. Whenever possible:
            </p>
            <ul className="list-disc list-inside text-white/80 leading-relaxed mb-6 space-y-2">
              <li>Park in a garage to protect from UV rays, weather, and debris</li>
              <li>Use a quality car cover if garage parking isn't available</li>
              <li>Avoid parking under trees (sap, bird droppings, falling branches)</li>
              <li>Choose shaded areas to minimize UV exposure and heat</li>
              <li>Stay away from sprinklers that cause water spots</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">What to Avoid</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Certain practices can undo all your maintenance efforts:
            </p>
            <ul className="list-disc list-inside text-white/80 leading-relaxed mb-6 space-y-2">
              <li>Automatic car washes with harsh brushes that create swirl marks</li>
              <li>Dish soap or household cleaners that strip protective coatings</li>
              <li>Washing in direct sunlight, which causes water spots</li>
              <li>Using dirty towels or sponges that scratch paint</li>
              <li>Letting dirt and contaminants sit for extended periods</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Maintenance Schedule</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Here's a simple schedule to keep your car looking its best:
            </p>
            <ul className="list-disc list-inside text-white/80 leading-relaxed mb-6 space-y-2">
              <li>Daily: Quick microfiber dusting as needed</li>
              <li>Weekly: Proper wash with quality products</li>
              <li>Bi-weekly: Quick detailer spray application</li>
              <li>Monthly: Ceramic spray booster or wax application</li>
              <li>Quarterly: Professional detailing service</li>
              <li>Annually: Paint correction and protection renewal</li>
            </ul>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">Professional Detailing Makes It Easier</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                While these maintenance tips help preserve your car's appearance, nothing beats professional detailing.
                Our services provide the deep cleaning and protection that make daily maintenance effortless.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
              >
                Schedule Your Detail
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
