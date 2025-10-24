import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SignsCarNeedsDetailingPage() {
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
              Detailing Tips
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
              5 Signs Your Car Needs Professional Detailing
            </h1>
            <div className="flex items-center gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>March 10, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>6 min read</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
            <img
              src="/professional-detailer-cleaning-luxury-car-with-mic.jpg"
              alt="Professional detailing"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Your vehicle works hard for you every day, facing harsh weather, road debris, and environmental
              contaminants. Over time, these elements take their toll. Here are five telltale signs that your car is
              overdue for professional detailing.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">1. Dull, Faded Paint</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              If your car's paint looks dull, faded, or has lost its shine, it's a clear indicator of paint oxidation
              and deterioration. This happens when UV rays, acid rain, and environmental pollutants break down the clear
              coat and paint layers over time.
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              You might notice a chalky or powdery residue on the surface, or the paint may feel rough to the touch.
              These are signs that the protective clear coat has degraded, leaving your paint vulnerable to further
              damage. Professional paint correction and detailing can restore the shine and protect against future
              oxidation.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">2. Visible Swirl Marks and Scratches</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Swirl marks are those fine circular scratches that become visible under direct light, especially on dark
              colored vehicles. They're typically caused by improper washing techniques, automatic car washes, or using
              dirty towels and mitts.
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              While minor scratches might seem cosmetic, they compromise your paint's protective layer and can worsen
              over time. Professional paint correction uses specialized compounds and polishing techniques to remove
              these imperfections, revealing a smooth, mirror-like finish.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">3. Stubborn Stains and Odors</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Interior stains from spills, food, or pets that won't come out with regular cleaning are a major sign you
              need professional help. These stains can penetrate deep into upholstery fibers, carpets, and even
              headliners, making them impossible to remove with household cleaners.
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              Persistent odors are equally problematic. Whether from food, pets, moisture, or smoke, these smells
              indicate bacteria and contaminants embedded in your interior surfaces. Professional detailing uses
              specialized extraction equipment, steam cleaning, and odor elimination treatments to thoroughly clean and
              sanitize your cabin.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">4. Water Spots and Mineral Deposits</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Hard water spots and mineral deposits appear as white or cloudy marks on your paint, glass, and chrome.
              They occur when water evaporates, leaving behind minerals that etch into the surface. If left untreated,
              these deposits can permanently damage your clear coat.
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              Regular washing won't remove these stubborn spots. Professional detailing uses specialized products and
              techniques to safely dissolve and remove mineral deposits without damaging your paint, followed by
              protective treatments to prevent future buildup.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">5. Sticky Surfaces and Visible Grime</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              If your dashboard, steering wheel, door panels, or center console feel sticky or show visible grime
              buildup, it's time for professional interior detailing. This accumulation comes from skin oils, lotions,
              food residue, and environmental dust that regular wiping can't fully remove.
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              Beyond being unsightly and uncomfortable, this grime harbors bacteria and allergens that can affect your
              health. Professional detailing thoroughly cleans and sanitizes all interior surfaces, including
              hard-to-reach areas like air vents, crevices, and under seats.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Benefits of Regular Professional Detailing</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Regular professional detailing isn't just about aesthetics. It provides numerous benefits:
            </p>
            <ul className="list-disc list-inside text-white/80 leading-relaxed mb-6 space-y-2">
              <li>Preserves your vehicle's resale value by maintaining its condition</li>
              <li>Protects against long-term damage from environmental contaminants</li>
              <li>Creates a healthier cabin environment by removing allergens and bacteria</li>
              <li>Extends the life of interior materials like leather, vinyl, and fabric</li>
              <li>Provides peace of mind knowing your investment is properly maintained</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">How Often Should You Detail?</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Most experts recommend professional detailing every 4-6 months, depending on your driving conditions and
              how you use your vehicle. If you frequently drive in harsh conditions, park outdoors, or have pets and
              children, you may benefit from more frequent detailing.
            </p>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">Don't Wait Until It's Too Late</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                If you've noticed any of these signs, your vehicle is telling you it needs professional attention.
                Contact us today to schedule a comprehensive detailing service and restore your car to its former glory.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
              >
                Book Your Detail
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
