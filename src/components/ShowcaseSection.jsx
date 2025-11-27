import React from "react";

export default function ShowcaseSection() {
  const items = [
    "/WhatsApp Image 2025-11-17 at 14.42.02_ffea8ee0.jpg",
    "/Image (4).png",
    "/1762321382550_content.png",
    "/WhatsApp Image 2025-11-17 at 14.42.02_d99adf73.jpg",
  ];

  return (
    <section className="py-20 bg-[#F2F0E4] to-[#00646C]">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-4">
        Localise Content for Global Audiences
      </h2>

      {/* Subtitle */}
      <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg mb-14">
        Recreate assets across languages and regions while maintaining brand
        consistency. Support for cultural nuance, tone adaptation, and market
        sensitivity.
      </p>

      {/* Image Showcase */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {items.map((src, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <img
              src={src}
              alt={`Showcase ${i + 1}`}
              className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
