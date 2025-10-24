import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PPFGuidePage() {
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
              The Science Behind Paint Protection Film (PPF)
            </h1>
            <div className="flex items-center gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>February 20, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>9 min read</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
            <img
              src="/paint-protection-film-being-installed-on-car-hood.jpg"
              alt="PPF installation"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Paint Protection Film (PPF), often called "clear bra," represents the pinnacle of automotive paint
              protection technology. This transparent, durable film provides unmatched defense against the hazards your
              vehicle faces every day. Let's explore the science behind this remarkable technology.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">What is Paint Protection Film?</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              PPF is a transparent thermoplastic urethane film applied to vehicles to shield the paint from scratches,
              chips, and environmental damage. Originally developed for military applications to protect helicopter
              rotor blades from debris, this technology has evolved into the ultimate paint protection solution for
              automotive enthusiasts and luxury vehicle owners.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Multi-Layer Construction</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Modern PPF works through sophisticated multi-layered construction, typically made from high-quality
              thermoplastic polyurethane (TPU). Each layer serves a specific protective function:
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">1. Clear Top Coat</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              The outermost layer provides protection against UV radiation and environmental pollutants. This layer also
              contains the self-healing properties that make modern PPF so impressive. When exposed to heat from
              sunlight or warm water, minor scratches and swirl marks literally disappear as the molecular structure
              realigns itself.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">2. Polyurethane Core</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              The thick middle layer is where the real protection happens. This polyurethane core absorbs impacts from
              road debris, preventing rock chips and scratches from reaching your paint. Its elasticity allows it to
              flex and return to its original shape after impact, distributing force across a wider area.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">3. Acrylic Adhesive Layer</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              The bottom layer uses advanced acrylic-based adhesive for secure bonding to your vehicle's paint. This
              adhesive is specifically formulated to create a strong bond while remaining removable without damaging the
              paint underneath, even after years of protection.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Self-Healing Technology</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              One of the most remarkable features of modern PPF is its self-healing capability. Here's how it works:
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              The top coat contains elastomeric polymers with shape memory properties. When the film is scratched, these
              polymers are temporarily deformed. However, when heat is applied (from sunlight, warm water, or even a
              heat gun), the molecular chains regain mobility and return to their original configuration, effectively
              erasing minor scratches and swirl marks.
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              This technology means your PPF maintains its pristine appearance throughout its lifespan, continuously
              healing from the minor abrasions that would permanently damage unprotected paint.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Comprehensive Protection Benefits</h2>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Physical Impact Protection</h3>
            <p className="text-white/80 leading-relaxed mb-6">PPF offers unmatched defense against:</p>
            <ul className="list-disc list-inside text-white/80 leading-relaxed mb-6 space-y-2">
              <li>Rock chips from highway driving</li>
              <li>Road debris and gravel</li>
              <li>Door dings in parking lots</li>
              <li>Scratches from branches and bushes</li>
              <li>Swirl marks from improper washing</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Chemical Resistance</h3>
            <p className="text-white/80 leading-relaxed mb-6">The film shields against chemical exposure from:</p>
            <ul className="list-disc list-inside text-white/80 leading-relaxed mb-6 space-y-2">
              <li>Bird droppings (highly acidic)</li>
              <li>Tree sap and pollen</li>
              <li>Road salt and de-icing chemicals</li>
              <li>Acid rain</li>
              <li>Bug splatter</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">UV Protection</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              PPF provides superior defense against harmful UV radiation, preventing paint fading and oxidation. This is
              especially crucial for vehicles with vibrant or dark colors that are more susceptible to UV damage.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Stain Prevention</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              The hydrophobic properties of quality PPF cause water and liquids to bead up and roll off, preventing
              water spots and making it harder for contaminants to adhere to the surface.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Professional Installation Process</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              The effectiveness of PPF depends heavily on proper installation. Professional application involves:
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">1. Surface Preparation</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              The paint must be thoroughly cleaned with non-wax, pH-neutral solutions. Specialized clay bar techniques
              remove embedded contaminants that could create imperfections under the film. Any existing paint defects
              are corrected before installation to ensure a flawless finish.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">2. Precision Cutting</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Modern PPF is precision-cut using computer-aided design (CAD) patterns specific to your vehicle's make and
              model. This ensures perfect fitment and coverage without the need for cutting on the vehicle, which could
              damage the paint.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">3. Application</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              The film is applied using specialized soapy water solutions that allow for accurate positioning.
              Professional installers use squeegees to eliminate air bubbles and excess moisture, ensuring complete
              contact between the film and paint surface.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">4. Post-Installation Care</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              After installation, the film needs time to cure and fully bond with the paint. This typically takes 24-48
              hours, during which the vehicle should be kept dry and out of direct sunlight.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Coverage Options</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              PPF can be applied to various areas depending on your needs and budget:
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Partial Front Coverage</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Protects the most vulnerable areas: front bumper, hood, fenders, side mirrors, and headlights. This is the
              most popular option, offering excellent protection for high-impact zones.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Full Front Coverage</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Extends protection to include the entire front fascia, A-pillars, and rocker panels. Ideal for vehicles
              that see frequent highway driving or harsh conditions.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Full Vehicle Wrap</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Provides complete protection for every painted surface. This premium option is popular with exotic and
              luxury vehicle owners who want maximum protection and preservation of resale value.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Long-Term Value</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              While PPF represents a significant initial investment, it provides exceptional long-term value:
            </p>
            <ul className="list-disc list-inside text-white/80 leading-relaxed mb-6 space-y-2">
              <li>Preserves original paint condition, maximizing resale value</li>
              <li>Eliminates or reduces paint repair costs</li>
              <li>Lasts 7-10 years with proper care</li>
              <li>Maintains vehicle aesthetics throughout ownership</li>
              <li>Provides peace of mind for daily driving</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Maintenance and Care</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              PPF is remarkably low-maintenance, but following these guidelines ensures optimal performance:
            </p>
            <ul className="list-disc list-inside text-white/80 leading-relaxed mb-6 space-y-2">
              <li>Wait 7 days after installation before washing</li>
              <li>Use pH-neutral car shampoo and soft microfiber towels</li>
              <li>Avoid automatic car washes with harsh brushes</li>
              <li>Remove contaminants promptly to prevent staining</li>
              <li>Apply ceramic coating over PPF for enhanced protection and easier cleaning</li>
            </ul>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">Protect Your Investment with Professional PPF</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Our certified installers use only premium PPF products and proven techniques to ensure flawless
                protection for your vehicle. Contact us today to discuss coverage options and pricing.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
              >
                Get PPF Quote
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
