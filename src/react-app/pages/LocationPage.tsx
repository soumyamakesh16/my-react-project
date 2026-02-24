import { Link } from "react-router";
import { MapPin, CheckCircle2, ArrowRight, Phone, Factory, Truck, Award, Package, Sparkles } from "lucide-react";
import { Button } from "@/react-app/components/ui/button";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";
import { categories } from "@/react-app/data/products";
import type { LocationData } from "@/react-app/data/locations";

interface LocationPageProps {
  data: LocationData;
}

export default function LocationPage({ data }: LocationPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-rose-300/30 to-pink-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-72 h-72 bg-gradient-to-br from-pink-300/30 to-orange-300/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-rose-600 mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">{data.state}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            {data.heroTitle}
            <span className="block bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              {data.heroSubtitle}
            </span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
            {data.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button asChild size="lg" className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white shadow-xl h-14 px-8">
              <Link to="/contact">
                Get Wholesale Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-rose-300 text-rose-600 hover:bg-rose-50 h-14 px-8">
              <a href="tel:+919876543210">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Cities Coverage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-600 rounded-full text-sm font-semibold mb-4">Coverage Area</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              We Deliver Across <span className="text-rose-500">{data.state}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.cities.map((city) => (
              <div
                key={city.slug}
                className="group bg-gradient-to-br from-gray-50 to-rose-50/50 p-6 rounded-2xl border-2 border-gray-100 hover:border-rose-200 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-2">{city.name}</h3>
                <p className="text-gray-600 text-sm">{city.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-600 rounded-full text-sm font-semibold mb-4">Why Viwin?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Partner in <span className="text-rose-500">{data.state}</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We understand the {data.state} market and provide tailored solutions for local retailers and wholesalers.
              </p>

              <div className="space-y-4">
                {data.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Factory, title: "Direct Factory", value: "Tirupur Made" },
                { icon: Truck, title: "Fast Delivery", value: "2-4 Days" },
                { icon: Award, title: "Quality", value: "Premium Grade" },
                { icon: Package, title: "MOQ", value: "Flexible" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-7 h-7 text-rose-600" />
                  </div>
                  <p className="text-gray-500 text-sm">{item.title}</p>
                  <p className="font-bold text-gray-900 text-lg">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Available */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-600 rounded-full text-sm font-semibold mb-4">Our Products</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Available in <span className="text-rose-500">{data.state}</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Complete range of premium leggings available for wholesale orders
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.slice(0, 8).map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-square"
              >
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="border-rose-200 text-rose-600 hover:bg-rose-50">
              <Link to="/products">
                View All Products <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Keywords Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-rose-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Popular Searches in <span className="text-rose-500">{data.state}</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {data.keywords.map((keyword, i) => (
              <span 
                key={i} 
                className="px-4 py-2 bg-white rounded-full text-gray-700 text-sm font-medium shadow-sm border border-gray-100 hover:border-rose-200 hover:text-rose-600 transition-colors"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            {data.state} Retailers Welcome
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Start Your Partnership Today
          </h2>
          <p className="mt-4 text-rose-100 text-lg max-w-2xl mx-auto">
            Join 500+ retailers across South India who trust Viwin Leggings for quality products and reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" className="bg-white text-rose-600 hover:bg-rose-50 shadow-xl h-14 px-10 font-semibold">
              <Link to="/contact">Request Wholesale Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white/40 text-white hover:bg-white/10 h-14 px-10">
              <a href="tel:+919876543210">
                <Phone className="w-5 h-5 mr-2" />
                +91 98765 43210
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
