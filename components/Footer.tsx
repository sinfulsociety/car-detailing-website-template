import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12 px-5 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 text-center md:text-left">
          {/* Brand - spans 2 columns on mobile */}
          <div className="col-span-2 md:col-span-1 space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <Image
                src="/images/design-mode/image_2025-10-24_005845227.png"
                alt="Finest Detailing Logo"
                width={45}
                height={45}
                className="rounded-lg"
              />
              <span className="text-white font-bold text-lg">
                {"The White Glove Detailer Auto Detailing"}{" "}
              </span>
            </div>
            {/* here */}
            <p className="text-white/60 leading-relaxed">
              USA's premier mobile automotive detailing and paint protection
              specialists since 2014.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-1 space-y-4">
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/premium-detailing"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Premium Detailing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/paint-protection-film"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Paint Protection Film
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ceramic-coating"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Ceramic Coating
                </Link>
              </li>
              <li>
                <Link
                  href="/services/paint-correction"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Paint Correction
                </Link>
              </li>
              <li>
                <Link
                  href="/services/interior-detailing"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Interior Detailing
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1 space-y-4">
            <h3 className="text-white font-bold mb-4">Locations</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/locations/mesquite"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Mesquite
                </Link>
              </li>
              <li>
                <Link
                  href="/locations/dallas"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Dallas
                </Link>
              </li>
              <li>
                <Link
                  href="/locations/fort-worth"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Fort Worth
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#blog"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-1 space-y-4">
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-white/60 text-sm">
            © 2025 Blue Planet Mobile Car Wash And Detailing. All rights
            reserved.
          </p>
          <p className="text-white/60 text-sm">
            Designed & Developed with ❤️ in USA
          </p>
        </div>
      </div>
    </footer>
  );
}
