import React from "react";

const steps = [
  "Upload your brand details",
  "Choose your template",
  "AI generates your landing page",
  "Publish and share instantly",
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>

      <div className="max-w-4xl mx-auto grid gap-6">
        {steps.map((s, i) => (
          <div
            key={i}
            className="p-5 bg-white border rounded-xl shadow-sm flex items-center gap-4"
          >
            <span className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
              {i + 1}
            </span>
            <p className="font-medium">{s}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
