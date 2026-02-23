import React, { useState } from "react";
import { Product } from "@/react-app/data/products";
import { Button } from "@/react-app/components/ui/button";
import { Link } from "react-router";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const colors = product.colors || [];
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(product.sizes?.[0] || null);

  const mainImage = colors[selectedColor]?.image || product.image;
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col">
      <div className="w-full flex items-center justify-center mb-3">
        <img src={mainImage} alt={product.name} className="w-48 h-48 object-cover rounded-lg" />
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="mt-3">
          <div className="grid grid-cols-5 gap-2">
            {(colors.slice(0, 5)).map((c, i) => (
              <button
                key={c.id}
                onClick={() => setSelectedColor(i)}
                title={c.name}
                className={`w-10 h-10 rounded-md flex items-center justify-center overflow-hidden focus:outline-none ${
                  i === selectedColor ? "ring-2 ring-yellow-400 ring-offset-2" : "border"
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}

            {colors.length > 5 && (
              <button
                onClick={() => setIsModalOpen(true)}
                title={`+${colors.length - 5} more`}
                className="w-10 h-10 rounded-md flex items-center justify-center bg-gray-100 border text-sm text-gray-700"
              >
                +{colors.length - 5}
              </button>
            )}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">Size</div>
            <div className="mt-2 flex items-center gap-2">
              {(product.sizes || []).map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-3 py-1 rounded-full border ${selectedSize === s ? "bg-gray-900 text-white" : "bg-white text-gray-700"}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="text-right">
            <div className="text-sm text-gray-500">Price</div>
            <div className="mt-1 font-semibold">₹{product.price}</div>
            <div className="mt-3">
              <Link to={`/product/${product.id}`}> 
                <Button variant="outline">View</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsModalOpen(false)} />
          <div className="relative z-50 bg-white rounded-2xl shadow-lg max-w-4xl w-full p-6 mx-4 overflow-auto">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold">{product.name} — Colors</h4>
              <button onClick={() => setIsModalOpen(false)} className="text-sm text-gray-500">Close</button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {(colors.length >= 6 ? colors : colors.slice(0, 6)).map((c, idx) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setSelectedColor(idx);
                    setIsModalOpen(false);
                  }}
                  className="flex flex-col items-center gap-2 p-2 rounded-lg border hover:shadow"
                >
                  <img src={c.image} alt={c.name} className="w-full h-36 object-cover rounded" />
                  <div className="text-sm text-gray-700">{c.name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
