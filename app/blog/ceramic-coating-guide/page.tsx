import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CeramicCoatingGuidePage() {
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
              Paint Protection
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
              The Ultimate Guide to Ceramic Coating: Is It Worth It?
            </h1>
            <div className="flex items-center gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>March 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>8 min read</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
            <img
              src="/professional-applying-ceramic-coating-to-luxury-ca.jpg"
              alt="Professional applying ceramic coating"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Ceramic coating has revolutionized the way we protect our vehicles. This advanced liquid polymer
              chemically bonds with your car's factory paint, creating a durable protective layer that can last for
              years. But is it really worth the investment? Let's dive deep into everything you need to know.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">What is Ceramic Coating?</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Ceramic coating is an advanced liquid polymer applied to a vehicle's exterior that chemically bonds with
              the factory paint. Unlike traditional wax or sealants that sit on top of the paint, ceramic coating forms
              a permanent or semi-permanent bond, creating a layer of protection that's significantly more durable and
              long-lasting.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Key Benefits of Ceramic Coating</h2>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Long-Term Protection</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Professional ceramic coatings typically last 2-7 years or more with proper maintenance. This creates a
              tough barrier that repels environmental contaminants like bird droppings, tree sap, acid rain, and road
              salt, preventing them from bonding with your paint.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">UV Protection</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              The coating provides excellent UV protection, shielding your paint from the sun's harmful rays. This
              prevents oxidation, fading, and discoloration, keeping your car's color vibrant and glossy for years to
              come.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Scratch Resistance</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              While not completely scratch-proof, ceramic coating adds an extra layer of hardness to your paint. This
              helps resist minor scratches and swirl marks from everyday use and improper washing techniques, keeping
              your finish looking pristine.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Hydrophobic Properties</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              One of the most impressive features is the hydrophobic (water-repellent) effect. Water beads up and rolls
              off the surface effortlessly, reducing water spots and making your car significantly easier to clean. Dirt
              and grime have a harder time adhering to the slick surface, often requiring just a simple rinse to restore
              the shine.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Enhanced Gloss and Shine</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Ceramic coating imparts a deep, reflective gloss that makes your paint color pop. The enhanced shine gives
              your vehicle a showroom-quality appearance that lasts far longer than traditional waxes.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Maintenance Guide</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              While ceramic coating makes maintenance easier, it doesn't eliminate it entirely. Here's how to care for
              your coated vehicle:
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Initial Curing Period (First 7-10 Days)</h3>
            <ul className="list-disc list-inside text-white/80 leading-relaxed mb-6 space-y-2">
              <li>Avoid washing entirely to allow proper curing</li>
              <li>If contamination occurs (bird droppings), gently rinse with water only</li>
              <li>Keep the vehicle garaged if possible</li>
              <li>Avoid rain exposure during this period</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Regular Washing</h3>
            <ul className="list-disc list-inside text-white/80 leading-relaxed mb-6 space-y-2">
              <li>Wash at least once monthly, ideally every two weeks</li>
              <li>Use pH-neutral car shampoo specifically designed for ceramic coatings</li>
              <li>Avoid washing in direct sunlight to minimize water spots</li>
              <li>Use soft washing mitts and microfiber towels</li>
              <li>Never use automatic car washes - they can damage the coating</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Periodic Maintenance</h3>
            <ul className="list-disc list-inside text-white/80 leading-relaxed mb-6 space-y-2">
              <li>Conduct quarterly check-ins to assess water beading quality</li>
              <li>Schedule annual professional inspections and cleaning</li>
              <li>Address any contamination immediately</li>
              <li>Consider ceramic coating boosters every 6-12 months</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Is It Worth the Investment?</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Ceramic coating is considered a worthwhile investment for most vehicle owners, especially those who:
            </p>
            <ul className="list-disc list-inside text-white/80 leading-relaxed mb-6 space-y-2">
              <li>Want to preserve their vehicle's appearance and resale value</li>
              <li>Park outdoors regularly and face environmental exposure</li>
              <li>Prefer easier maintenance and cleaning</li>
              <li>Plan to keep their vehicle for several years</li>
              <li>Own luxury, exotic, or high-value vehicles</li>
            </ul>

            <p className="text-white/80 leading-relaxed mb-6">
              While the initial cost may seem high compared to traditional waxing, the long-term benefits, reduced
              maintenance time, and superior protection make ceramic coating an excellent investment in your vehicle's
              future.
            </p>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Protect Your Investment?</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Our professional ceramic coating services ensure your vehicle receives the highest quality protection
                available. Contact us today for a consultation and quote.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
