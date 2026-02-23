import React from "react";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";

export default function WholesalePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold">Wholesale</h1>
        <p className="mt-4 text-gray-600">Contact our wholesale team for bulk orders, custom branding, and pricing.</p>
        <div className="mt-6 bg-rose-50 p-4 rounded">
          <h3 className="font-semibold">Wholesale Enquiries</h3>
          <p className="text-sm text-gray-700 mt-2">Email: wholesale@viwin.example | Phone: +91 98765 43210</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
