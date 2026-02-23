import React from "react";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold">About Viwin</h1>
        <p className="mt-4 text-gray-600">We are a leading leggings manufacturer focused on quality, comfort and color variety.</p>
        <div className="mt-6">
          <h3 className="font-semibold">Our Values</h3>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Quality Materials</li>
            <li>Sustainable Practices</li>
            <li>Fast Turnaround</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
