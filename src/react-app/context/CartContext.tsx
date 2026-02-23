import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/react-app/data/products";

export type CartItem = {
  id: string; // unique cart id (productId@colorId@size)
  productId: string;
  name: string;
  colorId?: string;
  colorName?: string;
  size?: string | null;
  price?: number;
  image?: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (p: { product: Product; colorId?: string; colorName?: string; size?: string | null; quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clear: () => void;
  total: number;
};

const STORAGE_KEY = "viwin_cart_v1";

const CartContext = createContext<CartContextValue | undefined>(undefined);

function makeCartId(productId: string, colorId?: string, size?: string | null) {
  return [productId, colorId || "default", size || "none"].join("@");
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const addItem = (p: { product: Product; colorId?: string; colorName?: string; size?: string | null; quantity?: number }) => {
    const qty = p.quantity || 1;
    const id = makeCartId(p.product.id, p.colorId, p.size);
    setItems((cur) => {
      const existing = cur.find((it) => it.id === id);
      if (existing) {
        return cur.map((it) => (it.id === id ? { ...it, quantity: it.quantity + qty } : it));
      }
      const newItem: CartItem = {
        id,
        productId: p.product.id,
        name: p.product.name,
        colorId: p.colorId,
        colorName: p.colorName,
        size: p.size || null,
        price: p.product.price,
        image: p.product.image,
        quantity: qty,
      };
      return [...cur, newItem];
    });
  };

  const removeItem = (id: string) => setItems((cur) => cur.filter((it) => it.id !== id));
  const updateQuantity = (id: string, qty: number) =>
    setItems((cur) => cur.map((it) => (it.id === id ? { ...it, quantity: Math.max(0, qty) } : it)).filter((it) => it.quantity > 0));
  const clear = () => setItems([]);

  const total = useMemo(() => items.reduce((s, it) => s + (it.price || 0) * it.quantity, 0), [items]);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clear, total }}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
