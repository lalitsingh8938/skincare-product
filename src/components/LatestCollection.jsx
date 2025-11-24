import React from "react";

export default function LatestCollection() {
  const items = [
    {
      id: 1,
      title: "Premium Hair Care",
      subtitle: "Professional salon quality",
      image:
        "flat-lay-natural-self-care-products-composition_23-2148990019.avif",
    },
    {
      id: 2,
      title: "Radiant Skin Care",
      subtitle: "Youthful glow every day",
      image:
        "unnamed (2).jpg",
    },
    {
      id: 3,
      title: "Bold Makeup",
      subtitle: "Express your true self",
      image:
        "1761801890173_content.png",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Discover Our Latest Collection
        </h2>
        <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
          Explore premium beauty products that transform your everyday routine.
        </p>
      </div>

      {/* Card Grid */}
      <div className="flex justify-center gap-10 flex-wrap px-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl w-80 h-[380px] shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer bg-white"
          >
            {/* Image */}
            <div className="h-60 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Text */}
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{item.subtitle}</p>

              <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full transition font-semibold shadow">
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
