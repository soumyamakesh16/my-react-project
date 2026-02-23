import React from "react";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-4 text-gray-600">Get in touch with us for orders, custom requests, and support.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-rose-50 rounded">
            <h3 className="font-semibold">Sales</h3>
            <p className="text-sm mt-2">sales@viwin.example</p>
            <p className="text-sm">+91 98765 43210</p>
          </div>
          <div className="p-4 bg-rose-50 rounded">
            <h3 className="font-semibold">Support</h3>
            <p className="text-sm mt-2">support@viwin.example</p>
            <p className="text-sm">+91 98765 43211</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
