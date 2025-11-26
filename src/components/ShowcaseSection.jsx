import React from "react";

export default function ShowcaseSection() {
  const items = [
    "/WhatsApp Image 2025-11-17 at 14.42.02_ffea8ee0.jpg",
    "/Image (4).png",
    "/1762321382550_content.png",
    "/WhatsApp Image 2025-11-17 at 14.42.02_d99adf73.jpg",
    
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">
        Images & Videos Created
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((src, i) => (
          <img
            key={i}
            src={src}
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
        ))}
      </div>
    </section>
  );
}
