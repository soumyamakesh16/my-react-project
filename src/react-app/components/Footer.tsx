import { Link } from "react-router";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-rose-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Viwin</h3>
                <p className="text-xs text-gray-400 -mt-1">LEGGINGS</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              South India's trusted leggings manufacturer based in Tirupur. 
              Premium quality products for wholesale, retail & bulk orders.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-rose-500 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-rose-500 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/products" className="hover:text-rose-400 transition-colors">Chudidar Leggings</Link></li>
              <li><Link to="/products" className="hover:text-rose-400 transition-colors">Ankle Leggings</Link></li>
              <li><Link to="/products" className="hover:text-rose-400 transition-colors">Shimmer Leggings</Link></li>
              <li><Link to="/products" className="hover:text-rose-400 transition-colors">Cotton Leggings</Link></li>
              <li><Link to="/products" className="hover:text-rose-400 transition-colors">Yoga Shorts</Link></li>
              <li><Link to="/products" className="hover:text-rose-400 transition-colors">Capri Leggings</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Service Areas</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/leggings-manufacturer-in-tamil-nadu" className="hover:text-rose-400 transition-colors">Tamil Nadu</Link></li>
              <li><Link to="/leggings-supplier-in-andhra-pradesh" className="hover:text-rose-400 transition-colors">Andhra Pradesh</Link></li>
              <li><Link to="/leggings-wholesale-in-karnataka" className="hover:text-rose-400 transition-colors">Karnataka</Link></li>
              <li><Link to="/leggings-wholesale-in-kerala" className="hover:text-rose-400 transition-colors">Kerala</Link></li>
              <li><Link to="/south-india-leggings-manufacturer" className="hover:text-rose-400 transition-colors">South India</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                <span>Viwin Leggings, Tirupur, Tamil Nadu 641604, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-rose-400 transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <a href="mailto:info@viwinleggings.com" className="hover:text-rose-400 transition-colors">info@viwinleggings.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Viwin Leggings. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-500 text-sm">
              <Link to="/about" className="hover:text-rose-400 transition-colors">About</Link>
              <Link to="/contact" className="hover:text-rose-400 transition-colors">Contact</Link>
              <Link to="/wholesale" className="hover:text-rose-400 transition-colors">Wholesale</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
