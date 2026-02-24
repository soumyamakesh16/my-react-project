import { Link } from "react-router";
import { ArrowRight, Factory, Truck, Users, MapPin, CheckCircle2, Star, Package, Sparkles, ShieldCheck, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/react-app/components/ui/button";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";
import { categories, regions } from "@/react-app/data/products";

const testimonials = [
  { name: "Rajesh Kumar", location: "Chennai", text: "Best quality leggings at wholesale prices. Been ordering for 3 years now!", rating: 5 },
  { name: "Priya Fashions", location: "Bangalore", text: "Reliable delivery and excellent color range. Our customers love Viwin products.", rating: 5 },
  { name: "Lakshmi Textiles", location: "Kochi", text: "Low MOQ and great margins for retailers. Highly recommended!", rating: 5 },
  { name: "Fashion Hub", location: "Vijayawada", text: "Premium quality at factory prices. Great support team!", rating: 5 }
];

const brandKeywords = [
  "Chudidar Leggings", "Ankle Leggings", "Shimmer Leggings", "Cotton Leggings", 
  "Pattiyala Leggings", "Cigar Pants", "Yoga Shorts", "Mermaid Shaper",
  "Capri Leggings", "Viscose Leggings", "Comfort Leggings", "Printed Shorts"
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-rose-300/40 to-pink-400/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-60 -left-20 w-72 h-72 bg-gradient-to-br from-pink-300/40 to-orange-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-20 right-1/3 w-48 h-48 bg-gradient-to-br from-rose-200/50 to-pink-200/40 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm animate-bounce" style={{ animationDuration: "3s" }}>
                <Sparkles className="w-4 h-4" />
                Premium Manufacturer Since 2010
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                South India's
                <span className="block bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 bg-clip-text text-transparent"> Trusted Leggings Manufacturer</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Premium quality <strong>chudidar, ankle, shimmer, pattiyala & cotton leggings</strong> from Tirupur. 
                Wholesale, bulk orders & private labeling for retailers across South India.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild size="lg" className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:from-rose-600 hover:via-pink-600 hover:to-rose-700 text-white shadow-2xl shadow-rose-300/50 text-lg h-14 px-8 group">
                  <Link to="/products">
                    View Collection 
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-rose-300 text-rose-600 hover:bg-rose-50 h-14 px-8 text-lg">
                  <Link to="/contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Get Wholesale Quote
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 md:gap-10 mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg shadow-rose-100/30">
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">500+</p>
                  <p className="text-sm text-gray-500 mt-1">Retail Partners</p>
                </div>
                <div className="w-px h-14 bg-gradient-to-b from-transparent via-rose-200 to-transparent" />
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">25+</p>
                  <p className="text-sm text-gray-500 mt-1">Colors</p>
                </div>
                <div className="w-px h-14 bg-gradient-to-b from-transparent via-rose-200 to-transparent" />
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">12+</p>
                  <p className="text-sm text-gray-500 mt-1">Products</p>
                </div>
                <div className="w-px h-14 bg-gradient-to-b from-transparent via-rose-200 to-transparent hidden sm:block" />
                <div className="text-center hidden sm:block">
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">4</p>
                  <p className="text-sm text-gray-500 mt-1">States</p>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              {/* Decorative rings */}
              <div className="absolute -inset-4 bg-gradient-to-br from-rose-400/20 via-pink-400/20 to-orange-400/20 rounded-[2rem] rotate-3" />
              <div className="absolute -inset-8 bg-gradient-to-br from-rose-300/10 via-pink-300/10 to-orange-300/10 rounded-[2.5rem] -rotate-2" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-rose-300/40">
                <img 
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=900&fit=crop" 
                  alt="Premium Leggings Collection"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 via-transparent to-transparent" />
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl shadow-rose-200/50 animate-bounce" style={{ animationDuration: "4s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Quality Assured</p>
                    <p className="text-sm text-gray-500">Premium Fabric</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl shadow-rose-200/50 animate-bounce" style={{ animationDuration: "5s", animationDelay: "0.5s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <Factory className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Tirupur Made</p>
                    <p className="text-sm text-gray-500">Direct Factory</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Brand Keywords */}
      <section className="py-6 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 overflow-hidden">
        <div className="flex animate-scroll">
          {[...brandKeywords, ...brandKeywords, ...brandKeywords].map((keyword, i) => (
            <span key={i} className="flex items-center whitespace-nowrap px-8">
              <Sparkles className="w-4 h-4 text-rose-200 mr-3" />
              <span className="text-white font-semibold text-lg">{keyword}</span>
            </span>
          ))}
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}</style>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-600 rounded-full text-sm font-semibold mb-4">Our Products</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Premium <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">Collection</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our wide range of premium leggings designed for comfort, style, and durability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[3/4] shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-rose-900/80 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <h3 className="text-white font-bold text-lg md:text-xl group-hover:text-rose-200 transition-colors">{category.name}</h3>
                  <p className="text-white/70 text-sm mt-1 line-clamp-2 group-hover:text-white/90">{category.description}</p>
                  <div className="mt-3 flex items-center text-rose-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    View Products <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white shadow-xl shadow-rose-200/50 h-14 px-10 text-lg">
              <Link to="/products">
                Explore All Products <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-600 rounded-full text-sm font-semibold mb-4">Why Viwin?</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Trusted by <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">500+ Retailers</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Your trusted partner for premium quality leggings at wholesale prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Factory, title: "Direct Factory Prices", desc: "Manufactured in Tirupur with no middlemen. Get the best wholesale rates directly from the source.", color: "from-rose-500 to-pink-500" },
              { icon: ShieldCheck, title: "Premium Quality", desc: "Stringent quality control on every piece. Durable stitching and premium fabric that lasts.", color: "from-pink-500 to-rose-500" },
              { icon: Truck, title: "Fast Pan-India Delivery", desc: "Quick dispatch and reliable delivery network across all South Indian states.", color: "from-orange-500 to-rose-500" },
              { icon: Users, title: "Dedicated Dealer Support", desc: "Personal support for wholesale partners with marketing materials and catalogs.", color: "from-rose-500 to-orange-500" }
            ].map((item, i) => (
              <div key={i} className="group bg-white p-8 rounded-3xl shadow-xl shadow-rose-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - B2B Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-600 rounded-full text-sm font-semibold mb-4">Simple Process</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Start <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">Selling Today</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Easy 4-step process to become a Viwin dealer
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Contact Us", desc: "Call or fill our inquiry form with your business details", icon: MessageCircle },
              { step: "02", title: "Get Quote", desc: "Receive wholesale pricing based on your order quantity", icon: Package },
              { step: "03", title: "Place Order", desc: "Confirm your order with product selection and colors", icon: CheckCircle2 },
              { step: "04", title: "Receive Stock", desc: "Fast delivery to your doorstep across South India", icon: Truck }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-3xl border-2 border-rose-100 hover:border-rose-300 transition-all h-full">
                  <div className="text-5xl font-black bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent mb-4">{item.step}</div>
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 text-rose-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-rose-950 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-rose-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-rose-500/20 text-rose-300 rounded-full text-sm font-semibold mb-4">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Loved by <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">Retailers</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/90 mb-4 leading-relaxed">"{item.text}"</p>
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-rose-300 text-sm">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-600 rounded-full text-sm font-semibold mb-4">Coverage Area</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Serving <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">South India</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Wholesale and retail distribution network spanning 4 states
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region) => (
              <Link
                key={region.id}
                to={`/leggings-${region.id === "tamil-nadu" ? "manufacturer" : region.id === "andhra-pradesh" ? "supplier" : "wholesale"}-in-${region.slug}`}
                className="group bg-gradient-to-br from-gray-50 to-rose-50/50 hover:from-rose-50 hover:to-pink-50 p-6 rounded-2xl border-2 border-gray-100 hover:border-rose-200 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl">{region.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{region.description}</p>
                <div className="flex flex-wrap gap-2">
                  {region.cities.map((city) => (
                    <span key={city} className="text-xs bg-white group-hover:bg-rose-100 px-3 py-1.5 rounded-full text-gray-700 font-medium shadow-sm">
                      {city}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Start Your Partnership Today
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Ready to Grow Your Business?
          </h2>
          <p className="mt-6 text-rose-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Whether you're a retailer, boutique owner, or looking for bulk orders, 
            we offer competitive wholesale prices and reliable delivery across South India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button asChild size="lg" className="bg-white text-rose-600 hover:bg-rose-50 shadow-2xl h-14 px-10 text-lg font-semibold">
              <Link to="/contact">Request Wholesale Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white/40 text-white hover:bg-white/10 h-14 px-10 text-lg">
              <a href="tel:+919876543210">
                <Phone className="w-5 h-5 mr-2" />
                Call: +91 98765 43210
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
