import React from "react";
import { useParams, Link } from "react-router";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";
import ProductCard from "@/react-app/components/ProductCard";
import { categories, products } from "@/react-app/data/products";
import { ArrowRight } from "lucide-react";

export default function CategoryProducts() {
  const { slug } = useParams();
  const category = categories.find((c) => c.slug === slug);
  const categoryProducts = category ? products.filter((p) => p.category === category.id) : [];

  if (!category) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-12">
          <Link to="/products" className="text-rose-600">← Back to products</Link>
          <h2 className="text-xl font-semibold mt-4">Category not found</h2>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
            <p className="mt-2 text-gray-600">{category.description}</p>
            <p className="mt-1 text-sm text-gray-500">({categoryProducts.length} product{categoryProducts.length !== 1 ? 's' : ''})</p>
          </div>
          <Link to="/products" className="text-rose-600 font-medium flex items-center">
            Back <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categoryProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {categoryProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No products found in this category.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
