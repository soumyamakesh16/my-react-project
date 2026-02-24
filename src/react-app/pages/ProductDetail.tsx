import React from "react";
import { useParams, Link } from "react-router";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";
import { products } from "@/react-app/data/products";

import { Button } from "@/react-app/components/ui/button";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [selectedColor, setSelectedColor] = React.useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-12">
          <Link to="/products" className="text-rose-600">← Back to products</Link>
          <h2 className="text-xl font-semibold mt-4">Product not found</h2>
        </main>
        <Footer />
      </div>
    );
  }

  const colors = product.colors || [];
  const mainImage = colors[selectedColor]?.image || product.image;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-start gap-10">
          <div className="w-1/2">
            <img src={mainImage} alt={product.name} className="w-full h-auto object-cover rounded-2xl shadow" />
            <div className="mt-4 flex items-center gap-3">
              {colors.slice(0, 6).map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedColor(i)}
                  title={c.name}
                  className={`w-10 h-10 rounded-md border ${i === selectedColor ? "ring-2 ring-rose-400" : ""}`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <div className="mt-4">
              <div className="text-sm text-gray-500">Price</div>
              <div className="text-2xl font-semibold">₹{product.price}</div>
            </div>

            <div className="mt-6">
              <div className="text-sm text-gray-500">Available Colors</div>
              <div className="mt-3 grid grid-cols-6 gap-3 max-w-xs">
                {colors.map((c, i) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedColor(i)}
                    className={`w-12 h-12 rounded-md border ${i === selectedColor ? "ring-2 ring-rose-400" : ""}`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Button size="lg">Add to Cart</Button>
              <Link to="/products" className="text-rose-600 font-medium">Back to products</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
