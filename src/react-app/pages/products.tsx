import React from 'react';
import { Link } from "react-router";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";
import { categories, products } from "@/react-app/data/products";
import ProductCard from "@/react-app/components/ProductCard";
import { ArrowRight } from "lucide-react";

export default function ProductsPage() {
  const [showAllProducts, setShowAllProducts] = React.useState(false);

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

        {!showAllProducts ? (
          <div>
            <h2 className="text-xl font-semibold mb-6">Browse by Category</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
              {categories.map((cat) => (
                <Link key={cat.id} to={`/category/${cat.slug}`} className="group">
                  <div className="bg-white rounded-2xl shadow hover:shadow-lg transition-shadow p-4">
                    <img src={cat.image} alt={cat.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-lg font-semibold group-hover:text-rose-600 transition-colors">{cat.name}</h3>
                    <p className="text-sm text-gray-600 mt-2">{cat.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            <button
              onClick={() => setShowAllProducts(true)}
              className="text-rose-600 font-semibold hover:underline"
            >
              View All Products
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={() => setShowAllProducts(false)}
              className="text-rose-600 font-semibold mb-6 hover:underline"
            >
              ← Back to Categories
            </button>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
