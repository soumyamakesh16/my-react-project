import React from "react";
import { useParams, Link } from "react-router";
import { products } from "@/react-app/data/products";
import { useCart } from "@/react-app/context/CartContext";
import { Button } from "@/react-app/components/ui/button";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedColor, setSelectedColor] = React.useState(0);
  const [selectedSize, setSelectedSize] = React.useState<string | null>(product?.sizes?.[0] || null);

  if (!product) {
    return (
      <div className="min-h-screen p-8">
        <Link to="/products" className="text-rose-600">Back to products</Link>
        <h2 className="text-xl font-semibold mt-4">Product not found</h2>
      </div>
    );
  }

  const colors = product.colors || [];
  const mainImage = colors[selectedColor]?.image || product.image;

  function handleAdd() {
    addItem({ product, colorId: colors[selectedColor]?.id, colorName: colors[selectedColor]?.name, size: selectedSize, quantity: 1 });
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto p-6">
        <Link to="/products" className="text-rose-600">← Back to products</Link>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="">
            <img src={mainImage} alt={product.name} className="w-full h-[520px] object-cover rounded-lg" />

            <div className="mt-4 grid grid-cols-6 gap-3">
              {colors.map((c, i) => (
                <button key={c.id} onClick={() => setSelectedColor(i)} className={`h-20 rounded overflow-hidden border ${i === selectedColor ? "ring-2 ring-yellow-400" : ""}`}>
                  <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>

            <div className="mt-4">
              <div className="text-sm text-gray-500">Choose Color</div>
              <div className="mt-2 flex items-center gap-2">
                {colors.map((c, i) => (
                  <button key={c.id} onClick={() => setSelectedColor(i)} title={c.name} className={`w-10 h-10 rounded-md overflow-hidden ${i === selectedColor ? "ring-2 ring-yellow-400" : "border"}`}>
                    <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="text-sm text-gray-500">Size</div>
              <div className="mt-2 flex items-center gap-2">
                {(product.sizes || []).map((s) => (
                  <button key={s} onClick={() => setSelectedSize(s)} className={`px-4 py-2 rounded-full border ${selectedSize === s ? "bg-gray-900 text-white" : "bg-white"}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Price</div>
                <div className="text-2xl font-semibold">₹{product.price}</div>
              </div>
              <div>
                <Button onClick={handleAdd}>Add to cart</Button>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold">Features</h4>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                {product.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
