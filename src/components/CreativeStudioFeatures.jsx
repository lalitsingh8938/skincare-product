import React from "react";

export default function CreativeStudioFeatures() {
  const features = [
    { title: "Brand Hub", icon: "🎨" },
    { title: "Product Catalog", icon: "📦" },
    { title: "AI Generator", icon: "⚡" },
    { title: "Localization Engine", icon: "🌍" },
    { title: "Publishing & Calendar", icon: "📅" },
    { title: "Content Library", icon: "📚" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-700 text-center mb-12">
          A Whole Creative Studio Inside One Platform
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-white">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#1d0b28] to-[#12333d] border hover:border-indigo-500 hover:shadow-xl transition-all duration-300 rounded-2xl p-8 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center bg-white text-indigo-600 rounded-2xl text-3xl mb-5">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
