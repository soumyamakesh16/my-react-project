import React from "react";
import { Link } from "react-router";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";
import { categories } from "@/react-app/data/products";
import { ArrowRight } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          <Link to="/" className="text-rose-600 font-medium flex items-center">
            Back Home <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <h2 className="text-xl font-semibold mb-6">Browse by Category</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link key={cat.id} to={`/category/${cat.slug}`}>
              <div className="bg-white rounded-2xl shadow hover:shadow-lg transition-shadow p-4 cursor-pointer h-full">
                <img src={cat.image} alt={cat.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold hover:text-rose-600 transition-colors">{cat.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
